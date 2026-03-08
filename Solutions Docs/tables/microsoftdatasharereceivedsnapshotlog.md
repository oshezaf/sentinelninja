# MicrosoftDataShareReceivedSnapshotLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MicrosoftDataShareReceivedSnapshotLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftdatasharereceivedsnapshotlog) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftdatasharereceivedsnapshotlog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The name of the log that belongs to |
| CorrelationId | string | CorrelationId of the event, this can be use as a reference to join with other tables |
| DataSetMappingType | string | Indicating the dataSetMapping type, this can be Blob/container/bolbfolder,etc |
| DataSetName | string | Name of provider source dataset |
| DataSetType | string | Indicating the dataSet type, this can be Blob/container/bolbfolder,etc |
| DetailMessage | string | This shows the event details. Can be empty if synchronization is not finished |
| EndTime | string | Datashare synchronization end time, can be empty if job not finished |
| FilesRead | string | Number of files read from source |
| FilesWritten | string | Number of files written into sink |
| OperationName | string | The name of the operation represented by this event |
| SizeRead | string | Size of files read from source |
| SizeWritten | string | Size of files into sink in bytes |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | string | Datashare synchronization start time |
| Status | string | Synchronization status, can be inprogress/succeed/failed |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) when the event is generated |
| TriggerType | string | Indicating whether the trigger is on-demand trigger or manual trigger |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.datashare/accounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

