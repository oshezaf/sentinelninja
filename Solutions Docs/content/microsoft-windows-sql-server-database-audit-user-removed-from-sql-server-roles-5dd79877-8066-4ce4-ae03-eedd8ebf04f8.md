# User removed from SQL Server Roles

This hunting query identifies user removed from a SQL Server Role. It relies on the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `5dd79877-8066-4ce4-ae03-eedd8ebf04f8` |
| **Tactics** | Persistence, PrivilegeEscalation, Impact |
| **Techniques** | T1098, T1078, T1496 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor%28windowseventlogs%29.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-UserRemovedFromServerRole.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
