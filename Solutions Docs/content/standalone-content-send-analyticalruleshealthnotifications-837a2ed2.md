# Send-AnalyticalRulesHealthNotifications

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Send notifications on Azure Sentinel Analytical Rules - auto-disabled rules

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Send-AnalyticalRulesHealthNotifications/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `office365` | Managed | 1 | 1 |
| `teams` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`

**`teams`** (managedApi):
- *Post_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/@{encodeURIComponent('Flow bot')}/location/@{encodeURIComponent('Channel')}`

**`http`** (builtin):
- *HTTP*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{variables('SubscriptionId')}/resourceGroups/@{variables('LogAnalyticsResourceGroup')}/providers/Microsoft.OperationalInsights/workspaces/@{variables('LogAnalyticsWorkspaceName')}/providers/Microsoft.SecurityInsights/alertRules?api-version=2020-01-01`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

