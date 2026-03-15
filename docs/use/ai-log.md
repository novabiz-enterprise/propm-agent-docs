---
title: AI Log (runs + activity)
---

## Purpose

**AI Log** provides audit-friendly visibility into:

- Agent runs (queued/running/completed/failed)
- Project activity events

## Why this matters

The AI Log improves accountability and traceability by showing what ran, when it ran, and what happened in the project workspace.

## Who can use it

- **All project members**

## Before you begin

- Select a project.
- For the richest walkthrough, use the default demo project (`demo-hotel-001`) which includes seeded runs and seeded activity events.

## Steps

### Review runs

1. Open **AI Log**.
2. Select **Runs**.
3. Filter by agent, status, or search terms.
4. Select **Details** to view the full run record.

### Review seeded demo history

1. Open the default demo project.
2. In **Runs**, inspect seeded entries for Orchestrator, Risk, Schedule, Governance, Finance, Resources, Stakeholders, and Scope.
3. In **Activity**, inspect seeded events for agent execution, document uploads, PM Doc generation, and project notifications.
4. Run a fresh agent prompt or PM Doc action, then refresh to confirm new events appear alongside the seeded baseline.

### Review activity timeline

1. In **AI Log**, select **Activity**.
2. Filter by type/kind/actor.
3. Select **Details** to inspect the full event payload.

## Expected results

- You can see a list of runs and activity events.
- Details dialogs provide trace IDs and structured data when available.
- The default demo project shows enough seeded history to demonstrate filtering and auditability before any live actions are performed.

## Common issues

- **No runs found**: no agents have been executed for this project yet.
- **No activity found**: the project may be new, or activity may be limited.

## Tips

- When raising a support ticket internally, include the **trace ID** shown in details.

