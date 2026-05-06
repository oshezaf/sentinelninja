# IdentityProtection-EmailResponse

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Lior Tamir

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/IdentityProtection-EmailResponse/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureadip` | Managed | 1 | 4 |
| `azuresentinel` | Managed | 1 | 3 |
| `office365` | Managed | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureadip`** (managedApi):
- *Get_risky_user*: method=`get`, path=`/beta/riskyUsers/@{encodeURIComponent(if(greater(length(items('For_each')?['AadUserId']), 0), items('For_each')?['AadUserId'], items('For_each')?['UPNSuffix']))}`
- *Get_the_risk_history_of_a_risky_user*: method=`get`, path=`/beta/riskyUsers/@{encodeURIComponent(if(greater(length(items('For_each')?['AadUserId']), 0), items('For_each')?['AadUserId'], items('For_each')?['UPNSuffix']))}/history`
- *Confirm_a_risky_user_as_compromised*: method=`post`, path=`/beta/riskyUsers/confirmCompromised`
- *Dismiss_a_risky_user*: method=`post`, path=`/beta/riskyUsers/dismiss`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V2)*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Add_comment_to_incident_(V2)_2*: method=`put`, path=`/Comment/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/@{encodeURIComponent('Alert')}/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

