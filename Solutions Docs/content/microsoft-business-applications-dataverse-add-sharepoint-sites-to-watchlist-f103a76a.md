# Dataverse: Add SharePoint sites to watchlist

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook is used to add new or updated SharePoint document management sites into the configuration watchlist. When combined with a scheduled analytics rule monitoring the Dataverse activity log, this Playbook will trigger when a new SharePoint document management site mapping is added. The site will be added to a watchlist to extend monitoring coverage.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Playbooks/Dataverse-Add-SharePoint-Site/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Watchlists_-_Add_a_new_Watchlist_Item*: method=`put`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent(parameters('watchlistAlias'))}/watchlistItem`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)

