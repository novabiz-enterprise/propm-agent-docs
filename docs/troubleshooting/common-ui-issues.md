---
title: Common UI issues
---

## “Select a project first”

Most features are project-scoped.

1. Use the **Project Switcher** to select a project, or
2. Open **Projects** and select a project to open its workspace.

## Platform Administration is visible but read-only

This is often expected behavior.

- The page may be exposed for inspection.
- Only the resolved **Subscription Administrator** or an explicitly delegated admin can edit tenant-scoped settings.
- Read-only viewers can usually inspect status, validation, or entitlement metadata only.

## Agents shows “Offline”

The chat header shows whether real-time connectivity is available.

1. Refresh the page.
2. Check **Health**.
3. Retry the action.

## Import from source is unavailable in Knowledge

The project may not currently have a usable **Ingestion Provider**.

Check whether:

- the project has an approved binding
- the provider is healthy and validated
- the current plan allows that provider
- your role allows imports

If the option is blocked, the UI should explain whether the reason is entitlement, health, permission, or project configuration.

## An action type is visible but cannot be submitted

The selected action may not currently have a compatible **Execution Connector**.

Check whether:

- the connector is healthy and validated
- the action type is allowed for the current project binding
- the current plan or entitlement allows the feature
- approval or permission requirements have not been met

## Voice input does not work

Voice input depends on browser support.

- Try a different browser.
- Use typed prompts if voice is unavailable.

