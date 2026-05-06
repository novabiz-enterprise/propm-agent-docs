---
title: Fournisseurs IA et intégrations plateforme
slug: /ai-providers-platform-integrations
description: Préparer les intégrations plateforme, configurer les fournisseurs IA, valider la readiness et distinguer configuration plateforme et usage projet.
---

[Accueil](./index.md) · [Portfolio](./portfolio.md) · [Plan du tenant, utilisateurs licenciés et mises à jour applicatives](./seats-management-app-updates.md)

![Administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

## Objectif

Cette page couvre la préparation technique de ProPM Agent au niveau plateforme :

- les **intégrations de la plateforme** pour connecteurs et fournisseurs d’ingestion ;
- les **paramètres du fournisseur IA** pour le runtime modèle ;
- les règles de readiness, validation, test, health et binding projet.

Elle répond à la question : **la plateforme est-elle correctement préparée pour l’organisation avant l’usage par les projets ?**

## Sections d’administration visibles

| Section | Rôle |
| --- | --- |
| Vue d’ensemble | résumé de l’état général de préparation |
| Intégrations de la plateforme | définitions techniques des connecteurs et fournisseurs d’ingestion |
| Paramètres du fournisseur IA | configuration, validation, test et activation du fournisseur IA |
| Tenant plan and licensed users | plan Marketplace, licences commandées, licences supplémentaires et utilisateurs licenciés |
| Audit / activité | historique des actions administratives |

Pour le plan Marketplace, les licences et le rollout d’images applicatives, ouvrez [Plan du tenant, utilisateurs licenciés et mises à jour applicatives](./seats-management-app-updates.md).

## Intégrations plateforme vs intégrations projet

La règle centrale du produit est :

- le **niveau plateforme** décide ce qui existe techniquement ;
- le **niveau projet** décide ce qui est réellement utilisé dans un projet donné ;
- la **gouvernance** décide qui peut agir avec l’outil.

| Responsabilité | Conservé dans Administration de la plateforme | Exposé dans Intégrations du projet |
| --- | --- | --- |
| Configuration technique | URL tenant, stratégie d’authentification, clés API, références de secrets, scopes et définitions de source ou de cible | readiness en lecture seule, health et raisons de blocage |
| Binding opérationnel | activer ou désactiver le connecteur/fournisseur entreprise et valider la santé technique | **Bind to project**, **Validate binding** et **Disable** pour la disponibilité projet |
| Guidage utilisateur | audit admin, historique de validation et configuration tenant-scoped | liens contextuels comme **Open Platform Administration** et **Open Knowledge imports** |

Pour le détail par famille de connecteurs, voir [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint).

## Validation et sécurité

Les validations plateforme appliquent des exigences propres à chaque provider : champs obligatoires, stratégie d’authentification compatible, URL HTTPS quand nécessaire, port SFTP valide, source ou cible explicite et probe de connectivité uniquement si activé.

Les secrets, clés et références sensibles doivent rester dans la configuration plateforme prévue pour cet usage. Ne les placez pas dans une note, un payload d’action ou une description visible par les utilisateurs projet.

## Préparation et causes de blocage

Une intégration peut être bloquée par **policy**, **permission**, **health**, définition plateforme manquante, configuration provider-specific incomplète ou binding projet non ouvert.

Circuit recommandé : relire le blocage côté projet, ouvrir **Administration de la plateforme**, vérifier la définition technique, puis revenir dans le projet pour confirmer le binding et l’usage autorisé.

## Familles de fournisseurs IA

Les familles visibles dans le produit comprennent notamment **OpenRouter**, **OpenAI-compatible**, **OpenAI** et **Azure OpenAI**.

| Fournisseur | Quand le choisir | Ce qu’il faut généralement compléter |
| --- | --- | --- |
| **OpenRouter** | comparer plusieurs familles de modèles via un seul raccordement | Base URL, clé, modèle par défaut |
| **OpenAI-compatible** | utiliser une gateway ou un endpoint compatible | endpoint exact, auth, clé ou secret, modèle attendu |
| **OpenAI** | utiliser directement OpenAI | URL, clé ou secret, modèle par défaut |
| **Azure OpenAI** | choisir des déploiements Azure OpenAI | endpoint, version API, auth mode, nom de déploiement LLM |

## Readiness d’un fournisseur IA

| Statut | Ce que cela veut dire |
| --- | --- |
| **Configuration** | les champs sont enregistrés |
| **Validation** | la configuration a passé les contrôles attendus |
| **Test** | la connectivité réelle a été vérifiée |
| **Activate** | le fournisseur est activé dans la configuration admin |
| **Operational** | le fournisseur peut être considéré comme exploitable |

Flux simple : ouvrez **Paramètres du fournisseur IA**, sélectionnez le fournisseur, complétez les champs, cliquez sur **Save**, **Validate**, **Test**, **Activate**, puis contrôlez le résultat dans **Journal IA**.

## Cas Azure OpenAI

Avec **Azure OpenAI**, il faut souvent compléter l’**Endpoint**, la **version API**, le **mode d’authentification**, le **LLM deployment name** et éventuellement l’**Embeddings deployment name**.

Pour le choix du fournisseur pendant le déploiement Marketplace, voir [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md).

## Fournisseur effectif vs fournisseur sélectionné au déploiement

- **Deployment-selected AI Provider** : fournisseur sélectionné dans la configuration initiale de l’environnement ;
- **Effective AI Provider** : fournisseur réellement utilisé au runtime pour un run donné.

La valeur effective est la référence la plus fiable lors d’une enquête sur un run concret. Elle se lit dans le **Journal IA** et peut différer de la valeur sélectionnée au déploiement.

## À retenir

- le niveau plateforme prépare les connecteurs et fournisseurs ;
- le niveau projet ouvre leur usage réel ;
- la gouvernance décide qui peut agir ;
- un fournisseur IA n’est prêt que lorsqu’il est enregistré, validé, testé et activé ;
- le **Journal IA** reste la référence pour confirmer le fournisseur réellement utilisé.

## Suite

- [Portfolio](./portfolio.md)
- [Plan du tenant, utilisateurs licenciés et mises à jour applicatives](./seats-management-app-updates.md)
- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint.md)
- [Rapports, Journal IA et traçabilité](./rapports-journal-ia-et-tracabilite.md)
