# tide_lookup_data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Infoblox](../solutions/infoblox.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/tide_lookup_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| class_s | string |
| Computer | string |
| confidence_d | real |
| detected_t | datetime |
| dga_s | string |
| domain_s | string |
| expiration_t | datetime |
| extended_ais_consent_s | string |
| extended_attack_chain_s | string |
| extended_cyberint_guid_g | string |
| extended_no_whitelist_s | string |
| extended_notes_s | string |
| extended_protocol_s | string |
| extended_reason_s | string |
| extended_references_s | string |
| extended_registration_date_s | string |
| extended_sample_sha256_s | string |
| hash_s | string |
| hash_type_s | string |
| host_s | string |
| id_g | string |
| imported_t | datetime |
| ip_s | string |
| ManagementGroupName | string |
| MG | string |
| profile_s | string |
| property_s | string |
| RawData | string |
| received_t | datetime |
| SourceSystem | string |
| TenantId | string |
| threat_level_d | real |
| TimeGenerated | datetime |
| tld_s | string |
| Type | string |
| type_s | string |
| up_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (2)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

