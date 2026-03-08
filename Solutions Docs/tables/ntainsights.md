# NTAInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NTAInsights table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntainsights) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntainsights)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdFlag | real | A ternary series containing (+1, -1, 0) marking up/down/no anomaly respectively. |
| AdScore | real | Anomaly score. |
| AggregationType | string | Type of data aggregation - 1 for short aggregation and 2 for long aggregation. |
| DataPoints | string | Data points for aggregated data. |
| FlowStatus | string | The considered traffic is Allowed/Denied/All. |
| InsightsResourceId | string | Resource ID for the resource for which data is aggregated |
| IntervalEnd | datetime | End time of the data insights processing interval. |
| IntervalStart | datetime | Start time of the data insights processing interval. |
| Periodicity | real | The number of hours after whichthe data repeats itself. |
| PivotType | string | Pivot type for insights aggregation. |
| ProcessingTime | datetime | The time when periodicty is calculated. |
| Region | string | Region of Vnet flow logs. |
| SchemaVersion | string | Schema version. |
| SeriesNumber | real | An incremental value to represent the last aggregated series. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubType | string | Subtype for the insights logs. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time when the data gets ingested into the Log Analytics Workspace. |
| TrafficTime | datetime | Time when the anomaly has occured in data pattern. |
| TrafficVolumeActual | real | The actual traffic volume in the time period. |
| TrafficVolumeBaseline | real | The predicted value of the series, according to the decomposition per the anomaly calculation algorithm. |
| TrafficVolumeUnit | string | The aggregated values represent Flows/Bytes/Packets. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

