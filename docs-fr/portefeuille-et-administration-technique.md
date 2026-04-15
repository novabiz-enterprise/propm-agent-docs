---
title: Portefeuille et administration technique
slug: /portefeuille-et-administration-technique
description: Comparer plusieurs projets, administrer la plateforme, gérer les intégrations, le fournisseur IA et les sièges.
---

[Accueil](./index.md) · [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

![Centre de commande portefeuille](/img/screenshots/fr-10-portefeuille.png)

## Deux niveaux de pilotage

Cette partie couvre deux surfaces différentes :

- le **Centre de commande portefeuille**, orienté comparaison de projets ;
- l’**Administration de la plateforme**, orientée configuration technique et gouvernance tenant.

## Centre de commande portefeuille

La page portefeuille permet de comparer plusieurs projets à partir de signaux communs.

Les capacités confirmées sont :

- sélection de plusieurs projets ;
- signaux configurables ;
- gestion de **poids** et de **seuils** ;
- cohortes sauvegardées ;
- rafraîchissement de la comparaison.

### Cas d’usage typiques

| Besoin PMO | Usage portefeuille |
| --- | --- |
| Comparer les projets les plus exposés | Sélectionner une cohorte et relire les signaux actifs |
| Ajuster la sensibilité de comparaison | Modifier les poids et seuils |
| Rejouer une vue de pilotage | Réutiliser une cohorte sauvegardée |
| Vérifier l’évolution après action | Rafraîchir la comparaison |

### Ce que cette page n’est pas

Le portefeuille n’est pas un remplacement du travail projet détaillé. Il sert à :

- comparer ;
- prioriser ;
- repérer les écarts ;
- décider où approfondir ensuite.

![Administration de la plateforme](/img/screenshots/fr-11-administration-plateforme.png)

## Administration de la plateforme

Les sections confirmées de cette page sont les suivantes :

| Section | Rôle |
| --- | --- |
| Overview | Vue d’ensemble des règles et du niveau de préparation |
| Platform integrations | Gestion des connecteurs et fournisseurs d’ingestion |
| AI provider settings | Choix du fournisseur IA et paramètres associés |
| Marketplace / subscription | Gestion de l’abonnement et des sièges |
| Audit / activity | Historique d’activité et suivi d’administration |

## Intégrations de plateforme

La page d’administration distingue deux familles :

- les **connecteurs d’exécution** qui envoient des actions vers d’autres outils ;
- les **fournisseurs d’ingestion** qui alimentent la connaissance.

### Connecteurs d’exécution confirmés

| Type | Connecteurs observés |
| --- | --- |
| Outils de livraison et tickets | Jira, Azure DevOps, GitHub, GitLab, ServiceNow, Monday.com, Asana, ClickUp, Wrike, Trello |
| Communication et collaboration | Microsoft Teams, Slack, Outlook |
| Publication et sorties gouvernées | SharePoint publish, Notion, Webhook |

### Fournisseurs d’ingestion confirmés

| Type | Sources observées |
| --- | --- |
| Référentiels Microsoft et wiki | SharePoint, OneDrive, Confluence |
| Delivery et suivi | Jira, Azure DevOps |
| Stockage documentaire | Google Drive, Box, Dropbox, Amazon S3 |
| Espaces de travail | Notion |
| Flux contrôlés | Manual upload, Webhook |

## Ce qu’un administrateur peut faire

Les APIs et l’interface observées confirment des opérations telles que :

- lister une intégration ;
- consulter son détail ;
- la valider ;
- la désactiver ;
- la modifier ;
- la rendre disponible pour les projets quand elle est prête.

## Réglages du fournisseur IA

L’administration de la plateforme expose des réglages dédiés au fournisseur IA.

Les familles de fournisseurs explicitement visibles dans le produit comprennent :

- **OpenRouter** ;
- **OpenAI** ;
- **Anthropic**.

Au niveau utilisateur, le **Journal IA** permet ensuite de vérifier le fournisseur réellement utilisé et la famille de modèle associée.

## Abonnement et sièges

Le produit gère un modèle de licence avec consommation de sièges.

Les comportements vérifiés sont les suivants :

- un siège peut être consommé lors de la connexion ;
- l’accès peut être bloqué si tous les sièges sont déjà utilisés ;
- un administrateur peut libérer ou réattribuer des sièges.

### Conséquence pratique

Un incident d’accès n’est pas toujours un problème d’authentification. Il peut aussi venir d’un manque de sièges disponibles.

## Repères techniques de plateforme

L’infrastructure Azure observée s’appuie sur les briques suivantes :

| Service Azure | Rôle dans la plateforme |
| --- | --- |
| Azure Container Apps | Hébergement des composants applicatifs |
| Storage | Stockage des données et fichiers nécessaires au fonctionnement |
| Azure AI Search | Recherche et récupération de contenu |
| Key Vault | Gestion des secrets et paramètres sensibles |
| Log Analytics | Collecte et interrogation des journaux |
| Application Insights | Supervision applicative |
| Document Intelligence | Traitement documentaire dans les flux concernés |

## À retenir pour les publics techniques

- le niveau **plateforme** contrôle ce qui est disponible globalement ;
- le niveau **projet** choisit ce qui est réellement utilisé localement ;
- les intégrations doivent être validées avant exposition aux équipes ;
- l’authentification, le runtime config et la disponibilité des sièges font partie du diagnostic de base.

## Suite

- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Glossaire](./glossaire.md)
- [Démarrage](./demarrage.md)
