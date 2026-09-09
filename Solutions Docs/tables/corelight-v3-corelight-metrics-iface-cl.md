# Corelight_v3_corelight_metrics_iface_CL

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

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_corelight_metrics_iface_CL.json)

| Column Name | Type |
|:------------|:-----|
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| mgmt_in_bytes | real |
| mgmt_in_bytes_mbps | real |
| mgmt_in_packets | real |
| mgmt_in_packets_kpps | real |
| mgmt_out_bytes | real |
| mgmt_out_bytes_mbps | real |
| mgmt_out_packets | real |
| mgmt_out_packets_kpps | real |
| monitor_dropper_total_activated_count | real |
| monitor_dropper_total_drops_by_age | real |
| monitor_flows_change | real |
| monitor_flows_shunted | real |
| monitor_nic_drops | real |
| monitor_nic_drops_kpps | real |
| monitor_port_1_bytes | real |
| monitor_port_1_kpps | real |
| monitor_port_1_malformed | real |
| monitor_port_1_malformed_kpps | real |
| monitor_port_1_mbps | real |
| monitor_port_1_packets | real |
| monitor_port_1_rxpower | real |
| monitor_port_2_bytes | real |
| monitor_port_2_kpps | real |
| monitor_port_2_malformed | real |
| monitor_port_2_malformed_kpps | real |
| monitor_port_2_mbps | real |
| monitor_port_2_packets | real |
| monitor_port_2_rxpower | real |
| monitor_port_3_bytes | real |
| monitor_port_3_kpps | real |
| monitor_port_3_malformed | real |
| monitor_port_3_malformed_kpps | real |
| monitor_port_3_mbps | real |
| monitor_port_3_packets | real |
| monitor_port_3_rxpower | real |
| monitor_port_4_bytes | real |
| monitor_port_4_kpps | real |
| monitor_port_4_malformed | real |
| monitor_port_4_malformed_kpps | real |
| monitor_port_4_mbps | real |
| monitor_port_4_packets | real |
| monitor_port_4_rxpower | real |
| monitor_processor_1_temperature | real |
| monitor_processor_2_temperature | real |
| monitor_resource_drops | real |
| monitor_resource_drops_kpps | real |
| monitor_total_bytes | real |
| monitor_total_drops | real |
| monitor_total_drops_kpps | real |
| monitor_total_kpps | real |
| monitor_total_mbps | real |
| monitor_total_packets | real |
| monitor_total_shunted | real |
| monitor_total_shunted_kpps | real |
| monitor_zeek_packet_delay | real |
| path | string |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| Type | string |
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

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Operations](../content/corelight-corelight-operations-90113242.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_corelight_metrics_iface](../parsers/corelight-corelight-metrics-iface.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

