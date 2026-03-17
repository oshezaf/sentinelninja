# InfobloxInsight_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfobloxInsight_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| changer_s | string |
| Computer | string |
| DataObservedVia_s | string |
| dateChanged_t | datetime |
| eventsBlockedCount_s | string |
| eventsNotBlockedCount_s | string |
| feedSource_s | string |
| hello_s | string |
| InfobloxInsightID | string |
| InfobloxInsightLogType_s | string |
| insightId_g | guid |
| ManagementGroupName | string |
| MG | string |
| mostRecentAt_t | datetime |
| numEvents_s | string |
| persistentDate_t | datetime |
| priorityText_s | string |
| RawData | string |
| SourceSystem | string |
| spreadingDate_t | datetime |
| startedAt_t | datetime |
| status_s | string |
| tClass_s | string |
| TenantId | string |
| tFamily_s | string |
| threatType_s | string |
| TimeGenerated | datetime |
| Type | string |
| userComment_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (2)

**In solution [Infoblox](../solutions/infoblox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-infoblox-soc-insight-detected-api-source-a5e2df87-f0c9-4540-8715-96e71b608986-05c34879.md) |  |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-soc-insights-infoblox-soc-insight-detected-api-source-cf9847bb-ab46-4050-bb81-75cab3f893dc-6b346252.md) |  |

### Workbooks (2)

**In solution [Infoblox](../solutions/infoblox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) |  |

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook-004063d9.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [InfobloxInsight](../parsers/infobloxinsight.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsight](../parsers/infobloxinsight.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

