# GitLabAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

---

## Parser Information

| Attribute | Value |
|:----------|:------|
| Title | Parser for GitLabAudit |
| Location | Solution |
| Solution | [GitLab](../solutions/gitlab.md) |
| Version | 1.0.0 |
| Last Updated | 2023-08-23 |
| Category | Microsoft Sentinel Parser |
| File Type | .yaml |
| Source | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitLab/Parsers/GitLabAudit.yaml) |

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `Facility == "local7"`<br>`ProcessName == "GitLab-Audit-Logs"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · **Parsers** · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Parsers Index](parsers-index.md)

