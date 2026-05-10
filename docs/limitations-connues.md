---
title: Known limitations
slug: /limitations-connues
description: Functional limits and expectations to know before using ProPM Agent in an Azure customer context.
---

[Home](./index.md) · Known limitations

## Goal

This page clarifies known limitations to avoid incorrect expectations.

## User limitations

| Topic | Limitation | Good practice |
| --- | --- | --- |
| Chat history | May be browser-local | Use PM Documents, artifacts and AI Log for shared traceability |
| Active project | Project pages depend on selected project | Check the top bar before acting |
| All projects | Does not grant access to every tenant project | Verify actual project access |
| Agent answer | Not automatically a final deliverable | Review and use PM Documents when needed |
| AI confidence | Not an approval | Check evidence and freshness |
| `unavailable` source | Not exploitable evidence | Reopen source or reimport |

## Integration limitations

Visible connectors may not be usable until platform, project binding, policy, role and health are ready. Approved actions may still not be executed. Live mode is required for real external object creation when applicable.

## Azure administration limitations

The provider selected during deployment does not prove which provider a run used. **Refresh Marketplace plan** synchronizes information but does not buy seats or change billing.
