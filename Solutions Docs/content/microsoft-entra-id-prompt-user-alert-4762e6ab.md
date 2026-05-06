# Prompt User - Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will ask the user if they completed the action from the alert in Microsoft Sentinel. If so, it will close the incident and add a comment. If not, it will post a message to teams for the SOC to investigate and add a comment to the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Playbooks/Prompt-User/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 5 |
| `office365` | Managed | 1 | 0 |
| `teams` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Get_user*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@' ,items('For_each')?['UPNSuffix']))}`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)_2*: method=`post`, path=`/Incidents/Comment`

**`teams`** (managedApi):
- *Post_message_in_a_chat_or_channel*: method=`post`, path=`/beta/teams/conversation/message/poster/@{encodeURIComponent('User')}/location/@{encodeURIComponent('Channel')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

