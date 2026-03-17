# WVDAutoscaleEvaluationPooled

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdautoscaleevaluationpooled) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdautoscaleevaluationpooled)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActiveSessionHostCount | int | Number of session hosts accepting user connections. |
| ActiveSessionHostsPercent | real | Percent of session hosts in the host pool considered active by Autoscale. |
| ConfigCapacityThresholdPercent | real | Capacity threshold percent. |
| ConfigMinActiveSessionHostsPercent | real | Minimum percent of session hosts that should be active. |
| ConfigScheduleName | string | Name of schedule used in the evaluation. |
| ConfigSchedulePhase | string | Schedule phase at the time of evaluation. |
| CorrelationId | string | A GUID generated for this Autoscale evaluation. |
| ExcludedSessionHostCount | int | Number of session hosts excluded from being managed by Autoscale. |
| MaxSessionLimitPerSessionHost | int | The 'MaxSessionLimit' value defined on the host pool. The is the maximum number of user sessions allowed per session host. |
| Properties | dynamic | Additional information. The fields included here may be changed in the future. |
| ResultType | string | Status of this evaluation event. |
| ScalingEvaluationStartTime | datetime | The timestamp (UTC) when the Autoscale evaluation started. |
| ScalingPlanResourceId | string | Resource ID of the Autoscale scaling plan. |
| ScalingReasonMessage | string | The actions Autoscale decided to perform and why it took those actions. |
| SessionCount | int | Number of user sessions, only the user sessions from session hosts which considered active by Autoscale are included. |
| SessionOccupancyPercent | real | Percent of session host capacity occupied by user sessions. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) this event was generated. |
| TotalSessionHostCount | int | Number of session hosts in the host pool. |
| Type | string | The name of the table |
| UnhealthySessionHostCount | int | Number of session hosts in a faulty state. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

