# Update-Watchlist-With-NamedLocations

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: Maria de Sousa-Valadas </br> version: 1.1

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Update-Watchlist-With-NamedLocation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 0 | 1 |
| `keyvault` | Managed | 0 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Watchlists_-_Add_a_new_watchlist_item*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('SubscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceName'))}/watchlists/@{encodeURIComponent(parameters('watchlistAlias'))}/watchlistItem`

**`keyvault`** (managedApi):
- *Get_secret*: method=`get`, path=`/secrets/@{encodeURIComponent(parameters('KeyVault'))}/value`

**`http`** (builtin):
- *HTTP_-_Get_Named_Location_IPs*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/identity/conditionalAccess/namedLocations/@{parameters('NamedLocationID')}`
- *HTTP_-_Get_Watchlist*: method=`GET`, uri=`https://management.azure.com/subscriptions/@{parameters('SubscriptionId')}/resourceGroups/@{parameters('resourceGroupName')}/providers/Microsoft.OperationalInsights/workspaces/@{parameters('workspaceName')}/providers/Microsoft.SecurityInsights/watchlists/@{parameters('watchlistAlias')}/watchlistitems?api-version=2019-01-01-preview`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

