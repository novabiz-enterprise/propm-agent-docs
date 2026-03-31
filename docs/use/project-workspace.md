---
title: Project workspace
---

## Purpose

The **Project Workspace** is the project operations hub. It keeps project context, quick links, signals, operational readiness, and project-scoped administration together, while the dedicated **Agents** page handles live chat runs and saved chat continuity.

## Why this matters

Project-scoped work stays traceable without overloading one screen. Workspace keeps project-level controls and operational visibility in one place, while tenant-scoped technical setup lives in **Platform Administration**.

## Who can use it

- **View workspace:** project members
- **Run chats from the linked Agents page:** project members
- **Modify configuration tabs:** project members with the required permissions
- **Default demo project exception:** any signed-in user receives full project-admin rights in `demo-hotel-001`

## Before you begin

- You must have access to the target project.
- Open the project from **Projects**, or use a project-aware link such as `/projects/workspace?projectId=...`.
- If you already opened the project elsewhere in the product, the current project context is remembered and Workspace can recover it automatically.
- For the fastest walkthrough, use **Azure Bay Hotel & Convention Center** (`demo-hotel-001`). It includes seeded chat sessions on **Agents**, PM Docs, Knowledge records, AI Log history, and governance examples.

## Open Workspace

### No active project yet

If you open Workspace without a project context, the page shows an empty state instead of a broken project shell.

Use one of these options:

- pick a project from the project switcher on the page
- open the remembered current project
- go to **Projects** and choose a project there

### Recover a project context

Workspace can recover the project context from either:

- the `projectId` query string
- the remembered current project from earlier navigation

This means you can move between Workspace, PM Docs, AI Log, and other project-aware pages without repeatedly choosing the project again.

## Launch the execution console

1. Open **Workspace** for the correct project.
2. Review the project summary at the top of the page and confirm the project name and project ID.
3. In **Open related surfaces**, select **Agents**.
4. Continue with an existing saved chat or start a new one on the **Agents** page.
5. Run the prompt there.

Workspace keeps the project context in the URL, so the **Agents** page opens in the same project automatically.

## Read the structured response

When a run on **Agents** returns a structured output, review the response in this order:

1. **Summary** — the shortest plain-English answer
2. **Findings** — the main facts or interpretations
3. **Decisions needed** — items that need explicit approval or direction
4. **Actions** — recommended next steps
5. **Evidence** — sources that support the answer
6. **Freshness** — whether sources are fresh, aging, stale, unavailable, or conflicting
7. **Confidence** — how reliable the answer appears based on the available evidence

If available, also review:

- token usage
- trace ID
- lineage details
- linked draft or artifact metadata

### Create and review a draft artifact from a run

1. After a contextual response is returned on **Agents**, select **Create draft**.
2. Open the linked PM Docs or artifact review surface.
3. Inspect:
    - preview
    - diff summary
    - lineage
    - status
4. Approve or publish only if your role and process allow it.

If a draft already exists for the run, the chat surface shows **Review diff** instead of asking you to create a second draft.

## Switch between saved and new chats

Saved chat history is kept per **project + agent** in the current browser, and you access it from the **Agents** page.

### Demo project

1. Open the demo project `demo-hotel-001`.
2. From **Workspace**, select **Agents**.
3. In the **Chats** list, open a seeded conversation such as **Hotel kickoff governance package**.
4. Review the earlier prompts, structured output, and draft links.
5. Click **New**.
6. Send a fresh prompt.
7. Return to the older chat to confirm saved continuity.

### Your own project

1. From **Workspace**, open **Agents**.
2. Start a new chat.
3. Send a prompt.
4. Reopen the same project and agent later.
5. Select the saved chat from the history list.

The first prompt becomes the chat title automatically, which makes older sessions easier to scan later.

## Voice entry and fallback

- Use the microphone button inside **Agents** chat when your browser supports speech recognition.
- Speech input appends text to the composer. Review the text before sending.
- If speech recognition is unavailable, the same flow still works with typed prompts on **Agents**.
- The dedicated **Voice** page explains the current browser status and provides project-aware links back into Workspace and Agents.

## Use Workspace shortcuts

Workspace includes quick links to:

