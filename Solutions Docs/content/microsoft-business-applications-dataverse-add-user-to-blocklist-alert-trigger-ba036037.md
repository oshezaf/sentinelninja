# Dataverse: Add user to blocklist (alert trigger)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook can be triggered on-demand when a Microsoft Sentinel alert is raised, allowing the analyst to add affected user entitites to a pre-defined Microsoft Entra group, resulting in blocked access. The Microsoft Entra group is used with Conditional Access to block sign-in to the Dataverse.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/Dataverse-Blocklist-Add-User-AlertTrigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Add_user_to_group*: method=`post`, path=`/v1.0/groups/@{encodeURIComponent(parameters('GroupId'))}/members/$ref`
- *Get_user*: method=`get`, path=`/v1.0/users/@{encodeURIComponent(concat(items('For_each')?['Name'], '@', items('for_each')?['UPNSuffix']))}`

**`azuresentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

