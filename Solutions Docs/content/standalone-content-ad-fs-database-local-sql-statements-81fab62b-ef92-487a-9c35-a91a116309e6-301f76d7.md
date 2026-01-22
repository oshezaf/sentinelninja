# AD FS Database Local SQL Statements

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This hunting query uses Application events from the "MSSQL$MICROSOFT##WID" provider to collect SQL statements run against an AD FS database (e.g Windows Internal Database (WID)). A threat actor might want to extract the AD FS data configuration settings with a SQL statement or modify it with an UPDATE SQL statement. In order to use this query you need to create a server audit and database audit specification on your AD FS database. Reference: https://github.com/Azure/SimuLand/blob/main/3_simula

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `81fab62b-ef92-487a-9c35-a91a116309e6` |
| **Severity** | Medium |
| **Tactics** | Collection |
| **Techniques** | T1005 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SecurityEvent/ADFSDBLocalSqlStatements.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

