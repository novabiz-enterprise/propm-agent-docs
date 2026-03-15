# App Test Data Scenarios

## Objective

Provide realistic demo scenarios mapped directly to the ProPM Agent user experience.

## Scenario Set

1. **Projects** — confirm the default demo project is visible, can be deleted, then re-imported.
2. **Workspace** — open the seeded hotel workspace and validate admin tabs are editable.
3. **Knowledge** — search for `chiller` and confirm risk/procurement artifacts appear.
4. **Agents** — run Orchestrator, Risk, and Schedule prompts and verify outputs land in AI Log.
5. **PM Docs** — edit a weekly status draft, export DOCX/XLSX, then add it to Knowledge.
6. **AI Log** — inspect seeded run history, then validate new actions append fresh events.
7. **Access control** — create a custom role, assign it, and remove it after validation.

## Validation Notes

- Use the hotel demo project as the primary walkthrough path.
- Confirm all demo flows work without extra tenant provisioning.
- Treat the dataset as resettable demo content rather than production records.

## Expected Outcome

The demo project should provide enough breadth to showcase project setup, governed collaboration, AI execution, and document-driven delivery without requiring manual data creation first.
