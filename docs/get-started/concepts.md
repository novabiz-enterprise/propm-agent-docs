---
title: Concepts
---

This page explains the core concepts used throughout ProPM Agent.

## Tenant

Your organization’s **tenant** is your Microsoft Entra ID directory. ProPM Agent uses Entra ID for sign-in.

## Project

A **project** is the main workspace boundary in ProPM Agent.

Most actions (Knowledge, contextual runs, artifacts, signals, approvals, and AI Log) happen in the context of a selected project.

## Execution context

Before an agent responds, ProPM Agent assembles an **execution context**. This can include:

- project profile and active artifact destinations
- your role and permissions
- recent activity and prior runs
- evidence from project Knowledge
- freshness and contradiction signals
- connector availability and policy boundaries

This improves response quality without forcing a fixed methodology.

## Knowledge

**Knowledge** is your project’s document library:

- You can upload files into a project.
- Uploaded files become searchable.
- Search results include **sources** (citations) to support verification.
- Azure AI Search remains the product’s only retrieval engine for project knowledge.

## Agents

An **agent** is a specialized assistant you can chat with in the context of a project.

Examples include a “Virtual Project Manager” and specialist roles (e.g., governance, risk, schedule).

## Runs

An agent interaction produces a **run** with a status (queued/running/completed/failed). Runs can be reviewed in the **AI Log**.

Each target-state run can also carry:

- a context snapshot reference
- a structured output reference
- evidence and freshness metadata
- related artifact, notification, or action lineage

## Structured output

A **structured output** is the normalized response card returned by a run. It separates:

- summary
- findings
- decisions needed
- recommended actions
- assumptions
- missing information
- watchpoints
- evidence
- freshness
- confidence

This helps users evaluate trust and next steps without relying on hidden reasoning.

## Evidence and freshness

**Evidence** is the supporting source material behind a claim. **Freshness** indicates how current that supporting material is.

Freshness states may include:

- `fresh`
- `aging`
- `stale`
- `unavailable`
- `conflicting`

When sources disagree, the contradiction is surfaced explicitly instead of being silently merged.

## PM Docs

**PM Docs** are project artifacts stored in the application. When available, you can:

- Open and edit content
- Mark a document as draft or final
- Download a DOCX export
- Optionally add an artifact into Knowledge

PM Docs are also part of the broader artifact lifecycle: draft, diff, approval, publication, and lineage.

## Proactive signals

A **proactive signal** is an explainable alert generated from project context. Examples include:

- freshness degraded
- source contradiction detected
- overdue follow-up
- reporting gap
- connector sync issue

Signals can be reviewed, snoozed, dismissed, or turned into digest and notification drafts.

## Portfolio cohort

A **portfolio cohort** is a saved group of projects used for comparison. Instead of a fixed dashboard, you choose:

- which projects to compare
- which signals matter
- weights and thresholds
- a minimum severity filter

## Connectors and MCP-backed context

**Connectors** expose governed access to external systems such as planning, delivery, collaboration, or content platforms.

- Connector data enriches context and audit trails.
- Connector data does **not** replace project Knowledge retrieval.
- External actions remain approval-gated.

## Approvals

An **approval** is the explicit human review step before a sensitive artifact publication or connector-backed action proceeds.

Approvals are logged so reviewers can see what was proposed, who approved or rejected it, and what evidence supported the request.

## Roles

ProPM Agent uses roles to apply the principle of least privilege.

At a minimum, you will see these roles in the product:

- **Project Owner** — full project control (members/roles, agent configuration, categories)
- **Project Manager** — runs agents and manages day-to-day project work
- **Contributor** — contributes content and runs agents
- **Viewer** — read-only access
- **Auditor** — read-only access with audit-focused visibility

Some admin pages also require a **Tenant Admin** role.

## Trace ID

Some screens display a **trace ID**. If you contact support, including the trace ID can help an administrator locate the relevant activity in operational logs.

