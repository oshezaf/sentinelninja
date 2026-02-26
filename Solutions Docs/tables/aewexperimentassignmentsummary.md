# AEWExperimentAssignmentSummary

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AEWExperimentAssignmentSummary table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Applications |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewexperimentassignmentsummary) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aewexperimentassignmentsummary)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AllocationId | string | The Id of the allocation used for the feature evaluation. |
| AssignmentEventCount | long | Total number of assignment events. |
| BinSize | long | The duration of assignment summary time range (in minutes). |
| BinStartTime | datetime | The bin start time of assignment summary. |
| FeatureFlagReference | string | The fully qualified Id of the feature flag. |
| FeatureName | string | The name of the feature flag. |
| IsControlVariant | bool | Whether the feature variant assigned is the control for the experiment. |
| MaxTimeGenerated | datetime | The timestamp of latest assignment event in time range. |
| MinTimeGenerated | datetime | The timestamp of earliest assignment event in time range. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The ingestion time of the experiment assignment summary. |
| Type | string | The name of the table |
| Variant | string | The Id of the feature variant assigned. |
| VariantAssignmentPercentage | real | The variant assignment percentage of the feature variant. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.experimentation/experimentworkspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

