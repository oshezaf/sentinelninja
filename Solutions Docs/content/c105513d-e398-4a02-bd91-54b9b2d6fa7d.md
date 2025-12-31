# Outgoing connection attempts stateful anomaly on database

This query detects batches of distinct SQL queries that execute (or attempt to) commands that could indicate potential security issues - such as attempts to access external sites or resources (e.g. for downloading malicious content).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `c105513d-e398-4a02-bd91-54b9b2d6fa7d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Analytic%20Rules/Detection-HotwordsOutgoingStatefulAnomalyOnDatabase.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
