# AmlComputeCpuGpuUtilization

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AmlComputeCpuGpuUtilization table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputecpugpuutilization) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputecpugpuutilization)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallerIpAddress | string | The caller IP address. |
| ClusterName | string | Compute cluster name for AmlCompute clusters. In case of singularity this would be VirtualCluster(VC) name. |
| CorrelationId | string | A GUID used to group together a set of related events. |
| DeviceId | string | DeviceId of GPU. |
| DeviceType | string | Type of compute, either CPU or GPU. |
| DurationMs | string | The duration of the operation in milliseconds. |
| Identity | string | Identity of the user or application that performed the operation. |
| Level | string | The severity level of the event. Must be one of Informational, Warning, Error, or Critical. |
| Location | string | The region of the resource emitting the event. |
| MetricName | string | Metric name. This would be Cpu/Gpu utilization metric eg. GpuMemoryUtilization, GpuUtilization, CpuUtilization etc. |
| NodeId | string | NodeId on the cluster. |
| OperationName | string | The name of the operation associated with the log entry. |
| OperationVersion | string | The api-version associated with the operation, if the operationName was performed using an API. |
| ResultDescription | string | The static text description of this operation. |
| ResultSignature | string | The sub status of the event. If this operation corresponds to a REST API call, this is the HTTP status code of the corresponding REST call. |
| ResultType | string | The status of the event. Typical values include Started, In Progress, Succeeded, Failed, Active, and Resolved. |
| RunId | string | Unique run identifier. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the event. |
| Type | string | The name of the table |
| Utilization | string | Compute utilization of node. |
| WorkspaceId | string | Unique workspace identifer. |
| WorkspaceName | string | User friendly workspace identifier. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.machinelearningservices/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

