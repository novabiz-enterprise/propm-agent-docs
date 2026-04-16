---
title: Gouvernance, décisions et actions
slug: /gouvernance-decisions-et-actions
description: Exploiter les signaux, appliquer les règles de gouvernance et encadrer les actions nécessitant une approbation.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)

![Boîte de réception des signaux](/img/screenshots/localized/fr/15-workspace-signals.png)

## Objectif

Cette page explique comment traiter les **signaux**, utiliser les règles de gouvernance du projet et comprendre pourquoi une action peut être visible mais non exécutable.

## Vue d’ensemble

Dans ProPM Agent, la gouvernance se manifeste dans plusieurs surfaces :

- les **signaux** qui attirent l’attention ;
- les **politiques de gouvernance** de niveau projet ;
- les **contrôles d’accès** ;
- les **actions & approvals** avant impact externe ;
- la **traçabilité** visible dans les artefacts et le Journal IA.

## Signaux : ce qu’ils représentent

Les signaux observés servent à faire remonter des sujets qui méritent un traitement explicite, par exemple :

- une **fraîcheur** insuffisante ;
- une **contradiction** entre preuves ;
- un **blocage** opérationnel ;
- une **suite à donner** nécessitant décision ou diffusion.

## Comment traiter les signaux

La boîte de réception des signaux permet de :

- relire les signaux ouverts ;
- rafraîchir leur état ;
- préparer un **digest** ;
- générer un brouillon de notification ;
- mettre un signal en pause ;
- écarter un élément lorsqu’il n’est plus pertinent.

### Pas-à-pas de triage recommandé

Pour éviter de traiter un signal uniquement « au feeling », gardez cet ordre simple :

1. lisez d’abord le **résumé** ;
2. confirmez ensuite l’**explication** et les indices de **fraîcheur** ;
3. vérifiez si le signal est **récurrent** ou s’il s’appuie sur plusieurs preuves ;
4. choisissez enfin entre **Create draft**, **Snooze 24h** ou **Dismiss** selon le niveau d’action réellement utile.

Ce triage évite de transformer trop vite un simple rappel en action gouvernée, tout en gardant une trace claire des sujets réellement prioritaires.

## États, modes et informations visibles sur un signal

### Statuts utiles

| Statut | Signification pratique | Action typique |
| --- | --- | --- |
| `open` | Le signal reste actif dans la file courante | traiter, créer un brouillon, snoozer ou écarter |
| `snoozed` | Le sujet est temporairement mis en pause | revenir après `snoozedUntil` ou après le prochain point de contrôle |
| `dismissed` | Le signal est retiré de la vue active tant qu’aucune nouvelle condition ne le rouvre | conserver la trace, sans laisser l’élément encombrer la file |
| `resolved` | Le sujet est considéré comme traité | garder l’historique pour audit, sans nouvelle action immédiate |

### Modes visibles

| Mode | Lecture utile |
| --- | --- |
| `inform` | information à relire sans action immédiate obligatoire |
| `suggest` | sujet assorti de prochaines étapes proposées |
| `draft` | sujet déjà orienté vers un brouillon ou une formulation préparatoire |
| `request_approval` | sujet qui appelle une étape d’approbation explicite |

### Ce que montre une carte de signal

Une carte de signal peut afficher :

- la **sévérité**, le **statut** et le **mode** ;
- un **titre**, un **résumé** et une **explication** du déclenchement ;
- un nombre de **preuves** et de **re-déclenchements** ;
- des badges de **source freshness** ;
- `last detected` et, si besoin, `snoozed until` ;
- des actions comme **Create draft**, **Snooze 24h** et **Dismiss** quand le rôle l’autorise.

### Si vous voyez… / faites…

| Si vous voyez… | Faites… |
| --- | --- |
| un signal `open` en mode `inform` | relisez les preuves et décidez s’il faut simplement surveiller ou préparer un digest |
| un signal `open` en mode `suggest` | transformez-le en prochaine étape claire ou en brouillon si la suite doit être tracée |
| un signal `draft` | vérifiez s’il est déjà en train d’alimenter un digest, un brouillon ou une demande d’action |
| un signal `request_approval` | basculez vers la revue gouvernée et confirmez les conditions d’approbation |
| un signal `snoozed` | ne le rouvrez pas automatiquement ; contrôlez d’abord `snoozedUntil` et l’évolution réelle du contexte |
| un signal `dismissed` | gardez la trace, mais n’encombrez pas la file active tant qu’aucune nouvelle preuve n’apparaît |
| un signal `resolved` | utilisez-le comme historique, pas comme nouvel ordre d’action |

## Quand agir sur un signal

| Situation | Action recommandée |
| --- | --- |
| Information vieillissante | Vérifier la source, relancer l’import ou mettre à jour la connaissance |
| Contradiction entre preuves | Relire les citations, arbitrer et documenter la décision |
| Blocage projet | Transformer le constat en action gouvernée ou en suivi formalisé |
| Sujet à diffuser | Préparer un digest ou une notification adaptée |