- **Agents** for conversations, saved chat continuity, and structured responses
- **PM Docs** for artifact review and editing
- **AI Log** for run and event traceability
- **Voice** for browser support guidance and voice entry help

These links keep the current project context in the URL so you do not need to reselect the project.

### Review proactive signals and digest drafts

1. Scroll to **Signals inbox**.
2. Review explainable signals such as stale evidence, contradictions, reporting gaps, overdue follow-up, or connector health issues.
3. Check the explanation, freshness badges, evidence-reference count, and repeat-trigger count before acting.
4. Use **Create draft**, **Snooze 24h**, or **Dismiss** as appropriate.
5. Generate a digest draft to summarize the highest-priority open items.
6. Review the **Latest digest** card to confirm the newest summary and how many signals were included.
7. In **Notification drafts**, confirm the channel, linked signal, approval state, recipients, and any scheduled send timing before sending or deferring.

![Signals inbox in Workspace](/img/screenshots/15-workspace-signals.png)

If your role can review but not send notifications, the Workspace panel still shows draft state and explains that delivery remains permission-gated.

### Configure project controls

1. Open tabs below the Workspace launch area:
   - **Agent configuration**
   - **Access control**
   - **Document categories**
    - **Project integrations**
    - **Actions & approvals**
2. Apply changes, then save.
3. Validate changes by reopening related screens (Agents, Knowledge, PM Docs, signals, or action queue).

Workspace should focus on project bindings and operational readiness, not raw tenant-scoped connector or provider setup. When technical remediation is needed, the page should deep-link to **Platform Administration** or the relevant project binding screen.

In the default demo project, the current signed-in user automatically receives full rights. This lets you test project-level administration tabs without first creating members or elevating roles.

Permission model:

- **Agent configuration** requires project permission `agent:configure`
- **Access control** uses `members:manage` and `roles:manage`
- **Document categories** requires `settings:manage`
- **Project integrations** uses project-level integration binding permissions exposed by the deployment
- **Actions & approvals** uses `agent:run` for proposal and `project:update` for approval / execution

### Review operational readiness

Workspace should expose project-facing readiness cues such as:

- bound execution connectors
- bound ingestion providers
- last import and last execution summaries
- freshness or health warnings
- AI runtime transparency such as the effective provider and deployment-selected provider when exposed

This gives project users visibility without turning Workspace into a tenant administration screen.

## Expected results

- Workspace opens with the correct project context and hands off cleanly to **Agents** for chat execution.
- Structured outputs on **Agents** make evidence, freshness, confidence, and follow-up actions visible.
- Saved chat continuity works for both seeded demo sessions and new browser-local sessions.
- Draft artifacts can be created from runs and traced back to their source output.
- PM Docs and AI Log shortcuts open with the same project context.
- Voice entry works when supported and degrades cleanly when unsupported.
- Signals and configuration tabs remain available inside the same operational surface.
- Tenant-scoped technical setup stays out of Workspace and is replaced by project bindings, status, and deep links.

## Common issues

- **Read-only state**: your project role does not include the required permission for the selected tab or action.
- **No active project**: choose a project from the Workspace empty state or reopen the remembered project.
- **No agent response**: open **Agents** from Workspace, check the health indicator, then retry with a narrower prompt.
- **Voice input unavailable**: your browser does not expose speech recognition. Type the prompt instead.
- **Missing draft actions**: some responses do not create a reviewable artifact until a valid run finishes.

## Tips

- Start in **Workspace**, then open **Agents** for the fastest project-aware chat handoff.
- Start with **Orchestrator / Virtual Project Manager** for multi-domain synthesis.
- Use specialist agents (Risk, Schedule, Governance, Finance, etc.) for deeper targeted output.
- Open a seeded hotel chat on **Agents** first during demos, then create one new chat live to prove persistence and continuity.
- Use **View lineage** when you need a fast bridge from chat output to run IDs, structured output IDs, and draft IDs.
- Keep document categories curated; this improves PM Docs and Knowledge consistency.
- Use the signals and actions panels after the first run to show how the platform moves from insight to governed follow-up.
- If a blocker points to tenant administration, follow the deep link instead of trying to fix the issue from Workspace.

