---
title: Connecteurs et intégrations
slug: /connecteurs-jira-et-sharepoint
description: Comprendre tous les connecteurs visibles dans ProPM Agent, leurs avantages, leurs usages et leur mode d’intégration dans la plateforme.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md) · [Portefeuille et administration technique](./portefeuille-et-administration-technique.md)

![Flux Jira et SharePoint entre plateforme, projet et actions](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Objectif

Cette page explique **tous les connecteurs et fournisseurs d’ingestion visibles dans ProPM Agent**, leurs avantages, leur utilité métier et la manière dont ils s’intègrent dans le produit.

L’objectif est de répondre à trois questions simples :

1. **À quoi sert ce connecteur ?**
2. **Où le voit-on dans ProPM Agent ?**
3. **Comment passe-t-on d’un connecteur déclaré à un connecteur réellement utilisable ?**

## Pour un débutant : qu’est-ce qu’un connecteur dans ProPM Agent ?

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
2. il valide la configuration et la connectivité ;
3. le connecteur est rendu disponible dans **Intégrations du projet** ;
4. les **Politiques de gouvernance** définissent qui peut l’utiliser et à quel niveau ;
5. l’équipe l’utilise ensuite dans **Connaissance**, **Documents PM** ou **Actions & approbations** ;
6. la trace finale reste visible dans l’**activité du projet** et le **Journal IA**.

## Où l’utilisateur voit les connecteurs dans le produit

| Surface | Ce que l’on y fait |
| --- | --- |
| **Administration de la plateforme** | créer la définition technique, renseigner l’authentification, valider et tester |
| **Intégrations du projet** | vérifier quels connecteurs sont réellement ouverts au projet courant |
| **Connaissance** | importer des documents, pages, tickets, work items ou autres sources |
| **Politiques de gouvernance** | décider quels rôles peuvent observer, proposer ou exécuter des actions |
| **Actions & approbations** | créer une action réelle, la faire approuver puis l’exécuter |
| **Journal IA / activité** | garder la trace du flux et des exécutions |

## Trois niveaux à ne pas confondre

| Niveau | Ce que cela veut dire | Lecture correcte |
| --- | --- | --- |
| **Plateforme** | le connecteur existe techniquement | il est défini, authentifié et contrôlé globalement |
| **Projet** | le connecteur est ouvert à un projet précis | le projet peut le voir comme option potentielle |
| **Usage gouverné** | le connecteur peut être utilisé dans un flux réel | l’utilisateur a le bon rôle, la bonne politique et une option d’exécution saine |

## Connecteurs d’exécution visibles

Les connecteurs d’exécution servent à **envoyer une action** depuis ProPM Agent vers un outil externe.

### Tableau complet des connecteurs d’exécution

| Connecteur | Utilité principale | Avantage principal | Intégration typique dans ProPM Agent |
| --- | --- | --- | --- |
| **Jira** | créer ou mettre à jour des tickets, commentaires et suivis delivery | très utile pour formaliser un blocage ou une action de suivi | préparé dans **Administration de la plateforme**, exposé dans **Intégrations du projet**, utilisé dans **Actions & approbations** |
| **Azure DevOps** | créer ou mettre à jour des work items et suivre la livraison | bon choix pour les équipes déjà organisées autour de Boards et sprints | même logique que Jira, avec intégration côté projet et file d’actions |
| **GitHub** | créer des issues ou alimenter des flux de dépôt | pratique pour relier un sujet projet à un backlog technique | visible comme connecteur d’exécution, gouverné par projet avant usage |
| **GitLab** | gérer des issues, merge requests et handoffs DevSecOps | utile pour les organisations qui opèrent déjà dans GitLab | raccordé à la plateforme puis utilisé pour des actions gouvernées |
| **ServiceNow** | créer des tickets de service, de support ou d’approbation | très utile quand la sortie du projet doit entrer dans un workflow ITSM | relié au projet comme sortie contrôlée vers les processus de service |
| **Monday.com** | synchroniser des plans et tableaux d’équipe | utile pour des équipes qui pilotent le delivery dans Monday.com | connecteur d’exécution gouverné disponible une fois la définition technique prête |
| **Asana** | créer ou mettre à jour des tâches et responsables | pratique pour le suivi d’actions légères et distribuées | exposé au projet comme outil de suivi d’action externe |
| **ClickUp** | relier listes, tâches et statuts de travail | utile pour centraliser les tâches d’équipe dans ClickUp | intégré comme sortie d’action gouvernée |
| **Wrike** | piloter des tâches, validations et plans de travail | pertinent pour des flux d’entreprise avec coordination et approbation | utilisé comme connecteur d’exécution une fois ouvert au projet |
| **Microsoft Teams** | envoyer une notification ou une relance dans Teams | pratique pour diffuser rapidement une décision ou une alerte | apparaît dans **Actions & approbations** pour des messages gouvernés |
| **Slack** | envoyer une mise à jour ou une demande d’approbation | utile pour les organisations qui collaborent principalement dans Slack | même logique que Teams avec contrôle par politique et permissions |
| **Outlook** | envoyer un e-mail ou une relance gouvernée | utile pour les communications formelles vers des destinataires précis | utilisé dans **Actions & approbations** avec contrôle des destinataires |
| **SharePoint publish** | publier un artefact ou un document relu vers SharePoint | très utile pour diffuser un livrable validé vers une bibliothèque cible | lié à une destination d’artefact puis piloté par **Actions & approbations** |
| **Notion** | mettre à jour des espaces de notes ou de travail | utile quand l’équipe tient ses notes opérationnelles dans Notion | raccordé comme sortie gouvernée pour alimenter un espace partagé |
| **Trello** | créer ou suivre des cartes | pratique pour des équipes qui utilisent un backlog simple et léger | intégré comme sortie d’action vers des tableaux Trello |
| **Webhook** | appeler un outil spécifique de l’entreprise | très souple pour des besoins sur mesure | utilisé comme sortie gouvernée vers un système tiers ou interne |

## Fournisseurs d’ingestion visibles

Les fournisseurs d’ingestion servent à **faire entrer du contenu** dans ProPM Agent pour enrichir la **Connaissance**.

### Tableau complet des fournisseurs d’ingestion

| Fournisseur | Utilité principale | Avantage principal | Intégration typique dans ProPM Agent |
| --- | --- | --- | --- |
| **SharePoint** | importer documents, listes et preuves Microsoft 365 | très utile pour récupérer des documents de référence déjà existants | préparé au niveau plateforme puis utilisé dans **Connaissance** et **Intégrations du projet** |
| **Confluence** | importer des pages wiki, notes et bases de connaissance | pratique pour récupérer la documentation de travail | alimente la **Connaissance** avec des contenus textuels et structurés |
| **Jira** | importer issues, commentaires et historique delivery | rapproche le contexte opérationnel du projet et du backlog | utilisé comme source de contexte projet dans **Connaissance** |
| **Azure DevOps** | importer work items, éléments sprint et artefacts delivery | utile pour relier le pilotage projet et le delivery outillé | enrichit la connaissance avec des informations Boards / sprint |
| **Google Drive** | indexer fichiers et dossiers partagés | utile pour les organisations Google Workspace | permet d’intégrer des fichiers de travail dans la connaissance |
| **OneDrive** | importer des fichiers personnels ou d’équipe | pratique pour récupérer des documents Microsoft 365 hors SharePoint | alimente la connaissance à partir d’espaces OneDrive |
| **Box** | connecter des référentiels documentaires d’entreprise | utile dans des environnements qui standardisent leur gestion documentaire sur Box | sert de source d’import vers la connaissance |
| **Dropbox** | importer des dossiers et contenus partagés | pratique si l’organisation stocke encore ses contenus dans Dropbox | fournit des sources documentaires à la connaissance |
| **Notion** | indexer espaces, pages et notes opérationnelles | très utile quand le savoir projet est réparti dans des pages Notion | alimente la connaissance avec des pages et notes structurées |
| **Amazon S3** | importer des fichiers ou artefacts depuis des buckets | utile pour récupérer des livrables générés ou archivés dans S3 | source d’ingestion pour documents et artefacts |
| **Upload manuel** | déposer directement des fichiers dans ProPM Agent | idéal pour démarrer rapidement sans dépendre d’un connecteur externe | l’équipe charge elle-même les fichiers utiles dans la connaissance |
| **Webhook** | recevoir du contenu depuis un flux d’entreprise sur mesure | très flexible quand l’outil source n’a pas de connecteur standard | sert d’entrée personnalisée vers la connaissance |

## Connecteurs présents dans plusieurs rôles

Certains noms apparaissent dans plusieurs endroits du produit. C’est normal.

| Famille | Peut servir à importer ? | Peut servir à exécuter une action ? | Lecture correcte |
| --- | --- | --- | --- |
| **SharePoint** | oui | oui, via **SharePoint publish** | on peut à la fois lire des documents et publier un artefact relu |
| **Jira** | oui | oui | on peut importer du contexte Jira puis créer un ticket gouverné |
| **Azure DevOps** | oui | oui | on peut importer des work items puis créer ou mettre à jour un work item |
| **Notion** | oui | oui selon la configuration | on peut lire des pages et aussi alimenter un espace partagé |
| **Webhook** | oui | oui | il peut servir d’entrée ou de sortie selon le flux configuré |

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
6. le ticket est exécuté puis tracé dans le produit.

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
5. selon le risque, l’action est approuvée puis exécutée ;
6. la trace du message reste historisée.

### Avantage principal

La diffusion ne part pas comme un message libre : elle reste **gouvernée, relue et traçable**.

## Exemple 4 — Webhook pour un outil spécifique d’entreprise

### Quand l’utiliser

Utilisez **Webhook** lorsque l’entreprise veut envoyer ou recevoir des données depuis un outil qui n’a pas de connecteur dédié.

### Intégration avec ProPM Agent

- comme **ingestion**, un webhook peut pousser du contenu vers la connaissance ;
- comme **exécution**, un webhook peut envoyer une action vers un outil tiers ;
- dans les deux cas, il reste préférable de le traiter comme un flux **gouverné**, pas comme une sortie libre.

### Avantage principal

Le webhook apporte de la souplesse sans imposer au produit de connaître nativement tous les outils d’entreprise.

## Comment reconnaître qu’un connecteur est réellement prêt

Pour un utilisateur débutant, il faut distinguer trois états simples :

| Situation | Ce que cela veut dire |
| --- | --- |
| le connecteur est visible dans **Administration de la plateforme** | il existe techniquement |
| le connecteur est visible dans **Intégrations du projet** | le projet peut potentiellement l’utiliser |
| le connecteur apparaît dans **Actions & approbations** comme option saine et autorisée | l’action peut réellement être proposée ou exécutée selon la politique |

## Pourquoi un connecteur visible peut rester bloqué

Un connecteur peut être visible mais non utilisable si :

- son état **health** appelle une vérification ;
- le projet n’a pas le bon **entitlement** ;
- la **policy** du projet bloque l’usage ;
- l’utilisateur n’a pas la bonne **permission** ;
- le binding projet n’a pas encore été ouvert ;
- la destination d’artefact attendue n’est pas configurée.

## Lecture simple pour un utilisateur débutant

| Si vous observez… | Vérifiez d’abord… |
| --- | --- |
| le connecteur existe au niveau plateforme mais n’apparaît pas dans le projet | **Intégrations du projet** |
| il apparaît dans le projet mais aucune action ne part | **Politiques de gouvernance** et permissions du rôle |
| l’action est visible mais aucune option saine n’apparaît | santé du connecteur, binding projet et option d’exécution compatible |
| l’import est proposé mais ne retourne rien | fournisseur d’ingestion, source réellement accessible et fraîcheur des données |
| la publication SharePoint n’aboutit pas encore | destination d’artefact, politique, approbation et connecteur **SharePoint publish** |

## Workflow recommandé pour un client

1. identifier les outils réellement utiles au projet ;
2. préparer les connecteurs dans **Administration de la plateforme** ;
3. n’ouvrir au projet que les connecteurs prêts ;
4. régler les **Politiques de gouvernance** par rôle ;
5. tester un premier import ou une première action ;
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