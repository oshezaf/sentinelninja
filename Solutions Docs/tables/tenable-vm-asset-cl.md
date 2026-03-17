# Tenable_VM_Asset_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (76 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_VM_Asset_CL.json)

| Column Name | Type |
|:------------|:-----|
| acr_score | string |
| agent_names | dynamic |
| agent_uuid | string |
| aws_availability_zone | string |
| aws_ec2_instance_ami_id | string |
| aws_ec2_instance_group_name | string |
| aws_ec2_instance_id | string |
| aws_ec2_instance_state_name | string |
| aws_ec2_instance_type | string |
| aws_ec2_name | string |
| aws_ec2_product_code | string |
| aws_owner_id | string |
| aws_region | string |
| aws_subnet_id | string |
| aws_vpc_id | string |
| azure_resource_id | string |
| azure_vm_id | string |
| bigfix_asset_id | string |
| bios_uuid | string |
| created_at | datetime |
| deleted_at | datetime |
| deleted_by | string |
| exposure_score | string |
| first_scan_time | datetime |
| first_seen | datetime |
| fqdns | dynamic |
| gcp_instance_id | string |
| gcp_project_id | string |
| gcp_zone | string |
| has_agent | bool |
| has_plugin_results | bool |
| hostnames | dynamic |
| id | string |
| installed_software | dynamic |
| ipv4s | dynamic |
| ipv6s | dynamic |
| last_authenticated_scan_date | datetime |
| last_authentication_attempt_date | datetime |
| last_authentication_scan_status | string |
| last_authentication_success_date | datetime |
| last_licensed_scan_date | datetime |
| last_scan_id | string |
| last_scan_target | string |
| last_scan_time | datetime |
| last_schedule_id | string |
| last_seen | datetime |
| mac_addresses | dynamic |
| manufacturer_tpm_ids | dynamic |
| mcafee_epo_agent_guid | string |
| mcafee_epo_guid | string |
| netbios_names | dynamic |
| network_id | string |
| network_interfaces | dynamic |
| network_name | string |
| open_ports | dynamic |
| operating_systems | dynamic |
| qualys_asset_ids | dynamic |
| qualys_host_ids | dynamic |
| ratings | dynamic |
| ratings_acr | dynamic |
| ratings_acr_score | real |
| ratings_aes | dynamic |
| ratings_aes_score | real |
| resource_tags | dynamic |
| serial_number | string |
| servicenow_sysid | string |
| sources | dynamic |
| ssh_fingerprints | dynamic |
| symantec_ep_hardware_keys | dynamic |
| system_types | dynamic |
| tags | dynamic |
| tenable_agent_days_since_active | real |
| terminated_at | datetime |
| terminated_by | string |
| TimeGenerated | datetime |
| updated_at | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Tenable App](../solutions/tenable-app.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable Vulnerability Management](../connectors/tenablevm.md) |  |

---

## Content Items Using This Table (1)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TenableVMAssets](../parsers/tenablevmassets.md) | [Tenable App](../solutions/tenable-app.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

