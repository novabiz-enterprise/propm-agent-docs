---
title: Azure Marketplace Deployment
slug: /deploiement-azure-marketplace
description: Deploy ProPM Agent from Azure Marketplace, choose the AI provider during installation, and finalize the onboarding in the administration.
---

[Home](./index.md) · [Getting Started](./demarrage.md) · [Portfolio and technical administration](./portefeuille-et-administration-technique.md)

## Objective

This page explains how to deploy **ProPM Agent** from **Azure Marketplace**, then how to properly finish the onboarding on the client side.

The essential point to remember is simple:

- **Azure Marketplace installs the platform**;
- the **LLM Provider** field allows selecting the **AI provider family** used by the environment;
- the final onboarding of the AI provider is then completed in **Platform Administration > AI Provider Settings**.

In other words, deployment alone does not make the AI provider immediately usable for end users.

## What an administrator decides during deployment

During the Marketplace wizard, the administrator decides on:

- which **Azure subscription** to deploy the solution into;
- which **resource group** and which **region**;
- which **Entra groups** will administer the platform;
- which **primary AI provider** the environment will use;
- what initial rules for **CORS**, **logging**, **monitoring** and **network** to apply.

## What follows after deployment

After installation, the platform administrator must still:

1. open **Platform Administration**;
2. go to **AI Provider Settings**;
3. complete the fields specific to the chosen provider;
4. save the configuration;
5. launch **Validate**;
6. launch **Test**;
7. launch **Activate**;
8. then confirm the actually used provider in the **AI Log**.

## Before launching the deployment

Prepare at minimum:

- the target **Azure subscription**;
- the main **resource group** and **region**;
- the **Entra Group Object IDs** of platform administrators;
- any **bootstrap users**;
- the choice of **AI provider** to use at launch;
- if you choose **Azure OpenAI**, the administrator who will later finalize the **LLM deployment name** in the administration;
- any additional **CORS origins** if the application must be called from other domains;
- a compatible addressing plan for the **VNet CIDR**;
- preparation of the first connection test and **Entra redirect URIs**.

## Step 1 — Basic tab

The first step defines the Azure scope of the deployment.

![Basic tab of Azure Marketplace deployment](/img/deploiement/deploiement-01-onglet-base.png)

### Visible fields

| Field | What it is for |
| --- | --- |
| Subscription | Selects the Azure subscription that will host the installation |
| Resource group | Defines the main resource group of the deployment |
| Region | Defines the Azure region of the Marketplace instance |
| Application name | Gives the instance name of ProPM Agent |
| Managed resource group | Defines the managed group that will receive the solution’s internal resources |

## Step 2 — Application Settings tab

This screen groups identity, AI provider, initial security, monitoring and network settings.

