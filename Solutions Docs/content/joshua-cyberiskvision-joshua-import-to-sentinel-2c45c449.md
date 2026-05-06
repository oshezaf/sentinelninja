# Joshua Import To Sentinel

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Joshua Cyberiskvision provides two main use cases: Get Indicators and Alert Enrichment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Joshua-Cyberiskvision](../solutions/joshua-cyberiskvision.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Joshua-Cyberiskvision/Playbooks/Joshua-Import-To-Sentinel/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `microsoftgraphsecurity` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftgraphsecurity`** (managedApi):
- *Submit_multiple_tiIndicators*: method=`post`, path=`/beta/security/tiIndicators/submitTiIndicators`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Joshua-Cyberiskvision](../solutions/joshua-cyberiskvision.md)

