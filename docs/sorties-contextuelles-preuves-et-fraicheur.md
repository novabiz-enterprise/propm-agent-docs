---
title: Structured Outputs, Evidence, and Freshness
slug: /sorties-contextuelles-preuves-et-fraicheur
description: How to correctly read a structured output, its evidence, freshness states, and traceability IDs.
---

[Home](./index.md) · [Knowledge and Agents](./connaissance-et-agents.md) · [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)

![Agents View](/img/screenshots/localized/en/04-agents.png)

## Objective

This page explains how to interpret a **structured output** in ProPM Agent to decide whether the result is directly usable, needs review, or should be transformed into a governed artifact.

## Why It's Important

ProPM Agent does not return only free text. Observed runs can additionally expose:

- a **summary**;
- **findings**;
- **decisions needed**;
- **actions**;
- **assumptions**;
- **missing information**;
- **watchpoints**;
- **evidence**;
- metadata for **freshness** and **confidence**;
- **artifact proposals**, **follow-ups**, and **notifications**.

## Where This Information Appears

Structured outputs and their metadata are visible in several surfaces:

- **Agents**, immediately after a run;
- **AI Log**, in the detail of a run;
- **Reports & Artifacts**, via the lineage between run, artifact, and PM Doc.

![Example of a structured output in the project workspace](/img/screenshots/localized/en/03-workspace-structured-output.png)

## How to Read a Structured Output

### Recommended Reading Order

1. Read the **Summary**;
2. Then open **Decisions needed** or **Actions**;
3. Check the **Evidence** section;
4. Review the **Confidence** and **Source freshness**;
5. Then decide whether the response can remain in the chat, become a draft artifact, or require human review.

### Meaning of Sections

| Section | What It's For |
| --- | --- |
| Summary | Shortest version of the result, ready for quick review |
| Findings | Facts, reasons, or observations highlighted by the run |
| Decisions needed | Points requiring human arbitration |
| Actions | Recommended follow-ups to execute or plan |
| Assumptions | Implicit conditions the response depends on |
| Missing information | Missing information that reduces the robustness of the result |
| Watchpoints | Risks, contradictions, or subjects to monitor |
| Evidence | References serving as proof or justification |
| Artifact status / Artifact proposals | Indications on the possible transformation of the result into a governed artifact |
| Follow-ups | Proposed continuation steps |
| Notifications | Drafts or notifications suggested by the flow |

## Simplified Reading Example

The example below is **illustrative**. It serves to show how to review a structured card before reuse:

> - **Summary**: The critical batch appears to be two weeks late.
> - **Findings**: The latest planning note is more recent than the governed calendar connector.
> - **Decisions needed**: Should the sponsor milestone be rebaselined or should a planning revalidation be requested?
> - **Evidence**: Planning note, excerpt from weekly report, state of the source connector.
> - **Source freshness**: Knowledge `fresh`, planning connector `stale`.
> - **Watchpoints**: Possible contradiction between project communication and the latest synchronized data.

Recommended reading in this case:

1. The **Summary** tells you what to review first;
2. The combination **Evidence** + **Source freshness** prevents you from publishing too quickly;
3. The presence of a **Watchpoint** and a decision to take pushes towards human review, then towards an artifact if the subject becomes formal.

## Two Common Cases to Distinguish

| Case | Practical Reading | Recommended Decision |
| --- | --- | --- |
| **Correct confidence but insufficient freshness** | The reasoning seems coherent, but part of the sources is `stale` or `aging` | Do not disseminate without revalidation or documentary refresh |
| **Low confidence but recent sources** | The sources are recent, but the run still reports gaps, contradictions, or overly strong assumptions | Keep the output as exploratory work, then relaunch the review or the run before formalizing |

This distinction avoids treating **confidence** as a single score. A response can seem solid while relying on outdated sources, or vice versa.

## How to Read Evidence

Each piece of evidence or citation can expose several useful elements:

