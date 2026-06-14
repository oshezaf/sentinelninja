# SAP ETD - SAP system stopped reporting data

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a per-system silence when an individual SAP system (identified by its SID) that has recently been reporting to SAP Enterprise Threat Detection (ETD) stops producing new records in the SAPETDAlerts_CL table within the configured per-system grace period (default 2 hours). A targeted silence of a single SID may indicate that an adversary with access to the SAP system, the SAP ETD collector for that SID, or the data connector is selectively blocking security telemetry to hide follow-on ac

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP ETD Cloud](../solutions/sap-etd-cloud.md) |
| **ID** | `b1413b43-9410-46f4-94d9-da507105d834` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562, T1562.006 |
| **Required Connectors** | [SAPETDAlerts](../connectors/sapetdalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Analytic%20Rules/SAPETD-SystemStoppedReporting.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP ETD Cloud](../solutions/sap-etd-cloud.md)

