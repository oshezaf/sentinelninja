# SAP ETD - Execution of Sensitive Function Module

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies execution of a sensitive ABAP Function Module using the watchlists provided by the Microsoft Sentinel Solution for SAP  Source Action: Execute a sensitive function module directly using SE37.  *Data Sources: SAP Enterprise Thread Detection Solution -  Alerts*

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SAP ETD Cloud](../solutions/sap-etd-cloud.md) |
| **ID** | `c6111e06-11e2-45eb-86ef-28313a06db35` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Required Connectors** | [SAPETDAlerts](../connectors/sapetdalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SAP%20ETD%20Cloud/Analytic%20Rules/SAPETD-ExecutionofSensitiveFunctionModule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SAPETDAlerts_CL`](../tables/sapetdalerts-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SAP ETD Cloud](../solutions/sap-etd-cloud.md)

