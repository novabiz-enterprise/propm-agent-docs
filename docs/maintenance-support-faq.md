---
title: Maintenance, Support, and FAQ
slug: /maintenance-support-faq
description: Operational best practices, common diagnostics, visible alerts, and answers to frequently asked questions.
---

[Home](./index.md) · [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) · [Glossary](./glossaire.md)

## Useful surfaces for support

The following observation points are confirmed in the application:

- **notifications** in the top bar;
- **health indicator** in the top bar;
- **signals** in the project workspace;
- **AI Log** for runs and activity;
- **Audit / activity** in platform administration.

## Quick diagnostic procedure

1. Check that the correct **project** is active;
2. Distinguish **empty state**, **read-only**, **access denied**, or **error**;
3. Open the **AI Log** if the incident concerns an agent, a result, or an artifact;
4. Keep the **Trace ID** and, if visible, the `Context snapshot ID` or the `Structured output ID`;
5. Check rights, integrations, entitlements, and seats if access or execution is blocked.

## Short decision tree by symptom

| Symptom | First-level surface | Next escalation |
| --- | --- | --- |
| Abnormal Microsoft login or return | [Getting Started](./demarrage.md) | check Entra, tenant, `redirectUri`, and seats |
| No project visible after login | **Projects** / project selector | **Access Control** or adding the account to the project |
| Dubious agent response, artifact, or publication | **AI Log** → `Runs` | **Activity**, then **Reports & Artifacts** |
| Inconsistent import or search | **Knowledge** and import history | **Project integrations**, then **Platform Administration** |
| External action visible but blocked | **Actions & approvals** | **Project integrations**, then **Platform Administration** |

## Quick troubleshooting sheets

### Login problem

Check the URL, tenant, guest account if guest usage, the actually configured `redirectUri`, and seat availability if the plan consumes one.

### Page visible but not editable

You are likely in **read-only**. Check your role before concluding an incident.

### Document visible but not searchable

Start by checking the document status (`Indexed`, `Ingesting`, `Failed`), import history, page refresh, and the search `Trace ID` if a call failed.

### Import from a source grayed out or missing

The most frequent causes are: provider not validated, missing project binding, blocking entitlement, insufficient permission, or degraded health.

### Action visible but not executable

Check the compatible connector, project binding, required approval, user role, and applicable policy.

### Voice unavailable

Voice depends on the browser. Try another browser, check microphone permissions, and use text input if speech recognition is not supported.

## Data to provide to support

| Item | Why it's useful |
| --- | --- |
| Deployment URL | Identify the concerned environment |
| Concerned project | Replay the context |
| Trace ID | Locate precisely the run or event |
| Context snapshot ID / Structured output ID | Link a run, an output, and an artifact |
| Screenshot | Understand the visible state at the moment of the incident |
| Approximate time | Cross-reference the event with logs |

## FAQ — access and security

### Why can I see an administration page without being able to modify it?

Because the product distinguishes **read-only** and **access denied**. A page can be exposed for inspection without allowing modification.

### Why does my Microsoft login succeed but the application remains blocked?

Check the tenant, account authorization, existence of an accessible project, and seat availability if the plan imposes one.

### Why does my login succeed but no project appears?

This symptom does not necessarily indicate an authentication problem. First check the **project selector**, then the **Projects** page. If the list remains empty, the account likely hasn't been added to the correct project yet or doesn't have the creation right.

### When should an external account be invited as a `guest` user?

When the account belongs to a tenant other than the one hosting the application. The account must then be invited into the target tenant, then authorized on the application or via the expected group.

### How to quickly distinguish a tenant, `redirect URI`, Entra client, or seat problem?

Follow this order:

1. If Microsoft fails **before** returning to the application, suspect tenant, `clientId`, or `redirect URI` first;
2. If login succeeds but the application remains blocked, then check **seats** and access to a project;
3. If only a specific surface remains locked, the issue is often related to **role** or **permission** rather than authentication.

## FAQ — health, runtime, and connectivity

### Why is the health panel degraded while some pages still load?

Because authentication can remain valid while a **API**, **realtime / WebSocket** component, or a provider remains partially degraded. First note the state displayed in the health indicator, then proceed to [Interface and Navigation](./interface-et-navigation.md) for reading the panel and [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md) if the doubt concerns the provider or admin integration.

### What to do if login succeeds, a project is visible, but runs do not start?

Check in this order: active project, health indicator, assumed operational AI provider, possible entitlement, then **AI Log** to see if a run was at least created. If the provider remains suspect, proceed to [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md).

## FAQ — project, workspace, and agents

### When to use Workspace rather than Agents?

Use **Workspace** to configure and pilot the project; use **Agents** to converse with an agent and produce a structured output.

### Where is chat history stored?

The visible history is local to the browser. It is not a central shared archive.

### Why does a custom agent not appear in another project?

First check its **scope**. An agent `Project only` remains limited to the current project. If the environment exposes an agent `All projects`, it must additionally be accessed with the **same account** in a project to which this account has access.

### Is chat history retained per project, per agent, or only per browser?

The observed continuity is **local to the browser** and attached to the **project + agent** pair. It is therefore neither global to the entire tenant nor automatically shared between browsers.

