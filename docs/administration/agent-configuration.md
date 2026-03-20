---
title: Agent configuration (enable/disable and parameters)
---

## Purpose

Agent configuration lets Project Owners:

- Enable or disable specific agents for a project
- Adjust selected agent parameters
- Review configuration history

## Why this matters

Project-level governance over agents helps enforce consistent usage patterns and supports accountable AI operations.

Configuration changes affect how contextual runs behave for the project, so they should be reviewed with the same care as any other governed setting.

## Who can use it

- **View agent configuration:** all project members
- **Modify agent configuration:** **Project Owner**

## Before you begin

- Select a project.
- Open the project workspace (or use **Agents → Configure agents**).

## Steps

1. Open **Agent configuration**.
2. For an agent, adjust:
    - **Status** (enabled/disabled)
    - **Temperature** (when available)
    - **Max tokens** (when available)
3. Select **Save**.
4. (Optional) Select **History** to view saved configuration versions.

When available, also review whether the selected agent should:

- remain enabled for the project
- be limited to a narrower use case
- be tuned conservatively for stakeholder-facing output

## Expected results

- The agent configuration is saved.
- Configuration history shows versioned changes.
- Updated settings apply to future runs without changing prior run history.

## Common issues

- **Save is disabled**: you may not have Project Owner permissions.
- **Invalid values**: use numeric values for temperature/max tokens.

## Tips

- Change one setting at a time and validate behavior.
- Prefer small, auditable changes over large simultaneous prompt or parameter shifts.

