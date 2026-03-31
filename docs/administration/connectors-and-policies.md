---
title: Platform integrations and policies
---

## Purpose

Use **Platform Administration** to manage tenant-wide technical setup for external systems.

The migration introduces two explicit integration families:

- **Execution Connectors** — outbound systems used for governed actions such as Jira, Azure DevOps, Teams, Outlook, SharePoint publication, or webhooks
- **Ingestion Providers** — inbound systems used to bring knowledge into the platform such as SharePoint import, Azure Data Factory, Blob Storage, Confluence, or other approved sources

This page explains how those platform-managed integrations relate to adjacent policy objects that may still appear in project-facing administration.

## Who can use it

- **Subscription Administrator** — full tenant-wide edit access by default
- **Delegated Platform Administrator** — edit access only for explicitly granted admin capabilities
- **Project Administrator** — bind approved integrations to projects and review health when the deployment exposes project binding controls
- **Read-only viewers** — metadata visibility only when admin surfaces are exposed to them

## Before you begin

- Open **Platform Administration** for tenant-wide setup.
- Use **Project settings** only for project bindings and safe overrides.
- Confirm whether you are expected to manage tenant-wide definitions or only attach approved integrations to a project.

## Understand the operating model

### Platform definitions live in Platform Administration

Tenant-scoped technical definitions belong in **Platform Administration**.

Use a platform definition to control:

- integration type and display name
- environment and connection or execution mode
- enabled state, health, and validation status
- approved scopes and credential-reference status
- connector- or provider-specific settings stored safely on the backend

Technical setup does **not** belong on day-to-day user-facing pages such as **Knowledge**, **Workspace**, or **Actions & approvals**.

### Execution Connectors

Use **Execution Connectors** for governed outbound or operational actions.

Typical examples:

- Jira issue creation or update
- Azure DevOps work item updates
- Teams or Outlook notifications
- SharePoint publication
- webhook delivery

Execution Connectors are selected operationally by action compatibility, but they are configured technically only in **Platform Administration**.

### Ingestion Providers

Use **Ingestion Providers** for inbound knowledge, documents, or records.

Typical examples:

- SharePoint library import
- Azure Data Factory handoff
- Blob or Data Lake import
- Confluence import
- approved project-management source imports

Ingestion Providers feed **Knowledge**, search, and evidence-backed workflows without exposing raw technical configuration to end users.

### Project bindings live in project settings

Project administrators do **not** create raw technical definitions.

Instead, they attach approved integrations to a project and manage safe overrides such as:

- action-type subsets
- destination choices
- import filters
- category mappings
- project-friendly labels
- project-specific health or usage review

### Artifact destinations

Artifact destinations remain adjacent to integrations, but they are not ingestion sources.

Use them to define where governed outputs can be published or stored, for example:

- an internal blob store for safe default publication
- a SharePoint library for controlled business sharing

Destinations may reference approved execution connectors where relevant.

### Action policies

Action policies define what a role may do with governed actions after compatible execution options have been resolved.

Use them to control:

- whether a user may observe, draft, propose, approve, or execute
- whether the effect is **allow**, **require approval**, or **deny**
- which scopes, destinations, or action types are permitted
- any safe conditions that should block risky execution

### Rendering profiles

Rendering profiles define how governed outputs should be formatted before publication or delivery.

Use them to standardize:

- output format such as Markdown, DOCX, PDF, or HTML
- default output style for the project
- styling options used by downstream publication flows

### Notification preferences

Notification preferences define default routing and cadence for governed alerts and digests.

Use them to control:

- the channel, such as in-app, email, Teams, or webhook
- the notification kind
- digest cadence
- minimum severity threshold
- any approved routing or delivery configuration exposed by the deployment

## Recommended admin flow

1. Create or review tenant-wide **Execution Connectors** and **Ingestion Providers** in **Platform Administration**.
2. Validate health, environment, and approved scopes before enabling live use.
3. Bind approved integrations to projects.
4. Review artifact destinations, action policies, rendering profiles, and notification defaults.
5. Confirm user-facing pages show business-friendly operational actions such as **Import from source** or **Create Jira issue** rather than raw technical setup.

## Read-only behavior

Read-only viewers may inspect non-secret metadata such as:

- names and integration types
- environment labels
- enabled state
- health and validation timestamps
- project usage and entitlement state

They must not be able to:

- create, edit, validate, enable, disable, or retire platform definitions
- change credentials or secret references
- change AI providers or subscription settings
- widen project bindings beyond approved limits

## Safe rollout pattern

For new integrations, a practical rollout pattern is:

1. create the integration in **test** or **mock** mode first
2. validate connectivity and scope metadata
3. bind it to a non-production project
4. confirm **Knowledge** or **Actions & approvals** can consume it without setup leakage
5. switch to live only after audit, approval, and entitlement behavior are understood

## Tips

- Keep integration names business-readable so audit reviews are easier.
- Use **Execution Connector** and **Ingestion Provider** consistently instead of using **connector** as a catch-all label.
- Treat validation state, health, and entitlement posture as operational safety controls, not cosmetic badges.
- Keep technical setup in **Platform Administration** and keep project pages focused on safe consumption.
