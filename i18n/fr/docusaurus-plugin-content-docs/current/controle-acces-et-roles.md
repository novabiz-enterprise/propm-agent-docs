---
title: Contrôle d’accès et rôles projet
slug: /controle-acces-et-roles
description: Administrer les membres, déléguer les rôles projet et comprendre les garde-fous RBAC appliqués au créateur et aux autres membres.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

![Délégation du créateur et rôles projet](/img/diagrams/fr/delegation-createur-rbac.svg)

## Objectif

Le **Contrôle d’accès** est la zone d’administration RBAC de niveau projet. Elle permet de décider :

- qui peut entrer dans le projet ;
- quel rôle chaque membre reçoit ;
- quels rôles personnalisés existent dans ce projet ;
- quelles permissions ces rôles accordent.

## Pourquoi c’est important

Les droits conditionnent une grande partie de l’expérience : exécution d’agents, gestion des membres, génération de livrables, paramétrage des intégrations, gouvernance des publications et lecture d’audit. Une lecture correcte des rôles évite de confondre un blocage fonctionnel avec un simple manque d’autorisation.

## Qui peut utiliser cette page

- **consulter membres et rôles** : tout membre qui peut accéder à l’espace de travail ;
- **gérer les membres** : utilisateur disposant de `members:manage` ;
- **gérer les rôles personnalisés** : utilisateur disposant de `roles:manage`.

## Créateur du projet : rôle initial et délégation

À la création du projet, le créateur démarre avec le rôle **Propriétaire du projet** et l’ensemble des permissions projet disponibles. Il sert donc de point de départ administratif : il ouvre le projet, contrôle la configuration initiale et délègue ensuite les rôles utiles aux autres membres.

### Délégation recommandée

1. conservez le créateur comme garde-fou administratif initial ;
2. attribuez un second **Propriétaire du projet** si le projet ne doit pas dépendre d’une seule personne ;
3. utilisez **Chef de projet** pour le pilotage quotidien ;
4. réservez les rôles personnalisés aux écarts réels de besoin ;
5. vérifiez ensuite **Politiques de gouvernance** et **Intégrations du projet** pour que les droits correspondent aux usages externes.

### Ce que la page confirme

- le créateur ne peut pas être retiré depuis cet écran ;
- le rôle du créateur reste fixe ;
- un utilisateur ne peut pas s’auto-rétrograder ni s’auto-supprimer depuis cette surface ;
- la délégation des rôles est confirmée ;
- le transfert libre du **statut de créateur** n’est pas proposé directement dans les écrans d’administration.

## Rôles standards

Chaque projet démarre avec des rôles intégrés protégés :

| Rôle | Usage type |
| --- | --- |
| Propriétaire du projet | Administration complète du projet |
| Chef de projet | Pilotage opérationnel quotidien |
| Contributeur | Contribution de contenu, usage des agents et des livrables selon permissions |
| Lecteur | Consultation en lecture seule |
| Auditeur | Consultation orientée audit et traçabilité |

Ces rôles intégrés sont protégés côté serveur et ne peuvent pas être supprimés depuis l’interface.

## Matrice rapide des rôles standards

Les rôles personnalisés peuvent étendre ou réduire ce schéma. Le tableau ci-dessous décrit le **comportement habituel** des rôles standards.

| Action courante | Propriétaire du projet | Chef de projet | Contributeur | Lecteur | Auditeur |
| --- | --- | --- | --- | --- | --- |
| Accéder au projet, à l’Espace de travail et aux écrans de lecture | Oui | Oui | Oui | Oui | Oui |
| Rechercher dans la connaissance, relire les Documents PM et le Journal IA | Oui | Oui | Oui | Oui | Oui |
| Lancer un run dans **Agents** | Oui | Oui | Oui | Non par défaut | Non par défaut |
| Modifier contenus de travail et brouillons de livrables | Oui | Oui | Oui | Non | Non |
| Gérer membres, rôles et principaux réglages projet | Oui | Non | Non | Non | Non |
| Relecture orientée audit et traçabilité | Oui | Oui | Oui | Lecture générale | Oui |

## Rôles personnalisés

Le produit supporte la création, l’édition et la suppression de **rôles personnalisés** au niveau projet.

### Permissions disponibles

Les permissions exposées incluent notamment :

- `project:read`
- `project:update`
- `agent:run`
- `agent:configure`
- `documents:read`
- `documents:upload`
- `documents:delete`
- `report:generate`
- `history:read`
- `members:read`
- `members:manage`
- `roles:manage`
- `settings:manage`

### Permission → impact concret

| Permission | Surface impactée | Symptôme si elle manque |
| --- | --- | --- |
| `agent:configure` | onglet **Configuration des agents** dans l’**Espace de travail** | la page reste consultable ou les contrôles d’enregistrement sont désactivés |
| `report:generate` | création de brouillons, d’artefacts et de Documents PM | l’utilisateur peut relire, mais pas générer le livrable attendu |
| `history:read` | **Journal IA** et lecture détaillée des runs | la traçabilité reste inaccessible ou très limitée |
| `settings:manage` | réglages projet, gouvernance et certaines intégrations | les paramètres sont visibles mais non modifiables |
| `members:manage` | zone **Membres** dans **Contrôle d’accès** | impossible d’ajouter, de retirer ou de changer un membre |
| `roles:manage` | rôles personnalisés et leurs permissions | impossible de créer, d’ajuster ou de supprimer un rôle personnalisé |

Cette table sert surtout à lire correctement le comportement de l’interface : une action absente ou grisée traduit souvent une permission non accordée.

