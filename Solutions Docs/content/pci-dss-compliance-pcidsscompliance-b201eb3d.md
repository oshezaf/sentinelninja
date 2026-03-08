# PCIDSSCompliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [PCI DSS Compliance](../solutions/pci-dss-compliance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PCI%20DSS%20Compliance/Workbooks/PCIDSSCompliance.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Anomalies`](../tables/anomalies.md) |  | ✓ | ✓ | ? |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 |  | ✗ | ✗ | ✗ |
| [`Event`](../tables/event.md) |  | ✓ | ✗ | ✗ |
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ | ? |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "Oracle Unified Audit"` | ✓ | ✓ | ✓ |
| [`Watchlist`](../tables/watchlist.md) |  | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Workbooks](workbooks.md) · [Back to PCI DSS Compliance](../solutions/pci-dss-compliance.md)

