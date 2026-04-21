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

const locales = (process.env.SCREENSHOT_LOCALES || 'en,fr,de,hi,es')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const outputRoot = path.join(docsRoot, 'static', 'img', 'screenshots', 'localized');
const DEFAULT_VIEWPORT = { width: 1440, height: 900 };
const SCREENSHOT_EXTENSION = 'jpg';
const SCREENSHOT_QUALITY = 0.98;
const LOADING_TEXT_PATTERN = /(loading|chargement|laden|wird geladen|cargando|carregando|caricamento)/i;
const STRUCTURED_OUTPUT_PROMPT =
  process.env.PLAYWRIGHT_LIVE_CHAT_PROMPT ||
  'Produce a structured project review with summary, key findings, decisions needed, recommended actions, missing information, watchpoints, and cited evidence for project leadership.';
const WORKSPACE_TABS = {
  agentConfig: 0,
  accessControl: 1,
  documentCategories: 2,
  governancePolicies: 3,
  projectIntegrations: 4,
  actionsApprovals: 5,
};

const legacyAliases = {
  en: {
    '01-dashboard': '01-dashboard.jpg',
    '01-navigation-topbar': '01-navigation-topbar.jpg',
    '02-portfolio-command-center': '02-portfolio-command-center.jpg',
    '02-portfolio-cohort-editor': '02-portfolio-cohort-editor.jpg',
    '03-workspace-overview': '03-workspace-agent-chat.jpg',
    '03-workspace-structured-output': '03-workspace-structured-output.jpg',
    '04-agents': '04-agents.jpg',
    '04-custom-agent-create': '04-custom-agent-create.jpg',
    '05-knowledge': '05-knowledge.jpg',
    '05-knowledge-search-results': '05-knowledge-search-results.jpg',
    '06-pm-doc-editor': '06-pm-doc-editor.jpg',
    '07-projects-directory': '07-projects-directory.jpg',
    '07-project-create-modal': '07-project-create-modal.jpg',
    '08-reports-overview': '08-reports-overview.jpg',
    '09-ai-log-runs': '09-ai-log-runs.jpg',
    '11-access-control': '11-access-control.jpg',
    '11-custom-role-editor': '11-custom-role-editor.jpg',
    '12-agent-configuration': '12-agent-configuration.jpg',
    '13-document-categories': '13-document-categories.jpg',
    '14-governance-policies': '14-governance-policies.jpg',
    '14-connectors-and-destinations': '14-connectors-and-destinations.jpg',
    '15-workspace-signals': '15-workspace-signals.jpg',
    '16-notification-drafts': '16-notification-drafts.jpg',
    '17-actions-approvals': '17-actions-approvals.jpg',
    '17-action-queue': '17-action-queue.jpg',
    '18-platform-administration-overview': '18-platform-administration-overview.jpg',
  },
  fr: {
    '01-dashboard': 'fr-01-tableau-de-bord.jpg',
    '07-projects-directory': 'fr-02-projets.jpg',
    '03-workspace-overview': 'fr-03-espace-travail.jpg',
    '15-workspace-signals': 'fr-04-signaux.jpg',
    '17-actions-approvals': 'fr-05-actions-approbations.jpg',
    '05-knowledge': 'fr-06-connaissance.jpg',
    '04-agents': 'fr-07-agents.jpg',
    '08-reports-overview': 'fr-08-rapports-artefacts.jpg',
    '09-ai-log-runs': 'fr-09-journal-ia.jpg',
    '02-portfolio-command-center': 'fr-10-portefeuille.jpg',
    '18-platform-administration-overview': 'fr-11-administration-plateforme.jpg',
  },
};

function screenshotFileName(id) {
  return `${id}.${SCREENSHOT_EXTENSION}`;
}

