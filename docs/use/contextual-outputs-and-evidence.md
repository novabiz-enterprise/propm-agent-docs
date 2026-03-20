---
title: Contextual outputs, evidence, and freshness
---

## Purpose

This page explains how ProPM Agent presents **contextual outputs** so users can understand not only the answer, but also how trustworthy and actionable it is.

## Why this matters

The target-state experience is designed around trust, evidence, safety, and traceability.

Instead of returning only free-form text, ProPM Agent separates:

- what the platform believes happened
- what matters next
- what evidence supports the answer
- what is still missing or stale

## What a contextual output includes

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

These sections are methodology-neutral. They are designed to help users interpret the current project state without forcing a fixed template or framework.

## Evidence behavior

Evidence references show the sources used to support important claims.

Depending on the source, an evidence card may include:

- title
- snippet
- source URI or document name
- page or section
- freshness state
- authority rank
- source system

Use evidence references to verify important statements before sending a draft to stakeholders or approving a downstream action.

## Freshness states

Every important source should be treated according to its visible freshness state:

- **fresh** — current enough for normal use
- **aging** — still usable, but may need confirmation soon
- **stale** — no longer reliable without refresh or verification
- **unavailable** — the source could not be confirmed or retrieved
- **conflicting** — the source disagrees with another relevant source

The product intentionally exposes degraded freshness instead of hiding it.

## Contradictions and uncertainty

If two sources disagree, ProPM Agent should surface that contradiction instead of silently reconciling it.

Examples:

- a planning tool shows a milestone incomplete while a narrative report says it is complete
- an ERP-related cost snapshot disagrees with the latest delivery narrative
- a blocker remains open in a delivery system while a report says it is resolved

When this happens, review the evidence and follow-up guidance before publishing a decision-ready artifact.

## Confidence

Confidence is a user-visible estimate of how reliable the response is based on factors such as:

- evidence availability
- freshness quality
- contradictions
- missing information
- fallback normalization behavior

Low confidence does not always mean the response is wrong. It means you should review the evidence and fill the missing gaps before acting on it.

## Turning outputs into artifacts

When the response is useful, select **Create draft** to turn the output into a governed artifact.

The resulting artifact review flow can show:

- diff summary
- lineage back to the run
- version state
- approval and publication posture

## Tips

- Use evidence and freshness cues for stakeholder-facing outputs.
- Treat missing information as a follow-up list, not as hidden system detail.
- Use low-confidence or conflicting outputs to drive clarification and review, not silent publication.
