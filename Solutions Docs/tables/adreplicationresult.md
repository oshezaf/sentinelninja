# ADReplicationResult

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADReplicationResult table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Workloads |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adreplicationresult) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adreplicationresult)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AssessmentId | string | Unique Guid corresponding to each run |
| Computer | string | Computer Name where the solution ran |
| ConsecutiveFailures | int | Number of consecutive replication failures between two Domain Controllers |
| DestinationServer | string | AD Replication Destination Server |
| DestinationSiteName | string | AD Replication Destination Site Name |
| HelpLink | string | Help Link for more information |
| IsDestinationGC | bool | Is Destinationation Global Catalog |
| IsSourceGC | bool | Is Source Global Catalog |
| LastAttemptedSync | datetime | Last Attempted Replication DateTime |
| LastSuccessfulSync | datetime | Last Successful DateTime |
| LastSyncMessage | string | Last Replication Sync Message |
| LastSyncResult | int | Last Replication Sync Success / Failure Code |
| PartitionName | string | Partition Name |
| PercentOfTSL | real | Percentage of Tombstone Lifecycle |
| ReplicationNeighborOption | string |  |
| SourceInvocationId | string | Unique Id assigned to a Domain Controller |
| SourceServer | string | Source Server Name |
| SourceSiteName | string | Source Site Name |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Date and time the record was created. |
| TombstoneLifetime | string | Length of time a deleted object persisted in the database |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

