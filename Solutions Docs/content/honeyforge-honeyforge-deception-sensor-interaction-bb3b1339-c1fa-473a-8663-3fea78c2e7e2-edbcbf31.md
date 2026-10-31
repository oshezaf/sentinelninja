# HoneyForge - Deception Sensor Interaction

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects an interaction with a HoneyForge deception sensor. Any activity involving a HoneyForge sensor must be treated as potentially unauthorised until validated by the security operations team.  HoneyForge sensors are passive decoy devices  - legitimate systems and users should never communicate with them. Any detected interaction may indicate network scanning, lateral movement, or an actively compromised device.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `bb3b1339-c1fa-473a-8663-3fea78c2e7e2` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | Reconnaissance, InitialAccess |
| **Techniques** | T1595, T1590, T1190, T1133 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Analytic%20Rules/HoneyForge_DeceptionSensorInteraction.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to HoneyForge](../solutions/honeyforge.md)

