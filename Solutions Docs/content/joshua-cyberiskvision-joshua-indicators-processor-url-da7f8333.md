# Joshua Indicators Processor URL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Joshua Cyberiskvision provides two main use cases: Get Indicators and Alert Enrichment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Joshua-Cyberiskvision](../solutions/joshua-cyberiskvision.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Joshua-Cyberiskvision/Playbooks/Joshua-Indicators-Processor-URL/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `http` | Built-in | 0 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`http`** (builtin):
- *HTTP_-_Joshua_API_2*: method=`GET`, uri=`[parameters('Joshua_API_URI')]`
- *HTTP_-_Joshua_API*: method=`GET`, uri=`[parameters('Joshua_API_URI')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Joshua-Cyberiskvision](../solutions/joshua-cyberiskvision.md)

