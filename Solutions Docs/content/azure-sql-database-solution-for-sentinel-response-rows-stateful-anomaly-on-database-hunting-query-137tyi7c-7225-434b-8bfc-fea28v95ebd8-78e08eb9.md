# Response rows stateful anomaly on database - hunting query

Goal: To detect anomalous data exfiltration. This query detects SQL queries that accessed a large number of rows, which is significantly higher than normal for this database. This is a hunting query, so the training and the detection occur on the whole time window (controlled by 'queryPeriod' parameter). The user can set the minimal threshold for anomaly by changing the threshold parameters volThresholdZ and volThresholdQ (higher thresholds will detect only more severe anomalies).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `137tyi7c-7225-434b-8bfc-fea28v95ebd8` |
| **Severity** | Medium |
| **Tactics** | Exfiltration |
| **Techniques** | T1537, T1567 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Hunting%20Queries/HuntingQuery-VolumeResponseRowsStatefulAnomalyOnDatabase.yaml) |

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

