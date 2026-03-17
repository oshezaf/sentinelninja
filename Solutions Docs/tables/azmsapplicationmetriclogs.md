# AZMSApplicationMetricLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZMSApplicationMetricLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azmsapplicationmetriclogs) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azmsapplicationmetriclogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | Internal ID, used to identify the specified activity. |
| AuthId | string | Authentication ID configured for Event Hub. |
| AuthType | string | Type of authentication (Azure Active Directory or SAS Policy). |
| EntityName | string | Entity name. |
| EntityType | string | Entity type. |
| NamespaceName | string | Namespace name. |
| OperationName | string | Operation performed on Event Hub (ConsumerLag, ActiveConnection, IncomingMessages, Etc.). |
| Outcome | string | Result of operation. Possible values: Success/Failure. |
| Properties | dynamic | Metadata that are specific to the operation. |
| Protocol | string | Protocol used to perform the operation. Possible value: AMQP, Kafka, and SBMP. |
| Provider | string | Event provider name. Possible values: eventhub, relay, and servicebus. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The event start time (UTC). |
| Type | string | The name of the table |
| Value | int | Value with respect to performed operation. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.servicebus/namespaces`
- `microsoft.eventhub/namespaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

