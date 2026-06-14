# Google SecOps - Detection Alerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates one incident per active Google Security Operations detection alert in Microsoft Sentinel. Covers all rule types and severity levels with no additional filtering, providing broad visibility across all Google SecOps alerts. Use alongside focused rules for complete detection coverage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleSecOps](../solutions/googlesecops.md) |
| **ID** | `f6b0c254-8f7d-4a1b-d5c2-0e4a6b9f2d8a` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, LateralMovement, PrivilegeEscalation, CommandAndControl |
| **Techniques** | T1078, T1021, T1566 |
| **Required Connectors** | [GSDetectionAlerts](../connectors/gsdetectionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleSecOps/Analytic%20Rules/GoogleSecOps-DetectionAlerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleSecOps](../solutions/googlesecops.md)

