---
title: Azure Marketplace Deployment
slug: /deploiement-azure-marketplace
description: Launch a ProPM Agent deployment from Azure Marketplace, fill in the current fields in the wizard, and finalize Azure OpenAI after installation.
---

[Home](./index.md) · [Getting Started](./demarrage.md) · [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)

## Objective

This page documents the deployment journey observed in the Azure Portal wizard for the Marketplace ProPM Agent offer, based on the provided screenshots and the parameters confirmed in the repository.

## Before Launching the Deployment

Prepare at a minimum:

- The target **Azure subscription**;
- The **resource group** and **Azure region** strategy;
- The **Group Object IDs** for the platform administrators in Entra ID;
- The bootstrap users if you plan to use them;
- The choice of **LLM Provider**;
- If you select **Azure OpenAI**, the administrator who will finalize the LLM deployment later in **Platform Administration**;
- Additional **CORS** origins if needed;
- A compatible addressing plan for the **VNet CIDR**;
- The post-deployment steps for Entra ID authentication and the first connection test.

## Step 1 — **Basics** Tab

The first step is to define the Azure scope of the deployment.

![Basics tab of the Azure Marketplace deployment](/img/deploiement/deploiement-01-onglet-base.png)

### Visible Fields

| Field | Usage |
| --- | --- |
| Subscription | Selects the Azure subscription that will host the deployment |
| Resource Group | Defines the main resource group for the deployment |
| Region | Defines the deployment region for the managed application |
| Application Name | Defines the name of the published instance |
| Managed Resource Group | Defines the managed group created for the solution's internal resources |

The screenshot also shows the **Create new** dialog for the resource group.

## Step 2 — **Application Settings** Tab

The currently observed version of the **Application Settings** tab no longer shows a **Platform Region** field. This screen now groups identity, AI provider, initial security, monitoring, and network parameters.

![Current application settings for the deployment](/img/deploiement/fr/deploiement-02-application-settings-actuel.png)

### Visible Fields in the Screenshot

| Field | Observed Usage |
| --- | --- |
| Environment Name | Short environment name, e.g., `dev`, `test`, or `prod` |
| Platform Administration Entra Group Object IDs | Entra ID group(s) used for platform administration |
| Platform Administration Bootstrap Users (optional) | Optional bootstrap users |
| Allow Azure RBAC admin recovery | Enables admin recovery based on Azure RBAC |
| LLM Provider | Chooses the AI provider used by the platform; if Azure OpenAI is selected, the final LLM selection is made later in administration |
| CORS Allowed Origins | Defines additional allowed web origins |
| Enable alerting (Azure Monitor) | Enables Azure Monitor alerting supervision |
| Enable debug logging | Enables more detailed diagnostic logs |
| Password / Confirm Password | Sets the initial password required by the wizard |
| VNet CIDR | Defines the private network range for the platform |

Important points: In the current version of the form, the region choice is no longer made in this tab. The deployment region remains defined in the **Basics** tab. The Entra ID groups must be prepared before deployment, and the **VNet CIDR** must not conflict with your existing addressing plan.

The **LLM Provider** field remains the point for choosing the AI provider; the **Azure OpenAI** case adds a post-deployment administration step.

## Step 3 — **Azure OpenAI** Case During Deployment

The following screenshot shows the observed behavior when **LLM Provider** is set to **Azure OpenAI (marketplace-managed account)**.

![Azure OpenAI selection with indication of later configuration in administration](/img/deploiement/fr/deploiement-03-azure-openai-marketplace-managed.png)

The help text visible under the field confirms two important points:

- The Azure OpenAI account / endpoint preparation is done during deployment;
- The final **LLM / deployment** selection is completed later in **Platform Administration > AI Provider Settings**.

### What This Implies

| Timing | Decision Made |
| --- | --- |
| Marketplace Deployment | Azure OpenAI is selected as the target provider and the associated Azure integration is prepared |
| Platform Administration > AI provider settings | The administrator chooses the actual Azure OpenAI deployment visible in the customer's Azure OpenAI resource |
| AI Log | The effective provider and actual model family used are then verified |

### What the Deployment Does Not Complete on Its Own

Selecting **Azure OpenAI** in the Marketplace is not enough to make the provider directly usable for end users. After installation, you still need to:

