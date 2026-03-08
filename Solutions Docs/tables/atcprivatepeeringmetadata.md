# ATCPrivatePeeringMetadata

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ATCPrivatePeeringMetadata table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/atcprivatepeeringmetadata) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/atcprivatepeeringmetadata)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ATCRegion | string | Azure Traffic Collector (ATC) deployment region. |
| ATCResourceId | string | Azure resource ID of Azure Traffic Collector (ATC). |
| ExRCircuitId | string | Azure resource ID of Express Route Circuit. |
| ExRCircuitServiceKey | string | Service key of Express Route Circuit. |
| IpMask | int | Mask of Virtual Network resource. |
| IpSubnet | dynamic | Azure resource ID of subnet and subnet IP address. |
| OperationName | string | The specific Azure Traffic Collector (ATC) operation that emitted this record. |
| SchemaVersion | string | Flow record schema version. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the Azure Traffic Collector (ATC) emitted this record. |
| Type | string | The name of the table |
| VnetAddressPrefix | string | IP address of Virtual Network resource. |
| VnetId | string | Azure resource ID of Virtual Network. |
| VnetLocation | string | Azure region of Virtual Network resource. |
| VnetName | string | Virtual Network resource name. |
| VnetResourceGroup | string | Azure resource group of Virtual Network. |
| VnetSubscriptionId | string | Azure subscription ID of Virtual Network. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.networkfunction/azuretrafficcollectors`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

