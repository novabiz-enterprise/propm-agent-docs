---
title: Governance, decisions and actions
slug: /gouvernance-decisions-et-actions
description: Understand signals, configure governance policies, and use Actions & approvals step-by-step with beginner-friendly examples.
---

[Home](./index.md) · [Projects and workspace](./projets-et-espace-de-travail.md) · [Reports, AI Journal and traceability](./rapports-journal-ia-et-tracabilite.md)

![Proactivity, digests and governed actions](/img/diagrams/fr/proactivite-et-gouvernance.svg)

## Objective

This page explains, in a simple way, how ProPM Agent moves from:

1. a **signal** detected;
2. to a **decision**;
3. then to a **governed action**;
4. possibly subject to **approval**;
5. before it is **executed** and **traced**.

The goal is for a beginner user to clearly understand:

- what a **governance policy** is;
- what `allow`, `require_approval` and `deny` mean;
- what `observe`, `draft`, `propose` and `execute` mean;
- how to use Actions & approvals step-by-step;
- why an action can be visible but blocked.

## Very simple view of the flow

In ProPM Agent, the normal path is:

1. a **signal** grabs attention;
2. the team reads it;
3. **governance** decides what each role is allowed to do;
4. if an external output is required, an **action** is created;
5. if the project requires it, the action goes into **approval**;
6. the action is then **executed** or **rejected**;
7. the trace remains visible in **activity** and the **AI Journal**.

## Part 1 — Understanding signals

A **signal** is a structured alert that says: **“this topic deserves attention.”**

### Signal examples

A signal can surface:

- a **freshness** of sources that is insufficient;
- a **contradiction** between multiple pieces of evidence;
- a **project blockage**;
- a follow‑up that deserves a **notification**, a **decision** or an **external action**.

### What the user usually sees on a signal card

A signal card can display:

- a **title**;
- a **summary**;
- an **explanation**;
- a **severity**;
- a **status**;
- a **mode**;
- a number of **evidence** or retriggers;
- actions such as **Create draft**, **Snooze 24h** or **Dismiss** depending on the role.

### Recommended step‑by‑step to handle a signal

When you open a signal, keep this order:

1. read the **summary**;
2. then reread the **explanation**;
3. check the **evidence** and **freshness**;
4. decide if the topic only needs monitoring, a draft or a real action;
5. if an external output becomes necessary, move to **Actions & approvals**.

### Useful signal statuses

| Status | What it means |
| --- | --- |
| `open` | the topic remains active and still needs attention |
| `snoozed` | the topic is temporarily paused |
| `dismissed` | the topic is removed from the active queue |
| `resolved` | the topic is considered handled |

### Useful signal modes

| Mode | Simple reading |
| --- | --- |
| `inform` | the signal informs, without requiring immediate action |
| `suggest` | the signal suggests a next step |
| `draft` | the signal is already oriented toward a draft or preparation |
| `request_approval` | the signal calls for a governed review or approval |

## Part 2 — Governance policies

### What is a governance policy?

A **governance policy** is a rule that answers the question:

**“Who is allowed to do what, on which connector, and with what level of control?”**

In other words, governance prevents an external action from leaving without a clear framework.

### What a policy decides

A policy generally answers four questions:

1. **Who?** — which role is concerned;
2. **On what?** — which connector, action type or destination is concerned;
3. **How far?** — simple observation, draft, proposal or execution;
4. **With what effect?** — allowed, allowed with approval, or denied.

### Very simple example

A policy might say:

- the **Contributor** can prepare a Teams draft;
- the **Project Manager** can propose a SharePoint publication;
- the **Project Owner** must approve before execution;
- no one else can directly execute that publication.

### Understanding levels: `observe`, `draft`, `propose`, `execute`

The **level** describes how far a role can go in the flow.

| Level | What the user can do | What they cannot yet do | Simple example |
| --- | --- | --- | --- |
| `observe` | see information, follow the topic, consult the queue | create an action or draft | a reader follows signals without preparing an output |
| `draft` | prepare a draft, a text, an intention to act | officially submit the action to the queue | a contributor prepares a Teams message but does not propose it |
| `propose` | submit a real action request in the governed queue | execute the action directly | a project manager proposes a Jira ticket |
| `execute` | launch the real execution if other conditions are met | bypass the policy or imposed approvals | a project owner publishes an artifact to SharePoint |

### Very simple reading

- **`observe`** = I look;
- **`draft`** = I prepare;
- **`propose`** = I officially request;
- **`execute`** = I actually launch.

### Understanding effects: `allow`, `require_approval`, `deny`

The **effect** describes what the platform does when a role reaches this level.

| Effect | What it means | Practical consequence |
| --- | --- | --- |
| `allow` | the action is permitted at this level | the flow can advance without an extra approval step if everything else is ready |
| `require_approval` | the action is possible but must be approved | the approval queue becomes mandatory before execution |
| `deny` | the action is forbidden for this role or scope | the user cannot go further on this flow |

### Very simple reading

- **`allow`** = yes;
- **`require_approval`** = yes, but after human validation;
- **`deny`** = no.

### How to read a policy line

Take this reading:

