---
title: ProPM Agent User Guide
slug: /
description: "French user documentation for ProPM Agent, covering AI-assisted project execution, governance, connectors, traceability and Azure Marketplace deployment."
---

> **Highly recommended reading**
>
> To successfully adopt ProPM Agent in the organization and fully leverage the application, it is strongly recommended to read this guide from the start of the project, then refer to it during deployment, connector setup, governance and daily operation.

This documentation describes **only** the functions observed in the application, in the code, in the deployment configuration and in the automated tests of ProPM Agent.

It is organized for two audiences:

- **Business users** who work on a project;
- **Technical administrators** who manage access, integrations, AI provider, subscription and supervision.

![Overview of the application](/img/screenshots/localized/en/01-dashboard.png)

## I want to find the right page quickly

| Observed situation | First open | Then |
| --- | --- | --- |
| I cannot log in | [Getting started](./demarrage.md) | [Maintenance, support and FAQ](./maintenance-support-faq.md) to distinguish tenant, `redirect URI`, seat or health status |
| No projects appear | [Getting started](./demarrage.md) | [Projects and workspace](./projets-et-espace-de-travail.md), then [Maintenance, support and FAQ](./maintenance-support-faq.md) if adding to the project or role remains doubtful |
| An action is visible but blocked | [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) | [Connectors and integrations](./connecteurs-jira-et-sharepoint), then [Portfolio and technical administration](./portefeuille-et-administration-technique.md) if the block comes from a connector, a binding or an entitlement |
| The AI provider does not seem operational | [Portfolio and technical administration](./portefeuille-et-administration-technique.md) | [Maintenance, support and FAQ](./maintenance-support-faq.md) and [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md) to confirm the actual provider |

If you are looking for a verification procedure or an operational reference, open [Maintenance, support and FAQ](./maintenance-support-faq.md).

## Recommended reading path

