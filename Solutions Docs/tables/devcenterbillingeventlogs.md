# DevCenterBillingEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DevCenterBillingEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devcenterbillingeventlogs) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devcenterbillingeventlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BilledResourceId | string | The resource within the DevCenter that gets billed. |
| BillingRegion | string | The billing region of the consomption resource. |
| EndTime | datetime | Time (UTC) when the consumption ended. |
| EventId | string | The event ID used for deduping consumption events. |
| IsOverMonthlyBillingCap | bool | Whether the consumption is included in the monthly cap. |
| MeterId | string | The meter ID for the consumption. |
| OperationName | string | The resource operation name for the log. |
| Quantity | real | The amount of usage in terms of the specified unit. |
| Sku | string | The Sku of the consumption resource. Can be DZH319G7LNXM, DZH3144F2XK5, DZH31814TZNG, etc. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Time (UTC) when the consumption started. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| Type | string | The name of the table |
| UnitType | string | The unit in which the type of usage is measured. Can be Hourly or Monthly. |
| UsageResourceName | string | The name of the consumption resource. |
| UsageResourceUniqueId | string | The unique ID of the consumption resource. |
| UsageType | string | The type of resource being consumed. |
| UserId | string | User ID consuming the resource. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.devcenter/devcenters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

