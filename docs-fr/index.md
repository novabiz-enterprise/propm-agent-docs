---
title: Guide utilisateur ProPM Agent
slug: /
description: Documentation utilisateur française pour ProPM Agent, organisée par parcours métier, administration projet, administration Azure et support.
---

# Guide utilisateur ProPM Agent

Cette documentation aide les clients Azure à utiliser ProPM Agent sans confusion entre usage quotidien, administration projet, administration plateforme et diagnostic support.

![Vue d’ensemble de l’application](/img/screenshots/localized/fr/01-dashboard.jpg)

## Export PDF

<a className="button button--primary" href="/propm-agent-docs/pdf/propm-agent-docs-fr.pdf" target="_blank" rel="noopener noreferrer">Télécharger le PDF français</a>

## Commencer par le bon parcours

| Votre situation | Ouvrez d’abord | Objectif |
| --- | --- | --- |
| Je découvre ProPM Agent | [Publics, rôles et périmètres](./publics-roles-et-perimetres.md) | Choisir le bon parcours de lecture |
| Je dois me connecter | [Démarrage](./demarrage.md) | Accéder à l’application et comprendre les états vides |
| Je veux voir l’état du projet | [Tableau de bord](./tableau-de-bord.md) | Lire les métriques, raccourcis et activités récentes |
| Je dois choisir ou créer un projet | [Projet actif et création de projet](./projet-actif-et-creation-projet.md) | Fixer le contexte de travail |
| Je veux ajouter ou retrouver des documents | [Connaissance, documents et imports](./connaissance-documents-et-imports.md) | Téléverser, importer et rechercher des preuves |
| Je veux interroger l’IA | [Agents](./agents.md) | Choisir un agent, lancer un run et lire les résultats |
| Je dois relire un livrable | [Documents PM et artefacts](./documents-pm-et-artefacts.md) | Relire, approuver, télécharger, publier ou ajouter à la connaissance |
| Je dois auditer une exécution | [Journal IA](./journal-ia.md) | Retrouver le run et le fournisseur IA effectif |
| Je dois traiter une alerte | [Signaux et notifications](./signaux-et-notifications.md) | Lire, reporter, fermer ou transformer un signal |
| Je dois proposer ou approuver une action | [Actions et approbations](./actions-et-approbations.md) | Comprendre le workflow `approved` puis `executed` |

## Parcours par profil

| Profil | Pages principales |
| --- | --- |
| Utilisateur métier | [Démarrage](./demarrage.md) → [Tableau de bord](./tableau-de-bord.md) → [Connaissance](./connaissance-documents-et-imports.md) → [Agents](./agents.md) → [Documents PM](./documents-pm-et-artefacts.md) |
| Project Manager | [Projet actif](./projet-actif-et-creation-projet.md) → [Signaux](./signaux-et-notifications.md) → [Actions et approbations](./actions-et-approbations.md) → [Journal IA](./journal-ia.md) |
| Propriétaire de projet | [Contrôle d’accès et rôles](./controle-acces-et-roles.md) → [Projets et espace de travail](./projets-et-espace-de-travail.md) → [Gouvernance](./gouvernance-decisions-et-actions.md) → [Connecteurs](./connecteurs-jira-et-sharepoint.md) |
| PMO ou direction | [Portfolio](./portfolio.md) → [Documents PM](./documents-pm-et-artefacts.md) → [Journal IA](./journal-ia.md) |
| Administrateur Azure ou tenant | [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md) → [Fournisseur IA](./admin-fournisseur-ia.md) → [Intégrations plateforme](./admin-integrations-plateforme.md) → [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |
| Support ou audit | [Support, audit et diagnostic](./support-audit-et-diagnostic.md) → [Journal IA](./journal-ia.md) → [Maintenance, support et FAQ](./maintenance-support-faq.md) |

## Chaîne de travail à retenir

Le flux courant est : **projet actif → connaissance → agent → sortie structurée → artefact → Document PM → Download / Publish / Add to knowledge → Journal IA**.

Une conversation d’agent ne crée pas automatiquement un document final partagé. Un Document PM doit être relu, gouverné et publié ou ajouté à la connaissance selon les droits et politiques du projet.

## Concepts essentiels

| Terme | Définition courte |
| --- | --- |
| Projet actif | Projet actuellement appliqué aux pages Knowledge, Agents, Documents PM, Signaux et Journal IA |
| `All projects` | Portée limitée aux projets déjà accessibles par le même compte |
| Rattachement projet | Lien qui rend une intégration plateforme utilisable dans un projet donné |
| Sortie structurée | Résultat d’un run d’agent, distinct d’un document final |
| Document PM | Livrable projet relu, versionné et gouverné |
| Fournisseur IA effectif | Fournisseur réellement utilisé par un run, visible dans le Journal IA |
| Entitlement | Blocage opérationnel lié à licence, rôle, politique, intégration ou santé |

## Administration Azure et plateforme

Les détails Azure, Entra, fournisseur IA, connecteurs, licences et mises à jour sont séparés du guide utilisateur final :

| Sujet | Page |
| --- | --- |
| Déployer et finaliser l’accès | [Administration Azure et Entra](./admin-deploiement-marketplace-et-entra.md) |
| Configurer Save / Validate / Test / Activate | [Fournisseur IA](./admin-fournisseur-ia.md) |
| Définir, valider et rattacher les intégrations | [Intégrations plateforme](./admin-integrations-plateforme.md) |
| Gérer seats, plan Marketplace et updates | [Licences, plans et mises à jour](./admin-licences-plans-et-mises-a-jour.md) |

## Support

Pour un incident, fournissez l’URL, le projet actif, l’heure, l’action tentée, le message affiché et les identifiants visibles comme Run ID ou Trace ID. Ne partagez jamais de secret, clé, jeton ou payload sensible.

- [Support, audit et diagnostic](./support-audit-et-diagnostic.md)
- [Maintenance, support et FAQ](./maintenance-support-faq.md)
- [Glossaire](./glossaire.md)
