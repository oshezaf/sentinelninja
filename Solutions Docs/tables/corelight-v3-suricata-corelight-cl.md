# Corelight_v3_suricata_corelight_CL

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

## Schema (67 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_suricata_corelight_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_action | string |
| alert_category | string |
| alert_gid | long |
| alert_metadata | dynamic |
| alert_references | dynamic |
| alert_rev | long |
| alert_rule | string |
| alert_severity | long |
| alert_signature | string |
| alert_signature_id | long |
| alert_xff | string |
| community_id | string |
| direction | string |
| eventtype | string |
| flow_id | long |
| icmp_code | long |
| icmp_type | long |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| id_vlan | real |
| id_vlan_inner | real |
| ids_type | string |
| metadata | dynamic |
| orig_vulnerable_host_cve | string |
| orig_vulnerable_host_host_uid | string |
| orig_vulnerable_host_hostname | string |
| orig_vulnerable_host_machine_domain | string |
| orig_vulnerable_host_os_version | string |
| orig_vulnerable_host_source | string |
| packet | string |
| path | string |
| payload | string |
| payload_length | long |
| payload_printable | string |
| pcap_cnt | long |
| references | dynamic |
| resp_vulnerable_host_cve | string |
| resp_vulnerable_host_host_uid | string |
| resp_vulnerable_host_hostname | string |
| resp_vulnerable_host_machine_domain | string |
| resp_vulnerable_host_os_version | string |
| resp_vulnerable_host_source | string |
| service | string |
| severity | string |
| severity_description | string |
| severity_id | real |
| severity_name | string |
| severity_syslog_definition | string |
| sid | string |
| signature | string |
| signature_id | real |
| spcap_url | string |
| suri_id | string |
| system_name | string |
| timeendpos | string |
| TimeGenerated | datetime |
| timestartpos | string |
| ts | datetime |
| tx_id | long |
| Type | string |
| uid | string |
| vlan_id | long |
| vlan_id_inner | long |
| write_ts | datetime |
| xff | string |

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

## Content Items Using This Table (4)

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
| [corelight_suricata_corelight](../parsers/corelight-suricata-corelight.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

