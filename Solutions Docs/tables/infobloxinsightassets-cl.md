# InfobloxInsightAssets_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfobloxInsightAssets_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| cid_s | string |
| cmac_s | string |
| Computer | string |
| count_d | real |
| InfobloxInsightID_g | string |
| InfobloxInsightID_s | string |
| InfobloxInsightLogType_s | string |
| location_s | string |
| ManagementGroupName | string |
| MG | string |
| osVersion_s | string |
| qip_s | string |
| RawData | string |
| SourceSystem | string |
| TenantId | string |
| threatIndicatorDistinctCount_s | string |
| threatLevelMax_s | string |
| TimeGenerated | datetime |
| timeMax_t | datetime |
| timeMin_t | datetime |
| Type | string |
| user_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)
- [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md)

---

## Content Items Using This Table (4)

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
| [InfobloxInsightAssets](../parsers/infobloxinsightassets.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsightAssets](../parsers/infobloxinsightassets.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

