---
title: AI provider
slug: /admin-fournisseur-ia
description: Configure, validate, test and activate the AI provider in ProPM Agent platform administration.
---

[Home](./index.md) · AI provider

![Annotated AI provider workflow: provider type, configuration, Save, Validate, Test, Activate and AI Log verification](/img/annotated/en/ai-provider-annotated.svg)

## Goal

This page explains how to administer the AI provider and distinguish the deployment-selected provider from the effective provider observed on a run.

## Actions

| Action | Purpose | Common failure |
| --- | --- | --- |
| Save | Stores the configuration | Missing required field |
| Validate | Checks configuration consistency | Invalid endpoint, model or authentication |
| Test | Runs a functional check | Provider unreachable or deployment missing |
| Activate | Makes the configuration active | Validation or test not completed |

## Configure the provider

1. Open **Platform Administration**.
2. Select **AI Provider Settings**.
3. Choose the provider type.
4. Enter the fields requested by the UI.
5. Select **Save**.
6. Run **Validate**.
7. Run **Test**.
8. Select **Activate** when checks pass.
9. Run a simple agent request and verify the effective provider in [AI Log](./journal-ia.md).

## Important distinction

| Situation | Meaning |
| --- | --- |
| Marketplace deployment | Initial provider family choice |
| AI Provider Settings | Current saved and activated configuration |
| AI Log | Evidence of the provider actually used by a run |

Secrets must stay in secured administration tools and must not be copied into user documentation or support tickets.
