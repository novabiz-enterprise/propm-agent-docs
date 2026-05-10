---
title: Azure and Entra administration
slug: /admin-deploiement-marketplace-et-entra
description: Deploy ProPM Agent from Azure Marketplace and finalize Entra access without exposing technical internals to end users.
---

[Home](./index.md) · Azure and Entra administration

## Goal

This page is for Azure and tenant administrators. It covers Marketplace deployment, Entra access finalization and functional checks before inviting users.

## Deploy from Azure Marketplace

1. Open the ProPM Agent offer in Azure Marketplace.
2. Select the plan and subscription.
3. Enter resource group, region and requested settings.
4. Declare the Entra groups or administrators.
5. Choose the initial AI provider family.
6. Start deployment.
7. Wait for provisioning to finish.
8. Retrieve the published application URL.

## Finalize Entra access

1. Open the ProPM Agent URL with an authorized administrator account.
2. Complete Entra consent if required by the organization.
3. Verify that administrators can open **Platform Administration**.
4. Invite the first Project Owners.
5. Ask end users to follow [Getting started](./demarrage.md).

## Post-deployment checks

| Check | Expected result |
| --- | --- |
| App URL | Sign-in and home page open |
| Entra | Authorized account signs in without a loop |
| Administration | Platform Administration is visible to admins |
| AI provider | Configuration still needs validation and test |
| Licenses | Plan and license information are visible |

## Related pages

- [AI provider](./admin-fournisseur-ia.md)
- [Platform integrations](./admin-integrations-plateforme.md)
- [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md)
