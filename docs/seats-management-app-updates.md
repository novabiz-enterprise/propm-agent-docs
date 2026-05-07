---
title: Tenant plan, licensed users, and app updates
slug: /seats-management-app-updates
description: Understand the Marketplace plan shown in ProPM, synchronize Azure Marketplace information, manage licenses, and update a ProPM deployment without losing existing data.
---

[Home](./index.md) · Tenant plan, licensed users, and app updates

![Platform Administration overview showing Tenant plan and licensed users](/img/screenshots/localized/en/18-platform-administration-overview.jpg)

## Objective

This page explains the end-user administration flow for **Platform Administration > Overview > Tenant plan and licensed users** and the recommended flow when a customer wants to change an Azure Marketplace plan or perform a major update without losing existing data.

Use it to understand:

- which Marketplace plan is currently detected for the tenant;
- how many licenses are ordered, included, supplemental, used, and remaining;
- why Azure Marketplace remains the official source for plans, pricing, and billing;
- how supplemental licenses are managed through Azure Marketplace with the `seats` billing dimension;
- how to create a new ProPM deployment from Azure Marketplace in **Attach existing ProPM data resources** mode;
- how an in-place application update differs from a plan change or major update.

The main message is simple: to change plan or perform a major update without losing data, create a **new ProPM deployment from Azure Marketplace**, select **Attach existing ProPM data resources**, and attach the existing data resources from the previous deployment. This is not a manual database migration.

## Where to find the page

1. Open **Platform Administration**.
2. Stay on **Overview**.
3. Open **Tenant plan and licensed users**.

In ProPM, this area shows the currently detected plan and lets you refresh Marketplace information. It does not replace Azure Marketplace for selecting a plan, checking pricing, changing billing, or finalizing a commercial transaction.

## Marketplace plans, pricing, and billing

Azure Marketplace is the official source for:

- the list of available ProPM plans;
- the price of each plan;
- plan billing;
- commercial plan changes;
- supplemental licenses billed with the `seats` dimension.

ProPM shows the current plan to help administrators understand tenant status, but plan changes are no longer performed directly from ProPM administration. Do not manually modify the ARM plan of the Managed Application.

As guidance, the known ProPM Marketplace plans are:

| Plan ID | Display name | Included seats |
| --- | --- | ---: |
| `free` | Free | 4 |
| `propm-20` | ProPM-20 | 20 |
| `propm-50` | ProPM-50 | 50 |
| `propm-100` | ProPM-100 | 100 |
| `propm-300` | ProPM-300 | 300 |
| `propm-500` | ProPM-500 | 500 |
| `propm-1000` | ProPM-1000 | 1000 |

Always confirm the plan, price, and billing terms in Azure Marketplace before starting a new deployment.

Older or internal identifiers such as `propm0`, `pro`, `enterprise`, `pm-*`, or dynamically generated plans are not choices for a new upgrade. `propm0` can still appear on older existing deployments; treat it as historical compatibility, not as a plan to select for a new upgrade.

Marketplace plans control license capacity. They do not unlock or block connectors, AI providers, or product features.

## Read the plan and license fields

| Field | Meaning |
| --- | --- |
| **Current plan** | Marketplace plan currently detected for the tenant. |
| **Ordered seats** | Total number of licenses ordered for the tenant. |
| **Included seats** | Licenses included in the base Marketplace plan. |
| **Supplemental licenses** | Extra licenses added through Marketplace billing. |
| **Used seats** | Licenses currently consumed by connected or licensed users. |
| **Remaining seats** | Licenses still available. |

If the information shown does not match a recent Azure Marketplace action, use **Refresh Marketplace plan** to synchronize ProPM with the detected Marketplace information.

## Supplemental licenses

Supplemental licenses are managed through Azure Marketplace with the `seats` billing dimension.

Use this flow when the tenant needs more capacity than the licenses included in the base plan:

1. Review **Ordered seats**, **Included seats**, **Supplemental licenses**, **Used seats**, and **Remaining seats** in ProPM.
2. Manage the added capacity from Azure Marketplace or through the ProPM action that bills licenses in Azure, if it is available in your environment.
3. Let Azure Marketplace accept and bill the request with the `seats` dimension.
4. Return to ProPM.
5. Select **Refresh Marketplace plan** if the counters are not yet up to date.
6. Review **Ordered seats**, **Supplemental licenses**, and **Remaining seats** after synchronization.

