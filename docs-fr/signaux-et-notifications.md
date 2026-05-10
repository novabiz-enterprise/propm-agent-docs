---
title: Signaux et notifications
slug: /signaux-et-notifications
description: Lire les signaux, générer un digest, créer un brouillon, reporter ou fermer une notification projet.
---

[Accueil](./index.md) · Signaux et notifications

![Proactivité, digests et actions gouvernées](/img/diagrams/fr/proactivite-et-gouvernance.svg)

## Objectif

Cette page explique comment traiter les signaux et notifications opérationnelles sans confondre alerte, brouillon, digest et action gouvernée.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Contributeur | Lire un signal et comprendre son contexte |
| Project Manager | Traiter, reporter, fermer ou transformer un signal en brouillon |
| Propriétaire de projet | Vérifier les règles et escalader vers une action gouvernée |
| Support | Comprendre si un signal est bloqué par l’état projet ou la politique |

## Avant de commencer

- Un projet actif est sélectionné.
- Votre rôle permet de consulter les signaux du projet.
- Les données projet et la connaissance sont suffisamment à jour pour interpréter le signal.

## Lire un signal

1. Ouvrez **Signals**, **Inbox** ou la zone de signaux du **Workspace**.
2. Vérifiez la sévérité, le statut, le mode et la date.
3. Ouvrez le détail du signal.
4. Lisez les preuves, sources et recommandations.
5. Décidez si le signal doit être traité, reporté, fermé ou transformé en brouillon/action.

## Actions courantes

| Action | Effet | Quand l’utiliser |
| --- | --- | --- |
| Refresh | Recharge ou recalcule les signaux visibles | Après nouvel import ou changement important |
| Generate digest draft | Prépare un digest de synthèse | Avant une communication de suivi |
| Create draft | Crée un brouillon exploitable | Quand le signal doit devenir un message ou livrable |
| Snooze 24h | Reporte temporairement le signal | Quand une réponse est attendue sous peu |
| Dismiss | Ferme le signal | Quand il est non pertinent ou déjà traité |

## Comprendre les notification drafts

Un brouillon de notification peut être **in-app**, retenu, planifié ou soumis à approbation selon la politique. Le fait qu’un brouillon existe ne signifie pas qu’un message externe a été envoyé.

## Centre de notifications

1. Ouvrez l’icône de notifications dans la barre supérieure.
2. Sélectionnez une notification pour ouvrir la page liée.
3. Utilisez **Mark all read** pour marquer les éléments comme lus si le bouton est disponible.
4. Utilisez **Clear** uniquement lorsque vous n’avez plus besoin de la liste locale.

## Résultat attendu

- Le signal est compris avec ses preuves.
- Les éléments non prioritaires sont reportés ou fermés.
- Les éléments importants deviennent un brouillon, une action ou une escalade claire.
- Les notifications ne remplacent pas la revue du projet actif.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Aucun signal visible | Projet récent, filtre actif ou rôle insuffisant | Réinitialisez les filtres et vérifiez le rôle |
| Refresh ne change rien | Données inchangées ou calcul déjà à jour | Vérifiez la connaissance et l’activité récente |
| Create draft est bloqué | Politique, rôle ou destination manquante | Ouvrez [Actions et approbations](./actions-et-approbations.md) |
| Une notification mène à une page vide | Mauvais projet actif ou accès insuffisant | Sélectionnez le bon projet et vérifiez les droits |

## Suite

- Pour transformer un signal en action, ouvrez [Actions et approbations](./actions-et-approbations.md).
- Pour configurer les politiques, ouvrez [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md).
- Pour diagnostiquer une notification bloquée, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
