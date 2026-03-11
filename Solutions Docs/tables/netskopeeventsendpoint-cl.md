# NetskopeEventsEndpoint_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (59 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeEventsEndpoint_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_method | string |
| action | string |
| activity | string |
| activity_type | string |
| alert | string |
| alert_generated | bool |
| alert_name | string |
| alert_type | string |
| app | string |
| computer_name | string |
| connection_type | string |
| destination_file_directory | string |
| destination_file_name | string |
| destination_file_path | string |
| device | string |
| device_id | string |
| device_name | string |
| device_sn | string |
| device_type | string |
| dlp_incidentid | string |
| dlp_profile | string |
| dlp_profile_name | string |
| dlp_rule | string |
| driver | string |
| event_recovered | bool |
| executable_hash | string |
| executable_signed | bool |
| file_origin | string |
| file_size | int |
| file_type | string |
| incidentid | string |
| justification | string |
| location | string |
| md5 | string |
| os | string |
| os_details | string |
| os_user_name | string |
| pid | string |
| policy_action | string |
| policy_action_enforced | string |
| policy_name | string |
| policy_name_enforced | string |
| policy_version | string |
| port | string |
| printer_identifier | string |
| process_cert_subject | string |
| process_name | string |
| process_path | string |
| product_id | string |
| sha256 | string |
| source_file_directory | string |
| source_file_name | string |
| sub_type | string |
| TimeGenerated | datetime |
| timestamp | int |
| type_s | string |
| unc_path | string |
| user | string |
| vendor_id | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Alerts and Events](../connectors/netskopealertsevents.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeEventsEndpoint](../parsers/netskopeeventsendpoint.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

