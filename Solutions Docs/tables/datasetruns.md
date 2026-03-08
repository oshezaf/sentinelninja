# DataSetRuns

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DataSetRuns table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Virtual Machines |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/datasetruns) |

## Schema (14 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/datasetruns)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CorrelationParams | dynamic | A set of parameters, in JSON, that provide identifiers or other strings used to correlate triggers or workflows that initiated the data set run. For example, if the collection was triggered by an Alert, this column will contain the Alert Resource ID. This column may be empty if the data set run has no known correlations. This column enables selecting all data associated with a common trigger. |
| DataSetRunId | string | Randomly generated unique indentifier (brace-less UUID) for each collecction instance. This column enables selecting all data associated with the same collection. |
| DCRId | string | The ARM resource Id of the Data Collection Rule (DCR) that produced the data. This column enables selecting all data associated with the same DCR. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | The operation status of the data set collection. This status could apply to the data set or data source. Example: DataSetRunInProgress or DataSourceCollectionSucceeded. |
| StatusDetail | dynamic | Additional information about the status of the data set collection, in JSON. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the log was generated. This column can be used to construct a time series or to filter data to a specific time window. Example: 2014-05-25T08:20:03.123456Z. |
| TimeoutMinutes | int | The duration, in minutes, that a data set collection or data source collection can execute before timing out. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.azuremonitordiagnosticsagents/datacollection`
- `microsoft.compute/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

