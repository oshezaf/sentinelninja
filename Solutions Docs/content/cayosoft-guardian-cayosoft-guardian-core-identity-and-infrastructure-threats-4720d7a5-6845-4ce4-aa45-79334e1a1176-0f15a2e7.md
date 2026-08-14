# Cayosoft Guardian - Core Identity and Infrastructure Threats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates Microsoft Sentinel incidents for identity and infrastructure security threats reported by Cayosoft Guardian across on-premises Active Directory and Microsoft Entra ID. This includes threats related to accounts, service accounts, computers, security groups, and trusted domains. Incident severity is determined dynamically based on the severity of the detected threat.  This rule complements the Cloud Application Security Threats rule, which covers cloud application and service principal thr

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cayosoft Guardian](../solutions/cayosoft-guardian.md) |
| **ID** | `4720d7a5-6845-4ce4-aa45-79334e1a1176` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [CayosoftGuardianConnector](../connectors/cayosoftguardianconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cayosoft%20Guardian/Analytic%20Rules/CayosoftGuardian-MainRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CayosoftThreatAlerts_CL`](../tables/cayosoftthreatalerts-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cayosoft Guardian](../solutions/cayosoft-guardian.md)

