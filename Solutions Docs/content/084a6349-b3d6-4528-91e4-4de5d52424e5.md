# Suspicious Spoolsv Child Process

Surfaces suspicious spoolsv.exe behavior likely related to CVE-2021-1675

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `084a6349-b3d6-4528-91e4-4de5d52424e5` |
| **Tactics** | PrivilegeEscalation, Execution |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Hunting%20Queries/Exploits/Print%20Spooler%20RCE/SuspiciousSpoolsvChildProcess.yaml) |

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
