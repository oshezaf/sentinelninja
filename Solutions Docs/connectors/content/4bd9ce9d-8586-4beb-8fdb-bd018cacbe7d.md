# Potential Ransomware activity related to Cobalt Strike

This query searches for alerts related to suspected ransomware and Cobalt Strike activity, a tool used in numerous ransomware campaigns. It looks for alerts that indicate potential ransomware activity, such as attempts to clear security event logs, delete backup files, and execute Cobalt Strike malware.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `4bd9ce9d-8586-4beb-8fdb-bd018cacbe7d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, Persistence, DefenseEvasion, Impact |
| **Techniques** | T1059, T1078, T1070, T1490 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Ransomware/PotentialCobaltStrikeRansomwareActivity.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