1. Open **Platform Administration**;
2. Fill in or confirm the provider parameters in **AI provider settings**;
3. Choose the actual **LLM deployment name** visible on the Azure OpenAI side;
4. Run **Save → Validate → Test → Activate** before considering the provider as operational;
5. Finally confirm the result on a real run in the **AI Log**.

| Case | What is decided at deployment | What is finalized later in administration |
| --- | --- | --- |
| Azure OpenAI (`marketplace-managed account`) | Target provider and preparation of Azure integration | Selection of LLM deployment, validation, test, and activation |
| Other provider chosen in `LLM Provider` | Target provider choice during installation | Final checks, any secrets, validation, and activation according to the provider |

### Recommended Journey After Installation

1. Complete the Marketplace deployment;
2. Open **Platform Administration**;
3. Go to **AI provider settings**;
4. Select the Azure OpenAI deployment / LLM to use from those visible in the customer's Azure OpenAI resource;
5. Save the configuration;
6. Run a test run and check the result in the **AI Log**.

For the detailed validation and admin operation sequence, see also [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md).

## Verification Before **Review + create**

Before validating:

1. Check the subscription, region, and resource groups;
2. Review the Entra ID groups and bootstrap users;
3. Confirm the chosen LLM provider;
4. If **Azure OpenAI** is selected, identify who will finalize the LLM deployment in administration after installation;
5. Check the network, monitoring, and password values.

## After Deployment

### Minimum Technical Checks

1. Note the actual published **web URL**;
2. Check the **API** URL and, if exposed, the **WebSocket** URL;
3. Check the availability of **`/runtime-config.json`**;
4. Validate consistency between the published URL and the Entra ID **redirect URIs**;
5. If **Azure OpenAI** was selected, open **Platform Administration > AI provider settings** and verify that the expected deployment / LLM is selected.

### Entra ID Authentication

Depending on your deployment mode, verify or finalize the Entra ID application registration:

- `clientId`;
- `authority` / tenant;
- `scopes`;
- `redirectUri` and `postLogoutRedirectUri`;
- If necessary, the exposed API and its scopes.

### First Functional Test

After publication, perform at least:

- A connection with a standard user account;
- A connection with an expected admin account;
- Opening **Projects**;
- Opening the **Dashboard**;
- A quick check of **Platform Administration > AI provider settings** if Azure OpenAI was selected;
- A check of the **AI Log** to confirm the effective provider and model family used.

## Handover to the First Test User

Once the deployment is technically validated, formalize a brief handover to the acceptance tester or the first project owner:

1. Provide the actual usable **published URL**;
2. Confirm the expected **tenant** and, if necessary, the invitation rule for **guest** accounts;
3. Ask the tester to follow the [Getting Started](./demarrage.md) page for the first connection and project creation or selection;
4. If **Azure OpenAI** was selected, confirm that the LLM has been specified in **Platform Administration** before the first run;
5. If the first test fails, immediately retrieve the test time, the exact symptom, and, when available, the first useful **Trace ID** for support.

This handover reduces false diagnostics between a technically successful deployment and user access that is still incomplete.

## Frequent Incidents After Installation

- **`redirect URI mismatch`**: The published URL does not match the Entra ID Redirect URIs;
- **`unauthorized_client`**: Client ID in the wrong tenant or incompatible authority;
- **resource principal not found**: The API or its scope exposure is not fully configured;
- **no more seats available**: Entra ID connection succeeds but product access remains blocked;
- **incomplete Azure OpenAI configuration**: The provider was chosen at deployment but no LLM deployment has been confirmed yet in **AI provider settings**;
- **Azure provider not registered for alerting**: Some Azure Monitor resources may fail if the required provider is not registered.

## Quality of Integrated Screenshots

The three screenshots integrated on this page show **no visible error messages** or failure banners.

- The first screenshot shows a resource group creation dialog with an empty field, no error displayed;
- The second screenshot shows the current version of the **Application Settings** tab, with no **Platform Region** field visible;
- The third screenshot shows **Azure OpenAI (marketplace-managed account)** selected, with help text that explicitly refers to the final LLM choice in administration.

## Next Steps

- [Getting Started](./demarrage.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
