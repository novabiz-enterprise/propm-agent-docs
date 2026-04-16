---
title: ProPM Agent User Guide
slug: /
description: Multilingual user and administrator documentation for ProPM Agent, covering AI-powered project execution, governed workflows, evidence-backed outputs, and Azure Marketplace deployment.
---

This documentation describes **only** the functions observed in the application, in the code, in the deployment configuration, and in the automated tests of ProPM Agent.

It is organized for two audiences:

- **business users** who work within a project;
- **technical administrators** who manage access, integrations, the AI provider, subscription, and monitoring.

![Application Overview](/img/screenshots/localized/en/01-dashboard.png)

## I am trying to solve a problem

| Symptom | Open First | Then |
| --- | --- | --- |
| I cannot log in | [Getting Started](./demarrage.md) | [Maintenance, Support, and FAQ](./maintenance-support-faq.md) to distinguish tenant, `redirect URI`, seat, or health status |
| No projects appear | [Getting Started](./demarrage.md) | [Projects and Workspace](./projets-et-espace-de-travail.md), then [Maintenance, Support, and FAQ](./maintenance-support-faq.md) if project addition or role remain unclear |
| An action is visible but blocked | [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md) | [Maintenance, Support, and FAQ](./maintenance-support-faq.md), then [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) if the blockage comes from a connector, binding, or entitlement |
| The AI provider does not seem operational | [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) | [Maintenance, Support, and FAQ](./maintenance-support-faq.md) and [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) to confirm the effective provider |

If you are already in an incident, open [Maintenance, Support, and FAQ](./maintenance-support-faq.md) directly instead of following the normal reading path.

## Recommended Reading Path

