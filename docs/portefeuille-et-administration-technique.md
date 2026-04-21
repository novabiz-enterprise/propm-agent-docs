---
title: Portfolio and Technical Administration
slug: /portefeuille-et-administration-technique
description: Understand the Portfolio page step by step, read cohorts and outliers, then administer the platform, integrations, and AI providers.
---

[Home](./index.md) · [Reports, AI Log and Traceability](./rapports-journal-ia-et-tracabilite.md) · [Maintenance, Support and FAQ](./maintenance-support-faq.md)

![Portfolio command center](/img/screenshots/localized/en/02-portfolio-command-center.png)

## Objective

This page covers two distinct areas of the product:

1. the **Portfolio** or **Portfolio command center** page, used to compare multiple projects;
2. **Platform Administration**, used to prepare integrations, AI providers, subscriptions and audit.

For a beginner user, it is useful to remember:

- the **Portfolio** page helps answer the question **“Which projects deserve my priority attention?”**;
- **Platform Administration** helps answer the question **“Is the platform properly prepared for the organization?”**.

## Who this page is mainly for

In the observed application, **Portfolio** is primarily a cross-project PMO-style review surface. It helps compare several projects with the same signal model before opening a detailed project view.

Use it mainly to:

- prioritize which project needs attention first;
- compare consistent signals across several projects;
- decide which project deserves a deeper drill-down next.

Do not treat it as a sponsor-only summary page or as a replacement for the detailed **Workspace** of one project.

---

---

## Part 1 — Understanding the Portfolio page step by step

## What is the Portfolio page for?

The **Portfolio** page is used to compare several projects with **configurable signals** instead of a simple fixed red / orange / green table.

It allows, in particular:

- selecting multiple projects;
- choosing the signals to compare;
- setting a **weight** and a **threshold** for each signal;
- filtering the **minimum severity**;
- saving a reusable **cohort**;
- spotting **outliers** or **anomalous values**;
- then opening a project’s details to understand why it stands out.

## What the user sees when arriving on the page

When arriving on the Portfolio page, the user typically sees five areas.

| Area | What you do there |
| --- | --- |
| **Project selection** | choose which projects enter the comparison |
| **Signal profile** | choose signals, their weights, thresholds and minimum severity |
| **Cohorts** | save or reload a reusable comparison configuration |
| **Comparison results** | read the summary, outliers and differences between projects |
| **Project drill‑down** | open proofs, recent activity and signal details for a project |

## Key terms to understand before starting

| Term | Simple explanation |
| --- | --- |
| **Project** | a project included in the comparison |
| **Signal** | a comparative indicator, e.g., blockages, freshness or schedule pressure |
| **Weight** | the importance given to a signal in the overall score |
| **Threshold** | the level at which a signal starts to stand out as notable |
| **Minimum severity** | a filter that hides weak signals |
| **Cohort** | a group of projects saved with its comparison profile |
| **Outlier / anomalous value** | a project that stands out more than others according to the active configuration |
| **Narrative comparison** | a textual summary of the ongoing comparison |
| **Project drill‑down** | project‑by‑project detail with proofs and activity |

## Guided example — comparing three projects for a weekly review

Suppose a PMO wants to compare three projects:

- Project A;
- Project B;
- Project C.

The goal is to quickly spot the one that needs priority attention before the weekly committee.

### Step 1 — Choose the projects

In the **Projects** area, check the projects you want to compare.

### Good habit

Prefer to compare projects that belong to the same **management conversation**. For example:

- three projects from the same portfolio;
- three projects from the same committee;
- or three projects from the same direction.

### Step 2 — Choose useful signals

In the **Signal profile**, enable the signals that truly matter for your review.

Example for a weekly review:

- **blocker_density**;
- **freshness_issues**;
- **failed_runs**;
- **schedule_pressure**.

### Step 3 — Set the weights

The **weight** indicates the importance given to a signal.

- if you give a high weight to **blocker_density**, projects with many blockages will stand out more;
- if you give a low weight to **activity_change**, that signal will influence the final ranking less.

