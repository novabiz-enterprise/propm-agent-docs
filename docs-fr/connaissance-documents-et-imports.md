---
title: Connaissance, documents et imports
slug: /connaissance-documents-et-imports
description: Téléverser, importer, rechercher et vérifier les documents de connaissance d’un projet ProPM Agent.
---

[Accueil](./index.md) · Connaissance, documents et imports

![Connaissance projet](/img/screenshots/localized/fr/05-knowledge.jpg)

## Objectif

Cette page explique comment alimenter la connaissance du projet, vérifier l’indexation, importer depuis une source approuvée et lire les résultats de recherche avec citations.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Contributeur | Téléverser des documents et vérifier leur statut |
| Project Manager | Importer depuis une source approuvée et contrôler la fraîcheur |
| Lecteur ou auditeur | Rechercher une preuve et lire les citations |
| Administrateur | Intervenir seulement si un connecteur ou fournisseur d’ingestion est bloqué |

## Avant de commencer

- Un projet actif est sélectionné.
- Votre rôle autorise le téléversement, l’import ou la recherche.
- Les documents ne contiennent pas d’informations qui ne doivent pas être partagées dans le projet.

## Téléverser un document

1. Ouvrez **Knowledge** ou **Connaissance**.
2. Sélectionnez **Upload** ou **Téléverser**.
3. Choisissez le fichier à ajouter.
4. Renseignez la catégorie ou les métadonnées demandées.
5. Lancez l’envoi.
6. Vérifiez que le document apparaît dans la liste.
7. Attendez que le statut passe à **Indexed** avant de l’utiliser comme preuve.

## Importer depuis une source approuvée

1. Ouvrez **Knowledge**.
2. Sélectionnez l’action d’import si elle est disponible.
3. Choisissez la source approuvée, par exemple SharePoint, Jira, Confluence, Azure DevOps ou Blob selon votre environnement.
4. Sélectionnez le périmètre proposé par l’interface.
5. Lancez l’import.
6. Ouvrez l’historique d’import pour suivre les éléments importés, ignorés ou en erreur.

## Comprendre les statuts

| Statut | Signification | Action recommandée |
| --- | --- | --- |
| Indexed | Le contenu est prêt pour la recherche et les agents | Utilisez le document dans vos recherches ou runs |
| Ingesting | Le document est en cours de traitement | Patientez puis rafraîchissez la liste |
| Failed | Le traitement a échoué | Vérifiez le format, le contenu, la source et contactez le support si nécessaire |
| Not visible | Le document n’est pas dans le projet actif | Vérifiez le projet actif, les filtres et vos droits |

## Rechercher une preuve

1. Ouvrez **Knowledge**.
2. Saisissez une question, un terme métier ou un identifiant de document.
3. Filtrez par catégorie, source ou fraîcheur si les filtres sont disponibles.
4. Ouvrez un résultat pertinent.
5. Lisez le snippet, la citation, le score, le `source label` et le `source system` si affichés.
6. Si la preuve est destinée à une décision, vérifiez que la source est récente et cohérente avec le contexte.

## Résultat attendu

- Les documents importants sont visibles dans le projet actif.
- Les documents exploitables sont au statut **Indexed**.
- Les recherches affichent des citations et sources compréhensibles.
- Les agents peuvent s’appuyer sur les documents indexés.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Le téléversement est refusé | Format, taille ou rôle non autorisé | Vérifiez le message et demandez le rôle adapté |
| Le statut reste Ingesting | Traitement encore en cours ou file d’attente | Patientez puis rafraîchissez |
| Le statut passe Failed | Fichier illisible, source inaccessible ou contenu non exploitable | Essayez un fichier plus simple ou contactez le support |
| Les résultats sont hors sujet | Mauvais projet, filtre trop large ou documents obsolètes | Vérifiez le projet actif et affinez la recherche |
| Une source d’import est absente | Fournisseur non rattaché au projet | Demandez au Project Owner de vérifier les intégrations projet |

## Suite

- Pour interroger les documents, ouvrez [Agents](./agents.md).
- Pour lire correctement les citations, ouvrez [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md).
- Pour un problème d’import avancé, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
