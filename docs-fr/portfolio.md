---
title: Portfolio
slug: /portfolio
description: Comparer les projets, configurer les signaux portefeuille, lire les cohortes et valeurs atypiques, puis décider quel projet traiter en priorité.
---

[Accueil](./index.md) · Portfolio

![Centre de commande portefeuille](/img/screenshots/localized/fr/02-portfolio-command-center.jpg)

## Objectif

La page **Portfolio** est une surface de pilotage PMO transverse. Elle compare plusieurs projets avec un même modèle de signaux avant d’ouvrir le détail d’un projet.

Elle répond à la question : **quels projets méritent mon attention en priorité maintenant ?**

Utilisez-la surtout pour :

- prioriser le projet qui mérite l’attention en premier ;
- comparer des signaux cohérents entre plusieurs projets ;
- décider quel projet mérite ensuite une analyse détaillée.

Ne la traitez ni comme une vue sponsor purement narrative, ni comme un remplacement de l’**Espace de travail** détaillé d’un projet.

## À quoi sert Portfolio

La page compare plusieurs projets avec des **signaux configurables**, pas avec un tableau rouge / orange / vert figé.

Elle permet de :

- sélectionner plusieurs projets ;
- choisir les signaux à comparer ;
- définir un **poids** et un **seuil** pour chaque signal ;
- filtrer la **sévérité minimale** ;
- enregistrer une **cohorte** réutilisable ;
- repérer les **valeurs atypiques** ou valeurs aberrantes ;
- ouvrir le détail d’un projet pour comprendre pourquoi il ressort.

## Ce que voit l’utilisateur

| Zone | Ce que l’on y fait |
| --- | --- |
| **Sélection des projets** | choisir quels projets entrent dans la comparaison |
| **Profil de signaux** | choisir les signaux, leurs poids, leurs seuils et la sévérité minimale |
| **Cohortes** | enregistrer ou recharger une configuration de comparaison réutilisable |
| **Résultats de comparaison** | lire le résumé, les valeurs atypiques et les écarts entre projets |
| **Analyse détaillée du projet** | ouvrir les preuves, l’activité récente et le détail par signal pour un projet |

## Mots clés

| Mot | Explication simple |
| --- | --- |
| **Projet** | un projet inclus dans la comparaison |
| **Signal** | un indicateur comparatif, par exemple blocages, fraîcheur ou pression planning |
| **Poids** | l’importance donnée à un signal dans le score global |
| **Seuil** | le niveau à partir duquel un signal commence à ressortir |
| **Sévérité minimale** | un filtre qui masque les signaux trop faibles |
| **Cohorte** | un groupe de projets enregistré avec son profil de comparaison |
| **Valeur atypique** | un projet qui ressort plus fortement que les autres selon la configuration active |
| **Comparaison narrative** | un résumé textuel de la comparaison en cours |
| **Analyse détaillée du projet** | le détail projet par projet avec preuves et activité |

## Exemple guidé

Un PMO veut comparer trois projets avant une revue hebdomadaire.

1. Dans **Projects**, sélectionnez les projets qui appartiennent à une même conversation de pilotage.
2. Dans **Signal profile**, activez les signaux utiles, par exemple `blocker_density`, `freshness_issues`, `failed_runs` et `schedule_pressure`.
3. Réglez les poids pour exprimer ce qui compte le plus dans cette revue.
4. Réglez les seuils pour décider à partir de quand un signal mérite attention.
5. Choisissez la sévérité minimale pour masquer le bruit faible si besoin.
6. Réglez le **Overall outlier threshold** pour contrôler le niveau de sélectivité.
7. Enregistrez la configuration comme **cohorte** si elle doit être réutilisée.
8. Cliquez sur **Refresh comparison** pour recalculer la vue.
9. Lisez la **comparaison narrative**, puis les **valeurs atypiques**.
10. Ouvrez l’**analyse détaillée du projet** pour relire preuves, activité récente et liens vers l’Espace de travail, la Connaissance, les Rapports ou le Journal IA.

![Éditeur de cohorte portefeuille](/img/screenshots/localized/fr/02-portfolio-cohort-editor.jpg)

## Profil de signaux par défaut

La page ne part pas d’une feuille blanche. Les valeurs par défaut sont un point de départ sûr, pas un modèle imposé.

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

Compléments utiles :

- la **sévérité minimale** démarre sans filtre restrictif ;
- **Reset defaults** restaure ces valeurs de départ ;
- les **cohortes** sauvegardées mémorisent les profils réutilisables ;
- certains environnements peuvent proposer une cohorte préconfigurée, avec un contenu variable.

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

Un **outlier** n’est pas une note magique ni un jugement définitif.

Un projet ressort comme outlier lorsque :

- un ou plusieurs signaux sont élevés ;
- ces signaux portent un poids significatif ;
- les seuils actifs sont dépassés ;
- le score combiné dépasse le seuil global d’outlier.

Lecture correcte :

- **outlier** signifie que le projet ressort plus que les autres selon les règles actuelles ;
- **pas outlier** signifie que le projet reste dans la bande normale du groupe actuel.

## Pourquoi un signal peut être indisponible

Un signal peut être **indisponible** quand la preuve nécessaire manque.

Par exemple :

- si le projet n’a pas les bonnes sources planning, `schedule_pressure` peut rester indisponible ;
- si les sources budget ne sont pas présentes, `cost_pressure` peut rester indisponible.

Un signal indisponible ne veut pas dire zéro risque. Il indique que le portefeuille n’a pas assez de preuve fiable pour calculer l’indicateur.

## Quand Portfolio paraît vide ou calme

Plusieurs lectures sont normales :

- aucun projet accessible n’a été chargé ;
- aucun projet ou signal n’est sélectionné ;
- la comparaison n’a pas renvoyé de résumé projet exploitable ;
- certains signaux sont indisponibles faute de preuves ;
- aucun projet ne dépasse le seuil global d’outlier actif.

Un résultat calme peut donc venir d’une sélection restrictive, d’un manque de preuves ou d’une situation réellement stable.

## Comment la comparaison est calculée

Comportement attendu :

1. la page charge les projets accessibles ;
2. elle pré-sélectionne un premier ensemble utilisable quand rien n’a encore été choisi ;
3. dès que la configuration projets/signaux est valide, la comparaison est demandée à un service ;
4. **Refresh comparison** relance un recalcul asynchrone et met à jour le **snapshot** visible ;
5. l’horodatage du snapshot indique quand la vue portefeuille a été recalculée.

Les **cohortes** sauvegardées mémorisent un profil réutilisable, mais elles ne remplacent pas la requête de comparaison live.

## À retenir

- commencez par choisir les bons projets ;
- activez seulement les signaux utiles à votre revue ;
- réglez poids, seuils et sévérité avec intention ;
- utilisez les **valeurs atypiques** comme point de départ d’investigation, pas comme verdict final ;
- ouvrez l’**analyse détaillée du projet** pour comprendre le résultat.

## Suite

- [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)
- [Plan du tenant, utilisateurs licenciés et mises à jour applicatives](./seats-management-app-updates.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
