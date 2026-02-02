# Time series anomaly detection for total volume of traffic

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Identifies anamalous spikes in network traffic logs as compared to baseline or normal historical patterns. The query leverages a KQL built-in anomaly detection algorithm to find large deviations from baseline patterns. Sudden increases in network traffic volume may be an indication of data exfiltration attempts and should be investigated. The higher the score, the further it is from the baseline value. The output is aggregated to provide summary view of unique source IP to destination IP addres

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `06a9b845-6a95-4432-a78b-83919b28c375` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1030 |
| **Required Connectors** | [Barracuda](../connectors/barracuda.md), [CEF](../connectors/cef.md), [CheckPoint](../connectors/checkpoint.md), [CiscoASA](../connectors/ciscoasa.md), [F5](../connectors/f5.md), [Fortinet](../connectors/fortinet.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/CommonSecurityLog/TimeSeriesAnomaly-MultiVendor_NetworkTraffic.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

