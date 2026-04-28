# CyjaxAdHocEnrichment_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Cyjax](../solutions/cyjax.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyjaxAdHocEnrichment_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| asn_number_s | string |
| asn_organization_s | string |
| Computer | string |
| geoip_city_s | string |
| geoip_country_code_s | string |
| geoip_country_name_s | string |
| geoip_ip_address_s | string |
| ioc_value_g | string |
| ioc_value_s | string |
| last_seen_timestamp_t | datetime |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| sightings_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyjax](../solutions/cyjax.md)

---

## Content Items Using This Table (2)

### Workbooks (1)

**In solution [Cyjax](../solutions/cyjax.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Cyjax](../content/cyjax-cyjax-ba2b870a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

