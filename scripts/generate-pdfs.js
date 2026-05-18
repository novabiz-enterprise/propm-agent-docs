const fs = require('fs');
const fsp = require('fs/promises');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');
const { PDFDocument } = require('pdf-lib');

const siteConfig = require('../docusaurus.config.js');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const outputDir = path.join(buildDir, 'pdf');
const tempDir = path.join(buildDir, '.pdf-pages');
const defaultLocale = siteConfig.i18n.defaultLocale;
const locales = siteConfig.i18n.locales;
const baseUrl = normalizeUrlPath(siteConfig.baseUrl || '/');
const docImageSelector = 'article .markdown img, article .theme-doc-markdown img';

const localeLabels = {
  en: 'English',
  fr: 'Francais',
  de: 'Deutsch',
  hi: 'Hindi',
  es: 'Espanol',
  ar: 'Arabic',
};

const printCss = `
  @page { size: A4; margin: 14mm 12mm 16mm; }
  html, body, #__docusaurus, .main-wrapper { background: #fff !important; color: #111827 !important; }
  body::before, body::after,
  .navbar, .navbar-sidebar, .theme-doc-sidebar-container, .theme-doc-toc-desktop,
  .theme-doc-breadcrumbs, .pagination-nav, .footer, article::before { display: none !important; }
  .main-wrapper, .theme-layout-main, main, article, .container, .row, .col { display: block !important; width: 100% !important; max-width: none !important; min-width: 0 !important; margin: 0 !important; padding: 0 !important; }
  article { overflow: visible !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; background: #fff !important; }
  article header { border-bottom: 1px solid #d1d5db !important; margin-bottom: 18px !important; padding-bottom: 12px !important; }
  article header h1 { max-width: none !important; font-size: 30px !important; line-height: 1.15 !important; color: #111827 !important; }
  .markdown h2 { margin-top: 24px !important; break-after: avoid; color: #111827 !important; }
  .markdown h2::before { display: none !important; }
  .markdown h3, .markdown h4 { break-after: avoid; color: #111827 !important; }
  .markdown p, .markdown li, .markdown td, .markdown th { color: #111827 !important; }
  .markdown img { max-width: 100% !important; max-height: 220mm !important; height: auto !important; object-fit: contain !important; margin: 10px auto 14px !important; box-shadow: none !important; border: 1px solid #d1d5db !important; page-break-inside: avoid; break-inside: avoid; }
  .markdown table { width: 100% !important; font-size: 11px !important; break-inside: auto; }
  .markdown tr, .markdown img, .markdown pre, .markdown blockquote, .theme-code-block { break-inside: avoid; }
  a { color: #1d4ed8 !important; text-decoration: none !important; }
  html[dir='rtl'], html[dir='rtl'] body, html[lang='ar'], html[lang='ar'] body { direction: rtl !important; text-align: right !important; }
  html[dir='rtl'] .markdown ul, html[dir='rtl'] .markdown ol, html[lang='ar'] .markdown ul, html[lang='ar'] .markdown ol { padding-left: 0 !important; padding-right: 18px !important; }
`;

async function main() {
  await assertBuildExists();
  await fsp.rm(outputDir, { recursive: true, force: true });
  await fsp.mkdir(outputDir, { recursive: true });
  await fsp.rm(tempDir, { recursive: true, force: true });
  await fsp.mkdir(tempDir, { recursive: true });

  const server = await createStaticServer(buildDir, baseUrl);
  const origin = `http://127.0.0.1:${server.address().port}`;

  let browser;
  try {
    browser = await chromium.launch({ headless: true });

    for (const locale of locales) {
      const docs = await getDocsForLocale(locale);
      if (docs.length === 0) {
        console.warn(`[pdf] No docs found for locale ${locale}`);
        continue;
      }

      const localeTempDir = path.join(tempDir, locale);
      await fsp.mkdir(localeTempDir, { recursive: true });
      const pagePdfPaths = [];

      console.log(`[pdf] Generating ${locale} from ${docs.length} docs`);
      for (let index = 0; index < docs.length; index += 1) {
        const doc = docs[index];
        const url = `${origin}${getDocUrlPath(locale, doc.slug)}`;
        const pdfPath = path.join(localeTempDir, `${String(index + 1).padStart(2, '0')}-${safeFileName(doc.id)}.pdf`);
        await printDocPage(browser, url, pdfPath, locale, doc.title);
        pagePdfPaths.push(pdfPath);
      }

      const outputPath = path.join(outputDir, `propm-agent-docs-${locale}.pdf`);
      await mergePdfs(pagePdfPaths, outputPath);
      console.log(`[pdf] Wrote ${path.relative(rootDir, outputPath)}`);
    }
  } finally {
    if (browser) {
      await browser.close();
    }
    await new Promise((resolve) => server.close(resolve));
    await fsp.rm(tempDir, { recursive: true, force: true });
  }
}

