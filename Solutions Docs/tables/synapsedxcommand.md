# SynapseDXCommand

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SynapseDXCommand table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsedxcommand) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsedxcommand)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationName | string | The name of the application that invoked the command |
| Category | string | The log category for these events will be 'Command' |
| CommandType | string | Command type. like 'DatabasesShow' |
| CorrelationId | string | The client request ID |
| DatabaseName | string | The name of the database the command ran on |
| Duration | string | Command duration as a string like '00:00:00.0156250' |
| FailureReason | string | The reason for the failure |
| LastUpdatedOn | datetime | The last time this command was updated |
| Principal | string | Principal that invoked the query like 'aaduser=USER_ID;TENANT' |
| ResourceUtilization | dynamic | Resurce consumption for the exuected command |
| RootActivityId | string | The root activity ID |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartedOn | datetime | The time (UTC) when this command started |
| State | string | The state the command ended with, like 'Completed' |
| TenantId | string | The Log Analytics workspace ID |
| Text | string | Text of the invoked command |
| TimeGenerated | datetime | The time (UTC) when this event was generated |
| TotalCPU | string | Total CPU runtime across cluster nodes |
| Type | string | The name of the table |
| User | string | User that invoked the query |
| WorkloadGroup | string | Workload are a means of resource governance for incoming requests to the cluster |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.synapse/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

