# Tenable_WAS_Asset_CL

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

## Schema (89 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_WAS_Asset_CL.json)

| Column Name | Type |
|:------------|:-----|
| acr_score | string |
| agent_names | dynamic |
| agent_uuid | string |
| cloud | dynamic |
| cloud_aws | dynamic |
| cloud_aws_availability_zone | string |
| cloud_aws_ec2_instance_ami_id | string |
| cloud_aws_ec2_instance_group_name | string |
| cloud_aws_ec2_instance_id | string |
| cloud_aws_ec2_instance_state_name | string |
| cloud_aws_ec2_instance_type | string |
| cloud_aws_ec2_name | string |
| cloud_aws_ec2_product_code | string |
| cloud_aws_owner_id | string |
| cloud_aws_region | string |
| cloud_aws_subnet_id | string |
| cloud_aws_vpc_id | string |
| cloud_azure | dynamic |
| cloud_azure_resource_id | string |
| cloud_azure_vm_id | string |
| cloud_gcp | dynamic |
| cloud_gcp_instance_id | string |
| cloud_gcp_project_id | string |
| cloud_gcp_zone | string |
| custom_attributes | dynamic |
| deleted_by | string |
| exposure_score | string |
| has_agent | bool |
| has_plugin_results | bool |
| id | string |
| installed_software | dynamic |
| is_licensed | bool |
| is_public | bool |
| manufacturer_tpm_ids | dynamic |
| network | dynamic |
| network_bios_uuid | string |
| network_device_serial_identifier | string |
| network_fqdns | dynamic |
| network_hostnames | dynamic |
| network_ipv4s | dynamic |
| network_ipv6s | dynamic |
| network_mac_addresses | dynamic |
| network_netbios_names | dynamic |
| network_network_id | string |
| network_network_interfaces | dynamic |
| network_network_name | string |
| network_open_ports | dynamic |
| network_ssh_fingerprints | dynamic |
| operating_systems | dynamic |
| ratings | dynamic |
| ratings_acr | dynamic |
| ratings_acr_score | real |
| ratings_aes | dynamic |
| ratings_aes_score | real |
| resource_tags | dynamic |
| scan | dynamic |
| scan_first_scan_time | datetime |
| scan_last_authenticated_scan_date | datetime |
| scan_last_authentication_attempt_date | datetime |
| scan_last_authentication_scan_status | string |
| scan_last_authentication_success_date | datetime |
| scan_last_licensed_scan_date | datetime |
| scan_last_scan_id | string |
| scan_last_scan_target | string |
| scan_last_scan_time | datetime |
| scan_last_schedule_id | string |
| serial_number | string |
| sources | dynamic |
| system_types | dynamic |
| tags | dynamic |
| tenable_agent_days_since_active | real |
| terminated_by | string |
| third_party_ids | dynamic |
| third_party_ids_bigfix_asset_id | string |
| third_party_ids_mcafee_epo_agent_guid | string |
| third_party_ids_mcafee_epo_guid | string |
| third_party_ids_qualys_asset_ids | dynamic |
| third_party_ids_qualys_host_ids | dynamic |
| third_party_ids_servicenow_sysid | string |
| third_party_ids_symantec_ep_hardware_keys | dynamic |
| TimeGenerated | datetime |
| timestamps | dynamic |
| timestamps_created_at | datetime |
| timestamps_deleted_at | datetime |
| timestamps_first_seen | datetime |
| timestamps_last_seen | datetime |
| timestamps_terminated_at | datetime |
| timestamps_updated_at | datetime |
| types | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Tenable App](../solutions/tenable-app.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable Vulnerability Management](../connectors/tenablevm.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

