# HDInsightSparkTaskEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightSparkTaskEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparktaskevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (55 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightsparktaskevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationId | string | The application ID of the application producing the record. |
| AttemptId | string | The ID of task attempt. |
| BytesRead | long | The number bytes read during the task. |
| BytesWritten | long | The number of bytes written by the task. |
| ClusterDnsName | string | The DNS name of the cluster running the task. |
| ClusterTenantId | string | The tenant ID of the cluster running the task. |
| DiskBytesSpilled | long | The number of disk bytes spilled. |
| EndReason | string | Reason why the task ended. |
| ExecutorCPUTime | long | The CPU time consumed by the task executor. |
| ExecutorDeserializeCPUTime | long | The CPU time the task executor spent deserializing. |
| ExecutorDeserializeTime | long | The time the task executor spent deserializing. |
| ExecutorId | string | The ID executor. |
| ExecutorRunTime | long | The time task executor spent running. |
| Failed | bool | Boolean describing whether the task failed. |
| FinishTime | datetime | The time (UTC) the task finished. |
| Host | string | The FQDN of the host running the task. |
| InputMetrics | long | The metrics associated with the task input. |
| IpAddress | string | The IP Address of the node running the task. |
| JvmGcTime | long | The time the JVM spent garbage collecting. |
| Killed | bool | Boolean describing whether the task was killed. |
| LaunchTime | datetime | The time (UTC) the task was launched. |
| MemoryBytesSpilled | long | The bytes of memory spilled. |
| NumUpdatedBlockStatuses | long | The number updated block statuses during the task. |
| OutputMetrics | long | The metrics associated with the task output. |
| PeakExecutionMemory | long | The peak amount of memory used during execution. |
| RecordsRead | long | The number of records read during the task. |
| RecordsWritten | long | The number of records written by the task. |
| Region | string | The region of the cluster running the task. |
| ResultSerializationTime | long | The serialization time spent while getting the result. |
| ResultSize | long | Size of the result. |
| Role | string | The type of node running the task. |
| SchedulerDelay | long | The amount of delay the scheduler experienced. |
| ShuffleBytesWritten | long | The bytes written during the shuffle task. |
| ShuffleFetchWaitTime | long | The time spent waitng for fetching. |
| ShuffleLocalBlocksFetched | long | The number of local blocks fethced during the shuffle task. |
| ShuffleReadMetrics | long | The metrics associated with shuffle reads. |
| ShuffleRecordsWritten | long | The number of records written during the shuffle task. |
| ShuffleRemoteBlocksFetched | long | The number of remote blocks fethced during the shuffle task. |
| ShuffleTotalBlocksFetched | long | The number of blocks fethced during the shuffle task. |
| ShuffleTotalBytesRead | long | The number bytes read during the shuffle task. |
| ShuffleWriteMetrics | long | The metrics associated with shuffle writes. |
| ShuffleWriteTime | long | The time spent writing during the shuffle task. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StageId | string | The ID of the stage associated with the task. |
| TaskId | string | The ID of the task. |
| TaskType | string | The task type. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| UpdatedBlocks | long | The number of updated blocks. |
| UserSubscriptionId | string | The subscription ID of the cluster running the task |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

