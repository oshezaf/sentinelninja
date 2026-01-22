# RareDNSLookupWithDataTransfer

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query helps identify rare DNS connections and resulting data transfer to/from the associated domain. It can help identify unexpected large data transfers to or from internal systems which may indicate data exfil or malicious tool download.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `06c52a66-fffe-4d3b-a05a-646ff65b7ec2` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1048 |
| **Required Connectors** | [DNS](../connectors/dns.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(WireData)](../connectors/azuremonitor-wiredata.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md) |
| **Event Vendor** | Palo Alto Networks |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/MultipleDataSources/RareDNSLookupWithDataTransfer.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

