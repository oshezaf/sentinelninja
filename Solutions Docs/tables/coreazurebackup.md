# CoreAzureBackup

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CoreAzureBackup table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, IT & Management Tools |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/coreazurebackup) |

## Schema (73 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/coreazurebackup)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentVersion | string |  |
| ArchiveTierLatestRecoveryPointLocation | string |  |
| ArchiveTierLatestRecoveryPointTime | datetime |  |
| ArchiveTierOldestRecoveryPointLocation | string |  |
| ArchiveTierOldestRecoveryPointTime | datetime |  |
| ArchiveTierStorageConsumedInMBs | real |  |
| ArchiveTierStorageReplicationType | string |  |
| AzureBackupAgentVersion | string |  |
| AzureDataCenter | string |  |
| BackupItemAppVersion | string |  |
| BackupItemFriendlyName | string |  |
| BackupItemFrontEndSize | real |  |
| BackupItemId | string |  |
| BackupItemName | string |  |
| BackupItemProtectionState | string |  |
| BackupItemType | string |  |
| BackupItemUniqueId | string |  |
| BackupManagementServerName | string |  |
| BackupManagementServerOSVersion | string |  |
| BackupManagementServerType | string |  |
| BackupManagementServerUniqueId | string |  |
| BackupManagementServerVersion | string |  |
| BackupManagementType | string |  |
| BillingGroupFriendlyName | string |  |
| BillingGroupUniqueId | string |  |
| Category | string |  |
| DatasourceFriendlyName | string |  |
| DatasourceResourceGroupName | string |  |
| DatasourceResourceId | string |  |
| DatasourceSetFriendlyName | string |  |
| DatasourceSetResourceId | string |  |
| DatasourceSetType | string |  |
| DatasourceSubscriptionId | string |  |
| DatasourceType | string |  |
| ExtendedProperties | dynamic |  |
| IsArchiveEnabled | bool |  |
| LatestRecoveryPointLocation | string |  |
| LatestRecoveryPointTime | datetime |  |
| OldestRecoveryPointLocation | string |  |
| OldestRecoveryPointTime | datetime |  |
| OperationName | string |  |
| PolicyId | string |  |
| PolicyName | string |  |
| PolicyUniqueId | string |  |
| ProtectedContainerFriendlyName | string |  |
| ProtectedContainerLocation | string |  |
| ProtectedContainerName | string |  |
| ProtectedContainerOSType | string |  |
| ProtectedContainerOSVersion | string |  |
| ProtectedContainerProtectionState | string |  |
| ProtectedContainerType | string |  |
| ProtectedContainerUniqueId | string |  |
| ProtectedContainerWorkloadType | string |  |
| ProtectionGroupName | string |  |
| ResourceGroupName | string |  |
| ResourceId | string |  |
| SchemaVersion | string |  |
| SecondaryBackupProtectionState | string |  |
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

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md)

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Microsoft Defender for Cloud](../solutions/microsoft-defender-for-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect CoreBackUp Deletion Activity from related Security Alerts](../content/microsoft-defender-for-cloud-detect-corebackup-deletion-activity-from-related-security-alerts-011c84d8-85f0-4370-b864-24c13455aa94-595b66d7.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.recoveryservices/vaults`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

