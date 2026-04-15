---
title: Interface et navigation
slug: /interface-et-navigation
description: Comprendre les écrans principaux, la barre latérale, la barre supérieure et le tableau de bord.
---

[Accueil](./index.md) · [Démarrage](./demarrage.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md)

![Tableau de bord ProPM Agent](/img/screenshots/fr-01-tableau-de-bord.png)

## Objectif

Cette page explique comment se repérer dans le shell de ProPM Agent, lire le **Tableau de bord**, utiliser la **palette de commandes**, interpréter les **notifications** et ouvrir le panneau **santé** quand un incident est suspecté.

## Vue d’ensemble

L’interface observée suit une logique simple :

1. la **barre latérale** ouvre les grands domaines fonctionnels ;
2. la **barre supérieure** change le projet courant et ouvre les outils rapides ;
3. la surface centrale affiche le **contexte courant** ;
4. plusieurs écrans changent d’état selon le **projet actif** et vos **droits**.

## Navigation principale

| Entrée | Usage principal |
| --- | --- |
| Tableau de bord | Lire l’état général et les prochaines étapes suggérées |
| Projets | Créer, ouvrir et changer de contexte projet |
| Espace de travail | Résumé projet, signaux, readiness et réglages projet |
| Connaissance | Rechercher, téléverser et importer les documents de référence |
| Agents | Interagir avec les agents disponibles et lire les sorties structurées |
| Rapports & artefacts | Réviser, comparer, publier ou télécharger les PM Docs |
| Journal IA | Inspecter les runs, événements et métadonnées de traçabilité |
| Centre de commande portefeuille | Comparer plusieurs projets via des signaux configurables |
| Administration de la plateforme | Gérer intégrations, fournisseur IA, abonnement et activité plateforme |

## Tableau de bord

Le **Tableau de bord** est l’écran le plus utile juste après la connexion.

Il consolide :

- des métriques de situation ;
- des éléments d’attention ;
- des prochaines étapes recommandées ;
- des raccourcis vers les zones où agir ;
- un aperçu des signaux ouverts et des éléments en revue.

Utilisez-le comme une **page d’orientation** : si un projet n’est pas actif, certains blocs restent vides ; si un projet est sélectionné, les indicateurs se contextualisent.

### Comment lire les grandes zones du tableau de bord

| Zone | Ce qu’elle synthétise | Réflexe utile |
| --- | --- | --- |
| Tuiles de synthèse | compteurs de projets, de connaissance, d’agents actifs, de signaux ouverts, de brouillons de notifications et d’actions en attente | repérer immédiatement si le sujet est un manque de contexte, un retard de revue ou une file d’attente gouvernée |
| Cartes de score | état général de la delivery, du rythme d’exécution, de la couverture de gouvernance et de la profondeur de connaissance | lire ces cartes comme des repères d’orientation avant d’ouvrir un écran de détail |
| Blocs de readiness | fondation connaissance, couverture d’automatisation, posture de gouvernance et flux de livraison | identifier quel pilier bloque l’usage normal du projet |
| Panneau **Attention** | signaux, actions gouvernées et watchlist connecteurs | aller vers l’**Espace de travail** pour traiter les blocages actifs |
| Panneau **Pulse** | dernier digest, notifications récentes, activité récente et état connecteurs | vérifier ce qui vient de changer sans relire tout l’historique du projet |
| Quick links | raccourcis vers **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts**, **AI Log** et **Portfolio** | ouvrir directement la bonne surface au lieu de naviguer écran par écran |

Les scores et indicateurs du tableau de bord doivent être lus comme des **repères de priorisation**, pas comme un diagnostic exhaustif à eux seuls.

## Barre supérieure

| Élément | Fonction |
| --- | --- |
| Sélecteur de projet | Change le projet courant sans repasser par la liste complète |
| Palette de commandes | Recherche rapide sur les pages et actions courantes |
| Notifications | Affiche les éléments d’attention remontés par le produit |
| Indicateur de santé | Ouvre un diagnostic rapide sur l’état API, temps réel et auth |
| Langue | Change la langue de l’interface |
| Thème | Bascule l’apparence claire/sombre |
| Aide | Ouvre les messages d’aide intégrés |

## Palette de commandes

La palette de commandes est conçue pour la navigation rapide.

- **Windows / Linux** : `Ctrl+K`
- **macOS** : `Cmd+K`

Elle filtre les pages et entrées disponibles par **nom** et **description**. Utilisez-la pour revenir vite vers **Journal IA**, **Administration de la plateforme** ou toute route rarement ouverte.

## Notifications

Le centre de notifications est accessible depuis l’icône de cloche de la barre supérieure.

Capacités observées :

- compteur d’éléments non lus ;
- panneau déroulant ;
- **Marquer tout comme lu** ;
- **Tout effacer** ;
- clic sur une notification pour ouvrir la surface liée quand une navigation est fournie.

Les notifications peuvent remonter notamment des statuts d’agent, des événements de génération de rapport, des uploads de documents et des mises à jour liées au Marketplace ou à l’abonnement.

## Indicateur de santé

L’indicateur de santé ouvre un panneau de diagnostic rapide. Il permet de consulter :

- l’état **API** ;
- l’état **realtime / WebSocket** ;
- l’état **auth** ;
- la **latence** observée ;
- un éventuel texte d’erreur ;
- le projet courant quand le contexte compte dans le diagnostic.

Ouvrez-le si un agent paraît **offline**, si les notifications ne se rafraîchissent plus ou si l’application semble disponible mais partiellement dégradée.

## Contexte projet et états vides

Plusieurs écrans de ProPM Agent sont liés au projet actif. En pratique :

- **sans projet sélectionné**, certaines pages affichent un état vide normal ;
- **avec projet sélectionné**, la même page charge les données et actions de ce projet ;
- le changement de projet modifie le contenu de **Connaissance**, **Agents**, **Rapports & artefacts** et **Journal IA**.

Cette dépendance au contexte évite de mélanger preuves, conversations et livrables de plusieurs projets.

## Langue, thème et aide

La langue d’interface peut être changée depuis la barre supérieure. Le changement de thème améliore le confort de lecture, sans effet sur les données projet. Les catalogues d’aide intégrés couvrent la navigation générale, les pages de projet, le Journal IA et les rappels de gouvernance.

## Conseils de navigation

- changez de projet **avant** d’ouvrir un agent ou un rapport ;
- utilisez la **palette de commandes** pour retrouver rapidement une surface rarement utilisée ;
- revenez au **Tableau de bord** lorsque vous perdez le fil du parcours ;
- si une action semble absente, distinguez bien **lecture seule** et **accès refusé** ;
- ouvrez l’**indicateur de santé** avant de conclure à un incident backend.

## Suite

- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
