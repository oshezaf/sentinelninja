# Time series anomaly for data size transferred to public internet

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies anomalous data transfer to public networks. The query leverages built-in KQL anomaly detection algorithms that detects large deviations from a baseline pattern. A sudden increase in data transferred to unknown public networks is an indication of data exfiltration attempts and should be investigated. The higher the score, the further it is from the baseline value. The output is aggregated to provide summary view of unique source IP to destination IP address and port bytes sent traffic

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `f2dd4a3a-ebac-4994-9499-1a859938c947` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Required Connectors** | [CiscoASA](../connectors/ciscoasa.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md) |
| **Event Vendor** | VMConnection |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/MultipleDataSources/TimeSeriesAnomaly-MultiVendor_DataExfiltration.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`anomalies`](../tables/anomalies.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

