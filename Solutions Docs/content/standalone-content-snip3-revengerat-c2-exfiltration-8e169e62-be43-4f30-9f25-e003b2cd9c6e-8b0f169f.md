# snip3-revengerat-c2-exfiltration

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Snip3 is a family of related remote access trojans. Although the malware in this family contain numerous small variations, they all exhibit similar behaviors and techniques. The following query looks for network connections using any protocols associated with recent RevengeRAT, AsyncRAT, and other malware campaigns targeting the aviation industry. This activity is often followed by connections to copy-and-paste sites such as pastebin.com, stikked.ch, academia.edu, and archive.org. Many of these

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `8e169e62-be43-4f30-9f25-e003b2cd9c6e` |
| **Tactics** | Command and control, Exfiltration |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/Microsoft%20365%20Defender/Campaigns/snip3-revengerat-c2-exfiltration.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

