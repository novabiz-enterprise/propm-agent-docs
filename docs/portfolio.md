---
title: Portfolio
slug: /portfolio
description: Compare projects, configure portfolio signals, read cohorts and outliers, and decide which project needs attention first.
---

[Home](./index.md) · [AI providers and platform integrations](./ai-providers-platform-integrations.md) · [Tenant plan, licensed users, and app updates](./seats-management-app-updates.md)

![Portfolio command center](/img/screenshots/localized/en/02-portfolio-command-center.jpg)

## Objective

The **Portfolio** page is a cross-project PMO review surface. It compares several projects with the same signal model before you open a detailed project view.

Use it to answer: **which projects deserve priority attention right now?**

Use it mainly to:

- prioritize which project needs attention first;
- compare consistent signals across several projects;
- decide which project deserves a deeper drill-down next.

Do not treat it as a sponsor-only summary page or as a replacement for the detailed **Workspace** of one project.

## What the Portfolio page is for

The page compares several projects with **configurable signals**, not with a fixed red / orange / green table.

It allows you to:

- select multiple projects;
- choose the signals to compare;
- set a **weight** and a **threshold** for each signal;
- filter the **minimum severity**;
- save a reusable **cohort**;
- spot **outliers** or anomalous values;
- open a project detail to understand why it stands out.

## What the user sees

| Area | What you do there |
| --- | --- |
| **Project selection** | choose which projects enter the comparison |
| **Signal profile** | choose signals, weights, thresholds and minimum severity |
| **Cohorts** | save or reload a reusable comparison configuration |
| **Comparison results** | read the summary, outliers and differences between projects |
| **Project drill-down** | open proofs, recent activity and signal details for a project |

## Key terms

| Term | Simple explanation |
| --- | --- |
| **Project** | a project included in the comparison |
| **Signal** | a comparative indicator, for example blockages, freshness or schedule pressure |
| **Weight** | the importance given to a signal in the overall score |
| **Threshold** | the level at which a signal starts to stand out |
| **Minimum severity** | a filter that hides weak signals |
| **Cohort** | a group of projects saved with its comparison profile |
| **Outlier** | a project that stands out more than others according to the active configuration |
| **Narrative comparison** | a textual summary of the ongoing comparison |
| **Project drill-down** | project-by-project detail with proofs and activity |

## Guided example

A PMO wants to compare three projects before a weekly review.

1. In **Projects**, select the projects that belong to the same management conversation.
2. In **Signal profile**, enable the relevant signals, for example `blocker_density`, `freshness_issues`, `failed_runs` and `schedule_pressure`.
3. Set weights to express what matters most in this review.
4. Set thresholds to decide from when a signal deserves attention.
5. Choose the minimum severity to hide weak noise when needed.
6. Set the **Overall outlier threshold** to control how selective the comparison should be.
7. Save the setup as a **cohort** if you will reuse it.
8. Click **Refresh comparison** to recalculate the view.
9. Read the **Narrative comparison**, then inspect **Outliers**.
10. Open **Project drill-down** to review proofs, recent activity and links to Workspace, Knowledge, Reports or AI Log.

![Portfolio cohort editor](/img/screenshots/localized/en/02-portfolio-cohort-editor.jpg)

## Default signal profile

The page does not start from a blank sheet. The default settings are a safe starting point, not a mandatory model.

| Signal | Default weight | Default threshold |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | - | `55` |

Useful additions:

- **minimum severity** starts with the all-level view rather than a restrictive filter;
- **Reset defaults** restores these starting values;
- saved **cohorts** persist reusable profiles;
- some environments may also show a preconfigured cohort, with content that varies by available settings.

## Portfolio signals

| Signal | Question it answers | How to interpret it |
| --- | --- | --- |
| `activity_change` | Is recent activity very different from the previous period? | high = unusual variation to explain |
| `blocker_density` | Does the project show many blockages or escalations? | high = frequent or concentrated blockages |
| `freshness_issues` | Are proofs and sources too old or unavailable? | high = the project view becomes less reliable |
| `contradiction_count` | Do sources contradict each other? | high = arbitration or clarification needed |
| `failed_runs` | Do automations or runs fail often? | high = technical or operational friction |
| `schedule_pressure` | Does the schedule show signs of tension? | high = schedule pressure or calendar drift |
| `cost_pressure` | Does budget or consumption show tension? | high = budget or cost risk |

## How to read an outlier

An **outlier** is not a magic score or a definitive judgment.

A project is an outlier when:

- one or more signals are high;
- those signals carry significant weight;
- the active thresholds are exceeded;
- the combined score exceeds the overall outlier threshold.

Correct reading:

- **outlier** means the project stands out more than others according to current rules;
- **not outlier** means the project stays within the normal band of the current group.

## Why a signal can be unavailable

A signal can be **unavailable** when the required proof is missing.

For example:

- if the project lacks planning sources, `schedule_pressure` may remain unavailable;
- if budget sources are missing, `cost_pressure` may remain unavailable.

An unavailable signal does **not** mean zero risk. It means the portfolio does not have enough reliable proof to calculate this indicator.

## When Portfolio looks empty or quiet

Several readings can be normal:

- no accessible project has been loaded;
- no project or no signal is selected;
- the comparison returned no usable project summaries;
- some signals are unavailable because evidence is missing;
- no project exceeds the active overall outlier threshold.

A quiet result can therefore mean restrictive selection, limited evidence, or genuinely stable projects.

## How the comparison is calculated

Expected behavior:

1. the page loads accessible projects;
2. it preselects an initial usable set when no project has been chosen yet;
3. once the project and signal configuration is valid, the comparison is requested from a service;
4. **Refresh comparison** triggers an asynchronous recalculation and updates the visible **snapshot**;
5. the snapshot timestamp tells you when that portfolio view was recalculated.

Saved **cohorts** persist a reusable comparison profile, but they do not replace the live comparison request itself.

## Takeaways

- start by choosing the right projects;
- enable only the signals useful for your review;
- set weights, thresholds and severity intentionally;
- use **outliers** as a starting point for investigation, not as a final verdict;
- open **Project drill-down** to understand the result.

## Next

- [AI providers and platform integrations](./ai-providers-platform-integrations.md)
- [Tenant plan, licensed users, and app updates](./seats-management-app-updates.md)
- [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
