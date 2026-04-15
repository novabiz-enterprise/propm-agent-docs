---
title: Connaissance et agents
slug: /fr/connaissance-et-agents
description: Alimenter la base de connaissance projet, lancer des échanges avec les agents et exploiter les résultats.
---

[Accueil FR](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)

![Connaissance projet](/img/screenshots/fr-06-connaissance.png)

## Rôle de la Connaissance

La page **Connaissance** centralise les documents et preuves utilisables par les agents et les utilisateurs.

Les capacités observées sont les suivantes :

- recherche dans les contenus projet ;
- téléversement manuel ;
- rafraîchissement des données ;
- import depuis des sources approuvées ;
- consultation de l’historique des imports ;
- tri, filtrage et pagination des résultats.

## Ce que vous pouvez faire dans la page Connaissance

| Action | Usage |
| --- | --- |
| Rechercher | Retrouver un document, une preuve ou un sujet précis |
| Téléverser | Ajouter un document directement au projet |
| Importer | Charger des contenus depuis une source configurée |
| Rafraîchir | Actualiser l’état ou les résultats visibles |
| Consulter l’historique | Vérifier si un import a été lancé et dans quel état il se trouve |

## Import depuis des sources approuvées

L’application prévoit un mécanisme d’import depuis des connecteurs de connaissance validés par l’administration de plateforme.

En pratique :

- les options disponibles dépendent des **sources activées** ;
- l’historique permet de vérifier qu’un import a bien été lancé ;
- la disponibilité d’une source dépend du paramétrage technique et des droits.

## Conseils d’usage pour la Connaissance

- chargez les documents de référence **avant** de demander une analyse importante aux agents ;
- utilisez les catégories documentaires du projet pour garder une base cohérente ;
- en cas d’absence apparente d’un document, vérifiez d’abord l’**historique d’import** et l’état de rafraîchissement ;
- limitez les doublons pour éviter de brouiller la traçabilité et les citations.

![Vue Agents](/img/screenshots/fr-07-agents.png)

## Rôle de la page Agents

La page **Agents** est conçue pour exploiter le contexte projet de manière guidée.

Les fonctions confirmées sont :

- liste des agents disponibles ;
- zone de conversation ;
- utilisation du contexte projet ;
- sorties structurées et éléments de preuve ;
- sessions sauvegardées dans le navigateur ;
- création et suppression d’agents personnalisés selon les droits ;
- mode voix si le navigateur prend en charge cette capacité.

## Comment travailler avec les agents

### 1. Vérifier le projet actif

Avant tout échange, contrôlez le projet courant. Les citations, l’historique et les résultats doivent rester alignés sur le bon contexte.

### 2. Choisir l’agent adapté

Tous les agents n’ont pas le même rôle. Certains sont orientés coordination, d’autres risques, planning, gouvernance ou production d’artefacts.

### 3. Formuler une demande exploitable

Préférez une consigne qui précise :

- l’objectif ;
- le périmètre du projet ;
- le type de sortie attendu ;
- la nécessité éventuelle de citer les preuves.

### 4. Lire la sortie structurée

Les réponses observées peuvent inclure :

- un résumé ;
- des décisions proposées ;
- un niveau de confiance ;
- des éléments de fraîcheur ;
- des citations ;
- des recommandations ou suites à donner.

## Sessions et mémoire locale

Les sessions d’agent sont sauvegardées dans le navigateur. Cela a plusieurs conséquences :

- l’historique visible peut dépendre du poste ou du navigateur utilisé ;
- changer de navigateur peut faire disparaître un fil sauvegardé localement ;
- il faut traiter le navigateur comme un composant de votre poste de travail, pas comme une archive centrale.

## Agents personnalisés

La création d’agents personnalisés est prévue, mais dépend du niveau de droit.

Retenez les principes suivants :

- tous les utilisateurs n’ont pas nécessairement le droit de créer un agent ;
- la suppression d’un agent personnalisé est également contrôlée ;
- un agent personnalisé ne remplace pas les règles de gouvernance du projet ou de la plateforme.

## Voix et compatibilité navigateur

Le support voix dépend explicitement de la compatibilité navigateur. Si la capacité n’est pas disponible :

- utilisez la saisie texte ;
- vérifiez les permissions micro du navigateur ;
- distinguez une limitation du navigateur d’un problème applicatif.

## Bonnes pratiques pour obtenir de meilleurs résultats

- chargez des sources fiables et récentes dans la Connaissance ;
- demandez explicitement des **preuves** ou des **citations** lorsque la décision doit être justifiée ;
- relisez la confiance et la fraîcheur avant de réutiliser un résultat ;
- transformez les résultats utiles en **Rapports & artefacts** lorsque vous devez publier, réviser ou partager un livrable.

## Suite

- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
