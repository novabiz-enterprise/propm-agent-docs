/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    {
      type: 'doc',
      id: 'index',
      label: 'Accueil',
    },
    {
      type: 'category',
      label: 'Prise en main',
      items: [
        'demarrage',
        'deploiement-azure-marketplace',
        'interface-et-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Travail projet',
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
      label: 'Pilotage et administration',
      items: [
        {
          type: 'doc',
          id: 'portfolio',
          label: 'Portfolio',
        },
        {
          type: 'doc',
          id: 'ai-providers-platform-integrations',
          label: 'Fournisseurs IA et intégrations plateforme',
        },
        {
          type: 'doc',
          id: 'seats-management-app-updates',
          label: 'Sièges et mises à jour applicatives',
        },
        'maintenance-support-faq',
      ],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossaire',
    },
  ],
};

module.exports = sidebars;
