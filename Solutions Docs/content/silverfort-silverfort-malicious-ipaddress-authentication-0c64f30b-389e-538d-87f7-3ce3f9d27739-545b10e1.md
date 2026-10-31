# Silverfort - Malicious IPAddress authentication

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Silverfort incidents involving authentications from IP addresses flagged as malicious. This behavior may indicate access from attacker-controlled infrastructure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Silverfort](../solutions/silverfort.md) |
| **ID** | `0c64f30b-389e-538d-87f7-3ce3f9d27739` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [SilverfortAma](../connectors/silverfortama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort/Analytic%20Rules/MaliciousIp.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID == "NewIncident"`<br>`DeviceProduct has "Admin Console"`<br>`DeviceVendor has "Silverfort"`<br>`Message has "MaliciousIp"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Silverfort](../solutions/silverfort.md)

