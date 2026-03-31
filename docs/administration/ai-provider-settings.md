---
title: AI Provider Settings
---

## Purpose

Use **AI Provider Settings** in **Platform Administration** to review and govern which AI provider the platform uses at runtime.

## Key concepts

### Deployment-selected AI Provider

This is the provider selected during deployment or installation.

It should remain visible after deployment for transparency and auditability.

### Effective AI Provider

This is the provider the application is currently using for new runs.

Depending on policy and your role, the effective provider may remain the deployment-selected value or may later be changed by an authorized admin.

## Who can use it

- **Subscription Administrator** — default editable owner when policy allows changes
- **Delegated Platform Administrator** — editable only when explicitly granted AI-provider administration rights
- **Other authenticated users** — read-only only when the deployment exposes this information

## What you can review

- deployment-selected provider
- effective provider
- model family or routing settings exposed by the deployment
- credential-reference status
- validation state and last successful validation time
- provider change history

## What authorized admins can do

When policy allows, authorized admins can:

- validate provider configuration
- update the effective provider
- review the audit trail for provider changes

Users must never receive raw secret values in the browser.

## Recommended review flow

1. Open **Platform Administration → AI Provider Settings**.
2. Confirm the **Deployment-selected AI Provider**.
3. Confirm the **Effective AI Provider**.
4. Review validation status, credential-reference status, and any policy notes.
5. If a change is required and policy allows it, update the effective provider and verify the audit history.

## Runtime behavior

- New runs use the current effective provider after runtime refresh.
- In-flight runs keep the provider they started with.
- Historical runs should continue to show the provider that was actually used.

## Read-only behavior

If you can view this page but cannot edit it, that is expected when your role allows transparency but not provider administration.

Read-only users may inspect provider identity and status, but they must not be able to change provider configuration.

## Common issues

- **The provider is visible but locked**: your account probably does not have AI-provider administration rights.
- **The effective provider does not match the deployment-selected provider**: an authorized admin may have changed it after deployment.
- **Validation failed**: review the credential-reference status and backend validation details without exposing secrets to the browser.

## Expected results

- The deployment-selected provider remains visible after installation.
- The effective provider is clear.
- Provider changes are controlled, auditable, and policy-aware.
