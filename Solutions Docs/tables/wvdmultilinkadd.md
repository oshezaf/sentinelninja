# WVDMultiLinkAdd

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDMultiLinkAdd table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdmultilinkadd) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdmultilinkadd)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The category of the event. |
| ClientNatIP | string | The public IP address for the client's NAT. |
| ClientTransportIP | string | The IP address of the client endpoint used for the transport connection to the session host. |
| ClientTransportType | string | The transport protocol the AVD client is using for an individual link. |
| ClientTURNIP | string | The IP address of the client side used for connecting to the TURN server. |
| CorrelationId | string | The correlation ID for the activity. |
| GatewayRegion | string | The Azure region where the client's connection gateway is located. |
| LinkId | string | The identifier uses to track of network transport path. |
| ServerNatIP | string | The public ip address of the session host. |
| ServerTransportIP | string | The IP address of the session host used for the transport connection. |
| ServerTransportType | string | The transport protocol the AVD session host is using for an individual link. |
| ServerTURNIP | string | The IP address of the TURN server that the AVD client connects to. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the report was generated (UTC). |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/hostpools`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

