# CensysRescanHost_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (48 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CensysRescanHost_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| resource_autonomous_system_asn_d | real |
| resource_autonomous_system_bgp_prefix_s | string |
| resource_autonomous_system_country_code_s | string |
| resource_autonomous_system_description_s | string |
| resource_autonomous_system_name_s | string |
| resource_dns_forward_dns_file_thunderwind_cn_name_s | string |
| resource_dns_forward_dns_file_thunderwind_cn_record_type_s | string |
| resource_dns_forward_dns_file_thunderwind_cn_resolve_time_t | datetime |
| resource_dns_forward_dns_oa_thunderwind_cn_name_s | string |
| resource_dns_forward_dns_oa_thunderwind_cn_record_type_s | string |
| resource_dns_forward_dns_oa_thunderwind_cn_resolve_time_t | datetime |
| resource_dns_forward_dns_ybkckdebug_cups_thunderwind_cn_name_s | string |
| resource_dns_forward_dns_ybkckdebug_cups_thunderwind_cn_record_type_s | string |
| resource_dns_forward_dns_ybkckdebug_cups_thunderwind_cn_resolve_time_t | datetime |
| resource_dns_names_s | string |
| resource_dns_reverse_dns_resolve_time_t | datetime |
| resource_ip_s | string |
| resource_location_city_s | string |
| resource_location_continent_s | string |
| resource_location_coordinates_latitude_d | real |
| resource_location_coordinates_longitude_d | real |
| resource_location_country_code_s | string |
| resource_location_country_s | string |
| resource_location_postal_code_s | string |
| resource_location_province_s | string |
| resource_location_timezone_s | string |
| resource_operating_system_confidence_d | real |
| resource_operating_system_cpe_s | string |
| resource_operating_system_evidence_s | string |
| resource_operating_system_part_s | string |
| resource_operating_system_product_s | string |
| resource_operating_system_source_s | string |
| resource_operating_system_vendor_s | string |
| resource_operating_system_version_s | string |
| resource_service_count_d | real |
| resource_services_s | string |
| resource_whois_network_cidrs_s | string |
| resource_whois_network_handle_s | string |
| resource_whois_network_name_s | string |
| resource_whois_network_updated_t | datetime |
| SourceSystem | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Censys](../solutions/censys.md)

---

## Content Items Using This Table (1)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

