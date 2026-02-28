# ZeroFox_CTI_botnet_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZeroFox_CTI_botnet_CL.json)

| Column Name | Type |
|:------------|:-----|
| acquired_at_t | datetime |
| anti_viruses_s | string |
| available_keyboards_s | string |
| bot_name_s | string |
| breached_at | datetime |
| c2_domain_s | string |
| c2_ip_address_s | string |
| country_code_s | string |
| current_language_s | string |
| estimated_infected_at_t | datetime |
| file_location_s | string |
| is_common_domain_b | bool |
| listed_at_t | datetime |
| location_s | string |
| logged_at_t | datetime |
| operating_system_s | string |
| process_elevation_s | string |
| tags_s | string |
| TimeGenerated | datetime |
| uac_s | string |
| zip_code_s | string |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

