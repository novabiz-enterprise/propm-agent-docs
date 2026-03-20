---
title: Why Managed Applications?
---

ProPM Agent is deployed from **Azure Marketplace** as a **Managed Application**.

In simple terms:

- Your organization **purchases and deploys** the application from Marketplace.
- The application’s resources are deployed into **your Azure subscription**.
- Azure provides a consistent way to manage the application lifecycle (updates, visibility, governance).

## Why this matters

Managed Applications support enterprise procurement and governance expectations:

- **Procurement simplicity**: Marketplace ordering and subscription controls.
- **Consistent deployment model**: repeatable, standardized deployment process.
- **Tenant isolation**: your deployment runs within your Azure tenant and subscription.
- **Security review alignment**: Azure-native patterns and controls.
- **Operational visibility**: your admins can view deployed resources and health signals.

## Current deployment model

In the current architecture, a standard Marketplace installation typically includes:

- a **containerized web frontend** that loads runtime configuration after deployment
- a single public **Azure API Management** entry point
- private backend services running on **Azure Container Apps**
- private connectivity to data and messaging services such as Azure SQL, Cosmos DB, Storage, Azure AI Search, Key Vault, Service Bus, and Event Grid
- a deployment-time choice of AI provider:
  - **OpenRouter**
  - **Azure OpenAI (deploy during installation)**
  - **Azure OpenAI (customer-managed)**
  - **OpenAI-compatible endpoint**

## What you should expect

After deployment, you will typically have:

- a **web application URL** for end users
- a **single API entry point** for the web frontend
- built-in runtime images supplied by the release process, so you do not manually enter image names in the standard offer
- private internal services that are not directly exposed to end users

Most internal services and data services are not directly exposed.

## Why this matters for installation guidance

Because the frontend, API gateway, private services, and AI provider configuration are all part of one Managed Application deployment:

- the Marketplace install flow is the main deployment experience
- admins should prepare AI provider choices, region decisions, and network inputs before clicking **Create**
- most end users only need the final deployed application URL after installation

## Screenshot planning for this page

Planned screenshots tied to this page:

- `marketplace-offer-overview.png` — Azure Marketplace offer entry point used to introduce the deployment model.

