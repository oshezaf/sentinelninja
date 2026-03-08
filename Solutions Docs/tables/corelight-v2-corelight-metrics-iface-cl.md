# Corelight_v2_corelight_metrics_iface_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_corelight_metrics_iface_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _timestamp_s | string |
| _timestamp_t | datetime |
| _version_s | string |
| _write_ts_t | datetime |
| mgmt_in_bytes_d | real |
| mgmt_in_bytes_mbps_d | real |
| mgmt_in_packets_d | real |
| mgmt_in_packets_kpps_d | real |
| mgmt_out_bytes_d | real |
| mgmt_out_bytes_mbps_d | real |
| mgmt_out_packets_d | real |
| mgmt_out_packets_kpps_d | real |
| monitor_dropper_total_activated_count_d | real |
| monitor_dropper_total_drops_by_age_d | real |
| monitor_total_bytes_d | real |
| monitor_total_drops_d | real |
| monitor_total_drops_kpps_d | real |
| monitor_total_kpps_d | real |
| monitor_total_mbps_d | real |
| monitor_total_packets_d | real |
| monitor_zeek_packet_delay_d | real |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Sensor_Overview](../content/corelight-corelight-sensor-overview-71e61142.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_corelight_metrics_iface](../parsers/corelight-corelight-metrics-iface.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

