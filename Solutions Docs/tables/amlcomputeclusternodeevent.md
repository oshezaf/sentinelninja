# AmlComputeClusterNodeEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AmlComputeClusterNodeEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputeclusternodeevent) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputeclusternodeevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ClusterCreationTime | string | Time when cluster was created |
| ClusterName | string | Name of the cluster |
| InternalOperationName | string |  |
| NodeAllocationTime | datetime | Time when Node was allocated |
| NodeBootTime | datetime | Time when Node was booted up |
| NodeId | string | ID of the cluster node created |
| Offer | string | Offer associated with the VM creation |
| OperationName | string | Name of the operation associated with the log event |
| Publisher | string | Publisher of the vm image. For example, microsoft-dsvm |
| ResizeEndTime | datetime | Time when cluster scale up/down ended |
| ResizeStartTime | datetime | Time when cluster scale up/down started |
| ResultSignature | string |  |
| Sku | string | Sku of the Node/VM created |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTaskEndTime | datetime | Time when task assigned to a node ended |
| StartTaskStartTime | datetime | Time when task was assigned to a node and started |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when the log entry was generated |
| TotalE2ETimeInSeconds | string | Total time node was active |
| Type | string | The name of the table |
| Version | string | Version of the image used while Node/VM is created |
| VmFamilyName | string | Vm family to which the node belongs |
| VmPriority | string | Priority of the node created Dedicated/LowPriority |
| VmSize | string | Vm size of the node |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.machinelearningservices/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

