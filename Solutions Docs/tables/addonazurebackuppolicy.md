# AddonAzureBackupPolicy

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AddonAzureBackupPolicy table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, IT & Management Tools |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/addonazurebackuppolicy) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (86 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/addonazurebackuppolicy)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ArchiveTierDailyRetentionDuration | int |  |
| ArchiveTierDefaultRetentionDuration | int |  |
| ArchiveTieringDuration | int |  |
| ArchiveTieringDurationType | string |  |
| ArchiveTieringMode | string |  |
| ArchiveTierMonthlyRetentionDuration | int |  |
| ArchiveTierStorageReplicationType | string |  |
| ArchiveTierWeeklyRetentionDuration | int |  |
| ArchiveTierYearlyRetentionDuration | int |  |
| AzureDataCenter | string |  |
| BackupDaysOfTheWeek | string |  |
| BackupFrequency | string |  |
| BackupIntervalInHours | int |  |
| BackupManagementServerUniqueId | string |  |
| BackupManagementType | string |  |
| BackupTimes | string |  |
| Category | string |  |
| DailyRetentionDuration | int |  |
| DailyRetentionTimes | string |  |
| DatasourceType | string |  |
| DiffBackupDaysofTheWeek | string |  |
| DiffBackupFormat | string |  |
| DiffBackupRetentionDuration | int |  |
| DiffBackupTime | string |  |
| DifferentialBackupDaysOfTheWeek | string |  |
| DifferentialBackupFrequency | string |  |
| DifferentialBackupTimes | string |  |
| ExtendedProperties | dynamic |  |
| FullBackupDaysOfTheWeek | string |  |
| FullBackupFrequency | string |  |
| FullBackupTimes | string |  |
| IncrementalBackupDaysOfTheWeek | string |  |
| IncrementalBackupFrequency | string |  |
| IncrementalBackupTimes | string |  |
| LogBackupFrequency | int |  |
| LogBackupRetentionDuration | int |  |
| MonthlyRetentionDaysOfTheMonth | string |  |
| MonthlyRetentionDaysOfTheWeek | string |  |
| MonthlyRetentionDuration | int |  |
| MonthlyRetentionFormat | string |  |
| MonthlyRetentionTimes | string |  |
| MonthlyRetentionWeeksOfTheMonth | string |  |
| OperationName | string |  |
| PolicyId | string |  |
| PolicyName | string |  |
| PolicySubType | string |  |
| PolicyTimeZone | string |  |
| PolicyUniqueId | string |  |
| ResourceGroupName | string |  |
| ResourceId | string |  |
| RetentionDuration | int |  |
| RetentionType | string |  |
| ScheduleWindowDuration | int |  |
| ScheduleWindowStartTime | datetime |  |
| SchemaVersion | string |  |
| SnapshotTierDailyRetentionDuration | int |  |
| SnapshotTierDefaultRetentionDuration | int |  |
| SnapshotTierMonthlyRetentionDuration | int |  |
| SnapshotTierWeeklyRetentionDuration | int |  |
| SnapshotTierYearlyRetentionDuration | int |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StandardTierDefaultRetentionDuration | int |  |
| State | string |  |
| StorageReplicationType | string |  |
| SubscriptionId | string |  |
| SynchronisationFrequencyPerDay | string |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| VaultName | string |  |
| VaultTags | string |  |
| VaultType | string |  |
| VaultUniqueId | string |  |
| WeeklyRetentionDaysOfTheWeek | string |  |
| WeeklyRetentionDuration | int |  |
| WeeklyRetentionTimes | string |  |
| YearlyRetentionDaysOfTheMonth | string |  |
| YearlyRetentionDaysOfTheWeek | string |  |
| YearlyRetentionDuration | int |  |
| YearlyRetentionFormat | string |  |
| YearlyRetentionMonthsOfTheYear | string |  |
| YearlyRetentionTimes | string |  |
| YearlyRetentionWeeksOfTheMonth | string |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.recoveryservices/vaults`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

