# HoneyForge - Sensor Fleet Coverage and Health

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Provides a per-sensor event summary for the past 30 days, giving visibility into which sensors are active, which are quiet, and which may be offline or misconfigured (no events in the last 10 minutes is the offline threshold).  Use this query during routine operations to confirm full fleet coverage and identify any gaps in your deception layer before an attacker does.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `7bf37318-4d5e-6f7a-0b1c-2d3e4f5a6b7c` |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1590 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Hunting%20Queries/HoneyForge_FleetCoverage.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyForge](../solutions/honeyforge.md)

