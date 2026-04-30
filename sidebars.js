/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'demarrage',
        'deploiement-azure-marketplace',
        'interface-et-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Project Work',
      items: [
        'projets-et-espace-de-travail',
        'controle-acces-et-roles',
        'connaissance-et-agents',
        'sorties-contextuelles-preuves-et-fraicheur',
        'gouvernance-decisions-et-actions',
        'rapports-journal-ia-et-tracabilite',
        'connecteurs-jira-et-sharepoint',
      ],
    },
    {
      type: 'category',
      label: 'Portfolio and Administration',
      items: [
        {
          type: 'doc',
          id: 'portfolio',
          label: 'Portfolio',
        },
        {
          type: 'doc',
          id: 'ai-providers-platform-integrations',
          label: 'AI providers and platform integrations',
        },
        {
          type: 'doc',
          id: 'seats-management-app-updates',
          label: 'Seats management and app updates',
        },
        'maintenance-support-faq',
      ],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossary',
    },
  ],
};

module.exports = sidebars;

