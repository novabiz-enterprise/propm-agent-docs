---
title: Identity and tenant consent for Marketplace installs
---

ProPM Agent uses **Microsoft Entra ID** for user sign-in.

The **current standard Marketplace deployment** uses a **publisher-managed shared Microsoft Entra application**.

For most customer deployments, this means:

- you do **not** create a customer-owned app registration before deployment
- you do **not** enter a customer client ID in the standard Marketplace wizard
- tenant restriction is still enforced for the deployed installation

## Why this matters

- Your tenant still controls who can sign in.
- Your security team can still review consent, tenant access, and sign-in behavior.
- The deployment path is simpler because the standard installation no longer depends on customer-owned app bootstrap during the Marketplace wizard.

## What the deployment configures automatically

The current deployment automatically wires:

- the shared **auth client ID**
- the shared **authority** and **OpenID configuration URL**
- the effective **redirect URI** and **post-logout redirect URI**
- the runtime auth configuration used by the web frontend
- tenant restriction checks in the API and frontend path

## What tenant admins do after deployment

1. Open the deployed application URL from the Marketplace deployment outputs.
2. Select **Sign In with Microsoft**.
3. Complete tenant consent if your tenant prompts for admin approval.
4. Confirm that the **Dashboard** loads successfully.

## Useful deployment outputs for troubleshooting

Depending on the deployment view and support workflow, the following values may be useful:

- `effectiveAuthClientId`
- `effectiveAuthAuthority`
- `effectiveOpenidConfigUrl`
- `effectiveRedirectUri`
- `effectivePostLogoutRedirectUri`
- `effectiveJwtAudience`

## When a customer-owned app registration is still needed

Most customers should **not** use a customer-owned app registration path.

Treat it as an exception only when:

- tenant policy explicitly blocks the shared publisher application model
- your organization requires a customer-owned identity app for procurement or governance reasons
- the deployment is being handled as a publisher-guided exception rather than the standard Marketplace wizard flow

If that exception path applies, handle it with your identity team and publisher support. It is **not** the normal install path documented in this section.

## Common issues

- **The consent prompt appears but cannot be completed**: the signed-in user may not have the required tenant admin or application admin rights.
- **Sign-in succeeds but you see “Access denied”**: your identity is valid, but your account is missing the required application or workspace access.
- **Sign-in fails with a redirect or consent error**: capture the deployment outputs above and route the issue through the support path, because the standard deployment uses publisher-managed auth values.

## Screenshot planning for this page

Planned screenshots tied to this page:

- `marketplace-deployment-outputs.png` — Deployment outputs showing the values used after installation.
- `app-first-sign-in-consent.png` — First-use Microsoft sign-in or admin-consent screen.
- `app-dashboard-after-sign-in.png` — Successful post-authentication landing on the Dashboard.

