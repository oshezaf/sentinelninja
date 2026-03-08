# CortexXpanseAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (76 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20Xpanse%20CCF/Data%20Connectors/CortexXpanse_ccp/CortexXpanse_DCR.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| action_country | dynamic |
| action_external_hostname | string |
| action_local_ip | string |
| action_local_ip_v6 | string |
| action_local_port | string |
| action_pretty | string |
| action_remote_ip | dynamic |
| action_remote_ip_v6 | dynamic |
| action_remote_port | dynamic |
| alert_id | string |
| alert_type | string |
| asm_alert_categories | dynamic |
| asset_identifiers | dynamic |
| asset_ids | dynamic |
| attack_surface_rule_id | string |
| attack_surface_rule_name | string |
| aws_cloud_tags | dynamic |
| azure_cloud_tags | dynamic |
| business_unit_hierarchies | dynamic |
| case_id | int |
| category | string |
| certificate | dynamic |
| certificate_subject_organization | string |
| cloud_management_status | string |
| cloud_provider | string |
| cloud_providers | dynamic |
| country_codes | dynamic |
| deduplicate_tokens | string |
| description | string |
| detection_timestamp | long |
| domain_names | dynamic |
| dynamic_fields | dynamic |
| end_match_attempt_ts | long |
| endpoint_id | string |
| event_id | string |
| event_timestamp | dynamic |
| event_type | string |
| events | string |
| external_id | string |
| externally_detected_version | string |
| filter_rule_id | string |
| gcp_cloud_tags | dynamic |
| host_ip | string |
| host_name | string |
| image_name | string |
| integration_source | string |
| ipv4_addresses | dynamic |
| ipv6_addresses | dynamic |
| is_whitelisted | boolean |
| last_modified_ts | long |
| last_observed | long |
| local_insert_ts | long |
| mac_addresses | dynamic |
| malicious_urls | dynamic |
| matching_service_rule_id | string |
| matching_status | string |
| mitre_tactic_id_and_name | dynamic |
| mitre_technique_id_and_name | dynamic |
| name | string |
| port_number | int |
| port_protocol | string |
| project | string |
| remediation_guidance | string |
| resolution_comment | string |
| resolution_status | string |
| resource_sub_type | string |
| resource_type | string |
| service_ids | dynamic |
| severity | string |
| source | string |
| starred | boolean |
| tags | dynamic |
| user_name | string |
| website_ids | dynamic |
| xpanse_first_observed | long |

## Solutions (1)

This table is used by the following solutions:

- [Palo Alto Cortex Xpanse CCF](../solutions/palo-alto-cortex-xpanse-ccf.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](../connectors/paloaltoexpanseccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

