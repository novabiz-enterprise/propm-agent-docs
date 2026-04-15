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
        'connaissance-et-agents',
        'gouvernance-decisions-et-actions',
        'rapports-journal-ia-et-tracabilite',
      ],
    },
    {
      type: 'category',
      label: 'Pilotage et administration',
      items: [
        'portefeuille-et-administration-technique',
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
