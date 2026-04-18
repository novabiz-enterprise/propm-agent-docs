---
title: Projets et espace de travail
slug: /projets-et-espace-de-travail
description: Créer un projet, déléguer les premiers rôles et utiliser l’espace de travail comme centre de pilotage.
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

## Créateur du projet : droits initiaux et délégation

À la création, le **créateur du projet** démarre avec le rôle **Propriétaire du projet** et l’ensemble des permissions projet observées. En pratique, c’est donc lui qui peut ouvrir le projet, vérifier la configuration initiale et **déléguer ensuite les rôles** au reste de l’équipe.

### Délégation recommandée juste après la création

1. ouvrez **Contrôle d’accès** ;
2. ajoutez au moins un autre **Propriétaire du projet** ou un **Chef de projet** de confiance ;
3. créez si besoin des rôles personnalisés ciblés plutôt que de multiplier les propriétaires ;
4. attribuez ensuite les rôles aux contributeurs, lecteurs et auditeurs ;
5. relisez enfin les **Politiques de gouvernance** et les **Intégrations du projet** pour aligner droits, connecteurs et validations.

### Ce que la plateforme protège encore

- l’entrée du **créateur** reste protégée ;
- le rôle du créateur reste fixe dans l’interface observée ;
- la délégation se fait par attribution de rôles supplémentaires, pas par suppression de la protection du créateur ;
- pour le détail RBAC, voir [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md).

## Ouvrir et changer de projet

Un projet peut être ouvert depuis :

- la page **Projets** ;
- le **sélecteur de projet** de la barre supérieure ;
- le contexte récemment mémorisé dans le navigateur.

Lorsque vous changez de projet, les surfaces suivantes se recalent : **Connaissance**, **Agents**, **Documents PM / Rapports & artefacts**, **Journal IA**, les signaux et les réglages projet.

## L’espace de travail : centre de pilotage du projet

L’**Espace de travail** réunit dans une même surface :

- le **résumé projet** ;
- des raccourcis vers **Agents**, **Documents PM** et **Journal IA** ;
- une vue de **transparence opérationnelle** ;
- les **signaux** du projet ;
- les onglets de réglage de niveau projet.

Cette documentation française ne présente plus de carte **voix** dédiée dans l’**Espace de travail**. Quand une saisie vocale existe encore dans certains environnements, elle se fait dans **Agents**, pas comme point d’entrée séparé ici.

## Transparence opérationnelle et préparation

L’espace de travail ne sert pas seulement à résumer le projet. Il permet aussi de voir si le projet est prêt à agir :

- présence ou absence de signaux ;
- activité récente ;
- raccourcis vers les brouillons ou livrables liés ;
- préparation des intégrations projet quand elles existent ;
- exposition du fournisseur IA effectif sans ouvrir la configuration tenant.

Utilisez cette zone pour comprendre **pourquoi** une action ou un import peut être disponible, à confirmer ou bloqué.

## Onglets de niveau projet

| Onglet | À quoi il sert |
| --- | --- |
| Configuration des agents | Paramétrer les agents pour ce projet |
| Contrôle d’accès | Gérer membres, rôles et permissions de niveau projet |
| Catégories de documents | Adapter la taxonomie documentaire du projet et la propager aux surfaces documentaires du projet |
| Politiques de gouvernance | Définir connecteurs, destinations, politiques d’action, profils de rendu et préférences de notification de niveau projet |
| Intégrations du projet | Relier au projet les intégrations prêtes et autorisées |
| Actions & approbations | Gérer les demandes d’action, validations et exécution gouvernée |

## Configuration des agents

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
- `Trace ID` associé.

![Réglages des agents au niveau projet](/img/screenshots/localized/fr/12-agent-configuration.png)

## Contrôle d’accès

L’onglet **Contrôle d’accès** administre les membres et rôles projet. Il supporte :

- les rôles standards ;
- les rôles personnalisés ;
- les garde-fous RBAC ;
- la lecture seule pour les profils non autorisés à modifier.

Voir la page dédiée : [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md).

## Catégories de documents

Cet onglet sert à aligner la classification documentaire avec le projet. En pratique, la taxonomie projet influence les catégories proposées lors des téléversements et certains sélecteurs documentaires utilisés ensuite dans les surfaces projet.

