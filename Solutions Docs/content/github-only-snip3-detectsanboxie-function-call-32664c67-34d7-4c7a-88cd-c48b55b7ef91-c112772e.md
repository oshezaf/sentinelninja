# snip3-detectsanboxie-function-call

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Snip3 is a family of related remote access trojans. Although the malware in this family contain numerous small variations, they all exhibit similar behaviors and techniques. The following query looks for a function call to a method named DetectSandboxie. This method is used in RevengeRAT and AsyncRAT instances involved in a campaign targeting the aviation industry, first observed in 2021. It has also been associated in the past other malware, such as WannaCry and QuasarRAT. Individual PowerShell

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `32664c67-34d7-4c7a-88cd-c48b55b7ef91` |
| **Tactics** | Execution, Defense evasion |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Campaigns/snip3-detectsanboxie-function-call.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType == "PowerShellCommand"` | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

