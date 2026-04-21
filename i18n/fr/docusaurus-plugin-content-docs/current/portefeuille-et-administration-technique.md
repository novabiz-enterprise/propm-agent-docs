---
title: Portefeuille et administration technique
slug: /portefeuille-et-administration-technique
description: Comprendre la page Portfolio pas à pas, lire les cohortes et outliers, puis administrer la plateforme, les intégrations et les fournisseurs IA.
---

[Accueil](./index.md) · [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

![Centre de commande portefeuille](/img/screenshots/localized/fr/02-portfolio-command-center.png)

## Objectif

Cette page couvre deux surfaces différentes du produit :

1. la page **Portfolio** ou **Centre de commande portefeuille**, utilisée pour comparer plusieurs projets ;
2. **Administration de la plateforme**, utilisée pour préparer les intégrations, les fournisseurs IA, l’abonnement et l’audit.

Pour un utilisateur débutant, il est utile de retenir ceci :

- la page **Portfolio** aide à répondre à la question **« quels projets méritent mon attention en priorité ? »** ;
- l’**Administration de la plateforme** aide à répondre à la question **« la plateforme est-elle correctement préparée pour l’organisation ? »**.

## Pour quel public cette page est-elle surtout utile ?

Dans l’application observée, **Portfolio** sert d’abord à une lecture transverse de type **PMO / pilotage multi-projets**. Il aide à comparer plusieurs projets avec un même modèle de signaux avant d’ouvrir le détail d’un projet.

Utilisez-le surtout pour :

- prioriser le projet qui mérite l’attention en premier ;
- comparer des signaux cohérents entre plusieurs projets ;
- décider quel projet mérite ensuite un drill-down plus détaillé.

Ne le traitez ni comme une vue sponsor purement narrative, ni comme un remplacement de l’**Espace de travail** détaillé d’un projet.

---

## Partie 1 — Comprendre la page Portfolio pas à pas

## À quoi sert la page Portfolio ?

La page **Portfolio** sert à comparer plusieurs projets avec des **signaux configurables** au lieu d’un simple tableau rouge / orange / vert figé.

Elle permet notamment de :

- sélectionner plusieurs projets ;
- choisir les signaux à comparer ;
- définir un **poids** et un **seuil** pour chaque signal ;
- filtrer la **sévérité minimale** ;
- enregistrer une **cohorte** réutilisable ;
- repérer les **outliers** ou **valeurs aberrantes** ;
- ouvrir ensuite le détail d’un projet pour comprendre pourquoi il ressort.

## Ce que l’utilisateur voit en arrivant sur la page

En arrivant sur la page Portfolio, l’utilisateur voit généralement cinq zones.

| Zone | Ce que l’on y fait |
| --- | --- |
| **Sélection des projets** | choisir quels projets entrent dans la comparaison |
| **Profil de signaux** | choisir les signaux, leurs poids, leurs seuils et la sévérité minimale |
| **Cohortes** | enregistrer ou recharger une configuration de comparaison réutilisable |
| **Résultats de comparaison** | lire le résumé, les outliers et les écarts entre projets |
| **Project drill-down** | ouvrir les preuves, l’activité récente et le détail par signal pour un projet |

## Les mots à comprendre avant de commencer

| Mot | Explication simple |
| --- | --- |
| **Projet** | un projet inclus dans la comparaison |
| **Signal** | un indicateur comparatif, par exemple blocages, fraîcheur ou pression planning |
| **Poids** | l’importance donnée à un signal dans le score global |
| **Seuil** | le niveau à partir duquel un signal commence à ressortir comme notable |
| **Sévérité minimale** | un filtre qui masque les signaux trop faibles |
| **Cohorte** | un groupe de projets enregistré avec son profil de comparaison |
| **Outlier / valeur aberrante** | un projet qui ressort plus fortement que les autres selon la configuration active |
| **Narrative comparison** | un résumé textuel de la comparaison en cours |
| **Project drill-down** | le détail projet par projet avec preuves et activité |

## Exemple guidé — comparer trois projets pour une revue hebdomadaire

Imaginons qu’un PMO veut comparer trois projets :

- Projet A ;
- Projet B ;
- Projet C.

Le but est de repérer rapidement celui qui demande une attention prioritaire avant le comité hebdomadaire.

### Étape 1 — Choisir les projets

Dans la zone **Projects**, cochez les projets que vous voulez comparer.

### Bon réflexe

Comparez de préférence des projets qui appartiennent à une **même conversation de pilotage**. Par exemple :

- trois projets d’un même portefeuille ;
- trois projets d’un même comité ;
- ou trois projets d’une même direction.

### Étape 2 — Choisir les signaux utiles

Dans le **Signal profile**, activez les signaux qui comptent réellement pour votre revue.

Exemple pour une revue hebdomadaire :

- **blocker_density** ;
- **freshness_issues** ;
- **failed_runs** ;
- **schedule_pressure**.

### Étape 3 — Régler les poids

Le **poids** indique l’importance donnée à un signal.

- si vous mettez un poids élevé sur **blocker_density**, les projets avec beaucoup de blocages ressortiront davantage ;
- si vous mettez un poids faible sur **activity_change**, ce signal influencera moins le classement final.

### Étape 4 — Régler les seuils

Le **seuil** indique à partir de quand un signal doit vraiment attirer l’attention.

- un seuil bas rend la comparaison plus sensible ;
- un seuil élevé rend la comparaison plus sélective.

### Étape 5 — Choisir la sévérité minimale

La **sévérité minimale** filtre ce que vous voulez voir dans les résultats.

Exemple :

- **low and above** = vous voyez presque tout ;
- **medium and above** = vous filtrez déjà les signaux faibles ;
- **high and above** = vous vous concentrez uniquement sur les sujets plus sérieux.

### Étape 6 — Régler le seuil global d’outlier

Le **Overall outlier threshold** détermine à partir de quel niveau combiné un projet doit être signalé comme **valeur aberrante**.

- seuil plus bas = plus de projets ressortent ;
- seuil plus haut = seuls les cas les plus marqués ressortent.

## Paramètres de départ observés

La page ne part pas d’une feuille blanche. Les paramètres observés par défaut sont les suivants :

| Signal | Poids par défaut | Seuil par défaut |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | — | `55` |

Compléments utiles :

- la **sévérité minimale** démarre sans filtre restrictif (`All`) ;
- **Reset defaults** ramène ces valeurs de départ ;
- ces valeurs sont un **point de départ sûr**, pas un modèle imposé ;
- il n’existe pas de preset caché au-delà de ces défauts et des **cohortes sauvegardées** ;
- certains environnements de démonstration peuvent aussi montrer une cohorte seedée, mais ce contenu varie selon l’environnement.

### Étape 7 — Enregistrer une cohorte si besoin

Si vous faites souvent la même comparaison, enregistrez-la comme **cohorte**.

Une cohorte mémorise :

- les projets choisis ;
- les signaux activés ;
- les poids ;
- les seuils ;
- la sévérité minimale.

![Éditeur de cohorte portefeuille](/img/screenshots/localized/fr/02-portfolio-cohort-editor.png)

### Étape 8 — Lancer ou rafraîchir la comparaison

Cliquez sur **Refresh comparison** pour recalculer la vue avec les paramètres actifs.

### Étape 9 — Lire le résumé narratif

La zone **Narrative comparison** donne un texte de synthèse.

Elle répond généralement à la question :

**« Qu’est-ce qui ressort le plus, maintenant, dans ce groupe de projets ? »**

### Étape 10 — Lire les outliers

La zone **Outliers** liste les projets qui dépassent le profil actif de poids et de seuils.

Un outlier n’est pas forcément un « projet en difficulté ». Cela veut simplement dire :

- qu’il ressort plus que les autres ;
- qu’il mérite une lecture plus attentive ;
- qu’il faut comprendre **pourquoi** il ressort.

### Étape 11 — Ouvrir le détail du projet

Dans **Project drill-down**, vous pouvez consulter :

- les signaux du projet ;
- les preuves ;
- l’activité récente ;
- les liens vers l’**Espace de travail**, la **Connaissance**, les **Rapports** ou le **Journal IA**.

C’est cette étape qui transforme une alerte portefeuille en compréhension concrète.

## Comprendre les signaux visibles dans Portfolio

Les signaux observés dans le produit incluent notamment :

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Définition simple de chaque signal

| Signal | Question à laquelle il répond | Comment l’interpréter |
| --- | --- | --- |
| `activity_change` | l’activité récente est-elle très différente de la période précédente ? | élevé = variation inhabituelle à expliquer |
| `blocker_density` | le projet montre-t-il beaucoup de blocages ou d’escalades ? | élevé = blocages fréquents ou concentrés |
| `freshness_issues` | les preuves et sources sont-elles trop anciennes ou indisponibles ? | élevé = la vue projet devient moins fiable |
| `contradiction_count` | les sources se contredisent-elles ? | élevé = arbitrage ou clarification nécessaire |
| `failed_runs` | les automatisations ou runs échouent-ils souvent ? | élevé = friction technique ou opérationnelle |
| `schedule_pressure` | le planning montre-t-il des signes de tension ? | élevé = pression planning ou dérive calendrier |
| `cost_pressure` | le budget ou la consommation montrent-ils une tension ? | élevé = risque budget / coûts |

## Comment lire poids, seuils et sévérité avec un exemple simple

Prenons un exemple très concret.

### Cas 1 — Vous voulez surtout voir les projets bloqués

- augmentez le **poids** de `blocker_density` ;
- gardez un **seuil** moyen ;
- mettez la **sévérité minimale** sur `medium`.

Résultat attendu : les projets avec blocages récurrents ressortent davantage.

### Cas 2 — Vous voulez surtout contrôler la qualité des preuves

- augmentez le poids de `freshness_issues` et `contradiction_count` ;
- gardez un seuil plus sensible ;
- lisez ensuite les preuves indisponibles ou contradictoires.

Résultat attendu : les projets dont la lecture devient peu fiable remontent plus vite.

### Cas 3 — Vous voulez un comité très sélectif

- gardez peu de signaux ;
- montez les seuils ;
- augmentez la sévérité minimale ;
- montez le seuil global d’outlier.

Résultat attendu : seuls les cas les plus marqués resteront visibles.

## Comment lire un outlier correctement

Un **outlier** n’est pas une note magique ni un jugement définitif.

Dans les flux observés, un projet ressort comme outlier lorsque :

- un ou plusieurs signaux sont élevés ;
- ces signaux portent un poids significatif ;
- les seuils actifs sont dépassés ;
- le score combiné dépasse le seuil global d’outlier.

### Lecture correcte

- **outlier** = « ce projet ressort plus que les autres selon les règles actuelles » ;
- **pas outlier** = « ce projet reste dans la bande normale du groupe actuel ».

## Pourquoi un signal peut être indisponible

Un signal peut être **indisponible** quand la preuve nécessaire manque.

Exemple :

- si le projet n’a pas les bonnes sources planning, `schedule_pressure` peut rester indisponible ;
- si les sources budget ne sont pas présentes, `cost_pressure` peut rester indisponible.

### Point très important

Un signal **indisponible** ne veut pas dire **zéro risque**.

Cela veut dire :

**« le portefeuille n’a pas assez de preuve fiable pour calculer cet indicateur »**.

## Ce que contient une cohorte

Une cohorte est un **profil de comparaison enregistré**.

Elle garde en mémoire :

- le nom de la cohorte ;
- sa description ;
- les projets choisis ;
- les signaux activés ;
- les poids ;
- les seuils ;
- la sévérité minimale.

### Pourquoi utiliser une cohorte

Utilisez une cohorte quand vous voulez refaire régulièrement la même comparaison, par exemple :

- revue hebdomadaire de livraison ;
- suivi mensuel de portefeuille ;
- comité de risques ;
- revue exécutive restreinte.

## Quand Portfolio paraît vide, calme ou sans outlier

Plusieurs lectures sont normales :

- aucun projet accessible n’a été chargé ;
- aucun projet ou aucun signal n’est actuellement sélectionné ;
- la comparaison n’a pas renvoyé de résumé projet exploitable ;
- certains signaux restent explicitement indisponibles faute de preuves ;
- aucun projet ne dépasse le seuil global d’outlier avec la configuration active.

Dans le drill-down, vous pouvez aussi voir séparément :

- aucune activité récente ;
- aucune preuve visible ;
- aucun signal restant après le filtre de sévérité actif.

Un portefeuille « calme » peut donc venir d’une sélection restrictive, d’un manque de preuves ou d’une situation réellement stable.

## Comment lire la zone Project drill-down

La zone **Project drill-down** permet d’expliquer le résultat.

Elle peut afficher :

- le **score pondéré** du projet ;
- la liste des signaux visibles ;
- des **preuves** ou extraits documentaires ;
- l’**activité récente** ;
- des liens vers **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts** et **AI Log**.

### Lecture pratique

- si un projet ressort, commencez par le **résumé narratif** ;
- ouvrez ensuite le **signal concerné** ;
- relisez les **preuves** ;
- contrôlez enfin l’**activité récente** pour comprendre si la situation est encore active.

## Comment la comparaison est calculée dans l’application observée

La vue portefeuille n’est pas un simple calcul local figé dans le navigateur.

Comportement observé :

1. la page charge les projets accessibles ;
2. elle pré-sélectionne un premier ensemble utilisable quand rien n’a encore été choisi ;
3. dès que la configuration projets/signaux est valide, la comparaison est demandée à un service ;
4. **Refresh comparison** relance un recalcul asynchrone et met à jour le **snapshot** visible ;
5. l’horodatage de snapshot dans le résumé narratif sert de repère pour savoir quand cette vue a été recalculée.

Les **cohortes** sauvegardées mémorisent un profil réutilisable, mais elles ne remplacent pas la requête de comparaison elle-même.

## Bon usage de la page Portfolio

Utilisez la page Portfolio pour :

- comparer ;
- prioriser ;
- repérer les écarts ;
- décider quel projet doit être étudié en détail.

N’utilisez pas la page Portfolio comme remplacement complet de l’**Espace de travail** projet.

---

## Partie 2 — Administration de la plateforme

## À quoi sert cette partie

**Administration de la plateforme** sert à préparer la plateforme à l’échelle de l’organisation.

C’est ici que l’on configure notamment :

- les **intégrations de la plateforme** ;
- les **fournisseurs IA** ;
- l’**abonnement** et les **sièges** ;
- l’**audit d’activité**.

![Administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.png)

## Sections visibles

| Section | Rôle |
| --- | --- |
| Vue d’ensemble | résumé de l’état général de préparation |
| Intégrations de la plateforme | définitions techniques des connecteurs et fournisseurs d’ingestion |
| Paramètres du fournisseur IA | configuration, validation, test et activation du fournisseur IA |
| Marketplace & abonnement | plan, entitlements, sièges et état commercial |
| Audit / activité | historique des actions administratives |

## Intégrations de la plateforme vs Intégrations du projet

Une règle importante ressort du produit :

- le **niveau plateforme** décide ce qui existe techniquement ;
- le **niveau projet** décide ce qui est réellement utilisé dans un projet donné.

### Lecture simple

- **plateforme** = on prépare l’outil ;
- **projet** = on autorise le projet à s’en servir ;
- **gouvernance** = on décide qui peut vraiment agir avec cet outil.

Pour le détail complet par famille de connecteurs, voir [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint).

## Préparation et causes de blocage

Une intégration peut être bloquée pour cause de :

- **entitlement** ;
- **policy** ;
- **permission** ;
- **health** à vérifier ;
- définition plateforme manquante ;
- binding projet non ouvert.

### Circuit de vérification recommandé

1. relire le blocage côté projet ;
2. ouvrir **Administration de la plateforme** ;
3. vérifier la définition technique du connecteur ou fournisseur ;
4. revenir dans le projet pour confirmer le binding et l’usage autorisé.

## Paramètres du fournisseur IA

Les familles de fournisseurs visibles dans le produit comprennent notamment :

- **OpenRouter** ;
- **OpenAI-compatible** ;
- **OpenAI** ;
- **Azure OpenAI** ;

### Quand choisir chaque fournisseur

| Fournisseur | Quand le choisir | Ce qu’il faut généralement compléter |
| --- | --- | --- |
| **OpenRouter** | quand il faut comparer plusieurs familles de modèles via un seul raccordement | Base URL, clé, modèle par défaut |
| **OpenAI-compatible** | quand le client utilise une gateway ou un endpoint compatible | endpoint exact, auth, clé ou secret, modèle attendu |
| **OpenAI** | quand le client utilise directement OpenAI | URL, clé ou secret, modèle par défaut |
| **Azure OpenAI** | quand le client est centré sur Azure et veut choisir ses déploiements Azure OpenAI | endpoint, version API, auth mode, nom de déploiement LLM |

### Comment lire les statuts d’un fournisseur IA

| Statut | Ce que cela veut dire |
| --- | --- |
| **Configuration** | les champs sont enregistrés |
| **Validation** | la configuration a passé les contrôles attendus |
| **Test** | la connectivité réelle a été vérifiée |
| **Activate** | le fournisseur est activé dans la configuration admin |
| **Operational** | le fournisseur peut être considéré comme exploitable |

### Pas à pas très simple pour préparer un fournisseur IA

1. ouvrez **Paramètres du fournisseur IA** ;
2. sélectionnez le fournisseur voulu ;
3. complétez les champs demandés ;
4. cliquez sur **Save** ;
5. cliquez sur **Validate** ;
6. cliquez sur **Test** ;
7. cliquez sur **Activate** ;
8. contrôlez ensuite le résultat dans **Journal IA**.

### Cas particulier Azure OpenAI

Avec **Azure OpenAI**, il faut souvent compléter dans l’administration :

- l’**Endpoint** ;
- la **version API** ;
- le **mode d’authentification** ;
- le **LLM deployment name** ;
- éventuellement l’**Embeddings deployment name**.

Pour le détail du choix de fournisseur IA pendant le déploiement Marketplace, voir [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md).

### Effective AI provider vs deployment-selected AI provider

Deux notions sont à distinguer :

- **Deployment-selected AI Provider** : fournisseur sélectionné dans la configuration initiale de l’environnement ;
- **Effective AI Provider** : fournisseur réellement utilisé au runtime pour un run donné.

La valeur **effective** est la référence la plus fiable quand vous enquêtez sur un run concret. Elle peut être relue dans le **Journal IA** et peut différer de la valeur sélectionnée au déploiement.

## Abonnement, entitlement et sièges

Le produit gère un modèle de licence avec sièges et capacités.

### Ce qu’un administrateur peut voir

- le **plan** actif ;
- le nombre de **sièges achetés** ;
- le nombre de **sièges disponibles** ;
- les utilisateurs déjà licenciés ;
- l’état commercial, par exemple `billing state`, `payment state` ou `subscription status`.

### Pourquoi c’est important

Un utilisateur bloqué n’a pas forcément une question de connexion. Le blocage peut venir :

- d’un manque de sièges ;
- d’un entitlement manquant ;
- d’une fonctionnalité non incluse dans le plan.

### Lecture simple de `entitlement`

`Entitlement` signifie ici : **ce que le plan couvre réellement comme capacité utilisable**.

Exemples pratiques :

- un connecteur premium peut rester visible mais bloqué en usage opérationnel ;
- un fournisseur IA peut être configuré mais non utilisable si le plan ne l’autorise pas ;
- un projet peut voir l’option mais rester en lecture seule tant que la capacité n’est pas ouverte.

## Repères techniques de plateforme

L’infrastructure Azure observée s’appuie notamment sur :

- Azure Container Apps ;
- Storage ;
- Azure AI Search ;
- Key Vault ;
- Log Analytics ;
- Application Insights ;
- Document Intelligence.


## Variabilité des contenus seedés et de démonstration

Les environnements de démonstration peuvent varier. En pratique :

- tous les environnements n’exposent pas les mêmes projets de démonstration ;
- les documents seedés, rapports seedés et exemples de recherche peuvent différer ;
- un écran vide dans un environnement live ne contredit pas forcément une capture issue d’un autre environnement ;
- la documentation décrit le comportement observé, pas la promesse que chaque environnement contiendra exactement les mêmes données de démonstration.

## À retenir

### Pour la page Portfolio

- commencez par choisir les bons projets ;
- activez seulement les signaux utiles à votre revue ;
- réglez poids, seuils et sévérité avec intention ;
- utilisez les **outliers** comme point de départ d’investigation, pas comme verdict final ;
- ouvrez ensuite le **Project drill-down** pour comprendre le résultat.

### Pour l’administration technique

- le niveau plateforme prépare les connecteurs et fournisseurs ;
- le niveau projet ouvre leur usage réel ;
- la gouvernance décide qui peut agir ;
- un fournisseur IA n’est prêt que lorsqu’il est **enregistré, validé, testé et activé** ;
- le **Journal IA** reste la référence pour confirmer le fournisseur réellement utilisé.

## Suite

- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Glossaire](./glossaire.md)