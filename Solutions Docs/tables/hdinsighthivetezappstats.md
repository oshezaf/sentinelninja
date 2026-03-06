# HDInsightHiveTezAppStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightHiveTezAppStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsighthivetezappstats) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (31 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsighthivetezappstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AMContainerLogs | string | The Application Master? container logs. |
| ApplicationId | string | The ID of the Application that the metrics describe. |
| ApplicationName | string | The name of the application that the metrics describe. |
| ApplicationType | string | The type of application. |
| ClusterId | long | The final status of the application if it has reached a terminal state. |
| ClusterName | string | Name of cluster. |
| ClusterType | string | Name of cluster. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| ElapsedTime | long | The time elapsed while the application was running. |
| FinalStatus | string | The final status of the application if it has reached a terminal state. |
| FinishedTime | long | The time the application finished. |
| HostName | string | Name of host where log was emitted. |
| LogAggregationStatus | string | The log aggregation status. |
| MetricName | string | Name of the metric for the record (e.g. AppsCompleted, AppsKilled, AppsFailed , etc). |
| MetricValue | real | Value of metric in the record. |
| OperationName | string | The operation associated with log record. |
| Queue | string | The queue of the application. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartedTime | long | The time the application started. |
| State | string | The state of the application. |
| Tags | dynamic | Information about the record. For example a record may be tagged with 'yarn' if it is in the yarn context. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TrackingUI | string | ?. |
| Type | string | The name of the table |
| UnmanagedApplication | bool | True if application is unmanaged, false if otherwise. |
| User | string | The name of the user of the application. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

