---
title: Portfolio and Technical Administration
slug: /portefeuille-et-administration-technique
description: Compare multiple projects, administer the platform, manage integrations, the AI provider, Azure OpenAI model selection, and seats.
---

[Home](./index.md) · [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) · [Maintenance, Support, and FAQ](./maintenance-support-faq.md)

![Portfolio Command Center](/img/screenshots/localized/en/02-portfolio-command-center.png)

## Objective

This page covers two distinct surfaces: the **Portfolio Command Center** for multi-project comparison and **Platform Administration** for tenant-wide technical configuration.

## Portfolio Command Center

The portfolio page allows you to compare multiple projects based on common signals.

### Confirmed Capabilities

- selection of multiple projects;
- configurable signal catalog;
- management of **weights** and **thresholds**;
- **minimum severity** filter;
- saved cohorts;
- comparison refresh.

### Observed Signals

The visible catalog includes, among others:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### What a Cohort Retains

A saved cohort remembers at minimum:

- the chosen projects;
- the activated signals;
- the weights;
- the thresholds;
- the minimum severity.

![Portfolio Cohort Editor](/img/screenshots/localized/en/02-portfolio-cohort-editor.png)

### Good Portfolio Usage

Use this page to compare, prioritize, and identify projects that warrant deeper investigation. It does not replace detailed work within each project.

### How to Read a Cohort with No Apparent Outlier

If a cohort displays **no outliers** or marked deviations, do not immediately conclude it's a bug. First check:

1. the projects actually selected;
2. the activated signals;
3. the **weights** and **thresholds** applied;
4. the **minimum severity** retained.

An empty cohort may simply indicate that your filters are too strict or that no project currently exceeds the chosen thresholds.

![Platform Administration](/img/screenshots/localized/en/18-platform-administration-overview.png)

## Platform Administration

The confirmed sections are as follows:

| Section | Role |
| --- | --- |
| Overview | Overview of rules, readiness, and points of attention |
| Platform integrations | Technical definitions of connectors and ingestion providers |
| AI provider settings | Choice of AI provider and associated settings |
| Marketplace / subscription | Subscription management, entitlements, and seats |
| Audit / activity | Activity history and administration tracking |

## Platform Integrations vs. Project Integrations

An important rule emerges from the product:

- the **platform level** holds the global technical definitions;
- the **project level** only consumes approved and safe bindings.

### Two Platform Families

- **execution connectors** for external actions;
- **ingestion providers** to feed knowledge.

### Examples of Observed Connectors

- Jira, Azure DevOps, GitHub, GitLab, ServiceNow;
- Teams, Slack, Outlook;
- SharePoint publish, Notion, webhook.

### Examples of Observed Ingestion Providers

- SharePoint, OneDrive, Confluence;
- Jira, Azure DevOps;
- Google Drive, Box, Dropbox, Amazon S3;
- Notion;
- manual upload and webhook.

## Readiness and Blocking Causes

A project integration or import option can be blocked due to:

- entitlement;
- policy;
- permission;
- degraded health;
- missing or disabled platform definition;
- disabled or unconfigured project binding.

Recommended remediation circuit:

1. re-read the blockage in the project page;
2. open **Platform Administration** to verify the technical definition;
3. validate the connector/provider readiness or health;
4. return to the project to confirm the binding and authorized usage.

### Common Case — Integration Defined at Platform Level but Unavailable in the Project

This case does not necessarily mean the platform is misconfigured. It may simply indicate that:

- the technical definition exists but is not yet **bound** to the project;
- the project does not have the correct **policy** or **role**;
- the **entitlement** covers the platform but not the actual intended usage;
- the connector's **health** is degraded.

For this scenario, maintain the following back-and-forth: **Projects and Workspace** to read the visible blockage, then **Platform Administration** to confirm the global definition, then back to the project to activate or correct the binding. See also [Projects and Workspace](./projets-et-espace-de-travail.md).