![Current application settings of the deployment](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Visible fields in the screenshot

| Field | Simple reading |
| --- | --- |
| Environment Name | Short environment name, e.g. `dev`, `test` or `prod` |
| Platform Administration Entra Group Object IDs | Entra groups authorized to administer the platform |
| Platform Administration Bootstrap Users (optional) | Backup or bootstrap users if you use them |
| Allow Azure RBAC admin recovery | Allows an Azure RBAC‑based admin recovery |
| LLM Provider | Chooses the AI provider family used by the environment |
| CORS Allowed Origins | Lists additional web domains allowed |
| Enable alerting (Azure Monitor) | Enables Azure Monitor alerting |
| Enable debug logging | Enables more detailed logs for in‑depth technical reading |
| Password / Confirm password | Sets the initial password requested by the wizard |
| VNet CIDR | Defines the private network range reserved for the platform |

### Important point

In the current form version, the **region** is no longer selected in this tab. It remains defined in the **Basic** tab.

## Step 3 — Choose the AI provider during deployment

The **LLM Provider** field is not only for Azure OpenAI. It allows choosing one of the AI providers visible in the product.

### The 4 cases to know

| AI Provider | When to choose | Main advantage | What you decide during deployment | What you finish in the administration |
| --- | --- | --- | --- | --- |
| **Azure OpenAI** | if the client’s environment is already centered on Azure, Entra, private network and Microsoft governance | natural integration into the Azure ecosystem | you choose Azure OpenAI as the target provider | you provide the endpoint, API version, authentication mode and especially the **LLM deployment name** |
| **OpenAI** | if the client wants to use the OpenAI platform directly | simple, direct configuration | you choose OpenAI as the target provider | you complete the URL used, the API key or secret reference, the default model, then validate and activate |
| **OpenRouter** | if the client wants to compare several model families via a single entry point | one connection for multiple models and routing scenarios | you choose OpenRouter as the target provider | you complete the Base URL, API key and default model, then validate and activate |
| **OpenAI‑compatible** | if the client uses a partner gateway, a corporate endpoint or a self‑hosted runtime | allows connecting a compatible implementation without changing the product | you choose OpenAI‑compatible as the target provider | you complete the exact endpoint, authentication and expected model or deployment |

### Simple rule to remember

Deployment **designates** the provider. Administration **makes the provider operational**.

## What the end user actually perceives

For the end user, the chosen provider influences:

- the **models** actually used;
- the level of **technical governance** imposed by the organization;
- how the admin team manages **keys**, **secrets** and **deployments**;
- sometimes the **speed of onboarding** or the **flexibility of model change**.

But the end user does not need to understand the whole installation mechanism. Their need is simply that the provider is:

- configured;
- validated;
- tested;
- activated;
- traceable in the **AI Log**.

## Case 1 — Azure OpenAI

The screenshot below shows the observed behavior when **LLM Provider** is set to **Azure OpenAI**.

![Azure OpenAI selection with indication of subsequent configuration in the administration](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

### When this choice is relevant

Choose **Azure OpenAI** when the client:

- already works mainly in Azure;
- wants a strong framework around **Entra**, the network and Microsoft governance;
- wants to select specific deployments in their Azure OpenAI resource.

### What this implies during deployment

During Marketplace:

- you choose **Azure OpenAI** as the provider;
- the installation may prepare the associated Azure connection;
- for the managed Azure OpenAI path, the deployment now probes several Azure OpenAI regions and automatically selects the best available region based on real model availability;
- the runtime keeps stable Azure OpenAI deployment aliases named `chat` and `embeddings`;
- the exact runtime model choice is no longer frozen globally at deployment time.

### What still needs to be done after installation

After deployment, open **Platform Administration > AI Provider Settings** and confirm or review:

- the Azure OpenAI **region** selected by the deployment;
- the live **model catalog** discovered for that region;
- the **recommended model** proposed by the platform;
- the currently selected model synchronized behind the stable `chat` alias;
- the connectivity and validation state.

### Important specificity

If the deployment has already installed a secret or key for Azure OpenAI, the interface may indicate that no **API key visible to the user** is required in this form. In that case, the administrator focuses mainly on model selection, connectivity tests and deployment synchronization.

If an administrator intentionally selects a GPT generation lower than **GPT-5**, the UI should display a clear warning before saving. Saving a new Azure OpenAI model should then synchronize the real Azure OpenAI deployment behind the `chat` alias rather than asking the user to rename deployments manually.

## Case 2 — OpenAI

### When this choice is relevant

Choose **OpenAI** when the client wants to use the OpenAI APIs directly, without going through Azure OpenAI or an intermediate gateway.

### Practical advantages

- configuration is generally more direct;
- simple reading for a team already standardizing on OpenAI;
- no need to manage an Azure deployment name.

### What you decide during deployment

During Marketplace, you simply decide that the environment will use **OpenAI** as the main provider.

### What still needs to be done after installation

In **AI Provider Settings**, then complete:

- the **Base URL** or endpoint used by the product;
- the **default model**;
- the **API key** or **secret reference**;
- the **Save → Validate → Test → Activate** sequence.

### Impact on the client

The end user does not need to see these settings. What matters is that the administrator has confirmed connectivity and the actually used model.

## Case 3 — OpenRouter

### When this choice is relevant

Choose **OpenRouter** when the client wants to access several model families via a single entry point, e.g. to compare results or adjust routing more easily.

### Practical advantages

- one connection on the platform side;
- useful for comparing multiple models;
- handy when the organization wants to keep routing flexibility.

### What you decide during deployment

During Marketplace, you indicate that the environment will use **OpenRouter** as the main provider.

### What still needs to be done after installation

In **AI Provider Settings**, then complete:

- the **Base URL**;
- the **API key** or secret reference;
- the default model;
- then launch **Save → Validate → Test → Activate**.

### Simple example

A client wants to start quickly, compare several models and then stabilize their choice later. **OpenRouter** is then a good candidate for an initial framing phase.

## Case 4 — OpenAI‑compatible

### When this choice is relevant

Choose **OpenAI‑compatible** when the client does not use direct OpenAI or Azure OpenAI, but a **compatible endpoint**, e.g.:

- a corporate gateway;
- a partner solution;
- a self‑hosted compatible runtime.

### Practical advantages

- allows connecting a compatible provider without changing ProPM Agent;
- useful when the client’s architecture requires a specific IA entry point;
- good choice for a tenant that wants to keep an internal control or routing layer.

### What you decide during deployment

During Marketplace, you indicate that the environment will use an **OpenAI‑compatible** provider.

### What still needs to be done after installation

In **AI Provider Settings**, then complete:

- the exact **Base URL** or endpoint;
- the expected **authentication mode**;
- the **key** or **secret reference**;
- the **model** or expected deployment;
- then launch **Save → Validate → Test → Activate**.

### Point of caution

Here, the main issue is the **real compatibility** of the endpoint. A recorded configuration is not enough: the **Validate + Test** pair is essential.

## Common path after installation for all AI providers

Regardless of the provider chosen at deployment, always follow this path:

1. open **Platform Administration**;
2. go to **AI Provider Settings**;
3. select the provider to prepare;
4. fill in the required fields;
5. click **Save** to record;
6. click **Validate** to check consistency;
7. click **Test** to verify real connectivity;
8. click **Activate** to make the provider effective for end users;
9. then open **AI Log** to confirm the provider actually used on a real run.

### How to read the admin buttons

| Button | What it means |
| --- | --- |
| Save | records the entered configuration |
| Validate | checks that the expected fields are coherent |
| Test | verifies real connectivity with the provider |
| Activate | makes the provider operational for end users |

## Pre‑check before Verify + create

Before launching creation:

1. verify the subscription, region and resource groups;
2. reread the Entra groups and any bootstrap users;
3. confirm the chosen AI provider;
4. if **Azure OpenAI** is selected, clearly identify who will finalize the **LLM deployment name** after installation;
5. check network, monitoring and password settings.

## After deployment

### Minimum technical checks

1. note the actual published **web URL**;
2. verify the **API URL** and, if exposed, the **WebSocket URL**;
3. verify the availability of `/runtime-config.json`;
4. validate consistency between the published URL and the **Entra redirect URIs**;
5. open **Platform Administration > AI Provider Settings** and confirm the chosen provider is properly prepared;
6. then verify that the expected state passes through **Configuration → Validation → Test → Operational**.

### Entra authentication

Depending on your deployment mode, verify or finalize the Entra application registration:

- `clientId`;
- `authority` or tenant;
- `scopes`;
- `redirectUri` and `postLogoutRedirectUri`;
- if needed, the exposed API and its scopes.

### First functional test

After publication, perform at least:

- a login with a standard user account;
- a login with an expected admin account;
- opening **Projects**;
- opening the **Dashboard**;
- opening **Platform Administration > AI Provider Settings**;
- a **Save → Validate → Test → Activate** on the chosen provider if not already done;
- a check of the **AI Log** to confirm the provider actually used and the model family.

### Information to pass to the client team

Once the platform is technically validated, provide at minimum:

1. the actual **published URL**;
2. the expected tenant and, if needed, the rule for inviting **guest** accounts;
3. the first test account or group;
4. the AI provider actually ready for use;
5. the [Getting Started](./demarrage.md) page to follow for the first login.

### Useful checkpoints after installation

| Point to check | Why it matters |
| --- | --- |
| Published URL and Entra redirect URIs | avoids first access blocked despite a successful deployment |
| Administration groups and bootstrap users | ensures initial entry into administration |
| Chosen AI provider | avoids confusing a declared provider with an actually operational one |
| Validation and Test | confirms the configuration is not just recorded but usable |
| AI Log | confirms the actually used provider on a run |
| Azure monitoring | ensures the requested observability is active |

## Next

- [Getting Started](./demarrage.md)
- [Portfolio and technical administration](./portefeuille-et-administration-technique.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
