# User removed from SQL Server Roles

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies user removed from a SQL Server Role. It relies on the SQLEvent KQL Parser function.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md) |
| **ID** | `5dd79877-8066-4ce4-ae03-eedd8ebf04f8` |
| **Tactics** | Persistence, PrivilegeEscalation, Impact |
| **Techniques** | T1098, T1078, T1496 |
| **Required Connectors** | [AzureMonitor(WindowsEventLogs)](../connectors/azuremonitor-windowseventlogs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Windows%20SQL%20Server%20Database%20Audit/Hunting%20Queries/SQL-UserRemovedFromServerRole.yaml) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Microsoft Windows SQL Server Database Audit](../solutions/microsoft-windows-sql-server-database-audit.md)

