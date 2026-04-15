---
title: Portefeuille et administration technique
slug: /portefeuille-et-administration-technique
description: Comparer plusieurs projets, administrer la plateforme, gérer les intégrations, le fournisseur IA et les sièges.
---

[Accueil](./index.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

![Centre de commande portefeuille](/img/screenshots/fr-10-portefeuille.png)

## Objectif

Cette page couvre deux surfaces distinctes : le **Centre de commande portefeuille** pour la comparaison multi-projets et **Administration de la plateforme** pour la configuration technique tenant-wide.

## Centre de commande portefeuille

La page portefeuille permet de comparer plusieurs projets à partir de signaux communs.

### Capacités confirmées

- sélection de plusieurs projets ;
- catalogue de signaux configurables ;
- gestion de **poids** et de **seuils** ;
- filtre de **sévérité minimale** ;
- cohortes sauvegardées ;
- rafraîchissement de la comparaison.

### Signaux observés

Le catalogue visible inclut notamment :

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Ce que retient une cohorte

Une cohorte sauvegardée mémorise au minimum :

- les projets choisis ;
- les signaux activés ;
- les poids ;
- les seuils ;
- la sévérité minimale.

### Bon usage portefeuille

Utilisez cette page pour comparer, prioriser et repérer les projets qui méritent une enquête plus profonde. Elle ne remplace pas le travail détaillé dans chaque projet.

![Administration de la plateforme](/img/screenshots/fr-11-administration-plateforme.png)

## Administration de la plateforme

Les sections confirmées sont les suivantes :

| Section | Rôle |
| --- | --- |
| Overview | Vue d’ensemble des règles, de la préparation et des points d’attention |
| Platform integrations | Définitions techniques des connecteurs et fournisseurs d’ingestion |
| AI provider settings | Choix du fournisseur IA et paramètres associés |
| Marketplace / subscription | Gestion de l’abonnement, des entitlements et des sièges |
| Audit / activity | Historique d’activité et suivi d’administration |

## Intégrations plateforme vs intégrations projet

Une règle importante ressort du produit :

- le **niveau plateforme** possède les définitions techniques globales ;
- le **niveau projet** ne consomme que des bindings approuvés et sûrs.

### Deux familles de plateforme

- **connecteurs d’exécution** pour les actions externes ;
- **fournisseurs d’ingestion** pour alimenter la connaissance.

### Exemples de connecteurs observés

- Jira, Azure DevOps, GitHub, GitLab, ServiceNow ;
- Teams, Slack, Outlook ;
- SharePoint publish, Notion, webhook.

### Exemples de fournisseurs d’ingestion observés

- SharePoint, OneDrive, Confluence ;
- Jira, Azure DevOps ;
- Google Drive, Box, Dropbox, Amazon S3 ;
- Notion ;
- upload manuel et webhook.

## Readiness et causes de blocage

Une intégration projet ou une option d’import peut être bloquée pour cause de :

- entitlement ;
- policy ;
- permission ;
- health dégradée ;
- définition plateforme manquante ou désactivée ;
- binding projet désactivé ou non configuré.

Circuit de remédiation recommandé :

1. relire le blocage dans la page projet ;
2. ouvrir **Administration de la plateforme** pour vérifier la définition technique ;
3. valider la readiness ou la santé du connecteur/provider ;
4. revenir dans le projet pour confirmer le binding et l’usage autorisé.

## Réglages du fournisseur IA

Les familles de fournisseurs explicitement visibles dans le produit comprennent :

- **OpenRouter** ;
- **OpenAI** ;
- **Anthropic**.

### Deux notions à distinguer

| Notion | Signification |
| --- | --- |
| Fournisseur IA sélectionné au déploiement | Choix initial de l’environnement lors de l’installation |
| Fournisseur IA effectif | Fournisseur réellement utilisé pour les nouveaux runs |

Ces deux valeurs peuvent différer. Pour un run donné, la valeur de référence reste le détail visible dans **Journal IA**.

## Abonnement, entitlement et sièges

Le produit gère un modèle de licence avec consommation de sièges selon le plan.

### Comportements observés

- un siège peut être consommé lors de la connexion ;
- l’accès peut être bloqué s’il n’y a plus de siège disponible ;
- l’interface admin expose le plan, les sièges achetés et les utilisateurs licenciés ;
- un administrateur peut retirer un utilisateur licencié, puis libérer la capacité pour une réattribution ultérieure ;
- une fenêtre de retrait sur 24 h est suivie pour éviter les rotations abusives ;
- l’état commercial peut aussi exposer `billing state`, `payment state`, `subscription status` et des `entitlement flags`.

### Pourquoi c’est important

Un incident d’accès n’est pas toujours un problème d’authentification. Il peut aussi venir d’un manque de sièges ou d’un entitlement qui bloque une intégration premium ou un fournisseur IA.

## Repères techniques de plateforme

L’infrastructure Azure observée s’appuie sur les briques suivantes :

- Azure Container Apps ;
- Storage ;
- Azure AI Search ;
- Key Vault ;
- Log Analytics ;
- Application Insights ;
- Document Intelligence.

## À retenir pour les publics techniques

- le niveau **plateforme** contrôle ce qui existe globalement ;
- le niveau **projet** choisit ce qui est réellement utilisé localement ;
- les intégrations doivent être validées avant exposition aux équipes ;
- l’abonnement et les entitlements influencent l’accès, les connecteurs et le fournisseur IA ;
- le **Journal IA** reste la référence pour le fournisseur réellement utilisé sur un run.

## Suite

- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Démarrage](./demarrage.md)
- [Glossaire](./glossaire.md)
