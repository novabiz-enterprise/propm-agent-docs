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
      label: 'Découvrir ProPM Agent',
      items: ['publics-roles-et-perimetres'],
    },
    {
      type: 'category',
      label: 'Prise en main',
      items: ['demarrage', 'interface-et-navigation', 'tableau-de-bord', 'projet-actif-et-creation-projet'],
    },
    {
      type: 'category',
      label: 'Utiliser ProPM Agent',
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
      label: 'Gouvernance projet',
      items: [
        'signaux-et-notifications',
        'gouvernance-decisions-et-actions',
        'actions-et-approbations',
        'connecteurs-jira-et-sharepoint',
      ],
    },
    {
      type: 'category',
      label: 'Administration projet',
      items: ['projets-et-espace-de-travail', 'controle-acces-et-roles'],
    },
    {
      type: 'category',
      label: 'Portfolio',
      items: ['portfolio'],
    },
    {
      type: 'category',
      label: 'Administration Azure et plateforme',
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
      label: 'Sécurité et conformité',
      items: ['securite-et-conformite', 'limitations-connues'],
    },
    {
      type: 'category',
      label: 'Support et FAQ',
      items: ['maintenance-support-faq', 'support-audit-et-diagnostic', 'checklist-revue-documentaire', 'release-notes'],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'Glossaire',
    },
  ],
};

module.exports = sidebars;
