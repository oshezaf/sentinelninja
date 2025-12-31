# SlashNext Security Events for Microsoft Sentinel - Get customer incidents and log

The playbook will run after every 3 mintues to get list of events occured to a customer in that time and log them in Log Analytic Workspace.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SlashNext SIEM](../solutions/slashnext-siem.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SlashNext%20SIEM/Playbook/SlashNextSecurityEventForMSSentinel/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`SlashNext_CL`](../tables/slashnext-cl.md) | write |

---

**Browse:**

- [← Back to Playbooks](../playbooks.md)
- [← Back to SlashNext SIEM](../solutions/slashnext-siem.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
