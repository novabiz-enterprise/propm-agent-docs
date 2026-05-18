// @ts-check

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const siteUrl = 'https://robertsmaoui.github.io';
const baseUrl = '/propm-agent-docs/';
const siteFullUrl = `${siteUrl}${baseUrl}`;
const marketplaceUrl = 'https://marketplace.microsoft.com/en-us/product/azure-application/novabiz.propm-agentx?tab=Overview';
const socialImage = 'img/screenshots/localized/en/01-dashboard.jpg';
const logoImage = 'img/propm-agent-marketplace-logo.png';
const supportEmail = 'support@navabiz.pro';
const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '131 Continental Dr, Suite 305',
  addressLocality: 'Newark',
  addressRegion: 'DE',
  postalCode: '19713',
  addressCountry: 'US',
};
const contactPoint = {
  '@type': 'ContactPoint',
  contactType: 'customer support',
  email: supportEmail,
  availableLanguage: ['en', 'fr', 'de', 'es', 'hi', 'ar'],
};
const footerAddressHtml = '131 Continental Dr, Suite 305<br />Newark, DE 19713 &middot; United States';
const mobileLanguageSwitcherHtml = `
  <div class="mobile-language-switcher__title">Language / Langue</div>
  <div class="mobile-language-switcher__links" aria-label="Language selection">
    <a data-locale="en" href="${baseUrl}">English</a>
    <a data-locale="fr" href="${baseUrl}fr/">Français</a>
    <a data-locale="de" href="${baseUrl}de/">Deutsch</a>
    <a data-locale="hi" href="${baseUrl}hi/">हिन्दी</a>
    <a data-locale="es" href="${baseUrl}es/">Español</a>
    <a data-locale="ar" href="${baseUrl}ar/" dir="rtl">العربية</a>
  </div>
`;

const searchDocsDirs = [
  'docs',
  'i18n/fr/docusaurus-plugin-content-docs/current',
  'i18n/de/docusaurus-plugin-content-docs/current',
  'i18n/es/docusaurus-plugin-content-docs/current',
  'i18n/hi/docusaurus-plugin-content-docs/current',
  'i18n/ar/docusaurus-plugin-content-docs/current',
];

const noIndexSearchRoutes = ['/search', '/fr/search', '/de/search', '/es/search', '/hi/search', '/ar/search'];
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
      email: supportEmail,
      address: postalAddress,
      contactPoint,
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
      email: supportEmail,
      address: postalAddress,
      contactPoint,
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
    locales: ['en', 'fr', 'de', 'hi', 'es', 'ar'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Fran\u00e7ais' },
      de: { label: 'Deutsch' },
      hi: { label: '\u0939\u093f\u0928\u094d\u0926\u0940' },
      es: { label: 'Espa\u00f1ol' },
      ar: { label: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', direction: 'rtl', htmlLang: 'ar' },
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
        language: ['en', 'fr', 'de', 'es', 'hi', 'ar'],
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
          autoCollapseCategories: true,
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
            type: 'docSidebar',
            sidebarId: 'guide',
            label: 'Documentation',
            position: 'left',
            className: 'docs-sidebar-navbar-item',
          },
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
            type: 'html',
            position: 'right',
            className: 'mobile-language-switcher',
            value: mobileLanguageSwitcherHtml,
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'desktop-locale-dropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'NovaBiz',
            items: [
              {
                html: footerAddressHtml,
              },
              {
                html: `<a href="mailto:${supportEmail}">${supportEmail}</a>`,
              },
            ],
          },
        ],
        copyright: `Copyright \u00a9 ${new Date().getFullYear()} ProPM Agent`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

