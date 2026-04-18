---
title: Projects and workspace
slug: /projets-et-espace-de-travail
description: Create a project, delegate initial roles and use the workspace as a command center.
---

[Home](./index.md) · [Interface and navigation](./interface-et-navigation.md) · [Access control and project roles](./controle-acces-et-roles.md)

![Project workspace overview](/img/screenshots/localized/en/03-workspace-overview.png)

## Goal

This page explains the difference between **Projects**, **Workspace** and **Agents**, then details the project settings actually visible in the application.

## Three surfaces to distinguish

| Surface | When to use |
| --- | --- |
| Projects | Create a project, open an existing one, change context |
| Workspace | Read the project summary, operational transparency, signals and project‑level settings |
| Agents | Start a live exchange with an agent and read the run’s structured output |

In practice, **Projects** is used to enter the right context, **Workspace** to configure it, and **Agents** to exploit it.

## Create a project

The observed form contains the following fields:

- **Project ID**;
- **Name**;
- **Description**;
- **Default data language**;
- **Additional data languages**.

Input recommendations:

- choose a readable and durable ID;
- do not confuse **project data language** with **interface language**;
- correctly define the scope before opening knowledge or agents.

## Project creator: initial rights and delegation

At creation, the **project creator** starts with the role **Project Owner** and all observed project permissions. In practice, this is the person who can open the project, verify the initial configuration and then **delegate roles** to the rest of the team.

### Recommended delegation immediately after creation

1. open **Access control**;
2. add at least one other **Project Owner** or a trusted **Project Manager**;
3. create, if needed, targeted custom roles rather than multiplying owners;
4. then assign roles to contributors, readers and auditors;
5. finally review the **Governance Policies** and **Project Integrations** to align rights, connectors and validations.

### What the platform still protects

- the creator’s entry remains protected;
- the creator’s role remains fixed in the observed interface;
- delegation is done by assigning additional roles, not by removing creator protection;
- for detailed RBAC, see [Access control and project roles](./controle-acces-et-roles.md).

## Open and change project

A project can be opened from:

- the **Projects** page;
- the top‑bar **project selector**;
- the recently remembered context in the browser.

When you change project, the following surfaces align: **Knowledge**, **Agents**, **PM Documents / Reports & artifacts**, **AI Journal**, signals and project settings.

## The workspace: project command center

The **Workspace** brings together in a single surface:

- the **project summary**;
- shortcuts to **Agents**, **PM Documents** and **AI Journal**;
- a view of **operational transparency**;
- the project’s **signals**;
- project‑level setting tabs.

This French documentation no longer presents a dedicated **voice** map in the **Workspace**. When voice input still exists in some environments, it is done in **Agents**, not as a separate entry point here.

## Operational transparency and preparation

The workspace is not only for summarizing the project. It also lets you see if the project is ready to act:

- presence or absence of signals;
- recent activity;
- shortcuts to related drafts or deliverables;
- preparation of project integrations when they exist;
- exposure of the actual AI provider without opening tenant configuration.

Use this area to understand **why** an action or import may be available, confirmed or blocked.

## Project‑level tabs

| Tab | Purpose |
| --- | --- |
| Agent configuration | Set agents for this project |
| Access control | Manage members, roles and project‑level permissions |
| Document categories | Adapt the project’s document taxonomy and propagate it to the project’s document surfaces |
| Governance policies | Define connectors, destinations, action policies, rendering profiles and project‑level notification preferences |
| Project integrations | Link ready and authorized integrations to the project |
| Actions & approvals | Manage action requests, validations and governed execution |

## Agent configuration

Project‑level parameters confirmed are:

- `status`;
- `temperature`;
- `max tokens`.

### Visible constraints

- `temperature` is expected between **0** and **2**;
- `max tokens` must be an integer ≥ **1**.

### Configuration history

The interface also exposes a history by version with at least:

- version number;
- status;
- temperature;
- max tokens;
- creation date;
- author;
- associated `Trace ID`.

![Agent settings at project level](/img/screenshots/localized/en/12-agent-configuration.png)

## Access control

The **Access control** tab administers project members and roles. It supports:

- standard roles;
- custom roles;
- RBAC safeguards;
- read‑only for profiles not authorized to modify.

See the dedicated page: [Access control and project roles](./controle-acces-et-roles.md).

## Document categories

This tab aligns the document classification with the project. In practice, the project taxonomy influences the categories offered during uploads and some document selectors used later in project surfaces.

### Concrete effect of an update

When the category list is successfully updated:

- the upload category selector in **Knowledge** is updated;
- category selectors and filters in **PM Documents** align when they use this shared taxonomy;
- the change remains limited to the **current project**.

### Practical examples

Keep a short and stable taxonomy. For example, instead of multiplying close variants, prefer a few coherent categories such as:

- project charter;
- risk register;
- status report;
- procurement plan;
- communication plan.

The goal is not to encode the document version in the category, but to keep a reusable classification between **Knowledge** and **PM Documents**.

![Project document categories](/img/screenshots/localized/en/13-document-categories.png)

## Governance policies

This tab sets the rules that frame decisions, validations and governance behavior of the project. Use it before publishing a deliverable or authorizing an external governed action.

### Visible sub‑surfaces in Governance policies

