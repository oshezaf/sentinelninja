# AVNMConnectivityConfigurationChange

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AVNMConnectivityConfigurationChange table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/avnmconnectivityconfigurationchange) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (17 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/avnmconnectivityconfigurationchange)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AppliedConnectivityConfigurations | dynamic | List of connectivity configuration IDs along with the connectivity topology currently applied to the network resources like virtual networks listed in NetworkResourceIds by your network manager. |
| CorrelationId | string | The correlation ID associated with the connectivity configuration change operation of network resources. Logs having same correlation Ids are part of same connectivity configuration change operation. |
| Location | string | Region of the network resource managed by network manager like virtual network. |
| LogLevel | string | Indicates the log level and can include: Info, Warning, Error. |
| Message | string | A brief success or failure message. |
| NetworkResourceIds | dynamic | Virtual Network IDs for which applied connectivity configurations changed. |
| OperationName | string | Name of the operation that applies connectivity configuration or removes applied connectivity configuration on network resources like virtual network. |
| ResultType | string | Indicates the operation status and can include: Success, Failure. |
| SelfDiagnosis | string | A descriptive self diagnosis message that can include explanations and resolution steps in the case of failures or warnings. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time the event was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/networkmanagers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

