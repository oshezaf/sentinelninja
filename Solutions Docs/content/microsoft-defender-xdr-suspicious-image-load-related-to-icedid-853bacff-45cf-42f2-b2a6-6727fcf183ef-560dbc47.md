# Suspicious Image Load related to IcedId

This query searches for suspicious load image events by rundll32.exe or regsvr32.exe, a behavior associated with IcedId, which can lead to IcedId ransomware.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `853bacff-45cf-42f2-b2a6-6727fcf183ef` |
| **Tactics** | Execution, DefenseEvasion |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Ransomware/IcedIdSuspiciousImageLoad.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
