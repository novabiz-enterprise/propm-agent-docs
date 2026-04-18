---
title: Rapports, Journal IA et traçabilité
slug: /rapports-journal-ia-et-tracabilite
description: Réviser les Documents PM, générer des sorties DOCX/XLSX et suivre la traçabilité complète des runs IA.
---

[Accueil](./index.md) · [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

![Flux Documents PM, DOCX et XLSX](/img/diagrams/fr/documents-pm-docx-xlsx-workflow.svg)

## Objectif

Cette page explique la différence entre **artefact**, **version d’artefact** et **Document PM**, puis détaille le rôle du **Journal IA** pour l’audit et le support.

## Trois notions à distinguer

| Terme | Rôle |
| --- | --- |
| Artefact | Objet gouverné issu d’un run ou d’un travail de revue |
| Version d’artefact | État précis d’un artefact, avec historique, diff et lignée |
| Document PM | Document projet revu, édité, téléchargé, publié ou réinjecté dans la connaissance |

## Cycle de vie observé

Le flux le plus courant est :

1. un agent produit une **sortie structurée** ;
2. cette sortie devient un **draft artifact** ;
3. l’utilisateur ouvre **Rapports & artefacts / Documents PM** ;
4. il relit le contenu, consulte le **diff** et la **lignée** ;
5. il approuve, publie, télécharge ou ajoute le document à la **Connaissance**.

## De l’agent au DOCX ou XLSX

Les flux observés montrent que les agents peuvent préparer des contenus destinés à un rendu documentaire ou tabulaire, mais toujours via une chaîne de revue explicite.

### Quand le résultat devient un DOCX

Le rendu **DOCX** correspond surtout aux sorties orientées document : brief, rapport de statut, note de synthèse, compte rendu ou livrable narratif. Le chemin reste généralement :

1. run d’agent ;
2. sortie structurée ;
3. artefact ;
4. revue dans **Documents PM** ;
5. téléchargement **DOCX** ou publication selon la gouvernance.

### Quand le résultat devient un XLSX

Le rendu **XLSX** correspond surtout aux sorties orientées tableau : registres, matrices, plans de suivi, inventaires ou comparatifs structurés. Le flux reste le même, mais la surface de revue privilégie l’éditeur de type grille avant export.

### Ce qui reste gouverné avant diffusion

Même lorsqu’un agent produit un contenu déjà très exploitable :

- l’utilisateur relit encore le brouillon ;
- l’approbation peut rester obligatoire ;
- la publication dépend d’une destination et d’un profil de rendu ;
- le **Journal IA** garde la trace du run source.

## Statuts visibles

### Artefact

Les statuts confirmés au niveau artefact/version sont :

- `draft`
- `approved`
- `published`
- `superseded`

### Document PM

Les Documents PM exposent au moins les états de compatibilité suivants :

- `draft`
- `final`

## Actions disponibles dans Rapports & artefacts

Le hub expose des actions telles que :

- **review / preview** ;
- **diff** ;
- **lineage** ;
- **edit** ;
- **download** ;
- **add to knowledge** ;
- **publish** ;
- **delete**.

## Diff, lignée et versioning

### Diff

Le **diff** compare des versions d’artefact. Il est surtout utile pour :

- relire les écarts avant publication ;
- distinguer une proposition d’agent d’une version réellement validée ;
- comprendre pourquoi un document final diffère d’un brouillon précédent.

### Lignée

La **lignée** relie entre eux :

- le `source run ID` ;
- le `context snapshot ID` ;
- le `structured output ID` ;
- l’artefact et sa version ;
- les publications et preuves liées.

### Versioning

L’interface permet aussi de sélectionner une version par numéro et d’identifier la version précédente, la base de comparaison ou une version remplacée.

## Approbation et publication

Les comportements observés montrent que :

- **Approve** est disponible sur une version en `draft` ;
- **Publish** devient disponible quand la version est `approved` ou déjà `published` ;
- la publication envoie des formats et destinations gouvernés ;
- l’ajout à la connaissance reste une action distincte du téléchargement et de la publication.

## Éditeurs disponibles

Le produit embarque plusieurs surfaces d’édition :

- un éditeur riche / markdown pour les sorties orientées document ;
- un éditeur de type grille pour les sorties orientées tableur ;
- un mode de revue / source en lecture si le format n’est pas éditable de la même manière.

Téléchargements confirmés : **DOCX** et **XLSX**.

### Quel type de sortie mène à quel format

| Type de contenu | Surface la plus probable | Format de sortie le plus naturel |
| --- | --- | --- |
| brief, note, synthèse, rapport de statut | éditeur riche | DOCX |
| registre, matrice, tableau de suivi, comparatif | éditeur grille | XLSX |
| format non éditable ou spécialisé | revue / source | téléchargement ou publication selon profil |

### Limites pratiques à garder en tête

| Cas | Lecture utile |
| --- | --- |
| contenu réellement éditable | utilisez l’éditeur pour la relecture et les ajustements contrôlés avant approbation |
| contenu surtout en mode revue | traitez l’écran comme une surface de validation, pas comme l’endroit principal de réécriture |
| besoin d’un rendu de référence à transmettre | le téléchargement gouverné reste la sortie la plus fiable à partager hors de l’application |

![Journal IA](/img/screenshots/localized/fr/09-ai-log-runs.png)

## Journal IA : ce que couvre la page

Le **Journal IA** a deux onglets distincts :

- **Runs** ;
- **Activity**.

## Runs vs Activity

| Onglet | À quoi il sert |
| --- | --- |
| Runs | Revoir une exécution d’agent, ses métadonnées de traçabilité et ses artefacts liés |
| Activity | Revoir une timeline d’événements projet et inspecter le payload brut d’un événement |

### Quand ouvrir Runs

Ouvrez **Runs** pour :

- comprendre pourquoi un résultat a été produit ;
- retrouver le fournisseur réellement utilisé ;
- relire la fraîcheur, la confiance et les citations ;
- rattacher un run à un artefact ou à un Document PM.

### Quand ouvrir Activity

Ouvrez **Activity** pour :

- reconstituer une chronologie ;
- vérifier qu’un brouillon, une approbation ou une publication a bien laissé un événement ;
- inspecter le payload brut quand vous faites du support ou de l’audit.

### Exemples d’événements utiles à confirmer dans Activity

Selon le flux, **Activity** peut vous aider à confirmer qu’un événement aval a bien été enregistré, par exemple :

- création d’un brouillon ;
- approbation d’un artefact ;
- publication ;
- préparation d’une notification ;
- décision d’approbation, de rejet ou d’exécution gouvernée.

### Exemples concrets de `Type` / `Kind`

Les valeurs ci-dessous sont des exemples observés dans les flux seedés et démonstrations. Elles donnent un bon repère de lecture, sans prétendre couvrir tous les futurs événements.

| Type | Kind | Lecture pratique |
| --- | --- | --- |
| `agent_execution` | `completed` / `failed` | un run d’agent s’est terminé correctement ou en échec |
| `document_upload` | `started` / `completed` / `failed` | un document a commencé son ingestion, l’a terminée ou a échoué |
| `report_generated` | `completed` | un Document PM ou rapport a été généré et journalisé |
| `marketplace_update` | `completed` | une notification ou mise à jour système a été enregistrée dans l’historique |

## Filtres et colonnes visibles

### Runs

Filtres observés :

- recherche sur agent / statut / run ID ;
- filtre agent ;
- filtre statut.

Colonnes visibles : **Created**, **Agent**, **Status**, **Cost**, **Run ID**, **Actions**.

Le champ **Cost** expose au moins les **tokens** et le nombre de **calls** quand ces informations sont disponibles.

### Activity

Filtres observés :

- recherche sur type / kind / actor ;
- filtre type ;
- filtre kind.

Colonnes visibles : **Created**, **Type**, **Kind**, **Actor**, **ID**, **Actions**.

## Détails techniques visibles dans un run

Le détail d’un run peut exposer :

- `Trace ID` ;
- `Context snapshot ID` ;
- `Structured output ID` ;
- citations ;
- `Effective AI Provider` ;
- `Deployment-selected AI Provider` ;
- `Model family` ;
- `Confidence` ;
- `Source freshness` ;
- artefacts liés.

## Transparence runtime IA

La distinction suivante est importante :

- **fournisseur IA sélectionné au déploiement** : choix initial de l’environnement ;
- **fournisseur IA effectif** : fournisseur réellement utilisé pour ce run.

Ces deux valeurs peuvent différer. En cas de doute, le **Journal IA** fait foi pour le run observé.

## Surface à ouvrir d’abord selon le symptôme

| Symptôme | Surface à ouvrir en premier | Pourquoi |
| --- | --- | --- |
| divergence de contenu entre brouillon et version finale | **Diff** | pour voir ce qui a réellement changé |
| doute sur la preuve ou la provenance | **Lignée** | pour relier run, sortie structurée, artefact et sources |
| doute sur le runtime, le fournisseur ou l’exécution IA | **Runs** | pour relire `Trace ID`, fournisseur effectif, fraîcheur et confiance |
| doute sur la publication, l’approbation ou la suite aval | **Activity** | pour confirmer la chronologie et le payload brut |

## Workflow d’enquête recommandé

Quand un livrable, une publication ou une notification paraît douteuse, partez du plus visible vers le plus technique :

1. ouvrez le **Document PM** ou l’artefact concerné ;
2. consultez le **diff** pour voir ce qui a réellement changé ;
3. ouvrez la **lignée** pour relever `source run ID`, `Context snapshot ID` et `Structured output ID` ;
4. basculez dans **Runs** pour revoir fraîcheur, confiance, citations, fournisseur IA effectif et artefacts liés ;
5. utilisez **Activity** pour confirmer la suite du flux : brouillon, approbation, publication, notification ou action gouvernée ;
6. conservez enfin le **Trace ID** si l’enquête doit être reprise par le support ou l’audit.

### Cas 1 — un Document PM final semble faux

1. ouvrez le **Document PM** final et confirmez la version réellement publiée ;
2. utilisez **Diff** pour repérer ce qui a été ajouté, retiré ou reformulé ;
3. ouvrez **Lignée** pour retrouver le `source run ID` et le `Structured output ID` ;
4. dans **Runs**, contrôlez les preuves, la fraîcheur et le fournisseur effectif ;
5. si le contenu final ne reflète pas le flux attendu, terminez dans **Activity** pour vérifier l’approbation, la publication et l’acteur ayant poussé la version.

### Cas 2 — une action ou notification préparée n’a pas abouti

1. partez du brouillon, de la file d’action ou de la notification visible ;
2. relevez `relatedArtifactId` ou `relatedNotificationId` quand ils existent ;
3. utilisez **Activity** pour confirmer si une approbation, un rejet ou une exécution a été journalisée ;
4. si la suite reste floue, revenez dans **Runs** pour vérifier le run source et la logique ayant produit la recommandation ;
5. documentez enfin le **Trace ID** et les identifiants liés avant d’escalader.

## Quels IDs conserver en priorité

| Situation | IDs à conserver en priorité |
| --- | --- |
| résultat de run douteux | `Trace ID`, `Context snapshot ID`, `Structured output ID` |
| artefact ou Document PM final suspect | `source run ID`, `Structured output ID`, version d’artefact concernée |
| action ou notification sans suite claire | `Trace ID`, `relatedArtifactId`, `relatedNotificationId` |
| enquête support transverse | tous les IDs ci-dessus, plus l’heure approximative et le projet concerné |

## Bonnes pratiques de traçabilité

- conservez le **Trace ID** lorsqu’un résultat a de l’importance ;
- avant de publier, vérifiez la lignée entre le livrable et la preuve ;
- en cas d’écart entre deux versions, utilisez le **diff** avant arbitrage ;
- ajoutez à la **Connaissance** seulement les livrables réellement relus ;
- utilisez **Activity** pour compléter l’enquête quand **Runs** ne suffit pas.

## Suite

- [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Glossaire](./glossaire.md)
