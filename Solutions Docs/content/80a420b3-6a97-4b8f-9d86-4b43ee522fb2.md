# User Role altered on SQL Server

This hunting query identifies user role altered on SQL Server. It relies on the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `80a420b3-6a97-4b8f-9d86-4b43ee522fb2` |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1098, T1078 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor%28windowseventlogs%29.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-UserRoleChanged.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
