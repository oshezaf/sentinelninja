# Veeam-CollectSecurityComplianceAnalyzerResult

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A Microsoft Sentinel playbook that automatically collects Veeam Security Compliance Analyzer results from Veeam Backup & Replication servers on schedule. The playbook gets Veeam Backup & Replication settings from watchlist and calls the GetSecurityComplianceAnalyzerResults function for each enabled server, ingesting the data into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-CollectSecurityComplianceAnalyzerResult/Veeam-CollectSecurityComplianceAnalyzerResult.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 1 |
| `function` | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Watchlists_-_Get_VBR_Settings*: method=`get`, path=`/Watchlists/subscriptions/@{encodeURIComponent(parameters('subscriptionId'))}/resourceGroups/@{encodeURIComponent(parameters('resourceGroupName'))}/workspaces/@{encodeURIComponent(parameters('workspaceId'))}/watchlists/@{encodeURIComponent('vbr_settings')}/watchlistItems`

**`function`** (builtin):
- *Collect_Best_Practice_Analysis_into_VeeamBestPracticeAnalysisTable_CL*: functionId=`[concat(variables('functionAppId'), '/functions/GetSecurityComplianceAnalyzerResultsAsync')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

