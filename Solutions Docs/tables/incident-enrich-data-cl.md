# Incident_Enrich_Data_CL

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

## Schema (47 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Incident_Enrich_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| alert_id_g | string |
| autonomous_system_asn_s | string |
| autonomous_system_name_s | string |
| Computer | string |
| dns_names_s | string |
| endpoints_s | string |
| fingerprint_sha256_s | string |
| hostname_s | string |
| incident_arm_id_s | string |
| ip_s | string |
| issuer_dn_s | string |
| labels_s | string |
| location_city_s | string |
| location_continent_s | string |
| location_coordinates_latitude_d | real |
| location_coordinates_longitude_d | real |
| location_country_code_s | string |
| location_country_s | string |
| location_postal_code_s | string |
| location_province_s | string |
| ManagementGroupName | string |
| MG | string |
| parsed_issuer_dn_s | string |
| parsed_subject_common_name_s | string |
| parsed_subject_dn_s | string |
| parsed_validity_period_not_after_t | datetime |
| parsed_validity_period_not_before_t | datetime |
| playbook_s | string |
| port_d | real |
| RawData | string |
| scan_time_t | datetime |
| service_count_d | real |
| services_s | string |
| software_s | string |
| SourceSystem | string |
| subject_common_name_s | string |
| subject_dn_s | string |
| threats_s | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |
| validity_period_not_after_t | datetime |
| validity_period_not_before_t | datetime |
| vulns_s | string |
| whois_network_cidrs_s | string |
| whois_network_name_s | string |

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

