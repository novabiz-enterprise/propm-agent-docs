---
title: Documents PM et artefacts
slug: /documents-pm-et-artefacts
description: Relire, modifier, télécharger, publier et ajouter à la connaissance les Documents PM et artefacts.
---

[Accueil](./index.md) · Documents PM et artefacts

![Flux Documents PM, DOCX et XLSX](/img/diagrams/fr/documents-pm-docx-xlsx-workflow.svg)

## Objectif

Cette page explique le parcours de revue des artefacts et Documents PM : retrouver un livrable, relire le contenu, comparer les versions, télécharger, publier ou ajouter à la connaissance.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Contributeur | Relire un brouillon et préparer une correction |
| Project Manager | Valider le contenu et télécharger un document |
| Propriétaire de projet | Approuver, publier ou encadrer les versions |
| Auditeur | Comprendre l’origine et la lignée d’un document |

## Avant de commencer

- Un projet actif est sélectionné.
- Un run, une sortie structurée ou une action a produit un artefact ou un Document PM.
- Votre rôle autorise la revue, l’approbation ou la publication selon l’action visée.

## Comprendre le flux

Le flux documentaire le plus courant est : **run → sortie structurée → artefact → version → Document PM → Download / Publish / Add to knowledge**.

| Terme | Lecture pratique |
| --- | --- |
| Sortie structurée | Résultat d’un agent, encore à relire |
| Artefact | Objet gouverné issu d’un run ou d’une revue |
| Version | État précis d’un artefact avec historique et diff |
| Document PM | Document projet prêt à être relu, téléchargé, publié ou réinjecté dans la connaissance |

## Retrouver un Document PM

1. Ouvrez **PM Docs**, **Reports** ou **Rapports & artefacts** selon le libellé visible.
2. Vérifiez le projet actif.
3. Filtrez par statut, type, date ou auteur si les filtres sont disponibles.
4. Ouvrez le document à relire.
5. Consultez le contenu, les métadonnées, la lignée et les actions disponibles.

## Relire et sauvegarder un DOCX ou Markdown

1. Ouvrez le document.
2. Relisez le titre, le résumé, les sections et les preuves.
3. Corrigez le contenu dans l’éditeur si votre rôle le permet.
4. Enregistrez les modifications.
5. Consultez le diff pour vérifier ce qui a changé.
6. Demandez ou appliquez l’approbation selon la gouvernance du projet.

## Relire un XLSX ou une grille

1. Ouvrez le document tabulaire.
2. Vérifiez les colonnes, totaux, dates et hypothèses.
3. Corrigez uniquement les cellules modifiables.
4. Enregistrez puis rouvrez la version pour confirmer le résultat.
5. Téléchargez le fichier seulement après revue.

## Télécharger, publier ou ajouter à la connaissance

| Action | Effet | À utiliser quand |
| --- | --- | --- |
| Download | Télécharge une copie locale | Vous devez partager ou archiver hors plateforme selon votre processus |
| Publish | Publie vers une destination gouvernée | Le projet a une destination validée, par exemple SharePoint |
| Add to knowledge | Réinjecte le document dans la connaissance projet | Le document relu doit devenir une source pour les recherches et agents futurs |

## Résultat attendu

- Le document est relu avant usage externe.
- Le diff explique les changements entre versions.
- La lignée permet de retrouver le run ou la source d’origine.
- Les actions de publication respectent les rôles, politiques et intégrations disponibles.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Le document est introuvable | Mauvais projet actif ou filtre trop restrictif | Vérifiez le projet et réinitialisez les filtres |
| Le bouton Publish est absent | Destination non rattachée ou rôle insuffisant | Vérifiez les intégrations projet et la politique |
| Add to knowledge échoue | Document non finalisé ou permission manquante | Relisez le statut et votre rôle |
| Le diff semble inattendu | Version de référence incorrecte | Ouvrez la lignée et comparez les versions |

## Suite

- Pour auditer le run d’origine, ouvrez [Journal IA](./journal-ia.md).
- Pour publier vers SharePoint, consultez [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint.md).
- Pour comprendre les preuves, ouvrez [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md).
