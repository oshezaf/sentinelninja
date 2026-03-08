# SalesforceServiceCloud_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (213 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SalesforceServiceCloud_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| action_s | string |
| analytics_mode_s | string |
| api_type_s | string |
| api_version_s | string |
| app_name_s | string |
| app_type_s | string |
| article_id_s | string |
| article_status_s | string |
| article_version_id_s | string |
| article_version_s | string |
| average_row_size_s | string |
| batch_id_s | string |
| browser_name_s | string |
| browser_type_s | string |
| browser_version_s | string |
| callout_time_s | string |
| cipher_suite_s | string |
| class_name_s | string |
| clicked_record_id_s | string |
| client_id_s | string |
| client_info_s | string |
| client_ip_s | string |
| client_name_s | string |
| client_version_s | string |
| component_id_derived_s | string |
| component_id_s | string |
| component_name_s | string |
| Computer | string |
| connection_type_s | string |
| console_id_derived_s | string |
| console_id_s | string |
| context_s | string |
| controller_type_s | string |
| cpu_time_s | string |
| dashboard_component_id_s | string |
| dashboard_id_derived_s | string |
| dashboard_id_s | string |
| dashboard_type_s | string |
| data_s | string |
| db_blocks_s | string |
| db_cpu_time_s | string |
| db_total_time_s | string |
| delegated_user_id_derived_s | string |
| delegated_user_id_s | string |
| delegated_user_name_s | string |
| delivery_id_s | string |
| delivery_location_s | string |
| device_id_s | string |
| device_model_s | string |
| device_platform_s | string |
| device_session_id_s | string |
| display_type_s | string |
| document_id_derived_s | string |
| document_id_s | string |
| duration_s | string |
| effective_page_time_s | string |
| endtime | datetime |
| entity_id_s | string |
| entity_name_s | string |
| entity_s | string |
| entity_type_s | string |
| entry_point_s | string |
| ept_s | string |
| event_type_s | string |
| EventProduct | string |
| EventVendor | string |
| exception_message_s | string |
| exception_type_s | string |
| exec_time_s | string |
| file_preview_type_s | string |
| file_type_s | string |
| grandparent_ui_element_s | string |
| http_headers_s | string |
| http_method_s | string |
| is_ajax_request_s | string |
| is_api_s | string |
| is_error_s | string |
| is_first_request_s | string |
| is_guest_s | string |
| is_long_running_request_s | string |
| is_mobile_s | string |
| is_new_s | string |
| is_scheduled_s | string |
| is_secure_s | string |
| is_success_s | string |
| job_id_s | string |
| language_s | string |
| last_version_s | string |
| license_context_s | string |
| limit_usage_percent_s | string |
| log_group_id_s | string |
| login_key_s | string |
| login_status_s | string |
| managed_package_namespace_s | string |
| ManagementGroupName | string |
| media_type_s | string |
| Message | string |
| method_name_s | string |
| method_s | string |
| MG | string |
| name_s | string |
| num_clicks_s | string |
| num_results_s | string |
| num_sessions_s | string |
| number_buckets_s | string |
| number_columns_s | string |
| number_exception_filters_s | string |
| number_failures_s | string |
| number_fields_s | string |
| number_of_records_s | string |
| number_soql_queries_s | string |
| operation_type_s | string |
| organization_id_s | string |
| origin_s | string |
| os_name_s | string |
| os_version_s | string |
| page_app_name_s | string |
| page_context_s | string |
| page_entity_id_s | string |
| page_entity_type_s | string |
| page_name_s | string |
| page_start_time_s | string |
| page_url_s | string |
| parent_ui_element_s | string |
| platform_type_s | string |
| prefixes_searched_s | string |
| prevpage_app_name_s | string |
| prevpage_context_s | string |
| prevpage_entity_id_s | string |
| prevpage_entity_type_s | string |
| prevpage_url_s | string |
| query_id_s | string |
| query_s | string |
| quiddity_s | string |
| rank_s | string |
| RawData | string |
| read_time_s | string |
| record_id_derived_s | string |
| record_id_s | string |
| record_type_s | string |
| referrer_uri_s | string |
| related_entity_id_s | string |
| related_list_s | string |
| rendering_type_s | string |
| reopen_count_s | string |
| report_description_s | string |
| report_id_derived_s | string |
| report_id_s | string |
| request_id_s | string |
| request_size_s | string |
| request_status_s | string |
| request_type_s | string |
| resolution_type_s | string |
| response_size_s | string |
| row_count_s | string |
| rows_processed_s | string |
| run_time_s | string |
| sdk_app_type_s | string |
| sdk_app_version_s | string |
| sdk_version_s | string |
| search_query_s | string |
| session_id_s | string |
| session_key_s | string |
| session_level_s | string |
| session_type_s | string |
| shared_with_entity_id_s | string |
| sharing_operation_s | string |
| sharing_permission_s | string |
| site_id_s | string |
| size_bytes_s | string |
| sort_s | string |
| source_ip_s | string |
| SourceSystem | string |
| stack_trace_s | string |
| starttime | datetime |
| status_code_s | string |
| success_s | string |
| tab_id_s | string |
| target_ui_element_s | string |
| targetusername_has | string |
| TenantId | string |
| time_s | string |
| TimeGenerated | datetime |
| timestamp_derived_t | datetime |
| timestamp_s | string |
| tls_protocol_s | string |
| total_time_s | string |
| transaction_type_s | string |
| trigger_id_s | string |
| trigger_name_s | string |
| trigger_type_s | string |
| ui_event_id_s | string |
| ui_event_sequence_num_s | string |
| ui_event_source_s | string |
| ui_event_timestamp_s | string |
| ui_event_type_s | string |
| uri_id_derived_s | string |
| uri_s | string |
| url_s | string |
| user_agent_s | string |
| user_email_s | string |
| user_id_derived_s | string |
| user_id_s | string |
| user_initiated_logout_s | string |
| user_name_s | string |
| user_type_s | string |
| version_id_derived_s | string |
| version_id_s | string |
| view_state_size_s | string |
| wave_session_id_g | string |
| wave_timestamp_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (3)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Brute force attack against user credentials](../content/salesforce-service-cloud-brute-force-attack-against-user-credentials-5a6ce089-e756-40fb-b022-c8e8864a973a-39827da6.md) |  |
| [Potential Password Spray Attack](../content/salesforce-service-cloud-potential-password-spray-attack-64d16e62-1a17-4a35-9ea7-2b9fe6f07118-5b230e48.md) |  |
| [User Sign in from different countries](../content/salesforce-service-cloud-user-sign-in-from-different-countries-3094e036-e5ae-4d6e-8626-b0f86ebc71f2-a92654f0.md) |  |

### Workbooks (2)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SalesforceServiceCloud](../content/salesforce-service-cloud-salesforceservicecloud-a9451acb.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuthenticationSalesforceSC](../asim/asimauthenticationsalesforcesc.md) | Authentication | Salesforce Service Cloud |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SalesforceServiceCloud](../parsers/salesforceservicecloud.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

