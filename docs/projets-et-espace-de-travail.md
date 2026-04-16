---
title: Projects and Workspace
slug: /projets-et-espace-de-travail
description: Create a project, change context, and use the workspace as a control center.
---

[Home](./index.md) · [Interface and Navigation](./interface-et-navigation.md) · [Access Control and Project Roles](./controle-acces-et-roles.md)

![Project Workspace](/img/screenshots/localized/en/03-workspace-overview.png)

## Objective

This page explains the difference between **Projects**, **Workspace**, and **Agents**, then details the project settings actually visible in the application.

## Three surfaces to distinguish

| Surface | When to use it |
| --- | --- |
| Projects | Create a project, open an existing project, change context |
| Workspace | Read the project summary, operational transparency, signals, and project-level settings |
| Agents | Start a live exchange with an agent and read the structured output of the run |

In practice, **Projects** is used to enter the right context, **Workspace** to configure it, and **Agents** to leverage it.

## Create a project

The observed form contains the following fields:

- **Project ID**;
- **Name**;
- **Description**;
- **Default data language**;
- **Additional data languages**.

Input recommendations:

- choose a readable and durable ID;
- do not confuse **project data language** and **interface language**;
- correctly define the scope before opening the knowledge or agents.

## Open and change project

A project can be opened from:

- the **Projects** page;
- the **project selector** in the top bar;
- the context recently memorized in the browser.

When you change projects, the following surfaces are recalibrated: **Knowledge**, **Agents**, **Reports & Artifacts**, **AI Log**, signals, and project settings.

## The workspace: project control center

The **Workspace** brings together in a single surface:

- the **project summary**;
- shortcuts to **Agents**, **Reports & Artifacts**, and **AI Log**;
- a view of **operational transparency**;
- project **signals**;
- project-level setting tabs.

In the observed environments, a **Voice** card may also link to the voice experience available in **Agents**.

## Operational transparency and readiness

The workspace is not only used to summarize the project. It also allows you to see if the project is ready to act:

- presence or absence of signals;
- recent activity;
- shortcuts to related drafts or deliverables;
- readiness of project integrations when they exist.

Use this area to understand **why** an action or import may be available, degraded, or blocked.

## Project-level tabs

| Tab | What it is for |
| --- | --- |
| Agent configuration | Configure agents for this project |
| Access control | Manage members, roles, and project-level permissions |
| Document categories | Adapt the project's document taxonomy and propagate it to the project's document surfaces |
| Governance policies | Define connectors, destinations, action policies, rendering profiles, and project-level notification preferences |
| Project integrations | Link ready and authorized integrations to the project |
| Actions & approvals | Manage action requests, validations, and governed execution |

## Agent configuration

The parameters confirmed at the project level are:

- `status`;
- `temperature`;
- `max tokens`.

### Visible constraints

- `temperature` is expected to be between **0** and **2**;
- `max tokens` must be an integer greater than or equal to **1**.

### Configuration history

The interface also exposes a history per version with at minimum:

- version number;
- status;
- temperature;
- max tokens;
- creation date;
- author;
- associated `trace ID`.

![Agent settings at project level](/img/screenshots/localized/en/12-agent-configuration.png)

## Access control

The **Access control** tab administers project members and roles. It supports:

- standard roles;
- custom roles;
- RBAC safeguards;
- read-only for profiles not authorized to modify.

See the dedicated page: [Access Control and Project Roles](./controle-acces-et-roles.md).

## Document categories

This tab is used to align document classification with the project. In practice, the project taxonomy influences the categories proposed during uploads and certain document selectors used later in the project surfaces.

### Concrete effect of an update

When the list of categories is successfully modified:

- the category selector for upload in **Knowledge** is updated;
- category selectors and filters in **PM Docs** are recalibrated when they use this shared taxonomy;
- the change remains limited to the **current project**.

### Practical examples

Keep a taxonomy short and stable. For example, instead of multiplying close variants, prefer a few coherent categories such as:

- project charter;
- risk register;
- status report;
- procurement plan;
- communication plan.

The goal is not to encode the document version in the category, but to maintain a reusable classification between **Knowledge** and **PM Docs**.

![Project document categories](/img/screenshots/localized/en/13-document-categories.png)

## Governance policies

This tab sets the rules that frame project governance decisions, validations, and behaviors. Use it before publishing a deliverable or authorizing a governed external action.

### Sub-surfaces visible in Governance policies

| Sub-surface | What it regulates |
| --- | --- |
| Execution connectors | Connector type, status, execution mode, environment, scopes, and context parameters |
| Artifact destinations | Target destination of an artifact, associated connector, active or default status |
| Action policies | Concerned role, target connector, action level (`observe`, `draft`, `propose`, `execute`), effect (`allow`, `require_approval`, `deny`), and authorized scopes |
| Rendering profiles | Rendering profiles and output format used during governed publications |
| Notification preferences | Channel, notification type, digest mode, severity threshold, and preference activation |

