---
title: Project settings overview
---

## Purpose

Project settings let you manage governance controls at the project level.

## Why this matters

Governance-by-design is easier when project controls (roles, categories, agent configuration) are explicit and consistently applied.

## Who can use it

- **View settings:** all project members
- **Modify settings:** project members who have the relevant project permissions

## Before you begin

- Open the relevant project workspace.

## Steps

1. Open **Projects**.
2. Select the project.
3. In the project workspace, use the tabs:
   - **Access control**
   - **Document categories**
   - **Agent configuration**

Permission mapping:

- **Access control**
  - view requires `members:read`
  - member administration requires `members:manage`
  - custom role administration requires `roles:manage`
- **Document categories** requires `settings:manage`
- **Agent configuration** requires `agent:configure`

### Use default demo settings

The default demo project installs a ready-to-use settings baseline automatically, including:

- seeded document categories
- seeded PM Docs
- seeded Knowledge documents
- seeded AI Log history
- default full permissions for the signed-in user

This makes the demo project the fastest way to validate configuration features without any manual preparation.

## Expected results

- You can view project settings.
- Authorized project members can save changes and see them reflected across the project.
- The default demo project starts with a complete settings baseline for walkthroughs and training.

## Common issues

- **Read-only**: your current project role does not include the required permission for the selected settings area.

## Tips

- Review settings at project kickoff to align with PMO standards.

