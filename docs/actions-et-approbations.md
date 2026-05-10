---
title: Actions and approvals
slug: /actions-et-approbations
description: Propose, approve, reject and execute a governed action in ProPM Agent.
---

[Home](./index.md) · Actions and approvals

![Governed actions](/img/diagrams/en/proactivite-et-gouvernance.svg)

## Goal

This page explains the governed action workflow: propose an action, get it approved, reject it when needed and understand when it is actually executed.

## Propose an action

1. Open the signal, PM Document or page that proposes the action.
2. Select the available action, such as publishing to SharePoint or creating a Jira ticket.
3. Review content, destination and summary.
4. Add a justification if requested.
5. Submit the action.
6. Check its status.

## Approve or reject

1. Open **Actions & approvals**.
2. Filter pending actions.
3. Open the action details.
4. Review evidence, destination, impact and requester.
5. Select **Approve** or **Reject**.
6. Add a clear reason when requested.

## Approved is not executed

An **approved** action is authorized. **Executed** means the target action actually happened. External actions require a validated connector, permitted policy and live mode when applicable.

## Common blockers

| Blocker | Meaning |
| --- | --- |
| Insufficient role | Your role cannot propose or approve |
| require approval | Approval is mandatory |
| deny | The policy forbids the action |
| Not bound | The project is not connected to the integration |
| Not healthy | Connector or provider is not operational |
| Live mode off | No real external object will be created |