const shotFilter = new Set(
  (process.env.SCREENSHOT_IDS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
);

const shots = [
  {
    id: '01-dashboard',
    path: '/dashboard/',
    ready: '[data-testid="dashboard"]',
  },
  {
    id: '01-navigation-topbar',
    path: '/dashboard/',
    ready: '[data-testid="dashboard"]',
    options: { clip: { x: 0, y: 0, width: 1440, height: 360 } },
  },
  {
    id: '02-portfolio-command-center',
    path: '/portfolio-command-center/',
    ready: '[data-testid="portfolio-page"]',
  },
  {
    id: '02-portfolio-cohort-editor',
    path: '/portfolio-command-center/',
    ready: '[data-testid="portfolio-page"]',
    target: '[data-testid="portfolio-cohort-panel"]',
    trim: true,
  },
  {
    id: '03-workspace-overview',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
  },
  {
    id: '03-workspace-structured-output',
    path: '/agents?projectId=demo-hotel-001',
    ready: '[data-testid="agents-selected-agent-summary"], [data-testid="agents-console"]',
    before: async (page) => {
      const existingCard = page.locator('[data-testid="structured-output-card"]').first();
      if (await existingCard.isVisible().catch(() => false)) {
        return;
      }
      const selected = await selectInteractiveAgent(page);
      if (!selected) throw new Error('No interactive agent available for structured output capture');
      await sendStructuredOutputPrompt(page, STRUCTURED_OUTPUT_PROMPT);
      const rendered = await waitForStructuredOutputSurface(page, 240000);
      if (!rendered) throw new Error('Structured output card did not render');
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="structured-output-card"]', { timeout: 45000 });
    },
    target: '[data-testid="structured-output-card"]',
    trim: true,
  },
  {
    id: '04-agents',
    path: '/agents?projectId=demo-hotel-001',
    ready: '[data-testid="agents-selected-agent-summary"], [data-testid="agents-console"]',
    before: async (page) => {
      await selectInteractiveAgent(page).catch(() => {});
    },
  },
  {
    id: '04-custom-agent-create',
    path: '/agents?projectId=demo-hotel-001',
    ready: '[data-testid="agents-selected-agent-summary"], [data-testid="agents-console"]',
    before: async (page) => {
      const trigger = page.locator('[data-testid="agents-create-button"]').first();
      await trigger.waitFor({ state: 'visible', timeout: 30000 });
      await trigger.click();
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="agents-create-dialog"]', { timeout: 30000 });
    },
    target: '[data-testid="agents-create-dialog"]',
  },
  {
    id: '05-knowledge',
    path: '/documents?projectId=demo-hotel-001',
    ready: '[data-testid="knowledge-page"], [data-testid="knowledge-page-real"]',
  },
  {
    id: '05-knowledge-search-results',
    path: '/documents?projectId=demo-hotel-001',
    ready: '[data-testid="knowledge-page"], [data-testid="knowledge-page-real"]',
    before: async (page) => {
      const input = page.locator('[data-testid="knowledge-search-input"], [data-testid="knowledge-filter-input"]').first();
      await input.waitFor({ state: 'visible', timeout: 30000 });
      await input.fill('risk');
      const button = page.locator('[data-testid="knowledge-search-button"]').first();
      await button.click();
      await waitForCondition(
        'knowledge search results',
        async () => (await page.locator('[data-testid="knowledge-search-trace"]').first().isVisible().catch(() => false))
          && (await page.locator('[data-testid="knowledge-search-panel"] a').count().catch(() => 0)) > 0,
        { timeout: 45000, interval: 1000 }
      );
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="knowledge-search-panel"]', { timeout: 30000 });
    },
    target: '[data-testid="knowledge-search-panel"]',
    trim: true,
  },
  {
    id: '06-pm-doc-editor',
    path: '/reports?projectId=demo-hotel-001',
    ready: '[data-testid="pm-docs-page"], main',
    before: async (page) => {
      await waitForTargetSettled(page, '[data-testid="pm-docs-page"]', { timeout: 45000 });
      await waitForCondition(
        'reports edit button',
        async () => (await page.locator('[data-testid^="reports-edit-"]').count().catch(() => 0)) > 0,
        { timeout: 45000, interval: 1000 }
      );
      const edit = page.locator('[data-testid^="reports-edit-"]').first();
      await edit.click();
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="pm-doc-editor"]', { timeout: 60000 });
    },
    target: '[data-testid="pm-doc-editor"]',
    trim: true,
  },
  {
    id: '07-projects-directory',
    path: '/projects/',
    ready: '[data-testid="projects-page"]',
    clearCurrentProject: true,
  },
  {
    id: '07-project-create-modal',
    path: '/projects/',
    ready: '[data-testid="projects-page"]',
    clearCurrentProject: true,
    before: async (page) => {
      const trigger = page.locator('[data-testid="projects-create-button"]').first();
      await trigger.waitFor({ state: 'visible', timeout: 30000 });
      await trigger.click();
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="projects-create-dialog"]', { timeout: 30000 });
    },
    target: '[data-testid="projects-create-dialog"]',
  },
  {
    id: '11-access-control',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.accessControl);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-rbac"], [data-testid="project-members-admin"]', { timeout: 45000 });
    },
    target: '[data-testid="project-rbac"], [data-testid="project-members-admin"]',
    trim: true,
  },
  {
    id: '11-custom-role-editor',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.accessControl);
      await waitForTargetSettled(page, '[data-testid="project-rbac"], [data-testid="project-members-admin"]', { timeout: 45000 });
      const expanded = await expandCustomRole(page);
      if (!expanded) throw new Error('No access-control role could be expanded');
      await waitForCondition(
        'expanded custom role',
        async () => (await page.locator('[data-testid^="access-role-row-"]').filter({ has: page.locator('input[type="checkbox"]') }).count().catch(() => 0)) > 0,
        { timeout: 15000, interval: 500 }
      );
    },
    target: (page) => page.locator('[data-testid^="access-role-row-"]').filter({ has: page.locator('input[type="checkbox"]') }).first(),
    trim: true,
  },
  {
    id: '12-agent-configuration',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.agentConfig);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-agent-config"]', { timeout: 45000 });
    },
    target: '[data-testid="project-agent-config"]',
    trim: true,
  },
  {
    id: '13-document-categories',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.documentCategories);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-doc-categories"]', { timeout: 45000 });
    },
    target: '[data-testid="project-doc-categories"]',
    trim: true,
  },
  {
    id: '14-governance-policies',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.governancePolicies);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-governance-admin"]', { timeout: 60000 });
    },
    target: '[data-testid="project-governance-admin"]',
    trim: true,
  },
  {
    id: '14-connectors-and-destinations',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.governancePolicies);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-governance-section-connectors"]', { timeout: 60000 });
    },
    target: '[data-testid="project-governance-section-connectors"]',
    trim: true,
  },
  {
    id: '15-workspace-signals',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-signals-panel"]', { timeout: 60000 });
    },
    target: '[data-testid="project-signals-panel"]',
    trim: true,
  },
  {
    id: '16-notification-drafts',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-signals-drafts-section"]', { timeout: 60000 });
    },
    target: '[data-testid="project-signals-drafts-section"]',
    trim: true,
  },
  {
    id: '17-actions-approvals',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.actionsApprovals);
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="project-actions-panel"]', { timeout: 45000 });
    },
    target: '[data-testid="project-actions-panel"]',
    trim: true,
  },
  {
    id: '17-action-queue',
    path: '/projects/workspace/?projectId=demo-hotel-001',
    ready: '[data-testid="workspace-page"]',
    before: async (page) => {
      await openWorkspaceTabIndex(page, WORKSPACE_TABS.actionsApprovals);
      await waitForTargetSettled(page, '[data-testid="project-actions-panel"]', { timeout: 45000 });
      const summary = page.locator('[data-testid^="project-action-card-"] summary').first();
      if (await summary.isVisible().catch(() => false)) {
        await summary.click();
      }
    },
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid^="project-action-card-"]', { timeout: 30000 });
    },
    target: '[data-testid^="project-action-card-"]',
    trim: true,
  },
  {
    id: '18-platform-administration-overview',
    path: '/platform-administration/',
    ready: '[data-testid="platform-administration-page"]',
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="platform-administration-page"]', { timeout: 90000 });
      await waitForCondition(
        'platform administration access resolved',
        async () => {
          const editable = await page.locator('[data-testid="platform-admin-editable-banner"]').first().isVisible().catch(() => false);
          const readonly = await page.locator('[data-testid="platform-admin-read-only-banner"]').first().isVisible().catch(() => false);
          const pending = await page.locator('[data-testid="platform-admin-pending-banner"]').first().isVisible().catch(() => false);
          return !pending && (editable || readonly);
        },
        { timeout: 60000, interval: 1000 }
      );
      await waitForTargetSettled(page, '[data-testid="platform-administration-page"]', { timeout: 30000 });
    },
  },
  {
    id: '08-reports-overview',
    path: '/reports?projectId=demo-hotel-001',
    ready: '[data-testid="pm-docs-page"], main',
    waitFor: async (page) => {
      await waitForTargetSettled(page, '[data-testid="pm-docs-page"]', { timeout: 45000 });
    },
  },
  {
    id: '09-ai-log-runs',
    path: '/ai-log?projectId=demo-hotel-001',
    ready: '[data-testid="ai-log-page"]',
  },
];

