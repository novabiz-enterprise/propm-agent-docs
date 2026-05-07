---
title: Portfolio
slug: /portfolio
description: Comparer les projets, configurer les signaux portefeuille, lire les cohortes et outliers, puis décider quel projet traiter en priorité.
---

[Accueil](./index.md) · Portfolio

![Centre de commande portefeuille](/img/screenshots/localized/fr/02-portfolio-command-center.jpg)

## Objectif

La page **Portfolio** est une surface de pilotage PMO transverse. Elle compare plusieurs projets avec un même modèle de signaux avant d’ouvrir le détail d’un projet.

Elle répond à la question : **quels projets méritent mon attention en priorité maintenant ?**

Utilisez-la surtout pour :

- prioriser le projet qui mérite l’attention en premier ;
- comparer des signaux cohérents entre plusieurs projets ;
- décider quel projet mérite ensuite un drill-down plus détaillé.

Ne la traitez ni comme une vue sponsor purement narrative, ni comme un remplacement de l’**Espace de travail** détaillé d’un projet.

## À quoi sert Portfolio

La page compare plusieurs projets avec des **signaux configurables**, pas avec un tableau rouge / orange / vert figé.

Elle permet de sélectionner plusieurs projets, choisir les signaux, régler poids et seuils, filtrer la sévérité minimale, enregistrer une cohorte, repérer les **outliers** et ouvrir le détail d’un projet.

## Ce que voit l’utilisateur

| Zone | Ce que l’on y fait |
| --- | --- |
| **Sélection des projets** | choisir quels projets entrent dans la comparaison |
| **Profil de signaux** | choisir les signaux, leurs poids, leurs seuils et la sévérité minimale |
| **Cohortes** | enregistrer ou recharger une configuration de comparaison réutilisable |
| **Résultats de comparaison** | lire le résumé, les outliers et les écarts entre projets |
| **Project drill-down** | ouvrir les preuves, l’activité récente et le détail par signal pour un projet |

## Exemple guidé

1. Dans **Projects**, sélectionnez les projets qui appartiennent à une même conversation de pilotage.
2. Dans **Signal profile**, activez les signaux utiles, par exemple `blocker_density`, `freshness_issues`, `failed_runs` et `schedule_pressure`.
3. Réglez les poids pour exprimer ce qui compte le plus dans cette revue.
4. Réglez les seuils pour décider à partir de quand un signal mérite attention.
5. Choisissez la sévérité minimale pour masquer le bruit faible si besoin.
6. Réglez le **Overall outlier threshold** pour contrôler le niveau de sélectivité.
7. Enregistrez la configuration comme **cohorte** si elle doit être réutilisée.
8. Cliquez sur **Refresh comparison** pour recalculer la vue.
9. Lisez le **Narrative comparison**, puis les **Outliers**.
10. Ouvrez le **Project drill-down** pour relire preuves, activité récente et liens vers Workspace, Knowledge, Reports ou AI Log.

![Éditeur de cohorte portefeuille](/img/screenshots/localized/fr/02-portfolio-cohort-editor.jpg)

## Profil de signaux par défaut

| Signal | Poids par défaut | Seuil par défaut |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | - | `55` |

Les valeurs par défaut sont un point de départ sûr. **Reset defaults** les restaure, et les **cohortes** sauvegardées mémorisent les profils réutilisables.

## Signaux Portfolio

| Signal | Question à laquelle il répond | Comment l’interpréter |
| --- | --- | --- |
| `activity_change` | l’activité récente est-elle très différente de la période précédente ? | élevé = variation inhabituelle à expliquer |
| `blocker_density` | le projet montre-t-il beaucoup de blocages ou d’escalades ? | élevé = blocages fréquents ou concentrés |
| `freshness_issues` | les preuves et sources sont-elles trop anciennes ou indisponibles ? | élevé = la vue projet devient moins fiable |
| `contradiction_count` | les sources se contredisent-elles ? | élevé = arbitrage ou clarification nécessaire |
| `failed_runs` | les automatisations ou runs échouent-ils souvent ? | élevé = friction technique ou opérationnelle |
| `schedule_pressure` | le planning montre-t-il des signes de tension ? | élevé = pression planning ou dérive calendrier |
| `cost_pressure` | le budget ou la consommation montrent-ils une tension ? | élevé = risque budget / coûts |

## Lire un outlier

Un **outlier** n’est pas une note magique ni un jugement définitif. Il signifie que le projet ressort plus que les autres selon les règles actuelles : signaux élevés, poids significatifs, seuils dépassés et score combiné au-dessus du seuil global.

Un signal **indisponible** ne signifie pas zéro risque. Il indique que le portefeuille n’a pas assez de preuve fiable pour calculer l’indicateur.

## Quand Portfolio paraît vide ou calme

Plusieurs lectures sont normales : aucun projet accessible, aucun signal sélectionné, résumé inexploitable, preuves manquantes ou seuil global d’outlier non dépassé.

Un résultat calme peut donc venir d’une sélection restrictive, d’un manque de preuves ou d’une situation réellement stable.

## Comment la comparaison est calculée

La page charge les projets accessibles, pré-sélectionne un ensemble initial si nécessaire, demande la comparaison à un service lorsque la configuration est valide, puis **Refresh comparison** relance un recalcul asynchrone et met à jour le **snapshot** visible.

## À retenir

- commencez par choisir les bons projets ;
- activez seulement les signaux utiles à votre revue ;
- réglez poids, seuils et sévérité avec intention ;
- utilisez les **outliers** comme point de départ d’investigation, pas comme verdict final ;
- ouvrez le **Project drill-down** pour comprendre le résultat.

## Suite

- [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)
- [Plan du tenant, utilisateurs licenciés et mises à jour applicatives](./seats-management-app-updates.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
