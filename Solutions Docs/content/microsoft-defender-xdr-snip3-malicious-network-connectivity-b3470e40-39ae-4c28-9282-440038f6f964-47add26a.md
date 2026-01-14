# Snip3 Malicious Network Connectivity

This hunting query looks for potentially hollowed processes that may be used to facilitate command-and-control or exfiltration by Snip3 malware.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `b3470e40-39ae-4c28-9282-440038f6f964` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Campaigns/Snip3MaliciousNetworkConnectivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

