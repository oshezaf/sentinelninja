# MADeviceReadiness

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MADeviceReadiness table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/madevicereadiness) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/madevicereadiness)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AppIssues | int |  |
| ConfigMgrClientID | string |  |
| DeploymentPlanId | string |  |
| DeviceId | string |  |
| DeviceLastSeenDate | datetime |  |
| DeviceName | string |  |
| DeviceStatus | int |  |
| DriverIssues | int |  |
| InventoryCompleteness | bool |  |
| MacroIssues | int |  |
| Manufacturer | string |  |
| ModelFamily | string |  |
| OfficeAddInIssues | int |  |
| OfficeAppIssues | int |  |
| OfficeBuild | string |  |
| OfficeUpgradeDecision | string |  |
| OfficeVersion | string |  |
| OSBuild | string |  |
| OSVersion | string |  |
| PilotDevice | bool |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SysReqIssues | int |  |
| TimeGenerated | datetime |  |
| TotalIssues | int |  |
| Type | string | The name of the table |
| WindowsUpgradeDecision | string |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

