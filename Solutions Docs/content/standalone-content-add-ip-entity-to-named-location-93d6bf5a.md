# Add IP Entity To Named Location

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will execute using an incident based trigger and add the IP entities to a Conditional Access Named Location

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | Standalone Content |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/Add-IP-Entity-To-Named-Location/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Entities_-_Get_IPs*: method=`post`, path=`/entities/ip`

**`http`** (builtin):
- *Get-Named-Location*: method=`GET`, uri=`https://graph.microsoft.com/beta/identity/conditionalAccess/namedLocations/@{body('Get-Named-Location-Id')['value'][0]['id']}`
- *Get-Named-Location-Id*: method=`GET`, uri=`https://graph.microsoft.com/v1.0/identity/conditionalAccess/namedLocations?$filter=displayName%20eq%20'@{encodeUriComponent(variables('namedLocationName'))}'`
- *Update-Named-Location*: method=`PATCH`, uri=`https://graph.microsoft.com/beta/identity/conditionalAccess/namedLocations/@{body('Get-Named-Location-Id')['value'][0]['id']}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

