---
title: Plan du tenant, utilisateurs licenciés et mises à jour applicatives
slug: /seats-management-app-updates
description: Gérer le plan Marketplace du tenant, les licences commandées, les licences supplémentaires, les utilisateurs licenciés et les mises à jour applicatives depuis l’administration de la plateforme.
---

[Accueil](./index.md) · [Portfolio](./portfolio.md) · [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)

![Vue d’ensemble de l’administration de la plateforme avec Tenant plan and licensed users](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

## Objectif

Cette page explique la procédure utilisateur pour **Platform Administration > Overview > Tenant plan and licensed users**.

Elle sert à comprendre :

- quel plan Marketplace est actuellement détecté pour le tenant ;
- combien de licences sont commandées, incluses, supplémentaires, utilisées et restantes ;
- comment acheter ou supprimer des licences supplémentaires depuis ProPM ;
- comment préparer une mise à niveau de plan via un redéploiement Azure Marketplace ;
- en quoi les mises à jour d’images applicatives sont différentes d’une mise à niveau Marketplace.

## Où trouver la page

1. Ouvrez **Platform Administration**.
2. Restez dans **Overview**.
3. Ouvrez **Tenant plan and licensed users**.

Cette zone d’administration remplace les anciens écrans utilisateur de sélection d’abonnement Marketplace. Les utilisateurs ne doivent pas sélectionner d’anciens identifiants de plans ou des plans internes pour préparer une nouvelle mise à niveau.

## Plans Marketplace officiels

La liste **Target plan** dans l’administration ProPM doit présenter uniquement les plans Marketplace officiels suivants :

| Identifiant du plan | Nom affiché | Licences incluses |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Les anciens plans ou plans internes comme `propm0`, `pro`, `enterprise`, `pm-*` ou les plans dynamiques ne sont pas des choix utilisateur pour une nouvelle mise à niveau dans l’administration.

`propm0` peut encore apparaître pour d’anciens déploiements existants. Il s’agit d’une compatibilité historique, pas d’un plan à sélectionner pour une nouvelle mise à niveau.

## Lire les champs de plan et de licences

| Champ | Signification |
| --- | --- |
| **Current plan** | Plan Marketplace actuellement détecté pour le tenant. |
| **Ordered seats** | Nombre total de licences commandées pour le tenant. |
| **Included seats** | Licences incluses dans le plan Marketplace de base. |
| **Supplemental licenses** | Licences supplémentaires ajoutées via la facturation Marketplace. |
| **Used seats** | Licences actuellement consommées par des utilisateurs connectés ou licenciés. |
| **Remaining seats** | Licences encore disponibles. |

Les plans Marketplace pilotent la capacité de licences. Ils ne débloquent pas et ne bloquent pas les connecteurs, les fournisseurs IA ou les fonctionnalités produit.

## Ajouter des licences supplémentaires

Utilisez **Add licenses and bill in Azure** lorsque le tenant a besoin de plus de capacité que les licences incluses dans le plan de base.

1. Dans **Tenant plan and licensed users**, saisissez la quantité de licences supplémentaires à ajouter.
2. Sélectionnez **Add licenses and bill in Azure**.
3. ProPM envoie la consommation à Azure Marketplace Metering.
4. Azure Marketplace facture l’usage avec la dimension de custom meter `seats`.
5. ProPM ajoute les licences supplémentaires à la capacité du tenant uniquement après acceptation par Azure Marketplace.
6. Vérifiez **Ordered seats**, **Supplemental licenses** et **Remaining seats** après acceptation.

Une seule commande de licences supplémentaires peut être soumise à Azure Marketplace par heure.

Les licences supplémentaires restent actives dans ProPM jusqu’à suppression manuelle.

## Supprimer des licences supplémentaires

Utilisez **Remove licenses** pour retirer de la capacité de licences supplémentaires dans ProPM.

La suppression de licences supplémentaires diminue la capacité disponible dans ProPM, mais ne constitue pas une annulation ou un remboursement automatique côté Azure Marketplace.

## Mettre à niveau le plan via un redéploiement depuis Azure Marketplace

La mise à niveau du plan Marketplace n’est pas appliquée directement sur l’instance Managed Application existante.

Pour Azure Managed Application, la mise à niveau est préparée dans ProPM puis finalisée via un redéploiement Azure Marketplace guidé.

1. Ouvrez **Platform Administration > Overview > Tenant plan and licensed users**.
2. Dans **Target plan**, choisissez un plan Marketplace officiel supérieur.
3. Sélectionnez **Prepare upgrade by redeploying in Azure Marketplace**.
4. ProPM prépare la mise à niveau et enregistre une demande de mise à niveau en attente.
5. Sélectionnez **Open Azure Marketplace redeployment** lorsque le lien apparaît.
6. Dans Azure Marketplace, créez une nouvelle ProPM Managed Application avec un nom différent.
7. Sélectionnez le nouveau plan Marketplace dans Azure.
8. Laissez Azure Marketplace finaliser la transaction commerciale et créer le nouveau déploiement.
9. Après l’action Marketplace, utilisez **Refresh Marketplace plan** dans ProPM pour synchroniser les informations de plan et de licences détectées.

L’upgrade de plan ne modifie pas directement l’instance Managed Application existante. Azure Marketplace demande un nouveau redéploiement pour appliquer le nouveau plan.

## Restrictions sur les downgrades

ProPM bloque l’application technique des downgrades côté application :

- un plan inférieur au plan courant est refusé ;
- une réduction du nombre de licences commandées est refusée ;
- les changements Marketplace qui diminuent la capacité ne sont pas appliqués automatiquement.

ProPM empêche l’application technique d’un downgrade dans l’application, mais la facturation Marketplace reste gérée par Azure/Microsoft. Toute modification commerciale doit être effectuée et validée dans Azure Marketplace.

## Refresh Marketplace plan

Utilisez **Refresh Marketplace plan** pour synchroniser ProPM avec l’état Marketplace détecté pour le tenant.

Cette action :

- rafraîchit les informations de plan et de licences après une action Marketplace ;
- n’effectue pas une mise à niveau de plan à elle seule ;
- n’achète pas de licences supplémentaires ;
- ne supprime pas et n’annule pas de licences.

## Licences supplémentaires lors d’une mise à niveau

Les licences supplémentaires déjà achetées restent liées à la ressource Marketplace source.

Lors d’un redéploiement pour mise à niveau de plan :

- les licences supplémentaires existantes restent attachées à l’ancien déploiement ou à l’ancienne ressource Marketplace ;
- le nouveau plan inclut sa propre capacité de base ;
- le client ne doit acheter de nouvelles licences supplémentaires sur le nouveau déploiement que si la capacité incluse dans le nouveau plan ne suffit pas.

## Utilisateurs connectés licenciés

La liste **Licensed connected users** affiche les utilisateurs qui consomment actuellement des licences.

Le retrait d’un utilisateur licencié libère de la capacité applicative pour un usage ultérieur, selon les règles de licence du tenant. Il ne modifie pas le plan Marketplace et n’annule pas une consommation facturée par Azure Marketplace.

## Mises à jour applicatives sans redéploiement Marketplace

La section **Deployment & Updates** met à jour une installation existante sur place.

Elle ne fait pas les actions suivantes :

- relancer l’offre Azure Marketplace ;
- créer un nouveau groupe de ressources ;
- recréer les ressources Azure déjà déployées ;
- appliquer une mise à niveau de plan Marketplace.

Concrètement, l’administration lit l’inventaire des images des **Azure Container Apps** existantes via Azure Resource Manager, compare les images courantes aux images cibles approuvées dans ACR, puis soumet de nouvelles révisions sur les Container Apps existantes.

## Actions de mise à jour disponibles

| Action | Objectif |
| --- | --- |
| **Check for updates** | Vérifier les images courantes, les images cibles, les candidats de refresh de tags mutables et la version éventuelle du manifest. |
| **Apply update** | Appliquer les nouvelles images aux services sélectionnés en créant de nouvelles révisions Container Apps. |
| **Rollback last update** | Revenir aux images précédentes si la dernière opération a enregistré les références nécessaires. |
| **Container App image inventory** | Lire le groupe de ressources géré, les services suivis, les images courantes, les images cibles et l’état des révisions. |

## Limites de périmètre

Le rollout d’images applicatives est séparé de l’administration du plan Marketplace.

Les boutons de mise à jour ne couvrent pas :

- les migrations de schéma base de données ;
- la création de nouvelles ressources Azure ;
- les changements d’architecture ;
- les mises à niveau de plan Marketplace.

## À retenir

- Utilisez **Tenant plan and licensed users** pour administrer le plan Marketplace et la capacité de licences.
- Utilisez uniquement les plans Marketplace officiels pour les plans cibles.
- Utilisez **Add licenses and bill in Azure** pour les licences supplémentaires facturées par Azure Marketplace.
- Utilisez **Prepare upgrade by redeploying in Azure Marketplace** pour les mises à niveau de plan.
- Utilisez **Refresh Marketplace plan** seulement pour synchroniser l’état Marketplace détecté.
- Utilisez **Deployment & Updates** pour le rollout d’images applicatives sur place, pas pour les modifications commerciales de plan.

## Suite

- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
