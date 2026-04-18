---
title: Connectors and Integrations
slug: /connecteurs-jira-et-sharepoint
description: Understand all visible connectors in ProPM Agent, their benefits, use cases, and how they integrate into the platform.
---

[Home](./index.md) · [Projects and workspace](./projets-et-espace-de-travail.md) · [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) · [Portfolio and technical administration](./portefeuille-et-administration-technique.md)

![Jira and SharePoint flow between platform, project and actions](/img/diagrams/fr/connecteurs-jira-sharepoint-workflow.svg)

## Objective

This page explains **all the connectors and ingestion providers visible in ProPM Agent**, their benefits, business usefulness, and how they are integrated into the product.

The goal is to answer three simple questions:

1. **What is this connector for?**
2. **Where can it be seen in ProPM Agent?**
3. **How do we move from a declared connector to a usable connector?**

## For a beginner: what is a connector in ProPM Agent?

A connector is a **controlled bridge** between ProPM Agent and another enterprise tool.

In the product, a connector can serve three different purposes:

| Type | What it does | Example |
| --- | --- | --- |
| **Execution connector** | send an action to an external tool | create a Jira ticket, send a Teams message, publish to SharePoint |
| **Ingestion provider** | import content into knowledge | import SharePoint documents, Confluence pages, Azure DevOps work items |
| **Artifact destination** | publish a reviewed deliverable to a target destination | publish a PM document to SharePoint |

### Simple rule to remember

- **Importing** is not the same as **publishing**.
- **Seeing** a connector is not the same as **being able to execute it**.
- A connector can exist **at the platform level**, without yet being **opened to a project**.

## How a connector integrates into ProPM Agent

Regardless of the connector, the logical path is always the same:

1. the administrator prepares it in **Platform Administration**;
2. they validate the configuration and connectivity;
3. the connector becomes available in **Project Integrations**;
4. **Governance Policies** define who can use it and at what level;
5. the team uses it in **Knowledge**, **PM Documents** or **Actions & approvals**;
6. the final trace remains visible in the **Project activity** and the **AI Log**.

## Where the user sees connectors in the product

| Surface | What you do there |
| --- | --- |
| **Platform Administration** | create the technical definition, provide authentication, validate and test |
| **Project Integrations** | check which connectors are actually open to the current project |
| **Knowledge** | import documents, pages, tickets, work items or other sources |
| **Governance Policies** | decide which roles can observe, propose or execute actions |
| **Actions & approvals** | create a real action, have it approved, then execute it |
| **AI Log / activity** | keep the trace of the flow and executions |

## Three levels not to be confused

| Level | What it means | Correct reading |
| --- | --- | --- |
| **Platform** | the connector exists technically | it is defined, authenticated and controlled globally |
| **Project** | the connector is open to a specific project | the project can see it as a potential option |
| **Governed usage** | the connector can be used in a real flow | the user has the right role, the right policy and a healthy execution option |

## Visible execution connectors

Execution connectors are used to **send an action** from ProPM Agent to an external tool.

### Full table of execution connectors

