---
title: Interface and navigation
slug: /interface-et-navigation
description: Understand the ProPM Agent shell, project switching, notifications, health, language and theme.
---

[Home](./index.md) · Interface and navigation

![Top bar and global navigation](/img/screenshots/localized/en/01-navigation-topbar.jpg)

## Goal

This page explains how to navigate ProPM Agent: main navigation, active project, notification center, health indicator, command palette, language, theme and help.

## Who this page is for

| Profile | Use this page to |
| --- | --- |
| Business user | Find the right page and understand empty states |
| Project Manager | Switch project before acting and follow notifications |
| Project Owner | Quickly diagnose role, project, health or integration issues |
| Support | Collect first-level clues without technical administration details |

## Main surfaces

| Need | Open |
| --- | --- |
| Read project status | [Dashboard](./tableau-de-bord.md) |
| Select or create a project | [Active project](./projet-actif-et-creation-projet.md) |
| Add or search documents | [Knowledge](./connaissance-documents-et-imports.md) |
| Run AI | [Agents](./agents.md) |
| Review deliverables | [PM Documents](./documents-pm-et-artefacts.md) |
| Audit a run | [AI Log](./journal-ia.md) |
| Handle a signal | [Signals and notifications](./signaux-et-notifications.md) |
| Approve an action | [Actions and approvals](./actions-et-approbations.md) |

## Switch active project

1. Open the project switcher in the top bar.
2. Search for the project if the list is long.
3. Select the project.
4. Confirm that its name appears in the top bar.
5. Open **Dashboard** to verify the context.
6. Continue in **Knowledge**, **Agents**, **PM Documents**, **Signals** or **AI Log**.

## Notification center

1. Open the bell icon.
2. Read unread notifications.
3. Select a notification to open the linked page when available.
4. Use **Mark all read** to clear the counter.
5. Use **Clear** only when the local list is no longer needed.
6. If the linked page is empty, check active project and permissions.

## Health indicator

| State | Meaning | Action |
| --- | --- | --- |
| API healthy | Services respond | Continue normally |
| API degraded | Some pages may load slowly or stay empty | Wait, note the time and retry |
| Realtime degraded | Notifications may lag | Refresh if needed |
| Auth issue | Session or tenant needs attention | Return to [Getting started](./demarrage.md) |
| High latency | Actions may be slow | Avoid duplicate clicks |
| Blocking message | Live API may be unavailable | Open [Support diagnostics](./support-audit-et-diagnostic.md) |

## Language, theme and help

Language changes labels, not project data. Theme is local comfort. Some preferences such as recent project, language, theme and notification read state can stay local to the browser.

## Related pages

- [Dashboard](./tableau-de-bord.md)
- [Active project and project creation](./projet-actif-et-creation-projet.md)
- [Support, audit and diagnostics](./support-audit-et-diagnostic.md)
