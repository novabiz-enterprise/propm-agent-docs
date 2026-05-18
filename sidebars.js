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
      label: 'Home',
    },
    {
      type: 'category',
      label: 'Discover ProPM Agent',
      items: ['publics-roles-et-perimetres'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['demarrage', 'interface-et-navigation', 'tableau-de-bord', 'projet-actif-et-creation-projet'],
    },
    {
      type: 'category',
      label: 'Use ProPM Agent',
      items: [
        'connaissance-documents-et-imports',
        'agents',
        'sorties-contextuelles-preuves-et-fraicheur',
        'documents-pm-et-artefacts',
        'journal-ia',
      ],
    },
    {
      type: 'category',
      label: 'Project Governance',
      items: [
        'signaux-et-notifications',
        'gouvernance-decisions-et-actions',
        'actions-et-approbations',
        'connecteurs-jira-et-sharepoint',
      ],
    },
    {
      type: 'category',
      label: 'Project Administration',
      items: ['projets-et-espace-de-travail', 'controle-acces-et-roles'],
    },
    {
      type: 'category',
      label: 'Portfolio',
      items: ['portfolio'],
    },
    {
      type: 'category',
      label: 'Azure and Platform Administration',
      items: [
        'deploiement-azure-marketplace',
        'admin-deploiement-marketplace-et-entra',
        'admin-fournisseur-ia',
        'admin-integrations-plateforme',
        'admin-licences-plans-et-mises-a-jour',
        'ai-providers-platform-integrations',
        'seats-management-app-updates',
      ],
    },
    {
      type: 'category',
      label: 'Security and Compliance',
      items: ['securite-et-conformite', 'limitations-connues'],
    },
    {
      type: 'category',
      label: 'Support and FAQ',
      items: ['maintenance-support-faq', 'support-audit-et-diagnostic'],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossary',
    },
  ],
};

module.exports = sidebars;
