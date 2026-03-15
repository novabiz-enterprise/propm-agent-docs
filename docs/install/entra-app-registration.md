---
title: Identity prerequisite — customer-owned Entra app registration
---

ProPM Agent uses **Microsoft Entra ID** for user sign-in.

By default, the Managed Application now performs **integrated Entra bootstrap during deployment** (recommended).

## Why this matters

- Your tenant controls who can sign in.
- Your security team can review and manage the identity configuration.
- Roles and access can be managed through Entra users and groups.

## High-level steps (admin)

1. In Marketplace deployment, keep **Automatically create/configure Entra app during deployment** enabled.
2. Provide/confirm your **tenant ID**.
3. Optionally provide an existing `authClientId` if you want to reuse an existing app registration.
4. Keep **Grant admin consent during bootstrap** enabled for immediate sign-in readiness.
5. Define and assign application roles (recommended):
   - Tenant Admin
   - Project Owner
   - Project Manager
   - Contributor
   - Viewer
   - Auditor

## Notes on timing

The frontend URL is generated during deployment. Integrated bootstrap handles this timing by running a second synchronization step that updates redirect URIs after the web host is known.

## Deployment-integrated bootstrap (default)

Integrated bootstrap is wired in infrastructure deployment via:
- [`repo/infra/modules/entra-bootstrap.bicep`](repo/infra/modules/entra-bootstrap.bicep:1)
- [`repo/infra/main.bicep`](repo/infra/main.bicep:58)

It performs automatically:
- Application ID URI: `api://<clientId>`
- delegated scope: `user_impersonation`
- `requestedAccessTokenVersion=2`
- delegated permission + admin consent
- redirect URI synchronization from deployed web host

It produces effective deployment outputs:
- `effectiveAuthClientId`
- `effectiveAuthAuthority`
- `effectiveOpenidConfigUrl`
- `effectiveAuthScopes`
- `effectiveJwtAudience`
- `effectiveRedirectUri`

## AZ CLI fallback (manual bootstrap only)

Use this only when tenant policy blocks Graph automation from ARM deployment scripts.

```bash
az login --tenant <TENANT_ID>

APP_DISPLAY_NAME="<APP_NAME>" \
WEB_REDIRECT_URI="<WEB_URL>" \
TENANT_ID="<TENANT_ID>" \
bash repo/scripts/entra/bootstrap_entra_app.sh
```

### Suggested scopes for Marketplace parameters

- `authClientId` = `APP_ID`
- `authAuthority` = `https://login.microsoftonline.com/<TENANT_ID>`
- `openidConfigUrl` = `https://login.microsoftonline.com/<TENANT_ID>/v2.0/.well-known/openid-configuration`
- `authScopes` = `openid,profile,api://<clientId>/user_impersonation`

## Required API exposure (avoid AADSTS500011)

For single-tenant installs, make sure your app registration exposes an API scope that matches the runtime scope request.

In **App registrations** → your app → **Expose an API**:

1. Set **Application ID URI** to `api://<APP_ID>`
2. Click **Add a scope** and create:
   - Scope name: `user_impersonation`
   - Who can consent: `Admins only` (recommended)
   - State: `Enabled`

Then in **API permissions**:

1. **Add a permission** → **My APIs** → your app
2. **Delegated permissions** → select `user_impersonation`
3. Click **Add permissions**
4. Click **Grant admin consent for `Tenant`**

Without this step, sign-in can fail with:

`AADSTS500011: The resource principal named api://<APP_ID> was not found...`

## Required redirect URI (avoid AADSTS50011)

The SPA uses its current origin as redirect URI. In this project that behavior comes from runtime MSAL config and resolves to the deployed web host origin.

In **App registrations** → your app → **Authentication**:

1. Add platform: **Single-page application** (if not already present)
2. Add the exact deployed frontend origin in **Redirect URIs**, for example:
   - `https://web-ca.<your-suffix>.<region>.azurecontainerapps.io`
3. Click **Save**

If this value does not match exactly, sign-in fails with:

`AADSTS50011: The redirect URI ... does not match the redirect URIs configured for the application ...`

## Common issues

- **Sign-in succeeds but you see “Access denied”**: your user is authenticated, but you are missing required application role assignments.
- **Sign-in fails with a redirect error**: the redirect URI configured in Entra does not match the actual deployed web URL.

