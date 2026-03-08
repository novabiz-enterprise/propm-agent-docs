---
title: Identity prerequisite — customer-owned Entra app registration
---

ProPM Agent uses **Microsoft Entra ID** for user sign-in.

This means your organization must provide (and manage) an **Entra app registration**.

## Why this matters

- Your tenant controls who can sign in.
- Your security team can review and manage the identity configuration.
- Roles and access can be managed through Entra users and groups.

## High-level steps (admin)

1. Create an **App registration** in Microsoft Entra ID.
2. Record the **Application (client) ID**.
3. Configure the app registration for web sign-in:
   - Add the deployed ProPM Agent web URL as a **redirect URI**.
4. Define and assign application roles (recommended):
   - Tenant Admin
   - Project Owner
   - Project Manager
   - Contributor
   - Viewer
   - Auditor

## Notes on timing

The web application URL is generated during deployment. In many organizations:

1. You create the app registration first (to get the **client ID** required by the Marketplace wizard).
2. After deployment, you update the app registration to include the deployed web URL as a redirect URI.

## AZ CLI (single-tenant) quick start

Use these commands **in the customer tenant**.

> Replace placeholders: `<APP_NAME>`, `<WEB_URL>` (the deployed web URL), `<TENANT_ID>`.

```bash
# Login to the customer tenant
az login --tenant <TENANT_ID>

# Create the app registration (single-tenant)
APP_ID=$(az ad app create \
  --display-name "<APP_NAME>" \
  --sign-in-audience AzureADMyOrg \
  --web-redirect-uris "<WEB_URL>" \
  --query appId -o tsv)

echo "Client ID: $APP_ID"

# (Optional) Expose an API scope so you can use api://<clientId>/.default
az ad app update --id $APP_ID --set api.requestedAccessTokenVersion=2

# Create a service principal (enterprise app) for assignments
az ad sp create --id $APP_ID
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

