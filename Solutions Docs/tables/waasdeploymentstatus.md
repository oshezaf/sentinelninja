# WaaSDeploymentStatus

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WaaSDeploymentStatus table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Desktop Analytics |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/waasdeploymentstatus) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/waasdeploymentstatus)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Computer | string |  |
| ComputerID | string |  |
| DeferralDays | int |  |
| DeploymentError | string |  |
| DeploymentErrorCode | string |  |
| DeploymentStatus | string |  |
| DetailedStatus | string |  |
| ExpectedInstallDate | datetime |  |
| LastScan | datetime |  |
| OriginBuild | string |  |
| OSBuild | string |  |
| OSRevisionNumber | int |  |
| OSServicingBranch | string |  |
| OSVersion | string |  |
| PauseState | string |  |
| RecommendedAction | string |  |
| ReleaseName | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetBuild | string |  |
| TargetOSRevision | int |  |
| TargetOSVersion | string |  |
| TimeGenerated | datetime |  |
| Type | string | The name of the table |
| UpdateCategory | string |  |
| UpdateClassification | string |  |
| UpdateReleasedDate | datetime |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

