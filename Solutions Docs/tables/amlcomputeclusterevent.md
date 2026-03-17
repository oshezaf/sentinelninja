# AmlComputeClusterEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AmlComputeClusterEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputeclusterevent) |

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amlcomputeclusterevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AllocationState | string | Cluster allocation state |
| AllocationStateTransitionTime | datetime | Transition time from one state to another |
| ClusterErrorCodes | string | Error code received during cluster creation or scaling |
| ClusterName | string | Name of the cluster |
| ClusterType | string | Type of the cluster |
| CoreCount | int | Count of the cores in the cluster |
| CreatedBy | string | User who created the cluster |
| CreationApiVersion | string | Api version used while creating the cluster |
| CurrentNodeCount | int | Current node count of the cluster |
| EventType | string | Type of event during cluster creation. |
| IdleNodeCount | int | Idle node count of the cluster |
| InitialNodeCount | int | Initial node count of the cluster |
| InternalOperationName | string |  |
| IsResizeGrow | string | Flag indicating that cluster is scaling up |
| LeavingNodeCount | int | Leaving node count of the cluster |
| MaximumNodeCount | int | Maximum node count of the cluster |
| MinimumNodeCount | int | Minimum node count of the cluster |
| NodeDeallocationOption | string | How the node should be deallocated |
| NodeIdleTimeSecondsBeforeScaleDown | int | Idle time in seconds before cluster is scaled down |
| Offer | string | Offer with which the cluster is created |
| OperationName | string | Name of the operation associated with the log event |
| PreemptedNodeCount | string | Preempted node count of the cluster |
| PreparingNodeCount | int | Preparing node count of the cluster |
| ProvisioningState | string | Provisioning state of the cluster |
| Publisher | string | Publisher of the cluster type |
| QuotaAllocated | string | Allocated quota to the cluster |
| QuotaUtilized | string | Utilized quota of the cluster |
| ResultSignature | string |  |
| RunningNodeCount | int | Running node count of the cluster |
| ScalingType | string | Type of cluster scaling manual/auto |
| Sku | string | Sku of the Node/VM created inside cluster |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubnetId | string | SubnetId of the cluster |
| TargetNodeCount | int | Target node count of the cluster while scaling up/down |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when the log entry was generated |
| Type | string | The name of the table |
| UnusableNodeCount | int | Unusable node count of the cluster |
| Version | string | Version of the image used while Node/VM is created |
| VmFamilyName | string | Name of the VM family of the nodes that can be created inside cluster |
| VmPriority | string | Priority of the nodes created inside a cluster Dedicated/LowPriority |
| VmSize | string | Vm size of the cluster |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.machinelearningservices/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

