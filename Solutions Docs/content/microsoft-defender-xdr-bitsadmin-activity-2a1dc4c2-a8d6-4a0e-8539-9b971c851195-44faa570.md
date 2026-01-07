# Bitsadmin Activity

Background Intelligent Transfer Service (BITS) is a way to reliably download files from webservers or SMB servers.  This service is commonly used for legitimate purposes, but can also be used as part of a malware downloader.  Additionally, bitsadmin can be used to upload files and therefore can be used for data exfiltration. This query will identify use of bitsadmin.exe for either purpose and will identify directionality file transfer directionality.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `2a1dc4c2-a8d6-4a0e-8539-9b971c851195` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, CommandAndControl, Exfiltration |
| **Techniques** | T1197, T1105, T1048 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Execution/BITSAdminActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