- a **title** or source name;
- a **source URI** or documentary name;
- a **snippet**;
- a **page** or **section** when available;
- a **sync** date;
- a **source system**;
- a **freshness** badge;
- an **authority** rank when exposed.

### What to Check Before Reusing Evidence

1. Does the snippet properly support the displayed message?
2. Is the source identifiable and reopenable?
3. Is the freshness acceptable for the expected decision level?
4. Do multiple pieces of evidence tell the same story, or is there contradiction?

## Freshness States

| State | Practical Meaning | Recommended Reaction |
| --- | --- | --- |
| `fresh` | Source sufficiently recent for normal use | Can be reused after normal review |
| `aging` | Source still usable but approaching a need for revalidation | Check quickly before broad dissemination |
| `stale` | Source too old to be considered reliable without additional control | Refresh, reimport, or confirm before decision |
| `conflicting` | The source contradicts another relevant source | Do not arbitrate automatically; review the evidence |
| `unavailable` | The source could not be confirmed or retrieved | Treat as an alert, not as usable evidence |

## Confidence

**Confidence** is a global signal of the result's robustness. It must be interpreted with freshness and evidence, never isolated.

Plan for additional human review if you see:

- low confidence;
- absent or non-specific evidence;
- `stale`, `conflicting`, or `unavailable` states;
- significant **Missing information** section;
- decision or action with external impact.

## Review Level Based on Impact

| Impact Level | Minimum Review | Recommended Escalation |
| --- | --- | --- |
| Internal work draft | Check `Summary`, `Findings`, and at least one reopenable piece of evidence | Keep the output in the chat if it remains exploratory |
| Team coordination or internal project action | Check evidence, freshness, missing information, and proposed actions | Create an artifact if the result must be shared or archived |
| Sponsor decision, publication, external notification, or governed action | Review all evidence, arbitrate `conflicting` / `stale` states, retain technical IDs | Go through **Reports & Artifacts**, the **diff**, the **lineage**, and the **AI Log** before dissemination |

## Traceability IDs to Keep

| Field | Usage |
| --- | --- |
| `Trace ID` | Locate precisely the run or event for support |
| `Structured output ID` | Identify the structured output actually produced |
| `Context snapshot ID` | Understand in which documentary or project context the run executed |

These fields are particularly useful when you need to reconcile a run, an artifact, and an event from the **AI Log**.

## When to Transform the Output into an Artifact

The typical observed path is:

1. Project question;
2. Structured response;
3. Creation of a **draft artifact**;
4. Review of the **diff** and **lineage**;
5. Approval or publication.

Transform an output into an artifact when:

- It must become a formal deliverable;
- It must go through validation or publication;
- You need to maintain explicit lineage to a run and its evidence;
- The content must leave the chat for external dissemination, approval, or durable traceability.

Simple rule: While exploring, the chat may suffice; as soon as a result must be **shared, approved, published, or kept as a trace**, go through **Reports & Artifacts**.

## Checklist Before Reuse in a Deliverable

1. Does the summary accurately match the detailed findings?
2. Are the proposed actions consistent with the project situation?
3. Is the evidence sufficiently precise to justify the decision?
4. Are the freshness states acceptable?
5. Should an artifact be created or is keeping the output in the chat sufficient?

## Common Issues

### The Response Seems Clean but No Evidence Appears

Treat the result as an item to review before external use. The absence of visible evidence reduces the ability to justify the content.

### Evidence is `conflicting`

Do not publish directly. Open the source, compare the conflicting references, and document the arbitration in the artifact or in governance. If the subject requires a formalized decision, proceed to [Governance, Decisions, and Actions](./gouvernance-decisions-et-actions.md) rather than leaving the conflict solely in the chat.

### Evidence is `unavailable`

Consider that the justification is not stabilized. Check the source in **Knowledge**, the import, or the run detail in **AI Log**.

## Next

- [Knowledge and Agents](./connaissance-et-agents.md)
- [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, Support, and FAQ](./maintenance-support-faq.md)
