---
title: Platform Administration
---

## Purpose

**Platform Administration** is the tenant-wide administration shell for technical platform setup.

It is the single source of truth for:

- **Platform Integrations**
- **AI Provider Settings**
- **Marketplace & Subscription**
- related audit and activity visibility where the deployment exposes it

## Why this matters

The product now separates tenant-scoped technical setup from project-scoped operational use.

- Technical setup happens once in **Platform Administration**.
- Project admins bind approved integrations to projects.
- User-facing pages such as **Knowledge**, **Workspace**, and **Actions & approvals** consume approved capabilities without exposing raw technical configuration.

## Who can use it

- **Subscription Administrator** — default editable owner for tenant-wide administration
- **Delegated Platform Administrator** — editable only for explicitly granted administration capabilities
- **Project Administrator** — read-only only when the deployment exposes admin visibility to project-facing roles
- **Read-only Admin Viewer** — inspect non-secret metadata only

### How subscription-admin detection works

The product resolves tenant-wide editability during sign-in and request handling.

- In deployed environments, the preferred signal is a tenant or app role claim that maps to **Subscription Administrator**.
- The current implementation also recognizes Microsoft Entra directory admin template IDs such as **Global Administrator** when those IDs appear in token `wids` claims.
- For local development only, the gateway can optionally use the machine's signed-in Azure CLI context as a fallback. When `ENABLE_LOCAL_AZURE_SUBSCRIPTION_ADMIN_FALLBACK` is enabled, the gateway compares the signed-in application user with the current Azure CLI user and checks whether that same user has the Azure subscription **Owner** role for the active CLI subscription.

If no trusted signal is found, **Platform Administration** remains read-only.

## Main sections

### Overview

Use **Overview** to review:

- integration counts by family
- degraded or invalid configurations
- the effective AI provider
- subscription or entitlement posture
- recent validation, import, and execution activity

### Platform Integrations

Use **Platform Integrations** for tenant-wide integration definitions.

It contains two explicit families:

- **Execution Connectors**
- **Ingestion Providers**

#### Execution Connectors

Use **Execution Connectors** for governed outbound actions such as:

- Jira issue creation
- Azure DevOps work item updates
- Teams or Outlook delivery
- SharePoint publication
- webhook delivery

#### Ingestion Providers

Use **Ingestion Providers** for inbound knowledge or document sources such as:

- SharePoint import
- Azure Data Factory
- Blob Storage or Data Lake
- Confluence
- other approved import sources

### AI Provider Settings

Use **AI Provider Settings** to review:

- the deployment-selected AI provider
- the current effective AI provider
- validation state
- model or routing controls exposed by the deployment
- provider change history

### Marketplace & Subscription

Use **Marketplace & Subscription** to review:

- subscription identity
- plan and seat semantics
- payment or billing posture
- entitlement flags
- premium capability availability for integrations or AI providers

## Platform definitions versus project bindings

**Platform Administration** owns tenant-scoped technical definitions.

Project settings own project-scoped bindings and safe overrides such as:

- binding an approved integration to a project
- choosing a destination or alias
- narrowing allowed action types
- narrowing import filters or category mapping

Project settings do **not** own tenant-wide credentials or secret references.

## Read-only behavior

Read-only users may inspect:

- names and types
- enabled state
- health and validation timestamps
- project usage
- effective AI provider
- plan and entitlement state

Read-only users must not be able to:

- create, edit, enable, disable, or retire definitions
- validate or rotate credentials
- change the AI provider
- change subscription administration settings

## Local development note

When you run the app locally with Microsoft sign-in, being the real Azure subscription owner is not enough by itself unless the app can resolve that ownership from one of these sources:

1. an Entra admin claim in the access token
2. a recognized `wids` directory admin claim
3. the optional Azure CLI fallback running on the same machine and signed into the same tenant and user

If you switch Azure CLI accounts locally, restart the local gateway before retesting Platform Administration so the current local Azure context is refreshed consistently.

## Expected results

- Tenant-wide technical setup is easy to find and audit.
- Execution and ingestion are clearly separated.
- Project-facing pages stay operational and business-friendly.
- Read-only and editable states are predictable.

## Related pages

- [Platform integrations and policies](./connectors-and-policies.md)
- [AI Provider Settings](./ai-provider-settings.md)
- [Marketplace & subscription administration](./marketplace.md)
- [Project settings overview](./project-settings.md)
