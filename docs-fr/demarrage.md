---
title: Démarrage
slug: /demarrage
description: Prérequis, accès, authentification et première configuration.
---

[Accueil](./index.md) · [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md) · [Interface et navigation](./interface-et-navigation.md)

![Répertoire des projets](/img/screenshots/fr-02-projets.png)

## Objectif

Cette page explique comment préparer l’accès à ProPM Agent, se connecter, choisir le bon projet et comprendre les prérequis techniques du premier démarrage.

## Si vous n’avez pas encore d’URL d’application

Si votre instance n’est pas encore déployée, commencez par [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md). Cette étape permet d’obtenir l’URL web, l’API et les paramètres runtime nécessaires avant toute connexion utilisateur.

## Prérequis côté utilisateur

Pour un usage normal, il faut disposer de :

- l’**URL de votre déploiement** ProPM Agent ;
- un compte **Microsoft Entra ID** autorisé sur le tenant concerné ;
- l’accès à au moins un projet, ou le droit d’en créer un ;
- un navigateur moderne prenant en charge les applications web récentes ;
- si vous utilisez la voix, un navigateur et un poste compatibles avec les API de reconnaissance vocale.

## Prérequis côté administrateur technique

Les éléments suivants sont explicitement prévus par la configuration observée :

| Élément | Rôle |
| --- | --- |
| `clientId` d’authentification | Identifie l’application Entra utilisée côté web |
| `authority` | Définit l’autorité Microsoft Entra de connexion |
| `scopes` | Définit les permissions demandées au moment de l’authentification |
| `redirectUri` et `postLogoutRedirectUri` | Contrôlent les retours après connexion et déconnexion |
| `allowedTenantId` | Restreint, si configuré, le tenant autorisé |
| `/runtime-config.json` | Surcharge dynamique des URLs et paramètres d’authentification au runtime |
| Abonnement / sièges | Conditionne l’accès dans les déploiements qui imposent une licence par utilisateur |

## Connexion

### Ce que fait l’application

L’interface observée utilise **Microsoft Entra ID** pour l’authentification.

Au premier accès :

1. ouvrez l’URL du déploiement ;
2. laissez l’application rediriger vers la page de connexion Microsoft ;
3. authentifiez-vous avec le compte autorisé ;
4. revenez sur l’application, généralement sur le **Tableau de bord**.

### États d’accès à connaître

Deux états différents existent dans l’interface :

- **lecture seule** : vous pouvez consulter une surface mais pas modifier ses réglages ;
- **accès refusé** : la route ou l’action n’est pas disponible pour votre compte.

Cette distinction est importante pour les zones d’administration : on peut parfois ouvrir une page technique en consultation sans pouvoir enregistrer de changement.

## Première ouverture recommandée

Après la connexion :

1. vérifiez la langue d’interface et le projet courant dans la barre supérieure ;
2. ouvrez **Projets** ;
3. sélectionnez un projet existant ou créez-en un ;
4. revenez au **Tableau de bord** pour lire les indicateurs et les étapes suggérées ;
5. continuez vers **Espace de travail**, **Connaissance**, **Agents**, **Rapports & artefacts** ou **Journal IA**.

## Créer un projet

Le formulaire observé dans l’application propose les champs suivants :

- **ID projet** ;
- **Nom** ;
- **Description** ;
- **Langue de données par défaut** ;
- **Langues de données supplémentaires**.

### Point important

La **langue de données du projet** n’est pas la même chose que la **langue de l’interface**.

La langue de données influence notamment :

- les catégories de documents proposées par défaut ;
- certains réglages ou invites système côté agents ;
- les valeurs initiales propres au projet.

## Si aucun projet n’est encore actif

Plusieurs écrans affichent un état vide explicite lorsqu’aucun projet n’est sélectionné. C’est normal.

Pour poursuivre :

- utilisez le sélecteur de projet ;
- ouvrez **Projets** ;
- ou revenez au projet récemment mémorisé par l’application.

## Points techniques utiles pour l’installation initiale

### Authentification et runtime

Le frontend observé sait charger une configuration au runtime, puis compléter au besoin les informations d’authentification via l’API de bootstrap.

Concrètement, un administrateur technique doit vérifier :

- la cohérence entre l’URL publiée et les **redirect URIs** ;
- la présence d’un **client ID** valide ;
- la bonne autorité Entra ;
- les scopes attendus par le frontend et l’API ;
- le tenant autorisé si le déploiement l’impose ;
- l’URL API et, si utilisée, l’URL WebSocket.

### Mode réel vs mode de démonstration

Le code distingue clairement :

- un **mode réel**, utilisé pour l’authentification Microsoft ;
- un **mode mock/démo**, réservé au développement et aux tests.

Pour une documentation publique, il faut retenir que le **mode normal** repose sur Entra ID et sur le déploiement publié.

## Bonnes pratiques dès le départ

- choisissez immédiatement le bon projet avant de lancer des agents ;
- définissez correctement la langue de données du projet à la création ;
- vérifiez votre niveau de droit avant de chercher à modifier la gouvernance ou l’administration technique ;
- si votre déploiement utilise un modèle à sièges, contrôlez que votre accès a bien été attribué.

## Suite

- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Interface et navigation](./interface-et-navigation.md)
- [Projets et espace de travail](./projets-et-espace-de-travail.md)
