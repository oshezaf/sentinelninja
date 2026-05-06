# Update-VIPUsers-Watchlist-from-AzureAD-Group

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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
| [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) | Managed | 1 | 2 |
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 0 |
| [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) | Managed | 0 | 3 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 0 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuremonitorlogs`](../logic-apps/managed-azuremonitorlogs.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Run_query_and_list_results_-_if_user_is_in_VIP_watchlist | post | `/queryData` | — |
| Run_query_and_list_results_-_Get_VIP_Watchlist_members | post | `/queryData` | — |

#### [`microsoftsentinel`](../logic-apps/managed-microsoftsentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Watchlists_-_Delete_a_watchlist_item | delete | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem/@{encodeURIComponent(items('For_each_VIP_Watchlist_member')?['_DTItemId'])}` | — |
| Watchlists_-_Add_a_new_watchlist_item_-_with_SID | put | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem` | — |
| Watchlists_-_Add_a_new_watchlist_item_-_VIP_Watchlist_-_without_SID | put | `/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionID'))}/resourceGroups/@{encodeURIComponent(parameters('ResourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('MicrosoftSentinelWorkspaceID'))}/watchlists/@{encodeURIComponent('VIPUsers')}/watchlistItem` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_check_is_the_Watchlist_user_still_member_of_Azure_AD_group | POST | `https://graph.microsoft.com/beta/users/@{items('For_each_VIP_Watchlist_member')?['User Principal Name']}/checkMemberGroups` | — |
| HTTP_-_does_user_have_SID | GET | `https://graph.microsoft.com/v1.0/users/@{items('For_each_member_of_VIP_Azure_AD_group')?['userPrincipalName']}?$select=onPremisesSecurityIdentifier` | — |
| HTTP_-_Get_Group_details | GET | `https://graph.microsoft.com/v1.0/groups/@{variables('VIP Group ID')}` | — |
| HTTP_-_Get_VIP_Azure_AD_Group_Members | GET | `https://graph.microsoft.com/v1.0/groups/@{variables('VIP Group ID')}/members` | — |

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

