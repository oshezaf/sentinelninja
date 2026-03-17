# WVDAgentHealthStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDAgentHealthStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Virtual Machines |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdagenthealthstatus) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdagenthealthstatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActiveSessions | string | The number of active sessions on the VM |
| AgentVersion | string | The version of the WVD Agent running on the Virtual Machine |
| AllowNewSessions | string | State of the AllowNewSession settings of the host pool |
| InactiveSessions | string | The number of disconnected, or logged off sessions on the VM |
| LastHeartBeat | datetime | The time recorded when there was a change in the health status |
| LastUpgradeTimeStamp | datetime | The time recorded when there was a change in the upgrade status |
| OperationName | string | The name of the operation |
| OSVersion | string | The version of the operating system |
| SessionHostHealthCheckResult | dynamic | The set of results on health checks |
| SessionHostName | string | Name of the Virtual Machine |
| SessionHostResourceId | string | The ARM path of the session host |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | The current status of the VM, whether its healthy or not |
| StatusTimeStamp | datetime | The time recorded when there was a change in the health status |
| SxSStackVersion | string | The version of the reverse connect listener running on the VM |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the report was generated (UTC) |
| Type | string | The name of the table |
| UpgradeErrorMsg | string | The version of the reverse connect listener running on the VM |
| UpgradeState | string | The last known state from a previous update |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/hostpools`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

