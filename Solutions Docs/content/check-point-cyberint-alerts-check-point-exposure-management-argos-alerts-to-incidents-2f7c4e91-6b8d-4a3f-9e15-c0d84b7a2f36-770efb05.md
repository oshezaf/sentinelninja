# Check Point Exposure Management - Argos alerts to incidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates a Microsoft Sentinel incident for each Check Point Exposure Management alert that reaches the argsentdc_CL table as open or acknowledged for the first time. Each result becomes its own alert, and ref_id is surfaced as a Custom Detail so the Exporter, ManualStatusUpdate and InboundStatusSync playbooks can map the incident back to the originating Argos alert.  The CCP data connector polls on update_date, so every change to an Argos alert adds a new row for the same ref_id. Only the first o

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |
| **ID** | `2f7c4e91-6b8d-4a3f-9e15-c0d84b7a2f36` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion |
| **Techniques** | T1566, T1036 |
| **Required Connectors** | [CheckPointCyberintAlerts](../connectors/checkpointcyberintalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20Alerts/Analytic%20Rules/CPEMArgosAlertsToIncidents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`argsentdc_CL`](../tables/argsentdc-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md)

