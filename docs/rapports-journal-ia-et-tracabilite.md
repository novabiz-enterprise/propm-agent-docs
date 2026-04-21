---
title: Reports, AI Log, and Traceability
slug: /rapports-journal-ia-et-tracabilite
description: Review PM Docs, publish deliverables, and track the complete traceability of AI runs.
---

[Home](./index.md) · [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md) · [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)

![Reports and Artifacts](/img/screenshots/localized/en/08-reports-overview.png)

## Objective

This page explains the difference between **artifact**, **artifact version**, and **PM Doc**, then details the role of the **AI Log** for audit and support.

## Three Concepts to Distinguish

| Term | Role |
| --- | --- |
| Artifact | Governed object resulting from a run or review work |
| Artifact Version | Precise state of an artifact, with history, diff, and lineage |
| PM Doc | Reviewed, edited, downloaded, published, or reinjected project document into the Knowledge |

## Observed Lifecycle

The most common flow is:

1. an agent produces a **structured output**;
2. depending on the flow and available rights, that output can then feed an **artifact** or a **PM Document**;
3. the user opens **Reports & Artifacts** when a governed document exists or must be prepared;
4. they review the content, consult the **diff** and **lineage**;
5. they approve, publish, download, or add the document to the **Knowledge**.

In other words, an agent answer does not automatically become a final document: the observed chain remains **structured output → artifact / PM Doc → review → downstream decision**.

## Visible Statuses

### Artifact

The confirmed statuses at the artifact/version level are:

- `draft`
- `approved`
- `published`
- `superseded`

### PM Doc

PM Docs expose at least the following compatibility states:

- `draft`
- `final`

## If Reports & Artifacts looks empty

A project can display an empty surface for several normal reasons:

- no **artifact** or **PM Doc** has been created yet;
- the run stayed at the **structured output** stage without downstream transformation;
- the wrong project or a filter hides the expected rows;
- the environment does not contain the same seeded demo data as other screenshots or tests.

In that case, start again from **Agents** or **AI Log**, then return to **Reports & Artifacts** when a governed object actually exists.

## Actions Available in Reports & Artifacts

The hub exposes actions such as:

- **review / preview**;
- **diff**;
- **lineage**;
- **edit**;
- **download**;
- **add to knowledge**;
- **publish**;
- **delete**.

## Diff, Lineage, and Versioning

### Diff

The **diff** compares artifact versions. It is most useful for:

- reviewing differences before publication;
- distinguishing an agent's proposal from an actually validated version;
- understanding why a final document differs from a previous draft.

### Lineage

The **lineage** connects:

- the `source run ID`;
- the `context snapshot ID`;
- the `structured output ID`;
- the artifact and its version;
- linked publications and evidence.

### Versioning

The interface also allows selecting a version by number and identifying the previous version, the base for comparison, or a superseded version.

## Approval and Publication

Observed behaviors show that:

- **Approve** validates an artifact version still in `draft`;
- **Publish** corresponds to governed distribution to a target destination or output format when the flow allows it;
- publication sends governed formats and destinations;
- **Add to knowledge** reinjects a reviewed document into project search;
- **Download** remains separate from both publication and add to knowledge.

## Available Editors

The product includes several editing surfaces:

- a rich / markdown editor for document-oriented outputs;
- a spreadsheet-like grid editor for table-oriented outputs;
- a review / source read-only mode if the format is not editable in the same way.

Confirmed downloads: **DOCX** and **XLSX**.

### Practical Limits to Keep in Mind

| Case | Useful Reading |
| --- | --- |
| actually editable content | use the editor for review and controlled adjustments before approval |
| content mainly in review mode | treat the screen as a validation surface, not as the primary place for rewriting |
| need for a reference rendering to share | the governed download remains the most reliable output to share outside the application |

![PM Doc Editor and Document Review](/img/screenshots/localized/en/06-pm-doc-editor.png)

![AI Log](/img/screenshots/localized/en/09-ai-log-runs.png)

## AI Log: What the Page Covers

The **AI Log** has two distinct tabs:

- **Runs**;
- **Activity**.

## Runs vs Activity

| Tab | What it's for |
| --- | --- |
| Runs | Review an agent execution, its traceability metadata, and its linked artifacts |
| Activity | Review a project event timeline and inspect the raw payload of an event |

### When to Open Runs

Open **Runs** to:

- understand why a result was produced;
- find the provider actually used;
- review freshness, confidence, and citations;
- link a run to an artifact or a PM Doc.

### When to Open Activity

Open **Activity** to:

- reconstruct a timeline;
- verify that a draft, approval, or publication has indeed left an event;
- inspect the raw payload when doing support or audit.

### Examples of Useful Events to Confirm in Activity

Depending on the flow, **Activity** can help you confirm that a downstream event was properly recorded, for example:

- creation of a draft;
- approval of an artifact;
- publication;
- preparation of a notification;
- decision for approval, rejection, or governed execution.

### Concrete Examples of `Type` / `Kind`

The values below are examples observed in seeded flows and demonstrations. They provide a good reading reference, without claiming to cover all future events.

