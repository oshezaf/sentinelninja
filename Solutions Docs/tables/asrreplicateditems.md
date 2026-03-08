# ASRReplicatedItems

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASRReplicatedItems table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asrreplicateditems) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asrreplicateditems)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActiveLocation | string | Current active location for the replicated item. If the item is in failed over state, the active location will be the secondary (target) region. Otherwise, it will be the primary region. |
| Category | string | The category of the log. |
| DatasourceFriendlyName | string | Friendly name of the datasource being replicated. |
| DatasourceType | string | ARM type of the resource configured for replication. |
| DatasourceUniqueId | string | Unique ID of the datasource being replicated. |
| FailoverReadiness | string | Denotes whether there are any configuration issues that could affect the failover operation success for the ASR replicated item. |
| IRProgressPercentage | int | Progress percentage of the initial replication phase for the replicated item. |
| LastHeartbeat | datetime | Time at which the ASR agent associated with the replicated item last made a call to the ASR service. Useful for debugging error scenarios where you wish to identify the time at which issues started arising. |
| LastRpoCalculatedTime | datetime | Time at which the RPO was last calculated by the ASR service for the replicated item. |
| LastSuccessfulTestFailoverTime | datetime | Time of the last successful faliover performed on the replicated item. |
| MultiVMGroupId | string | For scenarios where multi-VM consistency feature is enabled for replicated VMs, this field specifies the ID of the multi-VM group associated with the replicated VM. |
| OperationName | string | The name of the operation. |
| OSFamily | string | OS family of the resource being replicated. |
| PolicyFriendlyName | string | Friendly name of the replication policy applied to the replicated item. |
| PolicyId | string | ARM ID of the replication policy applied to the replicated item. |
| PolicyUniqueId | string | Unique ID of the replication policy applied for the replicated item. |
| PrimaryFabricName | string | Represents the source region of the replicated item. By default, the value is the name of the source region, however if you have specified a custom name for the primary fabric while enabling replication, then that custom name shows up under this field. |
| PrimaryFabricType | string | Fabric type associated with the source region of the replicated item. Depending on whether the replicated item is an Azure VM, Hyper-V VM or VMWare VM, the value for this field varies. |
| ProtectionInfo | string | Protection status of the replicated item. |
| RecoveryFabricName | string | Represents the target region of the replicated item. By default, the value is the name of the target region, however if you have specified a custom name for the recovery fabric while enabling replication, then that custom name shows up under this field. |
| RecoveryFabricType | string | Fabric type associated with the target region of the replicated item. Depending on whether the replicated item is an Azure VM, Hyper-V VM or VMWare VM, the value for this field varies. |
| RecoveryRegion | string | Target region to which the resource is replicated. |
| ReplicatedItemFriendlyName | string | Friendly name of the resource being replicated. |
| ReplicatedItemId | string | ARM ID of the replicated item. |
| ReplicatedItemUniqueId | string | Unique ID of the replicated item. |
| ReplicationHealthErrors | string | List of issues that might be affecting the recovery point generation for the replicated item. |
| ReplicationStatus | string | Status of replication for the ASR replicated item. |
| SourceResourceId | string | ARM ID of the datasource being replicated. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the log was generated. |
| Type | string | The name of the table |
| VaultLocation | string | Location of the vault associated with the replicated item. |
| VaultName | string | Name of the vault associated with the replicated item. |
| VaultType | string | Type of the vault associated with the replicated item. |
| Version | string | The API version. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.recoveryservices/vaults`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

