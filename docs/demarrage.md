---
title: Getting Started
slug: /demarrage
description: Prerequisites, access, authentication and first configuration.
---

[Home](./index.md) · [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) · [Interface and navigation](./interface-et-navigation.md)

![Projects directory](/img/screenshots/localized/fr/07-projects-directory.png)

## Goal

This page explains how to prepare access to ProPM Agent, successfully log in for the first time, choose the right project, and verify the essential technical points immediately after a deployment.

## Who can use this page

- **Business user** who receives a URL and must log in without heavy assistance;
- **Project owner** who must create or select the first project context;
- **Technical administrator** who must validate authentication, runtime and initial access.

## If you do not yet have an application URL

If your instance is not yet deployed, start with [Azure Marketplace Deployment](./deploiement-azure-marketplace.md). This step obtains the web URL, API and runtime parameters needed before any user login.

## Before you start

### User-side prerequisites

For normal use, you need:

- the **deployment URL** for ProPM Agent;
- a **Microsoft Entra ID** account authorized on the relevant tenant;
- access to at least one project, or the right to create one;
- a modern browser that supports recent web applications;
- if you use voice, a browser compatible with voice recognition APIs.

### Technical administrator prerequisites

The following items are explicitly expected by the observed configuration:

| Element | Role |
| --- | --- |
| `clientId` | Identifies the Entra application used on the web side |
| `authority` | Sets the Microsoft Entra login authority |
| `scopes` | Defines the permissions requested at authentication time |
| `redirectUri` and `postLogoutRedirectUri` | Control returns after login and logout |
| `allowedTenantId` | Restricts, if configured, the authorized tenant |
| `/runtime-config.json` | Dynamic override of URLs and authentication parameters at runtime |
| API URL and WebSocket URL | Allow the web interface to reach platform services and real‑time |
| Subscription / seats | Conditions access in deployments that require a per‑user license |

## First login flow

1. open the published URL of your deployment;
2. let the application redirect you to the Microsoft login page;
3. sign in with the authorized account;
4. return to the application, usually to the **Dashboard**;
5. verify the interface language, current project and any visible messages in the top bar;
6. open **Projects** to select or create your first project.

## Access states to know

Two different states exist in the interface:

- **read‑only**: you can view a surface but not modify its settings;
- **access denied**: the route or action is not available for your account.

This distinction is important for administration areas: a technical page may be viewable without being able to save changes.

## Expected result after the first login

If everything is correctly configured, you should be able to:

- reach the **Dashboard** under good conditions;
- open **Projects**;
- select or create a project;
- then access **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts** and **AI Log** according to your rights.

## Create your first project

The form observed in the application offers the following fields:

- **Project ID**;
- **Name**;
- **Description**;
- **Default data language**;
- **Additional data languages**.

![Project creation window](/img/screenshots/localized/fr/07-project-create-modal.png)

### Important point

The **project data language** is not the same as the **interface language**.

The data language influences, in particular:

- the default document categories offered;
- certain agent system settings or prompts;
- project‑specific initial values.

## If no project appears

Several screens display an explicit empty state when no project is selected. That is normal.

To proceed:

1. use the **project selector** in the top bar;
2. open **Projects** to choose an accessible project;
3. if you have creation rights, create a project;
4. if the list remains empty, verify with your administrator that your account has been added to the correct project.

## Post‑deployment checklist for the technical administrator

After a new deployment, check at minimum:

1. the **published web URL**;
2. the availability of the **`/runtime-config.json`** file;
3. consistency between the published URL and the **redirect URIs** configured in Entra;
4. the presence of a valid **client ID**;
5. the correct value of **authority** and, if used, **allowedTenantId**;
6. the **scopes** expected by the frontend and API;
7. the **API URL** and, if exposed, the **WebSocket URL**;
8. consumption or availability of **seats** if the plan requires it;
9. a first test login with a standard user account and an administrator account.

## Common checks during first login

### Microsoft account authenticates, but access does not yet work as expected

Check in this order:

