---
title: Gouvernance, décisions et actions
slug: /gouvernance-decisions-et-actions
description: Exploiter les signaux, appliquer les règles de gouvernance et encadrer les actions nécessitant une approbation.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)

![Boîte de réception des signaux](/img/screenshots/fr-04-signaux.png)

## Vue d’ensemble

Dans ProPM Agent, la gouvernance ne se limite pas à un règlement statique. Elle se manifeste dans plusieurs surfaces :

- les **signaux** qui attirent l’attention ;
- les **politiques de gouvernance** de niveau projet ;
- les **contrôles d’accès** ;
- les **actions & approbations** avant impact externe ;
- la **traçabilité** visible dans les artefacts et le Journal IA.

## Signaux : ce qu’ils représentent

Les signaux observés servent à faire remonter des sujets qui méritent un traitement explicite, par exemple :

- une **fraîcheur** insuffisante de la preuve ;
- une **contradiction** entre éléments ;
- un **blocage** ou une tension opérationnelle ;
- une **suite à donner** nécessitant décision ou notification.

L’objectif n’est pas d’automatiser aveuglément, mais de rendre les écarts visibles et explicables.

## Comment traiter les signaux

La boîte de réception des signaux permet, selon le comportement observé dans le code et l’interface, de :

- relire les signaux ouverts ;
- rafraîchir leur état ;
- préparer un **digest** ;
- générer un brouillon de notification interne ;
- mettre certains éléments en pause temporaire ;
- écarter un élément lorsqu’il n’est plus pertinent.

## Quand agir sur un signal

| Situation | Action recommandée |
| --- | --- |
| Information simplement vieillissante | Vérifier la source, rafraîchir ou mettre à jour la connaissance |
| Contradiction entre preuves | Relire les citations, arbitrer, puis documenter la décision |
| Blocage projet | Transformer le constat en action gouvernée ou en suivi formalisé |
| Sujet à diffuser | Préparer un digest ou une notification adaptée |

## Contrôles de gouvernance au niveau projet

Les onglets de l’espace de travail forment le socle de la gouvernance projet.

### Access control

Définit qui peut consulter, contribuer, configurer ou administrer le projet.

### Document categories

Cadre la manière de classer les sources et facilite la réutilisation correcte des preuves.

### Governance policies

Rassemble les règles qui encadrent les comportements autorisés, les validations attendues et les choix de publication.

### Project integrations

Sépare les intégrations simplement disponibles au niveau plateforme de celles qui sont réellement utilisables par le projet.

## Actions & approvals

L’écran **Actions & approvals** transforme une recommandation en opération contrôlée.

Les comportements observés montrent un cycle de vie explicite :

1. proposition d’une action ;
2. rattachement au projet, à un signal ou à un artefact selon le cas ;
3. approbation ou rejet ;
4. exécution lorsque les conditions sont réunies ;
5. traçabilité de l’événement.

![Actions et approbations](/img/screenshots/fr-05-actions-approbations.png)

## Exemples d’actions gouvernées confirmées dans le produit

Les types d’action visibles dans le code incluent notamment :

- publier un artefact vers **SharePoint** ;
- envoyer un message **Teams** ;
- envoyer un message **Outlook** ;
- créer un ticket **Jira** ;
- créer un ticket **Azure DevOps** ;
- utiliser un **webhook** gouverné.

Ces actions n’ont de sens que si les connecteurs correspondants ont été configurés et validés.

## Principes de décision à conserver

- une recommandation d’agent n’est pas automatiquement une décision validée ;
- une action externe doit rester **gouvernée** ;
- toute diffusion importante doit pouvoir être reliée à une preuve, à un artefact ou à un run ;
- le projet doit distinguer ce qui relève du **jugement humain** et ce qui relève de l’**automatisation contrôlée**.

## Séparer niveau projet et niveau plateforme

Une règle importante ressort de l’application :

- le **niveau projet** décide comment un projet travaille ;
- le **niveau plateforme** décide quels outils, fournisseurs et intégrations existent réellement.

En pratique, un chef de projet peut avoir la main sur les règles projet sans pouvoir activer un nouveau fournisseur IA ou un nouveau connecteur pour tout le tenant.

## Bonnes pratiques de gouvernance

- traitez les signaux comme une file de priorisation, pas comme une simple liste passive ;
- n’exécutez pas d’action externe sans vérifier l’artefact ou la preuve source ;
- utilisez les catégories documentaires pour réduire l’ambiguïté des sources ;
- gardez la politique de gouvernance cohérente avec les rôles réellement attribués ;
- documentez les arbitrages importants dans les livrables ou dans le flux de validation associé.

## Suite

- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
