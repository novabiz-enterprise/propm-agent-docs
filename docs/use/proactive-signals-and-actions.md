---
title: Proactive signals, digests, and actions
---

## Purpose

This page explains how ProPM Agent surfaces proactive project signals, turns them into reviewable digest or notification drafts, and keeps governed follow-up under human control.

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

The **Signals inbox** appears inside **Project workspace** for the current project.

![Signals inbox in the Project workspace](/img/screenshots/15-workspace-signals.png)

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
- evidence-reference count and repeat-trigger count when available
- suggested next steps
- last detected timestamp

Use this order when triaging a signal:

1. Read the summary first.
2. Confirm the explanation and freshness cues.
3. Check whether the signal is recurring or backed by multiple evidence references.
4. Decide whether the right next step is to draft, snooze, or dismiss.

## What you can do with a signal

Depending on your permissions, you can:

- **Create draft** — generate a notification draft from the signal
- **Snooze 24h** — temporarily suppress the signal
- **Dismiss** — suppress the signal until it is reopened by new conditions

If you can review signals but cannot act on them, the panel stays visible in a read-only state so the user can still understand current project risk without accidentally changing workflow state.

## Digest generation

Use **Generate digest draft** to batch the highest-priority open signals into a single project summary.

This is useful when you want:

- a project review pack
- an internal PMO summary
- a stakeholder-facing draft message prepared for review

After you generate a digest, review the **Latest digest** card for:

- the summary headline and narrative
- how many signals were summarized
- whether notification drafts were prepared from the digest
- the latest generated timestamp

## Notification drafts

Notification drafts let you prepare follow-up messaging without auto-sending it.

![Notification drafts ready for review](/img/screenshots/16-notification-drafts.png)

Drafts can include:

- related signal linkage
- explanation text
- status
- channel
- recipient count
- approval requirement
- scheduled send-after timing
- snooze or dismissal state

Current target-state behavior keeps non-`in_app` channels in draft posture until the deployment enables the relevant governed delivery path.

### Recommended draft review flow

1. Confirm the draft title and body are understandable without extra context.
2. Check whether the draft is linked to the right signal.
3. Review approval and recipient metadata before sending.
4. Send only when the project role and deployment support the selected channel.
5. Snooze or dismiss drafts that should not remain in the active inbox.

## Actions and approvals

The **Actions & approvals** area is used for governed external follow-up.

![Actions and approvals proposal form](/img/screenshots/17-actions-approvals.png)

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

### Recommended actions flow

Use this order for governed follow-up:

1. Open **Actions & approvals** from the project workspace.
2. Select the **action type** first so the connector list is filtered to compatible options.
3. Choose a healthy connector and complete only the fields required for that action type.
4. Add a short rationale so approvers can understand why the request exists.
5. Submit the request and confirm it appears in the queue with a trace ID and payload details.
6. Review the queue state change from **Pending approval** to **Approved**, **Rejected**, or **Executed**.

### Required fields by action type

- **Publish artifact to SharePoint** — title, connector, artifact ID, destination, and optional rendering details
- **Send Teams message** — title, connector, and message body
- **Send Outlook message** — title, connector, message body, and either recipients or a related notification draft
- **Create Jira or Azure DevOps ticket** — title, connector, and ticket description
- **Create calendar follow-up** — title, connector, attendees, and start date/time

If a supported action type has no compatible connector, the form stays visible but prevents submission until governance configuration or connector health is corrected.

### Approval queue and audit review

![Action queue with audit detail](/img/screenshots/17-action-queue.png)

For every queued action, review:

- request status and action level
- connector status
- requested, approved, and executed timestamps
- related artifact or notification references
- trace ID for audit follow-up
- payload details, approval notes, and execution results

Only users with approval rights can approve, reject, or execute queue entries. Other users can still review queue history in read-only mode.

## Recommended demo flow

1. Run a contextual agent response in the workspace.
2. Review the output and create a draft artifact if needed.
3. Open **Signals inbox** and refresh signals.
4. Generate a digest draft.
5. Open **Notification drafts** and review send, snooze, or dismiss options.
6. Open **Actions & approvals**, propose a governed follow-up, and review how approval gates external execution.

## Tips

- Use snooze only when the team has an agreed follow-up window.
- Dismiss only when the signal is understood and intentionally suppressed.
- Treat **Send in-app** as a governed action, not as a shortcut; verify permissions and audience first.
- Treat approval as a control point, not as an inconvenience: it preserves trust and traceability.
