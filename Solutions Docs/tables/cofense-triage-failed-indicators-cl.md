# Cofense_Triage_failed_indicators_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (19 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Cofense_Triage_failed_indicators_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| kind_s | string |
| ManagementGroupName | string |
| MG | string |
| properties_confidence_d | real |
| properties_created_t | datetime |
| properties_displayName_s | string |
| properties_externalLastUpdatedTimeUtc_t | datetime |
| properties_pattern_s | string |
| properties_patternType_s | string |
| properties_source_s | string |
| properties_threatTypes_s | string |
| RawData | string |
| report_link_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [CofenseTriage](../solutions/cofensetriage.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

