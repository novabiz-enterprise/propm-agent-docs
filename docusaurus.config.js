// @ts-check

// Prism theme helper (compatible with prism-react-renderer v2+)
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProPM Agent',
  tagline: 'Context-aware project execution with evidence, governance, and portfolio insight',
  favicon: 'img/favicon.svg',

  // GitHub Pages settings (adjust if you publish under a different org/repo or custom domain).
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
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ProPM Agent',
        items: [
          { to: '/', label: 'Docs', position: 'left' },
          { to: '/fr', label: 'Documentation FR', position: 'left' },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} ProPM Agent`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
