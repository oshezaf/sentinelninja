# HoneyForge - Top Attacking Source IPs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies the source IP addresses that have interacted most frequently with HoneyForge deception sensors over the past 7 days. Repeat offenders across multiple sensors are especially high-priority  - they indicate persistent reconnaissance or an automated scanner that missed the exclusion list.  Use this query as a starting point for threat-intel enrichment and to decide which IPs warrant a block rule or further investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyForge](../solutions/honeyforge.md) |
| **ID** | `795b6ec0-3e9a-4b12-8f4d-1a2b3c4d5e6f` |
| **Tactics** | Reconnaissance |
| **Techniques** | T1595, T1590 |
| **Required Connectors** | [HoneyForge](../connectors/honeyforge.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge/Hunting%20Queries/HoneyForge_TopAttackingSources.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "HoneyForge"`<br>`DeviceVendor == "BUI"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyForge](../solutions/honeyforge.md)

