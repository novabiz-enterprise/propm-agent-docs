/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    {
      type: 'doc',
      id: 'index',
      label: 'Inicio',
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        'demarrage',
        'deploiement-azure-marketplace',
        'interface-et-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Trabajo del proyecto',
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
      label: 'Portafolio y administración',
      items: [
        'portefeuille-et-administration-technique',
        'maintenance-support-faq',
      ],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glosario',
    },
  ],
};

module.exports = sidebars;
