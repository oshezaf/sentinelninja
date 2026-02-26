# WVDFeeds

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDFeeds table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdfeeds) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdfeeds)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AadTenantId | string | The AAD tenant Id of the user. |
| ClientOS | string | The OS of the client that is requesting the feed (if available). |
| ClientSideIPAddress | string | The remote IP address from the client side. |
| ClientType | string | The type of the client that is requesting the feed (if available). |
| ClientVersion | string | The version of the client that is requesting the feed (if available). |
| CorrelationId | string | The activity Id. |
| IconFail | int | The number of Icons (PNG, ICO) files that failed to be retrieved. |
| IconTotal | int | The total number of Icons (PNG, ICO) files that the client attempted to retrieve. |
| IsClientPrivateLink | string | True if the client used a private link endpoint for the feed request. |
| RDPFail | int | The number of RDP files that failed to be retrieved. |
| RDPTotal | int | The total number of RDP files that the client attempted to retrieve. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the event. |
| Type | string | The name of the table |
| UserName | string | The user that initiated the feed request. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

