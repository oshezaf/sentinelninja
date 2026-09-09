# Corelight_v3_conn_CL

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

## Schema (65 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_conn_CL.json)

| Column Name | Type |
|:------------|:-----|
| app | dynamic |
| capture_metadata_vpc_version | int |
| capture_metadata_vpc_vpc_id | string |
| capture_source | string |
| community_id | string |
| conn_state | string |
| corelight_shunted | bool |
| duration | real |
| history | string |
| id_orig_h | string |
| id_orig_h_name_src | string |
| id_orig_h_name_vals | dynamic |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_h_name_src | string |
| id_resp_h_name_vals | dynamic |
| id_resp_p | int |
| id_vlan | real |
| inner_vlan | int |
| local_orig | bool |
| local_resp | bool |
| missed_bytes | long |
| netskope_site_id | string |
| netskope_user_id | string |
| orig_bytes | long |
| orig_cc | string |
| orig_inst_az | string |
| orig_inst_id | string |
| orig_inst_name | string |
| orig_inst_org_id | string |
| orig_inst_sg_ids | string |
| orig_inst_subnet_id | string |
| orig_inst_vpc_id | string |
| orig_ip_bytes | long |
| orig_l2_addr | string |
| orig_pkts | long |
| orig_shunted_bytes | long |
| orig_shunted_pkts | long |
| packets | real |
| path | string |
| pcr | real |
| proto | string |
| resp_bytes | long |
| resp_cc | string |
| resp_inst_az | string |
| resp_inst_id | string |
| resp_inst_org_id | string |
| resp_ip_bytes | long |
| resp_l2_addr | string |
| resp_pkts | long |
| resp_shunted_bytes | long |
| resp_shunted_pkts | long |
| service | string |
| spcap_rule | real |
| spcap_trigger | string |
| spcap_url | string |
| suri_ids | dynamic |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| tunnel_parents | dynamic |
| Type | string |
| uid | string |
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

## Content Items Using This Table (7)

### Analytic Rules (2)

**In solution [Corelight](../solutions/corelight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Forced External Outbound SMB](../content/corelight-corelight-forced-external-outbound-smb-73f23aa2-5cc4-4507-940b-75c9092e9e01-7d9f3286.md) |  |
| [Corelight - Network Service Scanning Multiple IP Addresses](../content/corelight-corelight-network-service-scanning-multiple-ip-addresses-599570d4-06f8-4939-8e29-95cd003f1abd-442ae0cd.md) |  |

### Hunting Queries (1)

**In solution [Corelight](../solutions/corelight.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - External Facing Services](../content/corelight-corelight-external-facing-services-3e42a796-9a4c-4ebf-a0e0-5282947986b5-c93e035f.md) |  |

### Workbooks (4)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight](../content/corelight-corelight-90dad195.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Data_Insights](../content/corelight-corelight-data-insights-e22362fc.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_conn](../parsers/corelight-conn.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

