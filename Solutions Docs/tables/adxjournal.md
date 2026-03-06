# ADXJournal

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADXJournal table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxjournal) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxjournal)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ChangeCommand | string | The executed control command that triggered the metadata change |
| CorrelationId | string | The client request ID |
| DatabaseName | string | The name of the database changed following the event |
| EntityContainerName | string | The entity container name (entity=column, container=table), or the database name |
| EntityName | string | The entity name that the operation was executed on, before the change |
| EntityVersion | string | The new metadata version (DB/cluster) following the change |
| Event | string | The metadata change event name |
| OperationTimestamp | datetime | The timestamp (UTC) at which the metadata operation completed |
| OriginalEntityState | string | The state of the entity (entity properties) before the change |
| OriginalEntityVersion | string | The version of the entity (entity properties) before the change |
| Principal | string | The principal (user/app) that executed the control command |
| RootActivityId | string | The root activity ID of the operation that caused the metadata change (for example: 1234ab0c-567d-8c9e-0123-456789fg012h) |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) at which this log was sent to Log Analytics |
| Type | string | The name of the table |
| UpdatedEntityName | string | The new entity name after the change |
| UpdatedEntityState | string | The new state after the change |
| User | string | The user that executed the control command |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.kusto/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

