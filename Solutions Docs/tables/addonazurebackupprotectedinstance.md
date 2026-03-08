# AddonAzureBackupProtectedInstance

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AddonAzureBackupProtectedInstance table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, IT & Management Tools |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/addonazurebackupprotectedinstance) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (35 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/addonazurebackupprotectedinstance)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ArchiveTierStorageConsumedInMBs | real |  |
| ArchiveTierStorageReplicationType | string |  |
| AzureDataCenter | string |  |
| BackupItemUniqueId | string |  |
| BackupManagementServerUniqueId | string |  |
| BackupManagementType | string |  |
| BillingGroupFriendlyName | string |  |
| BillingGroupResourceGroupName | string |  |
| BillingGroupType | string |  |
| BillingGroupUniqueId | string |  |
| Category | string |  |
| DatasourceType | string |  |
| ExtendedProperties | dynamic |  |
| OperationName | string |  |
| ProtectedContainerUniqueId | string |  |
| ProtectedInstanceCount | int |  |
| ResourceGroupName | string |  |
| ResourceId | string |  |
| SchemaVersion | string |  |
| SourceSizeInMBs | real |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string |  |
| StorageConsumedInMBs | real |  |
| StorageReplicationType | string |  |
| SubscriptionId | string |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| VaultName | string |  |
| VaultTags | string |  |
| VaultType | string |  |
| VaultUniqueId | string |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.recoveryservices/vaults`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

