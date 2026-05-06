# InfrequentCountryTriage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Sebastien Molendijk - Microsoft

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Resolve-McasInfrequentCountryAlerts/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 0 | 3 |
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Change_incident_status*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}/Status/@{encodeURIComponent('Closed')}`
- *Add_comment_to_incident_closed*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Add_comment_to_incident_open*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`

**`http`** (builtin):
- *Get_user_details*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{outputs('Compose_UPN')}`
- *Get_user_AAD_risk_status*: method=`GET`, uri=`https://graph.microsoft.com/beta/riskyUsers/@{body('Parse_user_details')?['id']}/`
- *Get_user_manager*: method=`GET`, uri=`https://graph.microsoft.com/beta/users/@{body('Parse_user_details')?['userPrincipalName']}/manager`
- *Get_user_OOF*: method=`POST`, uri=`https://graph.microsoft.com/beta/users/@{body('Parse_user_details')?['userPrincipalName']}/getMailTips`
- *Check_group_membership*: method=`POST`, uri=`https://graph.microsoft.com/beta/users/@{body('Parse_user_details')?['userPrincipalName']}/checkMemberGroups`
- *Resolve_Cloud_App_Security_alert*: method=`POST`, uri=`[concat(parameters('mcasAPI').tenantUrl, '/cas/api/v1/alerts/resolve/')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

