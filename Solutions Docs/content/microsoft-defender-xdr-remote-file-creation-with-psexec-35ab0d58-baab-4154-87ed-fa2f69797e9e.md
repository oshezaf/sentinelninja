# Remote File Creation with PsExec

This query was originally published in the threat analytics report, Ryuk ransomware. There is also a related blog. Ryuk is human-operated ransomware. Much like DoppelPaymer ransomware, Ryuk is spread manually, often on networks that are already infected with Trickbot. Ryuk operators use PsExec to manually spread the ransomware to other devices. The following query detects remote file creation events that might indicate an active attack. The See also section below lists links to other queries ass

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| **ID** | `35ab0d58-baab-4154-87ed-fa2f69797e9e` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1570 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Defender%20XDR/Analytic%20Rules/Lateral%20Movement/RemoteFileCreationWithPsExec.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceFileEvents`](../tables/devicefileevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