1. the **tenant** used during login;
2. that the account is authorized in that tenant;
3. availability of a **seat** if the plan applies a per‑user license;
4. existence of at least one accessible project for this account.

### External / guest tenant or account case

If Microsoft indicates that your account does not exist in the target tenant, it usually means it must be invited as an **external / guest user** in the tenant hosting the application, then authorized on the enterprise app or via a group.

### `redirect URI mismatch`

If the login returns a redirect error, compare the actually published URL with the **Redirect URIs** of the Entra app registration. Each published environment must be listed exactly, without typos.

### `unauthorized_client` or client in the wrong tenant

This symptom usually indicates that the app registration is not in the correct tenant, or that the deployment uses an incompatible authority for a **single‑tenant** app.

### Successful access, but admin screen in read‑only

This often means the account is authenticated but has not been resolved as a modifiable platform administrator. Check admin groups, the token tenant and the admin resolution method used by your environment.

### Login OK, dashboard loaded, but additional verification is useful

This case often indicates that authentication succeeded but a further check of runtime, real‑time or connectivity remains useful. Open the **health indicator**, note the **API**, **realtime / WebSocket**, **auth**, **latency** and **current project** states, then proceed to [Interface and navigation](./interface-et-navigation.md) to read the panel and to [Maintenance, support and FAQ](./maintenance-support-faq.md) for verification pointers.

## Quick references — access to confirm

| Initial situation | First check | Then |
| --- | --- | --- |
| Microsoft returns an error before returning to the app | `authority`, tenant used, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | compare runtime configuration and Entra registration, then retest with the correct account |
| Microsoft login succeeds but the app remains blocked | availability of a **seat**, health indicator, API / WebSocket URLs | then check access to a project and the account’s actual rights |
| Login succeeds, dashboard loads, but a availability check is recommended | **auth**, **API**, **realtime / WebSocket**, latency and active project states | open [Interface and navigation](./interface-et-navigation.md), then [Maintenance, support and FAQ](./maintenance-support-faq.md) to distinguish auth, runtime and project context |
| The app opens but no project appears | project selector, **Projects** list, project membership, creation rights | ask the **Project Owner** to add the account to the correct project if necessary |
| A page is visible but not editable | project role or admin role, **read‑only** vs **access denied** state | then check the admin group or relevant project permissions |

## Situation, items to note and next page

| Observed situation | Items to note | Next page to open |
| --- | --- | --- |
| Microsoft error before returning to the app | exact message, screenshot, account used, actually opened URL | [Getting Started](./demarrage.md), then [Maintenance, support and FAQ](./maintenance-support-faq.md) if doubt persists |
| Dashboard loaded but availability check useful | **API**, **realtime**, **auth**, latency, test time, current project | [Interface and navigation](./interface-et-navigation.md), then [Maintenance, support and FAQ](./maintenance-support-faq.md) |
| No project visible | screenshot of project selector, account email, expected project | [Projects and workspace](./projets-et-espace-de-travail.md) |
| Page visible but controls greyed | page name, expected role, screenshot of disabled buttons | [Access control and project roles](./controle-acces-et-roles.md) or [Portfolio and technical administration](./portefeuille-et-administration-technique.md) depending on surface |
| Login OK but runs do not start | `Trace ID` if present, active project, health indicator, expected AI provider | [Maintenance, support and FAQ](./maintenance-support-faq.md), then [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md) |

For a situation that mixes authentication, runtime, project, seat or AI provider, use then [Maintenance, support and FAQ](./maintenance-support-faq.md) as a cross‑checking page.

## Best practices from the start

- choose the right project **before** launching agents;
- set the project data language correctly at creation;
- verify your permission level before modifying governance or technical administration;
- if your deployment uses a seat model, confirm that your access has been assigned;
- keep the deployment URL and, if needed, the displayed **Trace ID** for support.

## Next

- [Azure Marketplace Deployment](./deploiement-azure-marketplace.md)
- [Interface and navigation](./interface-et-navigation.md)
- [Projects and workspace](./projets-et-espace-de-travail.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