function parseSelectorCandidates(selector) {
  return String(selector || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function describeTarget(target) {
  if (!target) return '<page>';
  if (typeof target === 'string') return target;
  if (typeof target === 'function') return '<dynamic-target>';
  return '<locator>';
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, 'utf8'));
}

async function findLiveFiles() {
  const names = await fs.readdir(liveDir);
  const latest = (prefix) => names.filter((name) => name.startsWith(prefix) && name.endsWith('.json')).sort().at(-1);
  const sessionName = names.includes('session.json') ? 'session.json' : latest('session.');
  const storageName = names.includes('storage-state.json') ? 'storage-state.json' : latest('storage-state.');
  const sessionStorageName = names.includes('session-storage.json') ? 'session-storage.json' : latest('session-storage.');
  if (!sessionName || !storageName || !sessionStorageName) {
    throw new Error('Missing live session files in repo/web/.playwright/live');
  }
  return {
    sessionPath: path.join(liveDir, sessionName),
    storagePath: path.join(liveDir, storageName),
    sessionStoragePath: path.join(liveDir, sessionStorageName),
  };
}

async function buildContextOptions() {
  const overrideBaseUrl = String(process.env.SCREENSHOT_BASE_URL || '').trim();
  if (overrideBaseUrl) {
    return {
      baseUrl: overrideBaseUrl,
      storageState: null,
      sessionStorage: { entries: {} },
    };
  }

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
    const currentProjectPattern = /^(current_project_id|current_project_name|current_project_v2)(:|$)/i;
    const clearCurrentProjectState = (store) => {
      if (!payload.clearCurrentProject) return;
      for (const key of Object.keys(store)) {
        if (currentProjectPattern.test(key)) {
          store.removeItem(key);
        }
      }
    };

    clearCurrentProjectState(window.localStorage);
    clearCurrentProjectState(window.sessionStorage);
    window.localStorage.setItem('propm-ui-locale', payload.locale);
    if (payload.sessionStorage?.entries) {
      for (const [key, value] of Object.entries(payload.sessionStorage.entries)) {
        if (payload.clearCurrentProject && currentProjectPattern.test(key)) {
          continue;
        }
        window.sessionStorage.setItem(key, value);
      }
    }
  }, sessionStorage);
}