| Connector | Primary use | Main advantage | Typical integration in ProPM Agent |
| --- | --- | --- | --- |
| **Jira** | create or update tickets, comments and delivery tracking | very useful to formalize a blockage or a follow‑up action | prepared in **Platform Administration**, exposed in **Project Integrations**, used in **Actions & approvals** |
| **Azure DevOps** | create or update work items and track delivery | good choice for teams already organized around Boards and sprints | same logic as Jira, with project integration and action queue |
| **GitHub** | create issues or feed repository flows | useful to link a project topic to a technical backlog | visible as an execution connector, governed by project before use |
| **GitLab** | manage issues, merge requests and DevSecOps handoffs | useful for organizations already operating in GitLab | connected to the platform then used for governed actions |
| **ServiceNow** | create service, support or approval tickets | very useful when the project output must enter an ITSM workflow | linked to the project as a controlled output to service processes |
| **Monday.com** | sync plans and team boards | useful for teams that drive delivery in Monday.com | execution connector governed, available once the technical definition is ready |
| **Asana** | create or update tasks and owners | practical for tracking light and distributed actions | exposed to the project as an external action tracking tool |
| **ClickUp** | link lists, tasks and work status | useful to centralize team tasks in ClickUp | integrated as a governed action output |
| **Wrike** | drive tasks, validations and work plans | relevant for enterprise flows with coordination and approval | used as an execution connector once opened to the project |
| **Microsoft Teams** | send a notification or reminder in Teams | practical to quickly disseminate a decision or alert | appears in **Actions & approvals** for governed messages |
| **Slack** | send an update or approval request | useful for organizations that mainly collaborate in Slack | same logic as Teams with policy and permission control |
| **Outlook** | send an email or governed reminder | useful for formal communications to specific recipients | used in **Actions & approvals** with recipient control |
| **SharePoint publish** | publish a reviewed artifact or document to SharePoint | very useful to distribute a validated deliverable to a target library | linked to an artifact destination then driven by **Actions & approvals** |
| **Notion** | update note or work spaces | useful when the team keeps operational notes in Notion | connected as a governed output to feed a shared space |
| **Trello** | create or track cards | practical for teams that use a simple, lightweight backlog | integrated as an action output to Trello boards |
| **Webhook** | call a specific enterprise tool | very flexible for custom needs | used as a governed output to a third‑party or internal system |

## Visible ingestion providers

Ingestion providers are used to **bring content into ProPM Agent to enrich Knowledge**.

### Full table of ingestion providers

| Provider | Primary use | Main advantage | Typical integration in ProPM Agent |
| --- | --- | --- | --- |
| **SharePoint** | import documents, lists and Microsoft 365 evidence | very useful to retrieve already existing reference documents | prepared at the platform level then used in **Knowledge** and **Project Integrations** |
| **Confluence** | import wiki pages, notes and knowledge bases | practical to retrieve work documentation | feeds **Knowledge** with textual and structured content |
| **Jira** | import issues, comments and delivery history | brings operational context of the project and backlog | used as a project context source in **Knowledge** |
| **Azure DevOps** | import work items, sprint items and delivery artifacts | useful to link project steering and tool‑based delivery | enriches knowledge with Boards / sprint information |
| **Google Drive** | index shared files and folders | useful for Google Workspace organizations | allows integrating work files into knowledge |
| **OneDrive** | import personal or team files | practical to retrieve Microsoft 365 documents outside SharePoint | feeds knowledge from OneDrive spaces |
| **Box** | connect enterprise document repositories | useful in environments that standardize document management on Box | serves as an import source for knowledge |
| **Dropbox** | import shared folders and content | practical if the organization still stores content in Dropbox | provides document sources to knowledge |
| **Notion** | index operational spaces, pages and notes | very useful when project knowledge is spread across Notion pages | feeds knowledge with structured pages and notes |
| **Amazon S3** | import files or artifacts from buckets | useful to retrieve generated or archived deliverables in S3 | ingestion source for documents and artifacts |
| **Manual upload** | drop files directly into ProPM Agent | ideal to quickly start without relying on an external connector | the team uploads useful files themselves into knowledge |
| **Webhook** | receive content from a custom enterprise flow | very flexible when the source tool has no standard connector | serves as a custom entry to knowledge |

## Connectors present in multiple roles

Some names appear in several places in the product. That’s normal.

| Family | Can be used to import? | Can be used to execute an action? | Correct reading |
| --- | --- | --- | --- |
| **SharePoint** | yes | yes, via **SharePoint publish** | can read documents and publish a reviewed artifact |
| **Jira** | yes | yes | can import Jira context then create a governed ticket |
| **Azure DevOps** | yes | yes | can import work items then create or update a work item |
| **Notion** | yes | yes, depending on configuration | can read pages and also feed a shared space |
| **Webhook** | yes | yes | can serve as an entry or exit depending on the configured flow |

## Example 1 — SharePoint end‑to‑end

SharePoint is one of the best examples to understand the full logic.

### What SharePoint can do

- import documents into **Knowledge**;
- serve as an **artifact destination**;
- receive a governed publication via **SharePoint publish**.

### Step‑by‑step journey

