# IP_Space_Info_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (76 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/IP_Space_Info_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| asm_config_asm_threshold_d | real |
| asm_config_enable_b | bool |
| asm_config_enable_notification_b | bool |
| asm_config_forecast_period_d | real |
| asm_config_growth_factor_d | real |
| asm_config_growth_type_s | string |
| asm_config_history_d | real |
| asm_config_min_total_d | real |
| asm_config_min_unused_d | real |
| asm_config_reenable_date_t | datetime |
| asm_scope_flag_d | real |
| comment_s | string |
| compartment_id_s | string |
| Computer | string |
| created_at_t | datetime |
| ddns_client_update_s | string |
| ddns_conflict_resolution_mode_s | string |
| ddns_domain_s | string |
| ddns_generate_name_b | bool |
| ddns_generated_prefix_s | string |
| ddns_send_updates_b | bool |
| ddns_ttl_percent_d | real |
| ddns_update_on_renew_b | bool |
| ddns_use_conflict_resolution_b | bool |
| default_realms_s | string |
| dhcp_config_abandoned_reclaim_time_d | real |
| dhcp_config_abandoned_reclaim_time_v6_d | real |
| dhcp_config_allow_unknown_b | bool |
| dhcp_config_allow_unknown_v6_b | bool |
| dhcp_config_echo_client_id_b | bool |
| dhcp_config_filters_large_selection_s | string |
| dhcp_config_filters_s | string |
| dhcp_config_filters_v6_s | string |
| dhcp_config_ignore_client_uid_b | bool |
| dhcp_config_ignore_list_s | string |
| dhcp_config_lease_time_d | real |
| dhcp_config_lease_time_v6_d | real |
| dhcp_options_s | string |
| dhcp_options_v6_s | string |
| header_option_filename_s | string |
| header_option_server_address_s | string |
| header_option_server_name_s | string |
| hostname_rewrite_char_s | string |
| hostname_rewrite_enabled_b | bool |
| hostname_rewrite_regex_s | string |
| id_s | string |
| ManagementGroupName | string |
| MG | string |
| name_s | string |
| RawData | string |
| SourceSystem | string |
| tags_nios_federation_enabled_s | string |
| tags_nios_grid_name_s | string |
| tags_nios_import_timestamp_t | datetime |
| tags_nios_imported_s | string |
| TenantId | string |
| threshold_enabled_b | bool |
| threshold_high_d | real |
| threshold_low_d | real |
| TimeGenerated | datetime |
| Type | string |
| updated_at_t | datetime |
| utilization_abandon_utilization_d | real |
| utilization_abandoned_s | string |
| utilization_dynamic_s | string |
| utilization_free_s | string |
| utilization_static_s | string |
| utilization_total_s | string |
| utilization_used_s | string |
| utilization_utilization_d | real |
| utilization_v6_abandoned_s | string |
| utilization_v6_dynamic_s | string |
| utilization_v6_static_s | string |
| utilization_v6_total_s | string |
| utilization_v6_used_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Workbook](../content/infoblox-infoblox-workbook-0b2c239e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

