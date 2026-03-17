# AppServiceAntivirusScanAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Schema (15 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceantivirusscanauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category name |
| ErrorMessage | string | Error Message |
| ListOfInfectedFiles | string | List of each virus file path |
| NumberOfInfectedFiles | int | Total number of files infected with virus |
| ScanStatus | string | Status of the scan |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when event is generated |
| TimeStamp | datetime | Time when event is generated |
| TotalFilesScanned | int | Total number of scanned files |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Standalone Content](../solutions/standalone-content.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AppServices AV Scan Failure](../content/standalone-content-appservices-av-scan-failure-c2da1106-bfe4-4a63-bf14-5ab73130ccd5-d6a02a6e.md) |  |
| [AppServices AV Scan with Infected Files](../content/standalone-content-appservices-av-scan-with-infected-files-9d0295ee-cb75-4f2c-9952-e5acfbb67036-8bc4532c.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

