# Access Token Manipulation - Create Process with Token

This query detects the use of the 'runas' command and checks whether the account used to elevate privileges isn't the user's own admin account.  Additionally, it will match this event to the logon events - to check whether it has been successful as well as augment the event with the new SID.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `8df80270-b4fa-4a7a-931e-8d17c0b321ae` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1134.002 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/CreateProcessWithToken.yaml) |

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
