---
title: Documentation review checklist
slug: /checklist-revue-documentaire
description: Checklist for reviewing ProPM Agent documentation before customer publication or product release.
---

[Home](./index.md) · Documentation review checklist

## Goal

Use this checklist before customer publication, major update or UI change.

## Checks

| Area | Check |
| --- | --- |
| Navigation | User, Project Owner, Azure admin, security and support paths are separated |
| Roles | Action pages state audience and prerequisites |
| Product accuracy | UI labels and agent names match the current product |
| Security | No secrets, tokens, raw payloads or infrastructure variables are exposed in end-user pages |
| Procedures | Steps include expected result and common blockers |
| Visuals | Screenshots match the current UI and include useful alt text |
| Links | Internal links point to specialized current pages |
| Build | `npm run build` succeeds |

## Release process

1. Run `npm run build`.
2. Fix broken links, missing images or sidebar IDs.
3. Verify search does not index duplicate divergent French sources.
4. Review home page, one user page, one admin page and one support page.
5. Update [Release notes](./release-notes.md) when structure or workflows change.