### Step 4 — Set the thresholds

The **threshold** indicates from when a signal should really attract attention.

- a low threshold makes the comparison more sensitive;
- a high threshold makes the comparison more selective.

### Step 5 — Choose the minimum severity

The **minimum severity** filters what you want to see in the results.

Example:

- **low and above** = you see almost everything;
- **medium and above** = you already filter out weak signals;
- **high and above** = you focus only on more serious topics.

### Step 6 — Set the overall outlier threshold

The **Overall outlier threshold** determines from what combined level a project must be flagged as an **anomalous value**.

- lower threshold = more projects stand out;
- higher threshold = only the most marked cases stand out.

## Observed starting settings

The page does not start from a blank sheet. The observed default settings are:

| Signal | Default weight | Default threshold |
| --- | --- | --- |
| `activity_change` | `1.0` | `45` |
| `blocker_density` | `1.2` | `35` |
| `freshness_issues` | `1.0` | `35` |
| `contradiction_count` | `1.1` | `35` |
| `failed_runs` | `1.3` | `40` |
| `schedule_pressure` | `1.2` | `40` |
| `cost_pressure` | `1.2` | `40` |
| `overall_outlier_score` | — | `55` |

Useful additions:

- **minimum severity** starts with the all-level view rather than a restrictive filter;
- **Reset defaults** restores these starting values;
- these defaults are a safe starting point, not a required model;
- there is no hidden product preset beyond these defaults and your saved **cohorts**;
- some demo environments may also show a seeded cohort, but that content varies by environment.

### Step 7 — Save a cohort if needed

If you often perform the same comparison, save it as a **cohort**.

A cohort remembers:

- the chosen projects;
- the activated signals;
- the weights;
- the thresholds;
- the minimum severity.

![Portfolio cohort editor](/img/screenshots/localized/en/02-portfolio-cohort-editor.png)

### Step 8 — Run or refresh the comparison

Click **Refresh comparison** to recalculate the view with the active parameters.

### Step 9 — Read the narrative summary

The **Narrative comparison** area gives a synthesis text.

It generally answers the question:

**“What stands out most right now in this group of projects?”**

### Step 10 — Read the outliers

The **Outliers** area lists projects that exceed the active weight and threshold profile.

An outlier is not necessarily a “project in trouble.” It simply means:

- it stands out more than others;
- it deserves a closer look;
- you need to understand **why** it stands out.

### Step 11 — Open the project detail

In **Project drill‑down**, you can view:

- the project’s signals;
- proofs;
- recent activity;
- links to the **Workspace**, **Knowledge**, **Reports** or **AI Log**.

This step turns a portfolio alert into concrete understanding.

## Understanding the signals visible in Portfolio

The signals observed in the product include, among others:

- `activity_change`
- `blocker_density`
- `freshness_issues`
- `contradiction_count`
- `failed_runs`
- `schedule_pressure`
- `cost_pressure`

### Simple definition of each signal

| Signal | Question it answers | How to interpret it |
| --- | --- | --- |
| `activity_change` | Is recent activity very different from the previous period? | high = unusual variation to explain |
| `blocker_density` | Does the project show many blockages or escalations? | high = frequent or concentrated blockages |
| `freshness_issues` | Are proofs and sources too old or unavailable? | high = the project view becomes less reliable |
| `contradiction_count` | Do sources contradict each other? | high = arbitration or clarification needed |
| `failed_runs` | Do automations or runs fail often? | high = technical or operational friction |
| `schedule_pressure` | Does the schedule show signs of tension? | high = schedule pressure or calendar drift |
| `cost_pressure` | Does the budget or consumption show tension? | high = budget / cost risk |

## How to read weights, thresholds and severity with a simple example

Let’s take a very concrete example.

### Case 1 — You mainly want to see blocked projects

- increase the **weight** of `blocker_density`;
- keep a **medium threshold**;
- set the **minimum severity** to `medium`.

Expected result: projects with recurring blockages stand out more.

### Case 2 — You mainly want to control proof quality

