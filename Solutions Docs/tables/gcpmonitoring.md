# GCPMonitoring

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPMonitoring table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpmonitoring) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (12 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpmonitoring)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| GCPResource | dynamic | The monitored resource associated with the metric (e.g., VM instance, GKE cluster), includes resource type and labels |
| MetricKind | string | The type of metric: GAUGE (instant value), DELTA (change over time), or CUMULATIVE (accumulated value) |
| MetricLabels | dynamic | Key-value pairs that identify the characteristics of the metric (e.g., instance ID, region, etc.) |
| MetricType | string | The full path of the metric type being monitored (e.g., 'compute.googleapis.com/instance/cpu/utilization') |
| Points | dynamic | A list of time series data points that contain values and timestamps for the metric |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the metric or log entry was generated at the source, representing the actual occurrence time of the data point. |
| Type | string | The name of the table |
| ValueType | string | The type of value recorded: INT64, DOUBLE, BOOL, STRING, or DISTRIBUTION |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Cloud Monitoring](../solutions/google-cloud-platform-cloud-monitoring.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Cloud Platform Cloud Monitoring (via Codeless Connector Framework)](../connectors/gcpmonitorccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

