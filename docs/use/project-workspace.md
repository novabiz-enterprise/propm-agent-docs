---
title: Project workspace
---

## Purpose

The **Project Workspace** is the operational center for one project. It combines conversational execution (agent chat) with project governance controls.

![Project workspace chat](../../static/img/screenshots/03-workspace-agent-chat.png)

## Why this matters

Project-scoped work ensures traceability. Decisions, outputs, document categories, and role assignments remain attached to one project context.

## Who can use it

- **View workspace and run chats:** project members
- **Modify configuration tabs:** **Project Owner**

## Before you begin

- You must have access to the target project.
- Open the project from **Projects**.

## Steps

### Run workspace chat

1. In **Workspace chat**, keep or choose an agent in the selector.
2. Enter a prompt in **Type your message…**.
3. Click **Send**.
4. Review the generated response and token/trace metadata when available.
5. (Optional) Click **Voice input** to use speech-to-text where supported by your browser.

### Configure project controls (Project Owner)

1. Open tabs below chat:
   - **Agent configuration**
   - **Access control**
   - **Document categories**
2. Apply changes, then save.
3. Validate changes by reopening related screens (Agents, Knowledge, PM Docs).

## Expected results

- Chat responses are generated in project context.
- Configuration changes are persisted and visible across the project.

## Common issues

- **Read-only state**: user does not have Project Owner role.
- **No agent response**: check health indicator and retry with a simpler prompt.
- **Voice button unavailable**: browser speech API is not available.

## Tips

- Start with **Virtual Project Manager** for multi-domain synthesis.
- Use specialist agents (Risk, Schedule, Governance, Finance, etc.) for deeper targeted output.
- Keep document categories curated; this improves PM Docs and Knowledge consistency.

