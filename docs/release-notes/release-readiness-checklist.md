---
title: Release readiness checklist
---

This checklist helps administrators, release owners, and rollout teams verify that the current ProPM Agent release is automated, packageable, and verifiable against a real deployed environment.

## Release goals

Before broad rollout, confirm that:

- GitHub Actions workflows match the current architecture and release process
- Marketplace packaging is reproducible and produces uploadable ZIP artifacts
- the `dev` plan remains seatless for internal validation while non-dev plans keep seat assignment
- deployed-environment validation can resume from a manual-login handoff and capture screenshot evidence
- Platform Administration, operational consumption flows, and user documentation all reflect the same integration model

## 1. Workflow automation checks

- [ ] Backend CI passes for the current Python integration suites.
- [ ] Web CI passes build, lint, type-check, SBOM, and static export validation.
- [ ] Runtime image publishing covers API gateway, orchestrator, retrieval, documents, decision, notification, audit, marketplace, reporting, artifacts, history, and web.
- [ ] Marketplace packaging publishes both the Managed App ZIP and the publisher-auth ZIP.
- [ ] Docs publishing still succeeds after the workflow changes.

## 2. Marketplace packaging and licensing checks

- [ ] Managed App package is generated at `repo/marketplace/package.zip`.
- [ ] Managed App manifest is generated at `repo/marketplace/propm-agent-managedapp-package.manifest.json`.
- [ ] Publisher auth package is generated at `repo/marketplace/propm-agent-publisher-auth-site.zip`.
- [ ] ARM-TTK validation passes before package upload.
- [ ] The `dev` plan is confirmed seatless and does not require seat assignment.
- [ ] Non-dev plans still require explicit seat assignment and enforce capacity correctly.

## 3. Live deployed validation checks

- [ ] An operator can complete sign-in manually and capture browser state with `npm run test:e2e:live:setup`.
- [ ] The validation run resumes from the supplied authenticated live URL instead of re-running login automation.
- [ ] `npm run test:e2e:live` completes against the deployed environment.
- [ ] Screenshots are saved under `repo/web/playwright-artifacts/live/screenshots/`.
- [ ] CI uploads `propm-agent-live-e2e-artifacts` when the self-hosted live validation workflow is used.

## 4. Secondary mock coverage checks

- [ ] API-mock coverage remains available as a secondary path (`npm run test:e2e:api-mock`).
- [ ] Legacy mock video/smoke coverage remains clearly separated from the live path (`npm run test:e2e:legacy-mock`).
- [ ] No release gate depends solely on the legacy mock flow when a deployed environment is available.

## 5. Governance and rollout checks

- [ ] Retrieval remains Azure AI Search-only for project knowledge.
- [ ] External writes remain governed and approval-gated.
- [ ] Execution Connector and Ingestion Provider terminology is used consistently in the UI and docs.
- [ ] Technical integration setup is available only in Platform Administration or project binding screens, not in end-user operational flows.
- [ ] Subscription-admin editability and read-only fallback behavior have been validated in staging.
- [ ] Deployment-selected and effective AI provider values are visible and correct.
- [ ] Marketplace entitlements correctly affect integration and AI-provider availability.
- [ ] Feature flags and rollout phases are documented before enablement.
- [ ] Trace IDs and audit views are available for operational support.

## 6. Platform Administration migration checks

- [ ] Platform Administration overview, Platform Integrations, AI Provider Settings, and Marketplace & Subscription routes are present and permission-aware.
- [ ] Non-admin users remain read-only across exposed admin surfaces.
- [ ] Validation, import, execution, and provider-change actions produce audit history.
- [ ] Knowledge shows approved import sources without raw technical setup.
- [ ] Actions & approvals resolves compatible execution options without exposing tenant-scoped connector editing.
- [ ] Workspace shows project bindings and operational readiness rather than tenant-scoped technical setup.

## 7. Operator prerequisites and environment hygiene

- [ ] The deployed application URL is reachable from the operator workstation or self-hosted runner.
- [ ] Manual login is completed before the live validation run is resumed.
- [ ] Captured storage-state files are treated as sensitive ephemeral artifacts and are not committed.
- [ ] Mock or fixture-backed connectors remain clearly identified in non-production environments.

## 8. Documentation and support readiness

- [ ] Administration docs explain Platform Administration, Platform Integrations, AI Provider Settings, and Marketplace & Subscription.
- [ ] Use docs explain Knowledge imports, action-first execution flows, and Workspace operational readiness.
- [ ] Troubleshooting docs explain read-only versus access denied and blocked-by-entitlement or blocked-by-health states.
- [ ] Screenshots and labels match the current navigation and terminology.

## 9. Go / no-go review

Do not promote broadly until the following are understood:

- any failing workflow automation or release-artifact generation step
- any gap between the Marketplace package contents and the deployed runtime image set
- any live validation run that cannot resume from the operator-provided authenticated URL
- any limitation that requires customer-facing explanation before enablement
- any mismatch between user docs and the shipped Platform Administration or operational UI

## Related guidance

- [Known limitations](./known-limitations.md)
- [Marketplace administration guidance](../administration/marketplace.md)
- [Connectors and policies](../administration/connectors-and-policies.md)
- [Rollout guidance](../administration/rollout-guidance.md)
