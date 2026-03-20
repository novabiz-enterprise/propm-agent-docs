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
        'use/contextual-outputs-and-evidence',
        'use/proactive-signals-and-actions',
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
        'demo-data/demo-hotel-construction/project-charter',
        'demo-data/demo-hotel-construction/stakeholder-register',
        'demo-data/demo-hotel-construction/work-breakdown-structure',
        'demo-data/demo-hotel-construction/master-schedule',
        'demo-data/demo-hotel-construction/budget-baseline',
        'demo-data/demo-hotel-construction/risk-register',
        'demo-data/demo-hotel-construction/raid-log',
        'demo-data/demo-hotel-construction/change-control-log',
        'demo-data/demo-hotel-construction/communication-plan',
        'demo-data/demo-hotel-construction/weekly-status-report-sample',
        'demo-data/demo-hotel-construction/app-test-data-scenarios',
        'demo-data/demo-hotel-construction/procurement-plan',
        'demo-data/target-state-scenarios',
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
        'administration/connectors-and-policies',
        'administration/rollout-guidance',
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
        'release-notes/release-readiness-checklist',
        'release-notes/known-limitations',
      ],
    },
  ],
};

module.exports = sidebars;

