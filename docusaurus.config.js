// @ts-check

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const siteUrl = 'https://robertsmaoui.github.io';
const baseUrl = '/propm-agent-docs/';
const siteFullUrl = `${siteUrl}${baseUrl}`;
const marketplaceUrl = 'https://marketplace.microsoft.com/en-us/product/azure-application/novabiz.propm-agentx?tab=Overview';
const socialImage = 'img/screenshots/localized/en/01-dashboard.png';
const logoImage = 'img/propm-agent-marketplace-logo.png';

const searchDocsDirs = [
  'docs',
  'docs-fr',
  'i18n/fr/docusaurus-plugin-content-docs/current',
  'i18n/de/docusaurus-plugin-content-docs/current',
  'i18n/es/docusaurus-plugin-content-docs/current',
  'i18n/hi/docusaurus-plugin-content-docs/current',
];

const noIndexSearchRoutes = ['/search', '/fr/search', '/de/search', '/es/search', '/hi/search'];
const ignoredSitemapRoutes = noIndexSearchRoutes.flatMap((route) => [route, `${route}/**`]);
const structuredDataTags = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ProPM Agent Documentation',
    url: siteFullUrl,
    description:
      'Multilingual documentation for ProPM Agent, covering AI-powered project execution, evidence-backed outputs, governance workflows, and Azure Marketplace deployment.',
    publisher: {
      '@type': 'Organization',
      name: 'NovaBiz',
      logo: {
        '@type': 'ImageObject',
        url: `${siteFullUrl}${logoImage}`,
      },
      sameAs: [marketplaceUrl],
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteFullUrl}search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ProPM Agent',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered project execution with evidence-backed outputs, governance controls, portfolio insight, and Azure Marketplace deployment.',
    url: siteFullUrl,
    image: `${siteFullUrl}${logoImage}`,
    screenshot: `${siteFullUrl}${socialImage}`,
    brand: {
      '@type': 'Brand',
      name: 'ProPM Agent',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NovaBiz',
    },
    offers: {
      '@type': 'Offer',
      url: marketplaceUrl,
      availability: 'https://schema.org/OnlineOnly',
    },
  },
].map((structuredData) => ({
  tagName: 'script',
  attributes: {
    type: 'application/ld+json',
  },
  innerHTML: JSON.stringify(structuredData),
}));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProPM Agent',
  tagline: 'Context-aware project execution with evidence, governance, and portfolio insight',
  titleDelimiter: ' | ',
  favicon: 'img/favicon.svg',
  url: siteUrl,
  baseUrl,
  organizationName: 'robertsmaoui',
  projectName: 'propm-agent-docs',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'NovaBiz',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'sitemap',
        href: `${siteFullUrl}sitemap.xml`,
      },
    },
    ...structuredDataTags,
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'hi', 'es'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Fran\u00e7ais' },
      de: { label: 'Deutsch' },
      hi: { label: '\u0939\u093f\u0928\u094d\u0926\u0940' },
      es: { label: 'Espa\u00f1ol' },
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.6,
          ignorePatterns: ignoredSitemapRoutes,
          filename: 'sitemap.xml',
        },
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
      image: socialImage,
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
          src: logoImage,
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
        copyright: `Copyright \u00a9 ${new Date().getFullYear()} ProPM Agent`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