function escapeRegex(value) {
  return String(value || '').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
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
  const microsoftSignInPattern = /(?=.*microsoft)(?=.*(?:sign in|log in|continue|se connecter|connexion|anmelden|weiter|iniciar sesi[oó]n|acceder|continuar? ?? ??))/i;
  const button = page.getByRole('button', { name: microsoftSignInPattern }).first();
  const fallback = page.getByText(microsoftSignInPattern).first();
  const trigger = await button.isVisible().catch(() => false)
    ? button
    : ((await fallback.isVisible().catch(() => false)) ? fallback : null);
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

async function waitForReady(page, selector, timeout = 30000) {
  for (const candidate of parseSelectorCandidates(selector)) {
    try {
      await page.locator(candidate).first().waitFor({ state: 'visible', timeout });
      return candidate;
    } catch {}
  }
  const body = (await page.locator('body').innerText().catch(() => '')).slice(0, 800);
  throw new Error(`Ready selector not found: ${selector} | url=${page.url()} | body=${body}`);
}

async function waitForCondition(description, fn, { timeout = 30000, interval = 1000 } = {}) {
  const started = Date.now();
  let lastError = null;
  while ((Date.now() - started) < timeout) {
    try {
      if (await fn()) return true;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error(`Timed out waiting for ${description}${lastError instanceof Error ? `: ${lastError.message}` : ''}`);
}

async function resolveTargetLocator(page, target) {
  if (!target) return null;
  if (typeof target === 'function') {
    const resolved = await target(page);
    return resolveTargetLocator(page, resolved);
  }
  if (typeof target === 'string') {
    for (const candidate of parseSelectorCandidates(target)) {
      const locator = page.locator(candidate).first();
      if (await locator.isVisible().catch(() => false)) return locator;
    }
    return null;
  }
  const locator = typeof target.first === 'function' ? target.first() : target;
  if (await locator.isVisible().catch(() => false)) return locator;
  return null;
}

async function waitForTarget(page, target, timeout = 30000) {
  const started = Date.now();
  while ((Date.now() - started) < timeout) {
    const locator = await resolveTargetLocator(page, target);
    if (locator) return locator;
    await page.waitForTimeout(400);
  }
  throw new Error(`Target not visible: ${describeTarget(target)} | url=${page.url()}`);
}

async function waitForTargetSettled(page, target, { timeout = 30000, stableFor = 1200 } = {}) {
  const locator = await waitForTarget(page, target, timeout);
  let lastSignature = '';
  let stableSince = 0;
  const started = Date.now();

  while ((Date.now() - started) < timeout) {
    const state = await locator.evaluate((el, patternSource) => {
      const pattern = new RegExp(patternSource, 'i');
      const text = String(el.innerText || '').slice(0, 6000);
      return {
        pulseCount: el.querySelectorAll('.animate-pulse, [class*="animate-pulse"]').length,
        reportsLoadingCount: el.querySelectorAll('[data-testid="reports-table-loading"]').length,
        pendingBannerCount: el.querySelectorAll('[data-testid="platform-admin-pending-banner"]').length,
        hasLoadingText: pattern.test(text),
        childCount: el.childElementCount,
        clientWidth: el.clientWidth,
        clientHeight: el.clientHeight,
        scrollWidth: el.scrollWidth,
        scrollHeight: el.scrollHeight,
      };
    }, LOADING_TEXT_PATTERN.source).catch(() => null);

    if (!state) {
      await page.waitForTimeout(400);
      continue;
    }

    const signature = JSON.stringify(state);
    const ready = !state.pulseCount && !state.reportsLoadingCount && !state.pendingBannerCount && !state.hasLoadingText;

    if (ready && signature === lastSignature) {
      if (!stableSince) stableSince = Date.now();
      if ((Date.now() - stableSince) >= stableFor) {
        return locator;
      }
    } else {
      stableSince = 0;
      lastSignature = signature;
    }

    await page.waitForTimeout(400);
  }

  return locator;
}

async function waitForStructuredOutputSurface(page, timeout = 240000) {
  const started = Date.now();
  const card = page.locator('[data-testid="structured-output-card"]').first();
  while ((Date.now() - started) < timeout) {
    if (await card.isVisible().catch(() => false)) return true;
    await page.waitForTimeout(1500);
  }
  return false;
}

async function gotoWithRetry(page, url) {
  const options = { waitUntil: 'domcontentloaded', timeout: 120000 };
  try {
    await page.goto(url, options);
  } catch {
    await page.goto(url, options);
  }
}

async function trimWhitespaceBuffer(page, buffer, { threshold = 240, padding = 12, minReduction = 24 } = {}) {
  const base64 = buffer.toString('base64');
  const result = await page.evaluate(async ({ pngBase64, thresholdValue, paddingValue }) => {
    const binary = atob(pngBase64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    const blob = new Blob([bytes], { type: 'image/png' });
    const bitmap = await createImageBitmap(blob);
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(bitmap, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data, width, height } = imageData;
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const offset = (y * width + x) * 4;
        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const a = data[offset + 3];
        if (a > 0 && !(r >= thresholdValue && g >= thresholdValue && b >= thresholdValue)) {
          if (x < left) left = x;
          if (y < top) top = y;
          if (x > right) right = x;
          if (y > bottom) bottom = y;
        }
      }
    }

    if (right < left || bottom < top) {
      return null;
    }

    left = Math.max(0, left - paddingValue);
    top = Math.max(0, top - paddingValue);
    right = Math.min(width, right + 1 + paddingValue);
    bottom = Math.min(height, bottom + 1 + paddingValue);

    if (left === 0 && top === 0 && right === width && bottom === height) {
      return null;
    }

    const cropWidth = Math.max(1, right - left);
    const cropHeight = Math.max(1, bottom - top);
    const cropped = document.createElement('canvas');
    cropped.width = cropWidth;
    cropped.height = cropHeight;
    const croppedCtx = cropped.getContext('2d');
    if (!croppedCtx) return null;
    croppedCtx.drawImage(canvas, left, top, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);

    return {
      width,
      height,
      cropWidth,
      cropHeight,
      pngBase64: cropped.toDataURL('image/png').split(',')[1],
    };
  }, {
    pngBase64: base64,
    thresholdValue: threshold,
    paddingValue: padding,
  }).catch(() => null);

  if (!result) return buffer;
  const reduction = (result.width - result.cropWidth) + (result.height - result.cropHeight);
  if (reduction < minReduction) return buffer;
  return Buffer.from(result.pngBase64, 'base64');
}

async function convertPngBufferToJpeg(page, buffer, quality = SCREENSHOT_QUALITY) {
  const pngBase64 = buffer.toString('base64');
  const jpegBase64 = await page.evaluate(async ({ pngBase64, qualityValue }) => {
    const image = await new Promise((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error('Failed to decode screenshot buffer'));
      element.src = `data:image/png;base64,${pngBase64}`;
    });

    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to create JPEG conversion canvas');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', qualityValue).split(',')[1];
  }, { pngBase64, qualityValue: quality });

  return Buffer.from(jpegBase64, 'base64');
}

