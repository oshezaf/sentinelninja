# Suspicious Process Injection from Office application

This query detects process injections using CreateRemoteThread, QueueUserAPC or SetThread context APIs, originating from an Office process (only Word/Excel/PowerPoint)that might contains macros. Performing process injection from a macro is a common technique by attackers to escape out of the Office process into something longer running.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `a4d8e681-6f30-440a-a2f3-c312bc1389d0` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution |
| **Techniques** | T1204 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/OfficeProcessInjection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceEvents`](../tables/deviceevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
