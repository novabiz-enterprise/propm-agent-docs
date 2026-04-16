// @ts-check

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const marketplaceUrl = 'https://marketplace.microsoft.com/en-us/product/azure-application/novabiz.propm-agentx?tab=Overview';

const searchDocsDirs = [
  'docs',
  'docs-fr',
  'i18n/fr/docusaurus-plugin-content-docs/current',
  'i18n/de/docusaurus-plugin-content-docs/current',
  'i18n/es/docusaurus-plugin-content-docs/current',
  'i18n/hi/docusaurus-plugin-content-docs/current',
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProPM Agent',
  tagline: 'Context-aware project execution with evidence, governance, and portfolio insight',
  favicon: 'img/favicon.svg',

  url: 'https://robertsmaoui.github.io',
  baseUrl: '/propm-agent-docs/',

  organizationName: 'robertsmaoui',
  projectName: 'propm-agent-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'hi', 'es'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
      de: { label: 'Deutsch' },
      hi: { label: 'हिन्दी' },
      es: { label: 'Español' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        docsDir: searchDocsDirs,
        language: ['en', 'fr', 'de', 'es', 'hi'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 90,
        searchBarShortcutKeymap: 'mod+k',
        searchBarPosition: 'right',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'ProPM Agent',
        logo: {
          alt: 'ProPM Agent',
          src: 'img/propm-agent-marketplace-logo.png',
        },
        items: [
          {
            href: marketplaceUrl,
            label: 'Marketplace',
            position: 'left',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ProPM Agent`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
