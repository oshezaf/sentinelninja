# HIPAACompliance

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [HIPAA Compliance](../solutions/hipaa-compliance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HIPAA%20Compliance/Workbooks/HIPAACompliance.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | `Category == "AzureFirewallNetworkRule"`<br>`Category == "SQLSecurityAuditEvents"` | — | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |
| [`DeviceInfo`](../tables/deviceinfo.md) |  | ✓ | ✗ |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |  | ✓ | ✗ |
| [`Heartbeat`](../tables/heartbeat.md) |  | ✗ | ✗ |
| [`SecurityAlert`](../tables/securityalert.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "4624,4625"` | ✓ | ✓ |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ |
| [`SigninLogs`](../tables/signinlogs.md) |  | ✓ | ✗ |
| [`Syslog`](../tables/syslog.md) |  | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) |  | ✓ | ✗ |
| [`Watchlist`](../tables/watchlist.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to HIPAA Compliance](../solutions/hipaa-compliance.md)

