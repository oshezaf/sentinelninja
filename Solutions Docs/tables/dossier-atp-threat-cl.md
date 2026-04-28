# dossier_atp_threat_CL

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
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (58 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_atp_threat_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| batch_id_g | string |
| class_s | string |
| Computer | string |
| confidence_d | real |
| confidence_score_d | real |
| confidence_score_rating_s | string |
| confidence_score_vector_s | string |
| detected_t | datetime |
| dga_s | string |
| domain_s | string |
| email_s | string |
| expiration_t | datetime |
| extended_attack_chain_s | string |
| extended_cyberint_guid_g | string |
| extended_email_id_s | string |
| extended_extended_s | string |
| extended_from_email_s | string |
| extended_no_whitelist_s | string |
| extended_notes_s | string |
| extended_processor_s | string |
| extended_protocol_s | string |
| extended_provider_s | string |
| extended_reason_s | string |
| extended_references_s | string |
| extended_registration_date_s | string |
| extended_subject_line_s | string |
| extended_submitter_s | string |
| extended_url_hash_g | string |
| full_origin_s | string |
| full_profile_s | string |
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
| risk_score_d | real |
| risk_score_rating_s | string |
| risk_score_vector_s | string |
| SourceSystem | string |
| target_s | string |
| task_id_g | string |
| TenantId | string |
| threat_level_d | real |
| threat_score_d | real |
| threat_score_rating_s | string |
| threat_score_vector_s | string |
| TimeGenerated | datetime |
| tld_s | string |
| Type | string |
| type_s | string |
| up_s | string |
| url_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Infoblox Data Connector via REST API](../connectors/infobloxdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

