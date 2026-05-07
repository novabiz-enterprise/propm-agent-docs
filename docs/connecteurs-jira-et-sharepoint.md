---
title: Connectors and Integrations
slug: /connecteurs-jira-et-sharepoint
description: Understand all visible connectors in ProPM Agent, their benefits, use cases, and how they integrate into the platform.
---

[Home](./index.md) · Connectors and Integrations

![Jira and SharePoint flow between platform, project and actions](/img/diagrams/en/connecteurs-jira-sharepoint-workflow.svg)

## Objective

This page explains the **operational catalog of connectors and ingestion providers supported in ProPM Agent**, their benefits, business usefulness, and how they are integrated into the product. Some administration lists can also show extensible or custom families that require additional configuration and validation before real use.

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
2. they validate the configuration and, when enabled, real connectivity;
3. the connector becomes available in **Project Integrations**;
4. **Governance Policies** define who can use it and at what level;
5. the team uses it in **Knowledge**, **PM Documents** or **Actions & approvals**;
6. the final trace remains visible in the **Project activity** and the **AI Log**.

## Where the user sees connectors in the product

| Surface | What you do there |
| --- | --- |
| **Platform Administration** | create the technical definition, provide authentication, validate, test by provider and enable probes when needed |
| **Project Integrations** | check which connectors are actually open to the current project |
| **Knowledge** | import documents, pages, tickets, work items or other sources according to the available provider |
| **Governance Policies** | decide which roles can observe, propose or execute actions |
| **Actions & approvals** | prepare an action request, have it approved, then execute it when the connector mode allows it |
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

## Supported catalog vs extensible options

The catalog above is the operational catalog currently seeded, checked and exposed in **Project Integrations**. **Platform Administration** can also show additional or custom families such as GitHub, GitLab, ServiceNow, Slack, Notion, Google Drive, OneDrive, Box or Dropbox.

Treat those additional entries as extensions until an administrator has confirmed the technical definition, required fields, authentication strategy, validation, project binding and applicable governance policy.

## Minimum configuration by execution connector

The fields below are the minimum fields to complete before `test` or `live` use. Field names can vary slightly by form, but the idea is the same: a destination, an authentication identity and an explicit project target.

| Connector | Minimum fields before test/live use | Typical authentication | Connectivity probe when enabled |
| --- | --- | --- | --- |
| **Jira delivery workspace** | `base_url` or `site_url`, `project_key` | API key, basic, PAT, bearer token or OAuth | reads the target Jira project |
| **Azure DevOps delivery project** | `organization_url` or `organization`, `project`, `work_item_type` | PAT, bearer token or OAuth | checks the work item type in the project |
| **Microsoft Teams collaboration** | `team_id`, `channel_id` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | reads the target Teams channel |
| **Outlook executive notifications** | `mailbox`, `user_id` or `user_principal_name` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | checks the Graph mailbox or user |
| **SharePoint publication library** | `site_id` or `site_url`, `drive_id` or `library` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | checks the site and library |
| **Webhook event delivery** | `webhook_url` or `endpoint_url` over HTTPS | no auth, API key, bearer token, basic or OAuth | sends `HEAD`, then `GET` when needed |
| **Microsoft Project schedule sync** | `project_id`, `portfolio` or `workspace` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | uses the configured probe endpoint or path |
| **Smartsheet portfolio workspace** | `sheet_id` or `workspace_id` | API key, bearer token, OAuth or PAT | reads the Smartsheet sheet or workspace |
| **Wrike delivery workspace** | `folder_id`, `space_id` or `task_id` | bearer token or OAuth | reads the Wrike task or folder |
| **Asta Powerproject schedule sync** | `base_url` or `endpoint_url`, then `project_id`, `portfolio` or `schedule_id` | API key, bearer token, OAuth or basic | uses the configured probe endpoint or path |

## Minimum configuration by ingestion provider

An ingestion provider must identify the source, import mode and identity used to read that source. Scheduled imports also require a compatible cadence or orchestration.

| Provider | Minimum fields before real use | Typical authentication | Connectivity probe when enabled |
| --- | --- | --- | --- |
| **SharePoint knowledge import** | `site_id` or `site_url`, `drive_id` or `library` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | checks the library and root children |
| **Azure Data Factory evidence pipeline** | `subscription_id`, `resource_group_name`, `factory` or `factory_name`, `pipeline` or `pipeline_name` | managed identity, client credentials or bearer token | reads the pipeline definition |
| **Azure Blob document ingest** | `account_url`, `storage_account` or `account_name`, then `container` | managed identity, SAS, bearer token or client credentials | lists a few blobs from the container |
| **Confluence knowledge import** | `base_url`, `space`, `space_key` or `space_id` | basic, bearer token or OAuth | checks the Confluence space |
| **Jira issue import** | `base_url` or `site_url`, then `project`, `project_key` or `jql` | API key, basic, PAT, bearer token or OAuth | runs a limited Jira search |
| **SFTP document intake** | `host` or `base_url`, `username` or `user`, `folder` or `path`, valid port if provided | basic, password or SSH private key | checks TCP reachability to the SFTP server |
| **Microsoft Project schedule import** | `project_id`, `portfolio` or `workspace` | Microsoft Graph with bearer token, OAuth, client credentials or managed identity | uses the configured probe endpoint or path |
| **Smartsheet sheet import** | `sheet_id` or `workspace_id` | API key, bearer token, OAuth or PAT | reads the Smartsheet sheet or workspace |
| **Wrike task import** | `folder_id` or `space_id` | bearer token or OAuth | reads tasks from the folder or space |
| **Asta Powerproject schedule import** | `base_url` or `endpoint_url`, then `project_id`, `portfolio` or `schedule_id` | API key, bearer token, OAuth or basic | uses the configured probe endpoint or path |

