# Add Host To Watchlist - Alert Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will add a host entity from the alert to a new or existing watchlist.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Watchlists Utilities](../solutions/watchlists-utilities.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchlists%20Utilities/Playbooks/Watchlist-Add-HostToWatchList/alert-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftsentinel`** (managedApi):
- *Watchlists_-_Add_a_new_watchlist_item_-_MDFC*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}/watchlistItem`
- *Watchlists_-_Create_a_new_watchlist_with_data_-_MDFC*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}`
- *Watchlists_-_Get_a_watchlist_by_alias_-_MDFC*: method=`get`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}`
- *Watchlists_-_Add_a_new_watchlist_item*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}/watchlistItem`
- *Watchlists_-_Create_a_new_watchlist_with_data*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}`
- *Watchlists_-_Get_a_watchlist_by_alias*: method=`get`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['WorkspaceSubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['WorkspaceResourceGroup'])}/workspaces/@{encodeURIComponent(triggerBody()?['WorkspaceId'])}/watchlists/@{encodeURIComponent(variables('Watchlist alias'))}`
- *Entities_-_Get_Hosts*: method=`post`, path=`/entities/host`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Watchlists Utilities](../solutions/watchlists-utilities.md)