## AI Provider Settings

The visible provider families depending on the configuration context include, among others:

- **OpenRouter**;
- **OpenAI / Azure OpenAI**;
- **Anthropic**.

### How to Read Admin Statuses

The markers **Configuration**, **Validation**, **Test**, and **Operational** are not only for Azure OpenAI. They form the common reading framework for providers exposed in the admin UI.

| Status | What it means | What it does not yet guarantee |
| --- | --- | --- |
| Configuration | fields have been registered | neither technical validity nor actual connectivity |
| Validation | the configuration has passed expected administrative checks | not necessarily the complete connectivity test |
| Test | a connectivity test has been launched successfully | not yet activation for end users |
| Operational | the provider can be considered operational | not that all projects are already effectively using it |

### Quick Decision Tree — `Validate`, `Test`, `Operational`

| Symptom | Check First | Then |
| --- | --- | --- |
| `Validate` fails | endpoint, auth mode, potential secret, mandatory fields, deployment names | correct the configuration before any test |
| `Validate` succeeds but `Test` fails | actual connectivity, secret/API key, provider accessibility, remote resource | relaunch the test after correction, then check associated activity |
| the provider remains visible but cannot be activated / is not `Operational` | validation, test, allowed providers, entitlement, general readiness | do not switch users before full transition to operational state |

### Two Concepts to Distinguish

| Concept | Meaning |
| --- | --- |
| AI provider selected at deployment | Initial environment choice during installation |
| Effective AI provider | Provider actually used for new runs |

These two values can differ, particularly when a Marketplace deployment prepares **Azure OpenAI** and then the administrator later chooses the LLM deployment in **AI provider settings**. For a given run, the reference value remains the detail visible in the **AI Log**.

### Common Framework for All Providers

Regardless of the provider visible in the interface, keep the same reading framework:

1. fill in the provider's critical fields;
2. save the configuration;
3. launch validation;
4. launch the connectivity test;
5. only then activate the provider if the platform must actually switch to it;
6. finally confirm the effective provider in the **AI Log** on a real run.

### OpenRouter

For **OpenRouter**, monitor especially the endpoint, key or secret, chosen model family, and the complete passage through **Configuration → Validation → Test → Operational** before activation.

### OpenAI-compatible / OpenAI

For **OpenAI-compatible** providers, verify especially the consistency between endpoint, auth, version or expected model/deployment, and the actual connectivity test. A saved configuration is not enough to guarantee effective usage by runs.

### Anthropic

For **Anthropic**, the reflex remains the same: saved configuration, validation, test, activation, then confirmation in the **AI Log**. If the provider remains visible but not operational, first check auth, entitlement, and allowed providers before escalating.

### **Azure OpenAI** Case After a Marketplace Deployment

When the Marketplace deployment was launched with **Azure OpenAI**, the installation prepares the Azure integration but does not automatically lock in the exact LLM deployment at the time of the Marketplace form.

After installation, an administrator must open **Platform Administration** > **AI provider settings** to select the Azure OpenAI deployment actually visible in the customer's Azure OpenAI resource.

![Azure OpenAI Settings in Platform Administration](/img/screenshots/localized/fr/18-platform-administration-azure-openai-settings.png)

#### What Model Choice Means

On this page, the **LLM deployment name** field expects the **exact name of an existing Azure OpenAI deployment** in the customer's resource. It is not just a generic model family name. In the visible example, `gpt-4.1-mini` is the main LLM deployment and `text-embedding-3-small` is the optional embeddings deployment.

This decoupling is intentional: it allows the customer to change deployment or model after the Marketplace installation without redeploying the application.

#### Visible Azure OpenAI Fields

| Field | Role |
| --- | --- |
| Endpoint | Target Azure OpenAI endpoint, used for deployment discovery and connectivity tests |
| API version | Azure OpenAI API version used by administration |
| Authentication mode | Authentication mode supported by the platform: `managed_identity` or `api_key` |
| LLM deployment name | Exact name of the LLM deployment used for generative runs |
| Embeddings deployment name (optional) | Exact name of the embeddings deployment, if your configuration uses one |

