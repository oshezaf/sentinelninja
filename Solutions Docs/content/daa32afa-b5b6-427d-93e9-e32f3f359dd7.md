# Credential errors stateful anomaly on database

This query batches of distinct SQL queries that failed with error codes that might indicate malicious attempts to gain illegitimate access to the data. When Brute Force attacks are attempted, majority of logins will use wrong credentials, thus will fail with error code 18456. Thus, if we see a large number of logins with such error codes, this could indicate Brute Force attack.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure SQL Database solution for sentinel](../solutions/azure-sql-database-solution-for-sentinel.md) |
| **ID** | `daa32afa-b5b6-427d-93e9-e32f3f359dd7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [AzureSql](../connectors/azuresql.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20SQL%20Database%20solution%20for%20sentinel/Analytic%20Rules/Detection-ErrorsCredentialStatefulAnomalyOnDatabase.yaml) |

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
