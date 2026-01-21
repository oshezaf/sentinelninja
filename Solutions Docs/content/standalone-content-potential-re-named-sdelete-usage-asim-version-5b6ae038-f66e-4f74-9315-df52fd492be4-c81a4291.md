# Potential re-named sdelete usage (ASIM Version)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection looks for command line parameters associated with the use of Sysinternals sdelete (https://docs.microsoft.com/sysinternals/downloads/sdelete) to delete multiple files on a host's C drive. A threat actor may re-name the tool to avoid detection and then use it for destructive attacks on a host. This detection uses the ASIM imProcess parser, this will need to be deployed before use - https://docs.microsoft.com/azure/sentinel/normalization

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `5b6ae038-f66e-4f74-9315-df52fd492be4` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Impact |
| **Techniques** | T1485, T1036 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Detections/Analytic%20Rules/ASimProcess/Potentialre-namedsdeleteusage%28ASIMVersion%29.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`imProcess`](../tables/improcess.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Standalone Content](../solutions/standalone-content.md)

