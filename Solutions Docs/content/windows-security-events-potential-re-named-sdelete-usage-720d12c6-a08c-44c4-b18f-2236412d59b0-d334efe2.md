# Potential re-named sdelete usage

This detection looks for command line parameters associated with the use of Sysinternals sdelete (https://docs.microsoft.com/sysinternals/downloads/sdelete) to delete multiple files on a host's C drive. A threat actor may re-name the tool to avoid detection and then use it for destructive attacks on a host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Security Events](../solutions/windows-security-events.md) |
| **ID** | `720d12c6-a08c-44c4-b18f-2236412d59b0` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Impact |
| **Techniques** | T1485, T1036 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Security%20Events/Analytic%20Rules/Potentialre-namedsdeleteusage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Security Events](../solutions/windows-security-events.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
