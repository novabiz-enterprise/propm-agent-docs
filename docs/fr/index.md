---
title: Documentation utilisateur ProPM Agent
slug: /fr
description: Documentation utilisateur et administrateur en français pour ProPM Agent.
---

Cette documentation française décrit **uniquement** les fonctions observées dans l’application, le code, la configuration de déploiement et les tests automatisés de ProPM Agent.

Elle a été préparée pour deux publics :

- **utilisateurs métier** qui travaillent au niveau projet ;
- **administrateurs techniques** qui gèrent l’accès, l’authentification, les intégrations, le fournisseur IA et la supervision.

![Vue d’ensemble de l’application](/img/screenshots/fr-01-tableau-de-bord.png)

## Parcours de lecture recommandé

| Si vous cherchez… | Commencez ici |
| --- | --- |
| Vous connecter, accéder à l’application et créer votre premier projet | [Démarrage](./demarrage.md) |
| Comprendre les écrans et la navigation | [Interface et navigation](./interface-et-navigation.md) |
| Gérer les projets et l’espace de travail | [Projets et espace de travail](./projets-et-espace-de-travail.md) |
| Utiliser la connaissance projet et les agents | [Connaissance et agents](./connaissance-et-agents.md) |
| Piloter la gouvernance, les signaux et les actions | [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) |
| Produire des livrables et suivre la traçabilité IA | [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) |
| Administrer le portefeuille, l’IA, les intégrations et les sièges | [Portefeuille et administration technique](./portefeuille-et-administration-technique.md) |
| Dépanner l’usage courant et consulter la FAQ | [Maintenance, support et FAQ](./maintenance-support-faq.md) |
| Clarifier le vocabulaire produit | [Glossaire](./glossaire.md) |

## Ce que couvre ProPM Agent

À partir des comportements vérifiés, ProPM Agent organise le travail autour du **contexte projet** :

1. vous ouvrez ou créez un projet ;
2. vous alimentez la **Connaissance** du projet ;
3. vous lancez des échanges avec les **Agents** ;
4. vous transformez les résultats en **Rapports & artefacts** ;
5. vous suivez la **traçabilité** dans le **Journal IA** ;
6. vous traitez les **signaux**, les **actions gouvernées** et, si besoin, la comparaison **portefeuille** ;
7. les administrateurs gèrent les capacités techniques dans **Administration de la plateforme**.

## Architecture fonctionnelle observée

| Domaine | Ce qu’il permet |
| --- | --- |
| Tableau de bord | Voir l’état général, les métriques et les prochaines actions suggérées |
| Projets | Créer, ouvrir, parcourir et, selon le contexte, importer un projet de démonstration |
| Espace de travail | Regrouper le résumé projet, les raccourcis, les signaux et les réglages projet |
| Connaissance | Rechercher, importer, téléverser et filtrer les documents et preuves |
| Agents | Sélectionner un agent, lancer un échange, utiliser la voix si le navigateur le permet, créer des agents personnalisés selon les droits |
| Rapports & artefacts | Réviser, comparer, éditer, télécharger, publier et rattacher des PM Docs à la connaissance |
| Journal IA | Inspecter les runs, les événements d’activité et les métadonnées liées |
| Centre de commande portefeuille | Comparer plusieurs projets à l’aide de signaux configurables et de cohortes sauvegardées |
| Administration de la plateforme | Gérer les intégrations, le fournisseur IA, l’abonnement, les sièges et l’activité de plateforme |

## Ce qui distingue l’application

Les éléments suivants sont explicitement visibles dans l’interface ou les tests :

- **résultats structurés** avec éléments de preuve, fraîcheur, confiance et décisions à prendre ;
- **lignée** entre un run d’agent, une sortie structurée, un artefact et un PM Doc ;
- **signaux proactifs** pour la fraîcheur, les contradictions, les blocages et les suites à donner ;
- **actions gouvernées** avec proposition, approbation, exécution ou rejet ;
- **séparation claire** entre réglages de niveau projet et réglages techniques de niveau tenant.

## Publics et responsabilités

| Profil | Besoins principaux |
| --- | --- |
| Chef de projet / PMO | Contexte projet, agents, livrables, signaux, décisions, traçabilité |
| Contributeur | Consultation, génération de contenu, recherche dans la connaissance, suivi des runs |
| Propriétaire de projet | Paramétrage projet, rôles, catégories de documents, actions et gouvernance projet |
| Administrateur technique / abonnement | Authentification, intégrations, fournisseur IA, abonnement, sièges, journaux et supervision |

## Captures d’écran

Les captures insérées dans les pages de cette section ont été **générées par Playwright** sur l’application observée, puis cadrées sur les surfaces utiles à la lecture.

## Suite

- [Démarrage](./demarrage.md)
- [Interface et navigation](./interface-et-navigation.md)
- [Glossaire](./glossaire.md)
