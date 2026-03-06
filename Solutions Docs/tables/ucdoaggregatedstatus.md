# UCDOAggregatedStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UCDOAggregatedStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucdoaggregatedstatus) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucdoaggregatedstatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AzureADDeviceId | string | A GUID corresponding to the AAD tenant to which the device belongs. |
| AzureADTenantId | string | A GUID corresponding to this device's AAD device ID. |
| BWOptPercent28Days | real | Bandwidth optimization (as a percentage of savings of total bandwidth otherwise incurred) as a result of using delivery optimization for this device, computed on a rolling 28-day basis. |
| BytesFromCache | long | Total number of bytes downloaded from cache. |
| BytesFromCDN | long | Total number of bytes downloaded from a CDN versus a peer. This counts against bandwidth optimization. |
| BytesFromGroupPeers | long | Total number of bytes downloaded from group peers. |
| BytesFromIntPeers | long | Total number of bytes downloaded from internet peers. |
| BytesFromPeers | long | Total number of bytes downloaded from peers. |
| ContentType | string | The type of content being downloaded. |
| DeviceCount | long | Total count of devices. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time at which this event was generated. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

