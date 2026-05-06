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
        {
          type: 'doc',
          id: 'portfolio',
          label: 'Portafolio',
        },
        {
          type: 'doc',
          id: 'ai-providers-platform-integrations',
          label: 'Proveedores de IA e integraciones de plataforma',
        },
        {
          type: 'doc',
          id: 'seats-management-app-updates',
          label: 'Plan del tenant, usuarios licenciados y actualizaciones',
        },
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
