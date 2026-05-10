---
title: AI Log
slug: /journal-ia
description: Use AI Log to find runs, verify the effective AI provider and prepare support information.
---

[Home](./index.md) · AI Log

![AI Log runs](/img/screenshots/localized/en/09-ai-log-runs.jpg)

## Goal

AI Log shows what happened during an execution: run, activity, effective provider, timestamp, user, project, status and support identifiers.

## Find a run

1. Open **AI Log**.
2. Select **Runs**.
3. Filter by project, status, agent, user or period when available.
4. Open the run.
5. Check status, time, effective provider and links to artifacts or PM Documents.

## Verify the effective provider

1. Open the run details.
2. Find **Effective AI Provider** or its equivalent.
3. Compare it with the expected provider.
4. Note any discrepancy.
5. If it repeats, ask an administrator to check [AI provider](./admin-fournisseur-ia.md).

## Selected vs effective provider

| Term | Meaning |
| --- | --- |
| Deployment-selected provider | Initial Marketplace choice |
| Configured provider | Current platform administration setting |
| Effective AI provider | Provider actually used by a given run |

## Support guidance

Collect Run ID, Trace ID, Artifact ID or Context snapshot ID when visible. Do not copy full sensitive payloads unless support asks for a targeted extract.
