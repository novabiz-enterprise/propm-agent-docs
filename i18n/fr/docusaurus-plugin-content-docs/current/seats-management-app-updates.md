---
title: Plan du tenant, utilisateurs licenciés et mises à jour applicatives
slug: /seats-management-app-updates
description: Comprendre le plan Marketplace affiché dans ProPM, synchroniser les informations Azure Marketplace, gérer les licences et mettre à jour un déploiement ProPM sans perdre les données existantes.
---

[Accueil](./index.md) · Plan du tenant, utilisateurs licenciés et mises à jour applicatives

![Vue d’ensemble de l’administration de la plateforme avec Tenant plan and licensed users](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

## Objectif

Cette page explique la procédure utilisateur pour **Platform Administration > Overview > Tenant plan and licensed users** et le nouveau flux recommandé lorsqu’un client veut changer de plan Azure Marketplace ou faire une mise à jour majeure sans perdre ses données existantes.

Elle sert à comprendre :

- quel plan Marketplace est actuellement détecté pour le tenant ;
- combien de licences sont commandées, incluses, supplémentaires, utilisées et restantes ;
- pourquoi Azure Marketplace reste la source officielle pour les plans, les prix et la facturation ;
- comment gérer les licences supplémentaires via Azure Marketplace avec la dimension de facturation `seats` ;
- comment créer un nouveau déploiement ProPM depuis Azure Marketplace en mode **Attach existing ProPM data resources** ;
- en quoi une mise à jour applicative sur place est différente d’un changement de plan ou d’une mise à jour majeure.

Le message principal est simple : pour changer de plan ou effectuer une mise à jour majeure sans perdre les données, créez un **nouveau déploiement ProPM depuis Azure Marketplace**, choisissez **Attach existing ProPM data resources**, puis rattachez les ressources de données de l’ancien déploiement. Il ne s’agit pas d’une migration manuelle de base de données.

## Où trouver la page

1. Ouvrez **Platform Administration**.
2. Restez dans **Overview**.
3. Ouvrez **Tenant plan and licensed users**.

Dans ProPM, cette zone affiche le plan actuellement détecté et permet de rafraîchir les informations Marketplace. Elle ne remplace pas Azure Marketplace pour choisir un plan, connaître le prix, modifier la facturation ou finaliser une transaction commerciale.

## Plans Marketplace, prix et facturation

Azure Marketplace est la source officielle pour :

- la liste des plans ProPM disponibles ;
- le prix de chaque plan ;
- la facturation du plan ;
- les changements commerciaux de plan ;
- les licences supplémentaires facturées avec la dimension `seats`.

ProPM affiche le plan courant pour aider l’administrateur à comprendre l’état du tenant, mais le changement de plan ne se fait plus directement depuis l’interface d’administration ProPM. Ne modifiez pas manuellement le plan dans le modèle ARM de la Managed Application.

À titre d’orientation, les plans Marketplace ProPM connus sont :

| Identifiant du plan | Nom affiché | Licences incluses |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Vérifiez toujours le plan, le prix et les conditions de facturation dans Azure Marketplace avant de lancer un nouveau déploiement.

Pour tout nouveau déploiement ou toute mise à niveau, utilisez uniquement les plans ProPM actuellement disponibles dans Azure Marketplace.

Les plans Marketplace pilotent la capacité de licences. Ils ne débloquent pas et ne bloquent pas les connecteurs, les fournisseurs IA ou les fonctionnalités produit.

## Lire les champs de plan et de licences

| Champ | Signification |
| --- | --- |
| **Current plan** | Plan Marketplace actuellement détecté pour le tenant. |
| **Ordered seats** | Nombre total de licences commandées pour le tenant. |
| **Included seats** | Licences incluses dans le plan Marketplace de base. |
| **Supplemental licenses** | Licences supplémentaires ajoutées via la facturation Marketplace. |
| **Used seats** | Licences actuellement consommées par des utilisateurs connectés ou licenciés. |
| **Remaining seats** | Licences encore disponibles. |

Si les informations affichées ne correspondent pas à ce qui vient d’être fait dans Azure Marketplace, utilisez **Refresh Marketplace plan** pour resynchroniser ProPM avec les informations Marketplace détectées.

## Licences supplémentaires

Les licences supplémentaires sont gérées via Azure Marketplace avec la dimension de facturation `seats`.

Utilisez ce flux lorsque le tenant a besoin de plus de capacité que les licences incluses dans son plan de base :

1. Vérifiez **Ordered seats**, **Included seats**, **Supplemental licenses**, **Used seats** et **Remaining seats** dans ProPM.
2. Gérez l’ajout de capacité depuis Azure Marketplace ou via l’action ProPM prévue pour facturer des licences dans Azure, si elle est disponible dans votre environnement.
3. Laissez Azure Marketplace accepter et facturer la demande avec la dimension `seats`.
4. Revenez dans ProPM.
5. Sélectionnez **Refresh Marketplace plan** si les compteurs ne sont pas encore à jour.
6. Vérifiez **Ordered seats**, **Supplemental licenses** et **Remaining seats** après synchronisation.

L’ajout de licences supplémentaires ne change pas le plan de base. La suppression ou la réduction de licences supplémentaires ne constitue pas automatiquement une annulation ou un remboursement côté Azure Marketplace.

## Mettre à jour votre plan ProPM sans perdre vos données

Pour changer de plan Azure Marketplace ou effectuer une mise à jour majeure, le flux recommandé consiste à créer un nouveau déploiement ProPM, puis à le rattacher aux ressources de données existantes de l’ancien déploiement.

Le nouveau déploiement crée une nouvelle couche applicative pour le plan choisi, mais il réutilise les données existantes. Les utilisateurs, documents, configurations, agents, rapports et données doivent donc rester disponibles après validation.

### Quand utiliser ce flux

Utilisez ce flux dans les cas suivants :

- vous voulez passer à un autre plan ProPM dans Azure Marketplace ;
- vous devez effectuer une mise à jour majeure qui nécessite un nouveau déploiement Marketplace ;
- vous voulez recréer la couche applicative ProPM tout en conservant les données existantes ;
- le support ProPM vous demande de redéployer en mode attachement des ressources de données existantes.

N’utilisez pas ce flux pour une simple mise à jour d’images applicatives sur place. Pour ce cas, utilisez la section **Deployment & Updates** dans ProPM si elle est disponible et si les notes de version ne demandent pas un nouveau déploiement Marketplace.

### Avant de commencer

Préparez les éléments suivants :

- un accès Azure autorisé à l’ancien déploiement ProPM ;
- le droit de créer une nouvelle Managed Application ProPM depuis Azure Marketplace ;
- le plan ProPM cible choisi dans Azure Marketplace ;
- le **Resource ID** complet de l’ancienne Managed Application ProPM ;
- une fenêtre de bascule pendant laquelle les administrateurs peuvent vérifier le nouveau déploiement ;
- la liste des éléments à valider après la bascule : utilisateurs, documents, configurations, agents, rapports et données.

Respectez ces précautions avant toute action :

- ne supprimez pas l’ancien Managed Resource Group avant d’avoir validé le nouveau déploiement ;
- ne supprimez pas les ressources de données existantes, car elles sont réutilisées par le nouveau déploiement ;
- ne modifiez pas manuellement le plan ARM de la Managed Application ;
- ne remplissez pas les options avancées d’override sauf si l’installation précédente utilise des noms personnalisés ou si le support ProPM le demande.

### Étape 1 - Choisir le nouveau plan dans Azure Marketplace

Ouvrez Azure Marketplace et sélectionnez le nouveau plan ProPM souhaité.

Le choix du plan, le prix et la facturation sont gérés dans Azure Marketplace. ProPM peut afficher le plan courant et rafraîchir les informations détectées, mais ProPM n’est pas la source officielle pour la transaction commerciale.

### Étape 2 - Créer un nouveau déploiement ProPM

Dans Azure Marketplace, créez un nouveau déploiement ProPM au lieu de modifier directement l’ancien déploiement.

Dans l’onglet **Basics**, choisissez l’abonnement, le groupe de ressources, la région, le nom de la nouvelle Managed Application et le nouveau Managed Resource Group.

![Création d’un nouveau déploiement ProPM depuis Azure Marketplace](/img/deploiement/fr/propm-plan-update-01-new-deployment-basics.png)

Utilisez un nom différent pour la nouvelle Managed Application afin de distinguer clairement l’ancien environnement du nouveau pendant la bascule.

### Étape 3 - Sélectionner Attach existing ProPM data resources

Dans l’onglet **Application Settings**, choisissez **Attach existing ProPM data resources** dans le champ **Installation mode**.

![Sélection du mode Attach existing ProPM data resources](/img/deploiement/fr/propm-plan-update-03-attach-existing-data-resources.png)

Ce mode indique au nouveau déploiement qu’il doit se connecter aux ressources de données de l’ancien déploiement au lieu de repartir avec un environnement vide.

Laissez les champs avancés d’override vides dans la plupart des cas. Le nouveau déploiement peut découvrir les ressources standard à partir de l’ancienne Managed Application. Remplissez ces champs uniquement si l’installation précédente utilisait des noms personnalisés ou si le support ProPM vous le demande.

### Étape 4 - Renseigner l’ancienne Managed Application

Dans Azure Portal, ouvrez l’ancienne Managed Application ProPM, puis allez dans **Properties**.

Copiez le champ **Id** complet de la Managed Application. Il s’agit du **Resource ID** de l’ancienne Managed Application, pas du nom du groupe de ressources managé.

![Copie du Resource ID de l’ancienne Managed Application ProPM](/img/deploiement/fr/propm-plan-update-02-copy-previous-managed-application-id.png)

Revenez dans l’assistant du nouveau déploiement et collez cette valeur dans **Previous ProPM Managed Application resource ID**.

Si nécessaire, activez **Block previous deployment during cutover**. Cette option permet d’éviter que des modifications soient faites dans l’ancien environnement pendant que le nouveau déploiement est utilisé et validé.

![Option de blocage de l’ancien déploiement pendant la bascule](/img/deploiement/fr/propm-plan-update-04-readonly-and-overrides.png)

Après avoir renseigné les autres paramètres demandés par l’assistant, sélectionnez **Review + create**, relisez la configuration, puis lancez le déploiement.

### Étape 5 - Vérifier le nouveau déploiement

Une fois le nouveau déploiement terminé, ouvrez la nouvelle instance ProPM et vérifiez les éléments essentiels avant de basculer définitivement les utilisateurs.

Contrôlez au minimum :

- les utilisateurs et leurs accès ;
- les documents et espaces de connaissance ;
- les configurations de plateforme ;
- les agents et leurs paramètres ;
- les rapports ;
- les projets, portefeuilles et données métier ;
- les connecteurs et intégrations attendus ;
- le fournisseur IA et les paramètres nécessaires ;
- le plan et les compteurs de licences après synchronisation Marketplace.

Si le plan affiché dans ProPM n’est pas encore à jour après l’action Azure Marketplace, utilisez **Refresh Marketplace plan**. Ce bouton sert uniquement à synchroniser l’état détecté ; il ne change pas le plan et ne déclenche pas d’achat.

### Étape 6 - Finaliser la bascule

Après validation complète, dirigez les utilisateurs vers le nouveau déploiement ProPM.

Conservez l’ancien déploiement temporairement comme sécurité si votre organisation le souhaite. Ne supprimez l’ancienne Managed Application que lorsque vous êtes certain que la bascule est terminée et que la procédure retenue ne supprime pas les ressources de données réutilisées.

Ne supprimez jamais manuellement les ressources de données existantes tant qu’elles sont utilisées par le nouveau déploiement.

### Bonnes pratiques et précautions

À faire :

- choisissez le nouveau plan dans Azure Marketplace ;
- créez un nouveau déploiement ProPM ;
- sélectionnez **Attach existing ProPM data resources** ;
- renseignez le Resource ID complet de l’ancienne Managed Application ProPM ;
- bloquez ou mettez l’ancien déploiement en lecture seule pendant la bascule si nécessaire ;
- vérifiez le nouveau déploiement avant de supprimer quoi que ce soit ;
- utilisez **Refresh Marketplace plan** après une action Marketplace pour resynchroniser ProPM.

À éviter :

- ne supprimez pas l’ancien Managed Resource Group avant validation du nouveau déploiement ;
- ne supprimez pas les comptes, bases ou services de données existants ;
- ne modifiez pas manuellement le plan ARM de la Managed Application ;
- ne présentez pas ce flux comme une migration manuelle de base de données ;
- ne remplissez pas les overrides avancés sans besoin identifié.

### FAQ

**Puis-je changer de plan directement dans ProPM ?**

Non. ProPM affiche le plan actuel et permet de rafraîchir les informations Marketplace, mais le changement de plan, le prix et la facturation se gèrent depuis Azure Marketplace.

**À quoi sert Refresh Marketplace plan ?**

Le bouton **Refresh Marketplace plan** synchronise ProPM avec les informations Marketplace détectées après une action côté Azure. Il ne change pas le plan, n’achète pas de licences et ne supprime aucune licence.

**Est-ce une migration manuelle de base de données ?**

Non. Le nouveau déploiement ProPM se connecte automatiquement aux ressources de données existantes lorsque vous choisissez **Attach existing ProPM data resources** et que vous renseignez l’ancienne Managed Application.

**Quel Resource ID dois-je renseigner ?**

Renseignez le Resource ID complet de l’ancienne **Managed Application ProPM**. Ne renseignez pas seulement le nom de l’application, le nom du groupe de ressources ou le Managed Resource Group.

**Quand utiliser les options avancées d’override ?**

Utilisez-les uniquement si l’installation précédente a des noms de ressources personnalisés ou si le support ProPM vous le demande. Dans le cas standard, laissez ces champs vides.

**Puis-je supprimer l’ancien Managed Resource Group après le nouveau déploiement ?**

Ne le supprimez pas avant d’avoir validé le nouveau déploiement. Ne supprimez pas les ressources de données existantes si le nouveau déploiement les réutilise. En cas de doute, conservez l’ancien déploiement temporairement et demandez la procédure de suppression adaptée au support ProPM.

**Comment sont gérées les licences supplémentaires ?**

Les licences supplémentaires sont gérées via Azure Marketplace avec la dimension de facturation `seats`. ProPM peut afficher les compteurs et les synchroniser, mais Azure Marketplace reste la référence pour la facturation.

## Refresh Marketplace plan

Utilisez **Refresh Marketplace plan** pour synchroniser ProPM avec l’état Marketplace détecté pour le tenant.

Cette action :

- rafraîchit les informations de plan et de licences après une action Marketplace ;
- n’effectue pas une mise à niveau de plan à elle seule ;
- n’achète pas de licences supplémentaires ;
- ne supprime pas et n’annule pas de licences ;
- ne modifie pas les ressources Azure du déploiement.

## Utilisateurs connectés licenciés

La liste **Licensed connected users** affiche les utilisateurs qui consomment actuellement des licences.

Le retrait d’un utilisateur licencié libère de la capacité applicative pour un usage ultérieur, selon les règles de licence du tenant. Il ne modifie pas le plan Marketplace et n’annule pas une consommation facturée par Azure Marketplace.

## Mises à jour applicatives sans redéploiement Marketplace

La section **Deployment & Updates** met à jour une installation existante sur place lorsque la mise à jour est compatible avec le déploiement courant.

Elle ne fait pas les actions suivantes :

- relancer l’offre Azure Marketplace ;
- créer un nouveau groupe de ressources ;
- recréer les ressources Azure déjà déployées ;
- appliquer une mise à niveau de plan Marketplace ;
- effectuer une mise à jour majeure qui demande un nouveau déploiement Marketplace.

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
- les mises à niveau de plan Marketplace ;
- les bascules vers un nouveau déploiement avec ressources de données existantes.

## À retenir

- Azure Marketplace est la source officielle pour les plans, les prix et la facturation.
- ProPM affiche le plan actuel et les compteurs de licences, mais ne remplace pas Azure Marketplace pour changer de plan.
- Pour changer de plan ou faire une mise à jour majeure sans perdre les données, créez un nouveau déploiement ProPM depuis Azure Marketplace.
- Dans l’assistant de déploiement, choisissez **Attach existing ProPM data resources**.
- Renseignez le Resource ID complet de l’ancienne Managed Application ProPM.
- Ne supprimez pas l’ancien Managed Resource Group ni les ressources de données avant validation complète du nouveau déploiement.
- Utilisez **Refresh Marketplace plan** seulement pour synchroniser l’état Marketplace détecté.
- Utilisez **Deployment & Updates** pour le rollout d’images applicatives sur place, pas pour les modifications commerciales de plan.

## Suite

- [Déploiement Azure Marketplace](./deploiement-azure-marketplace.md)
- [Fournisseurs IA et intégrations plateforme](./ai-providers-platform-integrations.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
