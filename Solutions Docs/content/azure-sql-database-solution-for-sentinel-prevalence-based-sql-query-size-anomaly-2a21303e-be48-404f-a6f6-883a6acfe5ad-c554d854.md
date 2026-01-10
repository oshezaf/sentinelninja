# Prevalence Based SQL Query Size Anomaly

'Applications using SQL will generally make repeated similar requests for data as users interact with the application, this hunting query will find instances where an unusual number of tokens have been seen grouped on the client application and username. The query will calculate the prevalence for the token sizes based on historical activity from grouped application and user and show instances where an unusual number of tokens were observed. This query is designed to be run against application a

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `2a21303e-be48-404f-a6f6-883a6acfe5ad` |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Hunting%20Queries/HuntingQuery-PrevalenceBasedQuerySizeAnomaly.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

