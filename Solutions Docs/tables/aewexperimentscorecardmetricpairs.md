# AEWExperimentScorecardMetricPairs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AEWExperimentScorecardMetricPairs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Applications |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewexperimentscorecardmetricpairs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewexperimentscorecardmetricpairs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ControlCount | long | The sample count of the control variant. |
| ControlMetricValue | real | The metric value for the control variant. |
| ControlMetricValueNormalized | real | The normalized metric value for the control variant. Used by metric comparisons, which accounts for unequal traffic allocation. |
| ControlStandardErrorNormalized | real | The standard error (StandardDeviation / sqrt(Count)) of the metric for the control variant. |
| ControlVariant | string | The Id of the control variant. |
| DesiredDirection | string | Desirable direction for the metric. Possible values: Increase, Decrease, Neutral |
| Insights | dynamic | Metric-level Insights derived from the analysis results in JSON format. |
| MetricDescription | string | The description of the metric. |
| MetricDisplayName | string | The display name of the metric. |
| MetricETag | string | The ETag of the metric. |
| MetricId | string | The Id of the metric. |
| MetricKind | string | The metric kind. Possible values include EventCount, UserCount, EventRate, UserRate, Sum, Average, Percentile. |
| MetricLifecycle | string | The lifecycle stage of the metric. Possible values include Active, Inactive |
| MetricTags | dynamic | Metric tags in the form of string array. |
| MetricVersion | string | The version of the metric. |
| PValue | real | The P-Value of the comparison. Used to indicate if the difference between the variants is significant. |
| RelativeDifference | real | The relative difference of the comparison based on TreatmentMetricValueNormalized and ControlMetricValueNormalized. |
| ScorecardId | string | The Id of the experiment scorecard. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the scorecard results were ingested. |
| TreatmentCount | long | The sample count of the treatment variant. |
| TreatmentEffect | string | The effect of the treatment variant on the metric. Possible values: Zero samples, Too few samples, Inconclusive, Changed, Improved, Degraded. |
| TreatmentMetricValue | real | The metric value for the treatment variant. |
| TreatmentMetricValueNormalized | real | The normalized metric value for the treatment variant. Used by metric comparisons, which accounts for unequal traffic allocation. |
| TreatmentStandardErrorNormalized | real | The standard error (StandardDeviation / sqrt(Count)) of the metric for the control variant. |
| TreatmentVariant | string | The Id of the treatment variant. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.experimentation/experimentworkspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

