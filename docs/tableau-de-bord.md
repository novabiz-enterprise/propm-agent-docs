---
title: Dashboard
slug: /tableau-de-bord
description: Read the ProPM Agent dashboard, understand project metrics and choose the next action.
---

[Home](./index.md) · Dashboard

![Dashboard overview](/img/screenshots/localized/en/01-dashboard.jpg)

![Annotated dashboard: active project, metrics, activity, shortcuts and health](/img/annotated/en/dashboard-annotated.svg)

## Goal

The dashboard summarizes the active project: recent activity, knowledge, agents, PM Documents, signals, actions and shortcuts.

## Before you start

- You are signed in to ProPM Agent.
- An active project is selected, unless you are intentionally reading the empty state.
- Your role gives access to the project.

## Read the dashboard

1. Open **Dashboard**.
2. Verify the active project in the top bar.
3. Read the summary cards for agents, documents, runs, PM Documents, signals and actions.
4. Review recent activity.
5. Use shortcuts to **Workspace**, **Knowledge**, **Agents**, **PM Docs** or **AI Log**.

## Empty states

| State | Meaning | Recommended action |
| --- | --- | --- |
| No active project | Project pages have no context | Select a project or open [Active project](./projet-actif-et-creation-projet.md) |
| No project available | Your account has no project access | Ask a Project Owner to add you |
| Access denied | You are signed in but not authorized | Ask for the right role |

## Common issues

| Symptom | Likely cause | Recommended action |
| --- | --- | --- |
| Dashboard is empty | No active project or insufficient role | Select a project and verify your role |
| Numbers look stale | Data is still processing | Open the related page and refresh later |
| Card is visible but disabled | Missing permission | Ask the Project Owner |
| Global error | API health or provider issue | Open [Support, audit and diagnostics](./support-audit-et-diagnostic.md) |
