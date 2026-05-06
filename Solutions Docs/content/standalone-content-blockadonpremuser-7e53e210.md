# BlockADOnPremUser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Many organizations have an on-premises Active Directory infrastructure that is synced to Azure AD in the cloud. However, given that the on-prem side is the authoritative source of truth, any changes, such as disabling a user in the cloud (Azure AD), are overridden by the setting defined in the on-prem AD during the next sync. This presents challenges when you want to orchestrate a user property change from Azure that needs to persist even after the sync happens. To address the problem, this solu

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Block-OnPremADUser/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 1 |
| `azureautomation` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 3 |
| `office365` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Disable_Account_on_Azure_AD*: method=`patch`, path=`/v1.0/users/@{encodeURIComponent(body('Parse_JSON')?['AadUserId'])}`

**`azureautomation`** (managedApi):
- *Create_job*: method=`put`, path=`[concat('/subscriptions/', subscription().subscriptionId, '/resourceGroups/', parameters('automationAccountRG'), '/providers/Microsoft.Automation/automationAccounts/', parameters('automationAccountName'), '/jobs')]`

**`azuresentinel`** (managedApi):
- *Alert_-_Get_incident*: method=`get`, path=`/Incidents/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/alerts/@{encodeURIComponent(triggerBody()?['SystemAlertId'])}`
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`office365`** (managedApi):
- *Send_an_email_(V2)*: method=`post`, path=`/v2/Mail`
- *Send_an_email_(V2)_2*: method=`post`, path=`/v2/Mail`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

