---
title: FAQ
---

## Is ProPM Agent project-scoped?

Yes. Knowledge, agent runs, PM Docs, and AI Log are tied to a selected project.

Tenant-wide administration such as integrations, AI provider settings, and subscription controls lives outside the project in **Platform Administration**.

## Where can I see what happened in a project?

Use **AI Log** to review runs and activity events.

## Why can I open admin pages but not edit them?

You may be in a read-only admin state. Some deployments allow authenticated users to inspect non-secret metadata such as health, validation, and entitlement posture while reserving editing for the **Subscription Administrator** or explicitly delegated admin roles.

## Why did an import option disappear or become blocked?

The project may no longer have an approved ingestion binding, the provider may be unhealthy, or the current plan may not allow that source. The UI should explain whether the blocker comes from entitlement, health, permission, or configuration.

## Why is the AI provider visible but locked?

The deployment-selected and effective AI provider may be visible for transparency, but only authorized admins should be able to change the effective provider.

## Can I export data?

Some tables support **Export** (CSV). PM Docs support **Download DOCX**.

## Where is chat history stored?

Chat sessions are stored in your browser. They may not automatically sync across devices.

