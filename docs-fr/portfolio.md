---
title: Portfolio
slug: /portfolio
description: Comparer les projets, gérer les cohortes, régler les profils de signaux et lire les outliers portefeuille.
---

[Accueil](./index.md) · Portfolio

![Centre de commande portefeuille](/img/screenshots/localized/fr/02-portfolio-command-center.jpg)

![Portfolio annoté : sélection projets, profil de signaux, cohortes, seuil et outliers](/img/annotated/fr/portfolio-annote.svg)

## Objectif

La page **Portfolio** aide les PMO et responsables de portefeuille à comparer plusieurs projets avec les mêmes signaux, puis à identifier les projets qui méritent une analyse prioritaire.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| PMO | Comparer plusieurs projets et préparer une revue portefeuille |
| Direction projet | Identifier les projets atypiques ou en tension |
| Project Manager | Comprendre pourquoi son projet ressort dans une comparaison |
| Auditeur | Vérifier les preuves manquantes, contradictions et signaux indisponibles |

## Avant de commencer

- Vous avez accès à plusieurs projets.
- Les projets à comparer ont suffisamment de données, signaux ou preuves.
- Les seuils et poids doivent être adaptés à l’objectif de la revue.

## Mots clés

| Terme | Signification |
| --- | --- |
| `Projects` | Projets sélectionnés pour la comparaison |
| `Signal profile` | Ensemble de signaux, poids, seuils et sévérité minimale |
| `Overall outlier threshold` | Seuil global à partir duquel un projet ressort comme atypique |
| `Refresh comparison` | Recalcule la comparaison avec les paramètres courants |
| `Reset defaults` | Restaure les valeurs par défaut du profil |
| Cohorte | Configuration sauvegardée de projets et paramètres de comparaison |
| Snapshot | Résultat horodaté d’une comparaison à un moment donné |

## Sélectionner les projets

1. Ouvrez **Portfolio**.
2. Dans **Projects**, sélectionnez les projets à comparer.
3. Utilisez **Select all** si tous les projets accessibles doivent entrer dans la revue.
4. Utilisez **Clear all** pour repartir d’une sélection vide.
5. Vérifiez que les projets sélectionnés appartiennent au même objectif de pilotage.

## Régler le profil de signaux

1. Ouvrez **Signal profile**.
2. Activez uniquement les signaux utiles à la revue.
3. Réglez le poids de chaque signal.
4. Réglez le seuil à partir duquel le signal devient significatif.
5. Choisissez la sévérité minimale pour réduire le bruit.
6. Réglez **Overall outlier threshold**.
7. Lancez **Refresh comparison**.

## Exemples de profils PMO

| Revue | Signaux à renforcer | Objectif |
| --- | --- | --- |
| Revue hebdomadaire delivery | `schedule_pressure`, `blocker_density`, `activity_change` | Repérer dérives et blocages opérationnels |
| Revue risques | `contradiction_count`, `freshness_issues`, `blocker_density` | Identifier preuves faibles et contradictions |
| Revue coûts | `cost_pressure`, `failed_runs`, `activity_change` | Voir les tensions budgétaires ou de consommation |
| Revue qualité des preuves | `freshness_issues`, `contradiction_count`, `failed_runs` | Prioriser les projets dont la base de preuve est fragile |

## Créer une cohorte

1. Sélectionnez les projets.
2. Réglez le profil de signaux.
3. Ouvrez l’éditeur de cohorte.
4. Donnez un nom clair, par exemple `Revue PMO hebdo delivery`.
5. Enregistrez.
6. Vérifiez que la cohorte est disponible pour une prochaine session.

![Éditeur de cohorte portefeuille](/img/screenshots/localized/fr/02-portfolio-cohort-editor.jpg)

## Modifier, supprimer ou recharger une cohorte

| Action | Étapes |
| --- | --- |
| Modifier | Chargez la cohorte, ajustez projets ou signaux, enregistrez à nouveau |
| Supprimer | Ouvrez la cohorte et utilisez l’action de suppression si disponible |
| Recharger | Sélectionnez la cohorte sauvegardée puis lancez **Refresh comparison** |
| Repartir des valeurs par défaut | Utilisez **Reset defaults** avant d’enregistrer une nouvelle cohorte |

Une cohorte préconfigurée peut varier selon les environnements. Ne l’interprétez pas comme un modèle imposé si elle ne correspond pas à votre gouvernance.

## Lire un outlier

Un **outlier** est un projet qui ressort selon les poids, seuils et signaux actifs. Ce n’est pas un verdict automatique.

### Exemple métier

Un projet ressort fortement car `schedule_pressure` et `freshness_issues` dépassent les seuils. Lecture recommandée :

1. ouvrez le détail du projet dans Portfolio ;
2. vérifiez quels signaux expliquent le score ;
3. lisez les preuves et leur fraîcheur ;
4. ouvrez [Tableau de bord](./tableau-de-bord.md) ou [Signaux et notifications](./signaux-et-notifications.md) pour le projet ;
5. ouvrez [Connaissance](./connaissance-documents-et-imports.md) si les preuves sont absentes ou anciennes ;
6. ouvrez [Journal IA](./journal-ia.md) si le problème porte sur les runs ou le fournisseur IA effectif.

## Signaux indisponibles et evidence gaps

Un signal indisponible ne signifie pas absence de risque. Il indique un manque de preuve ou de données exploitables pour calculer l’indicateur. Traitez les **evidence gaps** comme une demande de vérification, pas comme un feu vert.

## Quand Portfolio paraît vide ou calme

| Situation | Lecture probable | Action recommandée |
| --- | --- | --- |
| Aucun projet | Accès insuffisant ou sélection vide | Vérifiez les projets accessibles |
| Aucun outlier | Seuil trop élevé ou situation stable | Ajustez le seuil ou confirmez la stabilité |
| Résumé inexploitable | Données projet insuffisantes | Ouvrez la connaissance ou le tableau de bord |
| Snapshot ancien | Comparaison non recalculée récemment | Lancez **Refresh comparison** |

## Calcul et horodatage

Portfolio charge les projets accessibles, applique le profil de signaux, calcule les écarts et affiche un snapshot horodaté. Gardez l’explication simple : les poids expriment l’importance relative, les seuils déclenchent l’attention et le score global sert à prioriser l’analyse.

## Suite

- [Tableau de bord](./tableau-de-bord.md)
- [Signaux et notifications](./signaux-et-notifications.md)
- [Journal IA](./journal-ia.md)
- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
