---
title: Prerequisites checklist
---

Before you deploy ProPM Agent from Azure Marketplace, confirm the prerequisites for the **current Managed Application architecture** and **current Marketplace wizard fields**.

## Azure subscription and deployment permissions

- An Azure subscription where you are allowed to deploy **Managed Applications**.
- Permission to select or create a **resource group**.
- Permission to deploy into the chosen **platform region**.
- Access to a subscription administrator if your environment requires provider registration, policy exceptions, or quota review for services such as:
  - **Azure Container Apps**
  - **Azure API Management**
  - **Azure SQL Database**
  - **Azure AI Search**
  - **Azure Storage**
  - **Azure Cosmos DB**
  - **Azure Key Vault**
  - **Azure Service Bus**
  - **Azure Event Grid**
  - **Azure AI services** such as Azure OpenAI or Document Intelligence

## Identity and tenant readiness

- The standard Marketplace offer now uses a **publisher-managed shared Microsoft Entra application**.
- You **do not** need to prepare a customer-owned Entra app registration for the standard deployment path.
- You **do** need:
  - the correct **Azure subscription** and **Microsoft Entra tenant** selected before deployment
  - a **tenant admin** or **application admin** who can complete first-use consent after deployment if your organization requires admin approval
  - the intended admin and operator users identified in advance

> Each installation remains tenant-restricted even though the sign-in application is shared. The deployment still runs in the customer tenant and subscription, and tenant checks are enforced in the deployed application stack.

## Network and region planning

- A **non-overlapping VNet CIDR** for the deployment.
- Use **at least `/22`**; **`/16` is recommended** for smoother subnet carving and future growth.
- Coordinate with your network team if your subscription already uses hub/spoke, private endpoint, or address-space standards.
- Choose a **platform region** with capacity for Container Apps, API Management, and any AI provider you plan to use.

Commonly surfaced platform regions in the current Marketplace experience:

- **East US 2**
- **Central US**
- **West Europe**
- **North Europe**
- **West US 2** (use only if your subscription has confirmed capacity)

## AI provider decision

Choose the AI provider you will use during deployment.

### OpenRouter (default path)

Prepare:

- an **OpenRouter API key**
- an approved **model ID**

### Azure OpenAI (deploy during installation)

Prepare:

- confirmation that your chosen region supports **Azure OpenAI**
- sufficient **Azure AI / Cognitive Services quota** in that region

### Azure OpenAI (customer-managed)

Prepare:

- the **Azure OpenAI endpoint**
- the **chat/completion deployment name**
- the optional **embeddings deployment name** if you use a separate embeddings model
- the **API key** only if your deployment will not use managed identity or Entra-based access

### OpenAI-compatible endpoint

Prepare:

- the **base URL**
- the **model name**
- the **API key** if required by the endpoint

## Database and optional platform settings

- A strong **Azure SQL admin password** (minimum 12 characters).
- A decision on whether **Azure Monitor alerting** can stay enabled in your subscription.
- Any additional **CORS allowed origins** if you plan to use a custom domain or additional web origins.
- Whether you want to enable **Azure Data Factory (ADF)** during deployment for batch or governed ingestion scenarios.

## What you will provide during deployment

In the current Marketplace wizard, you should expect to provide:

- **Environment Name**
- **Platform Region (Container Apps / APIM / VNet)**
- **LLM Provider**
- **Provider-specific AI settings** for the selected provider
- **CORS Allowed Origins** (optional)
- **Enable alerting** (optional toggle)
- **Enable debug logging** (optional toggle)
- **Enable Azure Data Factory** and related ADF options (optional)
- **Azure SQL Admin Password**
- **VNet CIDR**

## What you do not need to provide in the standard offer

You should **not** need to enter these in the standard Azure Marketplace flow:

- a customer-owned **Entra client ID**
- a manually created **app registration**
- container **image references**
- a manual **redirect URI**
- a manual **API base URL**

## Screenshot planning for this page

See [Installation screenshot inventory](./screenshot-inventory) for the planned capture set.

Planned screenshots tied to this page:

- `marketplace-prerequisites-checklist.png` — Overview of the prerequisite checklist and deployment decision points.
- `marketplace-llm-provider-decision.png` — Reference image showing how to decide between OpenRouter, Azure OpenAI, and OpenAI-compatible deployment paths.

