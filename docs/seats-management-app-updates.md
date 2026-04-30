---
title: Seats management and app updates
slug: /seats-management-app-updates
description: Manage subscription seats and update an existing application installation from administration without redeploying Marketplace resources.
---

[Home](./index.md) · [Portfolio](./portfolio.md) · [AI providers and platform integrations](./ai-providers-platform-integrations.md)

## Objective

This page covers two administration topics that are separate from project work:

- **Seats management** for licenses, assigned users and subscription status;
- **Deployment & Updates** for in-place application image rollout on existing Azure Container Apps.

Use it to answer: **who can access the application, and how is an existing installation updated without returning to Marketplace?**

## Subscription and seats

The product manages a seat-based licensing model. All Marketplace plans provide the same application features; only the number of licenses/seats differs.

### What an administrator can see

- the active **plan**;
- the number of **purchased seats**;
- the number of **used seats**;
- the number of **available seats**;
- users already licensed;
- commercial status, for example `billing state`, `payment state` or `subscription status`.

### Why it matters

A blocked user does not necessarily have a connection issue. The block can come from:

- no available seat;
- a removed user who must be reassigned by an administrator;
- insufficient role, inaccessible project, binding, policy, configuration or health state to fix.

Marketplace plans do not block connectors, AI providers or product features. If a technical `entitlement` label still appears in the interface or logs, treat it as a legacy/non-plan indicator rather than a functional plan difference.

## Releasing or reassigning a seat

This is done from **Platform Administration** by an authorized profile.

A removal frees the seat for later reassignment, subject to subscription/license rules and any withdrawal window. The operation changes access allocation; it does not change which product features the plan contains.

## Application updates without Marketplace redeployment

The **Deployment & Updates** section updates an existing installation **in place**.

It does not:

- run the Azure Marketplace offer again;
- create a new resource group;
- recreate Azure resources that already exist.

In practice, administration reads the image inventory of the existing **Azure Container Apps** through Azure Resource Manager, compares current images with approved target images in ACR, and submits new revisions on the existing Container Apps.

## Available update actions

| Action | Purpose |
| --- | --- |
| **Check for updates** | check current images, target images, mutable tag refresh candidates and optional manifest version |
| **Apply update** | apply new images to selected services by creating new Container Apps revisions |
| **Rollback last update** | return to previous images when the last operation captured the required references |
| **Container App image inventory** | review managed resource group, tracked services, current images, target images and revision state |

## Important prerequisites

- the user must have deployment-operation or platform-administration rights;
- the runtime identity must be able to read and patch Container Apps through Azure Resource Manager;
- the environment must know the subscription and resource group through `AZURE_SUBSCRIPTION_ID` and `AZURE_RESOURCE_GROUP_ID`, `AZURE_RESOURCE_GROUP` or `AZURE_RESOURCE_GROUP_NAME`;
- target images must come from an update manifest, target-image configuration or an authorized application tag.

## Scope limits

This operation covers **application image rollout**.

The administration button does not cover:

- database schema migrations;
- creation of new Azure resources;
- architecture changes;
- a new Marketplace deployment.

If the update includes the orchestrator service itself, the interface can report that the request was submitted while the service replaces itself.

## Platform technical landmarks

The Azure deployment infrastructure relies on, among others:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Takeaways

- seats control access allocation, not feature tiers;
- all Marketplace plans expose the same product features;
- application updates are applied in place on existing Container Apps;
- Marketplace installs the initial environment, while **Deployment & Updates** maintains it;
- use rollback only when previous image references are available.

## Next

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers and platform integrations](./ai-providers-platform-integrations.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
