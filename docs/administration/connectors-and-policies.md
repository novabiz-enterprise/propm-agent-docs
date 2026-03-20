---
title: Connectors and policies
---

## Purpose

This page explains how administrators govern connector-backed context and approval-gated actions.

## Why this matters

Connectors make external project signals more useful, but they should not reduce trust or control.

The target-state operating model is:

- **read-first** for external context
- **approval-gated** for external writes
- **auditable** for every significant action

## What administrators can manage

Depending on deployment and role, governance controls can include:

- **Connectors** — visible registry entries, sync posture, health, and freshness policy
- **Artifact destinations** — approved publication targets such as internal stores or governed collaboration destinations
- **Action policies** — who can propose, approve, or execute a given action type
- **Rendering profiles** — output formatting profiles used during publication
- **Notification preferences** — digest and notification routing defaults

## Connector checklist

For each connector, review:

- connector type and execution mode
- enabled / degraded / error status
- latest sync result
- freshness posture
- allowed scopes
- boundary policy
- fixture or mock reference when demonstrating in a non-production environment

## Policy checklist

For each action policy, review:

- role scope
- connector scope
- action level
- approval requirement
- allowed destination constraints
- minimum freshness requirement
- allowed notification or action types

## Recommended rollout pattern

1. Start with connector visibility and read-only health checks.
2. Validate freshness and contradiction behavior.
3. Enable draft creation and internal publication.
4. Introduce approval-gated external actions only after roles, policies, and evidence review flows are understood.

## Demo guidance

In demo environments, seeded fixture-backed connectors and policy examples are useful for illustrating:

- stale or unavailable sources
- contradiction surfacing
- artifact publication requests
- approval workflows

Use only synthetic, non-sensitive demo data.

## Tips

- Keep connector governance separate from methodology choices.
- Treat freshness thresholds as trust controls, not as cosmetic labels.
- Review policy changes alongside RBAC and audit expectations.
