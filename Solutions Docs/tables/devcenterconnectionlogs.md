# DevCenterConnectionLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DevCenterConnectionLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devcenterconnectionlogs) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/devcenterconnectionlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | The activity ID of the event. |
| ClientType | string | The type of the client that is connecting (if available). |
| ClientVersion | string | The version of the OS of the client. |
| CloudPcId | string | The cloud pc id of the dev box. |
| DevBoxName | string | The chosen display name for the dev box. |
| NicResourceId | string | The NIC resource ID for the dev box. |
| OperationName | string | The name of the operation |
| SessionHostName | string | Name of underlying Virtual Machine |
| SessionHostPoolType | string | The type of session host pool - either SharedDesktop or PersonalDesktop. |
| SessionHostResourceId | string | The ARM path of the session host |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string | The state of the connection attempt |
| SubnetResourceId | string | The subnet resource id for the network of the dev box. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the report was generated (UTC) |
| Type | string | The name of the table |
| UdpType | string | The type of transport used by the RDP connection. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.devcenter/devcenters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

