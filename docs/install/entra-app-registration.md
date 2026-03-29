---
title: Identity setup — publisher-managed shared application
---

ProPM Agent uses **Microsoft Entra ID** for user sign-in.

The deployment experience has been simplified by moving away from per-customer app creation during ARM deployment and toward a publisher-managed shared Microsoft Entra application.

## Why this matters

- Your tenant controls who can sign in.
- Your security team can review and manage the identity configuration.
- Roles and access can be managed through Entra users and groups.

## Supported identity model

### Publisher-managed shared application

This deployment now defaults to a shared publisher app:

- client ID: `aa3cedbf-4bbb-4078-a25a-74978fd1f832`
- authority: `https://login.microsoftonline.com/organizations`
- stable callback placeholder: `https://propm-auth.novabiz.pro/auth/callback`
- stable post-logout placeholder: `https://propm-auth.novabiz.pro/auth/logout`

Each customer installation is then restricted to its own tenant by:
- APIM claim validation
- API tenant enforcement
- runtime auth metadata sent to the SPA

## Do I need to create `propm-auth.novabiz.pro`?

Yes.

To make the shared-auth strategy work in production, you need a real publisher-controlled domain for the callback/logout endpoints.

At minimum:
1. create DNS for `propm-auth.novabiz.pro`
2. serve `/auth/callback` and `/auth/logout`
3. add those exact URIs to the shared Entra app registration

## What the deployment automates

Deployment automatically:
- injects shared auth settings into API, APIM, and frontend runtime config
- injects the allowed tenant ID for the installation
- configures a stable callback placeholder instead of using the dynamic customer frontend host as redirect URI

## What is still useful to verify manually

Security teams should verify the shared Entra application configuration:

- **Authentication** → correct stable publisher callback/logout URIs
- **Expose an API** → `api://<clientId>` and `user_impersonation`
- **API permissions** → delegated permission and admin consent

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

The SPA no longer relies on the dynamic per-customer web host as the redirect URI. It now expects a stable publisher callback URI from runtime config.

In **App registrations** → your app → **Authentication**:

1. Add platform: **Single-page application** (if not already present)
2. Add the exact deployed frontend origin in **Redirect URIs**, for example:
   - `https://propm-auth.novabiz.pro/auth/callback`
3. Click **Save**

If this value does not match exactly, sign-in fails with:

`AADSTS50011: The redirect URI ... does not match the redirect URIs configured for the application ...`

## Common issues

- **Sign-in succeeds but you see “Access denied”**: your user is authenticated, but you are missing required application role assignments.
- **Sign-in fails with a redirect error**: the redirect URI configured in Entra does not match the actual deployed web URL.
- **Sign-in fails with redirect mismatch**: confirm the shared app contains `https://propm-auth.novabiz.pro/auth/callback`.

