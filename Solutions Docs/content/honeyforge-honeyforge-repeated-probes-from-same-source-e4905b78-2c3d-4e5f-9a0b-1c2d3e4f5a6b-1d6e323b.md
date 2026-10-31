# HoneyForge - Repeated Probes from Same Source

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Finds source IPs that have probed HoneyForge sensors on multiple distinct occasions separated by at least one hour, suggesting deliberate or scripted reconnaissance rather than a one-off event.  A legitimate network scanner that hits a sensor once might be an oversight. One that returns hours or days later is a persistent threat.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `e4905b78-2c3d-4e5f-9a0b-1c2d3e4f5a6b` |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1590 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Hunting%20Queries/HoneyForge_RepeatedProbes.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyForge](../solutions/honeyforge.md)

