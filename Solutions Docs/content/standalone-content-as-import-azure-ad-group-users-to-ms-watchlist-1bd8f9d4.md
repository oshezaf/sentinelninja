# AS-Import-Azure-AD-Group-Users-to-MS-Watchlist

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is intended to be run on a schedule. It will add the users from a specified Azure Active Directory group to a Microsoft Sentinel watchlist.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/AS-Import-Azure-AD-Group-Users-to-MS-Watchlist/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuread` | Managed | 1 | 1 |
| `azuresentinel` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuread`** (managedApi):
- *Get_group_members*: method=`get`, path=`[concat('/v1.0/groups/@{encodeURIComponent(''', parameters('GroupId'), ''')}/members')]`

**`azuresentinel`** (managedApi):
- *Watchlists_-_Add_a_new_watchlist_item*: method=`put`, path=`[concat('/Watchlists/subscriptions/@{encodeURIComponent(''', subscription().subscriptionId, ''')}/resourceGroups/@{encodeURIComponent(''', resourceGroup().name, ''')}/workspaces/@{encodeURIComponent(''', parameters('WorkspaceId'), ''')}/watchlists/@{encodeURIComponent(''', parameters('WatchlistName'), ''')}/watchlistItem')]`
- *Watchlists_-_Get_all_watchlist_Items_for_a_given_watchlist*: method=`get`, path=`[concat('/Watchlists/subscriptions/@{encodeURIComponent(''', subscription().subscriptionId, ''')}/resourceGroups/@{encodeURIComponent(''', resourceGroup().name, ''')}/workspaces/@{encodeURIComponent(''', parameters('WorkspaceId'), ''')}/watchlists/@{encodeURIComponent(''', parameters('WatchlistName'), ''')}/watchlistItems')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