- **Role**: Project Manager
- **Connector**: SharePoint publish
- **Level**: `execute`
- **Effect**: `require_approval`

This means:

- the Project Manager can go as far as an execution request;
- but the publication does not leave immediately;
- approval is required before the real execution.

### Concrete policy examples

| Business case | Role | Recommended level | Recommended effect | Why |
| --- | --- | --- | --- | --- |
| Publishing a report to SharePoint | Project Manager | `execute` | `require_approval` | the output is external and must be reviewed |
| Creating a Jira ticket from a blockage | Project Manager | `propose` | `allow` or `require_approval` | the project can request a ticket without necessarily opening it automatically |
| Low‑risk internal Teams message | Contributor | `execute` or `propose` | `allow` | quick communication with low impact |
| Outlook email to sponsors | Contributor | `propose` | `require_approval` | more sensitive and formal communication |
| Webhook to a third‑party tool | Project Owner | `execute` | `require_approval` | technical output that must remain tightly controlled |
| Connector not ready or not authorized | all except admin | `observe` or no usage | `deny` | we avoid any accidental departure |

### Step‑by‑step to configure a governance policy

Follow this simple order.

#### Step 1 — Open the right surface

From the project **Workspace**, open **Governance policies**.

#### Step 2 — Choose the flow to control

First ask yourself:

- is it a **publication**;
- a **ticket**;
- a **message**;
- a **webhook**;
- or another external action?

#### Step 3 — Choose the concerned role

Then define which role can act:

- **Contributor**;
- **Project Manager**;
- **Project Owner**;
- or another role present in your configuration.

#### Step 4 — Choose the action level

Decide if this role should only:

- observe;
- prepare a draft;
- propose;
- or execute.

#### Step 5 — Choose the effect

Decide if this level should be:

- allowed directly (`allow`);
- allowed with approval (`require_approval`);
- or denied (`deny`).

#### Step 6 — Verify the connector or destination concerned

A good policy is not enough if the connector:

- is not technically ready;
- is not open to the project;
- or does not have the correct artifact destination.

#### Step 7 — Test with a non‑admin role

The best control is practical:

1. log in with a realistic business role;
2. open **Actions & approvals**;
3. check what is visible, allowed or blocked;
4. adjust the policy if the behavior is not as expected.

![Project governance policies](/img/screenshots/localized/fr/14-governance-policies.png)

### Simple rules for good governance configuration

- use `allow` on `execute` only for low‑risk flows;
- use `require_approval` whenever content leaves the project or modifies an external system;
- use `deny` when the connector is not ready, not authorized or too sensitive;
- keep rules consistent with the roles actually assigned;
- always test a real case before considering the policy ready.

### Common mistakes to avoid

| Mistake | Correct reading |
| --- | --- |
| “I see the connector, so I can use it” | wrong: visibility does not guarantee authorization or technical health |
| “`propose` means the action leaves” | wrong: `propose` means the request enters the governed queue |
| “`execute` means no control” | wrong: `execute` can still be combined with `require_approval` |
| “`deny` means a failure” | wrong: `deny` is often a normal governance decision |

## Part 3 — Actions & approvals

The **Actions & approvals** screen is used to turn an intention into a real **governed action**.

### What the user sees in this screen

A user typically finds:

- a **Propose a governed action** form;
- the choice of **action type**;
- the choice of **execution connector** or **execution option**;
- a **readiness summary** indicating what is available or blocked;
- fields such as **title**, **rationale**, **destination**, **message**, **ticket description**;
- an **approval and execution queue** with already submitted requests.

### Step‑by‑step — create a governed action

#### Step 1 — Open the screen

In the **Workspace**, open **Actions & approvals**.

#### Step 2 — Choose the action type

First select the business intention. Visible action types include:

- **Publish artifact to SharePoint**;
- **Send Teams message**;
- **Send Outlook message**;
- **Create Jira ticket**;
- **Create Azure DevOps ticket**;
- **Webhook** depending on tenant configuration.

#### Step 3 — Verify the compatible execution option

The interface then searches for **compatible execution options**.

Choose an option:

- **healthy**;
- **authorized**;
- actually open to your project.

If no healthy option appears, the check usually concerns:

- the connector itself;
- its health status;
- the project binding;
- the policy;
- or your permission.

#### Step 4 — Read the readiness

The **Execution readiness** area is to verify you are not just preparing a theoretical action.

In practice:

- **available / healthy** = option usable;
- **blocked by health** = connector to check on the platform side;
- **blocked by entitlement** = capacity not included in the plan or not open;
- **blocked by policy** = restrictive project governance;
- **blocked by permission** = your role is insufficient.

#### Step 5 — Fill in the title and justification

Then complete:

- a **clear title**;
- a short but useful **justification**;
- fields specific to the chosen action type.

The justification should answer two questions:

1. **Why is this action necessary?**
2. **On what evidence or decisions does it rely?**

#### Step 6 — Complete the business fields

Fields change according to the action type.

