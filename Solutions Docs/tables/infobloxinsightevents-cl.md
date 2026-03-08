# InfobloxInsightEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the following solutions: [Infoblox](../solutions/infoblox.md), [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md). It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (48 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/InfobloxInsightEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| action_s | string |
| class_s | string |
| Computer | string |
| confidenceLevel_s | string |
| detected_s | string |
| deviceCountry_s | string |
| deviceIp_s | string |
| deviceName_g | string |
| deviceName_s | string |
| deviceRegion_s | string |
| dhcpFingerprint_s | string |
| dnsView_s | string |
| feed_s | string |
| id_s | string |
| InfobloxInsightfulID_s | string |
| InfobloxInsightID_g | string |
| InfobloxInsightLogType_s | string |
| InsightID_g | string |
| kind_s | string |
| macAddress_s | string |
| ManagementGroupName | string |
| MG | string |
| name_g | string |
| osVersion_s | string |
| policy_s | string |
| properties_category_s | string |
| properties_friendlyName_g | string |
| properties_friendlyName_s | string |
| properties_malwareName_s | string |
| properties_objectGuid_g | string |
| property_s | string |
| query_s | string |
| queryType_s | string |
| RawData | string |
| response_s | string |
| responseCountry_s | string |
| responseRegion_s | string |
| source_s | string |
| SourceSystem | string |
| TenantId | string |
| threatFamily_s | string |
| threatIndicator_s | string |
| threatLevel_s | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| user_s | string |

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
| [InfobloxInsightEvents](../parsers/infobloxinsightevents.md) | [Infoblox](../solutions/infoblox.md) |  |
| [InfobloxInsightEvents](../parsers/infobloxinsightevents.md) | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

