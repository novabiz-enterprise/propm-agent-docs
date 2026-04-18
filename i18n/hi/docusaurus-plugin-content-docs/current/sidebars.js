/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    {
      type: 'doc',
      id: 'index',
      label: 'मुखपृष्ठ',
    },
    {
      type: 'category',
      label: 'शुरुआत',
      items: [
        'demarrage',
        'deploiement-azure-marketplace',
        'interface-et-navigation',
      ],
    },
    {
      type: 'category',
      label: 'प्रोजेक्ट कार्य',
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
      label: 'पोर्टफोलियो और प्रशासन',
      items: [
        'portefeuille-et-administration-technique',
        'maintenance-support-faq',
      ],
    },
    {
      type: 'doc',
      id: 'glossaire',
      label: 'शब्दावली',
    },
  ],
};

module.exports = sidebars;
