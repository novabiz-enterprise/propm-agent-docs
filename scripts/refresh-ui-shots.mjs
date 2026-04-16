import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsRoot = path.resolve(__dirname, '..');
const webRoot = path.resolve(docsRoot, '..', 'repo', 'web');
const liveDir = path.join(webRoot, '.playwright', 'live');
const requireFromWeb = createRequire(path.join(webRoot, 'package.json'));
const { chromium } = requireFromWeb('playwright');

const locales = (process.env.SCREENSHOT_LOCALES || 'en,fr,de,hi,es').split(',').map((value) => value.trim()).filter(Boolean);
const outputRoot = path.join(docsRoot, 'static', 'img', 'screenshots', 'localized');
const legacyAliases = {
  en: {
    '01-dashboard': '01-dashboard.png',
    '01-navigation-topbar': '01-navigation-topbar.png',
    '02-portfolio-command-center': '02-portfolio-command-center.png',
    '02-portfolio-cohort-editor': '02-portfolio-cohort-editor.png',
    '03-workspace-overview': '03-workspace-agent-chat.png',
    '03-workspace-structured-output': '03-workspace-structured-output.png',
    '04-agents': '04-agents.png',
    '04-custom-agent-create': '04-custom-agent-create.png',
    '05-knowledge': '05-knowledge.png',
    '05-knowledge-search-results': '05-knowledge-search-results.png',
    '06-pm-doc-editor': '06-pm-doc-editor.png',
    '07-projects-directory': '07-projects-directory.png',
    '07-project-create-modal': '07-project-create-modal.png',
    '08-reports-overview': '08-reports-overview.png',
    '09-ai-log-runs': '09-ai-log-runs.png',
    '11-access-control': '11-access-control.png',
    '11-custom-role-editor': '11-custom-role-editor.png',
    '12-agent-configuration': '12-agent-configuration.png',
    '13-document-categories': '13-document-categories.png',
    '14-governance-policies': '14-governance-policies.png',
    '14-connectors-and-destinations': '14-connectors-and-destinations.png',
    '15-workspace-signals': '15-workspace-signals.png',
    '16-notification-drafts': '16-notification-drafts.png',
    '17-actions-approvals': '17-actions-approvals.png',
    '17-action-queue': '17-action-queue.png',
    '18-platform-administration-overview': '18-platform-administration-overview.png',
  },
  fr: {
    '01-dashboard': 'fr-01-tableau-de-bord.png',
    '07-projects-directory': 'fr-02-projets.png',
    '03-workspace-overview': 'fr-03-espace-travail.png',
    '15-workspace-signals': 'fr-04-signaux.png',
    '17-actions-approvals': 'fr-05-actions-approbations.png',
    '05-knowledge': 'fr-06-connaissance.png',
    '04-agents': 'fr-07-agents.png',
    '08-reports-overview': 'fr-08-rapports-artefacts.png',
    '09-ai-log-runs': 'fr-09-journal-ia.png',
    '02-portfolio-command-center': 'fr-10-portefeuille.png',
    '18-platform-administration-overview': 'fr-11-administration-plateforme.png',
  },
};

