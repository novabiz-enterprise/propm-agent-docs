---
title: Contrôle d’accès et rôles projet
slug: /controle-acces-et-roles
description: Ajouter des membres, attribuer des rôles, créer des rôles personnalisés et comprendre les garde-fous RBAC projet.
---

[Accueil](./index.md) · Contrôle d’accès et rôles projet

![Contrôle d’accès projet](/img/screenshots/localized/fr/11-access-control.jpg)

![Contrôle d’accès annoté : membres, rôles standards, rôles personnalisés et garde-fous RBAC](/img/annotated/fr/controle-acces-annote.svg)

## Objectif

Cette page explique comment administrer les membres et rôles d’un projet ProPM Agent sans exposer les permissions techniques comme langage principal.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Propriétaire de projet | Ajouter des membres, attribuer les rôles et créer des rôles personnalisés |
| Project Manager | Comprendre pourquoi une action est disponible, grisée ou absente |
| Auditeur | Vérifier la logique d’accès sans modifier le projet |
| Support | Identifier un blocage lié au rôle, au créateur ou à une auto-modification interdite |

## Avant de commencer

- Un projet actif est sélectionné.
- Vous connaissez le rôle métier que la personne doit jouer.
- Le compte à ajouter existe dans le tenant ou a été invité comme compte externe si nécessaire.
- Vous disposez du droit de gérer les membres ou les rôles.

## Rôles standards

| Rôle | Usage métier habituel |
| --- | --- |
| Propriétaire du projet | Administre le projet, les membres, les rôles et les réglages sensibles |
| Chef de projet | Pilote le travail quotidien, les livrables, signaux et actions selon politique |
| Contributeur | Alimente la connaissance, lance des agents et contribue aux livrables autorisés |
| Lecteur | Consulte les informations sans modifier le projet |
| Auditeur | Relit les preuves, runs, lignée et traces selon les droits d’audit |

## Matrice simplifiée

| Action courante | Propriétaire | Chef de projet | Contributeur | Lecteur | Auditeur |
| --- | --- | --- | --- | --- | --- |
| Lire le projet | Oui | Oui | Oui | Oui | Oui |
| Rechercher dans la connaissance | Oui | Oui | Oui | Oui | Oui |
| Lancer un agent | Oui | Oui | Oui | Non par défaut | Non par défaut |
| Préparer un livrable | Oui | Oui | Oui | Non | Non |
| Approuver ou publier selon politique | Oui | Selon politique | Selon politique | Non | Non |
| Gérer membres et rôles | Oui | Non par défaut | Non | Non | Non |
| Auditer runs et traces | Oui | Oui | Selon rôle | Lecture limitée | Oui |

## Ajouter un membre

1. Ouvrez **Workspace** ou **Espace de travail**.
2. Ouvrez **Access control** ou **Contrôle d’accès**.
3. Sélectionnez l’onglet **Members** ou **Membres**.
4. Saisissez l’adresse e-mail du membre.
5. Choisissez le rôle standard ou personnalisé.
6. Enregistrez.
7. Vérifiez que la ligne du membre apparaît avec le rôle attendu.

## Résultat attendu

- Le membre apparaît dans la liste.
- Le rôle affiché correspond à la délégation voulue.
- Le membre peut sélectionner le projet après reconnexion ou rafraîchissement.

## Si l’ajout échoue

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| E-mail refusé | Format invalide ou compte non reconnu | Vérifiez l’adresse et l’invitation Entra si compte externe |
| Bouton grisé | Votre rôle ne permet pas de gérer les membres | Demandez l’action à un Propriétaire du projet |
| Membre ajouté mais projet invisible | Session non rafraîchie ou mauvais tenant | Demandez au membre de se reconnecter |
| Rôle impossible à choisir | Rôle supprimé, protégé ou indisponible | Choisissez un rôle standard ou recréez le rôle personnalisé |

## Créer un rôle personnalisé

1. Ouvrez **Roles and permissions** ou **Rôles et permissions**.
2. Sélectionnez l’action de création.
3. Donnez un nom métier clair.
4. Ajoutez une description qui explique le contexte d’usage.
5. Activez uniquement les capacités nécessaires.
6. Enregistrez le rôle.
7. Testez-le avec un utilisateur non critique avant diffusion large.

![Éditeur de rôle personnalisé](/img/screenshots/localized/fr/11-custom-role-editor.jpg)

## Modifier un rôle personnalisé

1. Ouvrez le rôle dans **Rôles et permissions**.
2. Relisez sa description et les capacités activées.
3. Ajustez les capacités nécessaires.
4. Enregistrez.
5. Vérifiez l’impact sur les membres qui utilisent déjà ce rôle.

## Supprimer un rôle personnalisé

1. Vérifiez qu’aucun membre n’utilise encore le rôle.
2. Remplacez ce rôle sur les membres concernés si nécessaire.
3. Utilisez l’action de suppression.
4. Confirmez que le rôle disparaît de la liste.

Un rôle système ne peut pas être supprimé. Un rôle personnalisé encore attribué est normalement bloqué pour éviter de retirer des droits de manière ambiguë.

## Changer ou retirer un membre

1. Ouvrez la ligne du membre.
2. Changez le rôle via le sélecteur disponible, ou utilisez l’action de retrait.
3. Enregistrez.
4. Vérifiez que la liste affiche le nouvel état.

Vous ne pouvez pas vous auto-supprimer ou vous auto-rétrograder depuis cette page. L’entrée du créateur du projet reste également protégée.

## Annexe admin : permissions techniques

Les libellés comme `project:read`, `agent:run`, `members:manage`, `roles:manage` ou `settings:manage` peuvent apparaître dans certains écrans ou exports. Ils servent au diagnostic RBAC avancé. Pour l’usage quotidien, raisonnez d’abord en rôles métier et en actions attendues.

## Lecture seule vs accès refusé

| État | Signification | Action recommandée |
| --- | --- | --- |
| Page visible mais contrôles grisés | Vous pouvez consulter mais pas modifier | Demandez le rôle approprié |
| Action absente | Le rôle ne permet pas cette action | Vérifiez la délégation avec le Project Owner |
| Erreur à l’enregistrement | Garde-fou serveur ou contrainte de rôle | Vérifiez créateur, auto-modification, rôle système ou rôle encore attribué |

## Suite

- [Projet actif et création de projet](./projet-actif-et-creation-projet.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Actions et approbations](./actions-et-approbations.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
