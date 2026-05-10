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
  `,
};

const sidebars = {
  guide: [
    pdfExportSidebarItem,
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
