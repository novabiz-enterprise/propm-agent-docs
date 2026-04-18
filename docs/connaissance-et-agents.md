---
title: Knowledge and Agents
slug: /connaissance-et-agents
description: Feed the project knowledge base, understand agent proactivity, and leverage results up to PM Documents.
---

[Home](./index.md) · [Projects and workspace](./projets-et-espace-de-travail.md) · [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md)

![Project knowledge](/img/screenshots/localized/fr/05-knowledge.png)

## Goal

This page explains how to upload or import documents, review the metadata visible in **Knowledge**, and then use the project context in **Agents**.

## Knowledge: what you can do

Observed capabilities:

- search within project contents;
- manual upload;
- data refresh;
- import from approved sources;
- view import history;
- sort, filter and paginate results.

## Supported file types

The explicitly accepted types in the interface include:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Import from approved sources

The import mechanism depends on **ingestion providers** validated at the platform level, then made available to the project.

### What the import selector shows

Depending on the source, the interface may display:

- the source name;
- a readable **source label**;
- the date of the last import;
- a freshness or health status;
- an explanation of blockage when the source is unusable.

### When an import is blocked

An import option may be unavailable due to:

- entitlement;
- permission;
- policy;
- availability status to check;
- missing or not ready project binding.

## Import history

The import history allows you to verify at minimum:

- the displayed provider name;
- the run status;
- freshness after import;
- the `Trace ID`;
- volumes discovered, imported, ignored or marked as incomplete;
- the end date when available.

## Reading the document list and search

### Visible document states

The document table exposes at least the following states:

- **Indexed**;
- **Ingesting**;
- **Failed**.

A visible document that is not yet searchable is often still in the **Ingesting** phase.

### Metadata visible in search results

Search results may display:

- title;
- snippet;
- score;
- section;
- freshness badge;
- **source system** badge;
- **Open source** link;
- search `Trace ID`.

These elements help quickly judge provenance, quality and reusability of evidence.

![Search results in knowledge](/img/screenshots/localized/fr/05-knowledge-search-results.png)

![Agents view](/img/screenshots/localized/fr/04-agents.png)

## Agents: page role

The **Agents** page leverages the project context in a guided conversation.

Confirmed functions:

- list of available agents;
- summary card of the selected agent with **kind**, **scope**, **status** and covered domains;
- conversation area;
- structured outputs and evidence items;
- sessions saved in the browser;
- creation and deletion of custom agents according to rights;
- voice input in **Agents** if the environment still supports it.

## ProPM Agent proactivity

Proactivity in ProPM Agent does not mean an agent acts alone outside the project. The observed behavior is more controlled: the platform detects situations to monitor, surfaces them as **signals**, can prepare a **digest**, propose a **draft** or a **governed action**, then leaves the user or approver to decide the next step.

![Proactivity, digests and governed actions](/img/diagrams/fr/proactivite-et-gouvernance.svg)

### Observed triggers

Proactivity can be fueled by:

- insufficient **freshness**;
- a **contradiction** between evidence;
- an operational **blockage**;
- a **planning pressure** or **costs** visible in the portfolio;
- **unfinished executions**;
- a follow‑up requiring dissemination, validation or relaunch.

### Where proactivity becomes visible

- **Workspace**: signal feed and items to review;
- **Governance, decisions and actions**: digests, notification drafts, action requests;
- **Portfolio command center**: project comparison by indicators;
- **AI Journal**: traceability of the decision chain.

### What proactivity does not do alone

- it does not bypass roles;
- it does not bypass policies;
- it does not automatically publish outside the application without a governed path;
- it remains explainable by evidence, freshness and visible statuses.

## How to pick an agent quickly

When multiple cards are visible, read them in this order:

