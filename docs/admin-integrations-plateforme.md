---
title: Platform integrations
slug: /admin-integrations-plateforme
description: Define, validate, disable and bind ProPM Agent connectors and ingestion providers.
---

[Home](./index.md) · Platform integrations

## Goal

This page explains the difference between platform integration, project binding, governance policy and real usage by users.

## Four levels to check

| Level | Question |
| --- | --- |
| Platform | Is the connector or ingestion provider defined and validated? |
| Project | Is it bound to the active project? |
| Governance | Does policy allow, deny or require approval? |
| Execution | Are health, live mode and user rights sufficient? |

## Define and validate an integration

1. Open **Platform Administration**.
2. Select **Platform Integrations**.
3. Choose **Execution Connectors** or **Ingestion Providers**.
4. Create or open the integration definition.
5. Fill in the fields requested by the UI.
6. Save the definition.
7. Run validation.
8. Review validation history.
9. Disable the integration if it should no longer be offered.

## Bind to a project

1. Open the project.
2. Open project integrations.
3. Select the validated platform integration.
4. Choose **Bind to project** or the equivalent label.
5. Validate the binding.
6. Check readiness, health and available actions.

## Readiness

| State | Meaning |
| --- | --- |
| Ready | Prepared for intended use |
| Healthy | Health check is positive |
| Not configured | Platform definition is incomplete |
| Not bound | Project does not use the integration yet |
| Blocked | Role, policy, health or live mode blocks usage |
