# Veeam-ChangeCollectionTime

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Microsoft Sentinel playbook adjusts the recurrence intervals for Veeam collection playbooks based on settings in the collection_schedule_settings watchlist.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-ChangeCollectionTime/ChangeCollectionTime.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Watchlists_-_Get_all_Collection_Times*: method=`get`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent(parameters('watchlistName'))}/watchlistItems`

**`http`** (builtin):
- *Get_Current_Workflow_Definition*: method=`GET`, uri=`@concat(parameters('environmentResourceManagerUrl'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Logic/workflows/', body('Parse_setting')?['properties.itemsKeyValue']?['CollectionPlaybookName'], '?api-version=', parameters('logicAppsApiVersion'))`
- *Update_Events_Workflow*: method=`PUT`, uri=`@concat(parameters('environmentResourceManagerUrl'), '/subscriptions/', parameters('subscriptionId'), '/resourceGroups/', parameters('resourceGroupName'), '/providers/Microsoft.Logic/workflows/', body('Parse_setting')?['properties.itemsKeyValue']?['CollectionPlaybookName'], '?api-version=', parameters('logicAppsApiVersion'))`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

