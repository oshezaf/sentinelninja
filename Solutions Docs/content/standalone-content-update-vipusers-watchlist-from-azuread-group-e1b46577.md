# Update-VIPUsers-Watchlist-from-AzureAD-Group

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Benjamin Kovacevic

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Update-VIPUsers-Watchlist-from-AzureAD-Group/azuredeploy.json) |

## Logic App Connectors

This playbook uses **5** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuremonitorlogs` | Managed | 1 | 2 |
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 3 |
| `office365` | Managed | 1 | 0 |
| `http` | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_-_if_user_is_in_VIP_watchlist*: method=`post`, path=`/queryData`
- *Run_query_and_list_results_-_Get_VIP_Watchlist_members*: method=`post`, path=`/queryData`

**`microsoftsentinel`** (managedApi):
- *Watchlists_-_Delete_a_watchlist_item*: method=`delete`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem/@{encodeURIComponent(items('For_each_VIP_Watchlist_member')?['_DTItemId'])}`
- *Watchlists_-_Add_a_new_watchlist_item_-_with_SID*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem`
- *Watchlists_-_Add_a_new_watchlist_item_-_VIP_Watchlist_-_without_SID*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem`

**`http`** (builtin):
- *HTTP_-_check_is_the_Watchlist_user_still_member_of_Azure_AD_group*: method=`POST`, uri=`https://graph.microsoft.com/beta/users/@{items('For_each_VIP_Watchlist_member')?['User Principal Name']}/checkMemberGroups`
- *HTTP_-_does_user_have_SID*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/users/@{items('For_each_member_of_VIP_Azure_AD_group')?['userPrincipalName']}?$select=onPremisesSecurityIdentifier`
- *HTTP_-_Get_Group_details*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/groups/@{variables('VIP Group ID')}`
- *HTTP_-_Get_VIP_Azure_AD_Group_Members*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/groups/@{variables('VIP Group ID')}/members`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

