# Move-LogAnalytics-to-Storage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

~~Description:~~ ~~This Playbook runs on a daily schedule and moves 89 day old logs per data type to Blob storage in hourly incremements. The result of this Playbook is a structured file explorer within a data container in Azure that allows for easy file exploration and the ability to query the data from storage within a Log Analytics workspace.~~

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | GitHub Only |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Playbooks/%5BDeprecated%5DMove-LogAnalytics-to-Storage/%5BDeprecated%5Dazuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azureblob` | Managed | 1 | 1 |
| `azuremonitorlogs` | Managed | 1 | 2 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azureblob`** (managedApi):
- *Create_blob*: method=`post`, path=`/datasets/default/files`

**`azuremonitorlogs`** (managedApi):
- *Run_query_and_list_results_2*: method=`post`, path=`/queryData`
- *Run_query_and_list_results*: method=`post`, path=`/queryData`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md)