| If you are looking for… | Start Here |
| --- | --- |
| Deploy a new instance in Azure | [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) |
| Log in, verify authentication, and create your first project | [Getting Started](./demarrage.md) |
| Understand the interface, palette, notifications, and health | [Interface and Navigation](./interface-et-navigation.md) |
| Manage project context and workspace settings | [Projects and Workspace](./projets-et-espace-de-travail.md) |
| Administer members, roles, and project RBAC safeguards | [Access Control and Project Roles](./controle-acces-et-roles.md) |
| Import documents, search for evidence, and work with agents | [Knowledge and Agents](./connaissance-et-agents.md) |
| Read a structured output correctly, its evidence, and its freshness | [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Process signals, governance, and actions requiring approval | [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md) |
| Review an artifact, publish a PM Doc, and investigate in the AI Log | [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) |
| Compare projects, manage integrations, AI, and seats | [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) |
| Diagnose common incidents and consult support procedures | [Maintenance, Support, and FAQ](./maintenance-support-faq.md) |
| Clarify product terms | [Glossary](./glossaire.md) |

## Quick Path by Profile

| Profile | Pages to Open First |
| --- | --- |
| Business User / Contributor | [Getting Started](./demarrage.md) → [Interface and Navigation](./interface-et-navigation.md) → [Projects and Workspace](./projets-et-espace-de-travail.md) → [Knowledge and Agents](./connaissance-et-agents.md) → [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md) |
| Project Owner | [Getting Started](./demarrage.md) → [Projects and Workspace](./projets-et-espace-de-travail.md) → [Access Control and Project Roles](./controle-acces-et-roles.md) → [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md) → [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) |
| Technical Administrator | [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) → [Getting Started](./demarrage.md) → [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) → [Maintenance, Support, and FAQ](./maintenance-support-faq.md) |
| Support / Audit | [Getting Started](./demarrage.md) → [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md) → [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) → [Maintenance, Support, and FAQ](./maintenance-support-faq.md) → [Glossary](./glossaire.md) |

## Recommended End-to-End Path

In real usage, the most frequent flow is as follows:

1. deploy or retrieve the published URL;
2. log in with an authorized Microsoft Entra ID account;
3. create or select an **active project**;
4. load the project's **Knowledge**;
5. start an exchange in **Agents**;
6. review the **structured output**, its evidence, freshness, and confidence;
7. transform the result into an **artifact** or **PM Doc**;
8. verify lineage and technical details in the **AI Log**;
9. process **signals**, **governed actions**, and, if needed, **portfolio** comparison;
10. administer at the platform level only when the subject goes beyond the project.

## Labeling Convention

The interface may display English labels. In this documentation, the most useful equivalents are:

- **Workspace** = `Workspace`
- **Knowledge** = `Knowledge`
- **Reports & Artifacts** = `Reports` / `PM Docs` depending on context
- **AI Log** = `AI Log`
- **Platform Administration** = `Platform Administration`
- **Access Control** = `Access control`

## What ProPM Agent Covers

Based on verified behaviors, ProPM Agent organizes work around the **project context**:

1. you open or create a project;
2. you feed the **Knowledge**;
3. you query the **Agents**;
4. you review the **structured outputs**;
5. you transform these results into **Reports & artifacts**;
6. you verify **traceability** in the **AI Log**;
7. you process **signals** and **governed actions**;
8. administrators manage the technical layer in **Platform Administration**.

## Observed Functional Architecture

| Domain | What It Enables |
| --- | --- |
| Dashboard | View overall status, metrics, points of attention, and next steps |
| Projects | Create, open, and remember the project context |
| Workspace | Group project summary, operational transparency, signals, shortcuts, and project settings |
| Access Control | Manage members, standard roles, custom roles, and project permissions |
| Knowledge | Search, upload, import, review metadata, and track ingestion history |
| Agents | Choose an agent, start an exchange, use voice if the browser allows, and manage custom agents based on rights |
| Structured Outputs | Read summary, evidence, freshness, confidence, artifact proposals, and next steps |
| Reports & Artifacts | Review, compare, approve, publish, download, and reinject PM Docs into knowledge |
| AI Log | Inspect runs, activity, technical IDs, and AI runtime transparency |
| Portfolio Command Center | Compare multiple projects with signals, weights, thresholds, and saved cohorts |
| Platform Administration | Manage integrations, AI provider, subscription, seats, and platform activity |

## What Distinguishes the Application

The following are explicitly visible in the interface or tests:

- **structured outputs** with sections, evidence, freshness, confidence, and next steps to decide;
- **lineage** between a run, a structured output, an artifact, an artifact version, and a PM Doc;
- **proactive signals** for contradictions, freshness, blockages, and follow-ups;
- **governed actions** with proposal, approval, execution, and traceability;
- **clear separation** between technical definitions at the platform level and usage bindings at the project level;
- **AI runtime transparency** with effective provider, provider selected at deployment, and model family.

## Audiences and Responsibilities

| Profile | Primary Needs |
| --- | --- |
| Project Manager / PMO | Project context, agents, deliverables, signals, governance, and traceability |
| Contributor | Search in knowledge, content generation, output review, and run tracking |
| Project Owner | Project configuration, roles, document categories, project integrations, and governance policies |
| Technical Administrator / Subscription | Deployment, authentication, platform integrations, AI provider, subscription, seats, and monitoring |

## Screenshots

The application screenshots were generated from the observed environment. The deployment page additionally uses the provided Azure Portal screenshots to illustrate the installation.

## Support and Contact

Use the appropriate channel based on the nature of the request:

| Request Type | To be Submitted First |
| --- | --- |
| Technical Support | Deployment URL, affected project, exact symptom, approximate time, `Trace ID` if visible |
| Access, tenant, or identity issue | Expected tenant, account used, URL actually opened, Microsoft message, or screenshot |
| Commercial or subscription question | Account context, concerned plan, number of seats, or capacity need |

All these requests can be sent to the following contact point:

- **NovaBiz**
- 131 Continental Dr, Suite 305
- Newark, DE 19713 · United States
- [support@navabiz.pro](mailto:support@navabiz.pro)

## Next

- [Getting Started](./demarrage.md)
- [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Access Control and Project Roles](./controle-acces-et-roles.md)
- [Glossary](./glossaire.md)
