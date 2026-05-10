---
title: Security and compliance
slug: /securite-et-conformite
description: Understand security, privacy, traceability and responsible AI principles in ProPM Agent.
---

[Home](./index.md) · Security and compliance

## Goal

This page explains security and compliance principles for users, Project Owners, tenant administrators and support.

## Identity and access

- Sign-in relies on Microsoft Entra ID in Azure environments.
- Project access depends on membership and assigned role.
- A signed-in user may see no project if no project access has been granted.
- Project roles control reading, agents, PM Documents, members, governance, actions and audit.

## Tenant and project isolation

The tenant defines the organization perimeter. The active project limits visible documents, runs, signals, actions and PM Documents. **All projects** does not bypass permissions.

## Data and privacy

Do not upload documents that are not authorized for the project. Mask sensitive data in support screenshots. Never copy secrets, keys, tokens or passwords into notes, prompts, actions or tickets.

## Traceability

| Item | Where | Use |
| --- | --- | --- |
| Run | [AI Log](./journal-ia.md) | Find an AI execution |
| Effective AI provider | [AI Log](./journal-ia.md) | Confirm actual provider used |
| PM Document | [PM Documents](./documents-pm-et-artefacts.md) | Review version, diff and lineage |
| Governed action | [Actions and approvals](./actions-et-approbations.md) | Check proposal, approval and execution |
| Trace ID | [Support diagnostics](./support-audit-et-diagnostic.md) | Correlate an incident |

## Responsible AI

Review AI outputs before decisions or publication. Check evidence, freshness, contradictions and missing information. Confidence is not automatic approval.