const shotFilter = new Set((process.env.SCREENSHOT_IDS || '').split(',').map((value) => value.trim()).filter(Boolean));
const shots = [
  { id: '01-dashboard', path: '/dashboard/', ready: '[data-testid="dashboard"]' },
  { id: '01-navigation-topbar', path: '/dashboard/', ready: '[data-testid="dashboard"]', options: { clip: { x: 0, y: 0, width: 1440, height: 360 } } },
  { id: '02-portfolio-command-center', path: '/portfolio-command-center/', ready: '[data-testid="portfolio-page"]' },
  { id: '02-portfolio-cohort-editor', path: '/portfolio-command-center/', ready: '[data-testid="portfolio-page"]', target: '[data-testid="portfolio-cohort-panel"]' },
  { id: '03-workspace-overview', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]' },
  { id: '03-workspace-structured-output', path: '/agents?projectId=demo-hotel-001', ready: '[data-testid="agents-selected-agent-summary"], [data-testid="agents-console"]', before: async (page) => { const input = page.locator('[data-testid="agent-chat-input"]').first(); if (await input.isVisible().catch(() => false)) { await input.fill(PROMPT); const send = page.locator('[data-testid="agent-chat-send"]').first(); if (await send.isVisible().catch(() => false)) await send.click(); await page.locator('[data-testid="structured-output-card"]').first().waitFor({ state: 'visible', timeout: 180000 }).catch(() => {}); } }, target: '[data-testid="structured-output-card"]' },
  { id: '04-agents', path: '/agents?projectId=demo-hotel-001', ready: '[data-testid="agents-page"], [data-testid="agents-selected-agent-summary"]' },
  { id: '04-custom-agent-create', path: '/agents?projectId=demo-hotel-001', ready: '[data-testid="agents-selected-agent-summary"], [data-testid="agents-create-dialog"]', before: async (page) => { const trigger = page.getByRole('button', { name: /create/i }).first(); if (await trigger.isVisible().catch(() => false)) await trigger.click(); }, target: '[data-testid="agents-create-dialog"]' },
  { id: '05-knowledge', path: '/documents?projectId=demo-hotel-001', ready: '[data-testid="knowledge-page"], [data-testid="knowledge-page-real"]' },
  { id: '05-knowledge-search-results', path: '/documents?projectId=demo-hotel-001', ready: '[data-testid="knowledge-page"], [data-testid="knowledge-page-real"]', before: async (page) => { const input = page.locator('[data-testid="knowledge-search-input"], [data-testid="knowledge-filter-input"]').first(); if (await input.isVisible().catch(() => false)) { await input.fill('risk'); await input.press('Enter').catch(() => {}); const button = page.locator('[data-testid="knowledge-search-button"]').first(); if (await button.isVisible().catch(() => false)) await button.click().catch(() => {}); } }, target: '[data-testid="knowledge-search-panel"], [data-testid="knowledge-documents-table"]' },
  { id: '06-pm-doc-editor', path: '/reports?projectId=demo-hotel-001', ready: '[data-testid="pm-docs-page"], main', before: async (page) => { const edit = page.locator('[data-testid^="reports-edit-"]').first(); if (await edit.isVisible().catch(() => false)) { await edit.click(); await page.locator('[data-testid="pm-doc-editor"]').first().waitFor({ state: 'visible', timeout: 120000 }).catch(() => {}); } }, target: '[data-testid="pm-doc-editor"]' },
  { id: '07-projects-directory', path: '/projects', ready: '[data-testid="projects-page"]' },
  { id: '07-project-create-modal', path: '/projects', ready: '[data-testid="projects-page"]', before: async (page) => { const trigger = page.getByRole('button', { name: /create/i }).first(); if (await trigger.isVisible().catch(() => false)) await trigger.click(); }, target: '[data-testid="projects-create-dialog"]' },
  { id: '11-access-control', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /access/i), target: '[data-testid="project-access-control"]' },
  { id: '11-custom-role-editor', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => { await openWorkspaceTab(page, /access/i); const expand = page.locator('[data-testid^="access-role-expand-"]').first(); if (await expand.isVisible().catch(() => false)) { await expand.click().catch(() => {}); await page.waitForTimeout(500); } }, target: '[data-testid^="access-role-row-"]' },
  { id: '12-agent-configuration', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /agent/i), target: '[data-testid="project-agent-config"]' },
  { id: '13-document-categories', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /document/i), target: '[data-testid="project-doc-categories"]' },
  { id: '14-governance-policies', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /governance/i), target: '[data-testid="project-governance-admin"]' },
  { id: '14-connectors-and-destinations', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /governance/i), target: '[data-testid="project-governance-section-connectors"], [data-testid="project-governance-section-destinations"]' },
  { id: '15-workspace-signals', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => await openWorkspacePanelLink(page, 'workspace-help-topic-workspace-operationalTransparency', '[data-testid="project-signals-panel"]'), target: '[data-testid="project-signals-panel"]' },
  { id: '16-notification-drafts', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => await openWorkspacePanelLink(page, 'workspace-help-topic-workspace-operationalTransparency', '[data-testid="project-signals-drafts-section"]'), target: '[data-testid="project-signals-drafts-section"]' },
  { id: '17-actions-approvals', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => openWorkspaceTab(page, /actions/i), target: '[data-testid="project-actions-panel"]' },
  { id: '17-action-queue', path: '/projects/workspace/?projectId=demo-hotel-001', ready: '[data-testid="workspace-page"]', before: async (page) => { await openWorkspaceTab(page, /actions/i); const summary = page.locator('[data-testid^="project-action-card-"] summary').first(); if (await summary.isVisible().catch(() => false)) { await summary.click().catch(() => {}); await page.waitForTimeout(500); } }, target: '[data-testid^="project-action-card-"]' },
  { id: '18-platform-administration-overview', path: '/platform-administration/', ready: '[data-testid="platform-administration-page"]' },
  { id: '08-reports-overview', path: '/reports?projectId=demo-hotel-001', ready: '[data-testid="reports-page"], main' },
  { id: '09-ai-log-runs', path: '/ai-log?projectId=demo-hotel-001', ready: '[data-testid="ai-log-page"]' },
];

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, 'utf8'));
}

