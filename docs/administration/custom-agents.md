---
title: Custom agents
---

## Purpose

Custom agents let **Project Owners** create project-scoped or account-wide assistants with tailored instructions, then keep the roster clean by deleting outdated or duplicate agents.

## Why this matters

Custom agents support standardization by embedding repeatable guidance into the workspace (for example, a stakeholder communications style or governance checklist).

## Who can use it

- **Create and delete custom agents:** **Project Owner**
- **Chat with custom agents:** project members with permission to run agents

## Before you begin

- Select a project.
- Confirm you are working in the correct project. The creation dialog shows the active project context before you save.

## Steps

### Create a custom agent

1. Open **Agents**.
2. Select **Create agent**.
3. Review the **Project context** note.
4. Enter:
   - **Name**
   - **Role / instructions**
   - **Scope**
5. Select **Create**.
6. Validate that the new agent appears in the roster and can be selected for chat.

> `All projects` agents are still created from the current project context, but they remain visible across projects for the creating account.

### Write effective instructions

Use instructions that describe:

- audience or tone
- required sections
- formatting expectations
- guardrails or checks before the answer is considered complete

Example pattern:

1. State who the response is for.
2. State the expected output structure.
3. State any required evidence or validation checks.

### Delete a custom agent

1. In the agent roster, find an agent marked as **custom**.
2. Select the trash icon.
3. Confirm **Delete**.
4. Confirm the roster refreshes and the deleted agent no longer appears.

## Expected results

- The custom agent appears in the roster.
- You can chat with it like a built-in agent.
- Deleting it removes it cleanly from the current project roster.

## Common issues

- **Create fails**: confirm you are a Project Owner in the active project and that you selected the intended scope.
- **All-projects agent is missing in another project**: confirm you are signed in with the same account that created it and that you still have roster access in the target project.
- **Roster still visible after an error**: the UI may continue showing the last known roster while the refresh request is retried.

## Tips

- Write instructions as “what good looks like” (tone, structure, required fields).
- Keep names short and recognizable so users can find the agent quickly with roster search.
- Delete experimental agents once the team settles on a standard version.

