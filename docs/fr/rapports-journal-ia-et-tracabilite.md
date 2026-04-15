---
title: Rapports, Journal IA et traçabilité
slug: /fr/rapports-journal-ia-et-tracabilite
description: Réviser les PM Docs, publier des livrables et suivre la traçabilité complète des runs IA.
---

[Accueil FR](./index.md) · [Connaissance et agents](./connaissance-et-agents.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

![Rapports et artefacts](/img/screenshots/fr-08-rapports-artefacts.png)

## Rapports & artefacts : rôle de la page

La page **Rapports & artefacts** sert à transformer un résultat de travail en livrable exploitable.

Les fonctions observées couvrent :

- les métriques de synthèse ;
- les filtres et la table de documents ;
- la revue d’artefact ;
- la comparaison (**diff**) ;
- la **lignée** entre éléments ;
- l’édition ;
- le téléchargement **DOCX** ou **XLSX** ;
- l’ajout à la **Connaissance** ;
- la publication ;
- la suppression.

## PM Docs : cycle de travail typique

Un usage réaliste suit généralement cette séquence :

1. un agent produit un résultat ou une recommandation ;
2. ce résultat devient un **artefact** ou un brouillon de PM Doc ;
3. l’utilisateur ouvre **Rapports & artefacts** ;
4. il relit, compare, corrige ou enrichit le contenu ;
5. il télécharge, publie ou rattache le document à la Connaissance.

## Revue et comparaison

Les vues de **review** et de **diff** sont importantes lorsque vous devez :

- comparer deux versions d’un même livrable ;
- contrôler les écarts avant publication ;
- distinguer une proposition d’agent d’une version réellement validée.

## Édition

Le produit embarque des surfaces d’édition adaptées à plusieurs formats observés :

- un éditeur riche orienté texte/markdown ;
- un éditeur de type grille pour les documents tabulaires.

Cette combinaison permet de couvrir à la fois les comptes rendus, notes, synthèses et tableaux structurés.

## Export et réutilisation

Une fois le document revu, l’application permet selon le cas de :

- télécharger le livrable en **DOCX** ;
- télécharger le livrable en **XLSX** ;
- l’ajouter à la **Connaissance** pour qu’il redevienne une preuve exploitable ;
- le publier vers une destination gouvernée ;
- le supprimer lorsqu’il ne doit pas être conservé.

## Lignée et traçabilité

La **lignée** est l’un des éléments distinctifs de ProPM Agent.

Elle permet de relier entre eux :

- un run d’agent ;
- une sortie structurée ;
- un artefact ;
- un PM Doc ;
- des citations ou preuves associées.

Cette continuité réduit le risque de republier un contenu sans savoir d’où il vient.

![Journal IA](/img/screenshots/fr-09-journal-ia.png)

## Journal IA : rôle de la page

La page **Journal IA** expose un journal détaillé des traitements observés.

Les onglets confirmés sont :

- **Runs** ;
- **Activity**.

## Ce que vous pouvez y vérifier

Les détails de run et d’activité permettent de consulter notamment :

- le **trace ID** ;
- le **context snapshot** ;
- la **structured output** ;
- les **citations** ;
- le fournisseur IA **effectif** ;
- le fournisseur sélectionné par le déploiement ;
- la **model family** ;
- le niveau de **confiance** ;
- la **fraîcheur** des sources ;
- les **artefacts liés**.

## Quand ouvrir le Journal IA

| Besoin | Ce qu’il faut vérifier |
| --- | --- |
| Comprendre pourquoi un résultat a été produit | Le run, la structured output et le context snapshot |
| Justifier une recommandation | Les citations, la fraîcheur et la confiance |
| Diagnostiquer un incident ou un écart | Le trace ID, l’activité associée et les artefacts liés |
| Contrôler le fournisseur réellement utilisé | Les champs de transparence fournisseur et famille de modèle |

## Différence entre page Agents et Journal IA

La page **Agents** sert à travailler avec l’agent en cours.

Le **Journal IA** sert à :

- retrouver un run après coup ;
- relire le contexte exact ;
- documenter un audit ;
- investiguer un comportement ;
- fournir des références techniques au support.

## Bonnes pratiques de traçabilité

- conservez le **trace ID** lorsqu’un résultat a de l’importance ;
- avant de publier, vérifiez la lignée entre le livrable et la preuve ;
- relisez la fraîcheur des sources sur les sujets sensibles ;
- en cas d’écart entre deux versions, utilisez le **diff** avant tout arbitrage ;
- ajoutez à la Connaissance seulement les livrables réellement relus.

## Suite

- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Glossaire](./glossaire.md)
