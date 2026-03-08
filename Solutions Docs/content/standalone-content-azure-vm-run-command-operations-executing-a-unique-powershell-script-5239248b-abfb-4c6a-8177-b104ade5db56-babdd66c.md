# Azure VM Run Command operations executing a unique PowerShell script

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when Azure Run command is used to execute a PowerShell script on a VM that is unique. The uniqueness of the PowerShell script is determined by taking a combined hash of the cmdLets it imports and the file size of the PowerShell script. Alerts from this detection indicate a unique PowerShell was executed in your environment.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `5239248b-abfb-4c6a-8177-b104ade5db56` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, Execution |
| **Techniques** | T1570, T1059.001 |
| **Required Connectors** | [AzureActivity](../connectors/azureactivity.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/AzureActivity/RareRunCommandPowerShellScript.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