Adding supplemental licenses does not change the base plan. Removing or reducing supplemental licenses does not automatically cancel or refund billing in Azure Marketplace.

## Update your ProPM plan without losing your data

To change an Azure Marketplace plan or perform a major update, the recommended flow is to create a new ProPM deployment and attach it to the existing data resources from the previous deployment.

The new deployment creates a new application tier for the selected plan, but it reuses existing data. Users, documents, configurations, agents, reports, and business data should therefore remain available after validation.

### When to use this flow

Use this flow when:

- you want to switch to another ProPM plan in Azure Marketplace;
- you need a major update that requires a new Marketplace deployment;
- you want to recreate the ProPM application tier while keeping existing data;
- ProPM support asks you to redeploy in existing data resource attachment mode.

Do not use this flow for a simple in-place application image update. For that case, use **Deployment & Updates** in ProPM when available and when release notes do not require a new Marketplace deployment.

### Before you begin

Prepare the following:

- Azure access to the previous ProPM deployment;
- permission to create a new ProPM Managed Application from Azure Marketplace;
- the target ProPM plan selected in Azure Marketplace;
- the full **Resource ID** of the previous ProPM Managed Application;
- a cutover window during which administrators can verify the new deployment;
- a checklist for users, documents, configurations, agents, reports, and data.

Follow these precautions before any action:

- do not delete the previous Managed Resource Group before validating the new deployment;
- do not delete the existing data resources, because they are reused by the new deployment;
- do not manually modify the ARM plan of the Managed Application;
- do not fill advanced override options unless the previous installation used custom resource names or ProPM support asks you to do so.

### Step 1 - Choose the new plan in Azure Marketplace

Open Azure Marketplace and select the new ProPM plan you want.

Plan selection, pricing, and billing are managed in Azure Marketplace. ProPM can show the current plan and refresh detected information, but ProPM is not the official source for the commercial transaction.

### Step 2 - Create a new ProPM deployment

In Azure Marketplace, create a new ProPM deployment instead of modifying the previous deployment directly.

On the **Basics** tab, choose the subscription, resource group, region, new Managed Application name, and new Managed Resource Group.

![Create a new ProPM deployment from Azure Marketplace](/img/deploiement/fr/propm-plan-update-01-new-deployment-basics.png)

Use a different name for the new Managed Application so the previous and new environments are clearly separated during cutover.

### Step 3 - Select Attach existing ProPM data resources

On the **Application Settings** tab, select **Attach existing ProPM data resources** in **Installation mode**.

![Select Attach existing ProPM data resources mode](/img/deploiement/fr/propm-plan-update-03-attach-existing-data-resources.png)

This mode tells the new deployment to connect to the data resources from the previous deployment instead of starting with an empty environment.

Leave advanced override fields empty in most cases. The new deployment can discover standard resources from the previous Managed Application. Fill these fields only if the previous installation used custom resource names or if ProPM support asks you to do so.

### Step 4 - Enter the previous Managed Application

In Azure Portal, open the previous ProPM Managed Application, then go to **Properties**.

Copy the full **Id** field of the Managed Application. This is the **Resource ID** of the previous Managed Application, not the managed resource group name.

![Copy the Resource ID of the previous ProPM Managed Application](/img/deploiement/fr/propm-plan-update-02-copy-previous-managed-application-id.png)

Return to the new deployment wizard and paste this value into **Previous ProPM Managed Application resource ID**.

If needed, enable **Block previous deployment during cutover**. This option helps prevent changes in the previous environment while the new deployment is being used and validated.

![Block the previous deployment during cutover](/img/deploiement/fr/propm-plan-update-04-readonly-and-overrides.png)

After entering the other parameters required by the wizard, select **Review + create**, review the configuration, and start the deployment.

### Step 5 - Verify the new deployment

After the new deployment finishes, open the new ProPM instance and verify the essential items before moving users permanently.

Check at minimum:

- users and their access;
- documents and knowledge spaces;
- platform configuration;
- agents and their settings;
- reports;
- projects, portfolios, and business data;
- expected connectors and integrations;
- the AI provider and required settings;
- plan and license counters after Marketplace synchronization.

If the plan shown in ProPM is not yet up to date after the Azure Marketplace action, use **Refresh Marketplace plan**. This button only synchronizes detected state; it does not change the plan or trigger a purchase.

### Step 6 - Finalize the cutover

