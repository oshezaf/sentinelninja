# AutoscaleEvaluationsLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AutoscaleEvaluationsLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Monitor, Azure Resources, Virtual Machines |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/autoscaleevaluationslog) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (53 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/autoscaleevaluationslog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AutoscaleMetricName | string |  |
| AvailabilitySet | string |  |
| Category | string |  |
| CloudServiceName | string |  |
| CloudServiceRole | string |  |
| CoolDown | int |  |
| CorrelationId | string |  |
| CurrentInstanceCount | int |  |
| DefaultInstanceCount | int |  |
| DeploymentSlot | string |  |
| EstimateScaleResult | string |  |
| EvaluationResult | string |  |
| EvaluationTime | datetime |  |
| InstanceUpdateReason | string |  |
| LastScaleActionOperationId | string |  |
| LastScaleActionOperationStatus | string |  |
| LastScaleActionTime | datetime |  |
| MaximumInstanceCount | int |  |
| MetricData | string |  |
| MetricEndTime | datetime |  |
| MetricNamespace | string |  |
| MetricStartTime | datetime |  |
| MetricTimeGrain | string |  |
| MinimumInstanceCount | int |  |
| NewInstanceCount | int |  |
| ObservedValue | real |  |
| OperationName | string |  |
| Operator | string |  |
| Profile | string |  |
| ProfileEvaluationTime | datetime |  |
| ProfileSelected | bool |  |
| Projection | real |  |
| ResourceId | string |  |
| ResultDescription | string |  |
| ResultType | string |  |
| SelectedAutoscaleProfile | string |  |
| ServerFarm | string |  |
| ShouldUpdateInstance | bool |  |
| SkipCurrentAutoscaleEvaluation | bool |  |
| SkipRuleEvaluationForCooldown | bool |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetResourceId | string |  |
| Threshold | real |  |
| TimeAggregationType | string |  |
| TimeGenerated | datetime |  |
| TimeGrainStatistic | string |  |
| TimeWindow | string |  |
| Type | string | The name of the table |
| Webspace | string |  |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.insights/autoscalesettings`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

