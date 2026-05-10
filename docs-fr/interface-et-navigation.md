---
title: Interface et navigation
slug: /interface-et-navigation
description: Comprendre le shell ProPM Agent, changer de projet, lire les notifications, la santé, la langue et le thème.
---

[Accueil](./index.md) · Interface et navigation

![Barre supérieure et navigation globale](/img/screenshots/localized/fr/01-navigation-topbar.jpg)

## Objectif

Cette page explique comment se repérer dans ProPM Agent : navigation principale, projet actif, centre de notifications, indicateur de santé, palette de commandes, langue, thème et aide.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Trouver la bonne page et comprendre les états vides |
| Project Manager | Changer de projet avant d’agir et suivre les notifications |
| Propriétaire de projet | Diagnostiquer rapidement rôle, projet, santé ou intégration |
| Support | Collecter les premiers indices sans entrer dans l’administration technique |

## Avant de commencer

- Vous êtes connecté à ProPM Agent.
- Votre compte a accès à au moins un projet.
- Vous savez quel projet vous devez consulter.

## Vue d’ensemble

| Zone | Usage principal |
| --- | --- |
| Barre latérale | Ouvrir les grands domaines : Dashboard, Projets, Connaissance, Agents, Documents PM, Journal IA, Portfolio, Administration |
| Barre supérieure | Changer de projet, ouvrir la palette, consulter notifications, santé, langue, thème et aide |
| Surface centrale | Afficher les données du projet actif ou de l’administration choisie |
| États vides | Signaler un projet absent, un rôle insuffisant, un filtre actif ou une donnée non encore créée |

![Tableau de bord ProPM Agent](/img/screenshots/localized/fr/01-dashboard.jpg)

## Ouvrir la bonne surface

| Besoin | Page à ouvrir |
| --- | --- |
| Lire l’état général du projet | [Tableau de bord](./tableau-de-bord.md) |
| Sélectionner ou créer un projet | [Projet actif et création de projet](./projet-actif-et-creation-projet.md) |
| Ajouter ou rechercher des documents | [Connaissance, documents et imports](./connaissance-documents-et-imports.md) |
| Lancer un run IA | [Agents](./agents.md) |
| Relire un livrable | [Documents PM et artefacts](./documents-pm-et-artefacts.md) |
| Auditer un run | [Journal IA](./journal-ia.md) |
| Traiter un signal | [Signaux et notifications](./signaux-et-notifications.md) |
| Proposer ou approuver une action | [Actions et approbations](./actions-et-approbations.md) |

## Changer de projet actif

1. Ouvrez le sélecteur de projet dans la barre supérieure.
2. Recherchez le projet par nom si la liste est longue.
3. Sélectionnez le projet voulu.
4. Vérifiez que son nom apparaît dans la barre supérieure.
5. Ouvrez **Tableau de bord** pour confirmer que les métriques correspondent.
6. Reprenez ensuite votre action dans **Connaissance**, **Agents**, **Documents PM**, **Signaux** ou **Journal IA**.

## Impact du projet actif

| Surface | Effet du projet actif |
| --- | --- |
| Connaissance | Limite les documents, imports et résultats de recherche au projet |
| Agents | Lance les runs dans le contexte du projet sélectionné |
| Documents PM | Affiche les artefacts et livrables du projet |
| Journal IA | Filtre les runs et activités du projet |
| Signaux | Affiche les alertes, digests, brouillons et actions du projet |

`All projects` n’est pas un projet sélectionnable dans la barre supérieure. C’est une portée contrôlée, par exemple pour certains agents personnalisés, limitée aux projets déjà accessibles par le même compte.

## Utiliser la palette de commandes

1. Appuyez sur `Ctrl+K` sous Windows/Linux ou `Cmd+K` sous macOS.
2. Saisissez le nom d’une page ou d’une action.
3. Sélectionnez l’entrée voulue.
4. Vérifiez le projet actif si vous ouvrez une page projet.

La palette accélère la navigation, mais elle ne donne pas de droits supplémentaires.

## Utiliser le centre de notifications

1. Ouvrez l’icône de cloche dans la barre supérieure.
2. Lisez les notifications non lues.
3. Sélectionnez une notification pour ouvrir la page liée, si une navigation est fournie.
4. Utilisez **Mark all read** ou **Marquer tout comme lu** pour vider le compteur sans supprimer l’historique local.
5. Utilisez **Clear** ou **Tout effacer** uniquement si vous n’avez plus besoin de la liste locale.
6. Si la notification ouvre une page vide, vérifiez le projet actif et vos droits.

## Comprendre l’indicateur de santé

| État ou indice | Lecture pratique | Action recommandée |
| --- | --- | --- |
| API saine | Les services répondent | Continuer le travail normal |
| API dégradée | Certaines pages peuvent charger lentement ou rester vides | Patienter, relever l’heure et réessayer |
| Temps réel dégradé | Notifications et mises à jour peuvent arriver en retard | Rafraîchir la page si nécessaire |
| Auth à vérifier | La session ou le tenant demande une attention | Revenir à [Démarrage](./demarrage.md) |
| Latence élevée | Les actions peuvent sembler lentes | Éviter les doubles clics et attendre la fin des traitements |
| Message bloquant | Une page peut être indisponible si l’API live n’est pas saine | Ouvrir [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |

## Quand escalader

Escaladez au support ou à l’administrateur lorsque l’indicateur de santé reste dégradé après rafraîchissement, lorsqu’un run n’est pas créé dans le Journal IA, ou lorsqu’une action critique reste bloquée malgré un projet actif et un rôle attendu.

## Langue, thème et aide

- La langue modifie l’interface et les libellés disponibles, pas les données projet.
- Le thème clair/sombre est une préférence de confort locale.
- L’aide ouvre les repères intégrés et les liens vers la documentation.
- Certaines préférences comme le projet récent, la langue, le thème ou l’état lu des notifications peuvent rester locales au navigateur.

## Résultat attendu

- Vous savez quel projet est actif.
- Vous pouvez ouvrir la bonne page sans parcourir toute la navigation.
- Vous savez distinguer notification, état vide, rôle insuffisant et santé dégradée.

## Suite

- [Tableau de bord](./tableau-de-bord.md)
- [Projet actif et création de projet](./projet-actif-et-creation-projet.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
