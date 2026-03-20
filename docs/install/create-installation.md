---
title: Create an installation (step-by-step)
---

This page walks a tenant admin through the **current standard ProPM Agent deployment flow** from Azure Marketplace.

## Who can do this

- **Azure subscription owner or contributor** for the resource deployment
- **Tenant admin / application admin** for first-use consent if your organization requires admin approval

## Before you begin

Complete the checklist in [Prerequisites checklist](./prerequisites).

If you are preparing rollout media, also review the [Installation screenshot inventory](./screenshot-inventory).

## Step 1 — Open the offer

1. In Azure Portal, open the **ProPM Agent** offer in **Azure Marketplace**.
2. Select **Create**.

## Step 2 — Complete the Basics step

Choose:

- **Subscription**
- **Resource group**
- **Region**

## Step 3 — Complete Application Settings

### Environment Name

Enter a short label to distinguish environments, for example `dev`, `test`, or `prod`.

### Platform Region (Container Apps / APIM / VNet)

Choose the platform region for the VNet-based application platform.

This controls the region for resources such as:

- the Container Apps environment
- API Management
- the virtual network and private connectivity layer

Choose a region that has confirmed capacity for your subscription.

### Identity model (current standard deployment)

The standard offer uses a **publisher-managed shared Microsoft Entra application**.

That means:

- you are **not** asked to supply a customer Entra client ID in the standard flow
- you are **not** asked to manually create an app registration during deployment
- tenant restriction is still enforced after deployment based on the installation tenant

### LLM Provider

Choose one of the four supported provider paths and complete only the fields relevant to that option.

#### OpenRouter

- Provide the **OpenRouter API key**.
- Confirm the **OpenRouter model**.

#### Azure OpenAI (deploy during installation)

- No customer endpoint fields are required in the wizard.
- Confirm the selected region supports Azure OpenAI and has quota available.

#### Azure OpenAI (customer-managed)

- Provide the **Azure OpenAI endpoint**.
- Provide the **chat/completion deployment name**.
- Provide the **embeddings deployment name** only if you use a separate embeddings deployment.
- Provide the **API key** only if your deployment will not use managed identity or Entra-based access.

#### OpenAI-compatible endpoint

- Provide the **base URL**.
- Provide the **model name**.
- Provide the **API key** only if your compatible endpoint requires it.

### CORS Allowed Origins (optional)

Leave this blank unless you need to allow additional web origins such as a custom domain or controlled secondary frontend.

### Enable alerting

Keep this enabled unless your subscription blocks the alert resources required by the deployment.

### Enable debug logging

Enable this only for short-term troubleshooting or guided deployment diagnostics.

### Azure Data Factory (optional)

Enable this only if your deployment needs ADF-based ingestion or integration scenarios.

### Azure SQL Admin Password

Provide the SQL admin password used for the initial Azure SQL deployment.

### VNet CIDR

Provide the non-overlapping private CIDR block for the deployment.

### What you do not enter in the standard offer

You do **not** need to provide:

- a customer-owned Entra client ID
- a customer-owned app registration
- container image names
- runtime API URLs

## Step 4 — Review + create

1. Select **Review + create**.
2. Wait for validation to complete.
3. Select **Create**.

## Step 5 — Wait for deployment to complete

Azure will provision the Managed Application resources in your subscription.

## Expected results

After deployment completes, you should be able to open the Managed Application resource and find outputs such as:

- `webContainerFqdn`
- `apiGatewayUrl`
- `apimGatewayUrl`

## What the deployment creates

The current deployment model typically creates:

- a **public web frontend** hosted as a containerized web application
- a **single public API entry point** through Azure API Management
- **private backend services** on Azure Container Apps
- **private connectivity** to supporting data and messaging services
- runtime configuration injected into the web frontend after deployment

The backend service set includes the current runtime architecture:

- API gateway
- orchestrator
- retrieval
- documents
- decision
- notification
- audit
- marketplace
- reporting
- artifacts
- history

## Common issues

- **The platform region fails validation or deploys slowly**: choose a region with confirmed Container Apps and API Management capacity for your subscription.
- **The AI provider settings fail validation**: re-check the endpoint, deployment names, model name, or API key for the selected provider.
- **Deployment fails due to networking**: confirm the **VNet CIDR** does not overlap with existing address ranges and is large enough for the deployment.
- **Alert resources fail**: retry with alerting disabled if your subscription blocks the required alert providers or policies.

## Screenshot planning for this page

Planned screenshots tied to this page:

- `marketplace-offer-overview.png` — Azure Marketplace offer entry page before deployment begins.
- `marketplace-basics-subscription-region.png` — Basics step with subscription, resource group, and region selection.
- `marketplace-application-settings-core.png` — Application Settings page showing environment name, platform region, and LLM provider.
- `marketplace-application-settings-network-and-sql.png` — Lower portion of Application Settings covering allowed origins, alerts, SQL password, and VNet CIDR.
- `marketplace-review-create-summary.png` — Review + create summary before deployment is submitted.

