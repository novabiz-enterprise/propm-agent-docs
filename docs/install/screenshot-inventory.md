---
title: Installation screenshot inventory
---

This page tracks the screenshot set we will capture with **Playwright** for the Azure Marketplace installation and post-deployment onboarding flow.

For now, this inventory gives each image a stable filename, target section, and description so the documentation and later video production stay aligned.

When the live deployment is ready, we can capture the app-facing screenshots by resuming from a **manually authenticated browser session** and the **exact live URL** you provide after sign-in.

## File location convention

When screenshots are generated, store them under:

- `static/img/install/marketplace/<filename>`

During live capture and review, the raw Playwright screenshots can first be collected in the automation output folder and then copied into the docs static image folder using the stable names below.

Use the filenames below so the docs, screenshots, and later video storyboards stay consistent.

## Suggested video groupings

- **Video 1 — Start a Marketplace deployment**
- **Video 2 — Choose and configure the AI provider**
- **Video 3 — Review, create, and inspect deployment outputs**
- **Video 4 — First sign-in and first validation after deployment**

## Azure Portal / Marketplace capture set

| Filename | Target documentation section | What to capture | Description | Suggested video | Status |
|---|---|---|---|---|---|
| `marketplace-offer-overview.png` | Why Managed Applications / Create an installation | Azure Marketplace offer entry page before selecting **Create** | Shows where the deployment starts in Azure Marketplace | Video 1 | Planned |
| `marketplace-prerequisites-checklist.png` | Prerequisites checklist | Rendered prerequisites checklist or equivalent pre-deployment checklist view | Summarizes what the admin should have ready before deployment starts | Video 1 | Planned |
| `marketplace-llm-provider-decision.png` | Prerequisites checklist | AI-provider decision aid or deployment preparation view | Explains how to decide between OpenRouter, Azure OpenAI, and OpenAI-compatible paths | Video 2 | Planned |
| `marketplace-basics-subscription-region.png` | Create an installation | Basics step with subscription, resource group, and region | Shows the deployment scope and initial Azure selection choices | Video 1 | Planned |
| `marketplace-application-settings-core.png` | Create an installation | Top of **Application Settings** showing environment name, platform region, and LLM provider | Shows the required fields common to every deployment | Video 1 | Planned |
| `marketplace-application-settings-openrouter.png` | Create an installation → LLM Provider | OpenRouter-specific fields | Shows the default provider configuration path | Video 2 | Planned |
| `marketplace-application-settings-azure-openai-managed.png` | Create an installation → LLM Provider | Azure OpenAI (deploy during installation) selection and visible fields | Shows the fully managed Azure OpenAI path | Video 2 | Planned |
| `marketplace-application-settings-azure-openai-customer-managed.png` | Create an installation → LLM Provider | Azure OpenAI customer-managed fields | Shows endpoint and deployment-name entry for an existing customer resource | Video 2 | Planned |
| `marketplace-application-settings-openai-compatible.png` | Create an installation → LLM Provider | OpenAI-compatible endpoint fields | Shows the compatible-endpoint deployment path | Video 2 | Planned |
| `marketplace-application-settings-network-and-sql.png` | Create an installation | Lower Application Settings area covering allowed origins, alerts, debug, SQL password, and VNet CIDR | Highlights the network and database inputs that often need review by administrators | Video 3 | Planned |
| `marketplace-review-create-summary.png` | Create an installation | Review + create summary | Shows the final validation step before Azure starts deployment | Video 3 | Planned |
| `marketplace-deployment-outputs.png` | Post-deployment / Identity and tenant consent | Deployment outputs showing `webContainerFqdn`, `apiGatewayUrl`, and `apimGatewayUrl` | Shows exactly where to find the URLs needed after deployment | Video 3 | Planned |

## Post-deployment application capture set

| Filename | Target documentation section | What to capture | Description | Suggested video | Status |
|---|---|---|---|---|---|
| `app-first-sign-in-consent.png` | Identity and tenant consent for Marketplace installs | First-use sign-in and consent experience | Shows the tenant-admin approval moment after deployment | Video 4 | Planned |
| `app-dashboard-after-sign-in.png` | Post-deployment / Quick start | Dashboard landing page after successful sign-in | Confirms that deployment and sign-in succeeded | Video 4 | Planned |
| `app-projects-first-view.png` | Post-deployment / Quick start | Projects page or first project list view | Shows the first practical validation step after login | Video 4 | Planned |

## Capture prerequisites for later live screenshot generation

Before we generate the live screenshots later:

- complete the deployment successfully in Azure
- manually sign in to the target browser session
- provide the exact **authenticated live application URL** after sign-in
- if Azure Portal wizard screenshots are also needed in the same pass, provide an already-authenticated Azure Portal URL for the offer or deployed Managed Application resource

## Planned Playwright capture workflow

When you provide the live deployed URL later, the screenshot workflow should follow this pattern:

1. manually complete sign-in in the browser
2. provide the exact authenticated start URL
3. resume Playwright from that authenticated state instead of automating login
4. capture the required screenshots using the stable names in this inventory
5. copy the selected final images into `static/img/install/marketplace/`

This keeps the screenshot set aligned with the same manual-login live validation model already used for deployed-environment testing.

## How this will be used later

Once live capture begins, we can:

1. capture the installation-supporting application screens after manual sign-in
2. save screenshots using the stable names above
3. embed the generated images into the matching installation pages
4. reuse the same names and descriptions to assemble multiple short installation and onboarding videos
