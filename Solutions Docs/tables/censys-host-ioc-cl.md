# Censys_Host_IOC_CL

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

## Schema (40 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Censys_Host_IOC_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| autonomous_system_asn_d | real |
| autonomous_system_bgp_prefix_s | string |
| autonomous_system_country_code_s | string |
| autonomous_system_description_s | string |
| autonomous_system_name_s | string |
| Computer | string |
| dns_forward_dns_s | string |
| dns_names_s | string |
| dns_reverse_dns_resolve_time_t | datetime |
| ip_s | string |
| location_city_s | string |
| location_continent_s | string |
| location_coordinates_latitude_d | real |
| location_coordinates_longitude_d | real |
| location_country_code_s | string |
| location_country_s | string |
| location_postal_code_s | string |
| location_province_s | string |
| location_timezone_s | string |
| ManagementGroupName | string |
| MG | string |
| operating_system_confidence_d | real |
| operating_system_cpe_s | string |
| operating_system_evidence_s | string |
| operating_system_part_s | string |
| operating_system_product_s | string |
| operating_system_source_s | string |
| operating_system_vendor_s | string |
| operating_system_version_s | string |
| RawData | string |
| service_count_d | real |
| services_s | string |
| SourceSystem | string |
| TimeGenerated | datetime |
| Type | string |
| whois_network_cidrs_s | string |
| whois_network_handle_s | string |
| whois_network_name_s | string |
| whois_network_updated_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Censys](../solutions/censys.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Censys](../solutions/censys.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Censys](../content/censys-censys-21c23ffd.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

