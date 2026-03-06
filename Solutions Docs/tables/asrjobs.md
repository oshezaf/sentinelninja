# ASRJobs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASRJobs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asrjobs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asrjobs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The category of the log. |
| CorrelationId | string | Correlation ID associated with the ASR job for debugging purposes. |
| DurationMs | int | Duration of the ASR job. |
| EndTime | datetime | End time of the ASR job. |
| JobUniqueId | string | Unique ID of the ASR job. |
| OperationName | string | Type of ASR job, for example, Test failover. |
| PolicyFriendlyName | string | Friendly name of the replication policy applied to the replicated item (if applicable). |
| PolicyId | string | ARM ID of the replication policy applied to the replicated item (if applicable). |
| PolicyUniqueId | string | Unique ID of the replication policy applied to the replicated item (if applicable). |
| ReplicatedItemFriendlyName | string | Friendly name of replicated item associated with the ASR job (if applicable). |
| ReplicatedItemId | string | ARM ID of the replicated item associated with the ASR job (if applicable). |
| ReplicatedItemUniqueId | string | Unique ID of the replicated item associated with the ASR job (if applicable). |
| ReplicationScenario | string | Field used to identify whether the replication is being done for an Azure resource or an on-premises resource. |
| ResultDescription | string | Result of the ASR job. |
| SourceFriendlyName | string | Friendly name of the resource on which the ASR job was executed. |
| SourceResourceGroup | string | Resource Group of the source. |
| SourceResourceId | string | ARM ID of the resource on which the ASR job was executed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceType | string | Type of resource on which the ASR job was executed. |
| StartTime | datetime | Start time of the ASR job. |
| Status | string | Status of the ASR job. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the log was generated. |
| Type | string | The name of the table |
| VaultLocation | string | Location of the vault associated with the ASR job. |
| VaultName | string | Name of the vault associated with the ASR job. |
| VaultType | string | Type of the vault associated with the ASR job. |
| Version | string | The API version. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.recoveryservices/vaults`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

