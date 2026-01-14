# Anomalous Query Execution Time

This hunting query will detect SQL queries that took an unusually long period of time to execute based on a calculated average execution time. The query groups based on the application and the username, making this query suitable for detecting exploitation of web applications, or other SQL backed applications with predictable behaviour.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `af55d5b0-6b4a-4874-8299-9d845bf7c1fd` |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Hunting%20Queries/HuntingQuery-ExecutionTimeAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)

