# Corelight_v3_opcua_binary_activate_session_CL

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
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_activate_session_CL.json)

| Column Name | Type |
|:------------|:-----|
| activate_session_diag_info_link_id | string |
| client_algorithm | string |
| client_signature | string |
| client_software_cert_link_id | string |
| ext_obj_certificate_data | string |
| ext_obj_encoding | string |
| ext_obj_encryption_algorithom | string |
| ext_obj_password | string |
| ext_obj_policy_id | string |
| ext_obj_token_data | string |
| ext_obj_type_id_encoding_mask | string |
| ext_obj_type_id_guid | string |
| ext_obj_type_id_namespace_idx | long |
| ext_obj_type_id_numeric | long |
| ext_obj_type_id_opaque | string |
| ext_obj_type_id_str | string |
| ext_obj_type_id_string | string |
| ext_obj_user_name | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| opcua_link_id | string |
| opcua_locale_link_id | string |
| path | string |
| server_nonce | string |
| status_code_link_id | string |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| Type | string |
| uid | string |
| user_token_algorithm | string |
| user_token_signature | string |
| write_ts | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_opcua_binary_activate_session](../parsers/corelight-opcua-binary-activate-session.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