## Digest et brouillons de notification

### Générer un digest (`Generate digest draft`)

La génération d’un digest produit une vue synthétique réutilisable depuis l’**Espace de travail**. La carte **`Latest digest`** peut afficher :

- un **headline** ;
- une **narrative** ;
- la date **generated at** ;
- le nombre total de signaux résumés ;
- le nombre de brouillons de notification générés ;
- le détail des signaux inclus dans le digest.

### Relire un brouillon de notification

Les **Notification drafts** exposent au minimum :

- le **statut** ;
- le **canal** ;
- le **type** de notification ;
- l’explication ou rationale ;
- un éventuel besoin d’**approval** ;
- le nombre de **destinataires** ;
- une date `sendAfter` si elle existe ;
- le lien vers le **signal** ou le **digest** d’origine ;
- un éventuel état `snoozed`.

Dans le panneau projet actuellement observé, l’envoi direct est surtout prévu pour `in_app`. Les canaux externes comme `email`, `teams` ou `webhook` peuvent rester en posture **held / draft** tant que le chemin de diffusion gouvernée n’est pas disponible. Les utilisateurs sans droit d’envoi peuvent quand même relire ces brouillons en lecture seule.

![Brouillons de notification à relire](/img/screenshots/localized/fr/16-notification-drafts.png)

### Flux de revue recommandé pour un brouillon de notification

1. confirmez que le **titre** et le **message** sont compréhensibles sans contexte caché ;
2. vérifiez le **signal** ou le **digest** lié ;
3. relisez les métadonnées d’**approval**, de **destinataires** et de `sendAfter` ;
4. n’envoyez que si le **canal** et votre **rôle** autorisent réellement cette diffusion ;
5. utilisez **snooze** ou **dismiss** quand le brouillon ne doit pas rester actif dans la file.

## Quatre objets à ne pas confondre

| Objet | Rôle dans le flux | Quand l’utiliser |
| --- | --- | --- |
| `digest` | synthèse de plusieurs signaux | quand l’équipe a besoin d’une vue regroupée avant diffusion ou arbitrage |
| `notification draft` | brouillon de message destiné à un canal | quand le sujet doit être relu avant envoi, surtout hors `in_app` |
| `action request` | demande d’opération gouvernée nécessitant parfois approbation et exécution | quand une suite externe ou un changement concret doit être lancé |
| `artifact` | livrable ou objet gouverné historisé | quand le contenu doit être conservé, comparé, approuvé, publié ou réinjecté |

Cette distinction réduit les confusions fréquentes entre un sujet **à résumer**, un message **à relire**, une opération **à exécuter** et un document **à gouverner**.

## Gouvernance de niveau projet

Les onglets de l’espace de travail forment le socle de la gouvernance projet :

- **Access control** détermine qui peut agir ;
- **Document categories** structure les preuves ;
- **Governance policies** encadre validations et publication ;
- **Project integrations** détermine quelles actions externes sont réellement faisables.

### Comment lire les effets de politique

| Couple ou champ | Lecture pratique | Effet réel pour l’utilisateur |
| --- | --- | --- |
| `allow` + `observe` | le sujet peut être vu et suivi | lecture et surveillance sans lancer d’exécution |
| `allow` + `draft` | la préparation est autorisée | l’utilisateur peut créer un brouillon ou préparer le flux |
| `allow` + `propose` | la proposition formelle est permise | une demande peut être soumise dans la file gouvernée |
| `allow` + `execute` | l’exécution directe est autorisée | l’action peut partir sans étape supplémentaire si le reste est prêt |
| `require_approval` + `execute` | l’exécution reste possible mais pas immédiate | la file d’approbation devient obligatoire avant exécution |
| `deny` | le flux est interdit pour le rôle ou le scope | l’action peut disparaître ou rester non exécutable malgré sa visibilité de principe |

Ces couples aident à comprendre pourquoi un utilisateur peut **voir**, **préparer**, **proposer** ou **exécuter** une action, sans supposer que toutes les surfaces autorisent automatiquement la même profondeur d’action.

![Politiques de gouvernance du projet](/img/screenshots/localized/fr/14-governance-policies.png)

## Actions & approvals

L’écran **Actions & approvals** transforme une recommandation en opération contrôlée.

### Cycle de vie observé

1. proposition d’une action ;
2. rattachement au projet, à un signal ou à un artefact ;
3. approbation ou rejet ;
4. exécution lorsque les conditions sont réunies ;
5. traçabilité de l’événement dans le produit.

![Actions et approbations](/img/screenshots/localized/fr/17-actions-approvals.png)

### Pas-à-pas opératoire pour une action gouvernée

