---
title: Structured outputs, evidence and freshness
slug: /sorties-contextuelles-preuves-et-fraicheur
description: Read a structured output, verify evidence, freshness, confidence and decide whether to create a PM Document or audit the run.
---

[Home](./index.md) · Structured outputs, evidence and freshness

![Structured output example](/img/screenshots/localized/en/03-workspace-structured-output.jpg)

![Annotated structured-output review flow: summary, decisions, evidence, freshness, confidence, missing information and downstream actions](/img/annotated/en/structured-output-annotated.svg)

## Goal

This page explains how to review an agent structured output before using it in a decision, PM Document, publication or governed action.

## Read a structured output

1. Read the **Summary**.
2. Read **Findings** and **Decisions**.
3. Open **Evidence** and citations.
4. Check **Source freshness**.
5. Read **Confidence** and **Missing information**.
6. Decide whether the output stays exploratory, becomes a PM Document or needs escalation.

## Decision table

| Situation | Risk | Recommended decision |
| --- | --- | --- |
| No evidence | Result cannot be justified | Do not publish; add context or source |
| `stale` source | Source is too old | Refresh, reimport or confirm manually |
| `conflicting` source | Sources disagree | Human arbitration required |
| `unavailable` source | Evidence could not be retrieved | Treat as an alert, not a proof |
| Low confidence | Result is uncertain | Keep exploratory or request review |
| External action proposed | Impact outside ProPM Agent | Use [Actions and approvals](./actions-et-approbations.md) |
| Shareable deliverable | Versioning and governance needed | Open [PM Documents and artifacts](./documents-pm-et-artefacts.md) |

## Human review

AI outputs require human review before publication, sponsor decision, external communication, customer notification, ticket creation or governed action. Confidence is not approval.

## Downstream flow

The recommended flow is **run → structured output → artifact → version → PM Document → Download / Publish / Add to knowledge**.

## Support and audit IDs

Fields such as `Trace ID`, `Structured output ID` and `Context snapshot ID` are useful for support and audit. They do not replace business evidence review. Use [AI Log](./journal-ia.md) and [Support diagnostics](./support-audit-et-diagnostic.md) for investigations.
