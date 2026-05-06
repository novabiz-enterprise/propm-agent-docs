---
title: Tenant plan, licensed users, and app updates
slug: /seats-management-app-updates
description: Manage the Marketplace tenant plan, ordered seats, supplemental licenses, licensed users, and application updates from Platform Administration.
---

[Home](./index.md) · [Portfolio](./portfolio.md) · [AI providers and platform integrations](./ai-providers-platform-integrations.md)

![Platform Administration overview showing Tenant plan and licensed users](/img/screenshots/localized/en/18-platform-administration-overview.jpg)

## Objective

This page explains the end-user administration flow for **Platform Administration > Overview > Tenant plan and licensed users**.

Use it to answer:

- which Marketplace plan is currently detected for the tenant;
- how many licenses are ordered, included, supplemental, used, and remaining;
- how to buy or remove supplemental licenses from ProPM;
- how to prepare a plan upgrade through an Azure Marketplace redeployment;
- how application image updates differ from Marketplace plan upgrades.

## Where to find the page

1. Open **Platform Administration**.
2. Stay on **Overview**.
3. Open **Tenant plan and licensed users**.

This administration area replaces older user-facing Marketplace subscription selection screens. Users should not select legacy or internal plan identifiers when preparing a new upgrade.

## Official Marketplace plans

The target plan list in ProPM administration must present only these official Marketplace plans:

| Plan ID | Display name | Included seats |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Older or internal identifiers such as `propm0`, `pro`, `enterprise`, `pm-*`, or dynamically generated plans are not choices for a new user upgrade in administration.

`propm0` can still appear on older existing deployments. Treat it as historical compatibility, not as a plan to select for a new upgrade.

## Read the plan and license fields

| Field | Meaning |
| --- | --- |
| **Current plan** | Marketplace plan currently detected for the tenant. |
| **Ordered seats** | Total number of licenses ordered for the tenant. |
| **Included seats** | Licenses included in the base Marketplace plan. |
| **Supplemental licenses** | Extra licenses added through Marketplace billing. |
| **Used seats** | Licenses currently consumed by connected or licensed users. |
| **Remaining seats** | Licenses still available for assignment or future users. |

Marketplace plans control license capacity. They do not unlock or block connectors, AI providers, or product features.

## Add supplemental licenses

Use **Add licenses and bill in Azure** when the tenant needs more capacity than the base plan includes.

1. In **Tenant plan and licensed users**, enter the quantity of supplemental licenses to add.
2. Select **Add licenses and bill in Azure**.
3. ProPM sends the consumption request to Azure Marketplace Metering.
4. Azure Marketplace bills the usage through the custom meter dimension `seats`.
5. ProPM adds the supplemental licenses to tenant capacity only after Azure Marketplace accepts the request.
6. Review **Ordered seats**, **Supplemental licenses**, and **Remaining seats** after acceptance.

Only one supplemental license order can be submitted to Azure Marketplace per hour.

Supplemental licenses remain active in ProPM until they are removed manually.

## Remove supplemental licenses

Use **Remove licenses** to remove supplemental license capacity from ProPM.

The removal decreases the capacity available in ProPM, but it does not automatically cancel or refund consumption that has already been sent to Azure Marketplace.

## Upgrade plan by redeploying from Azure Marketplace

A Marketplace plan upgrade is not applied directly to the existing Managed Application instance.

For Azure Managed Application, the upgrade is prepared in ProPM and completed through a guided Azure Marketplace redeployment.

1. Open **Platform Administration > Overview > Tenant plan and licensed users**.
2. In **Target plan**, choose a higher official Marketplace plan.
3. Select **Prepare upgrade by redeploying in Azure Marketplace**.
4. ProPM prepares the upgrade and stores a pending upgrade request.
5. Select **Open Azure Marketplace redeployment** when the link appears.
6. In Azure Marketplace, create a new ProPM Managed Application with a different name.
7. Select the new Marketplace plan in Azure.
8. Let Azure Marketplace finalize the commercial transaction and create the new deployment.
9. After the Marketplace action completes, use **Refresh Marketplace plan** in ProPM to synchronize the detected plan and license information.

The plan upgrade does not directly modify the existing Managed Application instance. Azure Marketplace requires a new redeployment to apply the new plan.

## Downgrade restrictions

ProPM blocks technical application of downgrades inside the application:

- a plan lower than the current plan is refused;
- a reduction of ordered licenses is refused;
- Marketplace changes that decrease capacity are not applied automatically.

ProPM prevents technical application of a downgrade in the application, but Marketplace billing is managed by Azure and Microsoft. Any commercial modification must be performed and validated in Azure Marketplace.

## Refresh Marketplace plan

Use **Refresh Marketplace plan** to synchronize ProPM with the Marketplace state currently detected for the tenant.

This action:

- refreshes plan and license information after a Marketplace action;
- does not perform a plan upgrade by itself;
- does not buy supplemental licenses;
- does not remove or cancel licenses.

## Supplemental licenses during a plan upgrade

Supplemental licenses already bought remain linked to the source Marketplace resource.

During a redeployment for a plan upgrade:

- existing supplemental licenses remain attached to the old Marketplace deployment or source resource;
- the new plan includes its own base capacity;
- the customer should buy supplemental licenses on the new deployment only if the capacity included in the new plan is not sufficient.

## Licensed connected users

The **Licensed connected users** list shows users currently consuming licenses.

Removing a licensed user frees application capacity for later use, subject to the tenant license rules. It does not alter the Marketplace plan and does not cancel Marketplace-billed usage.

## Application updates without Marketplace redeployment

The **Deployment & Updates** section updates an existing installation in place.

It does not:

- rerun the Azure Marketplace offer;
- create a new resource group;
- recreate Azure resources that already exist;
- apply a Marketplace plan upgrade.

In practice, administration reads the image inventory of the existing **Azure Container Apps** through Azure Resource Manager, compares current images with approved target images in ACR, and submits new revisions on the existing Container Apps.

## Available update actions

| Action | Purpose |
| --- | --- |
| **Check for updates** | Check current images, target images, mutable tag refresh candidates, and optional manifest version. |
| **Apply update** | Apply new images to selected services by creating new Container Apps revisions. |
| **Rollback last update** | Return to previous images when the last operation captured the required references. |
| **Container App image inventory** | Review managed resource group, tracked services, current images, target images, and revision state. |

## Scope limits

Application image rollout is separate from Marketplace plan administration.

The update buttons do not cover:

- database schema migrations;
- creation of new Azure resources;
- architecture changes;
- Marketplace plan upgrades.

## Takeaways

- Use **Tenant plan and licensed users** for Marketplace plan and license capacity administration.
- Use only official Marketplace plans for target upgrades.
- Use **Add licenses and bill in Azure** for supplemental licenses billed by Azure Marketplace.
- Use **Prepare upgrade by redeploying in Azure Marketplace** for plan upgrades.
- Use **Refresh Marketplace plan** only to synchronize detected Marketplace state.
- Use **Deployment & Updates** for in-place application image rollout, not for commercial plan changes.

## Next

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers and platform integrations](./ai-providers-platform-integrations.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
