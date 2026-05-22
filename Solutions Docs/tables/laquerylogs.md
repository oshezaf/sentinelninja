# LAQueryLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for LAQueryLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/laquerylogs) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/laquerylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AADClientId | string | AAD ClientId used by the caller. |
| AADEmail | string | AAD Email of the caller. |
| AADObjectId | string | AAD ObjectId of the caller, or the 'aai' claim for GDAP scenarios. |
| AADTenantId | string | AAD TenantId of the caller. |
| ConditionalDataAccess | string | Indicates whether the query was executed with an applicable attribute-based access control data access condition (ABAC), and if the condition had an error. |
| CorrelationId | string | The ID for correlated events. |
| IsBillableQuery | bool | Indicates whether query execution is billed. |
| IsWorkspaceInFailover | bool | Indicates whether the queried workspace was in failover mode. |
| QueryText | string | The full body of the query as submitted by the user. |
| QueryThumbprint | string | A hash representing the query structure, useful for identifying similar queries. |
| QueryTimeRangeEnd | datetime | The end time (UTC) of the time range across which the query was was requested by the caller to be executed. |
| QueryTimeRangeStart | datetime | The starting time (UTC) of the time range across which the query was was requested by the caller to be executed. |
| RequestClientApp | string | ClientApp string in the request header (x-ms-app). |
| RequestContext | dynamic | ResourceId of all referenced workspaces, applications, and resources across which the query was requested by the caller to be executed. |
| RequestContextFilters | dynamic | Filters applied to the request context. |
| RequestTarget | string | ResourceId of the request URL. |
| ResponseCode | int | The HTTP response code for the request. |
| ResponseDurationMs | real | The duration (in ms) that the query took to execute. |
| ResponseRowCount | int | The number of rows that were returned. |
| ScannedGB | real | For billable queries, like Basic logs queries, indicates the total GB of data scanned in the query. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatsCPUTimeMs | real | The CPU (in ms) used in the execution of this query. |
| StatsDataProcessedEnd | datetime | The end time (UTC) of the time range across which the data processed. |
| StatsDataProcessedStart | datetime | The starting time (UTC) of the time range across which the data processed. |
| StatsRegionCount | int | The number of regions that the workspaces accessed are spread across. |
| StatsWorkspaceCount | int | The number of workspaces that the query accessed, either explicitly or otherwise. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) at which the query was submitted. |
| Type | string | The name of the table |
| WorkspaceRegion | string | The region of the queried workspace. |

## Solutions (3)

This table is used by the following solutions:

- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)

---

## Content Items Using This Table (3)

### Workbooks (3)

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):** `RequestClientApp != "Sentinel-General"`

| Workbook |
|:-------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):** `RequestClientApp != "Sentinel-General"`

| Workbook |
|:-------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):** `RequestClientApp != "Sentinel-General"`<br>`ResponseCode != "200"`<br>`ResponseRowCount == "5000"`

| Workbook |
|:-------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`

## Selection Criteria Summary (2 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `RequestClientApp != "Sentinel-General"` | - | 2 | - | - | **2** |
| `RequestClientApp != "Sentinel-General"`<br>`ResponseCode != "200"`<br>`ResponseRowCount == "5000"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### RequestClientApp

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Sentinel-General` | - | 3 | - | - | **3** |

### ResponseCode

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= 200` | - | 1 | - | - | **1** |

### ResponseRowCount

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `5000` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