async function screenshotTarget(page, target, file, options = {}, { trim = false } = {}) {
  let buffer = null;
  const locator = target ? await resolveTargetLocator(page, target) : null;

  if (locator) {
    await locator.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(250);
    buffer = await locator.screenshot(options);
  } else {
    buffer = await page.screenshot({ fullPage: false, ...options });
  }

  if (trim) {
    buffer = await trimWhitespaceBuffer(page, buffer).catch(() => buffer);
  }

  buffer = await convertPngBufferToJpeg(page, buffer);
  await fs.writeFile(file, buffer);
}

async function openWorkspaceTabIndex(page, index) {
  await waitForCondition(
    `workspace tab ${index}`,
    async () => (await page.getByRole('tab').count().catch(() => 0)) > index,
    { timeout: 30000, interval: 500 }
  );
  const tab = page.getByRole('tab').nth(index);
  await tab.scrollIntoViewIfNeeded().catch(() => {});
  await tab.click();
  await page.waitForTimeout(600);
}

async function isAgentChatInteractive(page) {
  const input = page.locator('[data-testid="agent-chat-input"]').first();
  const unavailable = await page.locator('[data-testid="agent-chat-unavailable"]').first().isVisible().catch(() => false);
  return Boolean(
    !unavailable
    && await input.isVisible().catch(() => false)
    && await input.isEditable().catch(() => false)
    && await input.isEnabled().catch(() => false)
  );
}

