# DORACompliance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [DORA Compliance](../solutions/dora-compliance.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DORA%20Compliance/Workbooks/DORACompliance.json) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ | ? |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) |  | ✓ | ✗ | ? |
| [`Event`](../tables/event.md) | `EventID in "1001,1069,1205"`<br>`EventLevelName == "Error"`<br>`RenderedDescription has_any "failover"` | ✓ | ✓ | ? |
| [`Heartbeat`](../tables/heartbeat.md) |  | ? | ✗ | ? |
| [`SecurityAlert`](../tables/securityalert.md) | `AlertName has_any "Backup Failure"`<br>`AlertName has_any "Blocked"`<br>`AlertName has_any "Compliance Violation"`<br>`AlertName has_any "Credential Access"`<br>`AlertName has_any "Data Exfiltration"`<br>`AlertName has_any "Incident Reported"`<br>`AlertName has_any "Malware"`<br>`AlertName has_any "Policy Change"`<br>`AlertName has_any "Service Outage"`<br>`AlertName has_any "Suspicious Login"`<br>`AlertName has_any "TLPT"`<br>`AlertName has_any "Third-Party"`<br>`AlertName has_any "Threat Intelligence"`<br>`AlertName has_any "Unauthorized Access"`<br>`AlertName has_any "Vulnerability Exploitation"` | ✓ | ✗ | ? |
| [`SecurityIncident`](../tables/securityincident.md) |  | ✓ | ✗ | ? |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `ObservableKey contains "file:hashes."`<br>`ObservableKey contains "network-traffic"` | ✓ | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Workbooks](workbooks.md) · [Back to DORA Compliance](../solutions/dora-compliance.md)

