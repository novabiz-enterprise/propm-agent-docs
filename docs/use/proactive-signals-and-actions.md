---
title: Proactive signals, digests, and actions
---

## Purpose

This page explains how ProPM Agent surfaces proactive project signals and how governed actions stay reviewable before execution.

## Why this matters

The target-state product is designed to help users notice meaningful changes early without turning into uncontrolled automation.

Signals are:

- explainable
- reviewable
- suppressible
- traceable

Actions remain:

- permission-aware
- policy-aware
- freshness-aware
- approval-gated

## Signals inbox

The **Signals inbox** appears in the project workspace.

Typical examples include:

- stale evidence
- contradictory sources
- overdue follow-up
- reporting gap
- failed run spike
- connector sync issue

For each signal, review:

- title and summary
- explanation of why it was generated
- source freshness
- suggested next steps
- last detected timestamp

## What you can do with a signal

Depending on your permissions, you can:

- **Create draft** — generate a notification draft from the signal
- **Snooze 24h** — temporarily suppress the signal
- **Dismiss** — suppress the signal until it is reopened by new conditions

## Digest generation

Use **Generate digest draft** to batch the highest-priority open signals into a single project summary.

This is useful when you want:

- a project review pack
- an internal PMO summary
- a stakeholder-facing draft message prepared for review

## Notification drafts

Notification drafts let you prepare follow-up messaging without auto-sending it.

Drafts can include:

- related signal linkage
- explanation text
- status
- channel
- snooze or dismissal state

Current target-state behavior keeps non-`in_app` channels in draft posture until the deployment enables the relevant governed delivery path.

## Actions and approvals

The **Actions & approvals** area is used for governed external follow-up.

Examples include:

- publish an approved artifact to a governed destination
- send a Teams or Outlook message draft
- create a ticket in a governed delivery system
- create a calendar follow-up

Before an action is executed, the platform evaluates:

- connector compatibility
- policy scope
- freshness thresholds
- destination constraints
- approval requirements

## Recommended demo flow

1. Run a contextual agent response in the workspace.
2. Review the output and create a draft artifact if needed.
3. Open **Signals inbox** and refresh signals.
4. Generate a digest draft.
5. Open **Actions & approvals** and review how proposals remain gated.

## Tips

- Use snooze only when the team has an agreed follow-up window.
- Dismiss only when the signal is understood and intentionally suppressed.
- Treat approval as a control point, not as an inconvenience: it preserves trust and traceability.