| If you’re looking for… | Start here |
| --- | --- |
| Deploy a new instance in Azure | [Azure Marketplace deployment](./deploiement-azure-marketplace.md) |
| Log in, verify authentication and create your first project | [Getting started](./demarrage.md) |
| Understand the interface, palette, notifications and health | [Interface and navigation](./interface-et-navigation.md) |
| Manage project context and workspace settings | [Projects and workspace](./projets-et-espace-de-travail.md) |
| Administer members, roles, delegations and project RBAC guardrails | [Access control and project roles](./controle-acces-et-roles.md) |
| Import documents, search evidence and work with agents | [Knowledge and agents](./connaissance-et-agents.md) |
| Read a structured output correctly, its evidence and freshness | [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Handle signals, governance and actions requiring approval | [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) |
| Review an artifact, publish a PM Document and investigate in the AI Log | [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md) |
| Understand supported connectors and integrations | [Connectors and integrations](./connecteurs-jira-et-sharepoint) |
| Compare projects, manage integrations, AI and seats | [Portfolio and technical administration](./portefeuille-et-administration-technique.md) |
| Consult support and verification procedures | [Maintenance, support and FAQ](./maintenance-support-faq.md) |
| Clarify product terms | [Glossary](./glossaire.md) |

## Quick path by profile

| Profile | Pages to open first |
| --- | --- |
| Business user / contributor | [Getting started](./demarrage.md) → [Interface and navigation](./interface-et-navigation.md) → [Projects and workspace](./projets-et-espace-de-travail.md) → [Knowledge and agents](./connaissance-et-agents.md) → [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Project owner | [Getting started](./demarrage.md) → [Projects and workspace](./projets-et-espace-de-travail.md) → [Access control and project roles](./controle-acces-et-roles.md) → [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) → [Connectors and integrations](./connecteurs-jira-et-sharepoint) → [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md) |
| Technical administrator | [Azure Marketplace deployment](./deploiement-azure-marketplace.md) → [Getting started](./demarrage.md) → [Portfolio and technical administration](./portefeuille-et-administration-technique.md) → [Connectors and integrations](./connecteurs-jira-et-sharepoint) → [Maintenance, support and FAQ](./maintenance-support-faq.md) |
| Support / audit | [Getting started](./demarrage.md) → [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md) → [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md) → [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) → [Glossary](./glossaire.md) |

## Recommended end‑to‑end path

In real usage, the most frequent flow is:

1. deploy or retrieve the published URL;
2. log in with an authorized Microsoft Entra ID account;
3. create or select an **active project**;
4. let the **project creator** delegate the first useful roles;
5. load the **Knowledge** of the project;
6. launch an exchange in **Agents**;
7. review the **structured output**, its evidence, freshness and confidence;
8. transform the result into an **artifact** or a **PM Document**, then review before downloading **DOCX / XLSX**, publishing or adding to knowledge;
9. handle **proactive signals**, **Actions & approvals** and, if needed, external integration flows;
10. administer at the platform level only when the subject goes beyond the project.

## Label convention

When the platform exposes a French translation, this documentation prefers this label:

- **Workspace**;
- **Knowledge**;
- **PM Documents**;
- **AI Log**;
- **Access control**;
- **Governance policies**;
- **Project integrations**;
- **Platform integrations**;
- **AI provider settings**;
- **Actions & approvals**.

When an English label is useful to remove ambiguity, it is cited occasionally in code, e.g. `Trace ID` or `OpenAI-compatible`.

## What ProPM Agent covers

Based on verified behaviours, ProPM Agent organizes work around the **project context**:

1. you open or create a project;
2. you feed the **Knowledge**;
3. you query the **Agents**;
4. you review the **structured outputs**;
5. you transform those results into **PM Documents** and artifacts;
6. you verify **traceability** in the **AI Log**;
7. you handle **signals**, **digests**, **drafts** and governed **actions**;
8. you use **connectors** and **integrations** only when they are validated and bound to the project;
9. administrators steer the technical layer in **Platform Administration**.

## Observed functional architecture

| Domain | What it allows |
| --- | --- |
| Dashboard | See overall status, metrics, points of attention and next steps |
| Projects | Create, open and remember project context |
| Workspace | Group project summary, operational transparency, signals, shortcuts and project settings |
| Access control | Manage members, standard roles, custom roles and project permissions |
| Knowledge | Search, upload, import, re‑read metadata and track ingestion history |
| Agents | Choose an agent, launch an exchange, use voice input in **Agents** if the environment still exposes it, and manage custom agents according to rights |
| Structured outputs | Read summary, evidence, freshness, confidence, artifact proposals and next steps |
| PM Documents / Reports & artifacts | Review, compare, approve, publish, download and reinject deliverables into knowledge |
| AI Log | Inspect runs, activity, technical IDs and AI runtime transparency |
| Connectors and integrations | Separate platform definitions, project bindings, action policies and governed execution |
| Portfolio command centre | Compare multiple projects with signals, weights, thresholds and saved cohorts |
| Platform Administration | Manage integrations, AI provider, subscription, seats and platform activity |

## What distinguishes the application

The following elements are explicitly visible in the interface, seeded data or tests:

- **structured outputs** with sections, evidence, freshness, confidence and follow‑up decisions;
- **lineage** between a run, a structured output, an artifact, an artifact version and a PM Document;
- **proactive signals** for contradictions, freshness, blockages, follow‑ups and certain portfolio pressures;
- **governed documentary chain** from an agent result to **DOCX / XLSX** downloads, publication and reinjection into knowledge;
- **governed connectors** separated between **Platform integrations**, **Project integrations** and **Actions & approvals**;
- **AI runtime transparency** with actual provider, provider selected at deployment and model family.

## Audiences and responsibilities

| Profile | Main needs |
| --- | --- |
| Project manager / PMO | Project context, agents, deliverables, signals, governance and traceability |
| Contributor | Search in knowledge, generate content, review outputs and track runs |
| Project owner | Project settings, role delegation, document categories, project integrations and governance policies |
| Technical administrator / subscription | Deployment, authentication, platform integrations, AI provider, subscription, seats and supervision |

## Screenshots and diagrams

Screenshots of the application were generated on the observed environment. When some available screenshots mainly showed a loading state or incomplete demo data, this French version also favours **explanatory diagrams** to keep a usable reading before final translation and publication.

## Support and contact

Use the appropriate channel depending on the request type:

| Request type | Priority to forward |
| --- | --- |
| Technical support | Deployment URL, project in question, observed situation, approximate time, `Trace ID` if visible |
| Access, tenant or identity question | Expected tenant, account used, actual URL opened, Microsoft message or screenshot |
| Commercial or subscription question | Account context, plan in question, number of seats or capacity need |

All these requests can be sent to the following contact point:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · United States
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Next

- [Getting started](./demarrage.md)
- [Projects and workspace](./projets-et-espace-de-travail.md)
- [Connectors and integrations](./connecteurs-jira-et-sharepoint)
- [Glossary](./glossaire.md)
