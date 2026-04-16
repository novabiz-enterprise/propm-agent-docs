---
title: Interface and Navigation
slug: /interface-et-navigation
description: Understanding the main screens, sidebar, top bar, and dashboard.
---

[Home](./index.md) · [Getting Started](./demarrage.md) · [Projects and Workspace](./projets-et-espace-de-travail.md)

![ProPM Agent Dashboard](/img/screenshots/localized/en/01-dashboard.png)

## Objective

This page explains how to navigate the ProPM Agent shell, read the **Dashboard**, use the **command palette**, interpret **notifications**, and open the **health** panel when an incident is suspected.

## Overview

The observed interface follows a simple logic:

1. the **sidebar** opens the main functional domains;
2. the **top bar** changes the current project and opens quick tools;
3. the central surface displays the **current context**;
4. several screens change state based on the **active project** and your **rights**.

## Main Navigation

| Entry | Main Use |
| --- | --- |
| Dashboard | Read the overall status and suggested next steps |
| Projects | Create, open, and switch project context |
| Workspace | Project summary, signals, readiness, and project settings |
| Knowledge | Search, upload, and import reference documents |
| Agents | Interact with available agents and read structured outputs |
| Reports & Artifacts | Review, compare, publish, or download PM Docs |
| AI Log | Inspect runs, events, and traceability metadata |
| Portfolio Command Center | Compare multiple projects via configurable signals |
| Platform Administration | Manage integrations, AI provider, subscription, and platform activity |

## Dashboard

The **Dashboard** is the most useful screen right after login.

It consolidates:

- situational metrics;
- attention items;
- recommended next steps;
- shortcuts to areas where action is needed;
- an overview of open signals and items under review.

Use it as an **orientation page**: if a project is not active, some blocks remain empty; if a project is selected, the indicators become contextual.

### How to read the main areas of the dashboard

| Area | What it summarizes | Useful reflex |
| --- | --- | --- |
| Summary tiles | project counts, knowledge, active agents, open signals, draft notifications, and pending actions | immediately spot if the issue is a lack of context, a review delay, or a governed queue |
| Score cards | overall delivery status, execution pace, governance coverage, and knowledge depth | read these cards as orientation markers before opening a detail screen |
| Readiness blocks | knowledge foundation, automation coverage, governance posture, and delivery flow | identify which pillar is blocking normal project usage |
| **Attention** panel | signals, governed actions, and connector watchlist | go to the **Workspace** to handle active blockages |
| **Pulse** panel | latest digest, recent notifications, recent activity, and connector status | check what just changed without re-reading the entire project history |
| Quick links | shortcuts to **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts**, **AI Log**, and **Portfolio** | open the right surface directly instead of navigating screen by screen |

The scores and indicators on the dashboard should be read as **prioritization markers**, not as an exhaustive diagnosis on their own.

### What to do if the dashboard seems contradictory?

1. first confirm the **active project** in the top bar;
2. then treat the cards as **orientation signals**, not as the sole source of truth;
3. open the **Workspace** to check project signals, readiness, and blockages;
4. open the **AI Log** if the doubt concerns a run, an output, or the provider actually used;
5. if the dashboard loads but seems degraded, open the **health indicator** before concluding a data inconsistency.

![Top bar and global navigation](/img/screenshots/localized/en/01-navigation-topbar.png)

## Top Bar

| Element | Function |
| --- | --- |
| Project selector | Changes the current project without going back to the full list |
| Command palette | Quick search for common pages and actions |
| Notifications | Displays attention items raised by the product |
| Health indicator | Opens a quick diagnostic on API, real-time, and auth status |
| Language | Changes the interface language |
| Theme | Toggles light/dark appearance |
| Help | Opens integrated help messages |

## Command Palette

The command palette is designed for quick navigation.

- **Windows / Linux**: `Ctrl+K`
- **macOS**: `Cmd+K`

It filters available pages and entries by **name** and **description**. Use it to quickly return to **AI Log**, **Platform Administration**, or any rarely opened route.

## Notifications

The notification center is accessible from the bell icon in the top bar.

Observed capabilities:

- unread item counter;
- drop-down panel;
- **Mark all as read**;
- **Clear all**;
- click on a notification to open the linked surface when navigation is provided.

Notifications can notably surface agent statuses, report generation events, document uploads, and updates related to the Marketplace or subscription.

## Health Indicator

The health indicator opens a quick diagnostic panel. It allows you to check:

- **API** status;
- **realtime / WebSocket** status;
- **auth** status;
- observed **latency**;
- any error text;
- the current project when context matters for the diagnosis.

Open it if an agent appears **offline**, if notifications stop refreshing, or if the application seems available but partially degraded.

If the panel indicates a degraded state while the interface still loads, keep this reading order:

| If the signal mainly concerns… | Then open | Why |
| --- | --- | --- |
| **authentication** | [Getting Started](./demarrage.md) | to distinguish tenant, account, `redirect URI`, admin group, or seat |
| **runtime**, API, WebSocket, or connectivity | [Maintenance, Support and FAQ](./maintenance-support-faq.md) | to follow the remediation path between health, provider, integrations, and execution |
| **project context**, an empty screen, or a missing action | [Projects and Workspace](./projets-et-espace-de-travail.md) | to verify the active project, binding, readiness, and project rights |

Before escalating, note the displayed status for **API**, **realtime**, **auth**, **latency**, **current project**, and the approximate test time. These elements significantly shorten support diagnosis.

## Project Context and Empty States

Several ProPM Agent screens are linked to the active project. In practice:

- **without a selected project**, some pages display a normal empty state;
- **with a project selected**, the same page loads that project's data and actions;
- changing the project modifies the content of **Knowledge**, **Agents**, **Reports & Artifacts**, and **AI Log**.

This context dependency prevents mixing evidence, conversations, and deliverables from multiple projects.

## Language, Theme, and Help

The interface language can be changed from the top bar. Changing the theme improves reading comfort, without affecting project data. The integrated help catalogs cover general navigation, project pages, AI Log, and governance reminders.

## Navigation Tips

- change project **before** opening an agent or a report;
- use the **command palette** to quickly find a rarely used surface;
- return to the **Dashboard** when you lose track of the journey;
- if an action seems missing, clearly distinguish **read-only** and **access denied**;
- open the **health indicator** before concluding a backend incident.

## Next

- [Projects and Workspace](./projets-et-espace-de-travail.md)
- [Knowledge and Agents](./connaissance-et-agents.md)
- [Structured Outputs, Evidence, and Freshness](./sorties-contextuelles-preuves-et-fraicheur.md)
- [Reports, AI Log, and Traceability](./rapports-journal-ia-et-tracabilite.md)
