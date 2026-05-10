---
title: Projet actif et création de projet
slug: /projet-actif-et-creation-projet
description: Sélectionner le projet actif, créer un projet et comprendre l’impact du contexte projet dans ProPM Agent.
---

[Accueil](./index.md) · Projet actif et création de projet

![Répertoire des projets](/img/screenshots/localized/fr/07-projects-directory.jpg)

## Objectif

Cette page explique comment sélectionner le projet actif, créer un nouveau projet et vérifier que les pages Knowledge, Agents, Documents PM et Journal IA utilisent le bon contexte.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Sélectionner le bon projet avant de travailler |
| Project Manager | Créer un projet lorsque le rôle le permet |
| Propriétaire de projet | Initialiser le projet et déléguer les premiers accès |
| Support | Vérifier qu’un état vide n’est pas simplement lié au mauvais projet |

## Avant de commencer

- Vous êtes connecté avec un compte Microsoft Entra ID autorisé.
- Votre compte a accès à au moins un projet, ou dispose du droit de créer un projet.
- Si vous ne voyez aucun projet attendu, contactez le propriétaire de projet.

## Sélectionner un projet actif

1. Ouvrez le sélecteur de projet dans la barre supérieure.
2. Recherchez le projet par nom si la liste est longue.
3. Sélectionnez le projet voulu.
4. Vérifiez que le nom du projet s’affiche dans la barre supérieure.
5. Ouvrez **Tableau de bord** ou **Workspace** pour confirmer que les données correspondent.

## Créer un projet

1. Ouvrez **Projects** ou **Projets**.
2. Sélectionnez **Create project** si le bouton est disponible.
3. Renseignez le nom, la description et les paramètres demandés.
4. Choisissez la langue de données par défaut si le champ est proposé.
5. Ajoutez les langues additionnelles uniquement si le projet contient réellement des sources multilingues.
6. Validez la création.
7. Vérifiez que le projet devient disponible dans la liste et peut être sélectionné comme projet actif.

## Résultat attendu

- Le projet apparaît dans la liste des projets.
- Le projet actif est visible dans la barre supérieure.
- Le tableau de bord affiche les données du projet sélectionné.
- Les pages **Connaissance**, **Agents**, **Documents PM**, **Signaux** et **Journal IA** s’ouvrent dans ce contexte.

## Comprendre `All projects`

`All projects` ne désigne pas un super-projet. Ce libellé indique une portée disponible sur tous les projets auxquels le même compte a déjà accès. Il ne contourne ni les rôles, ni les permissions, ni les limites tenant.

## Projet mémorisé localement

ProPM Agent peut mémoriser localement le dernier projet actif dans le navigateur. Si vous changez de navigateur, d’appareil ou de profil utilisateur, vous pouvez devoir sélectionner à nouveau le projet.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Le bouton de création est absent | Rôle insuffisant | Demandez le rôle adapté au Project Owner |
| Le projet n’apparaît pas | Vous n’êtes pas membre du projet | Demandez l’ajout au projet |
| Les pages projet restent vides | Aucun projet actif | Sélectionnez le projet dans la barre supérieure |
| Les données ne correspondent pas | Mauvais projet actif | Changez de projet puis rechargez la page |
| Certains boutons sont grisés | Rôle ou politique insuffisante | Ouvrez [Contrôle d’accès et rôles](./controle-acces-et-roles.md) |

## Suite

- Pour ajouter des membres, ouvrez [Contrôle d’accès et rôles](./controle-acces-et-roles.md).
- Pour alimenter le projet, ouvrez [Connaissance, documents et imports](./connaissance-documents-et-imports.md).
- Pour vérifier la synthèse, ouvrez [Tableau de bord](./tableau-de-bord.md).
