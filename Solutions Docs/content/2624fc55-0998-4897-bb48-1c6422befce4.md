# Regsvr32 Rundll32 with Anomalous Parent Process

This analytical rule looks for rundll32.exe or regsvr32.exe being spawned by abnormal processes: wscript.exe, powershell.exe, cmd.exe, pwsh.exe, cscript.exe. Blog: https://threathunt.blog/running-live-malware-for-threat-hunting-purposes/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `2624fc55-0998-4897-bb48-1c6422befce4` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1218.010, T1218.011 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Defense%20Evasion/Regsvr32Rundll32WithAnomalousParentProcess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
