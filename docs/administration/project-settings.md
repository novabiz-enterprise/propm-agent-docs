---
title: Project settings overview
---

## Purpose

Project settings let you manage governance controls at the project level.

## Why this matters

Governance-by-design is easier when project controls such as roles, document categories, agent settings, and governed integrations are explicit and consistently applied.

## Who can use it

- **View settings:** all project members who can open the project workspace
- **Modify settings:** project members who have the relevant project permissions for the selected settings area

## Before you begin

- Open the relevant project workspace.

## Workspace tabs

Inside the project workspace, the settings area is split into these tabs:

- **Access control**
- **Document categories**
- **Agent configuration**
- **Governance policies**
- **Actions & approvals**

## Permission mapping

- **Access control**
  - review membership and role setup from the project workspace
  - member administration requires `members:manage`
  - custom role administration requires `roles:manage`
- **Document categories** requires `settings:manage`
- **Agent configuration** requires `agent:configure`
- **Governance policies** requires `settings:manage`
- **Actions & approvals** requires `agent:run` to propose actions and `project:update` to approve or execute governed actions

## Governance policies expectations

Inside **Governance policies**, expect the page to expose project-level administration for:

- connectors and their execution mode, freshness posture, scopes, and configuration JSON
- artifact destinations and default publication targets
- action policies that control who can propose, approve, or execute governed actions
- rendering profiles for publication output
- notification preferences for digests and alerts

The current production-ready behavior is:

- each governance object saves independently
- malformed JSON blocks saving until corrected
- save feedback appears per object
- users without edit permission can still see the tab in read-only mode when the deployment exposes view access

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
- Governance settings remain separated from day-to-day content and are easier to audit.
- The default demo project starts with a complete settings baseline for walkthroughs and training.

## Common issues

- **Read-only**: your current project role does not include the required permission for the selected settings area.
- **Governance save disabled**: one of the JSON fields or numeric validation fields is invalid and must be corrected before saving.

## Tips

- Review settings at project kickoff to align with PMO standards.
- Roll out connectors and action policies gradually: read-first before approval-gated execution.
- Treat project settings changes as governed operational decisions, not hidden technical tweaks.
