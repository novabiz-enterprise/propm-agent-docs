/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    {
      type: 'doc',
      id: 'index',
      label: 'Startseite',
    },
    {
      type: 'category',
      label: 'Erste Schritte',
      items: [
        'demarrage',
        'deploiement-azure-marketplace',
        'interface-et-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Projektarbeit',
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
      label: 'Portfolio und Administration',
      items: [
        {
          type: 'doc',
          id: 'portfolio',
          label: 'Portfolio',
        },
        {
          type: 'doc',
          id: 'ai-providers-platform-integrations',
          label: 'KI-Anbieter und Plattformintegrationen',
        },
        {
          type: 'doc',
          id: 'seats-management-app-updates',
          label: 'Tenant-Plan, lizenzierte Benutzer und App-Updates',
        },
        'maintenance-support-faq',
      ],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossar',
    },
  ],
};

module.exports = sidebars;