### Effet concret d’une mise à jour

Quand la liste des catégories est modifiée avec succès :

- le sélecteur de catégorie de téléversement dans **Connaissance** est mis à jour ;
- les sélecteurs et filtres de catégorie dans **Documents PM** se recalent quand ils utilisent cette taxonomie partagée ;
- le changement reste limité au **projet courant**.

### Exemples pratiques

Gardez une taxonomie courte et stable. Par exemple, au lieu de multiplier les variantes proches, préférez quelques catégories cohérentes comme :

- charte projet ;
- registre des risques ;
- rapport de statut ;
- plan achats ;
- plan de communication.

L’objectif n’est pas d’encoder la version du document dans la catégorie, mais de garder un classement réutilisable entre **Connaissance** et **Documents PM**.

![Catégories documentaires du projet](/img/screenshots/localized/fr/13-document-categories.png)

## Politiques de gouvernance

Cet onglet fixe les règles qui encadrent les décisions, validations et comportements de gouvernance du projet. Utilisez-le avant de publier un livrable ou d’autoriser une action externe gouvernée.

### Sous-surfaces visibles dans Politiques de gouvernance

| Sous-surface | Ce qu’elle règle |
| --- | --- |
| Connecteurs d’exécution | Type de connecteur, statut, mode d’exécution, environnement, scopes et paramètres de contexte |
| Destinations des artefacts | Destination cible d’un artefact, connecteur associé, caractère actif ou par défaut |
| Politiques d’action | Rôle concerné, connecteur ciblé, niveau d’action (`observe`, `draft`, `propose`, `execute`), effet (`allow`, `require_approval`, `deny`) et scopes autorisés |
| Profils de rendu | Profils de rendu et format de sortie utilisés lors des publications gouvernées |
| Préférences de notification | Canal, type de notification, mode de digest, seuil de sévérité et activation de la préférence |

### Exemples de réglages utiles

- exiger une approbation explicite avant une publication vers **SharePoint** ;
- autoriser la création de ticket **Jira** seulement au niveau `propose` pour certains rôles ;
- préparer des préférences `signal_digest` en `in_app` pour le suivi interne ;
- laisser les notifications externes `email`, `teams` ou `webhook` dans un chemin approuvé seulement lorsque le connecteur est sain ;
- choisir des profils de rendu séparés pour les publications **DOCX** et **XLSX**.

### Scénario crédible — projet sensible / diffusion gouvernée

Pour un projet où toute diffusion externe doit être contrôlée, un réglage cohérent ressemble souvent à ceci :

1. **Destinations des artefacts** : destination SharePoint active avec profil de rendu connu ;
2. **Politiques d’action** : `allow` pour `observe` et `draft`, mais `require_approval` pour `execute` sur les publications et notifications externes ;
3. **Connecteurs d’exécution** : connecteurs externes visibles seulement pour les rôles réellement autorisés ;
4. **Préférences de notification** : `signal_digest` en `daily` pour l’équipe, `signal_alert` seulement pour les cas les plus sensibles ;
5. **Intégrations du projet** : bindings activés uniquement pour les connecteurs déjà validés au niveau plateforme.

Cette combinaison évite qu’un brouillon, un digest ou une action apparaisse comme directement diffusable alors que le projet attend encore une approbation humaine.

![Politiques de gouvernance du projet](/img/screenshots/localized/fr/14-governance-policies.png)

## Intégrations du projet

Cet onglet sépare les intégrations **techniquement définies** au niveau plateforme de celles qui sont **réellement utilisables** par le projet.

### Causes de blocage explicitement observées

Une intégration projet ou une option d’import peut être bloquée pour cause de :

- entitlement ;
- policy ;
- permission ;
- état health à vérifier ;
- définition plateforme absente ou désactivée ;
- binding projet désactivé ou non configuré.

### Comment interpréter un blocage de binding

