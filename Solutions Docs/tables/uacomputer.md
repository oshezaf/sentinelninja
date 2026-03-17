# UAComputer

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UAComputer table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/uacomputer) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/uacomputer)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AppIssues | int |  |
| Computer | string |  |
| ComputerID | string |  |
| ConfigMgrClientID | string |  |
| DeploymentError | string |  |
| DeploymentErrorDetails | string |  |
| DeploymentStatus | string |  |
| DriverIssues | int |  |
| HoursToUninstall | int |  |
| InventoryVersion | string |  |
| ItemRank | int |  |
| LastScan | datetime |  |
| Manufacturer | string |  |
| Model | string |  |
| OriginBuild | string |  |
| OriginOSVersion | string |  |
| OSArchitecture | string |  |
| OSBuild | string |  |
| OSEdition | string |  |
| OSVersion | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SysReqIssues | int |  |
| TargetBuild | string |  |
| TargetOSVersion | string |  |
| TimeGenerated | datetime |  |
| TotalIssues | int |  |
| Type | string | The name of the table |
| UninstallComment | string |  |
| UninstallReason | string |  |
| UpgradeAssessment | string |  |
| UpgradeDecision | string |  |
| UserAction | string |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

