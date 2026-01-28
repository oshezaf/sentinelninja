# OracleDBAudit - User activity after long inactivity time

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when an action was made by a user which last activity was observed more than 30 days ago.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) |
| **ID** | `5e93a535-036b-4570-9e58-d8992f30e1ae` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit/Analytic%20Rules/OracleDBAuditRareUserActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage contains "Oracle Unified Audit"` | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to OracleDatabaseAudit](../solutions/oracledatabaseaudit.md)