#### Statuses and Operational Order

The screen displays four status markers:

- **Configuration**: the configuration has been saved or not;
- **Validation**: the administrative verification has been executed or not;
- **Test**: the connectivity test has been executed or not;
- **Operational**: synthesis of the operational state of this provider.

The expected journey in the interface is **Save → Validate → Test → Activate**. Based on the observed interface, **Validate** and **Test** first save pending modifications before executing their check.

#### What the Backend Verifies

Based on existing code, the backend verification of the **Azure OpenAI** provider checks at minimum:

- the presence of the **endpoint** and its format as an **absolute URL**;
- the presence of the **API version**;
- the validity of the **authentication mode** (`managed_identity` or `api_key`);
- the presence of an **API key** or a **secret reference** if the `api_key` mode is chosen;
- the presence of the **LLM deployment name**;
- the absence of spaces in the LLM and embeddings deployment names.

The backend also attempts to discover visible deployments by calling the Azure OpenAI endpoint **`/openai/deployments`** with the configured API version. If discovery succeeds, validation checks that the chosen **LLM deployment name** — and, if provided, the embeddings deployment — is indeed visible in the configured Azure OpenAI resource.

Practical consequences:

- if no deployment is yet visible, the administrator must create or activate the deployment in Azure, then refresh **Platform Administration**;
- if the entered name does not exist in the target resource, validation fails and may list the deployments visible on the Azure side;
- if the configuration remains incomplete, the **connectivity test** cannot succeed;
- provider activation remains blocked as long as configuration, validation, and test are not compliant.

#### Recommended Control

1. open **Platform Administration**;
2. go to **AI provider settings**;
3. fill in the **endpoint**, **API version**, and **authentication mode** suitable for your Azure OpenAI resource;
4. choose the exact **LLM deployment name** visible in the customer's Azure OpenAI resource;
5. add the **Embeddings deployment name** if needed;
6. save the configuration;
7. launch **Validate** to check the configuration and deployment visibility;
8. launch **Test** to confirm connectivity;
9. then activate the provider if the tenant must actually switch to this configuration;
10. finally check the **AI Log** on a real run.

Until this step is finalized, the **Azure OpenAI** choice at deployment describes the intended provider, but not yet the exact LLM deployment used in production.

See also [Azure Marketplace Deployment](./deploiement-azure-marketplace.md).

## Subscription, Entitlement, and Seats

The product manages a license model with seat consumption according to the plan.

### Observed Behaviors

- a seat can be consumed upon login;
- access can be blocked if no more seats are available;
- the admin interface exposes the plan, purchased seats, and licensed users;
- an administrator can remove a licensed user, then free up capacity for later reassignment;
- a 24-hour removal window is followed to prevent abusive rotations;
- the commercial state may also expose `billing state`, `payment state`, `subscription status`, and `entitlement flags`.

### Why This is Important

An access incident is not always an authentication problem. It can also stem from a lack of seats or an entitlement blocking a premium integration or AI provider.

## Platform Technical Markers

The observed Azure infrastructure relies on the following building blocks:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Key Takeaways for Technical Audiences

- the **platform** level controls what exists globally;
- the **project** level chooses what is actually used locally;
- integrations must be validated before exposure to teams;
- subscription and entitlements influence access, connectors, and the AI provider;
- for **Azure OpenAI**, the Marketplace choice must be completed in **AI provider settings** with the exact name of an LLM deployment visible in the Azure OpenAI resource;
- before activation, the sequence **Save → Validate → Test** must confirm configuration, deployment visibility, and connectivity;
- the **AI Log** remains the reference for the provider actually used on a run.

## Next

- [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
- [Getting Started](./demarrage.md)
- [Glossary](./glossaire.md)
