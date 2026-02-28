# CitrixAnalytics_indicatorEventDetails_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (89 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CitrixAnalytics_indicatorEventDetails_CL.json)

| Column Name | Type |
|:------------|:-----|
| _timestamp_t | datetime |
| app_name_s | string |
| app_url_s | string |
| auth_server_ip_s | string |
| authentication_stage_s | string |
| authentication_type_s | string |
| browser_s | string |
| city_s | string |
| client_ip_s | string |
| component_name_s | string |
| connector_type_s | string |
| country_s | string |
| cs_vserver_name_s | string |
| data_source_id_d | real |
| device_browser_s | string |
| device_id_s | string |
| device_os_s | string |
| device_type_s | string |
| domain_category_group_s | string |
| domain_category_s | string |
| domain_name_s | string |
| domain_reputation_d | string |
| domain_s | string |
| entity_id_s | string |
| entity_time_zone_s | string |
| entity_type_s | string |
| event_description_s | string |
| event_id_s | string |
| event_type_s | string |
| executed_action_s | string |
| file_download_file_name_s | string |
| file_download_file_path_s | string |
| file_hash_g | string |
| file_name_s | string |
| file_path_s | string |
| file_size_in_bytes_d | real |
| file_type_s | string |
| folder_name_s | string |
| gateway_domain_name_s | string |
| gateway_ip_s | string |
| indicator_category_id_d | real |
| indicator_id_s | string |
| indicator_uuid_g | string |
| indicator_vector_id_d | real |
| indicator_vector_name_s | string |
| is_risky_s | string |
| job_details_filename_s | string |
| job_details_format_s | string |
| job_details_size_in_bytes_s | string |
| latitude_s | string |
| launch_type_s | string |
| lifetime_first_event_time_t | datetime |
| lifetime_num_times_downloaded_d | real |
| lifetime_total_download_size_in_bytes_d | real |
| lifetime_unique_user_count_d | real |
| lifetime_unique_user_emails_s | string |
| longitude_s | string |
| module_file_path_s | string |
| nth_failure_d | real |
| occurrence_event_type_s | string |
| operation_name_s | string |
| os_extra_details_s | string |
| os_extra_info_s | string |
| os_major_version_s | string |
| os_minor_version_s | string |
| os_name_s | string |
| os_version_s | string |
| policy_name_s | string |
| printer_name_s | string |
| product_s | string |
| reason_for_action_s | string |
| receiver_type_s | string |
| region_s | string |
| resource_name_s | string |
| resource_type_s | string |
| security_expression_s | string |
| server_name_s | string |
| session_guid_s | string |
| session_user_name_s | string |
| share_id_s | string |
| tenant_id_s | string |
| TimeGenerated | datetime |
| tool_name_s | string |
| transaction_count_d | real |
| user_email_s | string |
| version_d | real |
| virus_name_s | string |
| vpn_vserver_name_s | string |
| vserver_fqdn_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CITRIX SECURITY ANALYTICS](../connectors/citrix.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Citrix Analytics for Security](../solutions/citrix-analytics-for-security.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Citrix](../content/citrix-analytics-for-security-citrix-7f228429.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

