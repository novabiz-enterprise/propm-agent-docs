---
title: Connectors and Integrations
slug: /connecteurs-jira-et-sharepoint
description: Understand all visible connectors in ProPM Agent, their benefits, use cases, and how they integrate into the platform.
---

[Home](./index.md) · [Projects and workspace](./projets-et-espace-de-travail.md) · [Governance, decisions and actions](./gouvernance-decisions-et-actions.md) · [Portfolio and technical administration](./portefeuille-et-administration-technique.md)

![Jira and SharePoint flow between platform, project and actions](/img/diagrams/en/connecteurs-jira-sharepoint-workflow.svg)

## Objective

This page explains **all the connectors and ingestion providers visible in ProPM Agent**, their benefits, business usefulness, and how they are integrated into the product.

The goal is to answer three simple questions:

1. **What is this connector for?**
2. **Where can it be seen in ProPM Agent?**
3. **How do we move from a declared connector to a usable connector?**

## Understand a connector in ProPM Agent

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

The **Project integrations** screen shows these enabled execution connectors as available to bind when they are not already attached to a project.

### Current execution connector catalog

| Connector in the interface | Primary use | Typical project action |
| --- | --- | --- |
| **Asta Powerproject schedule sync** | synchronize enterprise schedules and baselines | bind when schedule updates must flow through a governed project channel |
| **Azure DevOps delivery project** | create or update work items and track delivery | bind for teams using Boards, sprints or delivery backlogs |
| **Jira delivery workspace** | create or update issues and delivery follow-up | bind when risks, blockers or decisions must become governed Jira tickets |
| **Microsoft Project schedule sync** | synchronize Microsoft Project schedules | bind when the master schedule is managed in Microsoft Project |
| **Microsoft Teams collaboration** | send governed collaboration messages and approval notifications | bind for controlled team notifications |
| **Outlook executive notifications** | send governed email reminders or stakeholder updates | bind for formal communication to named recipients |
| **SharePoint publication library** | publish reviewed artifacts to a SharePoint library | bind when approved PM deliverables must be distributed through SharePoint |
| **Smartsheet portfolio workspace** | update portfolio sheets and workspace data | bind when portfolio tracking is managed in Smartsheet |
| **Webhook event delivery** | call a specific enterprise or internal endpoint | bind for custom downstream automation |
| **Wrike delivery workspace** | update tasks, assignees and delivery coordination | bind when Wrike carries operational delivery work |

## Visible ingestion providers

Ingestion providers are used to **bring content into ProPM Agent to enrich Knowledge**.

The project screen separates providers already bound to the project from providers **Available to bind**. Counts vary by tenant, but the screen distinguishes healthy bindings from catalog entries that still need project binding or platform configuration.

### Current ingestion provider catalog

| Provider in the interface | Import mode or source shown | Primary use | Readiness note |
| --- | --- | --- | --- |
| **Smartsheet sheet import** | Smartsheet · Scheduled | refresh portfolio sheets into Knowledge | can appear as bound and **Healthy** |
| **Azure Data Factory evidence pipeline** | ADF · Pipeline | import evidence, RAID and reporting refreshes | can appear as bound and **Healthy** |
| **Asta Powerproject schedule import** | Asta Powerproject Import · Manual | import schedule snapshots and baselines | available to bind when **Ready** |
| **Azure Blob document ingest** | Blob Storage · Scheduled | ingest governed document drops and archive refreshes | available to bind when **Ready** |
| **Confluence knowledge import** | Confluence · Manual | import wiki pages and procedural knowledge | can show **Not configured** until the source is completed |
| **Jira issue import** | Jira · Scheduled | import issues, blockers and follow-up evidence | can show **Not configured** until the source is completed |
| **Microsoft Project schedule import** | MS Project Import · Manual | import schedule baselines and updates | available to bind when **Ready** |
| **SFTP document intake** | SFTP · Scheduled | import third-party document drops | can show **Not configured** until host, folder and credentials are completed |
| **SharePoint knowledge import** | SharePoint · Manual | import knowledge libraries and reporting artifacts | available to bind after site and library setup |
| **Wrike task import** | Wrike · Scheduled | import tasks, assignees and workflow evidence | available to bind after workspace setup |

## Connectors present in multiple roles

Some names appear in several places in the product. That is normal: the import provider and the execution connector remain separate bindings.

| Family | Import role | Execution role | Correct reading |
| --- | --- | --- | --- |
| **SharePoint** | **SharePoint knowledge import** | **SharePoint publication library** | can read documents and publish a reviewed artifact, but each role has its own setup and binding |
| **Jira** | **Jira issue import** | **Jira delivery workspace** | can import Jira context, then create a governed ticket if the execution connector is also bound |
| **Microsoft Project** | **Microsoft Project schedule import** | **Microsoft Project schedule sync** | can bring schedule evidence into Knowledge and synchronize governed schedule changes |
| **Smartsheet** | **Smartsheet sheet import** | **Smartsheet portfolio workspace** | can refresh portfolio evidence and update Smartsheet as an execution destination |
| **Wrike** | **Wrike task import** | **Wrike delivery workspace** | can import operational task evidence and update Wrike tasks through governed actions |
| **Asta Powerproject** | **Asta Powerproject schedule import** | **Asta Powerproject schedule sync** | can import schedule snapshots and synchronize controlled schedule changes |
| **Azure DevOps** | — | **Azure DevOps delivery project** | exposed as an execution connector; any import path should be validated separately when available |
| **ADF / Blob / Confluence / SFTP** | ingestion provider only | — | they enrich **Knowledge** and do not automatically become action destinations |
| **Teams / Outlook / Webhook** | — | execution connector only | they send governed messages or events and do not automatically import Knowledge |

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

## Example 4 — Webhook event delivery

### When to use

Use **Webhook event delivery** when your organization wants ProPM Agent to call a specific internal or third-party endpoint after a governed decision.

### Integration with ProPM Agent

- in the current catalog, Webhook is an **execution connector**;
- bind it to the project only after the platform endpoint and health are validated;
- if inbound webhook ingestion is added later, treat it as a separate ingestion provider with its own validation and project binding.

### Main advantage

Webhook delivery provides flexibility for custom automation without turning the flow into an uncontrolled output.

## How to recognize that a connector is actually ready

To read connector status correctly, distinguish three simple states:

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

## Simple reading

| If you observe… | First check… |
| --- | --- |
| the connector exists at the platform level but does not appear in the project | **Project Integrations** |
| it appears in the project but no action is taken | **Governance Policies** and role permissions |
| the action is visible but no healthy option appears | connector health, project binding and compatible execution option |
| the import is offered but returns nothing | ingestion provider, actual accessible source and data freshness |
| the SharePoint publication has not yet succeeded | artifact destination, policy, approval and **SharePoint publish** connector |

## Recommended workflow for your team

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
