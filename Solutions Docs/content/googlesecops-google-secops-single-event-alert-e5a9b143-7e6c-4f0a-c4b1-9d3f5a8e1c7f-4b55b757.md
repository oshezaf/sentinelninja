# Google SecOps - Single-Event Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates incidents in Microsoft Sentinel when Google Security Operations raises an active single-event alert (SINGLE_EVENT, riskScore gte 40) at MEDIUM, HIGH, or CRITICAL severity. These alerts represent a single action like malware execution, credential abuse, or defense evasion severe enough to trigger an incident without requiring multi-signal correlation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GoogleSecOps](../solutions/googlesecops.md) |
| **ID** | `e5a9b143-7e6c-4f0a-c4b1-9d3f5a8e1c7f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, CredentialAccess, DefenseEvasion, Impact |
| **Techniques** | T1059, T1110, T1562, T1485 |
| **Required Connectors** | [GSDetectionAlerts](../connectors/gsdetectionalerts.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleSecOps/Analytic%20Rules/GoogleSecOps-SingleEventAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GoogleSecOps](../solutions/googlesecops.md)

