---
title: Tableau de bord
slug: /tableau-de-bord
description: Lire le tableau de bord ProPM Agent, comprendre les métriques projet et choisir la prochaine action.
---

[Accueil](./index.md) · Tableau de bord

![Vue d’ensemble du tableau de bord](/img/screenshots/localized/fr/01-dashboard.jpg)

![Tableau de bord annoté : projet actif, métriques, activité, raccourcis et santé](/img/annotated/fr/dashboard-annote.svg)

## Objectif

Le tableau de bord donne une synthèse du projet actif : activité récente, connaissance, agents, Documents PM, signaux, actions et raccourcis vers les pages de travail.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Comprendre l’état du projet et ouvrir la bonne page |
| Project Manager | Prioriser les documents, signaux, actions et runs récents |
| Propriétaire de projet | Vérifier si le projet est prêt à être utilisé |
| Administrateur | Diagnostiquer seulement si l’état indique un problème global |

## Avant de commencer

- Vous êtes connecté à ProPM Agent.
- Un projet actif est sélectionné, sauf si vous consultez volontairement l’état vide.
- Votre rôle vous donne accès au projet.

## Lire le tableau de bord

1. Ouvrez la page **Dashboard** ou **Tableau de bord**.
2. Vérifiez le nom du **projet actif** dans la barre supérieure.
3. Lisez les cartes de synthèse : agents, documents, runs, Documents PM, signaux et actions.
4. Consultez l’activité récente pour repérer ce qui a changé depuis votre dernière visite.
5. Utilisez les raccourcis vers **Workspace**, **Knowledge**, **Agents**, **PM Docs** ou **AI Log** selon la prochaine action.

## Quand aucun projet n’est sélectionné

| État affiché | Signification | Action recommandée |
| --- | --- | --- |
| Aucun projet actif | Les pages projet n’ont pas de contexte | Sélectionnez un projet depuis le sélecteur ou ouvrez [Projet actif](./projet-actif-et-creation-projet.md) |
| Aucun projet disponible | Votre compte n’a pas encore accès à un projet | Demandez à un Project Owner de vous ajouter |
| Accès refusé | Vous êtes connecté mais pas autorisé sur cette surface | Vérifiez votre rôle avec le propriétaire du projet |

## Interpréter les métriques

| Zone | Lecture pratique |
| --- | --- |
| Agents | Agents disponibles ou exécutions récentes dans le projet actif |
| Documents | Contenus indexés, en cours d’ingestion ou en erreur |
| Runs | Exécutions d’agents et activité IA récente |
| Drafts / Finals | Documents PM en brouillon, en revue ou finalisés |
| Signaux | Alertes ou opportunités à traiter |
| Actions | Actions proposées, approuvées, bloquées ou exécutées |

## Utiliser l’activité récente

L’activité récente sert à répondre à trois questions : qu’est-ce qui vient d’être importé, quelle exécution a produit un résultat, et quelle action attend une décision. Si une entrée semble incohérente, ouvrez [Journal IA](./journal-ia.md) pour vérifier le run et le fournisseur IA effectif.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Le tableau de bord reste vide | Aucun projet actif ou rôle insuffisant | Sélectionnez un projet puis vérifiez votre rôle |
| Les chiffres semblent anciens | Données non rafraîchies ou ingestion en cours | Patientez, puis ouvrez la page concernée |
| Une carte est visible mais non cliquable | Permission manquante | Demandez le rôle adapté au Project Owner |
| Une erreur globale est affichée | Santé API ou fournisseur non opérationnel | Relevez le message et ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Suite

- Pour choisir ou créer un projet, ouvrez [Projet actif et création de projet](./projet-actif-et-creation-projet.md).
- Pour alimenter le projet, ouvrez [Connaissance, documents et imports](./connaissance-documents-et-imports.md).
- Pour traiter les alertes, ouvrez [Signaux et notifications](./signaux-et-notifications.md).