Utilisez cet ordre quand une suite externe devient nécessaire :

1. ouvrez **Actions & approvals** depuis l’**Espace de travail** ;
2. choisissez d’abord le **type d’action** afin que l’interface résolve les **Execution connectors** compatibles ;
3. sélectionnez une option d’exécution **saine** et **autorisée** si plusieurs options existent ;
4. ajoutez une justification courte pour faciliter l’approbation ;
5. soumettez la demande et vérifiez qu’elle apparaît en file avec **Trace ID** et détails de payload ;
6. suivez ensuite le passage de la file vers **approved**, **rejected** ou **executed**.

### Si aucune option d’exécution n’apparaît

Gardez cet ordre de remédiation strict :

1. vérifiez les **Execution connectors** dans **Governance policies** ;
2. vérifiez ensuite **Project integrations** pour confirmer le binding réellement prêt ;
3. ouvrez **Administration de la plateforme** si la définition technique semble manquante ou dégradée ;
4. contrôlez enfin l’**entitlement**, la **policy** et votre **permission** avant de conclure à une panne.

Ce circuit évite de traiter comme incident technique un blocage qui vient en réalité d’un rôle, d’une politique ou d’une définition non encore exposée au projet.

## Exemples d’actions gouvernées confirmées

Les types d’action visibles dans le produit incluent notamment :

- publication vers **SharePoint** ;
- message **Teams** ;
- message **Outlook** ;
- ticket **Jira** ;
- ticket **Azure DevOps** ;
- **webhook** gouverné.

### Champs qui varient selon le type d’action

| Type d’action | Champs typiques à fournir |
| --- | --- |
| Publication vers SharePoint | titre, option d’exécution, `artifact ID`, destination, profil de rendu ou format |
| Message Teams / Outlook | titre, option d’exécution, corps du message, destinataires ou brouillon lié |
| Ticket Jira / Azure DevOps | titre, option d’exécution et description du ticket |
| Calendar follow-up | titre, option d’exécution, participants et date / heure de départ |

### États et détails de la file d’approbation

La file d’actions gouvernées permet de suivre un passage typique de **draft** à **pending approval**, puis vers **approved**, **executed** ou **rejected**.

| Statut | Lecture pratique |
| --- | --- |
| `draft` | demande encore préparatoire, pas encore envoyée au flux complet |
| `pending approval` | approbation attendue avant suite réelle |
| `approved` | accord obtenu, mais l’exécution effective doit encore être confirmée |
| `executed` | action partie et journalisée comme exécutée |
| `rejected` | la demande a été refusée et ne doit pas être considérée comme lancée |

Chaque carte de file peut aussi exposer :

- le type d’action et le connecteur sélectionné ;
- le **status** et l’**action level** ;
- `requested at`, `requested by`, `approved by`, `approved at`, `executed at` ;
- le **Trace ID** ;
- un `relatedArtifactId` ou `relatedNotificationId` ;
- le **payload audit detail**, les notes d’approbation et le résultat d’exécution.

![File d’actions gouvernées et détails d’audit](/img/screenshots/localized/fr/17-action-queue.png)

## Pourquoi une action peut être visible mais non exécutable

Une action peut apparaître dans l’interface mais rester bloquée si :

- vous n’avez pas le droit requis ;
- le connecteur compatible n’est pas prêt ;
- le binding projet limite l’action ;
- le plan ou l’entitlement bloque la capacité ;
- une approbation est encore attendue.

## Lien avec les intégrations

Une règle importante ressort de l’application :

- le **niveau projet** décide comment le projet travaille ;
- le **niveau plateforme** décide quels outils, fournisseurs et intégrations existent réellement.

En pratique, si une action ou une notification est bloquée, vérifiez d’abord le **binding projet**, puis la définition technique dans **Administration de la plateforme**.

## Exemple de scénario complet

1. un signal `open` remonte un écart de fraîcheur ou un suivi en retard ;
2. l’équipe relit l’explication, les preuves et les prochaines étapes suggérées ;
3. elle crée un **draft** ou génère un **digest** pour préparer la synthèse ;
4. un brouillon de notification est revu, envoyé en `in_app` ou laissé en attente si le canal externe reste gouverné ;
5. si une suite externe est nécessaire, une action est proposée dans **Actions & approvals** ;
6. la file d’approbation, le **Trace ID**, les artefacts liés et le **Journal IA** servent ensuite de trace commune.

## Bonnes pratiques de gouvernance

- traitez les signaux comme une file de priorisation, pas comme une simple liste ;
- n’exécutez pas d’action externe sans vérifier l’artefact ou la preuve source ;
- utilisez les catégories documentaires pour réduire l’ambiguïté des sources ;
- gardez la politique de gouvernance cohérente avec les rôles réellement attribués ;
- documentez les arbitrages importants dans les livrables ou dans le flux de validation associé.

## Suite

- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