- increase the weight of `freshness_issues` and `contradiction_count`;
- keep a more sensitive threshold;
- then read the unavailable or contradictory proofs.

Expected result: projects whose reliability becomes low rise faster.

### Case 3 — You want a very selective committee

- keep few signals;
- raise the thresholds;
- increase the minimum severity;
- raise the overall outlier threshold.

Expected result: only the most marked cases remain visible.

## How to correctly read an outlier

An **outlier** is not a magic score or a definitive judgment.

In observed flows, a project is an outlier when:

- one or more signals are high;
- those signals carry significant weight;
- the active thresholds are exceeded;
- the combined score exceeds the overall outlier threshold.

### Correct reading

- **outlier** = “this project stands out more than others according to current rules”;
- **not outlier** = “this project stays within the normal band of the current group”.

## Why a signal can be unavailable

A signal can be **unavailable** when the required proof is missing.

Example:

- if the project lacks proper planning sources, `schedule_pressure` may remain unavailable;
- if budget sources are missing, `cost_pressure` may remain unavailable.

### Very important point

An **unavailable** signal does **not** mean **zero risk**.

It means:

**“The portfolio does not have enough reliable proof to calculate this indicator.”**

## What a cohort contains

A cohort is a **saved comparison profile**.

It remembers:

- the cohort name;
- its description;
- the chosen projects;
- the activated signals;
- the weights;
- the thresholds;
- the minimum severity.

### Why use a cohort

Use a cohort when you want to repeat the same comparison regularly, e.g.,

- weekly delivery review;
- monthly portfolio tracking;
- risk committee;
- restricted executive review.

## When Portfolio looks empty, quiet, or without outliers

Several readings can be normal:

- no accessible project has been loaded;
- no project or no signal is currently selected;
- the comparison returned no usable project summaries;
- some signals are explicitly unavailable because evidence is missing;
- no project exceeds the active overall outlier threshold.

In the project drill-down you may also see, separately:

- no recent activity;
- no visible evidence;
- no remaining signals after the active severity filter.

A quiet result can therefore mean restrictive selection, limited evidence, or genuinely stable projects.

## How to read the Project drill‑down area

The **Project drill‑down** area explains the result.

It can display:

- the project’s **weighted score**;
- the list of visible signals;
- **proofs** or documentary excerpts;
- **recent activity**;
- links to **Workspace**, **Knowledge**, **Agents**, **Reports & artifacts** and **AI Log**.

### Practical reading

- if a project stands out, start with the **narrative summary**;
- then open the **relevant signal**;
- reread the **proofs**;
- finally check the **recent activity** to see if the situation is still active.

## How the comparison is calculated in the observed application

The portfolio view is not just a static local browser calculation.

Observed behavior:

1. the page loads accessible projects;
2. it preselects an initial usable set when no project has been chosen yet;
3. once the project and signal configuration is valid, the comparison is requested from a service;
4. **Refresh comparison** triggers an asynchronous recalculation and updates the visible **snapshot**;
5. the snapshot timestamp in the narrative summary tells you when that portfolio view was recalculated.

Saved **cohorts** persist a reusable comparison profile, but they do not replace the live comparison request itself.

## Good use of the Portfolio page

Use the Portfolio page to:

- compare;
- prioritize;
- spot gaps;
- decide which project to examine in detail.

Do not use the Portfolio page as a complete replacement for the project’s **Workspace**.

---

## Part 2 — Platform Administration

## What is this part for?

**Platform Administration** prepares the platform at the organizational scale.

Here you configure, in particular:

- the **platform integrations**;
- the **AI providers**;
- the **subscription** and **seats**;
- the **activity audit**.

![Platform administration](/img/screenshots/localized/en/18-platform-administration-overview.png)

## Visible sections

| Section | Role |
| --- | --- |
| Overview | summary of the overall preparation state |
| Platform integrations | technical definitions of connectors and ingestion providers |
| AI provider settings | configuration, validation, test and activation of the AI provider |
| Marketplace & subscription | plan, entitlements, seats and commercial status |
| Audit / activity | history of administrative actions |