1. the administrator prepares SharePoint in **Platform Administration**;
2. the project retrieves the SharePoint binding in **Project Integrations**;
3. the team imports existing documents into **Knowledge**;
4. a PM document is drafted or reviewed;
5. a governance policy decides who can propose or execute a publication;
6. the publication passes through **Actions & approvals** if validation is required;
7. the final trace remains visible in the project activity and the **AI Log**.

### Benefits of SharePoint in ProPM Agent

- reuses a document repository already familiar to teams;
- allows linking import, document review and final publication;
- well suited for formal validation flows.

## Example 2 — Jira end‑to‑end

### What Jira can do

- import issues and comments as context;
- receive a governed ticket from a decision or signal;
- materialize a blockage in an external tracking system.

### Step‑by‑step journey

1. Jira is prepared in **Platform Administration**;
2. it is opened to the project in **Project Integrations**;
3. the team consults a signal or decision;
4. they create a **Create Jira ticket** action;
5. governance decides if the action is direct or subject to approval;
6. the ticket is executed and traced in the product.

### Benefits of Jira in ProPM Agent

- transforms a project observation into a formal ticket;
- keeps a clear trace between signal, justification and created ticket;
- avoids untracked manual actions.

## Example 3 — Teams or Outlook for dissemination

### Use

- **Teams** is used to broadcast a notification in the collaborative tool;
- **Outlook** is used to send a more formal communication by email.

### Integration with ProPM Agent

1. the connector is prepared at the platform level;
2. the project sees it as an execution option;
3. a policy defines which roles can send a message;
4. the team prepares the message in **Actions & approvals**;
5. depending on risk, the action is approved then executed;
6. the message trace remains logged.

### Main advantage

The broadcast does not go out as a free message: it remains **governed, reviewed and traceable**.

## Example 4 — Webhook for a specific enterprise tool

### When to use

Use **Webhook** when the company wants to send or receive data from a tool that does not have a dedicated connector.

### Integration with ProPM Agent

- as **ingestion**, a webhook can push content to Knowledge;
- as **execution**, a webhook can send an action to a third‑party tool;
- in both cases, it is preferable to treat it as a **governed flow**, not a free output.

### Main advantage

The webhook provides flexibility without requiring the product to natively know all enterprise tools.

## How to recognize that a connector is actually ready

For a beginner user, distinguish three simple states:

| Situation | What it means |
| --- | --- |
| the connector is visible in **Platform Administration** | it exists technically |
| the connector is visible in **Project Integrations** | the project can potentially use it |
| the connector appears in **Actions & approvals** as a healthy and authorized option | the action can actually be proposed or executed according to policy |

## Why a visible connector may remain blocked

A connector can be visible but unusable if:

- its **health** state requires a check;
- the project does not have the correct **entitlement**;
- the project's **policy** blocks usage;
- the user does not have the correct **permission**;
- the project binding has not yet been opened;
- the expected **artifact destination** is not configured.

## Simple reading for a beginner user

| If you observe… | First check… |
| --- | --- |
| the connector exists at the platform level but does not appear in the project | **Project Integrations** |
| it appears in the project but no action is taken | **Governance Policies** and role permissions |
| the action is visible but no healthy option appears | connector health, project binding and compatible execution option |
| the import is offered but returns nothing | ingestion provider, actual accessible source and data freshness |
| the SharePoint publication has not yet succeeded | artifact destination, policy, approval and **SharePoint publish** connector |

## Recommended workflow for a client

1. identify the tools truly useful for the project;
2. prepare connectors in **Platform Administration**;
3. open only ready connectors to the project;
4. set **Governance Policies** by role;
5. test a first import or action;
6. verify the final trace in the **AI Log**.

## Takeaways

- ProPM Agent clearly distinguishes **import**, **publication** and **external action**;
- the same name, like **SharePoint** or **Jira**, can appear in multiple roles;
- the correct reading of a connector always rests on three questions: **is it defined? is it open to the project? is it authorized by governance?**

## Next

- [Governance, decisions and actions](./gouvernance-decisions-et-actions.md)
- [Projects and workspace](./projets-et-espace-de-travail.md)
- [Portfolio and technical administration](./portefeuille-et-administration-technique.md)
- [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md)
