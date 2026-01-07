# Network endpoint to host executable correlation

'Correlates blocked URLs hosting [malicious] executables with host endpoint data to identify potential instances of executables of the same name having been recently run.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md) |
| **ID** | `01f64465-b1ef-41ea-a7f5-31553a11ad43` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [TrendMicro](../connectors/trendmicro.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Event Vendor** | Trend Micro |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials/Analytic%20Rules/NetworkEndpointCorrelation.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Network Threat Protection Essentials](../solutions/network-threat-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
