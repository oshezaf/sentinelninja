# Veeam-StartSecurityComplianceAnalyzer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This Microsoft Sentinel playbook initiates and monitors Veeam Security and Compliance Analyzer sessions via HTTP trigger.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Playbooks/Veeam-StartSecurityComplianceAnalyzer/Veeam-StartSecurityComplianceAnalyzer.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `function` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`function`** (builtin):
- *StartSecurityComplianceAnalyzer*: functionId=`[concat(variables('functionAppId'), '/functions/StartSecurityComplianceAnalyzerAsync')]`
- *GetSession*: functionId=`[concat(variables('functionAppId'), '/functions/GetSessionAsync')]`
- *GetSecurityComplianceAnalyzerResultsAsync*: functionId=`[concat(variables('functionAppId'), '/functions/GetSecurityComplianceAnalyzerResultsAsync')]`

</details>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Veeam](../solutions/veeam.md)

