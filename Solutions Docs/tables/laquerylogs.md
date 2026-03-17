# LAQueryLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Solutions (4)

This table is used by the following solutions:

- [DPDP Compliance](../solutions/dpdp-compliance.md)
- [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md)
- [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md)
- [Standalone Content](../solutions/standalone-content.md)

---

## Content Items Using This Table (20)

### Analytic Rules (1)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Users searching for VIP user activity](../content/standalone-content-users-searching-for-vip-user-activity-f7f4a77e-f68f-4b56-9aaf-a0c9d87d7a8e-aebfac5d.md) |  |

### Hunting Queries (11)

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross workspace query anomolies](../content/standalone-content-cross-workspace-query-anomolies-8f18c6ea-fcd0-4d9a-a8fd-19a6aaa1660c-c649c5f9.md) |  |
| [Multiple large queries made by user](../content/standalone-content-multiple-large-queries-made-by-user-cd11d6a1-e2ad-47fa-9a9f-4c70b143d4fd-5c0b6215.md) |  |
| [New ServicePrincipal running queries](../content/standalone-content-new-serviceprincipal-running-queries-98e4df23-7bd2-480d-814a-a03f77efc670-8103d8fa.md) |  |
| [New client running queries](../content/standalone-content-new-client-running-queries-1dd98313-f43f-4d8b-9870-5a1dfb2cf93f-c7d32c1c.md) |  |
| [New users running queries](../content/standalone-content-new-users-running-queries-8c4fb385-98b0-4ef5-b3da-65db0fb22d89-113f7831.md) |  |
| [Query data volume anomolies](../content/standalone-content-query-data-volume-anomolies-97543188-a4e8-4439-980d-17b231149617-2488d78c.md) |  |
| [Query looking for secrets](../content/standalone-content-query-looking-for-secrets-2bf19f27-0466-4c16-a821-ce84e524476d-bba63411.md) |  |
| [User returning more data than daily average](../content/standalone-content-user-returning-more-data-than-daily-average-8699df3f-f89e-431f-9dea-056c4ce7014a-cb19a4e5.md) |  |
| [User running multiple queries that fail](../content/standalone-content-user-running-multiple-queries-that-fail-a2fca6ac-1155-4eec-934b-65aa62cdbb09-4fd90040.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cross-service Azure Data Explorer queries](../content/github-only-cross-service-azure-data-explorer-queries-58b17f82-f594-4d36-9b78-4e4b03992708-26494ee3.md) |  |
| [New users calling sensitive Watchlist](../content/github-only-new-users-calling-sensitive-watchlist-f3dc87f3-64f9-405d-aa1b-fed98f859357-5436e4d3.md) |  |

### Workbooks (8)

**In solution [DPDP Compliance](../solutions/dpdp-compliance.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DPDPCompliance](../content/dpdp-compliance-dpdpcompliance-18571e87.md) |  |

**In solution [GDPR Compliance & Data Security](../solutions/gdpr-compliance-&-data-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [GDPRComplianceAndDataSecurity](../content/gdpr-compliance-&-data-security-gdprcomplianceanddatasecurity-a0958a9a.md) |  |

**In solution [MicrosoftPurviewInsiderRiskManagement](../solutions/microsoftpurviewinsiderriskmanagement.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InsiderRiskManagement](../content/microsoftpurviewinsiderriskmanagement-insiderriskmanagement-37830b82.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AzureLogCoverage](../content/github-only-azurelogcoverage-05245bb5.md) |  |
| [LogAnalyticsQueryAnalysis](../content/github-only-loganalyticsqueryanalysis-50cfc93a.md) |  |
| [LogSourcesAndAnalyticRulesCoverage](../content/github-only-logsourcesandanalyticrulescoverage-d4c48df0.md) |  |
| [WorkspaceAuditing](../content/github-only-workspaceauditing-b4e840dd.md) |  |
| [WorkspaceUsage](../content/github-only-workspaceusage-97e7cfa7.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

