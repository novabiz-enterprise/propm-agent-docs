---
title: AI providers and platform integrations
slug: /ai-providers-platform-integrations
description: Prepare platform integrations, configure AI providers, validate readiness, and understand how platform setup differs from project usage.
---

[Home](./index.md) · [Portfolio](./portfolio.md) · [Seats management and app updates](./seats-management-app-updates.md)

![Platform administration](/img/screenshots/localized/en/18-platform-administration-overview.jpg)

## Objective

This page covers the technical preparation of ProPM Agent at platform level:

- **Platform integrations** for connectors and ingestion providers;
- **AI provider settings** for runtime model providers;
- readiness, validation, tests, health and project binding rules.

Use it to answer: **is the platform properly prepared for the organization before projects use it?**

## Visible administration sections

| Section | Role |
| --- | --- |
| Overview | summary of the overall preparation state |
| Platform integrations | technical definitions of connectors and ingestion providers |
| AI provider settings | configuration, validation, test and activation of the AI provider |
| Audit / activity | history of administrative actions |

For seats and application image rollout, use [Seats management and app updates](./seats-management-app-updates.md).

## Platform integrations vs project integrations

A core rule of the product is:

- the **platform level** decides what exists technically;
- the **project level** decides what is actually used in a given project;
- **governance** decides who can act with the tool.

| Responsibility | Kept in Platform Administration | Exposed in Project integrations |
| --- | --- | --- |
| Technical setup | tenant URLs, authentication strategy, API keys, secret references, scopes and source or target definitions | read-only readiness, health and block reasons |
| Operational binding | enable or disable the enterprise connector/provider and validate technical health | **Bind to project**, **Validate binding** and **Disable** for project availability |
| User guidance | admin audit, validation history and tenant-scoped configuration | contextual links such as **Open Platform Administration** and **Open Knowledge imports** |

For full detail by connector family, see [Connectors and integrations](./connecteurs-jira-et-sharepoint).

## Validation and security rules

Platform validations apply provider-specific requirements:

- mandatory fields;
- compatible authentication strategy;
- HTTPS URLs when required;
- valid SFTP port;
- explicit source or target;
- connectivity probe only when enabled by the administrator or platform configuration.

Secrets, keys and sensitive references must stay in the platform configuration designed for that purpose. Do not place them in a note, action payload or description visible to project users.

## Preparation and blocking causes

An integration can be blocked due to:

- **policy**;
- **permission**;
- **health** to check;
- missing platform definition;
- incomplete provider-specific configuration or validation;
- project binding not opened.

Recommended verification circuit:

1. reread the project-side block;
2. open **Platform Administration**;
3. verify the technical definition of the connector or provider;
4. return to the project to confirm binding and authorized use.

## AI provider families

The provider families visible in the product include, among others:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**.

| Provider | When to choose | What usually needs to be completed |
| --- | --- | --- |
| **OpenRouter** | when you need to compare multiple model families through a single connection | Base URL, key, default model |
| **OpenAI-compatible** | when your organization uses a gateway or compatible endpoint | exact endpoint, auth, key or secret, expected model |
| **OpenAI** | when your organization uses OpenAI directly | URL, key or secret, default model |
| **Azure OpenAI** | when your organization is centered on Azure and wants to choose Azure OpenAI deployments | endpoint, API version, auth mode, LLM deployment name |

## AI provider readiness

| Status | What it means |
| --- | --- |
| **Configuration** | fields are saved |
| **Validation** | the configuration passed expected checks |
| **Test** | real connectivity has been verified |
| **Activate** | the provider is activated in admin configuration |
| **Operational** | the provider can be considered usable |

Simple preparation flow:

1. open **AI provider settings**;
2. select the desired provider;
3. fill in the requested fields;
4. click **Save**;
5. click **Validate**;
6. click **Test**;
7. click **Activate**;
8. check the result in **AI Log**.

## Azure OpenAI specifics

With **Azure OpenAI**, you often need to complete:

- the **Endpoint**;
- the **API version**;
- the **authentication mode**;
- the **LLM deployment name**;
- optionally the **Embeddings deployment name**.

For details on choosing an AI provider during Marketplace deployment, see [Azure Marketplace deployment](./deploiement-azure-marketplace.md).

## Effective provider vs deployment-selected provider

Distinguish two notions:

- **Deployment-selected AI Provider**: provider selected in the initial environment configuration;
- **Effective AI Provider**: provider actually used at runtime for a given run.

The effective value is the most reliable reference when investigating a concrete run. It appears in **AI Log** and can differ from the deployment-selected value.

## Takeaways

- the platform level prepares connectors and providers;
- the project level opens their real use;
- governance decides who can act;
- an AI provider is ready only when it is registered, validated, tested and activated;
- **AI Log** remains the reference to confirm the provider actually used.

## Next

- [Portfolio](./portfolio.md)
- [Seats management and app updates](./seats-management-app-updates.md)
- [Connectors and integrations](./connecteurs-jira-et-sharepoint.md)
- [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md)
