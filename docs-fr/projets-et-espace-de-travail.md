---
title: Projets et espace de travail
slug: /projets-et-espace-de-travail
description: Créer un projet, changer de contexte et utiliser l’espace de travail comme centre de pilotage.
---

[Accueil](./index.md) · [Interface et navigation](./interface-et-navigation.md) · [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)

![Espace de travail projet](/img/screenshots/fr-03-espace-travail.png)

## Objectif

Cette page explique la différence entre **Projets**, **Espace de travail** et **Agents**, puis détaille les réglages projet réellement visibles dans l’application.

## Trois surfaces à distinguer

| Surface | Quand l’utiliser |
| --- | --- |
| Projets | Créer un projet, ouvrir un projet existant, changer de contexte |
| Espace de travail | Lire le résumé projet, la transparence opérationnelle, les signaux et les réglages de niveau projet |
| Agents | Lancer un échange en direct avec un agent et lire la sortie structurée du run |

En pratique, **Projets** sert à entrer dans le bon contexte, **Espace de travail** à le configurer et **Agents** à l’exploiter.

## Créer un projet

Le formulaire observé contient les champs suivants :

- **ID projet** ;
- **Nom** ;
- **Description** ;
- **Langue de données par défaut** ;
- **Langues de données supplémentaires**.

Recommandations de saisie :

- choisissez un ID lisible et durable ;
- ne confondez pas **langue de données projet** et **langue d’interface** ;
- définissez correctement le périmètre avant d’ouvrir la connaissance ou les agents.

## Ouvrir et changer de projet

Un projet peut être ouvert depuis :

- la page **Projets** ;
- le **sélecteur de projet** de la barre supérieure ;
- le contexte récemment mémorisé dans le navigateur.

Lorsque vous changez de projet, les surfaces suivantes se recalent : **Connaissance**, **Agents**, **Rapports & artefacts**, **Journal IA**, les signaux et les réglages projet.

## L’espace de travail : centre de pilotage du projet

L’**Espace de travail** réunit dans une même surface :

- le **résumé projet** ;
- des raccourcis vers **Agents**, **Rapports & artefacts** et **Journal IA** ;
- une vue de **transparence opérationnelle** ;
- les **signaux** du projet ;
- les onglets de réglage de niveau projet.

Dans les environnements observés, une carte **Voice** peut aussi renvoyer vers l’expérience vocale disponible dans **Agents**.

## Transparence opérationnelle et readiness

L’espace de travail ne sert pas seulement à résumer le projet. Il permet aussi de voir si le projet est prêt à agir :

- présence ou absence de signaux ;
- activité récente ;
- raccourcis vers les brouillons ou livrables liés ;
- readiness des intégrations projet quand elles existent.

Utilisez cette zone pour comprendre **pourquoi** une action ou un import peut être disponible, dégradé ou bloqué.

## Onglets de niveau projet

| Onglet | À quoi il sert |
| --- | --- |
| Agent configuration | Paramétrer les agents pour ce projet |
| Access control | Gérer membres, rôles et permissions de niveau projet |
| Document categories | Adapter la taxonomie documentaire du projet et la propager aux surfaces documentaires du projet |
| Governance policies | Définir connecteurs, destinations, politiques d’action, profils de rendu et préférences de notification de niveau projet |
| Project integrations | Relier au projet les intégrations prêtes et autorisées |
| Actions & approvals | Gérer les demandes d’action, validations et exécution gouvernée |

## Agent configuration

Les paramètres confirmés au niveau projet sont :

- `status` ;
- `temperature` ;
- `max tokens`.

### Contraintes visibles

- `temperature` est attendue entre **0** et **2** ;
- `max tokens` doit être un entier supérieur ou égal à **1**.

### Historique de configuration

L’interface expose aussi un historique par version avec au minimum :

- numéro de version ;
- statut ;
- température ;
- max tokens ;
- date de création ;
- auteur ;
- `trace ID` associé.

## Access control

L’onglet **Access control** administre les membres et rôles projet. Il supporte :

- les rôles standards ;
- les rôles personnalisés ;
- les garde-fous RBAC ;
- la lecture seule pour les profils non autorisés à modifier.

