# HDInsightHiveQueryAppStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightHiveQueryAppStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsighthivequeryappstats) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsighthivequeryappstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClientIpAddress | string | The query client's IP address. |
| ClusterName | string | Name of cluster. |
| ClusterType | string | Type of cluster (e.g. LLAP or Hadoop). |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| Domain | string | The domain associated with the query. |
| Entity | string | Name of the query's entity. |
| EntityType | string | The type of the query's entity. |
| ExecutionMode | string | The execution mode of the query. |
| HiveInstanceType | string | The type of hive instance running the query. |
| HostName | string | Name of host where log was emitted. |
| IsMapReduce | bool | True if the query is a MapReduce query. |
| IsTez | bool | True if the query is a Tez query. |
| MetricName | string | Name of the metric for the record (e.g. AppsCompleted, AppsKilled, AppsFailed , etc). |
| MetricValue | real | Value of metric in the record. |
| OperationName | string | The operation associated with log record. |
| QueryCompletionTime | long | Time that query was completed. |
| QuerySubmissionTime | long | Time that query was submitted. |
| Queue | string | The queue the query was served from. |
| RequestUser | string | The client user that submitted the request. |
| SessionId | string | The session ID of the query. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TablesRead | string | The tables read by the query. |
| Tags | dynamic | Information about the record. For example a record may be tagged with 'yarn' if it is in the yarn context. |
| TenantId | string | The Log Analytics workspace ID |
| ThreadName | string | The name of the thread running the query. |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| User | string | The user of the Hive instance executing the query. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

