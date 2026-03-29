---
title: Contextual outputs, evidence, and freshness
---

## Purpose

This page explains how ProPM Agent presents **contextual outputs** so you can judge not only the answer, but also how trustworthy, current, and actionable it is.

## Why this matters

The product is designed around trust, evidence, safety, and traceability.

Instead of returning only one block of text, ProPM Agent separates:

- what the platform believes happened
- what matters next
- what evidence supports the answer
- what is still missing or stale

## How to read a contextual output

When a run returns a structured response, you may see sections such as:

- **Summary**
- **Findings**
- **Decisions needed**
- **Actions**
- **Assumptions**
- **Missing information**
- **Watchpoints**
- **Evidence**
- **Freshness**
- **Confidence**
- **Artifact proposals**
- **Follow-ups**

These sections are methodology-neutral. They help users interpret the current project state without forcing one rigid template.

## What each section means

- **Summary** — the shortest decision-ready version of the answer
- **Findings** — the facts, patterns, or judgments the run surfaced
- **Decisions needed** — items that require human approval, escalation, or direction
- **Actions** — recommended next steps, usually with an owner suggestion or due date
- **Assumptions** — conditions the answer depends on
- **Missing information** — gaps that reduce confidence or completeness
- **Watchpoints** — risks, contradictions, or things that should be monitored
- **Evidence** — the supporting source references used to justify the answer
- **Freshness** — whether supporting sources are current enough to trust
- **Confidence** — the visible reliability signal for the overall response

In practice, many users read the response in this order:

1. summary
2. actions or decisions needed
3. evidence
4. freshness and confidence

That order keeps the response fast to scan without hiding uncertainty.

## Evidence behavior

Evidence references show the sources used to support important claims. Review them before you copy the answer into a stakeholder-facing deliverable.

Depending on the source, an evidence card may include:

- title
- snippet
- source URI or document name
- page or section
- freshness state
- authority rank
- source system

Use evidence references to verify important statements before sending a draft to stakeholders, publishing a PM Doc, or approving a downstream action.

## Freshness states

Every important source should be treated according to its visible freshness state:

- **fresh** — current enough for normal use
- **aging** — still usable, but may need confirmation soon
- **stale** — no longer reliable without refresh or verification
- **unavailable** — the source could not be confirmed or retrieved
- **conflicting** — the source disagrees with another relevant source

The product intentionally exposes degraded freshness instead of hiding it. A visible warning is safer than silent false certainty.

## Contradictions and uncertainty

If two sources disagree, ProPM Agent should surface that contradiction instead of silently reconciling it.

Examples:

- a planning tool shows a milestone incomplete while a narrative report says it is complete
- an ERP-related cost snapshot disagrees with the latest delivery narrative
- a blocker remains open in a delivery system while a report says it is resolved

When this happens, review the evidence and follow-up guidance before publishing a decision-ready artifact.

## Confidence

Confidence is a visible estimate of how reliable the response is based on factors such as:

- evidence availability
- freshness quality
- contradictions
- missing information
- fallback normalization behavior

Low confidence does not always mean the response is wrong. It means you should review the evidence, check freshness, and fill the missing gaps before acting on it.

## Turning outputs into artifacts

When the response is useful, select **Create draft** to turn the output into a governed artifact.

The resulting artifact review flow can show:

- diff summary
- lineage back to the run
- version state
- approval and publication posture

This is the normal path from:

1. project question
2. structured answer
3. draft artifact
4. review diff and lineage
5. approval or publication

If Workspace already shows a linked draft, use **Review diff** instead of creating a second draft.

## Practical review checklist

Before treating a response as decision-ready, check these questions:

1. Does the summary match the detailed findings?
2. Are the highest-impact actions obvious?
3. Is the evidence specific enough to verify?
4. Are any sources stale, unavailable, or conflicting?
5. Is the confidence level appropriate for the decision you want to make?
6. Should this become a draft artifact for formal review?

## Tips

- Use evidence and freshness cues for stakeholder-facing outputs.
- Treat missing information as a follow-up list, not as hidden system detail.
- Use low-confidence or conflicting outputs to drive clarification and review, not silent publication.
- Do not treat a polished narrative alone as proof. Check the evidence and freshness sections before you act.
