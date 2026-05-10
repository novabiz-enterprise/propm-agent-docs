---
title: सुरक्षा और अनुपालन
slug: /securite-et-conformite
description: ProPM Agent में security, privacy, traceability और responsible AI principles।
---

# Security और compliance

## Identity और access

Azure environments में sign-in Microsoft Entra ID पर आधारित होता है। Project access membership और role पर निर्भर करता है।

## Tenant और project isolation

Tenant organization boundary है। Active project documents, runs, signals, actions और PM Documents को limit करता है। `All projects` permissions bypass नहीं करता।

## Data और privacy

केवल authorized documents upload करें। Support screenshots mask करें। prompts, notes, actions या tickets में secrets, keys, tokens या passwords कभी copy न करें।

## Traceability

| Element | कहाँ |
| --- | --- |
| Run | [AI Log](./journal-ia.md) |
| Effective AI provider | [AI Log](./journal-ia.md) |
| PM Document | [PM Documents](./documents-pm-et-artefacts.md) |
| Governed action | [Actions](./actions-et-approbations.md) |
| Trace ID | [Support diagnostics](./support-audit-et-diagnostic.md) |

## Responsible AI

Decision या publication से पहले AI outputs review करें। Confidence approval नहीं है।