| Cause visible | Lecture pratique | Réflexe recommandé |
| --- | --- | --- |
| `entitlement` | le plan ou la capacité autorisée ne couvre pas ce connecteur ou cette famille d’usage | vérifiez l’abonnement et les capacités dans [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) |
| `policy` | la gouvernance projet interdit ou limite ce flux | relisez **Politiques de gouvernance** avant de modifier le binding |
| `permission` | le connecteur existe mais votre rôle ne permet pas de l’activer ou de l’utiliser | contrôlez le rôle projet dans [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md) |
| `health` | la définition plateforme existe mais sa préparation ou sa disponibilité demandent une vérification | ouvrez l’**Administration de la plateforme** pour confirmer la définition technique |
| définition absente ou désactivée | rien n’est réellement prêt au niveau tenant | demandez d’abord la mise en place ou la réactivation plateforme |
| binding projet absent | la plateforme est prête mais le projet ne consomme pas encore l’intégration | activez explicitement le binding côté projet |

Si un blocage persiste, ouvrez ensuite **Administration de la plateforme** pour vérifier la définition technique, puis revenez sur le projet pour confirmer le binding et la préparation.

### Jira, SharePoint et chaîne des connecteurs

![Flux Jira et SharePoint entre plateforme, projet et actions](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

Gardez cette logique simple :

1. **Intégrations de la plateforme** définit le connecteur ou le fournisseur d’ingestion ;
2. **Intégrations du projet** expose seulement le binding approuvé et prêt ;
3. **Politiques de gouvernance** décide ce que chaque rôle peut observer, préparer, proposer ou exécuter ;
4. **Actions & approbations** applique ensuite ces règles lors de la demande réelle ;
5. **Documents PM** et **Journal IA** conservent la trace du flux.

Voir la page dédiée : [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint).

## Actions & approbations

Cet onglet transforme une recommandation en opération contrôlée. Une action peut être **visible** mais non **exécutable** si :

- vous n’avez pas le bon droit ;
- le connecteur compatible n’est pas prêt ;
- le binding projet limite l’action ;
- l’approbation requise n’a pas encore eu lieu.

## Lecture seule ou accès refusé

- **lecture seule** : l’onglet reste visible mais l’enregistrement est bloqué ;
- **accès refusé** : la route ou l’action n’est pas disponible pour votre compte.

Cette différence est particulièrement importante pour **Contrôle d’accès**, **Intégrations du projet** et les réglages de gouvernance.

## Parcours recommandé après création d’un projet

1. ouvrez l’**Espace de travail** ;
2. vérifiez d’abord le **créateur**, les **membres** et les **rôles** si le projet est collaboratif ;
3. ajustez ensuite les **catégories de documents** ;
4. relisez les **Politiques de gouvernance** avant toute diffusion externe ;
5. reliez uniquement les **Intégrations du projet** réellement prêtes ;
6. chargez ensuite la **Connaissance** ;
7. passez enfin aux **Agents**, aux **Documents PM** et aux **Actions & approbations**.

## Deux scénarios de paramétrage utiles

### Scénario 1 — projet neuf minimal

Pour un projet qui démarre, gardez un ordre simple :

1. ajoutez les membres indispensables et vérifiez leurs rôles ;
2. créez une taxonomie documentaire courte dans **Catégories de documents** ;
3. activez seulement les intégrations déjà validées et vraiment nécessaires ;
4. préparez une gouvernance minimale, par exemple un digest interne et une destination d’artefact par défaut ;
5. chargez ensuite la **Connaissance** avant d’ouvrir les agents.

Ce scénario évite d’ouvrir trop tôt des connecteurs ou des règles de diffusion qui ne seront pas utilisés immédiatement.

### Scénario 2 — projet sensible / diffusion gouvernée

Pour un projet exposé à des notifications externes ou à une publication documentaire formelle :

1. limitez les rôles ayant accès aux connecteurs externes ;
2. préparez une destination SharePoint ou équivalent dans **Destinations des artefacts** ;
3. appliquez `require_approval` sur les niveaux d’action qui peuvent produire une diffusion externe ;
4. privilégiez `signal_digest` pour le suivi courant et réservez les alertes instantanées aux cas critiques ;
5. ne rendez visibles dans **Intégrations du projet** que les bindings dont la préparation et la politique sont déjà conformes.

Ce second scénario aligne lecture des signaux, diffusion, approbation et exécution réelle au lieu de laisser l’équipe traiter chaque écran comme une surface indépendante.

## Suite

- [Contrôle d’accès et rôles projet](./controle-acces-et-roles.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
