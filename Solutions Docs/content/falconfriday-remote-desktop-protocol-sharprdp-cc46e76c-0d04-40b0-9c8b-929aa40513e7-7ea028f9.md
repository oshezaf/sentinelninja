# Remote Desktop Protocol - SharpRDP

This detection monitors for the behavior that SharpRDP exhibits on the target system. The most relevant is leveraging taskmgr.exe to gain elevated execution, which means that taskmgr.exe is creating unexpected child processes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `cc46e76c-0d04-40b0-9c8b-929aa40513e7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1021.001 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/RemoteDesktopProtocol.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceLogonEvents`](../tables/devicelogonevents.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
