# InfobloxInsightIndicators_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfobloxInsightIndicators_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| action_s | string |
| actor_s | string |
| Computer | string |
| confidence_s | string |
| count_d | real |
| feedName_s | string |
| id_s | string |
| indicator_s | string |
| InfobloxInsightID_g | string |
| InfobloxInsightLogType_s | string |
| kind_s | string |
| ManagementGroupName | string |
| MG | string |
| name_g | string |
| properties_category_s | string |
| properties_friendlyName_g | string |
| properties_friendlyName_s | string |
| properties_malwareName_s | string |
| properties_objectGuid_g | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| threatLevelMax_s | string |
| TimeGenerated | datetime |
| timeMax_t | datetime |
| timeMin_t | datetime |
| Type | string |
| type_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

---

## Content Items Using This Table (4)

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
| [InfobloxInsightIndicators](../parsers/infobloxinsightindicators.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsightIndicators](../parsers/infobloxinsightindicators.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

