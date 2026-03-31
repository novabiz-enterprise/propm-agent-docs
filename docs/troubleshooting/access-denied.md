---
title: Permissions and “Access denied”
---

## Symptoms

- You can sign in, but actions fail with “Access denied”.
- You cannot upload documents, run agents, or edit settings.
- A page is visible, but every save or validate action is disabled.

## Common causes

- You are not a member of the selected project.
- Your role is read-only (Viewer/Auditor).
- You are trying to perform a Project Owner–only action (membership, categories, agent configuration).
- You can view an admin route, but your account is only a read-only viewer for that surface.
- The current tenant or subscription context does not grant you editable Platform Administration rights.

## What to do

1. Confirm you selected the correct project.
2. Ask the project’s **Project Owner** to add you and assign the appropriate role.
3. If your organization uses seat-based licensing enforcement, confirm you have an assigned seat.
4. If the page is visible but read-only, confirm whether you are expected to have edit rights for that surface. Read-only metadata visibility is often expected behavior, not a defect.

## Read-only versus access denied

These states are different:

- **Read-only**: you may inspect non-secret metadata such as status, health, validation time, and entitlement posture, but you cannot change anything.
- **Access denied**: the route or action is blocked entirely for your current account.

Common examples:

- A project member may view **Project settings** but not edit them.
- A non-admin user may be able to inspect **Platform Administration** in read-only mode when the deployment exposes it.
- Only the resolved **Subscription Administrator** or an explicitly delegated admin should be able to edit tenant-scoped admin surfaces.

