# ForcepointNGFWAdvanced

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Forcepoint NGFW](../solutions/forcepoint-ngfw.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20NGFW/Workbooks/ForcepointNGFWAdvanced.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct in "Alert,Audit"`<br>`DeviceVendor in "FORCEPOINT,Forcepoint"` | ✓ | ✓ | ✓ |
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ | ? |
| [`Perf`](../tables/perf.md) |  | ✓ | ✗ | ? |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |  | ✓ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to Forcepoint NGFW](../solutions/forcepoint-ngfw.md)

