# Block AAD user or admin - incident

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

For each account entity included in the incident, this playbook will disable the user in Azure Active Directoy, add a comment to the incident that contains this alert and notify manager if available. Note: This playbook will disable admin users as well!

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Block-AADUserOrAdmin/incident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 6 |
| `office365` | Managed | 1 | 3 |
| `http` | Built-in | 0 | 6 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Get_user_-_details*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}`
- *Get_user_-_admin_details*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}`

**`microsoftsentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Add_comment_to_incident_-_with_manager_-_no_admin*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_no_manager_-_no_admin*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_admin_sign_in_block_is_rejected*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_with_manager_-_admin_user*: method=`post`, path=`/Incidents/Comment`
- *Add_comment_to_incident_-_no_manager_-_admin_user*: method=`post`, path=`/Incidents/Comment`

**`office365`** (managedApi):
- *Send_an_email_-_to_manager_-_no_admin*: method=`post`, path=`/v2/Mail`
- *Send_an_email_-_to_manager_-_admin_user*: method=`post`, path=`/v2/Mail`
- *Send_an_email_-_no_manager_-_admin_user*: method=`post`, path=`/v2/Mail`

**`http`** (builtin):
- *HTTP*: method=`PATCH`, uri=`https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}`
- *HTTP_-_get_user_manager*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/manager`
- *HTTP_-_re-enable_admin_user*: method=`PATCH`, uri=`https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}`
- *HTTP_-_get_admin_manager*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/manager`
- *HTTP_-_Block_admin_user*: method=`PATCH`, uri=`https://graph.microsoft.com/beta/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}`
- *HTTP_-_get_admin_roles*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix'])}/memberOf/microsoft.graph.directoryRole`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

