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
- le projet n’a pas le bon **entitlement** ;
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