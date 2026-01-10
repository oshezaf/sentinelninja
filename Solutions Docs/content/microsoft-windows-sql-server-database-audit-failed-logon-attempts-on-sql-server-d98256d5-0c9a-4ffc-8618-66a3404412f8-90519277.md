# Failed Logon Attempts on SQL Server

This query detects failed logons on SQL Server using the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `d98256d5-0c9a-4ffc-8618-66a3404412f8` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor-windowseventlogs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-Failed%20SQL%20Logons.yaml) |

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