### Examples of useful settings

- require explicit approval before a publication to SharePoint;
- authorize certain connectors only for a specific role or action scope;
- prepare notification preferences of type `signal_digest`, `signal_alert`, or `manual_notification` on channels like `in_app`, `email`, `teams`, or `webhook`;
- choose a digest mode `real_time`, `daily`, `weekly`, or `manual` according to project needs.

### Credible scenario — sensitive project / governed distribution

For a project where any external distribution must be controlled, a coherent setting often looks like this:

1. **Artifact destinations**: active SharePoint destination with a known rendering profile;
2. **Action policies**: `allow` for `observe` and `draft`, but `require_approval` for `execute` on external publications and notifications;
3. **Execution connectors**: external connectors visible only for roles actually authorized;
4. **Notification preferences**: `signal_digest` on `daily` for the team, `signal_alert` only for the most sensitive cases;
5. **Project integrations**: bindings activated only for connectors already validated at the platform level.

This combination prevents a draft, digest, or action from appearing as directly distributable when the project still awaits human approval.

![Project governance policies](/img/screenshots/localized/en/14-governance-policies.png)

## Project integrations

This tab separates integrations **technically defined** at the platform level from those that are **actually usable** by the project.

### Explicitly observed blocking causes

A project integration or an import option can be blocked due to:

- entitlement;
- policy;
- permission;
- degraded health;
- platform definition missing or disabled;
- project binding disabled or not configured.

### How to interpret a binding blockage

| Visible cause | Practical reading | Recommended reflex |
| --- | --- | --- |
| `entitlement` | the plan or authorized capacity does not cover this connector or this usage family | check the subscription and capabilities in [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) |
| `policy` | project governance prohibits or limits this flow | review **Governance policies** before modifying the binding |
| `permission` | the connector exists but your role does not allow activating or using it | check the project role in [Access Control and Project Roles](./controle-acces-et-roles.md) |
| `health` | the platform definition exists but its readiness or health is degraded | open the platform administration to confirm the technical definition |
| definition missing or disabled | nothing is actually ready at the tenant level | first request platform setup or reactivation |
| project binding missing | the platform is ready but the project does not yet consume the integration | explicitly activate the binding on the project side |

If a blockage persists, then open **Platform Administration** to verify the technical definition, then return to the project to confirm the binding and readiness.

Important point: **Project integrations** then conditions what actually appears in **Actions & approvals**. If a connector is neither ready nor authorized here, it will not become an executable option later in the governed flow.

## Actions & approvals

This tab transforms a recommendation into a controlled operation. An action can be **visible** but not **executable** if:

- you do not have the right permission;
- the compatible connector is not ready;
- the project binding limits the action;
- the required approval has not yet occurred.

## Read-only or access denied

- **read-only**: the tab remains visible but saving is blocked;
- **access denied**: the route or action is not available for your account.

This difference is particularly important for **Access control**, **Project integrations**, and governance settings.

## Recommended journey after project creation

1. open the **Workspace**;
2. first check **members** and **roles** if the project is collaborative;
3. then adjust **document categories**;
4. review **Governance policies** before any external distribution;
5. link only **Project integrations** that are actually ready;
6. then load the **Knowledge**;
7. finally move to **Agents**, **Reports & Artifacts**, and **Actions & approvals**.

## Two useful configuration scenarios

### Scenario 1 — minimal new project

For a project that is starting, keep a simple order:

1. add essential members and verify their roles;
2. create a short document taxonomy in **Document categories**;
3. activate only integrations that are already validated and truly necessary;
4. prepare minimal governance, for example an internal digest and a default artifact destination;
5. then load the **Knowledge** before opening the agents.

This scenario avoids opening connectors or distribution rules too early that will not be used immediately.

### Scenario 2 — sensitive project / governed distribution

For a project exposed to external notifications or formal document publication:

1. limit roles with access to external connectors;
2. prepare a SharePoint or equivalent destination in **Artifact destinations**;
3. apply `require_approval` on action levels that can produce external distribution;
4. favor `signal_digest` for ongoing tracking and reserve instant alerts for critical cases;
5. only make bindings visible in **Project integrations** whose readiness and policy are already compliant.

This second scenario aligns signal reading, distribution, approval, and actual execution instead of letting the team treat each screen as an independent surface.

## Next

- [Access Control and Project Roles](./controle-acces-et-roles.md)
- [Knowledge and Agents](./connaissance-et-agents.md)
- [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)

## Next

- [Access Control and Project Roles](./controle-acces-et-roles.md)
- [Knowledge and Agents](./connaissance-et-agents.md)
- [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)
