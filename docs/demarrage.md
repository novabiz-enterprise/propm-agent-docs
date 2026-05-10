---
title: Getting Started
slug: /demarrage
description: Sign in to ProPM Agent, understand empty states and join the right project.
---

[Home](./index.md) · Getting Started

![Projects directory](/img/screenshots/localized/en/07-projects-directory.jpg)

## Goal

This page helps a new user open ProPM Agent, sign in with Microsoft Entra ID, select the active project and recognize common empty states.

## Before you start

- You have received the ProPM Agent URL from your organization.
- You have an authorized Microsoft Entra ID account.
- You are a member of at least one project or can create one.
- You use a modern browser.

If the app is not deployed or Entra access is not finalized, an administrator must first follow [Azure and Entra administration](./admin-deploiement-marketplace-et-entra.md).

## First sign-in

1. Open the ProPM Agent URL.
2. Select **Sign in**.
3. Choose the expected work account.
4. Accept consent if your organization allows it and the screen asks for it.
5. Wait until ProPM Agent opens again.
6. Confirm that your profile appears in the top bar.
7. Select an active project if requested.

## Select or create the first project

1. Open the project switcher or **Projects**.
2. Select the project provided by your team.
3. If you can create a project, use **Create project**.
4. Verify the active project in the top bar.
5. Open [Dashboard](./tableau-de-bord.md) to confirm project data loads.

## Common empty states

| State | Meaning | Recommended action |
| --- | --- | --- |
| No project available | Your account is not yet a project member | Ask the Project Owner to add you |
| No active project | You are signed in but no context is selected | Select a project |
| Role message | Your role cannot perform the action | Ask for the right role |
| Sign-in loop | Tenant, consent or Entra setup issue | Contact the tenant administrator |
| Disabled buttons | Role, policy or integration is insufficient | Open [Access control](./controle-acces-et-roles.md) |

## Related pages

- [Interface and navigation](./interface-et-navigation.md)
- [Active project and project creation](./projet-actif-et-creation-projet.md)
- [Support, audit and diagnostics](./support-audit-et-diagnostic.md)
