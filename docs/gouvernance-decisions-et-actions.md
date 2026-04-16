---
title: Governance, Decisions, and Actions
slug: /gouvernance-decisions-et-actions
description: Leverage signals, apply governance rules, and manage actions requiring approval.
---

[Home](./index.md) · [Projects and Workspace](./projets-et-espace-de-travail.md) · [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)

![Signals Inbox](/img/screenshots/localized/en/15-workspace-signals.png)

## Objective

This page explains how to process **signals**, use project governance rules, and understand why an action may be visible but not executable.

## Overview

In ProPM Agent, governance manifests across several surfaces:

- **signals** that draw attention;
- project-level **governance policies**;
- **access controls**;
- **actions & approvals** before external impact;
- **traceability** visible in artifacts and the AI Log.

## Signals: What They Represent

Observed signals serve to surface topics that merit explicit handling, for example:

- insufficient **freshness**;
- a **contradiction** between pieces of evidence;
- an operational **blockage**;
- a **follow-up** requiring a decision or dissemination.

## How to Process Signals

The signals inbox allows you to:

- review open signals;
- refresh their status;
- prepare a **digest**;
- generate a notification draft;
- snooze a signal;
- dismiss an item when it is no longer relevant.

### Recommended Triage Step-by-Step

To avoid processing a signal based solely on "gut feeling," keep this simple order:

1. first read the **summary**;
2. then confirm the **explanation** and **freshness** indicators;
3. check if the signal is **recurrent** or relies on multiple pieces of evidence;
4. finally choose between **Create draft**, **Snooze 24h**, or **Dismiss** based on the actual level of useful action.

This triage avoids turning a simple reminder into a governed action too quickly, while keeping a clear record of truly priority topics.

## States, Modes, and Information Visible on a Signal

### Useful Statuses

| Status | Practical Meaning | Typical Action |
| --- | --- | --- |
| `open` | The signal remains active in the current queue | process, create a draft, snooze, or dismiss |
| `snoozed` | The topic is temporarily paused | return after `snoozedUntil` or after the next checkpoint |
| `dismissed` | The signal is removed from the active view as long as no new condition reopens it | keep the trace, without letting the item clutter the queue |
| `resolved` | The topic is considered handled | keep the history for audit, without immediate new action |

### Visible Modes

| Mode | Useful Reading |
| --- | --- |
| `inform` | information to review without mandatory immediate action |
| `suggest` | topic accompanied by suggested next steps |
| `draft` | topic already oriented towards a draft or preparatory formulation |
| `request_approval` | topic that calls for an explicit approval step |

### What a Signal Card Shows

A signal card can display:

- **severity**, **status**, and **mode**;
- a **title**, **summary**, and **explanation** of the trigger;
- a count of **evidence** and **re-triggers**;
- **source freshness** badges;
- `last detected` and, if applicable, `snoozed until`;
- actions like **Create draft**, **Snooze 24h**, and **Dismiss** when the role permits.

### If You See… / Do…

| If You See… | Do… |
| --- | --- |
| an `open` signal in `inform` mode | review the evidence and decide if you simply need to monitor or prepare a digest |
| an `open` signal in `suggest` mode | turn it into a clear next step or a draft if the follow-up needs to be tracked |
| a `draft` signal | check if it is already feeding a digest, a draft, or an action request |
| a `request_approval` signal | switch to the governed review and confirm the approval conditions |
| a `snoozed` signal | do not reopen it automatically; first check `snoozedUntil` and the actual evolution of the context |
| a `dismissed` signal | keep the trace, but do not clutter the active queue as long as no new evidence appears |
| a `resolved` signal | use it as history, not as a new action order |

## When to Act on a Signal

| Situation | Recommended Action |
| --- | --- |
| Aging information | Check the source, restart the import, or update the knowledge |
| Contradiction between evidence | Review the citations, arbitrate, and document the decision |
| Project blockage | Turn the observation into a governed action or formalized follow-up |
| Topic to disseminate | Prepare a digest or an appropriate notification |

## Digest and Notification Drafts

### Generate a Digest (`Generate digest draft`)

Generating a digest produces a reusable synthetic view from the **Workspace**. The **`Latest digest`** card can display:

- a **headline**;
- a **narrative**;
- the **generated at** date;
- the total number of summarized signals;
- the number of generated notification drafts;
- the detail of signals included in the digest.

### Review a Notification Draft

**Notification drafts** expose at minimum:

- the **status**;
- the **channel**;
- the notification **type**;
- the explanation or rationale;
- a potential need for **approval**;
- the number of **recipients**;
- a `sendAfter` date if it exists;
- the link to the original **signal** or **digest**;
- a potential `snoozed` state.

In the currently observed project panel, direct sending is primarily planned for `in_app`. External channels like `email`, `teams`, or `webhook` may remain in a **held / draft** posture as long as the governed distribution path is not available. Users without sending rights can still review these drafts in read-only mode.

![Notification Drafts to Review](/img/screenshots/localized/en/16-notification-drafts.png)

### Recommended Review Flow for a Notification Draft

1. confirm that the **title** and **message** are understandable without hidden context;
2. check the linked **signal** or **digest**;
3. review the **approval**, **recipients**, and `sendAfter` metadata;
4. only send if the **channel** and your **role** actually authorize this distribution;
5. use **snooze** or **dismiss** when the draft should not remain active in the queue.

## Four Objects Not to Confuse

| Object | Role in the Flow | When to Use It |
| --- | --- | --- |
| `digest` | synthesis of multiple signals | when the team needs a grouped view before distribution or arbitration |
| `notification draft` | draft message intended for a channel | when the topic needs to be reviewed before sending, especially outside `in_app` |
| `action request` | request for a governed operation sometimes requiring approval and execution | when an external follow-up or concrete change must be launched |
| `artifact` | deliverable or governed object with history | when content must be preserved, compared, approved, published, or reinjected |

