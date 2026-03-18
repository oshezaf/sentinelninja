# UpdateSummary

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UpdateSummary table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Virtual Machines |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/updatesummary) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/updatesummary)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Computer | string |  |
| ComputerEnvironment | string |  |
| CriticalUpdatesMissing | int |  |
| ManagementGroupName | string |  |
| NETRuntimeVersion | string |  |
| OldestMissingSecurityUpdateBucket | string |  |
| OldestMissingSecurityUpdateInDays | int |  |
| OsVersion | string |  |
| OtherUpdatesMissing | int |  |
| Resource | string |  |
| ResourceGroup | string |  |
| ResourceId | string |  |
| ResourceProvider | string |  |
| ResourceType | string |  |
| RestartPending | bool |  |
| SecurityUpdatesMissing | int |  |
| SourceComputerId | string |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubscriptionId | string |  |
| TimeGenerated | datetime |  |
| TotalUpdatesMissing | int |  |
| Type | string | The name of the table |
| VMUUID | string |  |
| WindowsUpdateAgentVersion | string |  |
| WindowsUpdateSetting | string |  |
| WSUSServer | string |  |

## Solutions (1)

This table is used by the following solutions:

- [SOC Handbook](../solutions/soc-handbook.md)

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InvestigationInsights](../content/github-only-investigationinsights-8694eaf8.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`
- `microsoft.automation/automationaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

