# Sysmon-v11.0

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Location | Legacy (/Parsers) |
| File Type | .txt |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/Sysmon/Sysmon-v11.0.txt) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Event`](../tables/event.md) | `EventID in "1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,3,4,5,6,7,8,9"`<br>`Source == "Microsoft-Windows-Sysmon"` | ✓ | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Parsers Index](parsers-index.md)

