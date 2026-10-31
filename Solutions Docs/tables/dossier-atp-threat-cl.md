# dossier_atp_threat_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (64 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_atp_threat_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| batch_id | string |
| class | string |
| confidence | real |
| confidence_score | real |
| confidence_score_rating | string |
| confidence_score_vector | string |
| detected | datetime |
| dga | string |
| domain | string |
| email | string |
| expiration | datetime |
| extended | dynamic |
| extended_ais_consent | string |
| extended_attack_chain | string |
| extended_comments | string |
| extended_confidence_score | string |
| extended_cyberint_guid | string |
| extended_email_id | string |
| extended_extended | string |
| extended_from_email | string |
| extended_no_whitelist | string |
| extended_notes | string |
| extended_processor | string |
| extended_protocol | string |
| extended_provider | string |
| extended_reason | string |
| extended_references | string |
| extended_risk_score | string |
| extended_sample_sha256 | string |
| extended_subject_line | string |
| extended_submitter | string |
| extended_surbl_list | string |
| extended_threat_score | string |
| full_profile | string |
| hash | string |
| hash_type | string |
| host | string |
| id_value | string |
| imported | datetime |
| ip | string |
| origin | string |
| profile | string |
| property | string |
| received | datetime |
| risk_score | real |
| risk_score_rating | string |
| risk_score_vector | string |
| RowData | dynamic |
| target | string |
| task_id | string |
| TenantId | string |
| threat_label | string |
| threat_level | real |
| threat_score | real |
| threat_score_rating | string |
| threat_score_vector | string |
| TimeGenerated | datetime |
| tld | string |
| tlp | string |
| Type | string |
| type_value | string |
| up | string |
| url | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

