# Block Microsoft Entra ID user - Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

For each account entity included in the alert, this playbook will disable the user in Microsoft Entra ID, add a comment to the incident that contains this alert and notify manager if available. Note: This playbook will not disable admin user!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Playbooks/Block-AADUser/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 5 |
| `office365` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Get_user_-_details*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}`
- *Update_user_-_disable_user*: method=`patch`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}`

**`microsoftsentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_-_with_manager_-_no_admin*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_no_manager_-_no_admin*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_error_details*: method=`post`, path=`/Incidents/Comment`

**`office365`** (managedApi):
- *Send_an_email_-_to_manager_-_no_admin*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *HTTP_-_get_user_manager*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/manager`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

