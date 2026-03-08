# HDInsightStormTopologyMetrics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HDInsightStormTopologyMetrics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightstormtopologymetrics) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (60 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/hdinsightstormtopologymetrics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Acked | real | The number of Tuple "trees" successfully processed. A value of 0 is expected if no acking is done. |
| AssignedCPUPercent | real | Percent of CPU cores assigned to the topology. |
| AssignedMemOffHeapMB | real | MB of off heap memory assigned to the topology. |
| AssignedMemOnHeapMB | real | MB of on heap memory assigned to the topology. |
| AssignedTotalMemMB | real | MB of total memory assigned to the topology. |
| BoltId | string | The ID of the bolt. |
| Capacity | real | If this is around 1.0, the corresponding Bolt is running as fast as it can, so you may want to increase the Bolt's parallelism. This is (number executed * average execute latency) / measurement time. |
| ClusterName | string | The name of the cluster. |
| ClusterType | string | The type of the cluster. |
| CompleteLatencyMs | real | The average time (millisecond) a Tuple "tree" takes to be completely processed by the Topology. A value of 0 is expected if no acking is done. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| Debug | bool | Boolean representing whether debug tracing is activated. |
| Emitted | real | The number of Tuples emitted. |
| EncodedBoltId | string | The encoded ID of the bolt. |
| EncodedId | string | The enocded ID of the topology. |
| EncodedSpoutId | string | The encoded ID of the Spout. |
| ErrorHost | string | Host where the error occurred. |
| ErrorPort | string | Port associated with the error. |
| ErrorWorkerLogLink | string | Link to the log of the worker where an error occurred. |
| Executed | real | The number of incoming Tuples processed. |
| ExecuteLatencyMs | real | The average time (millisecond) a Tuple spends in the execute method. The execute method may complete without sending an Ack for the tuple. |
| Executors | int | The number of threads being used to execute a task. |
| ExecutorsTotal | int | The total amount of executors currently used and already used to execute a task. |
| Failed | real | The number of Tuple "trees" that were explicitly failed or timed out before acking was completed. A value of 0 is expected if no acking is done. |
| HostName | string | Hostname of the host the record came from. |
| Id | string | The name of the component the record is from (could be spout, bolt, or name of topology). |
| InstanceName | string | Type of record shape (there are bolt, spout, topology, and topology_stats record shapes). |
| LastError | string | Last error to occur in the component. |
| MsgTimeout | real | The number of seconds until a message times out. |
| OperationName | string | The operation associated with log record. |
| Owner | string | Name of the user that owns the topology. |
| ProcessLatencyMs | real | The average time (millisecond) it takes to Ack a Tuple after it is first received. Bolts that join, aggregate or batch may not Ack a tuple until a number of other Tuples have been received(. |
| ReplicationCount | int | The amount of replicas kept by the topology. |
| RequestedCpuPercent | real | The percent of CPU requested by the topology. |
| RequestMemOffHeapMB | real | MB of off heap memory requested by the topology. |
| RequestMemOnHeapMB | real | MB of on heap memory requested by the topology. |
| SamplingPct | real | Percentage of messages sampled to calculate metrics. |
| SchedulerDisplayResource | bool | Boolean describing the scheduler display setting. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpoutId | string | The ID of the spout. |
| Status | string | The status of the topology. |
| Tasks | int | The number of tasks running. |
| TasksTotal | int | The total amount of tasks run. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TopologyId | string | The ID of the topology. |
| TopologyName | string | Name of the topology. |
| Transferred | real | The number of Tuples emitted that sent to one or more bolts. |
| Type | string | The name of the table |
| Uptime | string | The length of time an Executor (thread) has been alive. |
| UptimeSeconds | real | The amount of time the topology has been running in seconds. |
| Window | real | The time window for the metrics in the record in seconds. |
| WindowHint | string | The time window for the metrics in the record in hours, minutes, seconds format. |
| WindowPretty | string | String description of the time window for the metrics in the record. |
| Workers | string | JSON with worker specific metrics. |
| WorkersTotal | int | The total amount of workers. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.hdinsight/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

