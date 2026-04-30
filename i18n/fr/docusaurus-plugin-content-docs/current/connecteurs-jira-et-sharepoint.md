---
title: Connecteurs et intégrations
slug: /connecteurs-jira-et-sharepoint
description: Comprendre tous les connecteurs visibles dans ProPM Agent, leurs avantages, leurs usages et leur mode d’intégration dans la plateforme.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

![Flux Jira et SharePoint entre plateforme, projet et actions](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Objectif

Cette page explique le **catalogue opérationnel des connecteurs et fournisseurs d’ingestion supportés dans ProPM Agent**, leurs avantages, leur utilité métier et la manière dont ils s’intègrent dans le produit. Certaines listes d’administration peuvent aussi afficher des familles extensibles ou personnalisées qui demandent une configuration et une validation supplémentaires avant usage réel.

L’objectif est de répondre à trois questions simples :

1. **À quoi sert ce connecteur ?**
2. **Où le voit-on dans ProPM Agent ?**
3. **Comment passe-t-on d’un connecteur déclaré à un connecteur réellement utilisable ?**

## Comprendre un connecteur dans ProPM Agent

Un connecteur est un **pont contrôlé** entre ProPM Agent et un autre outil de l’entreprise.

Dans le produit, un connecteur peut servir à trois choses différentes :

| Type | À quoi il sert | Exemple |
| --- | --- | --- |
| **Connecteur d’exécution** | envoyer une action vers un outil externe | créer un ticket Jira, envoyer un message Teams, publier dans SharePoint |
| **Fournisseur d’ingestion** | importer du contenu vers la connaissance | importer des documents SharePoint, des pages Confluence, des work items Azure DevOps |
| **Destination d’artefact** | publier un livrable relu vers une destination cible | publier un document PM vers SharePoint |

### Règle simple à retenir

- **Importer** n’est pas la même chose que **publier**.
- **Voir** un connecteur n’est pas la même chose que **pouvoir l’exécuter**.
- Un connecteur peut exister **au niveau plateforme**, sans être encore **ouvert à un projet**.

## Comment un connecteur s’intègre à ProPM Agent

Quel que soit le connecteur, le parcours logique est toujours le même :

1. l’administrateur le prépare dans **Administration de la plateforme** ;
2. il valide la configuration et, si l’option est activée, la connectivité réelle ;
3. le connecteur est rendu disponible dans **Intégrations du projet** ;
4. les **Politiques de gouvernance** définissent qui peut l’utiliser et à quel niveau ;
5. l’équipe l’utilise ensuite dans **Connaissance**, **Documents PM** ou **Actions & approbations** ;
6. la trace finale reste visible dans l’**activité du projet** et le **Journal IA**.

## Où l’utilisateur voit les connecteurs dans le produit

| Surface | Ce que l’on y fait |
| --- | --- |
| **Administration de la plateforme** | créer la définition technique, renseigner l’authentification, valider, tester selon le provider et activer les probes si besoin |
| **Intégrations du projet** | vérifier quels connecteurs sont réellement ouverts au projet courant |
| **Connaissance** | importer des documents, pages, tickets, work items ou autres sources selon le provider disponible |
| **Politiques de gouvernance** | décider quels rôles peuvent observer, proposer ou exécuter des actions |
| **Actions & approbations** | préparer une demande d’action, la faire approuver puis l’exécuter si le mode du connecteur le permet |
| **Journal IA / activité** | garder la trace du flux et des exécutions |

## Trois niveaux à ne pas confondre

| Niveau | Ce que cela veut dire | Lecture correcte |
| --- | --- | --- |
| **Plateforme** | le connecteur existe techniquement | il est défini, authentifié et contrôlé globalement |
| **Projet** | le connecteur est ouvert à un projet précis | le projet peut le voir comme option potentielle |
| **Usage gouverné** | le connecteur peut être utilisé dans un flux réel | l’utilisateur a le bon rôle, la bonne politique et une option d’exécution saine |

## Connecteurs d’exécution visibles

Les connecteurs d’exécution servent à **envoyer une action** depuis ProPM Agent vers un outil externe.

L’écran **Intégrations du projet** montre ces connecteurs d’exécution activés comme disponibles à binder lorsqu’ils ne sont pas déjà rattachés au projet.

### Catalogue actuel des connecteurs d’exécution

| Connecteur dans l’interface | Utilité principale | Action projet typique |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | synchroniser les plannings et baselines d’entreprise | binder lorsque les mises à jour de planning doivent passer par un canal projet gouverné |
| **Azure DevOps delivery project** | créer ou mettre à jour des work items et suivre la livraison | binder pour les équipes qui utilisent Boards, sprints ou backlogs delivery |
| **Jira delivery workspace** | créer ou mettre à jour des tickets et suivis delivery | binder lorsque risques, blocages ou décisions doivent devenir des tickets Jira gouvernés |
| **Microsoft Project schedule sync** | synchroniser les plannings Microsoft Project | binder lorsque le planning maître est géré dans Microsoft Project |
| **Microsoft Teams collaboration** | envoyer des messages collaboratifs et notifications d’approbation gouvernés | binder pour les notifications d’équipe contrôlées |
| **Outlook executive notifications** | envoyer des e-mails ou relances gouvernées aux parties prenantes | binder pour les communications formelles à des destinataires nommés |
| **SharePoint publication library** | publier des artefacts relus vers une bibliothèque SharePoint | binder lorsque les livrables PM approuvés doivent être diffusés via SharePoint |
| **Smartsheet portfolio workspace** | mettre à jour les feuilles et données de portefeuille | binder lorsque le suivi portefeuille est géré dans Smartsheet |
| **Webhook event delivery** | appeler un endpoint d’entreprise ou interne spécifique | binder pour une automatisation aval personnalisée |
| **Wrike delivery workspace** | mettre à jour tâches, responsables et coordination delivery | binder lorsque Wrike porte le travail opérationnel |

## Fournisseurs d’ingestion visibles

Les fournisseurs d’ingestion servent à **faire entrer du contenu** dans ProPM Agent pour enrichir la **Connaissance**.

L’écran projet sépare les fournisseurs déjà bindés des fournisseurs **Available to bind**. Les compteurs varient selon le tenant, mais l’écran distingue les bindings sains des entrées de catalogue qui demandent encore un binding projet ou une configuration plateforme.

### Catalogue actuel des fournisseurs d’ingestion

| Fournisseur dans l’interface | Mode ou source affiché | Utilité principale | Note de readiness |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | rafraîchir des feuilles portefeuille dans la Connaissance | peut apparaître comme bindé et **Healthy** |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | importer des preuves, RAID et rafraîchissements de reporting | peut apparaître comme bindé et **Healthy** |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | importer des snapshots et baselines de planning | disponible à binder quand **Ready** |
| **Azure Blob document ingest** | Blob Storage · Scheduled | ingérer des dépôts documentaires gouvernés et archives | disponible à binder quand **Ready** |
| **Confluence knowledge import** | Confluence · Manual | importer des pages wiki et connaissances procédurales | peut afficher **Not configured** tant que la source n’est pas complétée |
| **Jira issue import** | Jira · Scheduled | importer issues, blocages et preuves de suivi | peut afficher **Not configured** tant que la source n’est pas complétée |
| **Microsoft Project schedule import** | MS Project Import · Manual | importer des baselines et mises à jour de planning | disponible à binder quand **Ready** |
| **SFTP document intake** | SFTP · Scheduled | importer des dépôts de documents tiers | peut afficher **Not configured** tant que l’hôte, le dossier et les identifiants ne sont pas complétés |
| **SharePoint knowledge import** | SharePoint · Manual | importer des bibliothèques de connaissance et artefacts de reporting | disponible à binder après configuration du site et de la bibliothèque |
| **Wrike task import** | Wrike · Scheduled | importer tâches, responsables et preuves de workflow | disponible à binder après configuration de l’espace |

## Connecteurs présents dans plusieurs rôles

Certains noms apparaissent dans plusieurs endroits du produit. C’est normal : le fournisseur d’import et le connecteur d’exécution restent deux bindings distincts.

| Famille | Rôle d’import | Rôle d’exécution | Lecture correcte |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | peut lire des documents et publier un artefact relu, mais chaque rôle a son propre setup et binding |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | peut importer le contexte Jira puis créer un ticket gouverné si le connecteur d’exécution est aussi bindé |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | peut faire entrer des preuves de planning dans la Connaissance et synchroniser des changements gouvernés |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | peut rafraîchir les preuves portefeuille et mettre à jour Smartsheet comme destination d’exécution |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | peut importer des preuves de tâches opérationnelles et mettre à jour Wrike via des actions gouvernées |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | peut importer des snapshots de planning et synchroniser des changements contrôlés |
| **Azure DevOps** | — | **Azure DevOps delivery project** | exposé comme connecteur d’exécution ; tout chemin d’import doit être validé séparément s’il est disponible |
| **ADF / Blob / Confluence / SFTP** | fournisseur d’ingestion uniquement | — | ils enrichissent la **Connaissance** et ne deviennent pas automatiquement des destinations d’action |
| **Teams / Outlook / Webhook** | — | connecteur d’exécution uniquement | ils envoient des messages ou événements gouvernés et n’importent pas automatiquement de Connaissance |

## Catalogue supporté vs options extensibles

Le catalogue ci-dessus correspond au catalogue opérationnel actuellement seedé, contrôlé et exposé dans **Intégrations du projet**. L’écran **Administration de la plateforme** peut aussi proposer des familles supplémentaires ou personnalisées comme GitHub, GitLab, ServiceNow, Slack, Notion, Google Drive, OneDrive, Box ou Dropbox.

Traitez ces entrées supplémentaires comme des extensions tant qu’un administrateur n’a pas confirmé la définition technique, les champs obligatoires, la stratégie d’authentification, la validation, le binding projet et la politique de gouvernance applicable.

## Configuration minimale par connecteur d’exécution

Les champs ci-dessous sont les champs minimaux à renseigner avant un usage `test` ou `live`. Les noms peuvent varier légèrement selon le formulaire, mais l’idée reste la même : une destination, une identité d’authentification et une cible projet explicite.

| Connecteur | Champs minimaux avant usage test/live | Authentification typique | Probe de connectivité si activée |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` ou `site_url`, `project_key` | API key, basic, PAT, bearer token ou OAuth | lit le projet Jira cible |
| **Azure DevOps delivery project** | `organization_url` ou `organization`, `project`, `work_item_type` | PAT, bearer token ou OAuth | vérifie le type de work item dans le projet |
| **Microsoft Teams collaboration** | `team_id`, `channel_id` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | lit le canal Teams cible |
| **Outlook executive notifications** | `mailbox`, `user_id` ou `user_principal_name` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | vérifie la boîte ou l’utilisateur Graph |
| **SharePoint publication library** | `site_id` ou `site_url`, `drive_id` ou `library` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | vérifie le site et la bibliothèque |
| **Webhook event delivery** | `webhook_url` ou `endpoint_url` en HTTPS | aucune auth, API key, bearer token, basic ou OAuth | lance un `HEAD`, puis un `GET` si nécessaire |
| **Microsoft Project schedule sync** | `project_id`, `portfolio` ou `workspace` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | utilise l’endpoint ou le chemin de probe configuré |
| **Smartsheet portfolio workspace** | `sheet_id` ou `workspace_id` | API key, bearer token, OAuth ou PAT | lit la feuille ou l’espace Smartsheet |
| **Wrike delivery workspace** | `folder_id`, `space_id` ou `task_id` | bearer token ou OAuth | lit la tâche ou le dossier Wrike |
| **Asta Powerproject schedule sync** | `base_url` ou `endpoint_url`, puis `project_id`, `portfolio` ou `schedule_id` | API key, bearer token, OAuth ou basic | utilise l’endpoint ou le chemin de probe configuré |

## Configuration minimale par fournisseur d’ingestion

Un fournisseur d’ingestion doit identifier la source, le mode d’import et l’identité utilisée pour lire cette source. Les imports planifiés demandent aussi une cadence ou une orchestration compatible.

| Fournisseur | Champs minimaux avant usage réel | Authentification typique | Probe de connectivité si activée |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` ou `site_url`, `drive_id` ou `library` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | vérifie la bibliothèque et les enfants racine |
| **Azure Data Factory evidence pipeline** | `subscription_id`, `resource_group_name`, `factory` ou `factory_name`, `pipeline` ou `pipeline_name` | managed identity, client credentials ou bearer token | lit la définition du pipeline |
| **Azure Blob document ingest** | `account_url`, `storage_account` ou `account_name`, puis `container` | managed identity, SAS, bearer token ou client credentials | liste quelques blobs du conteneur |
| **Confluence knowledge import** | `base_url`, `space`, `space_key` ou `space_id` | basic, bearer token ou OAuth | vérifie l’espace Confluence |
| **Jira issue import** | `base_url` ou `site_url`, puis `project`, `project_key` ou `jql` | API key, basic, PAT, bearer token ou OAuth | lance une recherche Jira limitée |
| **SFTP document intake** | `host` ou `base_url`, `username` ou `user`, `folder` ou `path`, port valide si fourni | basic, password ou clé privée SSH | vérifie l’accès TCP au serveur SFTP |
| **Microsoft Project schedule import** | `project_id`, `portfolio` ou `workspace` | Microsoft Graph avec bearer token, OAuth, client credentials ou managed identity | utilise l’endpoint ou le chemin de probe configuré |
| **Smartsheet sheet import** | `sheet_id` ou `workspace_id` | API key, bearer token, OAuth ou PAT | lit la feuille ou l’espace Smartsheet |
| **Wrike task import** | `folder_id` ou `space_id` | bearer token ou OAuth | lit les tâches du dossier ou de l’espace |
| **Asta Powerproject schedule import** | `base_url` ou `endpoint_url`, puis `project_id`, `portfolio` ou `schedule_id` | API key, bearer token, OAuth ou basic | utilise l’endpoint ou le chemin de probe configuré |

## Validation, probes et limites d’exécution

| Étape | Ce que cela confirme | Ce que cela ne garantit pas |
| --- | --- | --- |
| **Save** | la définition est enregistrée au niveau plateforme | la source externe n’a pas forcément été contactée |
| **Validate** | les champs obligatoires, le mode, l’authentification et les URL HTTPS sont cohérents | un appel réseau réel n’est lancé que si les probes sont activées |
| **Connectivity probe** | ProPM Agent peut joindre un endpoint non destructif du provider | la création d’un ticket, l’envoi d’un message ou l’import complet ne sont pas déclenchés |
| **Bind to project** | le projet peut consommer la définition plateforme | la policy, le rôle utilisateur, le health, la validation et le binding peuvent encore bloquer l’usage |
| **Validate binding** | le binding projet reste aligné avec la définition plateforme | cela ne remplace pas une action ou un import métier réel |

Les probes de connectivité sont volontairement opt-in. Elles peuvent être activées par l’administrateur avec `connectivity_probe_enabled`, `run_connectivity_probe`, `live_connectivity_check`, une métadonnée équivalente ou une variable d’environnement plateforme. Sans cette activation, la validation reste un contrôle de cohérence et de readiness.

Si un connecteur reste en mode `mock` ou `test`, ProPM Agent peut gérer la demande, la gouvernance, l’approbation et la trace sans nécessairement envoyer l’appel final au système externe. Une exécution vendor réelle demande un mode de connecteur compatible, une configuration complète, une policy autorisante et un environnement qui active ce chemin.

## Actions gouvernées et connecteur requis

| Action utilisateur | Type d’action interne | Connecteur requis | Champs métier minimaux |
| --- | --- | --- | --- |
| Publier un artefact vers SharePoint | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`, `destination_id` |
| Envoyer un message Teams | `send_teams_message` | `teams` | `body` |
| Envoyer un message Outlook | `send_outlook_message` | `outlook` | `body`, `recipients` |
| Créer un ticket Jira | `create_jira_ticket` | `jira` | `title` |
| Créer un work item Azure DevOps | `create_azure_devops_ticket` | `azure_devops` | `title` |

Certains libellés hérités sont normalisés automatiquement. Par exemple `send_message` devient `send_teams_message`, `send_email` devient `send_outlook_message`, `create_work_item` devient `create_azure_devops_ticket`, et `publish_sharepoint_artifact` devient `publish_artifact_to_sharepoint`.

## Statuts, blockers et ordre de diagnostic

| Statut ou blocker visible | Lecture pratique | Première action recommandée |
| --- | --- | --- |
| **Ready** ou **available** | la définition peut être bindée ou utilisée si le reste de la chaîne est ouvert | vérifier le binding projet et la policy |
| **Healthy** | la dernière validation connue est positive | confirmer que le projet est bien bindé |
| **Not configured** | il manque des champs, une source, une cible ou des identifiants | compléter la définition dans Administration de la plateforme |
| **Not validated** ou **not_tested** | la définition existe mais n’a pas encore passé la validation ou le test attendu | lancer Validate ou le probe approprié |
| **Blocked by health** | la santé plateforme est dégradée ou invalide | vérifier endpoint, auth, scopes et réseau |
| **Blocked by entitlement** | libellé hérité pour une intégration bloquée ; dans les plans Marketplace, ce n’est pas une différence de fonctionnalité | vérifier configuration, health, binding, policy, rôle et disponibilité de licence en cas de blocage d’accès |
| **Blocked by policy** | la gouvernance projet interdit cette action ou ce type d’usage | ajuster la politique ou le rôle |
| **Binding disabled** | le binding projet existe mais est désactivé | réactiver ou recréer le binding si autorisé |
| **Missing platform definition** | le projet référence une définition absente ou supprimée | recréer ou corriger la définition plateforme |

L’ordre le plus utile pour diagnostiquer est : définition plateforme, configuration obligatoire, validation ou probe, binding projet, policy, permission utilisateur, payload de l’action ou de l’import, puis disponibilité de licence si l’utilisateur ne peut pas accéder à l’app.

## Import, sortie externe et audit

| Sujet | Ce que ProPM Agent trace | Ce qu’il faut vérifier côté outil externe |
| --- | --- | --- |
| Import Knowledge | run d’ingestion, provider, binding, source label, fraîcheur, compteurs et Trace ID | volume réellement disponible, droits source, filtres, fichiers ignorés et déduplication |
| Publication SharePoint | demande d’action, approbation, connecteur, destination et Trace ID | URL finale, bibliothèque, droits d’écriture et version publiée |
| Jira ou Azure DevOps | action, justification, payload métier et Trace ID | clé du ticket ou work item créé, projet cible et type d’item |
| Teams ou Outlook | demande, destinataires ou canal logique, approbation et Trace ID | message réellement remis, canal, mailbox et éventuels refus Graph |
| Webhook | endpoint logique, statut de tentative, réponse ou erreur et Trace ID | code HTTP, réponse tronquée, validation de signature et retraitement aval |

Ne placez jamais de secret dans le payload métier d’une action ou dans une note utilisateur. Les secrets, clés et références sensibles doivent rester dans la configuration plateforme prévue pour cet usage.

## Sécurité et authentification

| Famille | Authentifications généralement acceptées | Point d’attention |
| --- | --- | --- |
| Microsoft Graph, Teams, Outlook, SharePoint et Microsoft Project | bearer token, OAuth, client credentials ou managed identity | limiter les scopes aux sites, boîtes, canaux ou projets nécessaires |
| Jira et Confluence | API key, basic, PAT, bearer token ou OAuth selon le produit | utiliser des comptes techniques à privilèges limités |
| Azure DevOps | PAT, bearer token ou OAuth | limiter les droits au projet et aux work item types attendus |
| Azure Data Factory et Blob Storage | managed identity, client credentials, SAS ou bearer token selon le service | préférer les identités managées et limiter les conteneurs ou pipelines accessibles |
| SFTP | basic, password ou clé privée SSH | vérifier rotation de clé, port et dossier racine autorisé |
| Webhook | aucune auth, API key, bearer token, basic ou OAuth | exiger HTTPS, signature ou secret côté endpoint si le risque le justifie |

## Exemple 1 — SharePoint de bout en bout

SharePoint est l’un des meilleurs exemples pour comprendre la logique complète.

### Ce que SharePoint peut faire

- importer des documents vers la **Connaissance** ;
- servir de **destination d’artefact** ;
- recevoir une **publication gouvernée** via **SharePoint publish**.

### Parcours pas à pas

1. l’administrateur prépare SharePoint dans **Administration de la plateforme** ;
2. le projet récupère le binding SharePoint dans **Intégrations du projet** ;
3. l’équipe importe des documents existants dans la **Connaissance** ;
4. un document PM est rédigé ou relu ;
5. une politique de gouvernance décide qui peut proposer ou exécuter une publication ;
6. la publication passe par **Actions & approbations** si une validation est requise ;
7. la trace finale reste visible dans l’activité du projet et le **Journal IA**.

### Avantages de SharePoint dans ProPM Agent

- réutilise un référentiel documentaire déjà connu des équipes ;
- permet de relier import, revue documentaire et publication finale ;
- convient bien à des flux de validation formels.

## Exemple 2 — Jira de bout en bout

### Ce que Jira peut faire

- importer des issues et commentaires comme contexte ;
- recevoir un ticket gouverné depuis une décision ou un signal ;
- matérialiser un blocage dans un système de suivi externe.

### Parcours pas à pas

1. Jira est préparé dans **Administration de la plateforme** ;
2. il est ouvert au projet dans **Intégrations du projet** ;
3. l’équipe consulte un signal ou une décision ;
4. elle crée une action **Créer un ticket Jira** ;
5. la gouvernance décide si l’action est directe ou soumise à approbation ;
6. le ticket est créé si l’exécution vendor live est activée ; dans tous les cas, la demande et sa décision restent tracées dans le produit.

### Avantages de Jira dans ProPM Agent

- transforme un constat projet en ticket formel ;
- garde une trace claire entre signal, justification et ticket créé ;
- évite les actions manuelles non tracées.

## Exemple 3 — Teams ou Outlook pour la diffusion

### Utilité

- **Teams** sert à diffuser une notification dans l’outil collaboratif ;
- **Outlook** sert à envoyer une communication plus formelle par e-mail.

### Intégration avec ProPM Agent

1. le connecteur est préparé au niveau plateforme ;
2. le projet le voit comme option d’exécution ;
3. une politique définit quels rôles peuvent envoyer un message ;
4. l’équipe prépare le message dans **Actions & approbations** ;
5. selon le risque, l’action est approuvée puis exécutée si le mode du connecteur le permet ;
6. la trace du message reste historisée même si l’envoi externe est bloqué ou différé.

### Avantage principal

La diffusion ne part pas comme un message libre : elle reste **gouvernée, relue et traçable**.

## Exemple 4 — Webhook event delivery

### Quand l’utiliser

Utilisez **Webhook event delivery** lorsque ProPM Agent doit appeler un endpoint interne ou tiers précis après une décision gouvernée.

### Intégration avec ProPM Agent

- dans le catalogue actuel, Webhook est un **connecteur d’exécution** ;
- bindez-le au projet seulement après validation de l’endpoint plateforme et du health ;
- si une ingestion webhook entrante est ajoutée plus tard, traitez-la comme un fournisseur d’ingestion séparé, avec sa propre validation et son propre binding projet.

### Avantage principal

Webhook event delivery apporte de la souplesse pour les automatisations personnalisées sans transformer le flux en sortie non contrôlée.

## Comment reconnaître qu’un connecteur est réellement prêt

Pour lire correctement l’état d’un connecteur, distinguez trois situations simples :

| Situation | Ce que cela veut dire |
| --- | --- |
| le connecteur est visible dans **Administration de la plateforme** | il existe techniquement |
| le connecteur est visible dans **Intégrations du projet** | le projet peut potentiellement l’utiliser |
| le connecteur apparaît dans **Actions & approbations** comme option saine et autorisée | l’action peut réellement être proposée ou exécutée selon la politique |

## Pourquoi un connecteur visible peut rester bloqué

Un connecteur peut être visible mais non utilisable si :

- son état **health** appelle une vérification ;
- le binding projet n’est pas ouvert, sain ou configuré ;
- la **policy** du projet bloque l’usage ;
- l’utilisateur n’a pas la bonne **permission** ;
- le binding projet n’a pas encore été ouvert ;
- la destination d’artefact attendue n’est pas configurée.

## Lecture simple

| Si vous observez… | Vérifiez d’abord… |
| --- | --- |
| le connecteur existe au niveau plateforme mais n’apparaît pas dans le projet | **Intégrations du projet** |
| il apparaît dans le projet mais aucune action ne part | **Politiques de gouvernance** et permissions du rôle |
| l’action est visible mais aucune option saine n’apparaît | santé du connecteur, binding projet et option d’exécution compatible |
| l’import est proposé mais ne retourne rien | fournisseur d’ingestion, source réellement accessible et fraîcheur des données |
| la publication SharePoint n’aboutit pas encore | destination d’artefact, politique, approbation et connecteur **SharePoint publish** |

## Workflow recommandé pour votre équipe

1. identifier les outils réellement utiles au projet ;
2. préparer les connecteurs dans **Administration de la plateforme** ;
3. n’ouvrir au projet que les connecteurs prêts ;
4. régler les **Politiques de gouvernance** par rôle ;
5. tester un premier import ou une première action en distinguant readiness, probe et exécution vendor réelle ;
6. vérifier la trace finale dans le **Journal IA**.

## À retenir

- ProPM Agent distingue clairement **import**, **publication** et **action externe** ;
- un même nom, comme **SharePoint** ou **Jira**, peut apparaître dans plusieurs rôles ;
- la bonne lecture d’un connecteur repose toujours sur trois questions : **est-il défini ? est-il ouvert au projet ? est-il autorisé par la gouvernance ?**

## Suite

- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)