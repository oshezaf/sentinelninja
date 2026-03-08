# WUDOStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WUDOStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wudostatus) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wudostatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| BWOptPercent28Days | real |  |
| BWOptPercent7Days | real |  |
| BytesFromCDN | long |  |
| BytesFromGroupPeers | long |  |
| BytesFromIntPeers | long |  |
| BytesFromPeers | long |  |
| City | string |  |
| Computer | string |  |
| ComputerID | string |  |
| ContentDownloadMode | int |  |
| ContentType | string |  |
| Country | string |  |
| DOStatusDescription | string |  |
| DownloadMode | string |  |
| DownloadModeSrc | string |  |
| GroupID | string |  |
| ISP | string |  |
| LastScan | datetime |  |
| NoPeersCount | long |  |
| OSName | string |  |
| OSVersion | string |  |
| PeerEligibleTransfers | long |  |
| PeeringStatus | string |  |
| PeersCannotConnectCount | long |  |
| PeersSuccessCount | long |  |
| PeersUnknownCount | long |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime |  |
| TotalTimeForDownload | string |  |
| TotalTransfers | long |  |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

