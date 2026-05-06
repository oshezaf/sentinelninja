# Dataverse: Send notification to manager

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook can be triggered when a Microsoft Sentinel incident is raised and will automatically send an email notificiation to the manager of the affected user entitites. The Playbook can be configured to send either to the Dynamics 365 manager, or using the manager in Office 365.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/Dataverse-Send-Manager-Notification/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `office365` | Managed | 1 | 0 |
| `office365_1` | Managed | 0 | 5 |
| `office365users` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_D365_Accounts*: method=`post`, path=`/entities/account`
- *Entities_-_Get_O365_Accounts*: method=`post`, path=`/entities/account`
- *Entities_-_Get_Missing_Instance_Accounts*: method=`post`, path=`/entities/account`

**`office365_1`** (managedApi):
- *Send_email_to_D365_manager*: method=`post`, path=`/v2/Mail`
- *Send_email_to_fallback_mailbox_(D365)*: method=`post`, path=`/v2/Mail`
- *Send_email_to_O365_manager*: method=`post`, path=`/v2/Mail`
- *Send_email_to_fallback_mailbox_(O365)*: method=`post`, path=`/v2/Mail`
- *Send_email_to_fallback_mailbox_(Missing_Instance)*: method=`post`, path=`/v2/Mail`

**`office365users`** (managedApi):
- *Get_manager_(V2)*: method=`get`, path=`/codeless/v1.0/users/@{encodeURIComponent(concat(items('For_each_O365_account')?['accountName'],'@',items('For_each_O365_account')?['upnSuffix']))}/manager`

**`http`** (builtin):
- *Get_D365_User*: method=`GET`, uri=`@{variables('InstanceUrl')}api/data/v9.2/systemusers?$select=_parentsystemuserid_value,windowsliveid&$filter=windowsliveid eq '@{concat(items('For_each_D365_account')?['accountName'],'@',items('For_each_D365_account')?['upnSuffix'])}'`
- *Get_Manager*: method=`GET`, uri=`@{variables('InstanceUrl')}api/data/v9.2/systemusers?$filter=_parentsystemuserid_value eq @{body('Get_D365_User')['value'][0]?['_parentsystemuserid_value']}&$select=firstname,lastname,internalemailaddress`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

