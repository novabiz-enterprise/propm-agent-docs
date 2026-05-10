---
title: Azure Marketplace Deployment
slug: /deploiement-azure-marketplace
description: Understand ProPM Agent deployment from Azure Marketplace and the administration steps after installation.
---

[Home](./index.md) · Azure Marketplace Deployment

## Goal

This page provides a short Marketplace deployment overview. The full administrator workflow is now covered in [Azure and Entra administration](./admin-deploiement-marketplace-et-entra.md).

## Simplified flow

1. Open the ProPM Agent offer in Azure Marketplace.
2. Choose subscription, plan, region and resource group.
3. Fill in the fields requested by Marketplace.
4. Select the initial AI provider family.
5. Start deployment and wait for provisioning to finish.
6. Open the published URL.
7. Finalize Entra access and first administrators.
8. Configure the AI provider in platform administration.
9. Check licenses, integrations and updates before inviting broad user groups.

## After deployment

| Topic | Page to follow |
| --- | --- |
| Entra access and published URL | [Azure and Entra administration](./admin-deploiement-marketplace-et-entra.md) |
| AI provider Save, Validate, Test, Activate | [AI provider](./admin-fournisseur-ia.md) |
| Platform integrations | [Platform integrations](./admin-integrations-plateforme.md) |
| Licenses, Marketplace plan and updates | [Licenses, plans and updates](./admin-licences-plans-et-mises-a-jour.md) |
| Client diagnostics | [Support, audit and diagnostics](./support-audit-et-diagnostic.md) |

## Notes

- The Marketplace AI provider choice is an initial intent.
- The provider actually used is verified on a run in [AI Log](./journal-ia.md).
- Infrastructure details, secrets, variables and internal endpoints do not belong in the end-user guide.