| Type | Kind | Practical Reading |
| --- | --- | --- |
| `agent_execution` | `completed` / `failed` | an agent run ended successfully or failed |
| `document_upload` | `started` / `completed` / `failed` | a document started ingestion, completed it, or failed |
| `report_generated` | `completed` | a PM Doc or report was generated and logged |
| `marketplace_update` | `completed` | a notification or system update was recorded in the history |

## Visible Filters and Columns

### Runs

Observed filters:

- search on agent / status / run ID;
- agent filter;
- status filter.

Visible columns: **Created**, **Agent**, **Status**, **Cost**, **Run ID**, **Actions**.

The **Cost** field exposes at least **tokens** and the number of **calls** when this information is available.

### How to read `Trace ID`, `Cost`, `Confidence`, and `Source freshness`

Keep the following interpretation simple:

- **Run ID** is the most practical handle for finding a visible row again inside **Runs**;
- **Trace ID** is mainly for cross-service diagnostics, support, and audit correlation;
- **Cost** (`tokens` / `calls`) shows runtime usage for transparency and investigation, not a business approval signal by itself;
- **Confidence** is a review cue, not proof on its own;
- **Source freshness** tells you how current the cited evidence still is over time.

If you need a portfolio-level signal about budget or usage pressure, the relevant indicator is **`cost_pressure`** in **Portfolio**, not the raw **Cost** card of an individual run.


### Activity

Observed filters:

- search on type / kind / actor;
- type filter;
- kind filter.

Visible columns: **Created**, **Type**, **Kind**, **Actor**, **ID**, **Actions**.

## Technical Details Visible in a Run

The details of a run can expose:

- `Trace ID`;
- `Context snapshot ID`;
- `Structured output ID`;
- citations;
- `Effective AI Provider`;
- `Deployment-selected AI Provider`;
- `Model family`;
- `Confidence`;
- `Source freshness`;
- linked artifacts.

## AI Runtime Transparency

The following distinction is important:

- **AI provider selected at deployment**: initial environment choice;
- **effective AI provider**: provider actually used for this run.

These two values can differ. In case of doubt, the **AI Log** is authoritative for the observed run.

### Simple reading of `Effective AI Provider`

`Effective AI Provider` answers the question: **“Which provider actually served this exact run?”**

For investigation, this value is more reliable than an assumption based only on the administrative configuration, because the observed runtime value can differ from the provider selected at deployment.

## Surface to Open First Based on Symptom

| Symptom | Surface to Open First | Why |
| --- | --- | --- |
| content divergence between draft and final version | **Diff** | to see what actually changed |
| doubt about evidence or provenance | **Lineage** | to link run, structured output, artifact, and sources |
| doubt about runtime, provider, or AI execution | **Runs** | to review `Trace ID`, effective provider, freshness, and confidence |
| doubt about publication, approval, or downstream flow | **Activity** | to confirm the timeline and raw payload |

## Recommended Investigation Workflow

When a deliverable, publication, or notification seems questionable, start from the most visible to the most technical:

1. open the concerned **PM Doc** or artifact;
2. consult the **diff** to see what actually changed;
3. open the **lineage** to note `source run ID`, `Context snapshot ID`, and `Structured output ID`;
4. switch to **Runs** to review freshness, confidence, citations, effective AI provider, and linked artifacts;
5. use **Activity** to confirm the downstream flow: draft, approval, publication, notification, or governed action;
6. finally, keep the **Trace ID** if the investigation needs to be resumed by support or audit.

### Case 1 — A final PM Doc seems incorrect

1. open the final **PM Doc** and confirm the version actually published;
2. use **Diff** to identify what was added, removed, or rephrased;
3. open **Lineage** to find the `source run ID` and `Structured output ID`;
4. in **Runs**, check the evidence, freshness, and effective provider;
5. if the final content does not reflect the expected flow, finish in **Activity** to verify the approval, publication, and the actor who pushed the version.

### Case 2 — A prepared action or notification did not complete

1. start from the visible draft, action queue, or notification;
2. note `relatedArtifactId` or `relatedNotificationId` when they exist;
3. use **Activity** to confirm if an approval, rejection, or execution was logged;
4. if the flow remains unclear, return to **Runs** to check the source run and the logic that produced the recommendation;
5. finally document the **Trace ID** and related identifiers before escalating.

## Which IDs to Prioritize for Retention

| Incident Type | IDs to Prioritize for Retention |
| --- | --- |
| questionable run result | `Trace ID`, `Context snapshot ID`, `Structured output ID` |
| suspicious artifact or final PM Doc | `source run ID`, `Structured output ID`, concerned artifact version |
| action or notification with unclear follow-up | `Trace ID`, `relatedArtifactId`, `relatedNotificationId` |
| cross-support investigation | all IDs above, plus approximate time and concerned project |

## Traceability Best Practices

- keep the **Trace ID** when a result is important;
- before publishing, verify the lineage between the deliverable and the evidence;
- in case of discrepancy between two versions, use the **diff** before arbitration;
- add to the **Knowledge** only deliverables that have actually been reviewed;
- use **Activity** to complete the investigation when **Runs** is not enough.

## Next

- [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Portfolio and Technical Administration](./portefeuille-et-administration-technique.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
- [Glossary](./glossaire.md)
