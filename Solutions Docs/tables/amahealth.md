# AMAHealth

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AMAHealth table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Virtual Machines |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amahealth) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/amahealth)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentHealth | int | Indicates whether the agent is healthy (0), warning (1), or unhealthy (2). |
| AgentRegion | string | The Azure region in which the VM is located. |
| AgentType | string | The type of agent reporting the health data. |
| AgentVersion | string | The version of the agent reporting the health data. |
| DroppedEventsStatus | int | Indicates whether the agent is not dropping events (0), dropping a few events (1), or dropping an unacceptable number of events (2). The dropping of events can occur due to various reasons such as resource constraints, excessive event volume, external environmental issues like connectivity loss, and configuration errors. |
| EndTime | datetime | The end time in UTC of the interval for which the agent health data was aggregated. |
| MaxDiskExceededPercent | real | The percent of the reporting interval for which the disk usage exceeded the established quota. |
| MaxEventsExceededPercent | real | The percent of the reporting interval for which the log volume exceeded the established quota. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The start time in UTC of the interval for which the agent health data was aggregated. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |
| VMUUID | string | The VM UUID of the virtual machine on which the agent is running. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines/extensions`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

