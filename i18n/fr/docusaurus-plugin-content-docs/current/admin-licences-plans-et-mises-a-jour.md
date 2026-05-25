---
title: Licences, plans et mises à jour
slug: /admin-licences-plans-et-mises-a-jour
description: Gérer les licences utilisateur, rafraîchir le plan Marketplace, changer de plan, rattacher des données existantes et vérifier les mises à jour applicatives.
---

[Accueil](./index.md) · Licences, plans et mises à jour

![Vue d’ensemble de l’administration de la plateforme](/img/screenshots/localized/fr/18-platform-administration-overview.jpg)

## Objectif

Cette page explique les opérations administrateur liées au plan Marketplace, aux licences utilisateur, au changement de plan, au rattachement de données existantes et aux mises à jour applicatives.

Pour une simple mise à jour in-place des images applicatives, utilisez **Deployment & Updates** lorsque la surface est disponible. Pour un changement de plan ou une mise à jour majeure qui doit conserver les données existantes, créez un nouveau déploiement Azure Marketplace et sélectionnez **Attach existing ProPM data resources**.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Administrateur tenant | Lire les sièges commandés, utilisés et restants |
| Administrateur Azure | Changer de plan ou rattacher des données existantes |
| Support | Vérifier un blocage de licence ou update |
| Utilisateur métier | Non, sauf pour comprendre pourquoi l’accès peut être refusé |

## Avant de commencer

- Vous avez accès à **Platform Administration**.
- Azure Marketplace reste la source officielle pour l’achat, le prix et la facturation.
- Les utilisateurs à libérer ou réaffecter sont identifiés.
- Pour un rattachement de données existantes, vous connaissez la Managed Application ProPM précédente et son Resource ID complet.

## Comprendre les compteurs

| Compteur | Signification |
| --- | --- |
| Ordered seats | Capacité commandée côté Marketplace |
| Included seats | Licences incluses dans le plan |
| Supplemental seats | Licences supplémentaires achetées |
| Used seats | Utilisateurs actuellement comptabilisés |
| Remaining seats | Licences encore disponibles |

## Gérer les utilisateurs licenciés

1. Ouvrez **Platform Administration**.
2. Restez dans **Overview**.
3. Ouvrez **Tenant plan and licensed users**.
4. Consultez la liste des utilisateurs connectés/licenciés.
5. Identifiez un utilisateur à libérer si la politique client le permet.
6. Utilisez **Release user** uniquement si l’utilisateur n’a plus besoin d’accès.
7. Vérifiez que le compteur restant est mis à jour.

## Rafraîchir le plan Marketplace

1. Ouvrez **Tenant plan and licensed users**.
2. Sélectionnez **Refresh Marketplace plan**.
3. Attendez la synchronisation.
4. Vérifiez les compteurs affichés.

**Refresh Marketplace plan** synchronise les informations connues. Il n’achète pas de licences, ne change pas le plan et ne modifie pas la facturation.

## Changer de plan ou faire une mise à jour majeure avec données existantes

Utilisez ce flux lorsqu’un nouveau déploiement Marketplace est nécessaire mais que les données ProPM existantes doivent être conservées, par exemple pour un changement commercial de plan ou une mise à jour majeure non applicable in-place.

Ce n’est pas une migration manuelle de base de données. Le nouveau tier applicatif se connecte aux ressources de données utilisées par le déploiement ProPM précédent.

### Parcours général

1. Ouvrez Azure Marketplace.
2. Sélectionnez le plan ProPM Agent cible.
3. Créez un nouveau déploiement ProPM Agent.
4. Dans **Application Settings**, sélectionnez **Attach existing ProPM data resources**.
5. Renseignez le Resource ID de la Managed Application ProPM précédente.
6. Laissez les overrides optionnels vides sauf demande support ou architecture particulière.
7. Configurez le cutover, l’administration, le CORS, la supervision, le mot de passe et le réseau.
8. Sélectionnez **Review + create**.
9. Validez la nouvelle instance avant de supprimer ou désactiver l’ancienne.

## Écran de mise à jour 1 - Rattacher les données existantes

Cette partie de **Application Settings** identifie le déploiement précédent et les ressources de données existantes à réutiliser.

![Paramètres Attach existing ProPM data resources](/img/deploiement/propm-update-attach-existing-data.png)

### Champs de rattachement des données existantes

