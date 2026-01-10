# User removed from SQL Server SecurityAdmin Group

This hunting query identifies user removed from the SecurityAdmin group of SQL Server. It relies on the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `f35b879c-c836-4502-94f2-c76b7f06f02d` |
| **Tactics** | Persistence, PrivilegeEscalation, Impact |
| **Techniques** | T1098, T1078, T1496 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor-windowseventlogs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-UserRemovedFromSecurityAdmin.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

