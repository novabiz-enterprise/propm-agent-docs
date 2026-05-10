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
      items: ['maintenance-support-faq', 'support-audit-et-diagnostic', 'checklist-revue-documentaire', 'release-notes'],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossary',
    },
  ],
};

module.exports = sidebars;
