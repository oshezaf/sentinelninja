# InfobloxInsight_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (16 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights%5CData%20Connectors%5CInfobloxSOCInsights_CCF/table_InfobloxInsight.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ConnectorName | string | Connector friendly name assigned during connector setup |
| DateChanged | datetime | Timestamp when the insight was last modified |
| EventsBlockedCount | string | Number of events that were blocked (string from API) |
| EventsNotBlockedCount | string | Number of events that were not blocked (string from API) |
| FeedSource | string | Source of the threat intelligence feed |
| InsightId | string | Unique identifier for the insight |
| MostRecentAt | datetime | Timestamp of the most recent event related to this insight |
| NumEvents | string | Total number of events associated with this insight (string from API) |
| PriorityText | string | Priority level in text format (e.g., CRITICAL, HIGH, MEDIUM, LOW) |
| StartedAt | datetime | Timestamp when the insight was first detected |
| Status | string | Current status of the insight (e.g., Active, Closed, Dismissed) |
| TClass | string | Threat class or category |
| TenantHost | string | Infoblox API host extracted from the configured API URL |
| TFamily | string | Threat family classification |
| ThreatType | string | Type of threat detected (e.g., Malware, DNS Tunneling, C2, DGA) |
| TimeGenerated | datetime | The timestamp (in UTC) when the insight was first detected. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (2)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Infoblox SOC Insights (via Codeless Connector Framework)](../connectors/infobloxsocinsightsconnector.md) |  |
| [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (2)

**In solution [Infoblox](../solutions/infoblox.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-infoblox-soc-insight-detected-api-source-a5e2df87-f0c9-4540-8715-96e71b608986-05c34879.md) |  |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-soc-insights-infoblox-soc-insight-detected-api-source-cf9847bb-ab46-4050-bb81-75cab3f893dc-6b346252.md) |  |

### Workbooks (2)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) |  |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook-004063d9.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [InfobloxInsight](../parsers/infobloxinsight.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsight](../parsers/infobloxinsight.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