This distinction reduces frequent confusion between a topic **to summarize**, a message **to review**, an operation **to execute**, and a document **to govern**.

## Project-Level Governance

The workspace tabs form the foundation of project governance:

- **Access control** determines who can act;
- **Document categories** structure evidence;
- **Governance policies** frame validations and publication;
- **Project integrations** determine which external actions are actually feasible.

### How to Read Policy Effects

| Pair or Field | Practical Reading | Real Effect for the User |
| --- | --- | --- |
| `allow` + `observe` | the subject can be seen and tracked | reading and monitoring without launching execution |
| `allow` + `draft` | preparation is authorized | the user can create a draft or prepare the flow |
| `allow` + `propose` | formal proposal is permitted | a request can be submitted to the governed queue |
| `allow` + `execute` | direct execution is authorized | the action can proceed without an additional step if everything else is ready |
| `require_approval` + `execute` | execution remains possible but not immediate | the approval queue becomes mandatory before execution |
| `deny` | the flow is forbidden for the role or scope | the action may disappear or remain non-executable despite its principle visibility |

These pairs help understand why a user can **see**, **prepare**, **propose**, or **execute** an action, without assuming that all surfaces automatically authorize the same depth of action.

![Project Governance Policies](/img/screenshots/localized/en/14-governance-policies.png)

## Actions & Approvals

The **Actions & approvals** screen transforms a recommendation into a controlled operation.

### Observed Lifecycle

1. proposal of an action;
2. attachment to a project, signal, or artifact;
3. approval or rejection;
4. execution when conditions are met;
5. traceability of the event in the product.

![Actions and Approvals](/img/screenshots/localized/en/17-actions-approvals.png)

### Operational Step-by-Step for a Governed Action

Use this order when an external follow-up becomes necessary:

1. open **Actions & approvals** from the **Workspace**;
2. first choose the **action type** so the interface resolves compatible **Execution connectors**;
3. select a **healthy** and **authorized** execution option if multiple exist;
4. add a short justification to facilitate approval;
5. submit the request and verify it appears in the queue with **Trace ID** and payload details;
6. then follow its passage through the queue to **approved**, **rejected**, or **executed**.

### If No Execution Option Appears

Keep this strict remediation order:

1. check **Execution connectors** in **Governance policies**;
2. then check **Project integrations** to confirm the binding is actually ready;
3. open **Platform Administration** if the technical definition seems missing or degraded;
4. finally check **entitlement**, **policy**, and your **permission** before concluding it's a failure.

This circuit avoids treating as a technical incident a blockage that actually comes from a role, policy, or definition not yet exposed to the project.

## Examples of Confirmed Governed Actions

Action types visible in the product include notably:

- publication to **SharePoint**;
- **Teams** message;
- **Outlook** message;
- **Jira** ticket;
- **Azure DevOps** ticket;
- governed **webhook**.

### Fields That Vary by Action Type

| Action Type | Typical Fields to Provide |
| --- | --- |
| Publication to SharePoint | title, execution option, `artifact ID`, destination, rendering profile or format |
| Teams / Outlook Message | title, execution option, message body, recipients or linked draft |
| Jira / Azure DevOps Ticket | title, execution option, and ticket description |
| Calendar follow-up | title, execution option, participants, and start date / time |

### States and Details of the Approval Queue

The governed actions queue allows tracking a typical passage from **draft** to **pending approval**, then to **approved**, **executed**, or **rejected**.

| Status | Practical Reading |
| --- | --- |
| `draft` | still preparatory request, not yet sent to the full flow |
| `pending approval` | approval awaited before real follow-up |
| `approved` | agreement obtained, but actual execution still needs to be confirmed |
| `executed` | action sent and logged as executed |
| `rejected` | the request was refused and should not be considered as launched |

Each queue card can also expose:

- the action type and selected connector;
- the **status** and **action level**;
- `requested at`, `requested by`, `approved by`, `approved at`, `executed at`;
- the **Trace ID**;
- a `relatedArtifactId` or `relatedNotificationId`;
- the **payload audit detail**, approval notes, and execution result.

![Governed Actions Queue and Audit Details](/img/screenshots/localized/en/17-action-queue.png)

## Why an Action May Be Visible But Not Executable

An action may appear in the interface but remain blocked if:

- you do not have the required right;
- the compatible connector is not ready;
- the project binding limits the action;
- the plan or entitlement blocks the capability;
- an approval is still pending.

## Link with Integrations

An important rule emerges from the application:

- the **project level** decides how the project works;
- the **platform level** decides which tools, providers, and integrations actually exist.

In practice, if an action or notification is blocked, first check the **project binding**, then the technical definition in **Platform Administration**.

## Example of a Complete Scenario

1. an `open` signal surfaces a freshness gap or a delayed follow-up;
2. the team reviews the explanation, evidence, and suggested next steps;
3. they create a **draft** or generate a **digest** to prepare the synthesis;
4. a notification draft is reviewed, sent via `in_app`, or left pending if the external channel remains governed;
5. if an external follow-up is needed, an action is proposed in **Actions & approvals**;
6. the approval queue, **Trace ID**, linked artifacts, and **AI Log** then serve as a common trace.

## Governance Best Practices

- treat signals as a prioritization queue, not just a simple list;
- do not execute external action without checking the artifact or source evidence;
- use document categories to reduce source ambiguity;
- keep governance policy consistent with actually assigned roles;
- document important arbitrations in deliverables or in the associated validation flow.

## Next

- [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
