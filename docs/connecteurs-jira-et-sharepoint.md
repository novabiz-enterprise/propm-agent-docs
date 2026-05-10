---
title: Connectors and Integrations
slug: /connecteurs-jira-et-sharepoint
description: Understand ProPM Agent connectors, the difference between import, publishing and external actions, and the conditions for real usage.
---

[Home](./index.md) · Connectors and Integrations

![Jira and SharePoint flow between platform, project and actions](/img/diagrams/en/connecteurs-jira-sharepoint-workflow.svg)

## Goal

This page explains connectors for users and Project Owners. Technical fields, secrets and detailed authentication belong in secured administration, not in the end-user guide.

## Three usages

| Usage | Example | Related page |
| --- | --- | --- |
| Import into knowledge | Import SharePoint documents, Jira issues or Confluence pages | [Knowledge](./connaissance-documents-et-imports.md) |
| Publish a deliverable | Publish a PM Document to SharePoint | [PM Documents](./documents-pm-et-artefacts.md) |
| Create an external action | Create a Jira ticket or send a notification | [Actions and approvals](./actions-et-approbations.md) |

## Checklist before usage

| Condition | Check |
| --- | --- |
| Platform ready | Integration is defined and validated by an administrator |
| Project bound | Active project uses the integration |
| Compatible policy | Governance allows the action or requires approval |
| Sufficient role | Your role can import, propose, approve or publish |
| Healthy | Connector is ready and not blocked |
| Live mode | Real external actions are enabled when needed |

## Import from an approved source

1. Open [Knowledge](./connaissance-documents-et-imports.md).
2. Choose the import action.
3. Select an available source.
4. Start import.
5. Review import history and statuses.
6. Verify that documents become **Indexed**.

## Publish to SharePoint

1. Open [PM Documents and artifacts](./documents-pm-et-artefacts.md).
2. Select the reviewed PM Document.
3. Check the proposed destination.
4. Submit publication if your role allows it.
5. Wait for approval if policy requires it.
6. Verify final status and trace.

## Create a Jira ticket from a signal

1. Open [Signals and notifications](./signaux-et-notifications.md).
2. Select the relevant signal.
3. Choose the ticket creation action if available.
4. Review title, description, priority and evidence.
5. Submit the action.
6. Track approval and execution in [Actions and approvals](./actions-et-approbations.md).
