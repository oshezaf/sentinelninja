# ApexOne - Behavior monitoring actions by files

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Shows behavior monitoring actions taken for files.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Trend Micro Apex One](../solutions/trend-micro-apex-one.md) |
| **ID** | `96451e96-67b5-11ec-90d6-0242ac120003` |
| **Severity** | Medium |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Apex%20One/Hunting%20Queries/TMApexOneBehaviorMonitoringTranslatedAction.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "Apex Central"`<br>`DeviceVendor == "Trend Micro"` | ✓ | ✓ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Trend Micro Apex One](../solutions/trend-micro-apex-one.md)

