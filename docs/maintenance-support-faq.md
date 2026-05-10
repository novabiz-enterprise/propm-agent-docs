---
title: Maintenance, support and FAQ
slug: /maintenance-support-faq
description: Short answers to common incidents and links to support, audit or administration pages.
---

[Home](./index.md) · Maintenance, support and FAQ

![AI Log investigation markers](/img/screenshots/localized/en/09-ai-log-runs.jpg)

## Goal

This FAQ helps recognize common symptoms and open the right page without exposing internal or sensitive details.

## NovaBiz Contact

For NovaBiz support:

- Email: [support@navabiz.pro](mailto:support@navabiz.pro)
- Address: NovaBiz, 131 Continental Dr, Suite 305, Newark, DE 19713, United States

## Symptom to first action

| Symptom | First action | Useful page |
| --- | --- | --- |
| Sign-in fails | Check account, tenant, consent and URL | [Getting started](./demarrage.md) |
| No project visible | Check project membership and role | [Active project](./projet-actif-et-creation-projet.md) |
| Empty page | Check active project, filters and role | [Interface](./interface-et-navigation.md) |
| Document not indexed | Check `Indexed`, `Ingesting` or `Failed` | [Knowledge](./connaissance-documents-et-imports.md) |
| Agent has no answer | Check whether a run exists in AI Log | [AI Log](./journal-ia.md) |
| Incomplete answer | Check evidence, freshness and missing information | [Structured outputs](./sorties-contextuelles-preuves-et-fraicheur.md) |
| AI provider not operational | Check effective provider and admin settings | [AI provider](./admin-fournisseur-ia.md) |
| Connector blocked | Check platform, project, policy and health | [Connectors](./connecteurs-jira-et-sharepoint.md) |
| Action pending | Check approval, policy and execution | [Actions and approvals](./actions-et-approbations.md) |
| License unavailable | Check remaining seats and licensed users | [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md) |

## Frequent answers

A successful Microsoft sign-in with no project usually means the account is not yet a project member. A visible page with disabled buttons usually means read-only access. Agent answers without evidence must be treated as exploratory before publication or external decision.

## PM Documents and actions

**Download** creates a local copy. **Publish** sends to a governed destination. **Add to knowledge** adds a reviewed document back to project knowledge. **Approved** means authorized; **executed** means the action actually ran.

## Advanced support and audit

For support, provide URL, active project, time, attempted action, visible message, Run ID, Trace ID or Action ID when visible. Never share secrets, keys, tokens or sensitive payloads. Open [Support, audit and diagnostics](./support-audit-et-diagnostic.md) for details.
