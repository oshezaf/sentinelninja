# SCX Execute RunAs Providers

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query uses AUOMS security events to examine SCX Execute RunAs providers. These providers execute UNIX/Linux commands/scripts from /var/opt/microsoft/scx/tmp. SCXcore is used in various Microsoft products.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `0d298a1d-1a08-4f4b-8b28-687bfe0012e8` |
| **Severity** | High |
| **Tactics** | InitialAccess, Execution |
| **Techniques** | T1190, T1203 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Hunting%20Queries/SCXExecuteRunAsProviders.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "AUOMS_EXECVE"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Syslog](../solutions/syslog.md)

