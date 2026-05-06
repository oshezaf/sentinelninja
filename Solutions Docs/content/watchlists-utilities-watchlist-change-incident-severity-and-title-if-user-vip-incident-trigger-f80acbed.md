# Watchlist - Change Incident Severity and Title if User VIP - Incident Trigger

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook leverages Microsoft Sentinel Watchlists in order to adapt the incidents severity which include User entity and check it against VIP user list

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Watchlists Utilities](../solutions/watchlists-utilities.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchlists%20Utilities/Playbooks/Watchlist-ChangeIncidentSeverityandTitleIFUserVIP/incident-trigger/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftsentinel`** (managedApi):
- *Entities_-_Get_Accounts*: method=`post`, path=`/entities/account`
- *Change_incident_severity*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Severity/@{encodeURIComponent('Critical')}`
- *Change_incident_title_(V2)*: method=`put`, path=`/Case/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/@{encodeURIComponent(triggerBody()?['workspaceId'])}/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/@{encodeURIComponent('Incident')}/@{encodeURIComponent(triggerBody()?['object']?['properties']?['incidentNumber'])}/Title`
- *Watchlists_-_Get_all_watchlist_Items_for_a_given_watchlist*: method=`get`, path=`/Watchlists/subscriptions/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['SubscriptionId'])}/resourceGroups/@{encodeURIComponent(triggerBody()?['workspaceInfo']?['ResourceGroupName'])}/workspaces/@{encodeURIComponent(triggerBody()?['workspaceId'])}/watchlists/@{encodeURIComponent(parameters('WatchlistAlias'))}/watchlistItems`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Watchlists Utilities](../solutions/watchlists-utilities.md)

