---
title: Known limitations
---

This page lists known limitations that may affect end users.

## Governed external actions

Connector-backed external actions are intentionally conservative in the current release posture.

- Action proposals are reviewable and auditable.
- Actual live external execution may remain restricted until the deployment enables the required governed connector path.
- Non-`in_app` notification channels may remain in draft posture.

## Approval workflow depth

Approval flows are designed for explicit human review, but multi-stage or quorum-style approval models may not be available in every deployment.

## Connector freshness and availability

If a connector is stale, unavailable, or not configured, related context may appear with an explicit freshness warning instead of a complete operational picture.

## Portfolio comparison scope

Portfolio comparison only evaluates the projects visible to the current user and selected in the current comparison. It is not a global unrestricted dashboard.

## Portfolio snapshot availability

The Portfolio Command Center may show a basic projects directory if an enhanced snapshot is not enabled.

## Seat assignment UI

The Marketplace page shows subscription and seat counts. Seat assignment may not be exposed in the UI in all deployments.

## Knowledge document preview

Knowledge focuses on upload, status, and search. In-browser document preview may not be available.

## Voice input

Voice input depends on browser support.

## Chat history

Chat sessions are stored in the browser and may not automatically sync across devices.

## Demo reset behavior

In local demo-mode environments, some seeded state may be stored in the browser. Re-importing the demo project and refreshing the browser usually restores the intended walkthrough state.

