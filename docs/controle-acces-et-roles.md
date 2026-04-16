---
title: Access Control and Project Roles
slug: /controle-acces-et-roles
description: Administer members, standard roles, custom roles, and RBAC safeguards at the project level.
---

[Home](./index.md) · [Projects and Workspace](./projets-et-espace-de-travail.md) · [Maintenance, Support, and FAQ](./maintenance-support-faq.md)

## Objective

**Access Control** is the RBAC administration area at the project level. It allows you to decide:

- who can enter the project;
- what role each member receives;
- what custom roles exist in this project;
- what permissions these roles grant.

## Why It's Important

Rights condition a large part of the experience: creating artifacts, running agents, managing members, modifying settings, and approvals. Correctly reading roles avoids confusing an incident with a simple lack of permission.

## Who Can Use This Page

- **view members and roles**: any member who can access the workspace;
- **manage members**: user with `members:manage`;
- **manage custom roles**: user with `roles:manage`.

![Project Access Control View](/img/screenshots/localized/en/11-access-control.png)

## Standard Roles Observed

Each project starts with protected built-in roles:

| Role | Typical Usage |
| --- | --- |
| Project Owner | Complete project administration |
| Project Manager | Daily operational management |
| Contributor | Content contribution, use of agents and deliverables according to permissions |
| Viewer | Read-only consultation |
| Auditor | Audit and traceability-oriented consultation |

These built-in roles are protected server-side and cannot be deleted from the interface.

## Quick Matrix of Standard Roles

Custom roles can extend or reduce this scheme. The table below describes the **usual behavior** of the observed standard roles.

| Common Action | Project Owner | Project Manager | Contributor | Viewer | Auditor |
| --- | --- | --- | --- | --- | --- |
| Access the project, Workspace, and read-only screens | Yes | Yes | Yes | Yes | Yes |
| Search in knowledge, review PM Docs and AI Log | Yes | Yes | Yes | Yes | Yes |
| Launch a run in **Agents** | Yes | Yes | Yes | No by default | No by default |
| Edit work contents and draft deliverables | Yes | Yes | Yes | No | No |
| Manage members, roles, and main project settings | Yes | No | No | No | No |
| Audit and traceability-oriented review | Yes | Yes | Yes | General read | Yes |

## Custom Roles

The product supports the creation, editing, and deletion of **custom roles** at the project level.

### Permissions Explicitly Observed

The exposed permissions include notably:

- `project:read`
- `project:update`
- `agent:run`
- `agent:configure`
- `documents:read`
- `documents:upload`
- `documents:delete`
- `report:generate`
- `history:read`
- `members:read`
- `members:manage`
- `roles:manage`
- `settings:manage`

### Permission → Concrete Impact

| Permission | Impacted Surface | Symptom if Missing |
| --- | --- | --- |
| `agent:configure` | **Agent configuration** tab in the **Workspace** | the page remains viewable or the save controls are disabled |
| `report:generate` | creation of drafts, artifacts, and PM Docs | the user can review, but cannot generate the expected deliverable |
| `history:read` | **AI Log** and detailed run review | traceability remains inaccessible or very limited |
| `settings:manage` | project settings, governance, and certain integrations | settings are visible but not modifiable |
| `members:manage` | **Members** area in **Access control** | unable to add, remove, or change a member |
| `roles:manage` | custom roles and their permissions | unable to create, adjust, or delete a custom role |

This table is mainly for diagnostics: a missing or grayed-out action is not always a bug, but often the direct consequence of a permission not granted.

![Custom Role Editor](/img/screenshots/localized/en/11-custom-role-editor.png)

## What You See on the Page

The page is divided into two work areas:

1. **Roles & permissions**
   - review of built-in roles;
   - creation of custom roles;
   - inspection or modification of a custom role's permissions;
2. **Members**
   - add a member by email;
   - assign a built-in or custom role;
   - change a role;
   - remove a member when still authorized.

The page may also display your current identity and, when exposed, the protected entry of the project **creator**.

## Recommended Workflow

### Review Roles Before Adding a Member

1. open **Workspace**;
2. select the **Access control** tab;
3. review existing roles;
4. check if a standard role is sufficient or if a custom role is necessary.

### Create a Custom Role

1. open **Roles & permissions**;
2. enter a **name**;
3. optionally add a **description**;
4. create the role;
5. enable or disable the desired permissions;
6. verify the displayed badges or permissions before real use.

### Add or Update a Member

1. open **Members**;
2. enter the **email**;
3. choose the desired role;
4. save;
5. verify that the member's row reflects the expected role.

If the user belongs to another tenant, keep in mind that an **external / guest account** must first be invited on the identity side before project RBAC can assign them a useful role. In practice, if the email seems correct but the user remains unfound or without real effect, first check the **Entra / guest** posture and then return to the project role assignment.

### Change the Role of an Existing Member

1. locate the member's row in **Members**;
2. use the role selector on that row;
3. choose the new role;
4. confirm that the row displays the updated role.

### Remove a Member

1. locate the row of the member to remove;
2. use the delete action if available;
3. confirm that the member disappears from the list;
4. if the action remains blocked, first verify that it is neither your own account nor the protected creator entry.

## Confirmed RBAC Safeguards

The interface and backend enforce several important protections:

- you cannot **delete your own access** from this screen;
- you cannot **modify your own role** from this screen;
- the **project creator** entry remains protected;
- a **system role** cannot be deleted;
- a **custom role still assigned** cannot be deleted;
- users without management rights see a **viewable** page with disabled controls.

## Read-Only vs Access Denied

These two states do not mean the same thing:

- **read-only**: the page remains visible, but the add, edit, or delete controls are disabled;
- **access denied**: the route or action is not available for your account.

In practice, this allows certain profiles to review the RBAC configuration without being able to modify it.

### How to Read a Denial

| What You Observe | Most Likely Reading | Recommended Reflex |
| --- | --- | --- |
| a visible but grayed-out control | surface exposed in **read-only** | first check if your role includes the expected permission |
| an action missing that exists for other profiles | permission or role not granted | compare your standard or custom role with the expected action |
| a visible action but impossible despite the UI | server-side RBAC safeguard or protection constraint | check if it's a system role, your own account, or a protected entry |

This mini-diagnosis avoids confusing a denial related to the standard role, a denial related to a custom role, and a deliberate backend safeguard.

## Expected Result

If the configuration is correct:

- the member list is up to date;
- custom roles appear in the selectors;
- permissions change based on the assigned role;
- dangerous actions remain blocked by safeguards.

## Common Issues

### Unable to Delete a Custom Role

First check if this role is still assigned to a member. As long as it is in use, deletion remains blocked.

### Unable to Modify My Own Role

This behavior is intentional to avoid accidental loss of access. Ask another project administrator to perform the modification.

### The Tab is Visible but Everything is Grayed Out

You are likely in **read-only** on this surface. Check if your role includes `members:manage` or `roles:manage`.

## Tips

- use **Project Owner** only for true project administrators;
- keep custom roles targeted and limited to a specific need;
- review permissions before delegating member management;
- document custom roles in team practices to avoid duplicates.

## Next Steps

- [Projects and Workspace](./projets-et-espace-de-travail.md)
- [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
