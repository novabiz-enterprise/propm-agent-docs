# Risk Register

## 1. Document Information

| Field | Value |
|---|---|
| Project | Azure Bay Hotel & Convention Center |
| Document ID | RISK-ABH-01 |
| Version | 1.0 |
| Date | 2026-02-10 |
| Owner | Risk Manager |

## 2. Rating Method

- Probability scale: 1 (Very Low) to 5 (Very High)
- Impact scale: 1 (Very Low) to 5 (Very High)
- Score = Probability × Impact
- Thresholds:
  - 1-6 = Low
  - 8-12 = Medium
  - 15-25 = High

## 3. Detailed Risk Register

| Risk ID | Category | Description | Root Cause | Probability | Impact | Score | Level | Response Strategy | Response Actions | Owner | Trigger |
|---|---|---|---|---:|---:|---:|---|---|---|---|---|
| R-01 | Regulatory | Delay in building permit approval | Incomplete submissions / authority workload | 4 | 5 | 20 | High | Mitigate | Permit pre-check workshops; dedicated permit tracker | Permitting Lead | >10 days with no authority response |
| R-02 | Design | Design coordination clashes discovered late | Multidiscipline model integration gaps | 3 | 4 | 12 | Medium | Mitigate | Weekly BIM clash reviews; design freeze gate | Design Manager | >15 critical clashes open |
| R-03 | Commercial | Steel and MEP inflation above budget | Market volatility and supply pressure | 4 | 4 | 16 | High | Mitigate | Early package procurement; price locks; alternates | Commercial Manager | Supplier quotes +8% over estimate |
| R-04 | Schedule | Extreme weather disruption during structural phase | Seasonal storms and wind conditions | 2 | 3 | 6 | Low | Accept/Mitigate | Weather buffers and alternative sequencing | Construction Manager | >5 weather stop days/month |
| R-05 | Procurement | Long-lead equipment delayed | Supplier backlog / manufacturing constraints | 4 | 4 | 16 | High | Mitigate | Early PO issuance; factory expediting; backup vendors | Procurement Lead | Revised lead time > +4 weeks |
| R-06 | Quality | Rework due to non-compliant installations | Insufficient supervision and QA checks | 3 | 4 | 12 | Medium | Mitigate | ITP hold points and QA audits | QA/QC Manager | NCR trend > threshold |
| R-07 | Technical | Unexpected geotechnical conditions | Limited early subsurface visibility | 2 | 5 | 10 | Medium | Mitigate/Transfer | Additional boreholes; geotech advisory in contract | Civil Lead | Excavation anomalies |
| R-08 | Safety | Major HSE incident on site | Unsafe behaviors and subcontractor non-compliance | 2 | 5 | 10 | Medium | Mitigate | Daily toolbox talks; behavioral safety program | HSE Manager | High-potential near miss |
| R-09 | Stakeholder | Community complaints about noise/traffic | Construction logistics impact | 3 | 3 | 9 | Medium | Mitigate | Traffic plan and communication hotline | Community Liaison | >5 complaints/month |
| R-10 | Resource | Skilled labor shortage in fit-out phase | Competing regional projects | 3 | 4 | 12 | Medium | Mitigate | Workforce planning and retention incentives | Contracts Lead | Labor attendance <90% |
| R-11 | Financial | FX fluctuation on imported FF&E | Currency market volatility | 3 | 3 | 9 | Medium | Mitigate/Transfer | Hedging strategy and payment milestones | Finance Controller | FX movement >5% |
| R-12 | Commissioning | Integrated systems fail interoperability tests | Interface specification gaps | 3 | 5 | 15 | High | Mitigate | Early interface testing and vendor integration workshops | Commissioning Lead | IST pre-tests fail |

## 4. Top Risk Heat List (Current)

| Rank | Risk ID | Score | Weekly Status |
|---|---|---:|---|
| 1 | R-01 | 20 | Active mitigation, authority coordination ongoing |
| 2 | R-03 | 16 | Market watch elevated, alternative suppliers engaged |
| 3 | R-05 | 16 | Critical procurement actions in progress |
| 4 | R-12 | 15 | Interface matrix draft under review |

## 5. Risk Response Action Tracker

| Action ID | Linked Risk | Action | Due Date | Status |
|---|---|---|---|---|
| RA-01 | R-01 | Complete permit package QA gate | 2026-03-05 | In Progress |
| RA-02 | R-03 | Lock steel pricing framework | 2026-03-20 | Planned |
| RA-03 | R-05 | Issue long-lead PO for chillers | 2026-07-15 | Planned |
| RA-04 | R-12 | Develop cross-system FAT protocol | 2027-09-15 | Planned |

## 6. Escalation Rules

- Any risk scored **>=15** must be reviewed weekly by Project Control Board.
- Any risk whose trend increases two consecutive periods must be escalated to CCB.
- Risks with combined schedule impact >20 days require executive notification.

## 7. Residual Risk Monitoring

- Residual risk scores are recalculated after each mitigation milestone.
- Closed risks remain archived for lessons learned and auditability.
- Emergent risks are assigned IDs sequentially (`R-13`, `R-14`, ...).

