# Master Schedule Baseline

## 1. Document Information

| Field | Value |
|---|---|
| Project | Azure Bay Hotel & Convention Center |
| Document ID | SCH-ABH-01 |
| Version | 1.0 (Baseline) |
| Data Date | 2026-01-31 |
| Schedule Tool | Primavera P6 (exported summary) |
| Owner | Planning & Controls Manager |

## 2. Baseline Timeline Summary

| Parameter | Value |
|---|---|
| Baseline Start | 2026-01-11 |
| Baseline Finish | 2028-03-31 |
| Total Duration | 811 calendar days |
| Critical Path Length | 790 calendar days |
| Total Float Threshold (Critical) | &lt;= 10 days |

## 3. Level-1 Phases

| Phase ID | Phase Name | Start | Finish | Duration (days) |
|---|---|---|---|---:|
| P1 | Mobilization and Design Finalization | 2026-01-11 | 2026-04-30 | 110 |
| P2 | Permitting and Enabling Works | 2026-03-01 | 2026-06-15 | 106 |
| P3 | Civil/Structural Construction | 2026-05-01 | 2027-06-30 | 425 |
| P4 | MEP Installation and Testing | 2026-10-01 | 2027-12-15 | 440 |
| P5 | Interior Fit-Out and FF&E | 2027-05-01 | 2028-01-31 | 276 |
| P6 | Commissioning and Handover | 2028-01-15 | 2028-03-31 | 76 |

## 4. Major Milestones

| Milestone ID | Milestone | Date | Type | Float (days) |
|---|---|---|---|---:|
| M-01 | Charter & funding approved | 2026-01-10 | Contractual | 0 |
| M-02 | IFC design release | 2026-04-30 | Internal Gate | 5 |
| M-03 | Main building permit secured | 2026-05-20 | Regulatory | 0 |
| M-04 | Foundation completion | 2026-09-30 | Construction | 7 |
| M-05 | Structural topped out | 2027-03-31 | Construction | 4 |
| M-06 | Building envelope weather-tight | 2027-06-30 | Construction | 0 |
| M-07 | MEP rough-in complete | 2027-10-31 | Systems | 3 |
| M-08 | Guestroom mock-up approved | 2027-08-15 | Quality Gate | 12 |
| M-09 | Interior fit-out complete | 2028-01-31 | Construction | 2 |
| M-10 | Integrated systems test complete | 2028-03-10 | Commissioning | 0 |
| M-11 | Occupancy certificate issued | 2028-03-20 | Regulatory | 0 |
| M-12 | Final handover complete | 2028-03-31 | Contractual | 0 |

## 5. Critical Path Narrative

Current critical path flows through:

1. Detailed design approvals (`1.2.3` -> `1.2.5`)
2. Permit approval (`1.3.2`)
3. Foundation and structural sequence (`1.5.1` -> `1.5.5`)
4. MEP core network installation (`1.6.x`)
5. Integrated commissioning (`1.11.2` -> `1.11.3`)
6. Regulatory final inspection and occupancy (`1.11.5`)

Any delay on these paths above available float directly affects project completion.

## 6. Milestone Readiness Criteria

| Milestone | Readiness Criteria |
|---|---|
| M-03 Permit secured | All statutory submissions accepted, no open major comments |
| M-06 Weather-tight | Envelope complete + no unresolved water ingress defects |
| M-09 Fit-out complete | Rooms/public areas complete with accepted snag threshold |
| M-11 Occupancy certificate | Fire, safety, and accessibility approvals fully signed |

## 7. Schedule Control Thresholds

| Metric | Green | Amber | Red |
|---|---|---|---|
| SPI (overall) | >= 0.98 | 0.95 - 0.97 | < 0.95 |
| Critical activities delayed | 0-1 | 2-3 | >= 4 |
| Milestone delay | 0-3 days | 4-10 days | > 10 days |

Recovery action plan is mandatory if SPI falls below 0.95 in any reporting period.

## 8. Near-Term Lookahead (Next 60 Days from Data Date)

| Activity ID | Activity | Planned Finish | Owner |
|---|---|---|---|
| A-1120 | Detailed design freeze coordination | 2026-03-15 | Design Manager |
| A-1240 | Permit submission package final QA | 2026-03-28 | Permitting Lead |
| A-1310 | Site mobilization and temporary works | 2026-04-05 | Construction Manager |
| A-1425 | Long-lead procurement release (chillers/elevators) | 2026-04-12 | Procurement Lead |
| A-1510 | Utility tie-in planning approvals | 2026-04-25 | Infrastructure Lead |

## 9. Dependencies and Interfaces

| Dependency ID | Description | Upstream | Downstream | Risk if Late |
|---|---|---|---|---|
| D-01 | Permit issuance before foundation excavation | Municipality | Civil Works | Full critical path slip |
| D-02 | Chiller/elevator manufacturing before MEP finalization | Vendors | MEP + Commissioning | System testing delay |
| D-03 | Guestroom mock-up approval before mass fit-out | Operator | Interiors | Rework and productivity loss |

## 10. Assumptions

- Average effective site productivity at 90% baseline plan.
- No force majeure stoppage &gt; 7 consecutive days.
- Inspection lead time from authorities &lt;= 10 business days.

