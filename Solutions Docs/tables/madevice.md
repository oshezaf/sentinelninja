# MADevice

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MADevice table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/madevice) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/madevice)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AbnormalShutdownCount | int |  |
| AbnormalShutdownCountTrailing | int |  |
| AssignedToDeploymentPlan | bool |  |
| BiosVersion | string |  |
| ConfigMgrClientID | string |  |
| DeviceAge | int |  |
| DeviceId | string |  |
| DeviceLastSeenDate | datetime |  |
| DeviceName | string |  |
| DiskFreeSpace | int |  |
| InventoryCompleteness | bool |  |
| InventoryVersion | string |  |
| KernelModeCrashCount | int |  |
| KernelModeCrashCountTrailing | int |  |
| KernelModeCrashFreePercentTrailingIndustry | real |  |
| Manufacturer | string |  |
| Model | string |  |
| ModelFamily | string |  |
| OEMSerialNumber | string |  |
| OfficeAudienceFFN | string |  |
| OfficeAudiencesGroup | string |  |
| OfficeBuild | string |  |
| OfficeChannel | string |  |
| OfficeVersion | string |  |
| OSArchitecture | string |  |
| OSBuild | string |  |
| OSBuildNumber | int |  |
| OSEdition | string |  |
| OSFamily | string |  |
| OSRevisionNumber | int |  |
| OSServicingBranch | string |  |
| OSVersion | string |  |
| Processor | string |  |
| Region | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime |  |
| TotalDiskSize | int |  |
| TotalRAM | real |  |
| Type | string | The name of the table |
| WindowsTelemetryLevel | int |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