| Champ | Obligatoire | Que renseigner | Recommandations |
| --- | --- | --- | --- |
| **Environment Name** | Oui | Nom court de l’environnement, par exemple `prod`, `uat` ou `test`. | Utilisez une valeur stable, non confidentielle, qui identifie le nouveau tier applicatif. Gardez la convention de nommage interne. |
| **Installation mode** | Oui | **Attach existing ProPM data resources**. | Ce mode crée une nouvelle Managed Application Marketplace et un nouveau tier applicatif, puis les connecte aux données ProPM existantes. Utilisez **New installation** uniquement pour un environnement vide. |
| **Previous ProPM Managed Application resource ID** | Oui | Resource ID Azure complet de la Managed Application ProPM précédente. | Copiez le champ **Id** complet depuis la page **Properties** de l’ancienne Managed Application. Ne renseignez pas seulement le nom de l’application, le groupe de ressources ou le managed resource group. |
| **Existing Storage account resource ID (optional override)** | Non | Resource ID du compte de stockage existant, uniquement si l’auto-découverte ne peut pas être utilisée. | Laissez vide dans le cas standard. Renseignez seulement si les outputs du déploiement précédent sont indisponibles, si les ressources sont gérées hors standard ou si le support ProPM le demande. |
| **Existing Azure AI Search service resource ID (optional override)** | Non | Resource ID du service Azure AI Search existant. | Laissez vide sauf si la découverte standard ne peut pas identifier le service de recherche. |
| **Existing SQL server resource ID (optional override)** | Non | Resource ID du serveur SQL existant. | Utilisez seulement pour une topologie SQL personnalisée ou gérée hors standard. Ce champ identifie le serveur SQL, pas le nom de la base. |
| **Existing SQL database name (optional override)** | Non | Nom de la base SQL existante. | Utilisez avec prudence, uniquement si le nom de base ne peut pas être découvert depuis le déploiement précédent. |
| **Existing Cosmos DB account resource ID (optional override)** | Non | Resource ID du compte Cosmos DB existant. | Laissez vide sauf besoin explicite de pointer vers un compte Cosmos DB existant précis. |
| **Existing Document Intelligence account resource ID (optional override)** | Non | Resource ID du compte Document Intelligence existant. | Utilisez seulement si le déploiement précédent utilise une ressource Document Intelligence externe ou personnalisée. |
| **Existing Service Bus namespace resource ID (optional override)** | Non | Resource ID du namespace Service Bus existant. | Laissez vide dans le cas standard pour réutiliser le namespace découvert. |
| **Previous** | Non | Retourne à l’étape précédente du formulaire. | Ne lance aucun déploiement. |
| **Next** | Non | Passe à l’étape suivante du formulaire. | Utilisez-le après avoir rempli les champs requis. |
| **Review + create** | Non | Lance la validation Azure avant création. | Utilisez-le seulement après avoir complété les paramètres suivants. |

## Écran de mise à jour 2 - Cutover et paramètres plateforme

Cette partie contrôle la sécurité du cutover, l’administration plateforme, la reprise du fournisseur IA, le CORS, la supervision, la confirmation du mot de passe SQL et le réseau.

![Paramètres de cutover et plateforme pour mise à jour de déploiement](/img/deploiement/propm-update-cutover-settings.png)

### Champs cutover et plateforme