| Sub‑surface | What it regulates |
| --- | --- |
| Execution connectors | Connector type, status, execution mode, environment, scopes and context parameters |
| Artifact destinations | Target destination of an artifact, associated connector, active or default status |
| Action policies | Concerned role, targeted connector, action level (`observe`, `draft`, `propose`, `execute`), effect (`allow`, `require_approval`, `deny`) and authorized scopes |
| Rendering profiles | Rendering profiles and output format used during governed publications |
| Notification preferences | Channel, notification type, digest mode, severity threshold and preference activation |

### Useful settings examples

- require explicit approval before publishing to **SharePoint**;
- allow creation of **Jira** tickets only at `propose` level for certain roles;
- prepare `signal_digest` preferences in `in_app` for internal tracking;
- leave external notifications `email`, `teams` or `webhook` in an approved path only when the connector is healthy;
- choose separate rendering profiles for **DOCX** and **XLSX** publications.

### Credible scenario — sensitive project / governed distribution

For a project where all external distribution must be controlled, a coherent setting often looks like this:

1. **Artifact destinations**: active SharePoint destination with known rendering profile;
2. **Action policies**: `allow` for `observe` and `draft`, but `require_approval` for `execute` on publications and external notifications;
3. **Execution connectors**: external connectors visible only to truly authorized roles;
4. **Notification preferences**: `signal_digest` in `daily` for the team, `signal_alert` only for the most sensitive cases;
5. **Project integrations**: bindings enabled only for connectors already validated at platform level.

This combination prevents a draft, digest or action from appearing directly distributable while the project still awaits human approval.

![Project governance policies](/img/screenshots/localized/en/14-governance-policies.png)

## Project integrations

This tab separates **technically defined** platform integrations from those that are **actually usable** by the project.

### Explicitly observed blocking causes

A project integration or import option may be blocked due to:

- entitlement;
- policy;
- permission;
- health status to check;
- missing or disabled platform definition;
- disabled or unconfigured project binding.

### Interpreting a binding block

| Visible cause | Practical reading | Recommended reflex |
| --- | --- | --- |
| `entitlement` | the plan or capacity authorized does not cover this connector or usage family | check the subscription and capacities in [Portfolio and technical administration](./portefeuille-et-administration-technique.md) |
| `policy` | project governance forbids or limits this flow | reread **Governance Policies** before changing the binding |
| `permission` | the connector exists but your role does not allow activation or use | check the project role in [Access control and project roles](./controle-acces-et-roles.md) |
| `health` | the platform definition exists but its preparation or availability requires verification | open **Platform Administration** to confirm the technical definition |
| missing or disabled definition | nothing is actually ready at tenant level | first request setup or re‑activation from the platform |
| missing project binding | the platform is ready but the project has not yet consumed the integration | explicitly enable the binding on the project side |

If a block persists, open **Platform Administration** to verify the technical definition, then return to the project to confirm binding and readiness.

### Jira, SharePoint and connector chain

![Jira and SharePoint flow between platform, project and actions](/img/diagrams/en/connecteurs-jira-sharepoint-workflow.svg)

Keep this logic simple:

1. **Platform integrations** define the connector or ingestion provider;
2. **Project integrations** expose only the approved and ready binding;
3. **Governance policies** decide what each role can observe, prepare, propose or execute;
4. **Actions & approvals** then apply these rules during the real request;
5. **PM Documents** and **AI Journal** keep the flow trace.

See the dedicated page: [Connectors and integrations](./connecteurs-jira-et-sharepoint).

## Actions & approvals

This tab turns a recommendation into a controlled operation. An action can be **visible** but not **executable** if:

- you do not have the right right;
- the compatible connector is not ready;
- the project binding limits the action;
- required approval has not yet occurred.

## Read‑only or access denied

- **read‑only**: the tab remains visible but saving is blocked;
- **access denied**: the route or action is not available for your account.

This difference is especially important for **Access control**, **Project integrations** and governance settings.

## Recommended path after project creation

1. open the **Workspace**;
2. first verify the **creator**, **members** and **roles** if the project is collaborative;
3. then adjust **document categories**;
4. review **Governance Policies** before any external distribution;
5. link only the truly ready **Project integrations**;
6. then load **Knowledge**;
7. finally move to **Agents**, **PM Documents** and **Actions & approvals**.

## Two useful configuration scenarios

### Scenario 1 — minimal new project

For a project that starts, keep a simple order:

1. add essential members and verify their roles;
2. create a short document taxonomy in **Document categories**;
3. enable only already validated and truly necessary integrations;
4. prepare minimal governance, e.g., an internal digest and a default artifact destination;
5. load **Knowledge** before opening agents.

This scenario avoids opening connectors or rules too early that will not be used immediately.

### Scenario 2 — sensitive project / governed distribution

For a project exposed to external notifications or formal document publication:

1. limit roles that can access external connectors;
2. prepare a SharePoint or equivalent destination in **Artifact destinations**;
3. apply `require_approval` on action levels that can produce external distribution;
4. prioritize `signal_digest` for current tracking and reserve instant alerts for critical cases;
5. only make visible in **Project integrations** the bindings whose preparation and policy are already compliant.

This second scenario aligns signal reading, distribution, approval and real execution instead of letting the team treat each screen as an independent surface.

## Next

- [Access control and project roles](./controle-acces-et-roles.md)
- [Knowledge and agents](./connaissance-et-agents.md)
- [Governance, decisions and actions](./gouvernance-decisions-et-actions.md)
- [Connectors and integrations](./connecteurs-jira-et-sharepoint)
- [Portfolio and technical administration](./portefeuille-et-administration-technique.md)