async function selectInteractiveAgent(page) {
  if (await isAgentChatInteractive(page)) return true;

  await waitForCondition(
    'agents roster items',
    async () => (await page.locator('[data-testid^="agents-roster-item-"]').count().catch(() => 0)) > 0,
    { timeout: 30000, interval: 500 }
  );

  const items = page.locator('[data-testid^="agents-roster-item-"]');
  const count = await items.count();
  for (let index = 0; index < count; index += 1) {
    const item = items.nth(index);
    await item.scrollIntoViewIfNeeded().catch(() => {});
    await item.click().catch(() => {});
    await page.waitForTimeout(1200);
    if (await isAgentChatInteractive(page)) return true;
  }

  return false;
}

async function sendStructuredOutputPrompt(page, prompt) {
  const input = page.locator('[data-testid="agent-chat-input"]').first();
  await input.waitFor({ state: 'visible', timeout: 15000 });
  if (!(await input.isEditable().catch(() => false)) || !(await input.isEnabled().catch(() => false))) {
    throw new Error('Agent chat input is not available');
  }
  await input.fill('');
  await input.fill(prompt);
  const send = page.locator('[data-testid="agent-chat-send"]').first();
  await send.waitFor({ state: 'visible', timeout: 15000 });
  await send.click();
  await page.waitForTimeout(700);
}

