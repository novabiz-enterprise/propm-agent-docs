---
title: Sièges et mises à jour applicatives
slug: /seats-management-app-updates
description: Gérer les sièges d’abonnement et mettre à jour une installation existante depuis l’administration sans redéployer les ressources Marketplace.
---

[Accueil](./index.md) · [Portfolio](./portfolio.md) · [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)

## Objectif

Cette page couvre deux sujets d’administration distincts du travail projet :

- la **gestion des sièges** pour licences, utilisateurs assignés et état d’abonnement ;
- **Déploiement & mises à jour** pour le rollout d’images applicatives sur les Azure Container Apps existantes.

Elle répond à la question : **qui peut accéder à l’application, et comment mettre à jour une installation existante sans repasser par Marketplace ?**

## Abonnement et sièges

Le produit gère un modèle de licence par sièges. Tous les plans Marketplace donnent accès aux mêmes fonctionnalités applicatives ; seule la quantité de licences/sièges diffère.

### Ce qu’un administrateur peut voir

- le **plan** actif ;
- le nombre de **sièges achetés** ;
- le nombre de **sièges utilisés** ;
- le nombre de **sièges disponibles** ;
- les utilisateurs déjà licenciés ;
- l’état commercial, par exemple `billing state`, `payment state` ou `subscription status`.

### Pourquoi c’est important

Un utilisateur bloqué n’a pas forcément une question de connexion. Le blocage peut venir :

- d’un manque de siège disponible ;
- d’un utilisateur retiré qui doit être réassigné par un administrateur ;
- d’un rôle insuffisant, d’un projet non accessible, d’un binding, d’une policy, d’une configuration ou d’un état health à corriger.

Les plans Marketplace ne bloquent pas les connecteurs, les fournisseurs IA ou les fonctionnalités produit. Si un libellé technique `entitlement` apparaît encore dans l’interface ou les logs, traitez-le comme un indicateur hérité/non lié à une différence fonctionnelle de plan.

## Libérer ou réattribuer un siège

Cela se fait depuis **Administration de la plateforme** par un profil autorisé.

Le retrait libère le siège pour une réattribution ultérieure, sous réserve des règles d’abonnement/licence et d’une éventuelle fenêtre de retrait. L’opération modifie l’allocation d’accès ; elle ne change pas les fonctionnalités du plan.

## Mises à jour applicatives sans redéploiement Marketplace

La section **Déploiement & mises à jour** met à jour une installation existante **sur place**.

Elle ne :

- relance pas l’offre Azure Marketplace ;
- crée pas de nouveau groupe de ressources ;
- recrée pas les ressources Azure déjà déployées.

Concrètement, l’administration lit l’inventaire des images des **Azure Container Apps** existantes via Azure Resource Manager, compare les images courantes aux images cibles approuvées dans ACR, puis soumet de nouvelles révisions sur les Container Apps existantes.

## Actions disponibles

| Action | Objectif |
| --- | --- |
| **Check for updates** | vérifier les images courantes, les images cibles, les refresh de tags mutables et la version éventuelle du manifest |
| **Apply update** | appliquer les nouvelles images aux services sélectionnés en créant de nouvelles révisions Container Apps |
| **Rollback last update** | revenir aux images précédentes si la dernière opération a enregistré les références nécessaires |
| **Container App image inventory** | lire le groupe de ressources géré, les services suivis, les images courantes, les images cibles et l’état des révisions |

## Prérequis importants

- l’utilisateur doit avoir les droits d’administration du déploiement ou de la plateforme ;
- l’identité runtime doit pouvoir lire et patcher les Container Apps dans Azure Resource Manager ;
- l’environnement doit connaître l’abonnement et le groupe de ressources via `AZURE_SUBSCRIPTION_ID` et `AZURE_RESOURCE_GROUP_ID`, `AZURE_RESOURCE_GROUP` ou `AZURE_RESOURCE_GROUP_NAME` ;
- les images cibles doivent venir d’un manifest de mise à jour, d’une configuration d’images cibles ou d’un tag applicatif autorisé.

## Limites de périmètre

Cette opération couvre le **rollout d’images applicatives**.

Le bouton d’administration ne couvre pas :

- les migrations de schéma base de données ;
- la création de nouvelles ressources Azure ;
- les changements d’architecture ;
- un nouveau déploiement Marketplace.

Si la mise à jour inclut le service orchestrateur lui-même, l’interface peut indiquer que la requête est soumise pendant que le service se remplace.

## Repères techniques de plateforme

L’infrastructure Azure du déploiement s’appuie notamment sur :

- Azure Container Apps ;
- Storage ;
- Azure AI Search ;
- Key Vault ;
- Log Analytics ;
- Application Insights ;
- Document Intelligence.

## À retenir

- les sièges contrôlent l’allocation d’accès, pas des niveaux fonctionnels ;
- tous les plans Marketplace exposent les mêmes fonctionnalités produit ;
- les mises à jour applicatives s’appliquent sur place aux Container Apps existantes ;
- Marketplace installe l’environnement initial, tandis que **Déploiement & mises à jour** le maintient ;
- utilisez le rollback seulement lorsque les références d’images précédentes sont disponibles.

## Suite

- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
