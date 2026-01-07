# OracleDBAudit - Unusual user activity on multiple tables

Detects when user queries many tables in short period of time.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [OracleDatabaseAudit](../solutions/oracledatabaseaudit.md) |
| **ID** | `75024e1c-26e7-4e73-821d-95e5decdd8db` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1119 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OracleDatabaseAudit/Analytic%20Rules/OracleDBAuditSelectOnManyTables.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to OracleDatabaseAudit](../solutions/oracledatabaseaudit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