async function assertBuildExists() {
  if (!fs.existsSync(buildDir)) {
    throw new Error('The build directory does not exist. Run npm run build before npm run pdf, or run npm run build:pdf.');
  }
}

async function getDocsForLocale(locale) {
  const docsRoot = getDocsRoot(locale);
  const entries = await fsp.readdir(docsRoot, { withFileTypes: true });
  const docsById = new Map();

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === 'AGENTS.md') {
      continue;
    }

    const filePath = path.join(docsRoot, entry.name);
    const id = path.basename(entry.name, '.md');
    const content = await fsp.readFile(filePath, 'utf8');
    const frontMatter = parseFrontMatter(content);
    const slug = normalizeDocSlug(frontMatter.slug || `/${id}`);
    const title = frontMatter.title || id;
    docsById.set(id, { id, title, slug, filePath });
  }

  const orderedIds = getOrderedDocIds(locale);
  const orderedDocs = [];
  const seen = new Set();

  for (const id of orderedIds) {
    if (docsById.has(id) && !seen.has(id)) {
      orderedDocs.push(docsById.get(id));
      seen.add(id);
    }
  }

  const remainingDocs = [...docsById.values()]
    .filter((doc) => !seen.has(doc.id))
    .sort((a, b) => a.id.localeCompare(b.id));

  return [...orderedDocs, ...remainingDocs];
}

function getDocsRoot(locale) {
  if (locale === defaultLocale) {
    return path.join(rootDir, 'docs');
  }
  return path.join(rootDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
}

function getOrderedDocIds(locale) {
  const sidebarPaths = [
    path.join(rootDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current', 'sidebars.js'),
    path.join(rootDir, `sidebars.${locale}.js`),
    path.join(rootDir, 'sidebars.js'),
  ];

  for (const sidebarPath of sidebarPaths) {
    if (!fs.existsSync(sidebarPath)) {
      continue;
    }

    delete require.cache[require.resolve(sidebarPath)];
    const sidebarConfig = require(sidebarPath);
    const firstSidebar = sidebarConfig[Object.keys(sidebarConfig)[0]] || [];
    const ids = flattenSidebarItems(firstSidebar);
    if (ids.length > 0) {
      return ids;
    }
  }

  return [];
}

function flattenSidebarItems(items) {
  const ids = [];

  for (const item of items) {
    if (typeof item === 'string') {
      ids.push(item);
      continue;
    }

    if (!item || typeof item !== 'object') {
      continue;
    }

    if (item.type === 'doc' && item.id) {
      ids.push(item.id);
    }

    if (Array.isArray(item.items)) {
      ids.push(...flattenSidebarItems(item.items));
    }
  }

  return ids;
}

async function printDocPage(browser, url, pdfPath, locale, title) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 } });
  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    if (!response || !response.ok()) {
      const status = response ? response.status() : 'no response';
      throw new Error(`Unable to load ${url}: ${status}`);
    }

    await page.emulateMedia({ media: 'print' });
    await page.addStyleTag({ content: printCss });
    await waitForDocImages(page, url);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `<div style="font-size:8px;color:#64748b;width:100%;padding:0 12mm;">ProPM Agent - ${escapeHtml(localeLabels[locale] || locale)}</div>`,
      footerTemplate: `<div style="font-size:8px;color:#64748b;width:100%;padding:0 12mm;display:flex;justify-content:space-between;"><span>${escapeHtml(title)}</span><span><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`,
      margin: { top: '16mm', right: '12mm', bottom: '18mm', left: '12mm' },
      preferCSSPageSize: false,
    });
  } finally {
    await page.close();
  }
}

