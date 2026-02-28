# InfobloxInsightComments_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfobloxInsightComments_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| commentsChanger_s | string |
| Computer | string |
| dateChanged_t | datetime |
| InfobloxInsightID_g | string |
| InfobloxInsightLogType_s | string |
| ManagementGroupName | string |
| MG | string |
| newComment_s | string |
| RawData | string |
| SourceSystem | string |
| status_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (2)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

---

## Content Items Using This Table (3)

### Workbooks (1)

**In solution [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook-004063d9.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [InfobloxInsightComments](../parsers/infobloxinsightcomments.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsightComments](../parsers/infobloxinsightcomments.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