async function expandCustomRole(page) {
  const customRow = page.locator('[data-testid^="access-role-row-"]').filter({ has: page.locator('span.text-blue-800') }).first();
  if (await customRow.isVisible().catch(() => false)) {
    const alreadyExpanded = await customRow.locator('input[type="checkbox"]').first().isVisible().catch(() => false);
    if (!alreadyExpanded) {
      const button = customRow.locator('[data-testid^="access-role-expand-"]').first();
      await button.click().catch(() => {});
      await page.waitForTimeout(500);
    }
    return true;
  }

  const fallback = page.locator('[data-testid^="access-role-expand-"]').first();
  if (await fallback.isVisible().catch(() => false)) {
    await fallback.click().catch(() => {});
    await page.waitForTimeout(500);
    return true;
  }

  return false;
}

async function copyLegacyAliases(localeDir, locale) {
  const aliases = legacyAliases[locale] || {};
  await Promise.all(
    Object.entries(aliases).map(async ([id, legacyName]) => {
      const source = path.join(localeDir, screenshotFileName(id));
      try {
        await fs.access(source);
        await fs.copyFile(source, path.join(docsRoot, 'static', 'img', 'screenshots', legacyName));
      } catch {}
    })
  );
}

async function captureLocale(context, locale, contextOptions) {
  const localeDir = path.join(outputRoot, locale);
  await fs.mkdir(localeDir, { recursive: true });

  for (const shot of shots) {
    if (shotFilter.size && !shotFilter.has(shot.id)) continue;
    const page = await context.newPage();
    await restoreSessionStorage(page, { ...contextOptions.sessionStorage, locale, clearCurrentProject: Boolean(shot.clearCurrentProject) });

    try {
      console.log(`[screenshots] ${locale} ${shot.id}`);
      await gotoWithRetry(page, new URL(shot.path, contextOptions.baseUrl).toString());
      await recoverSignIn(page, contextOptions.sessionStorage);
      await waitForReady(page, shot.ready, 45000);
      await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
      await page.waitForTimeout(1500);

      if (shot.before) {
        await shot.before(page);
        await page.waitForTimeout(800);
      }

      if (shot.waitFor) {
        await shot.waitFor(page);
      } else if (shot.target) {
        await waitForTargetSettled(page, shot.target, { timeout: 30000 }).catch(() => {});
      } else {
        await waitForTargetSettled(page, shot.ready, { timeout: 20000 }).catch(() => {});
      }

      await page.waitForTimeout(500);
      await screenshotTarget(
        page,
        shot.target,
        path.join(localeDir, screenshotFileName(shot.id)),
        shot.options || {},
        { trim: Boolean(shot.trim) }
      );
    } finally {
      await page.close().catch(() => {});
    }
  }

  await copyLegacyAliases(localeDir, locale);
}

const browser = await chromium.launch({ headless: true });
try {
  const contextOptions = await buildContextOptions();
  const contextArgs = {
    viewport: DEFAULT_VIEWPORT,
  };
  if (contextOptions.storageState) {
    contextArgs.storageState = contextOptions.storageState;
  }
  const context = await browser.newContext(contextArgs);
  try {
    for (const locale of locales) {
      await captureLocale(context, locale, contextOptions);
    }
  } finally {
    await context.close().catch(() => {});
  }
} finally {
  await browser.close();
}








