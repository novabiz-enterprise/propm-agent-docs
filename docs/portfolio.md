---
title: Portfolio
slug: /portfolio
description: Compare projects, manage cohorts, tune signal profiles and read portfolio outliers.
---

[Home](./index.md) · Portfolio

![Portfolio command center](/img/screenshots/localized/en/02-portfolio-command-center.jpg)

![Annotated Portfolio: project selection, signal profile, cohorts, threshold and outliers](/img/annotated/en/portfolio-annotated.svg)

## Goal

**Portfolio** helps PMOs compare several projects with the same signals and identify which projects deserve priority analysis.

## Keywords

| Term | Meaning |
| --- | --- |
| `Projects` | Projects selected for comparison |
| `Signal profile` | Signals, weights, thresholds and minimum severity |
| `Overall outlier threshold` | Global threshold for a project to stand out |
| `Refresh comparison` | Recalculates the view with current settings |
| `Reset defaults` | Restores default profile values |
| Cohort | Saved comparison configuration |
| Snapshot | Timestamped comparison result |

## Select projects

1. Open **Portfolio**.
2. Select projects in **Projects**.
3. Use **Select all** if all accessible projects are relevant.
4. Use **Clear all** to start over.
5. Verify the selected projects share the same review objective.

## Tune signal profile

1. Open **Signal profile**.
2. Enable only useful signals.
3. Set weights and thresholds.
4. Choose minimum severity.
5. Set **Overall outlier threshold**.
6. Run **Refresh comparison**.

## Manage cohorts

| Action | Steps |
| --- | --- |
| Create | Select projects, tune signals, name the cohort and save |
| Modify | Load, adjust projects or signals, save again |
| Delete | Open the cohort and use delete if available |
| Reload | Select the saved cohort and run **Refresh comparison** |

## Read an outlier

An outlier is a project that stands out under the active weights, thresholds and signals. It is not an automatic verdict. Open the project detail, read the contributing signals, then continue to [Dashboard](./tableau-de-bord.md), [Signals](./signaux-et-notifications.md), [Knowledge](./connaissance-documents-et-imports.md) or [AI Log](./journal-ia.md).

## Evidence gaps

Unavailable signals do not mean no risk. They indicate missing or insufficient evidence and should trigger verification.
