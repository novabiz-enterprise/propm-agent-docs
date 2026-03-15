---
title: Access control (project members and roles)
---

## Purpose

Access control lets Project Owners manage:

- Who is a member of the project
- Which project role each member has
- Which custom roles exist for the project
- Which permissions are granted by each custom role

## Why this matters

Role-based access control supports the principle of least privilege, reduces risk, and strengthens audit readiness.

## Who can use it

- **View membership:** all project members
- **Manage members:** project members who have `members:manage`
- **Manage custom roles:** project members who have `roles:manage`

## Before you begin

- Open the project workspace.
- Confirm you have a project role that includes member or role management permissions.
- In the default demo project, any signed-in user is treated as **Project Admin** so access-control workflows can be tested immediately.

## Default built-in roles

Every project starts with built-in roles:

- **Project Admin** — full control over the project
- **Project Manager** — operational lead access
- **Contributor** — can contribute content and run agents
- **Reader** — read-only access
- **Auditor** — read-only audit-focused access

Built-in roles are server-enforced and cannot be deleted.

## Steps

### View project roles

1. In the project workspace, open **Access control**.
2. Review the **Roles & permissions** section.
3. Expand a role to inspect its permissions.

### Create a custom role

1. In **Access control**, go to **Roles & permissions**.
2. Enter a **role name**.
3. Optionally enter a **description**.
4. Select **Create**.
5. Expand the new role and enable the required permissions.

### Edit a custom role

1. Expand the target custom role.
2. Enable or disable the required permissions.
3. Confirm the updated permission set is reflected in the role card.

### Delete a custom role

1. Find the custom role.
2. Confirm the role is not currently assigned to any members.
3. Select **Delete**.

### Use seeded demo members

The default demo project starts with seeded members so you can validate RBAC changes without manual setup:

- creator account for the current signed-in user
- `pm@demo.local`
- `contributor@demo.local`
- `viewer@demo.local`

Use these seeded identities to test role changes, custom-role assignment, and removal behavior. The creator entry remains protected from removal.

### Add or update a member

1. In the project workspace, open **Access control**.
2. Enter the user’s **email**.
3. Select any available **role** (built-in or custom).
4. Select **Add / Update member**.

### Change an existing member’s role

1. In **Access control**, find the member row.
2. Use the role dropdown to select the new role.

### Remove a member

1. In **Access control**, find the member row.
2. Select **Remove**.

## Expected results

- The member list updates.
- The user’s permissions update based on their role.
- Custom roles are available immediately in the role selector.
- The default demo project provides seeded member data for immediate end-to-end RBAC demonstrations.

## Common issues

- **You cannot remove yourself**: the UI prevents self-removal to avoid accidental lockout.
- **You cannot delete a built-in role**: built-in roles are protected.
- **You cannot delete a custom role that is still assigned**: remove or reassign members first.
- **Access denied**: your project role does not include `members:manage` or `roles:manage`.

## Tips

- Use **Project Admin** only for true project administrators.
- Use **Project Manager** for day-to-day project leads.
- Use **Reader** or **Auditor** for stakeholders who need read-only visibility.
- Keep custom roles small and task-focused rather than duplicating full admin access.

