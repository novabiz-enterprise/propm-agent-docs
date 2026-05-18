/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const pdfExportSidebarItem = {
  type: 'html',
  defaultStyle: false,
  className: 'pdf-sidebar-export',
  value: `
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--en" href="/propm-agent-docs/pdf/propm-agent-docs-en.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>English PDF</span></a>
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--fr" href="/propm-agent-docs/pdf/propm-agent-docs-fr.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>PDF français</span></a>
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--de" href="/propm-agent-docs/pdf/propm-agent-docs-de.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>Deutsches PDF</span></a>
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--hi" href="/propm-agent-docs/pdf/propm-agent-docs-hi.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>Hindi PDF</span></a>
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--es" href="/propm-agent-docs/pdf/propm-agent-docs-es.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>PDF español</span></a>
    <a class="pdf-sidebar-export__link pdf-sidebar-export__link--ar" href="/propm-agent-docs/pdf/propm-agent-docs-ar.pdf" target="_blank" rel="noopener noreferrer"><span class="pdf-sidebar-export__icon" aria-hidden="true">PDF</span><span>PDF بالعربية</span></a>
  `,
};

const sidebars = {
  guide: [
    pdfExportSidebarItem,
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
