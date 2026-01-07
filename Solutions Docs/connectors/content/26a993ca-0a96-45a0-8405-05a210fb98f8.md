# Progress MOVEIt File transfer folder count above threshold

Identifies Progress MOVEIt File Transfers  with distinct folder count above certain threshold in a 15min time period.  Please note that entity mapping for arrays is not supported, so when there is a single value in an array, we will pull that value from the array as a single string to populate the entity to support entity mapping features within Sentinel. Additionally, if the array is multivalued, we will input a string to indicate this with a unique hash so that matching will not occur.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| **ID** | `26a993ca-0a96-45a0-8405-05a210fb98f8` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration |
| **Techniques** | T1020 |
| **Required Connectors** | [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Windows%20Forwarded%20Events/Analytic%20Rules/moveit_file_transfer_folders_above_threshold.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Windows Forwarded Events](../solutions/windows-forwarded-events.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
