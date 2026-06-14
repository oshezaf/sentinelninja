# SAP ETD - No new data received

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a complete gap in the SAP Enterprise Threat Detection (ETD) feed when no records have been ingested into the SAPETDAlerts_CL table within the configured time window (default 1 hour). A full-feed blackout may indicate that an adversary is tampering with the security telemetry pipeline (for example by stopping the SAP ETD collector, disabling the data connector, or blocking network egress to Microsoft Sentinel) to hide follow-on activity in the SAP landscape. Benign causes such as a ser

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP ETD Cloud](../solutions/sap-etd-cloud.md) |
| **ID** | `a9206c5a-3e72-4c10-807f-313a56075b20` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562, T1562.006 |
| **Required Connectors** | [SAPETDAlerts](../connectors/sapetdalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Analytic%20Rules/SAPETD-NoNewDataReceived.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP ETD Cloud](../solutions/sap-etd-cloud.md)