async function findLiveFiles() {
  const names = await fs.readdir(liveDir);
    const latest = (prefix) => names.filter((name) => name.startsWith(prefix) && name.endsWith('.json')).sort().at(-1);
  const sessionName = names.includes('session.json') ? 'session.json' : latest('session.');
  const storageName = names.includes('storage-state.json') ? 'storage-state.json' : latest('storage-state.');
  const sessionStorageName = names.includes('session-storage.json') ? 'session-storage.json' : latest('session-storage.');
  if (!sessionName || !storageName || !sessionStorageName) throw new Error('Missing live session files in repo/web/.playwright/live');
  return {
    sessionPath: path.join(liveDir, sessionName),
    storagePath: path.join(liveDir, storageName),
    sessionStoragePath: path.join(liveDir, sessionStorageName),
  };
}

async function buildContextOptions() {
  const files = await findLiveFiles();
  const session = await readJson(files.sessionPath);
  const sessionStorage = await readJson(files.sessionStoragePath);
  return {
    baseUrl: new URL(session.baseUrl || session.startUrl).origin,
    storageState: files.storagePath,
    sessionStorage,
  };
}

async function restoreSessionStorage(page, sessionStorage) {
  await page.addInitScript((payload) => {
    window.localStorage.setItem('propm-ui-locale', payload.locale);
    if (payload.sessionStorage?.entries) {
      for (const [key, value] of Object.entries(payload.sessionStorage.entries)) {
        window.sessionStorage.setItem(key, value);
      }
    }
  }, sessionStorage);
}

function escapeRegex(value) {
  return String(value || '').replace(/[|\{}()[\]^$+*?.]/g, '\$&');
}

function readExpectedEmail(sessionStorage) {
  try {
    const raw = String(sessionStorage?.entries?.['propm.current-user.v1'] || '').trim();
    if (!raw) return '';
    const parsed = JSON.parse(raw);
    return typeof parsed?.email === 'string' ? parsed.email.trim() : '';
  } catch {
    return '';
  }
}

