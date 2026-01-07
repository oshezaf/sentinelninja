# Oracle suspicious command execution

The query searches process creation events that are indicative of an attacker spawning OS commands from an Oracle database.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `e6c5ff42-0f42-4cec-994a-dabb92fe36e1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, PrivilegeEscalation |
| **Techniques** | T1210, T1611 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/OracleSuspiciousCommandExecution.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to FalconFriday](../solutions/falconfriday.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
