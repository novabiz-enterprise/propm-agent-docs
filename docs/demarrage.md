---
title: Getting Started
slug: /demarrage
description: Prerequisites, access, authentication, and initial configuration.
---

[Home](./index.md) · [Azure Marketplace Deployment](./deploiement-azure-marketplace.md) · [Interface and Navigation](./interface-et-navigation.md)

![Projects Directory](/img/screenshots/localized/en/07-projects-directory.png)

## Objective

This page explains how to prepare access to ProPM Agent, successfully log in for the first time, choose the right project, and verify essential technical points immediately after a deployment.

## Who can use this page

- **business user** who receives a URL and needs to log in without heavy assistance;
- **project owner** who needs to create or select the first project context;
- **technical administrator** who needs to validate authentication, runtime, and initial access.

## If you do not yet have an application URL

If your instance is not yet deployed, start with [Azure Marketplace Deployment](./deploiement-azure-marketplace.md). This step provides the web URL, API, and necessary runtime parameters before any user connection.

## Before you start

### User-side prerequisites

For normal use, you need:

- the **deployment URL** for ProPM Agent;
- a **Microsoft Entra ID** account authorized on the relevant tenant;
- access to at least one project, or the right to create one;
- a modern browser that supports recent web applications;
- if you use voice, a browser compatible with speech recognition APIs.

### Technical administrator prerequisites

The following elements are explicitly provided by the observed configuration:

| Element | Role |
| --- | --- |
| `clientId` | Identifies the Entra application used on the web side |
| `authority` | Defines the Microsoft Entra login authority |
| `scopes` | Defines the permissions requested at authentication time |
| `redirectUri` and `postLogoutRedirectUri` | Control returns after login and logout |
| `allowedTenantId` | Restricts, if configured, the authorized tenant |
| `/runtime-config.json` | Dynamic override of authentication URLs and parameters at runtime |
| API URL and WebSocket URL | Allow the frontend to connect to backend services and real-time |
| Subscription / seats | Conditions access in deployments that enforce per-user licensing |

## First login journey

1. Open the published URL of your deployment;
2. Let the application redirect you to the Microsoft login page;
3. Log in with the authorized account;
4. Return to the application, typically on the **Dashboard**;
5. Check the interface language, the current project, and any visible messages in the top bar;
6. Open **Projects** to select or create your first project.

## Access states to know

Two different states exist in the interface:

- **read-only**: you can view an area but not modify its settings;
- **access denied**: the route or action is not available for your account.

This distinction is important for administration areas: you can sometimes open a technical page for viewing without being able to save changes.

## Expected result after the first login

If everything is correctly configured, you should be able to:

- reach the **Dashboard** without blocking errors;
- open **Projects**;
- select or create a project;
- then access **Workspace**, **Knowledge**, **Agents**, **Reports & Artifacts**, and **AI Log** according to your rights.

## Create a first project

The form observed in the application offers the following fields:

- **Project ID**;
- **Name**;
- **Description**;
- **Default data language**;
- **Additional data languages**.

![Project creation window](/img/screenshots/localized/en/07-project-create-modal.png)

### Important point

The **project data language** is not the same as the **interface language**.

The data language notably influences:

- the document categories proposed by default;
- certain system settings or prompts on the agent side;
- initial values specific to the project.

## If no project appears

Several screens display an explicit empty state when no project is selected. This is normal.

To proceed:

1. use the **project selector** in the top bar;
2. open **Projects** to choose an accessible project;
3. if you have creation rights, create a project;
4. if the list remains empty, verify with your administrator that your account has indeed been added to the correct project.

## Post-deployment checklist for the technical administrator

After a new deployment, check at minimum:

1. the **web URL** actually published;
2. the availability of the **`/runtime-config.json`** file;
3. consistency between the published URL and the **redirect URIs** configured in Entra;
4. the presence of a valid **client ID**;
5. the correct value for **authority** and, if used, **allowedTenantId**;
6. the **scopes** expected by the frontend and the API;
7. the **API** URL and, if exposed, the **WebSocket** URL;
8. the consumption or availability of **seats** if the plan imposes it;
9. a first connection test with a standard user account and an administrator account.

## Common first login incidents

