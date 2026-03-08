---
title: Agents (chat)
---

## Purpose

**Agents** is the project AI console. It provides the agent roster, chat execution area, and custom-agent lifecycle (creation/deletion for authorized users).

![Agents console](../../static/img/screenshots/04-agents.png)

## Why this matters

Agents convert raw project context into structured outputs (risk summaries, plans, governance notes, stakeholder updates) while keeping interactions traceable.

## Who can use it

- **View agent roster:** all project members
- **Run chat prompts:** Project Owner, Project Manager, Contributor
- **Create/Delete custom agents:** Project Owner

## Before you begin

- Select a project.
- Recommended: upload or seed relevant documents in **Knowledge** for better context grounding.
- For demos, choose **Azure Bay Hotel & Convention Center** (`demo-hotel-001`) to use pre-seeded conversations.

## Steps

### Open Agents for a project

1. Open **Agents** from the left navigation.
2. If no project is active, choose one first.

### Run a chat prompt

1. Select an agent in the roster (left panel).
2. Enter prompt text in the message box.
3. Click **Send**.
4. Review response content and references.

### Demonstrate saved chat sessions (demo)

1. Open the demo hotel project.
2. Select seeded chat sessions in the history panel.
3. Create a **New** chat, send a fresh prompt, then switch back to a seeded session.
4. Confirm previous messages remain available.

### Manage custom agents (Project Owner)

1. Click **Create agent**.
2. Provide name, role/instructions, and scope.
3. Save, then validate it appears in roster.
4. Use delete action when cleanup is needed.

## Expected results

- Agent responses are returned successfully.
- Runs are visible later in **AI Log**.
- Custom agents appear/disappear according to create/delete actions.
- Seeded demo chats are available and can be switched without losing message history.

## Common issues

- **Read-only behavior**: user role lacks edit permissions.
- **Agent shows Offline**: transient status; retry prompt or refresh.
- **Voice input unavailable**: browser does not support speech recognition APIs.

## Tips

- Start with **Virtual Project Manager** when uncertain which specialist to invoke.
- Use specialist agents for focused outputs (Risk, Schedule, Governance, Finance, Stakeholders).
- Prompt with expected format (table, bullet list, decision log) to reduce manual rewriting.

