# OracleDBAudit - SQL injection patterns

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects common known SQL injection patterns used in automated scripts.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) |
| **ID** | `ab352f0d-7c55-4ab2-a22e-b1c2d995e193` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit/Analytic%20Rules/OracleDBAuditSQLInjectionPatterns.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to OracleDatabaseAudit](../solutions/oracledatabaseaudit.md)

