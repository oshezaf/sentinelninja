# Connection from external IP to OMI related Ports

This query detects attempts to exploit OMI vulnerability (CVE-2021-38647) by identifying external IP connections to management ports (5985,5986,1270). It uses the imNetworkSession schema and other logs for this purpose.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `767b8f6d-8029-4c92-afe1-282167d9d49a` |
| **Tactics** | Reconnaissance, InitialAccess |
| **Techniques** | T1595, T1190 |
| **Required Connectors** | [AzureNetworkWatcher](../connectors/azurenetworkwatcher.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/NetworkConnectiontoOMIPorts.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