| Champ | Obligatoire | Que renseigner | Recommandations |
| --- | --- | --- | --- |
| **Existing Event Grid topic resource ID (optional override)** | Non | Resource ID du topic Event Grid existant. | Laissez vide sauf si l’auto-découverte ne trouve pas le topic ou si le support demande de le renseigner. |
| **Block previous deployment during cutover** | Non, recommandé pour le cutover | Cochez la case pour empêcher les changements dans l’ancien déploiement pendant la validation. | Cette option évite que deux tiers applicatifs écrivent dans les mêmes données. Sinon, gardez l’ancien déploiement arrêté ou en lecture seule par une autre méthode contrôlée. |
| **Platform Administration Entra Group Object IDs** | Oui | Object IDs des groupes Entra autorisés à administrer la nouvelle instance. | Renseignez les Object IDs des groupes, pas leurs noms d’affichage. Vérifiez que ce sont bien les administrateurs attendus. |
| **Platform Administration Bootstrap Users (optional)** | Non | Utilisateurs bootstrap ou de récupération si votre procédure le prévoit. | Gardez une liste minimale. À utiliser seulement pour le premier accès ou une récupération contrôlée. |
| **Allow Azure RBAC admin recovery** | Non | Case permettant la récupération administrateur via Azure RBAC. | Laissez activé si votre modèle d’exploitation l’autorise. Désactivez seulement si la gouvernance impose une séparation stricte. |
| **Reuse previous AI provider configuration** | Recommandé | Cochez si le nouveau déploiement doit réutiliser la configuration IA précédente. | Quand l’option est active, les champs IA sont masqués pour cette mise à jour. Vous pourrez changer les paramètres IA plus tard depuis **Platform Administration**. |
| **CORS Allowed Origins** | Selon le scénario | Origines web additionnelles, par exemple `https://portal.contoso.com`. | Laissez vide si aucune origine additionnelle n’est nécessaire. Évitez les jokers trop larges. |
| **Enable alerting (Azure Monitor)** | Non | Active ou désactive les alertes Azure Monitor. | Recommandé en production. Vérifiez les destinataires et règles d’action après déploiement. |
| **Enable debug logging** | Non | Active des journaux plus détaillés. | Gardez désactivé sauf diagnostic encadré, car cela peut augmenter le volume de logs et exposer plus de détails techniques aux administrateurs. |
| **Password** | Oui | Mot de passe administrateur SQL ProPM existant. | Les mises à jour attachées exigent encore cette saisie sécurisée pour que le nouveau tier applicatif se connecte à la base réutilisée. Utilisez vos procédures approuvées de gestion des secrets. |
| **Confirm password** | Oui | Même valeur que **Password**. | Azure vérifie que les deux valeurs correspondent. En cas d’erreur, ressaisissez les deux champs depuis la source sécurisée. |
| **VNet CIDR** | Oui | Plage réseau privée du nouveau déploiement, par exemple `10.0.0.0/16`. | Faites valider par l’équipe réseau. Évitez tout chevauchement avec réseaux existants, peerings, VPN ou plages prévues. |

## Avant Review + create

| Contrôle | Résultat attendu |
| --- | --- |
| Previous Managed Application ID | Resource ID Azure complet de l’ancienne Managed Application ProPM |
| Overrides | Vides sauf impossibilité de découverte ou demande support |
| Ancien déploiement | Bloqué, arrêté ou en lecture seule pendant le cutover |
| Groupes admin | Object IDs Entra corrects pour la nouvelle instance |
| Reprise fournisseur IA | Activée si la configuration précédente doit être reprise |
| Mot de passe SQL | Mot de passe administrateur SQL ProPM saisi via une gestion sécurisée |
| VNet CIDR | Validé et sans chevauchement |
| Review + create | Validation Azure réussie avant lancement de création |

## Après le nouveau déploiement

1. Attendez la fin du provisionnement Azure.
2. Ouvrez la nouvelle URL ProPM Agent.
3. Vérifiez la connexion administrateur.
4. Vérifiez utilisateurs, projets, documents, connaissance, rapports, agents et intégrations.
5. Vérifiez la configuration du fournisseur IA et lancez un test si nécessaire.
6. Vérifiez le plan Marketplace et les compteurs de licences.
7. Basculez les utilisateurs vers le nouveau déploiement seulement après validation.
8. Conservez temporairement l’ancien déploiement si votre plan de cutover le prévoit.
9. Ne supprimez pas les ressources de données réutilisées tant que le nouveau déploiement en dépend.

## Vérifier les mises à jour applicatives

Utilisez **Deployment & Updates** pour vérifier et appliquer les mises à jour in-place des images applicatives lorsque la surface est disponible. Lancez ces updates pendant une fenêtre maîtrisée et conservez les informations de support si un rollback est nécessaire.

N’utilisez pas **Deployment & Updates** pour les changements commerciaux de plan, les nouveaux achats Marketplace, les mises à jour majeures exigeant une nouvelle Managed Application ou les cutovers vers des données existantes.

## Si cela ne fonctionne pas

| Symptôme | Cause probable | Action recommandée |
| --- | --- | --- |
| Compteurs inchangés après refresh | Marketplace non encore synchronisé ou aucun changement acheté | Vérifiez Azure Marketplace puis relancez plus tard |
| Utilisateur bloqué malgré licence | Rôle projet ou accès Entra manquant | Vérifiez Entra et Contrôle d’accès |
| Release user indisponible | Droit administrateur insuffisant | Demandez l’action au tenant admin |
| Update bloquée | Fenêtre, santé ou prérequis non satisfaits | Ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md) |
| Nouveau déploiement attaché invalide | Resource ID précédent erroné, override incorrect ou mot de passe SQL invalide | Corrigez les champs Azure Marketplace avant création ou contactez le support |

## Suite

- Pour déployer, ouvrez [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md).
- Pour vérifier le fournisseur IA après changement, ouvrez [Fournisseur IA](./admin-fournisseur-ia.md).
- Pour les incidents, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).