### The Microsoft account authenticates, but the application remains stuck

Check in this order:

1. the **tenant** used during login;
2. that the account is indeed authorized in this tenant;
3. the availability of a **seat** if the plan applies per-user licensing;
4. the existence of at least one project accessible to this account.

### Tenant error or external / guest account

If Microsoft indicates that your account does not exist in the target tenant, this usually means it must be invited as an **external / guest user** in the tenant hosting the application, then authorized on the enterprise application or via a group.

### `redirect URI mismatch`

If the login returns a redirection error, compare the actually published URL with the **Redirect URIs** of the Entra application registration. Each published environment must be listed exactly, without typos.

### `unauthorized_client` or client in the wrong tenant

This symptom usually indicates that the application registration is not in the correct tenant, or that the deployment uses an authority incompatible with a **single-tenant** application.

### Login successful, but admin screen is read-only

This often means the account is authenticated but has not been resolved as a modifiable platform administrator. Check the admin groups, the token tenant, and the admin resolution method used by your environment.

### Login OK, dashboard loaded, but health panel degraded

This case often indicates that authentication succeeded but the runtime, real-time, or connectivity remain partially degraded. Open the **health indicator**, note the **API**, **realtime / WebSocket**, **auth** status, **latency**, and **current project**, then proceed to [Interface and Navigation](./interface-et-navigation.md) to read the panel and to [Maintenance, Support, and FAQ](./maintenance-support-faq.md) for the remediation process.

## Quick decision tree — blocked access

| Initial Symptom | Check First | Then |
| --- | --- | --- |
| Microsoft returns an error before returning to the application | `authority`, tenant used, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | compare the runtime configuration and the Entra registration, then retest with the correct account |
| Microsoft login succeeds but the application remains stuck | availability of a **seat**, health indicator, API / WebSocket URLs | then check access to a project and the account's actual rights |
| Login succeeds, dashboard loads, but health panel is degraded | **auth**, **API**, **realtime / WebSocket** statuses, latency, and active project | open [Interface and Navigation](./interface-et-navigation.md), then [Maintenance, Support, and FAQ](./maintenance-support-faq.md) to distinguish auth, runtime, and project context |
| Application opens but no project appears | project selector, **Projects** list, project membership, creation right | ask the **Project Owner** to add the account to the correct project if necessary |
| A page is visible but not editable | project role or admin role, **read-only** vs **access denied** state | then check the admin group or the relevant project permissions |

## Symptom, evidence to collect, and next page

| Symptom | Evidence to Collect | Next Page to Open |
| --- | --- | --- |
| Microsoft error before returning to the application | exact message, screenshot, account used, URL actually opened | [Getting Started](./demarrage.md), then [Maintenance, Support, and FAQ](./maintenance-support-faq.md) if doubt persists |
| Dashboard loaded but health degraded | **API**, **realtime**, **auth** statuses, latency, test time, current project | [Interface and Navigation](./interface-et-navigation.md), then [Maintenance, Support, and FAQ](./maintenance-support-faq.md) |
| No project visible | screenshot of project selector, account email, expected project | [Projects and Workspace](./projets-et-espace-de-travail.md) |
| Page visible but controls grayed out | page name, expected role, screenshot of disabled buttons | [Access Control and Project Roles](./controle-acces-et-roles.md) or [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) depending on the area |
| Login OK but runs do not start | `Trace ID` if present, active project, health indicator, expected AI provider | [Maintenance, Support, and FAQ](./maintenance-support-faq.md), then [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) |

For an incident mixing authentication, runtime, project, seat, or AI provider, then use [Maintenance, Support, and FAQ](./maintenance-support-faq.md) as a cross-diagnostic page.

## Best practices from the start

- choose the correct project **before** launching agents;
- correctly define the project data language at creation;
- verify your permission level before modifying governance or technical administration;
- if your deployment uses a seat-based model, ensure your access has been properly assigned;
- keep the deployment URL and, if necessary, the error **trace ID** for support.

## Next

- [Azure Marketplace Deployment](./deploiement-azure-marketplace.md)
- [Interface and Navigation](./interface-et-navigation.md)
- [Projects and Workspace](./projets-et-espace-de-travail.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
