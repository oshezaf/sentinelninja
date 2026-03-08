# ZeroFox_CTI_breaches_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZeroFox_CTI_breaches_CL.json)

| Column Name | Type |
|:------------|:-----|
| breach_date_t | datetime |
| confidence_s | string |
| created_at_t | datetime |
| description_s | string |
| geography_country_code_s | string |
| geography_country_iso_alpha3_code_s | string |
| geography_country_s | string |
| geography_region_code_s | string |
| geography_region_s | string |
| geography_sub_region_code_s | string |
| geography_sub_region_s | string |
| id_s | real |
| included_fields_s | string |
| industry_s | string |
| name_s | string |
| record_count_d | real |
| reliability_s | string |
| threat_type_s | string |
| TimeGenerated | datetime |
| tlp_s | string |

## Solutions (1)

This table is used by the following solutions:

- [ZeroFox](../solutions/zerofox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ZeroFox CTI](../connectors/zerofoxctidataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

