---
title: Support, audit and diagnostics
slug: /support-audit-et-diagnostic
description: Collect useful ProPM Agent support information without exposing secrets or unnecessary internal details.
---

[Home](./index.md) · Support, audit and diagnostics

## Goal

This page centralizes the information to collect for access, project, knowledge, agents, AI provider, connectors, actions, licenses or update issues.

## NovaBiz Contact

For NovaBiz support:

- Email: [support@navabiz.pro](mailto:support@navabiz.pro)
- Address: NovaBiz, 131 Continental Dr, Suite 305, Newark, DE 19713, United States

## What to provide

| Information | Useful example |
| --- | --- |
| Page URL | Page visible when the issue occurred |
| Active project | Project name |
| User | Account or group, never password |
| Time | Date, time and timezone |
| Action attempted | Upload, run agent, publish, approve |
| Visible message | Exact text or masked screenshot |
| Visible IDs | Run ID, Trace ID, Artifact ID, Action ID when present |

## Never provide

- Passwords, secrets, API keys or tokens.
- Complete payloads with sensitive customer data.
- Unmasked screenshots containing confidential documents.
- Detailed infrastructure configuration unless support explicitly asks.

## Quick diagnosis

| Symptom | First check | Useful page |
| --- | --- | --- |
| Sign-in fails | Tenant, Entra account, consent, license | [Getting started](./demarrage.md) |
| No project visible | Active project, membership, role | [Active project](./projet-actif-et-creation-projet.md) |
| Document not indexed | Knowledge status, format, import history | [Knowledge](./connaissance-documents-et-imports.md) |
| Agent has no answer | Run in AI Log, effective provider | [AI Log](./journal-ia.md) |
| Action pending | Approval, policy, connector, live mode | [Actions and approvals](./actions-et-approbations.md) |
| License denied | Remaining seats, licensed user | [Licenses and updates](./admin-licences-plans-et-mises-a-jour.md) |

## Support IDs

| ID | Where to find it | Use |
| --- | --- | --- |
| Run ID | AI Log | Identify an agent execution |
| Trace ID | Error or support detail | Correlate a technical error |
| Artifact ID | PM Document or artifact | Identify a deliverable |
| Action ID | Actions & approvals | Identify a governed action |
| Context snapshot ID | Run detail when shown | Understand the execution context |
