# Recon with Rundll

This query detects suspicious rundll.exe activity associated with Trickbot campaigns.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `76c14475-9a22-4cc1-922c-437d7f614a36` |
| **Tactics** | Discovery, Collection, CommandAndControl |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Command%20and%20Control/ReconWithRundll.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