![Éditeur de rôle personnalisé](/img/screenshots/localized/fr/11-custom-role-editor.jpg)

## Ce que vous voyez sur la page

La page se divise en deux zones de travail :

1. **Rôles et permissions**
   - revue des rôles intégrés ;
   - création de rôles personnalisés ;
   - inspection ou modification des permissions d’un rôle personnalisé ;
2. **Membres**
   - ajout d’un membre par e-mail ;
   - attribution d’un rôle intégré ou personnalisé ;
   - changement de rôle ;
   - suppression d’un membre quand cela reste autorisé.

La page peut aussi afficher votre identité courante et, lorsqu’elle est exposée, l’entrée protégée du **créateur** du projet.

## Parcours recommandé

### Revoir les rôles avant d’ajouter un membre

1. ouvrez **Espace de travail** ;
2. sélectionnez l’onglet **Contrôle d’accès** ;
3. relisez les rôles existants ;
4. vérifiez si un rôle standard suffit ou si un rôle personnalisé est nécessaire.

### Créer un rôle personnalisé

1. ouvrez **Rôles et permissions** ;
2. saisissez un **nom** ;
3. ajoutez éventuellement une **description** ;
4. créez le rôle ;
5. activez ou désactivez les permissions voulues ;
6. vérifiez les badges ou permissions affichés avant usage réel.

### Ajouter ou mettre à jour un membre

1. ouvrez **Membres** ;
2. saisissez l’**e-mail** ;
3. choisissez le rôle souhaité ;
4. enregistrez ;
5. vérifiez que la ligne du membre reflète bien le rôle attendu.

Si l’utilisateur appartient à un autre tenant, gardez en tête qu’un **compte externe / guest** doit d’abord être invité côté identité avant que le RBAC projet puisse lui attribuer un rôle utile.

### Changer le rôle d’un membre existant

1. repérez la ligne du membre dans **Membres** ;
2. utilisez le sélecteur de rôle de cette ligne ;
3. choisissez le nouveau rôle ;
4. confirmez que la ligne affiche bien le rôle mis à jour.

### Retirer un membre

1. repérez la ligne du membre à retirer ;
2. utilisez l’action de suppression si elle est disponible ;
3. confirmez que le membre disparaît de la liste ;
4. si l’action reste bloquée, vérifiez d’abord qu’il ne s’agit ni de votre propre compte ni de l’entrée protégée du créateur.

## Garde-fous RBAC confirmés

L’interface et les services de la plateforme appliquent plusieurs protections importantes :

- vous ne pouvez pas **supprimer votre propre accès** depuis cet écran ;
- vous ne pouvez pas **modifier votre propre rôle** depuis cet écran ;
- l’entrée du **créateur du projet** reste protégée ;
- un **rôle système** ne peut pas être supprimé ;
- un **rôle personnalisé encore attribué** ne peut pas être supprimé ;
- les utilisateurs sans droit de gestion voient une page **consultable** avec contrôles désactivés.

## Lecture seule vs accès refusé

Ces deux états ne signifient pas la même chose :

- **lecture seule** : la page reste visible, mais les contrôles d’ajout, d’édition ou de suppression sont désactivés ;
- **accès refusé** : la route ou l’action n’est pas disponible pour votre compte.

En pratique, cela permet à certains profils de relire la configuration RBAC sans pouvoir la modifier.

### Comment lire un refus

| Ce que vous observez | Lecture la plus probable | Réflexe recommandé |
| --- | --- | --- |
| un contrôle visible mais grisé | surface exposée en **lecture seule** | vérifiez d’abord si votre rôle inclut la permission attendue |
| une action absente alors qu’elle existe pour d’autres profils | permission ou rôle non accordé | comparez votre rôle standard ou personnalisé avec l’action attendue |
| une action visible mais impossible malgré l’UI | garde-fou RBAC côté serveur ou contrainte de protection | vérifiez s’il s’agit d’un rôle système, de votre propre compte ou d’une entrée protégée |

## Ce que le créateur délègue en pratique

| Besoin | Rôle à attribuer d’abord | Pourquoi |
| --- | --- | --- |
| continuité administrative | **Propriétaire du projet** | éviter qu’un seul compte concentre toute l’administration |
| pilotage quotidien | **Chef de projet** | gérer le travail courant sans ouvrir toute l’administration |
| production de contenu et usage agents | **Contributeur** | exécuter les agents et préparer les livrables |
| consultation large | **Lecteur** | accès en lecture seule sans risque de modification |
| audit et traçabilité | **Auditeur** | relire l’historique et les preuves sans agir sur le projet |

## Problèmes courants

### Impossible de supprimer un rôle personnalisé

Vérifiez d’abord si ce rôle est encore attribué à un membre. Tant qu’il est utilisé, la suppression reste bloquée.

### Impossible de modifier mon propre rôle

Ce comportement est volontaire pour éviter une perte d’accès accidentelle. Demandez à un autre administrateur projet d’effectuer la modification.

### L’onglet est visible mais tout est grisé

Vous êtes probablement en **lecture seule** sur cette surface. Vérifiez si votre rôle inclut `members:manage` ou `roles:manage`.

## Conseils

- utilisez **Propriétaire du projet** uniquement pour les vrais administrateurs projet ;
- gardez les rôles personnalisés ciblés et limités à un besoin précis ;
- relisez les permissions avant de déléguer la gestion des membres ;
- documentez les rôles personnalisés dans les pratiques d’équipe pour éviter les doublons.

## Suite

- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