async function waitForDocImages(page, url) {
  await page.evaluate((selector) => {
    for (const img of document.querySelectorAll(selector)) {
      img.loading = 'eager';
      img.decoding = 'sync';
      if (img.src) {
        img.src = img.src;
      }
    }
  }, docImageSelector);

  await page.evaluate(async (selector) => {
    const images = Array.from(document.querySelectorAll(selector));
    for (const img of images) {
      img.scrollIntoView({ block: 'center', inline: 'nearest' });
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }
    window.scrollTo(0, 0);
  }, docImageSelector);

  await page.waitForFunction(
    (selector) => Array.from(document.querySelectorAll(selector)).every((img) => img.complete && img.naturalWidth > 0),
    docImageSelector,
    { timeout: 60000 },
  );

  const failures = await page.evaluate(async (selector) => {
    const images = Array.from(document.querySelectorAll(selector));
    const failed = [];

    await Promise.all(images.map(async (img) => {
      try {
        if (typeof img.decode === 'function') {
          await img.decode();
        }
      } catch {
        // The complete/naturalWidth check below is the final source of truth.
      }

      if (!img.complete || img.naturalWidth === 0) {
        failed.push({ alt: img.alt || '', src: img.currentSrc || img.src || '' });
      }
    }));

    return failed;
  }, docImageSelector);

  if (failures.length > 0) {
    throw new Error(`Images failed to load before PDF for ${url}: ${JSON.stringify(failures)}`);
  }
}

async function mergePdfs(pdfPaths, outputPath) {
  const merged = await PDFDocument.create();

  for (const pdfPath of pdfPaths) {
    const sourceBytes = await fsp.readFile(pdfPath);
    const source = await PDFDocument.load(sourceBytes);
    const pages = await merged.copyPages(source, source.getPageIndices());
    for (const page of pages) {
      merged.addPage(page);
    }
  }

  const mergedBytes = await merged.save();
  await fsp.writeFile(outputPath, mergedBytes);
}

function parseFrontMatter(content) {
  if (!content.startsWith('---')) {
    return {};
  }

  const lines = content.split(/\r?\n/);
  const data = {};

  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.trim() === '---') {
      break;
    }

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) {
      data[match[1]] = stripYamlScalar(match[2]);
    }
  }

  return data;
}

function stripYamlScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function normalizeDocSlug(slug) {
  const normalized = slug.trim() || '/';
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

function getDocUrlPath(locale, slug) {
  const localePrefix = locale === defaultLocale ? '' : locale;
  const docPath = slug === '/' ? '' : slug;
  return joinUrlPath(baseUrl, localePrefix, docPath);
}

function normalizeUrlPath(value) {
  const withLeading = value.startsWith('/') ? value : `/${value}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

function joinUrlPath(...segments) {
  const joined = segments
    .filter((segment) => segment !== undefined && segment !== null && String(segment).length > 0)
    .map((segment) => String(segment).replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/');
  return `/${joined}`;
}

function safeFileName(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function createStaticServer(staticRoot, mountPath) {
  const normalizedMountPath = normalizeUrlPath(mountPath);

  const server = http.createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url, 'http://127.0.0.1');
      let requestPath = decodeURIComponent(requestUrl.pathname);
      if (requestPath === normalizedMountPath.slice(0, -1)) {
        requestPath = normalizedMountPath;
      }

      if (!requestPath.startsWith(normalizedMountPath)) {
        send(response, 404, 'Not found');
        return;
      }

      let relativePath = requestPath.slice(normalizedMountPath.length);
      if (relativePath === '' || relativePath.endsWith('/')) {
        relativePath = path.join(relativePath, 'index.html');
      } else if (!path.extname(relativePath)) {
        relativePath = path.join(relativePath, 'index.html');
      }

      const filePath = path.normalize(path.join(staticRoot, relativePath));
      if (!filePath.startsWith(staticRoot)) {
        send(response, 403, 'Forbidden');
        return;
      }

      const content = await fsp.readFile(filePath);
      response.writeHead(200, { 'Content-Type': getContentType(filePath) });
      response.end(content);
    } catch (error) {
      if (error.code === 'ENOENT') {
        send(response, 404, 'Not found');
        return;
      }
      send(response, 500, error.message);
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function send(response, statusCode, body) {
  response.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end(body);
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  };
  return types[ext] || 'application/octet-stream';
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
