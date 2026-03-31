---
title: Identity and access control
---

ProPM Agent is designed for enterprise identity and access control.

## Identity

- Users sign in using **Microsoft Entra ID**.
- Your organization manages sign-in eligibility using Entra users and groups.
- Tenant-wide administration rights should be resolved from authoritative tenant or subscription context during login.

## Roles

ProPM Agent uses roles to apply the principle of least privilege.

### Tenant-level roles

Some admin capabilities require tenant-level roles.

Common tenant-level actor types include:

- **Subscription Administrator** — default editable owner for **Platform Administration**
- **Delegated Platform Administrator** — editable only for explicitly granted tenant-wide capabilities
- **Read-only Admin Viewer** — can inspect exposed non-secret metadata but cannot mutate tenant-scoped settings

Tenant-wide administration may include:

- **Platform Integrations**
- **AI Provider Settings**
- **Marketplace & Subscription**

If the platform cannot determine tenant-scoped edit authority reliably at login, the admin experience should fail closed to read-only mode.

### Project roles

Within each project, access is scoped by project roles such as:

- **Owner**
- **Manager**
- **Contributor**
- **Viewer**
- **Auditor**

Project administrators can manage project-scoped settings and approved integration bindings when their project permissions allow it, but they do not own tenant-scoped credentials, AI-provider changes, or subscription administration.

## Read-only versus access denied

These are different states:

- **Read-only** means you are allowed to inspect non-secret metadata but not make changes.
- **Access denied** means the route or action is not available to your current account.

For example, a user may be able to open an admin page in read-only mode to inspect health, validation status, or entitlement posture, while only the **Subscription Administrator** can edit the same page.

## Why this matters

Role scoping reduces risk and supports governance by ensuring users only see and do what they need to.

