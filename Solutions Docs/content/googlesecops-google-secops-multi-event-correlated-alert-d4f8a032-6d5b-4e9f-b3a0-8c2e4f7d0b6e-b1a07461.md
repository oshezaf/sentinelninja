# Google SecOps - Multi-Event Correlated Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates incidents in Microsoft Sentinel when Google Security Operations raises an active multi-event correlated alert (MULTI_EVENT, riskScore gte 40) at HIGH or CRITICAL severity. These alerts indicate complex attack patterns like lateral movement, staged persistence, or command-and-control identified by correlating multiple signals across a time window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleSecOps](../solutions/googlesecops.md) |
| **ID** | `d4f8a032-6d5b-4e9f-b3a0-8c2e4f7d0b6e` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, Persistence, PrivilegeEscalation, CommandAndControl |
| **Techniques** | T1210, T1021, T1053, T1055 |
| **Required Connectors** | [GSDetectionAlerts](../connectors/gsdetectionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleSecOps/Analytic%20Rules/GoogleSecOps-MultiEventCorrelatedAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleSecOps](../solutions/googlesecops.md)

