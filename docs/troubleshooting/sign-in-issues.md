---
title: Sign-in issues
---

## Symptoms

- You cannot sign in.
- Sign-in works, but you see an error page.
- You see an error indicating your account does not exist in the tenant (guest user required).

## What to check

1. Confirm you are using the correct ProPM Agent URL.
2. Confirm your account is allowed to sign in (your organization controls this in Entra ID).
3. If you see a redirect error, ask your tenant admin to confirm the application registration has the correct redirect URI.
4. Ensure the deployment uses your **tenant ID** (single-tenant per customer).

## Tenant membership (guest user) errors

If you see an error like:

> Le compte d'utilisateur sélectionné n'existe pas dans le client « Microsoft Services » et ne peut pas accéder à l'application « c44b4083-3bb0-49c1-b47d-974e53cbdf3c » dans ce client. Le compte doit d'abord être ajouté en tant qu'utilisateur externe dans le client. Utilisez un autre compte.

Do the following:

1. Ask the tenant admin to invite your account as a **guest** user in the tenant that owns the app.
2. Accept the invitation and ensure your user is assigned to the enterprise app (or a group that has access).
3. Sign in again and select the correct tenant.

## If the issue persists

- Capture any displayed **trace ID**.
- Contact your tenant administrator.

## Unauthorized client error

If you see:

> `unauthorized_client: The client does not exist or is not enabled for consumers`

This means the app registration is **single-tenant** but the app is using `common`/consumer authority or the client ID is not in the tenant.

Fix (single-tenant):

1. Verify the app registration exists in the **customer tenant**.
2. Use the **tenant ID** in the Marketplace install (single-tenant).
3. Ensure the redirect URI includes the deployed web URL.


### AZ CLI checks

```bash
# Login to the tenant used during deployment
az login --tenant <TENANT_ID>

# Verify the application exists
az ad app show --id <CLIENT_ID>

# Verify the service principal exists (enterprise app)
az ad sp show --id <CLIENT_ID>
```

If `az ad app show` fails, the client ID is from another tenant. Create a new app registration in the correct tenant and update the Marketplace parameters.

## Deployment errors: AlertsManagement provider not registered

If a Marketplace deployment fails with `MissingSubscriptionRegistration` for `Microsoft.AlertsManagement`, the subscription is not registered for the Alerts Management provider. You can resolve it in one of two ways:

1. **Register the provider** (recommended): ask the subscription owner to register `Microsoft.AlertsManagement`, then retry deployment.
2. **Disable alert resources**: set the deployment parameter `enableAlerts` to `false` to skip alerting resources that depend on the provider.

