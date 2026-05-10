---
title: Access control and project roles
slug: /controle-acces-et-roles
description: Add members, assign roles, create custom roles and understand project RBAC guardrails.
---

[Home](./index.md) · Access control and project roles

![Project access control](/img/screenshots/localized/en/11-access-control.jpg)

![Annotated access control: members, standard roles, custom roles and RBAC guardrails](/img/annotated/en/access-control-annotated.svg)

## Goal

This page explains how to administer project members and roles in ProPM Agent using business roles first, not raw permissions.

## Standard roles

| Role | Typical use |
| --- | --- |
| Project Owner | Administers project, members, roles and sensitive settings |
| Project Manager | Drives daily work, deliverables, signals and actions according to policy |
| Contributor | Adds knowledge, runs agents and contributes to authorized deliverables |
| Reader | Reads information without modifying the project |
| Auditor | Reviews evidence, runs, lineage and traces according to audit rights |

## Add a member

1. Open **Workspace**.
2. Open **Access control**.
3. Select **Members**.
4. Enter the member email address.
5. Choose a standard or custom role.
6. Save.
7. Verify that the member appears with the expected role.

## Custom roles

1. Open **Roles and permissions**.
2. Create a role.
3. Use a clear business name.
4. Add a description.
5. Enable only the capabilities required.
6. Save and test with a non-critical user.

## Modify or delete a custom role

To modify a custom role, open it, adjust capabilities, save and verify the impact on assigned members. To delete it, first make sure no member still uses it. System roles cannot be deleted.

## Guardrails

- You cannot remove your own access from this screen.
- You cannot downgrade your own role from this screen.
- The project creator entry remains protected.
- A system role cannot be deleted.
- A custom role still assigned to members is blocked from deletion.

## Technical permissions

Labels such as `project:read`, `agent:run`, `members:manage`, `roles:manage` or `settings:manage` may appear in advanced RBAC diagnostics. For daily use, start with business roles and expected actions.

## Related pages

- [Active project](./projet-actif-et-creation-projet.md)
- [Governance](./gouvernance-decisions-et-actions.md)
- [Actions and approvals](./actions-et-approbations.md)
- [Support diagnostics](./support-audit-et-diagnostic.md)
