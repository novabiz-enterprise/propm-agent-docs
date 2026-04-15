// @ts-check

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProPM Agent',
  tagline: 'Pilotage de projet contextuel avec preuves, gouvernance et vision portefeuille',
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
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/fr',
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
          { to: '/demarrage', label: 'Démarrage', position: 'left' },
          { to: '/deploiement-azure-marketplace', label: 'Déploiement', position: 'left' },
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
