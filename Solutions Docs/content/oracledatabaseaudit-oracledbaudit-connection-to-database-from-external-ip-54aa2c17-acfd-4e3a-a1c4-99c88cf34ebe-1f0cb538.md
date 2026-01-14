# OracleDBAudit - Connection to database from external IP

Detects when connection to database is from external IP source.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) |
| **ID** | `54aa2c17-acfd-4e3a-a1c4-99c88cf34ebe` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Collection, Exfiltration |
| **Techniques** | T1190, T1133, T1078, T1119, T1029 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit/Analytic%20Rules/OracleDBAuditConnectFromExternalIp.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to OracleDatabaseAudit](../solutions/oracledatabaseaudit.md)