## Platform integrations vs project integrations

An important rule emerges from the product:

- the **platform level** decides what exists technically;
- the **project level** decides what is actually used in a given project.

### Simple reading

- **platform** = we prepare the tool;
- **project** = we allow the project to use it;
- **governance** = we decide who can actually act with the tool.

For full detail by connector family, see [Connectors and integrations](./connecteurs-jira-et-sharepoint).

## Preparation and blocking causes

An integration can be blocked due to:

- **entitlement**;
- **policy**;
- **permission**;
- **health** to check;
- missing platform definition;
- project binding not opened.

### Recommended verification circuit

1. reread the project‑side block;
2. open **Platform Administration**;
3. verify the technical definition of the connector or provider;
4. return to the project to confirm the binding and authorized use.

## AI provider settings

The provider families visible in the product include, among others:

- **OpenRouter**;
- **OpenAI-compatible**;
- **OpenAI**;
- **Azure OpenAI**;

### When to choose each provider

| Provider | When to choose | What usually needs to be completed |
| --- | --- | --- |
| **OpenRouter** | when you need to compare multiple model families via a single connection | Base URL, key, default model |
| **OpenAI-compatible** | when the client uses a gateway or a compatible endpoint | exact endpoint, auth, key or secret, expected model |
| **OpenAI** | when the client uses OpenAI directly | URL, key or secret, default model |
| **Azure OpenAI** | when the client is centered on Azure and wants to choose its Azure OpenAI deployments | endpoint, API version, auth mode, LLM deployment name |

### How to read an AI provider’s status

| Status | What it means |
| --- | --- |
| **Configuration** | fields are saved |
| **Validation** | the configuration passed expected checks |
| **Test** | real connectivity has been verified |
| **Operational** | the provider can be considered usable |

### Very simple step‑by‑step to prepare an AI provider

1. open **AI provider settings**;
2. select the desired provider;
3. fill in the requested fields;
4. click **Save**;
5. click **Validate**;
6. click **Test**;
7. click **Activate**;
8. then check the result in **AI Log**.

### Special case Azure OpenAI

With **Azure OpenAI**, you often need to complete in the administration:

- the **Endpoint**;
- the **API version**;
- the **authentication mode**;
- the **LLM deployment name**;
- optionally the **Embeddings deployment name**.

For details on choosing an AI provider during Marketplace deployment, see [Azure Marketplace deployment](./deploiement-azure-marketplace.md).

## Subscription, entitlement and seats

The product manages a license model with seats and capacities.

### What an administrator can see

- the active **plan**;
- the number of **purchased seats**;
- the number of **available seats**;
- users already licensed;
- commercial status, e.g., `billing state`, `payment state` or `subscription status`.

### Why it matters

A blocked user does not necessarily have a connection issue. The block can come from:

- a lack of seats;
- a missing entitlement;
- a feature not included in the plan.

## Platform technical landmarks

The observed Azure infrastructure relies on, among others:

- Azure Container Apps;
- Storage;
- Azure AI Search;
- Key Vault;
- Log Analytics;
- Application Insights;
- Document Intelligence.

## Takeaways

### For the Portfolio page

- start by choosing the right projects;
- enable only the signals useful for your review;
- set weights, thresholds and severity intentionally;
- use **outliers** as a starting point for investigation, not as a final verdict;
- then open the **Project drill‑down** to understand the result.

### For technical administration

- the platform level prepares connectors and providers;
- the project level opens their real use;
- governance decides who can act;
- an AI provider is ready only when it is **registered, validated, tested and activated**;
- the **AI Log** remains the reference to confirm the provider actually used.

## Next

- [Connectors and integrations](./connecteurs-jira-et-sharepoint)
- [Azure Marketplace deployment](./deploiement-azure-marketplace.md)
- [Reports, AI Log and traceability](./rapports-journal-ia-et-tracabilite.md)
- [Maintenance, support and FAQ](./maintenance-support-faq.md)
- [Glossary](./glossaire.md)
