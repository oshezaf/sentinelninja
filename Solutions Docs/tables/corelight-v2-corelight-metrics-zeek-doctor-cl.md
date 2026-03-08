# Corelight_v2_corelight_metrics_zeek_doctor_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_corelight_metrics_zeek_doctor_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _timestamp_s | string |
| _timestamp_t | datetime |
| _version_s | string |
| _write_ts_t | datetime |
| check_bursty_percent_d | real |
| check_dns_half_duplex_orig_percent_d | real |
| check_dns_half_duplex_resp_percent_d | real |
| check_local_to_local_percent_d | real |
| check_remote_to_remote_percent_d | real |
| check_tcp_backscatter_percent_d | real |
| check_tcp_byte_counts_wrong_percent_d | real |
| check_tcp_checksum_errors_percent_d | real |
| check_tcp_half_duplex_percent_d | real |
| check_tcp_missed_bytes_percent_d | real |
| check_tcp_no_ssl_on_443_percent_d | real |
| check_tcp_no_three_way_handshake_percent_d | real |
| check_tcp_retransmissions_percent_d | real |
| check_tcp_scan_percent_d | real |
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
| [corelight_corelight_metrics_zeek_doctor](../parsers/corelight-corelight-metrics-zeek-doctor.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

