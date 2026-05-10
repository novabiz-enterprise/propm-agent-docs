---
title: Connecteurs et intégrations
slug: /connecteurs-jira-et-sharepoint
description: Comprendre les connecteurs ProPM Agent, la différence entre import, publication et action externe, et les conditions d’usage réel.
---

[Accueil](./index.md) · Connecteurs et intégrations

![Flux Jira et SharePoint entre plateforme, projet et actions](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Objectif

Cette page explique les connecteurs côté utilisateur et Project Owner. Les champs techniques, secrets et authentifications détaillées sont traités dans l’administration sécurisée, pas dans le guide utilisateur final.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Comprendre pourquoi un connecteur est visible ou bloqué |
| Project Manager | Importer depuis une source approuvée ou proposer une action |
| Propriétaire de projet | Vérifier rattachement, politique et destination |
| Administrateur plateforme | Utiliser plutôt [Intégrations plateforme](./admin-integrations-plateforme.md) |

## Trois usages à distinguer

| Usage | Exemple | Page liée |
| --- | --- | --- |
| Importer vers la connaissance | Importer documents SharePoint, tickets Jira ou pages Confluence | [Connaissance](./connaissance-documents-et-imports.md) |
| Publier un livrable | Publier un Document PM vers SharePoint | [Documents PM](./documents-pm-et-artefacts.md) |
| Créer une action externe | Créer un ticket Jira ou envoyer une notification | [Actions et approbations](./actions-et-approbations.md) |

## Checklist avant usage

Un connecteur est utilisable uniquement si les conditions suivantes sont réunies :

| Condition | Vérification |
| --- | --- |
| Plateforme prête | L’intégration est définie et validée par l’administrateur |
| Projet rattaché | Le projet actif utilise cette intégration |
| Politique compatible | La gouvernance autorise l’action ou demande une approbation |
| Rôle suffisant | Votre rôle peut importer, proposer, approuver ou publier |
| Santé OK | Le connecteur est prêt et non bloqué |
| Mode live actif | Les actions externes réelles sont autorisées si nécessaire |

## Importer depuis une source approuvée

1. Ouvrez [Connaissance](./connaissance-documents-et-imports.md).
2. Choisissez l’action d’import.
3. Sélectionnez la source disponible.
4. Lancez l’import.
5. Consultez l’historique d’import et les statuts.
6. Vérifiez que les documents deviennent **Indexed**.

## Publier vers SharePoint

1. Ouvrez [Documents PM et artefacts](./documents-pm-et-artefacts.md).
2. Sélectionnez le Document PM relu.
3. Vérifiez la destination proposée.
4. Soumettez la publication si votre rôle le permet.
5. Attendez l’approbation si la politique l’exige.
6. Vérifiez le statut final et la trace dans le Journal IA ou l’activité.

## Créer un ticket Jira depuis un signal

1. Ouvrez [Signaux et notifications](./signaux-et-notifications.md).
2. Sélectionnez le signal pertinent.
3. Choisissez l’action de création de ticket si elle est disponible.
4. Vérifiez le titre, la description, la priorité et les preuves.
5. Soumettez l’action.
6. Suivez l’approbation puis l’exécution dans [Actions et approbations](./actions-et-approbations.md).

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Connecteur visible mais inutilisable | Non rattaché au projet ou santé non prête | Demandez au Project Owner ou à l’admin plateforme |
| Action externe bloquée | Politique, rôle ou mode live | Ouvrez [Actions et approbations](./actions-et-approbations.md) |
| Import incomplet | Source, filtre ou droits source insuffisants | Vérifiez l’historique d’import |
| Publication absente | Destination non configurée | Vérifiez [Intégrations plateforme](./admin-integrations-plateforme.md) |

## Suite

- Pour l’administration, ouvrez [Intégrations plateforme](./admin-integrations-plateforme.md).
- Pour les actions, ouvrez [Actions et approbations](./actions-et-approbations.md).
- Pour le support, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
