---
title: Maintenance, support et FAQ
slug: /maintenance-support-faq
description: Réponses courtes aux incidents fréquents et orientation vers les pages support, audit ou administration.
---

[Accueil](./index.md) · Maintenance, support et FAQ

![Journal IA et repères d’investigation](/img/screenshots/localized/fr/09-ai-log-runs.jpg)

## Objectif

Cette FAQ aide à reconnaître les symptômes courants et à ouvrir la bonne page sans exposer de détails internes ou sensibles.

## Pour qui

| Profil | Usage de cette page |
| --- | --- |
| Utilisateur métier | Comprendre quoi vérifier avant de demander de l’aide |
| Project Owner | Distinguer rôle, projet, politique et intégration |
| Administrateur tenant | Identifier quand passer aux pages admin |
| Support | Collecter les informations utiles à l’investigation |

## Avant de commencer

- Vérifiez le projet actif.
- Notez l’heure approximative du problème.
- Conservez le message affiché et une capture masquée si nécessaire.
- Ne partagez jamais de secret, clé, jeton ou payload sensible.

## Coordonnées NovaBiz

Pour joindre le support NovaBiz :

- Email : [support@navabiz.pro](mailto:support@navabiz.pro)
- Adresse : NovaBiz, 131 Continental Dr, Suite 305, Newark, DE 19713, United States

## Symptôme vers première action

| Symptôme | Première action | Page utile |
| --- | --- | --- |
| Connexion impossible | Vérifier compte, tenant, consentement et URL | [Démarrage](./demarrage.md) |
| Aucun projet visible | Vérifier appartenance au projet et rôle | [Projet actif](./projet-actif-et-creation-projet.md) |
| Page vide | Vérifier projet actif, filtre et rôle | [Interface et navigation](./interface-et-navigation.md) |
| Document non indexé | Vérifier statut `Indexed`, `Ingesting` ou `Failed` | [Connaissance](./connaissance-documents-et-imports.md) |
| Agent sans réponse | Vérifier si un run existe dans le Journal IA | [Journal IA](./journal-ia.md) |
| Réponse incomplète | Vérifier preuves, fraîcheur et informations manquantes | [Sorties structurées](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Fournisseur IA non opérationnel | Vérifier fournisseur effectif et page admin IA | [Fournisseur IA](./admin-fournisseur-ia.md) |
| Connecteur bloqué | Vérifier plateforme, projet, politique, santé | [Connecteurs](./connecteurs-jira-et-sharepoint.md) |
| Action en attente | Vérifier approbation, politique et exécution | [Actions et approbations](./actions-et-approbations.md) |
| Licence indisponible | Vérifier seats restants et utilisateur licencié | [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |

## FAQ accès et projet

### La connexion Microsoft réussit mais aucun projet n’apparaît

Le compte est authentifié mais n’est probablement pas encore membre d’un projet, ou le projet actif n’est pas sélectionné. Demandez au Project Owner de vérifier votre présence dans [Contrôle d’accès et rôles](./controle-acces-et-roles.md).

### Une page est visible mais tous les boutons sont grisés

Vous êtes probablement en lecture seule. Ce n’est pas une panne : le rôle permet de consulter mais pas de modifier. Vérifiez le rôle attendu avec le Project Owner.

### Le projet actif change-t-il les résultats ?

Oui. Connaissance, Agents, Documents PM, Signaux et Journal IA dépendent du projet actif. Vérifiez-le dans la barre supérieure avant toute enquête.

## FAQ connaissance et agents

### Un document est visible mais pas retrouvable dans la recherche

Il peut encore être en traitement. Attendez le statut **Indexed** avant de l’utiliser comme preuve. Si le statut passe **Failed**, consultez [Connaissance, documents et imports](./connaissance-documents-et-imports.md).

### Un agent répond sans preuve visible

Traitez la réponse comme exploratoire. Avant diffusion ou décision, vérifiez les preuves, la fraîcheur et les informations manquantes dans [Sorties structurées, preuves et fraîcheur](./sorties-contextuelles-preuves-et-fraicheur.md).

### L’historique de chat a disparu

La continuité de chat peut être locale au navigateur. Elle n’est pas une archive centrale partagée. Les Documents PM, artefacts, actions et runs tracés restent côté plateforme selon vos droits.

## FAQ Documents PM et actions

### Quelle différence entre Download, Publish et Add to knowledge ?

| Action | Effet |
| --- | --- |
| Download | Télécharge une copie locale |
| Publish | Publie vers une destination gouvernée |
| Add to knowledge | Réinjecte un document relu dans la connaissance projet |

### Une action est approved mais rien ne s’est passé

`approved` signifie que l’action est autorisée. `executed` signifie que l’action a réellement été lancée. Vérifiez l’état dans [Actions et approbations](./actions-et-approbations.md).

### Un connecteur est visible mais inutilisable

Un connecteur doit être défini côté plateforme, rattaché au projet, autorisé par la politique, sain, et utilisable par votre rôle. Consultez [Connecteurs et intégrations](./connecteurs-jira-et-sharepoint.md).

## FAQ Portfolio

### Aucun outlier n’apparaît

Cela peut signifier que le seuil global est élevé, que la sélection est trop restrictive, que les preuves manquent ou que la situation est réellement stable. Ouvrez [Portfolio](./portfolio.md) et vérifiez le snapshot, les projets sélectionnés et le profil de signaux.

### Un signal est indisponible

Indisponible ne veut pas dire sans risque. Cela signale souvent un manque de preuve ou de données exploitables.

## Support et audit avancé

Pour une enquête, fournissez uniquement les informations utiles : URL, projet actif, heure, action tentée, message affiché, Run ID, Trace ID ou Action ID si visibles. Les identifiants comme `Trace ID`, `Context snapshot ID` ou `Structured output ID` sont des repères de support, pas des informations nécessaires à tous les utilisateurs.

Pour le détail, ouvrez [Support, audit et diagnostic](./support-audit-et-diagnostic.md).

## Suite

- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
- [Journal IA](./journal-ia.md)
- [Glossaire](./glossaire.md)