Voir la page dédiée : [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md).

## Document categories

Cet onglet sert à aligner la classification documentaire avec le projet. En pratique, la taxonomie projet influence les catégories proposées lors des téléversements et certains sélecteurs documentaires utilisés ensuite dans les surfaces projet.

### Effet concret d’une mise à jour

Quand la liste des catégories est modifiée avec succès :

- le sélecteur de catégorie de téléversement dans **Connaissance** est mis à jour ;
- les sélecteurs et filtres de catégorie dans **PM Docs** se recalent quand ils utilisent cette taxonomie partagée ;
- le changement reste limité au **projet courant**.

### Exemples pratiques

Gardez une taxonomie courte et stable. Par exemple, au lieu de multiplier les variantes proches, préférez quelques catégories cohérentes comme :

- charte projet ;
- registre des risques ;
- rapport de statut ;
- plan achats ;
- plan de communication.

L’objectif n’est pas d’encoder la version du document dans la catégorie, mais de garder un classement réutilisable entre **Connaissance** et **PM Docs**.

## Governance policies

Cet onglet fixe les règles qui encadrent les décisions, validations et comportements de gouvernance du projet. Utilisez-le avant de publier un livrable ou d’autoriser une action externe gouvernée.

### Sous-surfaces visibles dans Governance policies

| Sous-surface | Ce qu’elle règle |
| --- | --- |
| Execution connectors | Type de connecteur, statut, mode d’exécution, environnement, scopes et paramètres de contexte |
| Artifact destinations | Destination cible d’un artefact, connecteur associé, caractère actif ou par défaut |
| Action policies | Rôle concerné, connecteur ciblé, niveau d’action (`observe`, `draft`, `propose`, `execute`), effet (`allow`, `require_approval`, `deny`) et scopes autorisés |
| Rendering profiles | Profils de rendu et format de sortie utilisés lors des publications gouvernées |
| Notification preferences | Canal, type de notification, mode de digest, seuil de sévérité et activation de la préférence |

### Exemples de réglages utiles

- exiger une approbation explicite avant une publication vers SharePoint ;
- autoriser certains connecteurs seulement pour un rôle ou un scope d’action précis ;
- préparer des préférences de notification de type `signal_digest`, `signal_alert` ou `manual_notification` sur des canaux comme `in_app`, `email`, `teams` ou `webhook` ;
- choisir un mode de digest `real_time`, `daily`, `weekly` ou `manual` selon le besoin du projet.

## Project integrations

Cet onglet sépare les intégrations **techniquement définies** au niveau plateforme de celles qui sont **réellement utilisables** par le projet.

### Causes de blocage explicitement observées

Une intégration projet ou une option d’import peut être bloquée pour cause de :

- entitlement ;
- policy ;
- permission ;
- health dégradée ;
- définition plateforme absente ou désactivée ;
- binding projet désactivé ou non configuré.

Si un blocage persiste, ouvrez ensuite **Administration de la plateforme** pour vérifier la définition technique, puis revenez sur le projet pour confirmer le binding et la readiness.

## Actions & approvals

Cet onglet transforme une recommandation en opération contrôlée. Une action peut être **visible** mais non **exécutable** si :

- vous n’avez pas le bon droit ;
- le connecteur compatible n’est pas prêt ;
- le binding projet limite l’action ;
- l’approbation requise n’a pas encore eu lieu.

## Lecture seule ou accès refusé

- **lecture seule** : l’onglet reste visible mais l’enregistrement est bloqué ;
- **accès refusé** : la route ou l’action n’est pas disponible pour votre compte.

Cette différence est particulièrement importante pour **Access control**, **Project integrations** et les réglages de gouvernance.

## Parcours recommandé après création d’un projet

1. ouvrez l’**Espace de travail** ;
2. vérifiez les membres et rôles si le projet est collaboratif ;
3. ajustez les catégories documentaires ;
4. reliez uniquement les intégrations projet réellement prêtes ;
5. chargez ensuite la **Connaissance** ;
6. passez enfin aux **Agents** et aux **Rapports & artefacts**.

## Suite

- [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
