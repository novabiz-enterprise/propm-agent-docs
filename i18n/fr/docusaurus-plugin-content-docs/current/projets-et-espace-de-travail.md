---
title: Projets et espace de travail
slug: /projets-et-espace-de-travail
description: Créer un projet, changer de contexte et utiliser l’espace de travail comme centre de pilotage.
---

[Accueil](./index.md) · [Interface et navigation](./interface-et-navigation.md) · [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)

![Espace de travail projet](/img/screenshots/localized/fr/03-workspace-overview.png)

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

![Réglages des agents au niveau projet](/img/screenshots/localized/fr/12-agent-configuration.png)

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

![Catégories documentaires du projet](/img/screenshots/localized/fr/13-document-categories.png)

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

### Scénario crédible — projet sensible / diffusion gouvernée

Pour un projet où toute diffusion externe doit être contrôlée, un réglage cohérent ressemble souvent à ceci :

1. **Artifact destinations** : destination SharePoint active avec profil de rendu connu ;
2. **Action policies** : `allow` pour `observe` et `draft`, mais `require_approval` pour `execute` sur les publications et notifications externes ;
3. **Execution connectors** : connecteurs externes visibles seulement pour les rôles réellement autorisés ;
4. **Notification preferences** : `signal_digest` en `daily` pour l’équipe, `signal_alert` seulement pour les cas les plus sensibles ;
5. **Project integrations** : bindings activés uniquement pour les connecteurs déjà validés au niveau plateforme.

Cette combinaison évite qu’un brouillon, un digest ou une action apparaisse comme directement diffusable alors que le projet attend encore une approbation humaine.

![Politiques de gouvernance du projet](/img/screenshots/localized/fr/14-governance-policies.png)

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

### Comment interpréter un blocage de binding

| Cause visible | Lecture pratique | Réflexe recommandé |
| --- | --- | --- |
| `entitlement` | le plan ou la capacité autorisée ne couvre pas ce connecteur ou cette famille d’usage | vérifiez l’abonnement et les capacités dans [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) |
| `policy` | la gouvernance projet interdit ou limite ce flux | relisez **Governance policies** avant de modifier le binding |
| `permission` | le connecteur existe mais votre rôle ne permet pas de l’activer ou de l’utiliser | contrôlez le rôle projet dans [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) |
| `health` | la définition plateforme existe mais sa readiness ou sa santé est dégradée | ouvrez l’administration plateforme pour confirmer la définition technique |
| définition absente ou désactivée | rien n’est réellement prêt au niveau tenant | demandez d’abord la mise en place ou la réactivation plateforme |
| binding projet absent | la plateforme est prête mais le projet ne consomme pas encore l’intégration | activez explicitement le binding côté projet |

Si un blocage persiste, ouvrez ensuite **Administration de la plateforme** pour vérifier la définition technique, puis revenez sur le projet pour confirmer le binding et la readiness.

Point important : **Project integrations** conditionne ensuite ce qui apparaît réellement dans **Actions & approvals**. Si un connecteur n’est ni prêt ni autorisé ici, il ne deviendra pas une option exécutable plus loin dans le flux gouverné.

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
2. vérifiez d’abord les **membres** et **rôles** si le projet est collaboratif ;
3. ajustez ensuite les **catégories documentaires** ;
4. relisez les **Governance policies** avant toute diffusion externe ;
5. reliez uniquement les **Project integrations** réellement prêtes ;
6. chargez ensuite la **Connaissance** ;
7. passez enfin aux **Agents**, aux **Rapports & artefacts** et aux **Actions & approvals**.

## Deux scénarios de paramétrage utiles

### Scénario 1 — projet neuf minimal

Pour un projet qui démarre, gardez un ordre simple :

1. ajoutez les membres indispensables et vérifiez leurs rôles ;
2. créez une taxonomie documentaire courte dans **Document categories** ;
3. activez seulement les intégrations déjà validées et vraiment nécessaires ;
4. préparez une gouvernance minimale, par exemple un digest interne et une destination d’artefact par défaut ;
5. chargez ensuite la **Connaissance** avant d’ouvrir les agents.

Ce scénario évite d’ouvrir trop tôt des connecteurs ou des règles de diffusion qui ne seront pas utilisés immédiatement.

### Scénario 2 — projet sensible / diffusion gouvernée

Pour un projet exposé à des notifications externes ou à une publication documentaire formelle :

1. limitez les rôles ayant accès aux connecteurs externes ;
2. préparez une destination SharePoint ou équivalent dans **Artifact destinations** ;
3. appliquez `require_approval` sur les niveaux d’action qui peuvent produire une diffusion externe ;
4. privilégiez `signal_digest` pour le suivi courant et réservez les alertes instantanées aux cas critiques ;
5. ne rendez visibles dans **Project integrations** que les bindings dont la readiness et la politique sont déjà conformes.

Ce second scénario aligne lecture des signaux, diffusion, approbation et exécution réelle au lieu de laisser l’équipe traiter chaque écran comme une surface indépendante.

## Suite

- [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

## Suite

- [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
