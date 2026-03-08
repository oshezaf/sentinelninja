# PureStorageFlashArrayParserV1

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Parsers Index](parsers-index.md)

---

Parser to extract Pure Storage FlashArray related info from log

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Pure Storage FlashArray Parser |
| Location | Solution |
| Solution | [Pure Storage](../solutions/pure-storage.md) |
| Version | 1.0.0 |
| Last Updated | Jan 29th 2024 |
| Category | PureStorageFlashArrayParser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pure%20Storage/Parsers/PureStorageFlashArrayParser.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "purity.alert"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Parsers Index](parsers-index.md)

