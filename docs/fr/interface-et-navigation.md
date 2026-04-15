---
title: Interface et navigation
slug: /fr/interface-et-navigation
description: Comprendre les écrans principaux, la barre latérale, la barre supérieure et le tableau de bord.
---

[Accueil FR](./index.md) · [Démarrage](./demarrage.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md)

![Tableau de bord ProPM Agent](/img/screenshots/fr-01-tableau-de-bord.png)

## Vue d’ensemble

L’interface observée de ProPM Agent suit une logique simple :

1. la **barre latérale** ouvre les grands domaines fonctionnels ;
2. la **barre supérieure** vous aide à changer de projet, de langue ou de thème ;
3. la surface centrale affiche le **contexte courant** ;
4. plusieurs écrans changent d’état selon le **projet actif** et vos **droits**.

Cette organisation est cohérente sur les pages utilisateur, portefeuille et administration.

## Navigation principale

Les entrées visibles et confirmées dans l’application sont les suivantes :

| Entrée | Usage principal |
| --- | --- |
| Tableau de bord | Lire l’état général, les indicateurs et les prochaines étapes suggérées |
| Projets | Créer, ouvrir et gérer le contexte projet |
| Espace de travail | Consulter le résumé du projet, les signaux et les réglages de niveau projet |
| Connaissance | Rechercher, téléverser et importer les documents de référence |
| Agents | Interagir avec les agents disponibles et consulter les sorties structurées |
| Rapports & artefacts | Réviser, éditer, publier ou télécharger les PM Docs |
| Journal IA | Inspecter les runs, événements et métadonnées de traçabilité |
| Centre de commande portefeuille | Comparer plusieurs projets via des signaux configurables |
| Administration de la plateforme | Gérer les intégrations, le fournisseur IA, l’abonnement et l’activité plateforme |

## Barre latérale

La barre latérale est le repère de navigation principal.

### Ce qu’il faut retenir

- elle garde les grands domaines toujours au même endroit ;
- elle permet de passer rapidement d’un usage **métier** à un usage **administratif** ;
- certaines zones peuvent apparaître en **lecture seule** ou être **non accessibles** selon votre rôle.

### Logique d’usage recommandée

- commencez par **Tableau de bord** pour comprendre la situation ;
- ouvrez ensuite **Projets** ou utilisez le **sélecteur de projet** ;
- travaillez dans **Espace de travail**, **Connaissance** et **Agents** ;
- finalisez dans **Rapports & artefacts** ;
- vérifiez la traçabilité dans **Journal IA**.

## Barre supérieure

Les éléments suivants sont explicitement observés dans la barre supérieure :

| Élément | Fonction |
| --- | --- |
| Sélecteur de projet | Change le projet courant sans repasser par la liste complète |
| Palette de commandes | Accès rapide aux surfaces et actions courantes |
| Notifications | Affiche les éléments d’attention remontés dans l’application |
| Indicateur de santé | Donne un signal global sur l’état de la plateforme ou du contexte courant |
| Langue | Change la langue de l’interface utilisateur |
| Thème | Bascule l’apparence claire/sombre selon le réglage disponible |
| Aide | Ouvre les messages d’aide et d’orientation intégrés |

## Tableau de bord

Le **Tableau de bord** est l’écran le plus utile juste après la connexion.

### Ce qu’il montre

À partir des composants observés, cette page consolide :

- des métriques de situation ;
- des éléments d’attention ;
- des prochaines étapes recommandées ;
- des raccourcis vers les zones où agir ;
- un aperçu des signaux ouverts, des éléments en revue et de la charge de gouvernance.

### Comment le lire

Utilisez le tableau de bord comme une **page d’orientation** et non comme une zone de configuration détaillée :

- s’il n’y a pas encore de projet actif, certains blocs restent vides ;
- si un projet est sélectionné, les indicateurs se contextualisent ;
- si vous devez agir, le tableau de bord sert surtout à **ouvrir la bonne page**.

## Contexte projet et états vides

Plusieurs écrans de ProPM Agent sont liés au projet actif. En pratique :

- **sans projet sélectionné**, certaines pages affichent un état vide normal ;
- **avec projet sélectionné**, la même page charge les données et actions de ce projet ;
- le changement de projet modifie le contenu de **Connaissance**, **Agents**, **Rapports & artefacts** et **Journal IA**.

Cette dépendance au contexte est voulue : elle évite de mélanger les preuves, conversations et livrables de plusieurs projets.

## Langue, thème et aide

### Langue

La langue d’interface peut être changée depuis la barre supérieure. Le frontend observé contient des messages localisés, dont le français.

### Thème

Le changement de thème fait partie des préférences d’interface. Il améliore surtout le confort de lecture ; il ne modifie pas les données projet.

### Aide contextuelle

Les catalogues d’aide intégrés couvrent notamment :

- la navigation générale ;
- les pages de projet ;
- les conseils d’usage du Journal IA ;
- les rappels de gouvernance et de qualité de preuve.

## Conseils de navigation

- changez de projet **avant** d’ouvrir un agent ou un rapport ;
- utilisez la **palette de commandes** pour retrouver rapidement une surface rarement utilisée ;
- revenez au **Tableau de bord** lorsque vous perdez le fil du parcours ;
- vérifiez la langue de l’interface avant de faire une démonstration ou une capture ;
- si une action semble absente, distinguez bien **lecture seule** et **accès refusé**.

## Parcours conseillé pour un nouvel utilisateur

1. se connecter ;
2. ouvrir **Projets** ;
3. sélectionner un projet ;
4. lire le **Tableau de bord** ;
5. ouvrir l’**Espace de travail** ;
6. charger la **Connaissance** ;
7. lancer un premier échange dans **Agents** ;
8. consulter le résultat dans **Rapports & artefacts** et **Journal IA**.

## Suite

- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Connaissance et agents](./connaissance-et-agents.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
