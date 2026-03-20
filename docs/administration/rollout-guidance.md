---
title: Rollout guidance
---

## Purpose

This page provides a practical rollout sequence for adopting target-state capabilities safely.

## Principles

- Keep the user experience methodology-neutral.
- Keep Azure AI Search as the only retrieval layer for project knowledge.
- Start with evidence visibility before external action automation.
- Make freshness, contradiction, and missing-information states visible to users.

## Recommended rollout phases

### Phase 1 — Context and evidence visibility

Enable:

- contextual outputs
- evidence cards
- freshness visibility
- confidence and missing-information sections
- AI Log traceability

Goal: users learn how to evaluate trust before relying on the outputs operationally.

### Phase 2 — Artifact lifecycle

Enable:

- draft creation from structured outputs
- diff and lineage review
- governed internal publication

Goal: move from chat responses to traceable business artifacts.

### Phase 3 — Signals and digests

Enable:

- proactive signal refresh
- digest generation
- notification drafts

Goal: create early-warning visibility without overwhelming users.

### Phase 4 — Portfolio comparison

Enable:

- saved cohorts
- configurable signal weights and thresholds
- evidence-backed outlier drill-down

Goal: compare projects consistently without introducing a rigid static dashboard.

### Phase 5 — Governed external actions

Enable only after the prior phases are stable:

- governed connector-backed action proposals
- approval workflows
- constrained publication or follow-up actions

Goal: preserve safety and traceability while adding operational leverage.

## Deployment checklist

- RBAC and project isolation validated
- trace IDs available in support flows
- seeded synthetic demo data isolated from production data
- known freshness and contradiction behavior explained to users
- approval roles confirmed
- connectors reviewed for scope and execution mode

## Current boundaries to communicate clearly

- Retrieval remains Azure AI Search-only.
- External writes should be treated as governed exceptions, not the default path.
- Some connector-backed scenarios may remain unavailable until the deployment enables the relevant integration.
- Approval workflows should be explained before operators rely on them for critical processes.

## Tips

- Pilot with one or two projects first.
- Review user training feedback after each rollout phase.
- Archive a demo reset path so enablement and sales walkthroughs stay reproducible.
