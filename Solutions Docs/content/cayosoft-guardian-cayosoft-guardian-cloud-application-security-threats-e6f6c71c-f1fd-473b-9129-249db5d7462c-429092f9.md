# Cayosoft Guardian - Cloud Application Security Threats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates Microsoft Sentinel incidents for cloud application and Microsoft Entra ID service principal security threats reported by Cayosoft Guardian. Incident severity is determined dynamically based on the severity of the detected threat.  This rule complements the Core Identity and Infrastructure Threats rule, which covers all other Cayosoft Guardian threat types not included in this rule.  Alerts with the same Cayosoft ThreatId are grouped into a single incident within a 1-day lookback window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cayosoft Guardian](../solutions/cayosoft-guardian.md) |
| **ID** | `e6f6c71c-f1fd-473b-9129-249db5d7462c` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [CayosoftGuardianConnector](../connectors/cayosoftguardianconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cayosoft%20Guardian/Analytic%20Rules/CayosoftGuardian-CloudApp.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cayosoft Guardian](../solutions/cayosoft-guardian.md)

