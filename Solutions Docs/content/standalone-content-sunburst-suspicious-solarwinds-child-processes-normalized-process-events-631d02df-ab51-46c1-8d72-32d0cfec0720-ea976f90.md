# SUNBURST suspicious SolarWinds child processes (Normalized Process Events)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies suspicious child processes of SolarWinds.Orion.Core.BusinessLayer.dll that may be evidence of the SUNBURST backdoor References: - https://www.fireeye.com/blog/threat-research/2020/12/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor.html - https://gist.github.com/olafhartong/71ffdd4cab4b6acd5cbcd1a0691ff82f To use this analytics rule, make sure you have deployed the [ASIM normalization parsers](https://aka.ms/ASimProcessEvent)'

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `631d02df-ab51-46c1-8d72-32d0cfec0720` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, Persistence |
| **Techniques** | T1059, T1543 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/ASimProcess/imProcess_SolarWinds_SUNBURST_Process-IOCs.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md)

