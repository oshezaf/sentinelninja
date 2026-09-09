# Corelight_v3_opcua_binary_CL

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

## Schema (55 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_CL.json)

| Column Name | Type |
|:------------|:-----|
| encoding_mask | long |
| endpoint_url | string |
| error | long |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| identifier | long |
| identifier_str | string |
| is_final | string |
| max_chunk_cnt | long |
| max_msg_size | long |
| msg_size | long |
| msg_type | string |
| namespace_idx | long |
| opcua_link_id | string |
| path | string |
| rcv_buf_size | long |
| rcv_cert | string |
| rcv_cert_len | int |
| reason | string |
| req_hdr_add_hdr_enc_mask | long |
| req_hdr_add_hdr_type_id | long |
| req_hdr_audit_entry_id | string |
| req_hdr_node_id_guid | string |
| req_hdr_node_id_namespace_idx | long |
| req_hdr_node_id_numeric | long |
| req_hdr_node_id_opaque | string |
| req_hdr_node_id_string | string |
| req_hdr_node_id_type | string |
| req_hdr_request_handle | long |
| req_hdr_return_diag | long |
| req_hdr_timeout_hint | long |
| req_hdr_timestamp | datetime |
| request_id | long |
| res_hdr_add_hdr_enc_mask | long |
| res_hdr_add_hdr_type_id | long |
| res_hdr_request_handle | long |
| res_hdr_service_diag_encoding | long |
| res_hdr_timestamp | datetime |
| sec_channel_id | long |
| sec_policy_uri | string |
| sec_policy_uri_len | int |
| seq_number | long |
| snd_buf_size | long |
| snd_cert | string |
| snd_cert_len | int |
| status_code_link_id | string |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| Type | string |
| uid | string |
| version | long |
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
| [corelight_opcua_binary](../parsers/corelight-opcua-binary.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

