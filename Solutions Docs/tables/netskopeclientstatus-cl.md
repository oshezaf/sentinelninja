# NetskopeClientStatus_CL

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

## Schema (62 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeClientStatus_CL.json)

| Column Name | Type |
|:------------|:-----|
| as_s | string |
| asn | string |
| city | string |
| client_install_time | string |
| client_version | string |
| continent | string |
| count_i | int |
| country | string |
| dem_feature_enabled | string |
| dem_feature_enabled_name | string |
| device_hash | string |
| device_id | string |
| enriched | string |
| guid | string |
| heart_beat | string |
| host_info_client_version | string |
| host_info_device_make | string |
| host_info_device_model | string |
| host_info_hostname | string |
| host_info_last_update_timestamp | string |
| host_info_mac_addresses | string |
| host_info_managementid | string |
| host_info_nsdeviceuid | string |
| host_info_old_nsdeviceuid | string |
| host_info_os | string |
| host_info_os_name | string |
| host_info_os_version | string |
| host_info_serial_number | string |
| host_info_steering_config | string |
| isp | string |
| last_connected_from_private_ip | string |
| last_connected_from_public_ip | string |
| last_event_timestamp | string |
| last_seen_device_event_actor | string |
| last_seen_device_event_actor_name | string |
| last_seen_device_event_event | string |
| last_seen_device_event_event_details | string |
| last_seen_device_event_event_name | string |
| last_seen_device_event_npa_status | string |
| last_seen_device_event_npa_status_name | string |
| last_seen_device_event_service_name | string |
| last_seen_device_event_status | string |
| last_seen_device_event_status_name | string |
| last_seen_device_event_status_v2 | string |
| last_seen_device_event_status_v2_name | string |
| last_seen_device_event_timestamp | string |
| latitude | string |
| longitude | string |
| organization | string |
| pop_name | string |
| pop_pinned | string |
| postal_code | string |
| record_type | string |
| region | string |
| TimeGenerated | datetime |
| timestamp | int |
| user_info_device_classification_status | string |
| user_info_device_classification_status_name | string |
| user_info_orgkey | string |
| user_info_userkey | string |
| user_info_username | string |
| zipcode | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Client Status](../connectors/netskopeclientstatus.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netskope Client - Internet Security disabled by user](../content/netskopev2-netskope-client-internet-security-disabled-by-user-3e9b7d54-2a6c-4f18-b0e5-c7a94d21f6b8-7c9a19fc.md) |  |
| [Netskope Client - Private Access disabled by user](../content/netskopev2-netskope-client-private-access-disabled-by-user-8c1f6a2e-4b7d-4e3a-9f21-5d0c7b9e6a41-3f0d1037.md) |  |

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeClientStatusDashboard](../content/netskopev2-netskopeclientstatusdashboard-cb2ff8e3.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeClientStatus](../parsers/netskopeclientstatus.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

