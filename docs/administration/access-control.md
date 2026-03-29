---
title: Access control (project members and roles)
---

## Purpose

Access control is the project-level administration area for membership and role-based access control (RBAC). It lets an administrator decide:

- who can enter the project
- which role each member receives
- which custom roles exist for this project
- which permissions each custom role grants

## Why this matters

Role-based access control supports the principle of least privilege, reduces risk, and strengthens audit readiness.

## Who can use it

- **View membership and roles:** project members who can access the project workspace
- **Manage members:** project members who have `members:manage`
- **Manage custom roles:** project members who have `roles:manage`

## Before you begin

- Open the project workspace.
- Open the **Access control** tab.
- Confirm you have a project role that includes member or role management permissions if you plan to make changes.
- In the default demo project, the seeded walkthrough keeps the access-control tab editable so you can test the full flow quickly.

## Default built-in roles

Every project starts with built-in roles:

- **Project Owner** — full control over the project
- **Project Manager** — operational lead access
- **Contributor** — can contribute content and run agents
- **Viewer** — read-only access
- **Auditor** — read-only audit-focused access

Built-in roles are server-enforced and cannot be deleted.

## What you see on the page

The page is split into two working areas:

1. **Roles & permissions**
   - review built-in roles
   - create custom roles
   - expand a role to inspect or edit its permissions
2. **Members**
   - add a member by email
   - assign a built-in or custom role
   - change an existing member’s role
   - remove a member when it is safe to do so

At the top of the page, ProPM Agent also shows who **you** are in the current session and, when available, the protected **creator** entry for the project.

## Steps

### View project roles

1. In the project workspace, open **Access control**.
2. Review the **Roles & permissions** section.
3. Expand any role to inspect its permissions.
4. Use this review before adding members so you know exactly what each role allows.

### Create a custom role

1. In **Access control**, go to **Roles & permissions**.
2. Enter a **role name**.
3. Optionally enter a **description**.
4. Select **Create**.
5. Expand the new role.
6. Turn the required permissions on or off.
7. Confirm the role card now shows the permission badges you expect.

### Edit a custom role

1. Expand the target custom role.
2. Enable or disable the required permissions.
3. Confirm the updated permission set is reflected in the role card.
4. If the role is already assigned to members, verify the change is intentional before continuing.

### Delete a custom role

1. Find the custom role.
2. Confirm the role is not currently assigned to any members.
3. Select **Delete**.
4. If the delete button stays unavailable, first reassign or remove the members using that role.

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
5. Confirm the member appears in the table with the expected role.

### Change an existing member’s role

1. In **Access control**, find the member row.
2. Use the role dropdown to select the new role.
3. Confirm the member row updates to the new role.

### Remove a member

1. In **Access control**, find the member row.
2. Select **Remove**.
3. Confirm the member disappears from the table.

## Safety rules you should expect

- **Built-in roles cannot be deleted.** Create a custom role if you need a variation.
- **A custom role that is still assigned cannot be deleted.** Reassign members first.
- **You cannot remove yourself from the project from this screen.** Ask another administrator if you need your own access changed.
- **Protected creator entries cannot be removed from the UI.** This helps preserve a safe administrative baseline for the project.
- **Read-only users can still review the setup.** Editing controls stay disabled when the required permission is missing.

## Expected results

- The member list updates.
- The user’s permissions update based on their role.
- Custom roles are available immediately in the role selector.
- The default demo project provides seeded member data for immediate end-to-end RBAC demonstrations.
- Unsafe actions such as deleting built-in roles, removing yourself, or deleting a role still in use stay blocked in the UI.

## Common issues

- **You cannot remove yourself**: the UI prevents self-removal to avoid accidental lockout.
- **You cannot change your own role from this screen**: ask another administrator to make that change safely.
- **You cannot delete a built-in role**: built-in roles are protected.
- **You cannot delete a custom role that is still assigned**: remove or reassign members first.
- **Access denied**: your project role does not include `members:manage` or `roles:manage`.

## Tips

- Use **Project Owner** only for true project administrators.
- Use **Project Manager** for day-to-day project leads.
- Use **Viewer** or **Auditor** for stakeholders who need read-only visibility.
- Keep custom roles small and task-focused rather than duplicating full admin access.