| Action type | Frequently expected fields |
| --- | --- |
| SharePoint publication | title, justification, `artifact ID`, destination, rendering profile, format |
| Teams message | title, justification, message body |
| Outlook message | title, justification, recipients, subject, message body |
| Jira ticket | title, justification, ticket description, optionally project / board key |
| Azure DevOps ticket | title, justification, description, ticket type per connector |
| Webhook | title, justification and data useful to the target system |

#### Step 7 — Propose the action

Once fields are filled, submit the request.

At this stage, the action may not yet have left. It can first enter the **approval queue**.

#### Step 8 — Review by the approver

If the policy requires `require_approval`, an approver must review:

- the title;
- the justification;
- the connector used;
- the payload or business detail;
- any related artifact or draft.

#### Step 9 — Approval, rejection or execution

Depending on the policy and the approver’s role, the request can be:

- **approved**;
- **rejected**;
- then **executed** if everything is ready.

#### Step 10 — Verify the final trace

After execution, check:

- the action queue;
- project activity;
- the **Trace ID** if displayed;
- the **AI Journal** if the flow is reflected there;
- the presence of the artifact, ticket or message in the target tool.

### How to read action statuses

| Status | What it means |
| --- | --- |
| `draft` | the request is still preparatory |
| `pending approval` | approval is awaited before real follow‑up |
| `approved` | the request has been accepted |
| `executed` | the action has actually been launched |
| `rejected` | the request was denied |
| `failed` | the action was launched but did not complete correctly |
| `cancelled` | the request was cancelled |

### Step‑by‑step example — publishing an artifact to SharePoint

#### Situation

The team has reviewed a **weekly brief** and wants to publish it in SharePoint.

#### Path

1. open **Actions & approvals**;
2. choose **Publish artifact to SharePoint**;
3. select a healthy **SharePoint publish** option;
4. fill in the **title** of the action;
5. add a **justification**, e.g. “reviewed and approved version for weekly distribution”;
6. enter the **artifact ID**;
7. choose the **SharePoint destination**;
8. choose the **rendering profile** or **format** if requested;
9. propose the action;
10. if the policy requires it, wait for approval;
11. execute;
12. verify that the artifact is indeed published in SharePoint and traced in ProPM Agent.

### Step‑by‑step example — create a Jira ticket

#### Situation

A signal reports a recurring blockage with planning impact.

#### Path

1. open **Actions & approvals**;
2. choose **Create Jira ticket**;
3. select an available Jira connector;
4. enter a clear title, e.g. “Supplier blockage on critical batch”;
5. complete the **ticket description**;
6. add the **justification** and useful evidence;
7. propose the request;
8. let the approver review if the policy requires `require_approval`;
9. execute;
10. then verify the external reference or created ticket.

### Step‑by‑step example — send a Teams or Outlook message

#### Situation

The project must inform an internal group or a sponsor that a review is finished.

#### Teams path

1. choose **Send Teams message**;
2. select the authorized Teams connector;
3. draft a short, understandable message;
4. add the justification if the flow is governed;
5. propose, get approved if needed, then execute.

#### Outlook path

1. choose **Send Outlook message**;
2. select the Outlook connector;
3. fill in the **recipients**;
4. complete the **subject** and **message body**;
5. propose, get approved if needed, then execute.

#### Practical difference

- **Teams** is well suited for collaborative internal communication;
- **Outlook** is better for more formal and targeted communication.

### Step‑by‑step example — webhook to a third‑party tool

#### Situation

The company wants to trigger an internal flow to a custom tool.

#### Path

1. choose the action type or flow related to **Webhook**;
2. select a compatible webhook execution option;
3. fill in the title and justification;
4. complete the data useful to the target system;
5. propose the request;
6. get approval if the policy requires it;
7. execute;
8. check the result on the target system and in ProPM Agent audit.

### Why an action may be visible but not executable

An action can be visible in the interface but remain blocked if:

- the compatible connector is not healthy;
- the project does not have the correct binding;
- the project policy forbids this level of action;
- your role does not allow proposing or executing;
- an approval is still pending;
- the entitlement or plan capacity blocks the flow.

### What to do if no execution option appears

Follow this order:

1. first check **Governance policies**;
2. then check **Project integrations**;
3. open **Platform administration**;
4. finally check **entitlement**, **permission** and connector health.

### Full scenario — from signal to executed action

#### Simple case

1. an `open` signal reports a blockage;
2. the team reads the summary, explanation and evidence;
3. they decide a Jira ticket is needed;
4. the policy allows the **Project Manager** to `propose` but requires `require_approval`;
5. the Project Manager creates the request in **Actions & approvals**;
6. the **Project Owner** approves;
7. the action moves to **executed**;
8. the external ticket and internal trace remain aligned.

This scenario summarizes the product logic: **see, decide, control, execute, trace**.

### Best practices

- never confuse **draft** and **real execution**;
- use policies to limit sensitive outputs;
- request approval whenever content leaves the project or changes an external system;
- always verify evidence before proposing an action;
- use the **AI Journal** and the action queue as a common audit reference.

## Next

- [Connectors and integrations](./connecteurs-jira-et-sharepoint)
- [Reports, AI Journal and traceability](./rapports-journal-ia-et-tracabilite.md)
- [Portfolio and technical administration](./portefeuille-et-administration-technique.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
