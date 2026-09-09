# Corelight_v3_conn_agg_CL

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
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (74 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_conn_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| app | dynamic |
| community_ids | dynamic |
| conn_state | string |
| corelight_shunted | dynamic |
| count | long |
| duration | real |
| history | string |
| id_orig_h | string |
| id_orig_h_n | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_h_n | string |
| id_resp_p | int |
| id_vlan | string |
| inner_vlan | int |
| local_orig | bool |
| local_resp | bool |
| missed_bytes | long |
| netskope_site_ids | dynamic |
| netskope_user_ids | dynamic |
| orig_bytes | long |
| orig_inst_az | string |
| orig_inst_id | string |
| orig_inst_location | string |
| orig_inst_name | string |
| orig_inst_network | string |
| orig_inst_network_tags | string |
| orig_inst_nsg | string |
| orig_inst_org_id | string |
| orig_inst_os | string |
| orig_inst_project | string |
| orig_inst_resource_group | string |
| orig_inst_sg_ids | string |
| orig_inst_subnet_id | string |
| orig_inst_subscription | string |
| orig_inst_vpc_id | string |
| orig_ip_bytes | long |
| orig_pkts | real |
| orig_shunted_bytes | long |
| orig_shunted_pkts | real |
| path | string |
| proto | string |
| resp_bytes | long |
| resp_inst_az | string |
| resp_inst_id | string |
| resp_inst_location | string |
| resp_inst_name | string |
| resp_inst_network | string |
| resp_inst_network_tags | string |
| resp_inst_nsg | string |
| resp_inst_org_id | string |
| resp_inst_os | string |
| resp_inst_project | string |
| resp_inst_resource_group | string |
| resp_inst_sg_ids | string |
| resp_inst_subnet_id | string |
| resp_inst_subscription | string |
| resp_inst_vpc_id | string |
| resp_ip_bytes | long |
| resp_pkts | real |
| resp_shunted_bytes | long |
| resp_shunted_pkts | real |
| service | dynamic |
| spcap_urls | dynamic |
| suri_ids | dynamic |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| ts_last | datetime |
| tunnel_parents | dynamic |
| Type | string |
| uids | dynamic |
| vlan | int |
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

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Forced External Outbound SMB](../content/corelight-corelight-forced-external-outbound-smb-73f23aa2-5cc4-4507-940b-75c9092e9e01-7d9f3286.md) |  |
| [Corelight - Network Service Scanning Multiple IP Addresses](../content/corelight-corelight-network-service-scanning-multiple-ip-addresses-599570d4-06f8-4939-8e29-95cd003f1abd-442ae0cd.md) |  |

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_conn_agg](../parsers/corelight-conn-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

