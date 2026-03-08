# AlertHistory

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AlertHistory table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Monitor |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alerthistory) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alerthistory)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AlertContext | string |  |
| AlertDescription | string |  |
| AlertId | string |  |
| AlertName | string |  |
| AlertPriority | string |  |
| AlertSeverity | string |  |
| AlertState | string |  |
| Custom1 | string |  |
| Custom10 | string |  |
| Custom2 | string |  |
| Custom3 | string |  |
| Custom4 | string |  |
| Custom5 | string |  |
| Custom6 | string |  |
| Custom7 | string |  |
| Custom8 | string |  |
| Custom9 | string |  |
| LastModifiedBy | string |  |
| ManagementGroupName | string |  |
| RepeatCount | int |  |
| ResolvedBy | string |  |
| SourceDisplayName | string |  |
| SourceFullName | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TicketId | string |  |
| TimeGenerated | datetime |  |
| TimeLastModified | datetime |  |
| TimeRaised | datetime |  |
| TimeResolved | datetime |  |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

