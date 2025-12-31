# Regsvr32 Rundll32 Image Loads Abnormal Extension

This query is looking for regsvr32.exe or rundll32.exe loading DLL images with other extensions than .dll. Joins the data to public network events. References: https://threathunt.blog/running-live-malware-for-threat-hunting-purposes/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `36fbd4e7-5630-4414-aa42-702a7fdded21` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1218.010, T1218.011 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Defense%20Evasion/Regsvr32Rundll32ImageLoadsAbnormalExtension.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
