---
title: Contrôle d’accès et rôles projet
slug: /controle-acces-et-roles
description: Administrer les membres, les rôles standards, les rôles personnalisés et les garde-fous RBAC au niveau projet.
---

[Accueil](./index.md) · [Projets et espace de travail](./projets-et-espace-de-travail.md) · [Maintenance, support et FAQ](./maintenance-support-faq.md)

## Objectif

Le **Contrôle d’accès** est la zone d’administration RBAC de niveau projet. Elle permet de décider :

- qui peut entrer dans le projet ;
- quel rôle chaque membre reçoit ;
- quels rôles personnalisés existent dans ce projet ;
- quelles permissions ces rôles accordent.

## Pourquoi c’est important

Les droits conditionnent une grande partie de l’expérience : création d’artefacts, exécution d’agents, gestion des membres, modifications de paramètres et approbations. Une lecture correcte des rôles évite de confondre un incident avec un simple manque d’autorisation.

## Qui peut utiliser cette page

- **consulter membres et rôles** : tout membre qui peut accéder à l’espace de travail ;
- **gérer les membres** : utilisateur disposant de `members:manage` ;
- **gérer les rôles personnalisés** : utilisateur disposant de `roles:manage`.

## Rôles standards observés

Chaque projet démarre avec des rôles intégrés protégés :

| Rôle | Usage type |
| --- | --- |
| Project Owner | Administration complète du projet |
| Project Manager | Pilotage opérationnel quotidien |
| Contributor | Contribution de contenu, usage des agents et des livrables selon permissions |
| Viewer | Consultation en lecture seule |
| Auditor | Consultation orientée audit et traçabilité |

Ces rôles intégrés sont protégés côté serveur et ne peuvent pas être supprimés depuis l’interface.

## Matrice rapide des rôles standards

Les rôles personnalisés peuvent étendre ou réduire ce schéma. Le tableau ci-dessous décrit le **comportement habituel** des rôles standards observés.

| Action courante | Project Owner | Project Manager | Contributor | Viewer | Auditor |
| --- | --- | --- | --- | --- | --- |
| Accéder au projet, à l’Espace de travail et aux écrans de lecture | Oui | Oui | Oui | Oui | Oui |
| Rechercher dans la connaissance, relire les PM Docs et le Journal IA | Oui | Oui | Oui | Oui | Oui |
| Lancer un run dans **Agents** | Oui | Oui | Oui | Non par défaut | Non par défaut |
| Modifier contenus de travail et brouillons de livrables | Oui | Oui | Oui | Non | Non |
| Gérer membres, rôles et principaux réglages projet | Oui | Non | Non | Non | Non |
| Relecture orientée audit et traçabilité | Oui | Oui | Oui | Lecture générale | Oui |

## Rôles personnalisés

Le produit supporte la création, l’édition et la suppression de **rôles personnalisés** au niveau projet.

### Permissions explicitement observées

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

## Ce que vous voyez sur la page

La page se divise en deux zones de travail :

1. **Roles & permissions**
   - revue des rôles intégrés ;
   - création de rôles personnalisés ;
   - inspection ou modification des permissions d’un rôle personnalisé ;
2. **Members**
   - ajout d’un membre par e-mail ;
   - attribution d’un rôle intégré ou personnalisé ;
   - changement de rôle ;
   - suppression d’un membre quand cela reste autorisé.

La page peut aussi afficher votre identité courante et, lorsqu’elle est exposée, l’entrée protégée du **créateur** du projet.

## Parcours recommandé

### Revoir les rôles avant d’ajouter un membre

1. ouvrez **Espace de travail** ;
2. sélectionnez l’onglet **Access control** ;
3. relisez les rôles existants ;
4. vérifiez si un rôle standard suffit ou si un rôle personnalisé est nécessaire.

### Créer un rôle personnalisé

1. ouvrez **Roles & permissions** ;
2. saisissez un **nom** ;
3. ajoutez éventuellement une **description** ;
4. créez le rôle ;
5. activez ou désactivez les permissions voulues ;
6. vérifiez les badges ou permissions affichés avant usage réel.

### Ajouter ou mettre à jour un membre

1. ouvrez **Members** ;
2. saisissez l’**e-mail** ;
3. choisissez le rôle souhaité ;
4. enregistrez ;
5. vérifiez que la ligne du membre reflète bien le rôle attendu.

### Changer le rôle d’un membre existant

1. repérez la ligne du membre dans **Members** ;
2. utilisez le sélecteur de rôle de cette ligne ;
3. choisissez le nouveau rôle ;
4. confirmez que la ligne affiche bien le rôle mis à jour.

### Retirer un membre

1. repérez la ligne du membre à retirer ;
2. utilisez l’action de suppression si elle est disponible ;
3. confirmez que le membre disparaît de la liste ;
4. si l’action reste bloquée, vérifiez d’abord qu’il ne s’agit ni de votre propre compte ni de l’entrée protégée du créateur.

## Garde-fous RBAC confirmés

L’interface et le backend appliquent plusieurs protections importantes :

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

## Résultat attendu

Si la configuration est correcte :

- la liste des membres est à jour ;
- les rôles personnalisés apparaissent dans les sélecteurs ;
- les permissions changent en fonction du rôle attribué ;
- les actions dangereuses restent bloquées par les garde-fous.

## Problèmes courants

### Impossible de supprimer un rôle personnalisé

Vérifiez d’abord si ce rôle est encore attribué à un membre. Tant qu’il est utilisé, la suppression reste bloquée.

### Impossible de modifier mon propre rôle

Ce comportement est volontaire pour éviter une perte d’accès accidentelle. Demandez à un autre administrateur projet d’effectuer la modification.

### L’onglet est visible mais tout est grisé

Vous êtes probablement en **lecture seule** sur cette surface. Vérifiez si votre rôle inclut `members:manage` ou `roles:manage`.

## Conseils

- utilisez **Project Owner** uniquement pour les vrais administrateurs projet ;
- gardez les rôles personnalisés ciblés et limités à un besoin précis ;
- relisez les permissions avant de déléguer la gestion des membres ;
- documentez les rôles personnalisés dans les pratiques d’équipe pour éviter les doublons.

## Suite

- [Projets et espace de travail](./projets-et-espace-de-travail.md)
- [Gouvernance, décisions et actions](./gouvernance-decisions-et-actions.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
