---
title: ProPM Agent User Guide
slug: /
description: ProPM Agent user documentation organized by business workflows, project administration, Azure administration and support.
---

# ProPM Agent User Guide

This documentation helps Azure customers use ProPM Agent without mixing daily usage, project administration, platform administration and support diagnostics.

![Application overview](/img/screenshots/localized/en/01-dashboard.jpg)

## Start with the right path

| Situation | Open first | Goal |
| --- | --- | --- |
| I am discovering ProPM Agent | [Audiences, roles and scopes](./publics-roles-et-perimetres.md) | Choose the right reading path |
| I need to sign in | [Getting started](./demarrage.md) | Access the app and understand empty states |
| I want project status | [Dashboard](./tableau-de-bord.md) | Read metrics, shortcuts and recent activity |
| I need to select or create a project | [Active project](./projet-actif-et-creation-projet.md) | Set the working context |
| I need documents or evidence | [Knowledge](./connaissance-documents-et-imports.md) | Upload, import and search evidence |
| I want to use AI | [Agents](./agents.md) | Choose an agent, run it and read results |
| I need to review a deliverable | [PM Documents](./documents-pm-et-artefacts.md) | Review, approve, download, publish or add to knowledge |
| I need to audit a run | [AI Log](./journal-ia.md) | Find the run and effective AI provider |
| I need to handle an alert | [Signals and notifications](./signaux-et-notifications.md) | Read, snooze, dismiss or draft from a signal |
| I need to approve an action | [Actions and approvals](./actions-et-approbations.md) | Understand approved vs executed |

## Paths by profile

| Profile | Main pages |
| --- | --- |
| Business user | [Getting started](./demarrage.md) → [Dashboard](./tableau-de-bord.md) → [Knowledge](./connaissance-documents-et-imports.md) → [Agents](./agents.md) → [PM Documents](./documents-pm-et-artefacts.md) |
| Project Manager | [Active project](./projet-actif-et-creation-projet.md) → [Signals](./signaux-et-notifications.md) → [Actions and approvals](./actions-et-approbations.md) → [AI Log](./journal-ia.md) |
| Project Owner | [Access control](./controle-acces-et-roles.md) → [Project workspace](./projets-et-espace-de-travail.md) → [Governance](./gouvernance-decisions-et-actions.md) → [Connectors](./connecteurs-jira-et-sharepoint.md) |
| PMO or leadership | [Portfolio](./portfolio.md) → [PM Documents](./documents-pm-et-artefacts.md) → [AI Log](./journal-ia.md) |
| Azure or tenant administrator | [Azure and Entra administration](./admin-deploiement-marketplace-et-entra.md) → [AI provider](./admin-fournisseur-ia.md) → [Platform integrations](./admin-integrations-plateforme.md) → [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md) |
| Support or audit | [Support, audit and diagnostics](./support-audit-et-diagnostic.md) → [AI Log](./journal-ia.md) → [Maintenance, support and FAQ](./maintenance-support-faq.md) |

## Workflow to remember

The common flow is **active project → knowledge → agent → structured output → artifact → PM Document → Download / Publish / Add to knowledge → AI Log**.

An agent conversation does not automatically create a final shared document. A PM Document must be reviewed, governed and published or added to knowledge according to project rights and policies.

## Essential concepts

| Term | Short definition |
| --- | --- |
| Active project | Current context for Knowledge, Agents, PM Documents, Signals and AI Log |
| All projects | Scope limited to projects already accessible by the same account |
| Project binding | Link that makes a platform integration usable in a project |
| Structured output | Agent run result, distinct from a final document |
| PM Document | Reviewed, versioned and governed project deliverable |
| Effective AI provider | Provider actually used by a run, visible in AI Log |
| Entitlement | Operational blocker related to license, role, policy, integration or health |

## Azure and platform administration

Azure, Entra, AI provider, connector, license and update details are separated from the end-user guide:

| Topic | Page |
| --- | --- |
| Deploy and finalize access | [Azure and Entra administration](./admin-deploiement-marketplace-et-entra.md) |
| Configure Save / Validate / Test / Activate | [AI provider](./admin-fournisseur-ia.md) |
| Define, validate and bind integrations | [Platform integrations](./admin-integrations-plateforme.md) |
| Manage seats, Marketplace plan and updates | [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md) |

## Support

For an incident, provide page URL, active project, time, attempted action, visible message and visible IDs such as Run ID or Trace ID. Never share secrets, keys, tokens or sensitive payloads.

- [Support, audit and diagnostics](./support-audit-et-diagnostic.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
- [Glossary](./glossaire.md)
