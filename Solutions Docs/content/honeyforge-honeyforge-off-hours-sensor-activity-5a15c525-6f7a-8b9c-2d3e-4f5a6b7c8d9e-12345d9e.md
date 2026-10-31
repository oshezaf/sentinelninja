# HoneyForge - Off-Hours Sensor Activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Surfaces HoneyForge sensor interactions that occurred outside normal business hours (before 07:00 or after 19:00 UTC, Monday to Friday, and all day on weekends). Off-hours activity from internal IPs is especially suspicious  - it may indicate a compromised device operating autonomously or an insider threat.  Adjust the hour thresholds to match your organisation's working hours if they differ from the defaults.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `5a15c525-6f7a-8b9c-2d3e-4f5a6b7c8d9e` |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1133 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Hunting%20Queries/HoneyForge_OffHoursActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyForge](../solutions/honeyforge.md)