async function recoverSignIn(page, sessionStorage) {
  await page.waitForTimeout(1500);
  const button = page.getByRole('button', { name: /sign in with microsoft/i }).first();
  const fallback = page.getByText(/sign in with microsoft/i).first();
  const trigger = await button.isVisible().catch(() => false) ? button : ((await fallback.isVisible().catch(() => false)) ? fallback : null);
  if (!trigger) return;
  const expectedEmail = readExpectedEmail(sessionStorage);
  await trigger.click().catch(() => {});
  await page.waitForTimeout(5000);
  if (/login\.microsoftonline\.com/i.test(page.url()) && expectedEmail) {
    const account = page.getByText(new RegExp(escapeRegex(expectedEmail), 'i')).first();
    if (await account.isVisible().catch(() => false)) {
      await account.click().catch(() => {});
      await page.waitForTimeout(5000);
    }
  }
  const continueButton = page.getByRole('button', { name: /yes|continue/i }).first();
  if (await continueButton.isVisible().catch(() => false)) {
    await continueButton.click().catch(() => {});
    await page.waitForTimeout(5000);
  }
}

async function waitForReady(page, selector) {
  for (const candidate of selector.split(',').map((value) => value.trim()).filter(Boolean)) {
    try {
      await page.locator(candidate).first().waitFor({ state: 'visible', timeout: 15000 });
      return candidate;
    } catch {}
  }
  const body = (await page.locator('body').innerText().catch(() => '')).slice(0, 800);
  throw new Error(`Ready selector not found: ${selector} | url=${page.url()} | body=${body}`);
}

async function screenshotTarget(page, selector, file, options = {}) {
  const candidates = selector ? selector.split(',').map((value) => value.trim()).filter(Boolean) : [];
  for (const candidate of candidates) {
    const locator = page.locator(candidate).first();
    if (await locator.isVisible().catch(() => false)) {
      await locator.screenshot({ path: file });
      return;
    }
  }
  await page.screenshot({ path: file, fullPage: false, ...options });
}

async function openWorkspaceTab(page, namePattern) {
  const tab = page.getByRole('tab', { name: namePattern }).first();
  if (await tab.isVisible().catch(() => false)) {
    await tab.click();
    await page.waitForTimeout(500);
  }
}

async function openWorkspacePanelLink(page, helpTestId, targetSelector) {
  const openCandidates = [
    page.locator('[data-testid="workspace-operational-signals-link"]'),
    page.locator('[data-testid="workspace-operational-ai-log-link"]'),
    page.locator('[data-testid="workspace-open-help-panel"]'),
    page.locator(`[data-testid="${helpTestId}"]`),
  ];
  for (const locator of openCandidates) {
    if (await locator.first().isVisible().catch(() => false)) {
      await locator.first().click().catch(() => {});
      await page.waitForTimeout(700);
      if (await page.locator(targetSelector).first().isVisible().catch(() => false)) return;
    }
  }
}

async function copyLegacyAliases(localeDir, locale) {
  const aliases = legacyAliases[locale] || {};
  await Promise.all(Object.entries(aliases).map(async ([id, legacyName]) => {
    await fs.copyFile(path.join(localeDir, `${id}.png`), path.join(docsRoot, 'static', 'img', 'screenshots', legacyName));
  }));
}

async function captureLocale(browser, locale, contextOptions) {
  const localeDir = path.join(outputRoot, locale);
  await fs.mkdir(localeDir, { recursive: true });
  const context = await browser.newContext({ storageState: contextOptions.storageState, viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await restoreSessionStorage(page, { ...contextOptions.sessionStorage, locale });

  for (const shot of shots) {
    if (shotFilter.size && !shotFilter.has(shot.id)) continue;
    await page.goto(new URL(shot.path, contextOptions.baseUrl).toString(), { waitUntil: 'domcontentloaded' });
    await recoverSignIn(page, contextOptions.sessionStorage);
    await waitForReady(page, shot.ready);
    await page.waitForTimeout(1200);
    if (shot.before) {
      await shot.before(page);
      await page.waitForTimeout(900);
    }
    await screenshotTarget(page, shot.target, path.join(localeDir, `${shot.id}.png`), shot.options || {});
  }

  await copyLegacyAliases(localeDir, locale);
  await context.close();
}

const browser = await chromium.launch({ headless: true });
try {
  const contextOptions = await buildContextOptions();
  for (const locale of locales) {
    await captureLocale(browser, locale, contextOptions);
  }
} finally {
  await browser.close();
}
