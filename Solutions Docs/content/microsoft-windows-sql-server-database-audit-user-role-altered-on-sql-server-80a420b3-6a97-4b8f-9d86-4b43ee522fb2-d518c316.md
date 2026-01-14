# User Role altered on SQL Server

This hunting query identifies user role altered on SQL Server. It relies on the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `80a420b3-6a97-4b8f-9d86-4b43ee522fb2` |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1098, T1078 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor-windowseventlogs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-UserRoleChanged.yaml) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md)

