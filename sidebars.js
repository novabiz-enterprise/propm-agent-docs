/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/what-is-propm-agent',
        'overview/key-benefits',
        'overview/how-it-fits-your-pmo',
      ],
    },
    {
      type: 'category',
      label: 'Get started',
      items: [
        'get-started/concepts',
        'get-started/quick-start',
      ],
    },

    {
      type: 'category',
      label: 'Install via Azure Marketplace',
      items: [
        'install/why-managed-applications',
        'install/prerequisites',
        'install/create-installation',
        'install/post-deployment',
        'install/entra-app-registration',
      ],
    },

    {
      type: 'category',
      label: 'Use ProPM Agent',
      items: [
        'use/navigation-tour',
        'use/dashboard',
        'use/projects',
        'use/project-workspace',
        'use/knowledge',
        'use/agents',
        'use/pm-docs',
        'use/ai-log',
        'use/portfolio-command-center',
      ],
    },

    {
      type: 'category',
      label: 'Demo data',
      items: [
        'demo-data/demo-hotel-construction/README',
        'demo-data/demo-hotel-construction/01-project-charter',
        'demo-data/demo-hotel-construction/02-stakeholder-register',
        'demo-data/demo-hotel-construction/03-work-breakdown-structure',
        'demo-data/demo-hotel-construction/04-master-schedule',
        'demo-data/demo-hotel-construction/05-budget-baseline',
        'demo-data/demo-hotel-construction/06-risk-register',
        'demo-data/demo-hotel-construction/07-raid-log',
        'demo-data/demo-hotel-construction/08-change-control-log',
        'demo-data/demo-hotel-construction/09-communication-plan',
        'demo-data/demo-hotel-construction/10-weekly-status-report-sample',
        'demo-data/demo-hotel-construction/11-app-test-data-scenarios',
        'demo-data/demo-hotel-construction/12-procurement-plan',
      ],
    },

    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/marketplace',
        'administration/project-settings',
        'administration/access-control',
        'administration/document-categories',
        'administration/agent-configuration',
        'administration/custom-agents',
      ],
    },

    {
      type: 'category',
      label: 'Security',
      items: [
        'security/identity-and-access',
        'security/network-posture',
        'security/data-protection',
        'security/auditability',
        'security/responsible-ai',
        'security/azure-services',
      ],
    },

    {
      type: 'category',
      label: 'Troubleshooting & FAQ',
      items: [
        'troubleshooting/sign-in-issues',
        'troubleshooting/access-denied',
        'troubleshooting/knowledge-not-searchable-yet',
        'troubleshooting/common-ui-issues',
        'troubleshooting/faq',
        'troubleshooting/glossary',
      ],
    },

    {
      type: 'category',
      label: 'Release notes',
      items: [
        'release-notes/release-notes',
        'release-notes/known-limitations',
      ],
    },
  ],
};

module.exports = sidebars;

