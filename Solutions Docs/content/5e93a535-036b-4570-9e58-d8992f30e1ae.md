# OracleDBAudit - User activity after long inactivity time

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

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to OracleDatabaseAudit](../solutions/oracledatabaseaudit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