## Validation, probes and runtime limits

| Step | What it confirms | What it does not guarantee |
| --- | --- | --- |
| **Save** | the definition is stored at platform level | the external source has not necessarily been contacted |
| **Validate** | required fields, mode, authentication and HTTPS URLs are coherent | a real network call runs only when probes are enabled |
| **Connectivity probe** | ProPM Agent can reach a non-destructive provider endpoint | ticket creation, message sending or full import are not triggered |
| **Bind to project** | the project can consume the platform definition | policy, user role, health, validation and binding readiness can still block usage |
| **Validate binding** | the project binding remains aligned with the platform definition | it does not replace a real business action or import |

Connectivity probes are intentionally opt-in. An administrator can enable them with `connectivity_probe_enabled`, `run_connectivity_probe`, `live_connectivity_check`, equivalent metadata or a platform environment variable. Without that activation, validation remains a consistency and readiness check.

If a connector stays in `mock` or `test` mode, ProPM Agent can manage the request, governance, approval and trace without necessarily sending the final call to the external system. Real vendor execution requires a compatible connector mode, complete configuration, an allowing policy and an environment that enables that path.

## Governed actions and required connector

| User action | Internal action type | Required connector | Minimum business fields |
| --- | --- | --- | --- |
| Publish an artifact to SharePoint | `publish_artifact_to_sharepoint` | `sharepoint_publish` | `artifact_id`, `destination_id` |
| Send a Teams message | `send_teams_message` | `teams` | `body` |
| Send an Outlook message | `send_outlook_message` | `outlook` | `body`, `recipients` |
| Create a Jira ticket | `create_jira_ticket` | `jira` | `title` |
| Create an Azure DevOps work item | `create_azure_devops_ticket` | `azure_devops` | `title` |

Some legacy labels are normalized automatically. For example, `send_message` becomes `send_teams_message`, `send_email` becomes `send_outlook_message`, `create_work_item` becomes `create_azure_devops_ticket`, and `publish_sharepoint_artifact` becomes `publish_artifact_to_sharepoint`.

## Statuses, blockers and diagnostic order

| Visible status or blocker | Practical reading | First recommended action |
| --- | --- | --- |
| **Ready** or **available** | the definition can be bound or used if the rest of the chain is open | check project binding and policy |
| **Healthy** | the last known validation is positive | confirm that the project is bound |
| **Not configured** | fields, source, target or credentials are missing | complete the definition in Platform Administration |
| **Not validated** or **not_tested** | the definition exists but has not passed expected validation or test | run Validate or the appropriate probe |
| **Blocked by health** | platform health is degraded or invalid | check endpoint, auth, scopes and network |
| **Blocked by entitlement** | legacy wording for a blocked integration; in Marketplace plans this is not a feature-tier difference | check configuration, health, binding, policy, role and license availability for access issues |
| **Blocked by policy** | project governance forbids this action or usage type | adjust the policy or role |
| **Binding disabled** | the project binding exists but is disabled | re-enable or recreate the binding if allowed |
| **Missing platform definition** | the project references a missing or deleted definition | recreate or fix the platform definition |

The most useful diagnostic order is: platform definition, required configuration, validation or probe, project binding, policy, user permission, action or import payload, then license availability if the user cannot access the app.

## Import, external output and audit

| Topic | What ProPM Agent traces | What to check in the external tool |
| --- | --- | --- |
| Knowledge import | ingestion run, provider, binding, source label, freshness, counts and Trace ID | available volume, source rights, filters, skipped files and deduplication |
| SharePoint publication | action request, approval, connector, destination and Trace ID | final URL, library, write permissions and published version |
| Jira or Azure DevOps | action, rationale, business payload and Trace ID | created ticket or work item key, target project and item type |
| Teams or Outlook | request, logical recipients or channel, approval and Trace ID | actual delivery, channel, mailbox and Graph refusals |
| Webhook | logical endpoint, attempt status, response or error and Trace ID | HTTP status, truncated response, signature validation and downstream retry |

Never place a secret in an action business payload or user note. Secrets, keys and sensitive references must stay in the platform configuration designed for that purpose.

## Security and authentication

| Family | Generally accepted authentication | Point of attention |
| --- | --- | --- |
| Microsoft Graph, Teams, Outlook, SharePoint and Microsoft Project | bearer token, OAuth, client credentials or managed identity | limit scopes to the required sites, mailboxes, channels or projects |
| Jira and Confluence | API key, basic, PAT, bearer token or OAuth depending on the product | use least-privilege technical accounts |
| Azure DevOps | PAT, bearer token or OAuth | limit rights to the project and expected work item types |
| Azure Data Factory and Blob Storage | managed identity, client credentials, SAS or bearer token depending on the service | prefer managed identities and limit accessible containers or pipelines |
| SFTP | basic, password or SSH private key | check key rotation, port and authorized root folder |
| Webhook | no auth, API key, bearer token, basic or OAuth | require HTTPS, signature or endpoint-side secret when risk justifies it |

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
6. the ticket is created when live vendor execution is enabled; in all cases, the request and decision remain traced in the product.

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
5. depending on risk, the action is approved and then executed when the connector mode allows it;
6. the message trace remains logged even if external delivery is blocked or deferred.

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
- the project binding is not open, healthy or configured;
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
5. test a first import or action while distinguishing readiness, probe and real vendor execution;
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
