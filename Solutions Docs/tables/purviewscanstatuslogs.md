# PurviewScanStatusLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PurviewScanStatusLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/purviewscanstatuslogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/purviewscanstatuslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AssetsClassified | long | Number of assets classified from the scan. |
| AssetsDiscovered | long | Number of assets discovered from the scan. |
| Category | string | Log type category. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| DataSourceName | string | Name of the data source where the scan is run. |
| DataSourceType | string | Type of data source where the scan is run. For example: AzureDataExplorer, SQLServer etc. |
| ErrorDetails | string | Error detail while running the scan. |
| LogLevel | string | Log level of message (INFO, WARN, ERROR, etc.). |
| OperationName | string | The operation associated with log record. |
| ResultType | string | Result of the scan at the current state. For example: Throttled, Queued etc. |
| RunType | string | Run Type of the scan. For example: Manual, Scheduled etc. |
| ScanName | string | Name of the scan associated with the scan status log event. |
| ScanQueueTimeInSeconds | long | Time spent by this scan waiting in the queue. |
| ScanResultId | string | Guid of the Scan Result. |
| ScanTotalRunTimeInSeconds | long | Total time to complete the scan. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.purview/accounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

