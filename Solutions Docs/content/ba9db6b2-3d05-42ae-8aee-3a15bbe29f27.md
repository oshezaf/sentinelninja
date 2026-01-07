# Qakbot Discovery Activies

This query searches for injected processes launching discovery activity. Qakbot has been observed leading to ransomware in numerous instances. It looks for discovery commands such as net.exe, whoami.exe, nslookup.exe, netstat.exe, arp.exe, and ping.exe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `ba9db6b2-3d05-42ae-8aee-3a15bbe29f27` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Discovery, Execution |
| **Techniques** | T1140, T1010, T1059 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Ransomware/QakbotDiscoveryActivities.yaml) |

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
