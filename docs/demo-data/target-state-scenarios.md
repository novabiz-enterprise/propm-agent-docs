---
title: Target-state demo scenarios
---

## Purpose

This page describes the synthetic scenario pack used to demonstrate the target-state ProPM Agent experience.

## Data posture

- All demo data is **synthetic and non-sensitive**.
- Scenario content is designed to feel realistic without reflecting any real customer program.
- Documentation and demos stay methodology-neutral.

## Seeded projects used in demonstrations

The default comparison pack includes projects such as:

- **Azure Bay Hotel & Convention Center** (`demo-hotel-001`)
- **ERP Modernization**
- **Data Platform Expansion**
- **Security Hardening Program**
- **Contact Center Upgrade**

These projects are intended to give you contrasting portfolio signals, not a fixed dashboard narrative.

## Recommended demo sequence

### 1. Context enrichment and structured output

- Open **Azure Bay Hotel & Convention Center**.
- Run a workspace prompt.
- Review summary, findings, decisions, actions, evidence, freshness, and confidence.

### 2. Artifact creation and review

- Select **Create draft** from the response.
- Open the artifact review surface.
- Review preview, diff, lineage, and export behavior.

### 3. Freshness and contradiction handling

- Use a scenario where sources are aging, stale, unavailable, or conflicting.
- Confirm the UI makes those states explicit.

### 4. Proactive signals and digest drafting

- Refresh **Signals inbox**.
- Review open signals.
- Generate a digest draft.

### 5. Approval-gated actions

- Open **Actions & approvals**.
- Propose a governed action.
- Review how the request remains approval-gated.

### 6. Portfolio comparison

- Open **Portfolio Command Center**.
- Compare multiple seeded projects.
- Show outliers, evidence gaps, recent activity, and drill-down evidence.

### 7. Governed connector story

- Use the governance area to explain connector status, latest sync posture, and action policy boundaries.
- Emphasize that connector context enriches the platform but does not replace project Knowledge retrieval.

## Reset instructions

### Standard reset

1. Delete the default demo project from **Projects**.
2. Re-import the demo project.
3. Reopen the workspace and confirm seeded chats, Knowledge, and PM Docs are available again.

### Local demo-mode reset

If you are running a local demo-mode deployment and see stale seeded state:

1. Re-import the demo project if needed.
2. Refresh the browser.
3. Clear local demo browser state only if instructed by your administrator or demo engineer.

## Tips

- Start with the hotel project for single-project storytelling.
- Add one or two comparison projects only after the audience understands the project-level flow.
- Use evidence and freshness cues to reinforce trust, not just feature breadth.