After full validation, direct users to the new ProPM deployment.

Keep the previous deployment temporarily as a safety measure if your organization wants to. Delete the previous Managed Application only when you are certain the cutover is complete and the chosen deletion procedure does not remove the reused data resources.

Never manually delete existing data resources while they are used by the new deployment.

### Best practices and precautions

Do:

- choose the new plan in Azure Marketplace;
- create a new ProPM deployment;
- select **Attach existing ProPM data resources**;
- enter the full Resource ID of the previous ProPM Managed Application;
- block or make the previous deployment read-only during cutover if needed;
- verify the new deployment before deleting anything;
- use **Refresh Marketplace plan** after a Marketplace action to resynchronize ProPM.

Avoid:

- do not delete the previous Managed Resource Group before validating the new deployment;
- do not delete existing data accounts, databases, or services;
- do not manually modify the ARM plan of the Managed Application;
- do not present this flow as a manual database migration;
- do not fill advanced overrides without a known need.

### FAQ

**Can I change plan directly in ProPM?**

No. ProPM shows the current plan and can refresh Marketplace information, but plan changes, pricing, and billing are managed in Azure Marketplace.

**What does Refresh Marketplace plan do?**

**Refresh Marketplace plan** synchronizes ProPM with Marketplace information detected after an Azure-side action. It does not change the plan, buy licenses, or remove licenses.

**Is this a manual database migration?**

No. The new ProPM deployment automatically connects to existing data resources when you select **Attach existing ProPM data resources** and enter the previous Managed Application.

**Which Resource ID should I enter?**

Enter the full Resource ID of the previous **ProPM Managed Application**. Do not enter only the application name, the resource group name, or the Managed Resource Group.

**When should I use advanced override options?**

Use them only if the previous installation has custom resource names or if ProPM support asks you to. In the standard case, leave these fields empty.

**Can I delete the previous Managed Resource Group after the new deployment?**

Do not delete it before validating the new deployment. Do not delete existing data resources if the new deployment reuses them. If there is any doubt, keep the previous deployment temporarily and ask ProPM support for the correct deletion procedure.

**How are supplemental licenses managed?**

Supplemental licenses are managed through Azure Marketplace with the `seats` billing dimension. ProPM can show and synchronize counters, but Azure Marketplace remains the billing reference.

## Downgrade restrictions

ProPM can prevent technical application of a downgrade inside the application:

- a plan lower than the current plan can be refused;
- a reduction of ordered licenses can be refused;
- Marketplace changes that decrease capacity are not applied automatically in the application.

Marketplace billing is managed by Azure and Microsoft. Any commercial modification must be performed and validated in Azure Marketplace.

## Refresh Marketplace plan

Use **Refresh Marketplace plan** to synchronize ProPM with the Marketplace state detected for the tenant.

This action:

- refreshes plan and license information after a Marketplace action;
- does not perform a plan upgrade by itself;
- does not buy supplemental licenses;
- does not remove or cancel licenses;
- does not modify Azure deployment resources.

## Licensed connected users

The **Licensed connected users** list shows users currently consuming licenses.

Removing a licensed user frees application capacity for later use, subject to the tenant license rules. It does not alter the Marketplace plan and does not cancel Marketplace-billed usage.

## Application updates without Marketplace redeployment

The **Deployment & Updates** section updates an existing installation in place when the update is compatible with the current deployment.

It does not:

- rerun the Azure Marketplace offer;
- create a new resource group;
- recreate Azure resources that already exist;
- apply a Marketplace plan upgrade;
- perform a major update that requires a new Marketplace deployment.

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
- Marketplace plan upgrades;
- cutovers to a new deployment with existing data resources.

## Takeaways

- Azure Marketplace is the official source for plans, pricing, and billing.
- ProPM shows the current plan and license counters, but it does not replace Azure Marketplace for plan changes.
- To change plan or perform a major update without losing data, create a new ProPM deployment from Azure Marketplace.
- In the deployment wizard, select **Attach existing ProPM data resources**.
- Enter the full Resource ID of the previous ProPM Managed Application.
- Do not delete the previous Managed Resource Group or data resources before full validation of the new deployment.
- Use **Refresh Marketplace plan** only to synchronize detected Marketplace state.
- Use **Deployment & Updates** for in-place application image rollout, not for commercial plan changes.

## Next

- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [AI providers and platform integrations](./ai-providers-platform-integrations.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