| Field | What to look at first | Useful reflex |
| --- | --- | --- |
| `kind` | agent type or business specialization | start with the agent whose role directly matches the expected task |
| `scope` | agent visibility scope | check if the agent is limited to the current project or visible more broadly |
| `status` | practical availability of the agent | if the status does not inspire confidence, move to a standard agent before escalating |
| covered domains | topics announced on the card | use them to avoid assigning a planning request to an agent oriented to governance or documents |

In practice, first choose a **standard agent** if you want a well‑known nominal path. Switch to a **custom agent** when the team needs instructions, tone or a more specialized work scope.

## How to work with agents

1. **check the active project**;
2. **choose the appropriate agent**;
3. formulate a usable request with objective, scope and expected format;
4. review the **structured output** before any reuse.

The interface also allows searching the agent roster to reach the right specialist faster.

## Agents to PM Documents, DOCX and XLSX

Agents do not jump directly to a final distributed file. The observed flow is more progressive:

1. an agent produces a **structured output**;
2. this output can feed an **artifact** or a **PM Document**;
3. narrative content goes to a **DOCX** rendering;
4. tabular or matrix content goes to an **XLSX** rendering;
5. review, approval, download and publication then occur in [Reports, AI Journal and traceability](./rapports-journal-ia-et-tracabilite.md).

## Sessions and local memory

Chat history is local to the browser. In practice:

- continuity saved is tied to the **project + agent** pair in the current browser;
- a session is stored locally on the machine used;
- changing browser or machine can cause a saved thread to disappear;
- the first prompt usually serves as the session title, which aids resume;
- do not treat the browser as a shared central archive.

## Custom agents

Creating custom agents depends on the level of rights. Key points to remember:

- not all users can create an agent;
- the creation dialog recalls the active **project context** before saving;
- visible fields cover at minimum **Name**, **Role / instructions** and **Scope**;
- choose **Project only** by default, unless the environment explicitly exposes a wider scope;
- if the **All projects** option is available, the agent is created from the current project but can remain visible in other projects for the same account;
- if a multi‑project agent does not appear elsewhere, first check the same account and access to the target project;
- deletion of a custom agent remains controlled;
- a custom agent remains governed by the project and platform rules.

### Quick choice example

| Need | Recommended choice |
| --- | --- |
| nominal usage, large team, predictable behavior | standard agent |
| specific instructions, team tone, specialized workflow | custom agent |
| usage limited to a single project context | **Project only** |
| same agent reusable in multiple projects of the same account | **All projects** if the option is truly exposed |

![Creating a custom agent](/img/screenshots/localized/fr/04-custom-agent-create.png)

## Voice input in Agents

This documentation no longer describes a separate **voice** entry point in the **Workspace**. When voice input is still available, it is limited to the **Agents** experience and depends explicitly on browser support for speech recognition APIs.

If voice input is not available:

- use text input;
- check browser microphone permissions;
- distinguish a browser limitation from a local environment constraint;
- always review the text added in the composer before **Send**;
- if the mic button is unavailable or an incompatibility message appears, switch immediately to text input.

### Practical voice input cues

| Symptom | First check | Useful reflex |
| --- | --- | --- |
| mic button missing or inactive | support for `SpeechRecognition` / `webkitSpeechRecognition` | switch immediately to text input |
| mic permission denied | browser or OS mic permission | re‑authorize mic then restart listening |
| incomplete transcription | text added in the composer | review, correct and complete before **Send** |
| occasional error during listening | browser or current session state | stop capture, resume with keyboard, then try again later |

Text input remains the default fallback path. It allows work to continue without interrupting the run due to a local browser constraint.

## Best practices

- load reliable and recent sources into **Knowledge** before a major analysis;
- review import history when a managed source seems missing;
- explicitly request **evidence** or **citations** if the decision must be justified;
- if a response contains `stale`, `conflicting` or `unavailable` states, open the page [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md) before publishing.

## Next

- [Structured outputs, evidence and freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Governance, decisions and actions](./gouvernance-decisions-et-actions.md)
- [Reports, AI Journal and traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
