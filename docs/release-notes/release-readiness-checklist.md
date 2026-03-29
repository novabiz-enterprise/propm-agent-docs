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
- [ ] Connector execution mode is visible and correctly configured for the environment.
- [ ] Feature flags and rollout phases are documented before enablement.
- [ ] Trace IDs and audit views are available for operational support.

## 6. Operator prerequisites and environment hygiene

- [ ] The deployed application URL is reachable from the operator workstation or self-hosted runner.
- [ ] Manual login is completed before the live validation run is resumed.
- [ ] Captured storage-state files are treated as sensitive ephemeral artifacts and are not committed.
- [ ] Mock or fixture-backed connectors remain clearly identified in non-production environments.

## 7. Go / no-go review

Do not promote broadly until the following are understood:

- any failing workflow automation or release-artifact generation step
- any gap between the Marketplace package contents and the deployed runtime image set
- any live validation run that cannot resume from the operator-provided authenticated URL
- any limitation that requires customer-facing explanation before enablement

## Related guidance

- [Known limitations](./known-limitations.md)
- [Marketplace administration guidance](../administration/marketplace.md)
- [Connectors and policies](../administration/connectors-and-policies.md)
- [Rollout guidance](../administration/rollout-guidance.md)
