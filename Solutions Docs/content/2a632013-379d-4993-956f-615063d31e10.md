# Affected rows stateful anomaly on database

'Goal: To detect anomalous data change/deletion. This query detects SQL queries that changed/deleted a large number of rows, which is significantly higher than normal for this database. The detection is calculated inside recent time window (defined by 'detectionWindow' parameter), and the anomaly is calculated based on previous training window (defined by 'trainingWindow' parameter). The user can set the minimal threshold for anomaly by changing the threshold parameters volThresholdZ and volThre

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `2a632013-379d-4993-956f-615063d31e10` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485, T1565, T1491 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Analytic%20Rules/Detection-VolumeAffectedRowsStatefulAnomalyOnDatabase.yaml) |

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
