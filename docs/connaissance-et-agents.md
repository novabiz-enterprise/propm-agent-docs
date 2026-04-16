---
title: Knowledge and Agents
slug: /connaissance-et-agents
description: Feed the project knowledge base, launch exchanges with agents, and leverage the results.
---

[Home](./index.md) · [Projects and Workspace](./projets-et-espace-de-travail.md) · [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md)

![Project Knowledge](/img/screenshots/localized/en/05-knowledge.png)

## Objective

This page explains how to upload or import documents, review the metadata visible in **Knowledge**, and then use the project context in **Agents**.

## Knowledge: What You Can Do

Observed capabilities:

- search within project contents;
- manual upload;
- data refresh;
- import from approved sources;
- review of import history;
- sorting, filtering, and pagination of results.

## Supported File Types

The types explicitly accepted in the interface include:

- **PDF**;
- **DOCX**, **ODT**, **RTF**, **TXT**, **Markdown**;
- **CSV**, **XLSX**, **XLSM**, **ODS**;
- **JSON**, **XML**;
- **PPTX**, **ODP**;
- **HTML / HTM**;
- **EML**, **EPUB**;
- **PNG**, **JPG**, **JPEG**, **BMP**, **TIFF**, **HEIF**.

## Import from Approved Sources

The import mechanism depends on the **Ingestion Providers** validated at the platform level, then made available to the project.

### What the Import Selector Shows

Depending on the source, the interface may display:

- the source name;
- a readable **source label**;
- the date of the last import;
- a freshness or health status;
- an explanation of blockage when the source is not usable.

### When an Import is Blocked

An import option may be unavailable due to:

- entitlement;
- permission;
- policy;
- degraded health status;
- project binding absent or not ready.

## Import History

The import history allows you to verify at minimum:

- the displayed provider name;
- the run status;
- the freshness after import;
- the `trace ID`;
- volumes discovered, imported, ignored, or failed;
- the end date when available.

## Reading the Document List and Search

### Visible Document States

The document table exposes at least the following states:

- **Indexed**;
- **Ingesting**;
- **Failed**.

A document visible but not yet retrievable in search is often still in the **Ingesting** phase.

### Metadata Visible in Search Results

Search results may display:

- title;
- snippet;
- score;
- section;
- freshness badge;
- **source system** badge;
- **Open source** link;
- `Trace ID` of the search.

These elements help quickly judge the provenance, quality, and reusability of evidence.

![Search Results in Knowledge](/img/screenshots/localized/en/05-knowledge-search-results.png)

![Agents View](/img/screenshots/localized/en/04-agents.png)

## Agents: Role of the Page

The **Agents** page leverages the project context in guided conversation.

Confirmed functions:

- list of available agents;
- summary card of the selected agent with **kind**, **scope**, **status**, and covered domains;
- conversation area;
- structured outputs and evidence elements;
- sessions saved in the browser;
- creation and deletion of custom agents according to rights;
- voice mode if the browser supports it.

## How to Quickly Choose an Agent

When multiple cards are visible, read them in this order:

| Field | What to Look at First | Useful Reflex |
| --- | --- | --- |
| `kind` | agent type or business specialization | start with the agent whose role directly matches the expected task |
| `scope` | agent visibility scope | check if the agent is limited to the current project or visible more broadly |
| `status` | practical availability of the agent | if the status doesn't inspire confidence, switch to a standard agent before escalating |
| covered domains | topics announced on the card | use them to avoid assigning a planning request to an agent focused on governance or documents |

In practice, first choose a **standard agent** if you are looking for a well-known nominal path. Switch to a **custom agent** when the team needs more specialized instructions, tone, or work scope.

## How to Work with Agents

1. **verify the active project**;
2. **choose the appropriate agent**;
3. formulate an actionable request with objective, scope, and expected format;
4. review the **structured output** before any reuse.

The interface also allows searching within the agent roster to reach the right specialist faster.

## Sessions and Local Memory

Chat history is local to the browser. In practice:

- saved continuity is attached to the **project + agent** pair in the current browser;
- a session is memorized locally on the workstation used;
- changing browsers or machines may cause a saved thread to disappear;
- the first prompt generally serves as the session title, facilitating resumption;
- the browser should not be treated as a central shared archive.

## Custom Agents

Creating custom agents depends on the level of rights. Key points to remember are:

- not all users can create an agent;
- the creation dialog reminds you of the **project context** active before saving;
- visible fields include at minimum **Name**, **Role / instructions**, and **Scope**;
- choose **Project only** by default, unless the environment explicitly exposes a broader scope;
- if the **All projects** option is available, the agent is created from the current project but may remain visible in other projects for the same account;
- if a multi-project agent does not appear elsewhere, first verify the same account and access to the target project;
- deletion of a custom agent remains controlled;
- a custom agent remains governed by project and platform rules.

### Quick Example of Choice

| Need | Recommended Choice |
| --- | --- |
| nominal usage, broad team, predictable behavior | standard agent |
| specific instructions, team tone, specialized workflow | custom agent |
| usage limited to a single project context | **Project only** |
| same agent reusable in multiple projects of the same account | **All projects** if the option is actually exposed |

![Custom Agent Creation](/img/screenshots/localized/en/04-custom-agent-create.png)

## Voice and Browser Compatibility

Voice is exposed in the **Agents** experience. It explicitly depends on browser support for speech recognition APIs.

If voice is not available:

- use text input;
- check browser microphone permissions;
- distinguish a browser limitation from an application problem;
- speech recognition adds text to the composer: review it before **Send**;
- if the microphone button is unavailable or an incompatibility message appears, immediately switch to text input;
- if the problem persists, first check support for `SpeechRecognition` / `webkitSpeechRecognition`, then microphone permission.

### Practical Guidelines for Voice

| Symptom | Check First | Useful Reflex |
| --- | --- | --- |
| Microphone button missing or inactive | support for `SpeechRecognition` / `webkitSpeechRecognition` | immediately switch to text input |
| Microphone authorization denied | browser or OS microphone permission | reauthorize the microphone then restart listening |
| Incomplete transcription | text added to the composer | review, correct, and complete before **Send** |
| Occasional error during listening | browser state or current session | stop capture, resume with keyboard, then try again later |

Text input remains the nominal fallback path. It allows work to continue without blocking the run on a local browser issue.

## Best Practices

- load reliable and recent sources into **Knowledge** before a major analysis;
- review import history when a managed source seems absent;
- explicitly request **evidence** or **citations** if the decision must be justified;
- if a response contains `stale`, `conflicting`, or `unavailable` states, open the page [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md) before publication.

## Next

- [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md)
- [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
