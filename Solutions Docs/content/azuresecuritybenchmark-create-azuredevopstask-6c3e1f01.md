# Create-AzureDevOpsTask

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create the Azure DevOps task filled with the Microsoft Sentinel incident details.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureSecurityBenchmark/Playbooks/Open_DevOpsTaskRecommendation-ASB/Open_DevOpsTaskRecommendation-ASB.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `visualstudioteamservices` | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`visualstudioteamservices`** (managedApi):
- *Create_a_work_item*: method=`patch`, path=`/@{encodeURIComponent('test')}/_apis/wit/workitems/$@{encodeURIComponent('Task')}`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to AzureSecurityBenchmark](../solutions/azuresecuritybenchmark.md)

