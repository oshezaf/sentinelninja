# HoneyForge - High-Frequency Sensor Interactions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects source IPs generating an unusually high volume of events against HoneyForge sensors in a short window (more than 50 events in any 10-minute period). This pattern is characteristic of automated scanners, brute-force tools, or worm-like lateral movement.  High-frequency hits deserve immediate triage  - especially if the source is an internal IP, which would indicate a compromised or misconfigured device inside the network.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `73cf5ff5-5e6f-7a8b-1c2d-3e4f5a6b7c8d` |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1190 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Hunting%20Queries/HoneyForge_HighFrequency.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyForge](../solutions/honeyforge.md)