### Which browsers or permissions should be checked first for voice?

Start with browser support for `SpeechRecognition` / `webkitSpeechRecognition`, then control microphone access permission. If the button remains unavailable or recognition fails, revert to text input without blocking the project journey.

## FAQ — knowledge and search

### Why is a document visible in the list but not yet retrievable in search?

Because it may still be in **Ingesting** state or awaiting completion of the indexing pipeline.

### What do `source label` and `source system` mean?

They are provenance indicators. They help know where evidence comes from without reading all the backend configuration.

### Why can an import seem finished while some documents are not yet retrievable?

Because visible ingestion does not always mean all indexing is complete. Check the document status (`Indexed`, `Ingesting`, `Failed`), then relaunch the search when the document is actually indexed.

### Why is a document `Indexed` while evidence remains `unavailable` in a structured output?

The document may be well present in **Knowledge** while the evidence linked to the run could not be confirmed, reopened, or stabilized at generation time. Resume reading in [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md), then check the run in [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) if necessary.

### What do freshness badges in search and in evidence mean?

They indicate the temporal trust state of the source: `fresh`, `aging`, `stale`, `conflicting`, or `unavailable`. Use them as a signal for review before publication, not as a cosmetic detail.

### What's the difference between `Trace ID`, `Context snapshot ID`, and `Structured output ID`?

- **Trace ID**: main tracking identifier to locate a run or event;
- **Context snapshot ID**: capture of the document/project context used during the run;
- **Structured output ID**: identifier of the structured output actually produced.

## FAQ — AI outputs and AI Log

### What's the difference between Runs and Activity?

**Runs** shows agent executions and their metadata; **Activity** shows a timeline of project events and the associated raw payload.

### How to know which AI provider was actually used?

Open the run detail in **AI Log** and read **Effective AI Provider**. This is the reference value for this run.

### A run is visible in `Runs`, but no clear sequence appears in `Activity`. What to do?

This case often means the run existed, but no draft, artifact, notification, or downstream action has yet been created, or you are not opening the correct project / filter in **Activity**. Resume the investigation via [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md) following the order **diff / lineage / Runs / Activity**.

## FAQ — reports, artifacts, and governance

### What's the difference between PM Doc, artifact, and artifact version?

The artifact is the governed object, the artifact version is its historical state, and the PM Doc is the reviewed, edited, or published project document derived from that object.

### Why is an action visible but not executable?

Check rights, connector, project binding, governance policy, and required approval. See also [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md).

### When to **Approve**, **Publish**, or **Add to knowledge**?

- **Approve** validates an artifact version still in `draft`;
- **Publish** triggers governed dissemination to a target destination or format;
- **Add to knowledge** reinjects a reviewed document into project search.

These three actions are not interchangeable.

### How to arbitrate `conflicting` evidence before publication?

Reopen contradictory sources, compare snippet, date, provenance, and freshness, then document the arbitration in the artifact, review note, or governance flow. If needed, subsequently reconcile everything with the **AI Log**.

### Why does a notification draft remain `held` or never go to an external channel?

In the observed interface, `in_app` is the most direct path. External channels can remain in **held / draft** posture as long as governed dissemination, policy, connector, or approval are not met. Resume the chain in [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md): signal, possible digest, draft, policy, connector, then approval.

### Why does an action remain `pending approval` or `approved` without visible execution?

- `pending approval` means agreement has not yet been given;
- `approved` means agreement exists, but not necessarily that execution has already occurred.

Then confirm the downstream step in **Actions & approvals**, then in **Activity**. If needed, use the method described in [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md).

### Why is an integration available in the platform but locked in my project?

Because a technical platform definition is not enough. A valid **project binding**, adequate permissions, compatible policy, acceptable health state, and, depending on cases, the corresponding entitlement are still required.

## FAQ — portfolio and administration

### Why does the portfolio not retrieve any project or any outlier?

Check selected projects, active signals, weights, thresholds, and minimum severity applied to the cohort.

### How to release or reassign a seat?

This is done from **Platform Administration** by an authorized profile. Removal releases capacity for later reassignment, subject to the plan's posture and removal window.

### What does `Validate` successful but `Test` failed in `AI provider settings` mean?

The administrative configuration appears consistent, but actual connectivity or remote access still fails. Check endpoint, secret or actual auth, provider accessibility, and network constraints, then resume the sequence described in [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md).

### Why is my provider visible but never `Operational`?

A provider can be configured or even validated without passing the entire chain **Configuration → Validation → Test → Activate**. Also check entitlement, allowed providers, and general readiness before considering it usable.

### What to do if no Azure OpenAI deployment appears in `AI provider settings`?

This generally means no deployment is visible in the configured Azure OpenAI resource, or discovery cannot succeed with current parameters. Check endpoint, auth, API version, and actual presence of deployments on Azure side, then resume detailed control in [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md).

### Why is the AI provider visible but not editable or usable?

The provider may be visible in read-only while its modification remains reserved to an admin role. Its usage may also be limited by the plan, `allowed providers`, entitlement, or runtime resolution of the effective provider.

## Next

- [Glossary](./glossaire.md)
- [Getting Started](./demarrage.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)
