# AppServiceAntivirusScanAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppServiceAntivirusScanAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceantivirusscanauditlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (15 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceantivirusscanauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category name |
| ErrorMessage | string | Error Message |
| ListOfInfectedFiles | string | List of each virus file path |
| NumberOfInfectedFiles | int | Total number of files infected with virus |
| ScanStatus | string | Status of the scan |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when event is generated |
| TimeStamp | datetime | Time when event is generated |
| TotalFilesScanned | int | Total number of scanned files |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AppServiceAntivirusScanAuditLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceantivirusscanauditlogs)

## Solutions (1)

This table is used by the following solutions:

- [Standalone Content](../solutions/standalone-content.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**Standalone Content:**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [AppServices AV Scan Failure](../content/standalone-content-appservices-av-scan-failure-c2da1106-bfe4-4a63-bf14-5ab73130ccd5-d6a02a6e.md) | `ScanStatus == "Failed"` |
| [AppServices AV Scan with Infected Files](../content/standalone-content-appservices-av-scan-with-infected-files-9d0295ee-cb75-4f2c-9952-e5acfbb67036-8bc4532c.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 0 connectors, 1 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ScanStatus == "Failed"` | - | 1 | - | - | **1** |
| **Total** | **0** | **1** | **0** | **0** | **1** |

### ScanStatus

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Failed` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

