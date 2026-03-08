# AmlComputeJobEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AmlComputeJobEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputejobevent) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputejobevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClusterId | string | ID of the cluster |
| ClusterName | string | Name of the Cluster |
| ClusterResourceGroupName | string | Resource group name of the cluster |
| CreationApiVersion | string | Api version used to create the job |
| CustomerSubscriptionId | string | SubscriptionId where Experiment and Job as submitted |
| ErrorDetails | string | Details of job error |
| EventType | string | Type of the Job event. For example, JobSubmitted, JobRunning, JobFailed, JobSucceeded. |
| ExecutionState | string | State of the job (the Run). For example, Queued, Running, Succeeded, Failed |
| ExperimentId | string | ID of the Experiment |
| ExperimentName | string | Name of the Experiment |
| InternalOperationName | string |  |
| JobErrorMessage | string | detailed message of Job error |
| JobId | string | ID of the Job submitted |
| JobName | string | Name of the Job |
| NodeId | string | ID of the node created where job is running |
| OperationName | string | Name of the operation associated with the log event |
| ProvisioningState | string | State of the Job submission |
| ResourceGroupName | string | Name of the resource group |
| ResultSignature | string |  |
| RunInContainer | string | Flag describing if job should be run inside a container |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TFParameterServerCount | string | Count of TF parameter server |
| TFWorkerCount | string | Count of TF workers |
| TimeGenerated | datetime | Time when the log entry was generated |
| ToolType | string | Type of tool used |
| Type | string | The name of the table |
| WorkspaceName | string | Name of the machine learning workspace |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.machinelearningservices/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

