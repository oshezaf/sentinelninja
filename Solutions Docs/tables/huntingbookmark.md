# HuntingBookmark

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HuntingBookmark table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/huntingbookmark) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/huntingbookmark)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BookmarkId | string | Guid - the bookmark ARM resource name |
| BookmarkName | string | Bookmark name given by the user |
| BookmarkType | string | Can be used to mark bookmark origin - currently not used |
| CreatedBy | string | JSON object with the user who created the bookmark, including: ObjectID, email and name |
| CreatedTime | datetime | The timestamp of bookmark first creation time |
| Entities | string | A serialized JSON of entities mapped by this bookmark |
| EventTime | datetime | The timestamp of the original event that is bookmarked |
| LastUpdatedTime | datetime | The timestamp of bookmark last update time |
| Notes | string | Notes provided by user |
| QueryEndTime | datetime | Query time range end time |
| QueryResultRow | string | JSON object with a single result row of the query |
| QueryStartTime | datetime | Query time range start time |
| QueryText | string | Original log analytics query text |
| SoftDeleted | bool | Was the bookmark deleted by user |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| Tags | string | Comma seperated list of tags provided by user |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the log |
| Type | string |  |
| UpdatedBy | string | JSON object with the user who last updated the bookmark, including: ObjectID, email and name |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HuntingBookmark Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/huntingbookmark)

## Solutions (1)

This table is used by the following solutions:

- [SOC Handbook](../solutions/soc-handbook.md)

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [SOC Handbook](../solutions/soc-handbook.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AnomalyData](../content/soc-handbook-anomalydata-44d72d0f.md) |  |
| [InvestigationInsights](../content/soc-handbook-investigationinsights-6227a80b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

