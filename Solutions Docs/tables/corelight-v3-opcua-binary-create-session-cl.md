# Corelight_v3_opcua_binary_create_session_CL

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

## Schema (49 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_create_session_CL.json)

| Column Name | Type |
|:------------|:-----|
| algorithm | string |
| application_type | long |
| application_uri | string |
| auth_token_encoding_mask | string |
| auth_token_guid | string |
| auth_token_namespace_idx | long |
| auth_token_numeric | long |
| auth_token_opaque | string |
| auth_token_string | string |
| client_cert | string |
| client_cert_size | long |
| client_nonce | string |
| discovery_profile_link_id | string |
| discovery_profile_uri | string |
| encoding_mask | long |
| endpoint_link_id | string |
| endpoint_url | string |
| gateway_server_uri | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| locale | string |
| max_req_msg_size | long |
| max_res_msg_size | long |
| opcua_link_id | string |
| path | string |
| product_uri | string |
| req_session_timeout | long |
| revised_session_timeout | long |
| server_cert | string |
| server_cert_size | long |
| server_nonce | string |
| server_uri | string |
| session_id_encoding_mask | string |
| session_id_guid | string |
| session_id_namespace_idx | long |
| session_id_numeric | long |
| session_id_opaque | string |
| session_id_string | string |
| session_name | string |
| signature | string |
| system_name | string |
| text | string |
| TimeGenerated | datetime |
| ts | datetime |
| Type | string |
| uid | string |
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
| [corelight_opcua_binary_create_session](../parsers/corelight-opcua-binary-create-session.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

