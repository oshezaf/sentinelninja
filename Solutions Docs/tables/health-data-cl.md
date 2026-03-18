# Health_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (88 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Health_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| connectivity | dynamic |
| connectivity_sensors | dynamic |
| connectivity_updated_at | string |
| cpu | dynamic |
| cpu_idle_percent | real |
| cpu_nice_percent | real |
| cpu_system_percent | real |
| cpu_updated_at | string |
| cpu_user_percent | real |
| detection | dynamic |
| disk | dynamic |
| disk_disk_utilization | dynamic |
| disk_disk_utilization_free_bytes | real |
| disk_disk_utilization_total_bytes | real |
| disk_disk_utilization_usage_percent | real |
| disk_disk_utilization_used_bytes | real |
| disk_updated_at | string |
| hostid | dynamic |
| hostid_artifact_counts | dynamic |
| hostid_artifact_counts_arsenic | real |
| hostid_artifact_counts_carbon_black | real |
| hostid_artifact_counts_cb_cloud | real |
| hostid_artifact_counts_clear_state | real |
| hostid_artifact_counts_cookie | real |
| hostid_artifact_counts_crowdstrike | real |
| hostid_artifact_counts_cybereason | real |
| hostid_artifact_counts_dhcp | real |
| hostid_artifact_counts_dns | real |
| hostid_artifact_counts_end_time | real |
| hostid_artifact_counts_fireeye | real |
| hostid_artifact_counts_generic_edr | real |
| hostid_artifact_counts_idle_end | real |
| hostid_artifact_counts_idle_start | real |
| hostid_artifact_counts_invalid | real |
| hostid_artifact_counts_kerberos | real |
| hostid_artifact_counts_kerberos_user | real |
| hostid_artifact_counts_mdns | real |
| hostid_artifact_counts_netbios | real |
| hostid_artifact_counts_proxy_ip | real |
| hostid_artifact_counts_rdns | real |
| hostid_artifact_counts_sentinelone | real |
| hostid_artifact_counts_split | real |
| hostid_artifact_counts_src_port | real |
| hostid_artifact_counts_static_ip | real |
| hostid_artifact_counts_TestEDR | real |
| hostid_artifact_counts_total | real |
| hostid_artifact_counts_uagent | real |
| hostid_artifact_counts_vmachine_info | real |
| hostid_artifact_counts_windows_defender | real |
| hostid_artifact_counts_zia_device | real |
| hostid_artifact_counts_zpa_user | real |
| hostid_ip_always_percent | real |
| hostid_ip_never_percent | real |
| hostid_ip_sometimes_percent | real |
| hostid_updated_at | string |
| memory | dynamic |
| memory_free_bytes | real |
| memory_total_bytes | real |
| memory_updated_at | string |
| memory_usage_percent | real |
| memory_used_bytes | real |
| network | dynamic |
| power | dynamic |
| power_error | string |
| power_status | string |
| power_updated_at | string |
| sensors | dynamic |
| system | dynamic |
| system_serial_number | string |
| system_updated_at | string |
| system_uptime | string |
| system_version | dynamic |
| system_version_cloud_bridge | bool |
| system_version_gmt | datetime |
| system_version_last_update | string |
| system_version_last_update_utc | datetime |
| system_version_mode | string |
| system_version_model | string |
| system_version_vectra_instance_type | string |
| system_version_vectra_version | string |
| system_version_vm_type | string |
| TenantId | string |
| TimeGenerated | datetime |
| trafficdrop | dynamic |
| trafficdrop_sensors | dynamic |
| trafficdrop_updated_at | string |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra XDR](../connectors/vectraxdr.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraXDR](../content/vectra-xdr-vectraxdr-67eeec96.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraHealth](../parsers/vectrahealth.md) | [Vectra XDR](../solutions/vectra-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

