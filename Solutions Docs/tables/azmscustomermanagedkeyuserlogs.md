# AZMSCustomerManagedKeyUserLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AZMSCustomerManagedKeyUserLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azmscustomermanagedkeyuserlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azmscustomermanagedkeyuserlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Type of category for a message. It's one of the following values: error and info. For example, if the key from your key vault is being disabled, then it would be an information category or if a key can't be unwrapped, it could fall under error. |
| Key | string | The name of the key-vault key that's used to encrypt the Event Hubs namespace. |
| KeyVault | string | The name of the key vault resource. |
| Message | string | The message, which provides detailes about an error or informational message. |
| Operation | string | The operation that's performed on the key in your key vault. For example, disable/enable the key, wrap, or unwrap. |
| Provider | string | Event provider name. Possible values: eventhub, relay, and servicebus. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | The code that's associated with the operation. Example: Error code, 404 means that key wasn't found. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The event start time(UTC). |
| Type | string | The name of the table |
| Version | string | The version of the key-vault key. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.eventhub/namespaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

