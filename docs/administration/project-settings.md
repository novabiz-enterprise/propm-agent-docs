---
title: Project settings overview
---

## Purpose

Project settings let you manage project-scoped controls without taking ownership of tenant-scoped technical setup.

## Why this matters

Governance-by-design is easier when project controls such as roles, document categories, agent settings, and approved integration bindings are explicit and consistently applied.

## Who can use it

- **View settings:** all project members who can open the project workspace
- **Modify settings:** project members who have the relevant project permissions for the selected settings area

## Before you begin

- Open the relevant project workspace.

## Workspace tabs

Inside the project workspace, the settings area is split into project-scoped tabs such as:

- **Access control**
- **Document categories**
- **Agent configuration**
- **Project integrations**
- **Actions & approvals**

Some deployments may still expose adjacent governance or policy objects during the migration, but raw connector or provider setup belongs in **Platform Administration**.

## Permission mapping

- **Access control**
  - review membership and role setup from the project workspace
  - member administration requires `members:manage`
  - custom role administration requires `roles:manage`
- **Document categories** requires `settings:manage`
- **Agent configuration** requires `agent:configure`
- **Project integrations** requires project-level integration binding permissions exposed by the deployment
- **Actions & approvals** requires `agent:run` to propose actions and `project:update` to approve or execute governed actions

## Project integrations expectations

Inside **Project integrations**, expect the page to expose project-level administration for:

- approved **Execution Connectors** that can be used by governed actions
- approved **Ingestion Providers** that can be used by **Knowledge** imports
- project bindings, aliases, safe overrides, filters, mappings, or destination choices where policy allows
- health, validation state, last import, and last execution visibility

Project settings should not expose:

- tenant-scoped credentials
- secret management
- subscription-wide AI provider changes
- marketplace administration

Adjacent project-level controls may still include:

- artifact destinations
- action policies
- rendering profiles
- notification preferences

Those controls remain project-facing, but they do not replace **Platform Administration** as the source of truth for technical integration setup.

## Agent configuration expectations

Inside **Agent configuration**, each row saves independently so you can make auditable changes without batching multiple agents together. Expect the screen to provide:

- the current saved values for status, temperature, and max tokens
- inline validation for invalid numeric entries
- a row-level reset action for discarding unsaved edits
- version history when the current environment exposes configuration records

## Use default demo settings

The default demo project installs a ready-to-use settings baseline automatically, including:

- seeded document categories
- seeded PM Docs
- seeded Knowledge documents
- seeded AI Log history
- seeded portfolio comparison projects
- seeded governance scenarios for freshness, contradictions, and approvals
- default full permissions for the signed-in user

This makes the demo project the fastest way to validate configuration features without any manual preparation.

## Access control safety expectations

When you administer project membership, expect the UI to protect the most dangerous mistakes:

- built-in roles stay non-deletable
- custom roles that are still assigned stay non-deletable
- self-removal stays blocked to reduce accidental lockout
- protected creator entries stay non-removable from the access-control screen
- users without the required permission see disabled controls rather than hidden changes

## Expected results

- You can view project settings from the workspace.
- Authorized project members can save changes and see them reflected across the project.
- Tenant-wide technical setup stays in **Platform Administration**, while project settings focus on bindings and safe project-level controls.
- The default demo project starts with a complete settings baseline for walkthroughs and training.

## Common issues

- **Read-only**: your current project role does not include the required permission for the selected settings area.
- **Project integration action is disabled**: the current role may not allow binding changes, or the selected integration is blocked by entitlement, health, or validation state.

## Tips

- Review settings at project kickoff to align with PMO standards.
- Bind only approved integrations to projects; do not duplicate tenant-wide setup.
- Roll out actions and imports gradually: validate first, then enable live operational use.
- Treat project settings changes as governed operational decisions, not hidden technical tweaks.
