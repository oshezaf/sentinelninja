# SalesforceServiceCloud_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (424 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SalesforceServiceCloud_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| access_error_s | string |
| action_message_s | string |
| action_name_s | string |
| action_s | string |
| action_type_s | string |
| action_version_s | string |
| actual_logged_in_user_id_s | string |
| actual_user_id_s | string |
| agent_action_s | string |
| all_or_none_s | string |
| analytics_mode_s | string |
| apex_entity_name_s | string |
| api_caller_s | string |
| api_client_category_s | string |
| api_family_s | string |
| api_resource_s | string |
| api_type_s | string |
| api_version_s | string |
| app_name_s | string |
| app_type_s | string |
| article_id_s | string |
| article_status_s | string |
| article_version_id_s | string |
| article_version_s | string |
| asset_id_s | string |
| asset_type_s | string |
| attachment_id_s | string |
| authentication_context_class_reference_s | string |
| authentication_method_reference_s | string |
| authentication_service_id_s | string |
| average_row_size_s | string |
| b2b_edition_s | string |
| b2b_version_s | string |
| batch_id_s | string |
| blocked_uri_domain_s | string |
| blocked_uri_s | string |
| bot_id_s | string |
| bot_session_id_g | string |
| bot_session_id_s | string |
| browser_device_type_s | string |
| browser_name_s | string |
| browser_type_s | string |
| browser_version_s | string |
| bytes_s | string |
| caller_package_namespace_s | string |
| callout_time_s | string |
| cancelled_reason_s | string |
| case_id_s | string |
| change_set_name_s | string |
| cipher_suite_s | string |
| clicked_record_id_s | string |
| client_geo_s | string |
| client_id_s | string |
| client_info_s | string |
| client_ip_s | string |
| client_name_s | string |
| client_version_s | string |
| column_number_s | string |
| component_name_s | string |
| Computer | string |
| concurrency_mode_s | string |
| connect_end_s | string |
| connect_start_s | string |
| connected_app_id_s | string |
| connected_app_name_s | string |
| connection_type_s | string |
| content_type_s | string |
| context_id_s | string |
| context_map_s | string |
| context_s | string |
| continuation_id_s | string |
| controller_type_s | string |
| correlation_id_s | string |
| count_s | string |
| country_code_s | string |
| counts_against_api_limit_s | string |
| cpu_time_s | string |
| current_sandbox_org_id_s | string |
| dashboard_component_id_s | string |
| dashboard_id_derived_s | string |
| dashboard_id_s | string |
| dashboard_type_s | string |
| data_s | string |
| dataset_ids_s | string |
| db_blocks_s | string |
| db_cpu_time_s | string |
| db_total_time_s | string |
| decoded_body_size_s | string |
| delegated_user_id_derived_s | string |
| delegated_user_id_s | string |
| delegated_user_name_s | string |
| delivery_id_s | string |
| delivery_location_s | string |
| description_s | string |
| device_id_g | string |
| device_id_s | string |
| device_model_s | string |
| device_platform_s | string |
| device_session_id_g | string |
| device_session_id_s | string |
| directive_s | string |
| display_type_s | string |
| disposition_s | string |
| dml_type_s | string |
| document_id_derived_s | string |
| document_id_s | string |
| dom_complete_s | string |
| dom_content_loaded_event_end_s | string |
| dom_content_loaded_event_start_s | string |
| dom_interactive_s | string |
| domain_lookup_end_s | string |
| domain_lookup_start_s | string |
| download_error_s | string |
| download_format_s | string |
| duration_s | string |
| easy_suite_value_s | string |
| effective_account_id_s | string |
| effective_page_time_deviation_error_type_s | string |
| effective_page_time_deviation_reason_s | string |
| effective_page_time_deviation_s | string |
| effective_page_time_s | string |
| encoded_body_size_s | string |
| entity_id_s | string |
| entity_name_s | string |
| entity_s | string |
| entity_type_s | string |
| entry_point_s | string |
| ept_s | string |
| error_code_s | string |
| error_description_s | string |
| error_message_s | string |
| error_timestamp_s | string |
| event_type_s | string |
| exception_category_s | string |
| exception_message_s | string |
| exception_type_s | string |
| exec_time_s | string |
| execute_ms_s | string |
| expand_s | string |
| failure_reason_s | string |
| failure_type_s | string |
| feature_id_s | string |
| fetch_ms_s | string |
| fetch_start_s | string |
| file_preview_type_s | string |
| file_type_s | string |
| filter_s | string |
| first_entity_id_s | string |
| first_interim_response_start_s | string |
| flow_load_time_s | string |
| flow_process_type_s | string |
| flow_version_id_s | string |
| forwarded_for_ip_s | string |
| grandparent_ui_element_s | string |
| group_id_s | string |
| group_type_s | string |
| has_chart_s | string |
| host_s | string |
| http_headers_s | string |
| http_method_s | string |
| http_referer_s | string |
| initial_reference_ids_s | string |
| initiator_type_s | string |
| internal_invoker_s | string |
| invocation_source_s | string |
| invoking_apex_class_name_s | string |
| ip_address_s | string |
| is_ajax_request_s | string |
| is_api_s | string |
| is_cancelled_s | string |
| is_error_s | string |
| is_first_request_s | string |
| is_guest_s | string |
| is_initial_s | string |
| is_long_running_request_s | string |
| is_managed_s | string |
| is_mobile_s | string |
| is_new_s | string |
| is_private_on_s | string |
| is_push_s | string |
| is_released_s | string |
| is_request_collation_on_s | string |
| is_retry_s | string |
| is_scheduled_s | string |
| is_secure_s | string |
| is_success_s | string |
| is_successful_s | string |
| job_id_s | string |
| job_status_s | string |
| key_id_derived_s | string |
| key_id_s | string |
| key_prefix_s | string |
| key_type_s | string |
| language_s | string |
| large_language_model_s | string |
| last_version_s | string |
| library_s | string |
| lightning_cdn_domain_s | string |
| limit_s | string |
| line_number_s | string |
| load_event_end_s | string |
| load_event_start_s | string |
| log_group_id_s | string |
| login_key_s | string |
| login_status_s | string |
| login_sub_type_s | string |
| login_type_s | string |
| login_url_s | string |
| malformed_url_s | string |
| managed_package_namespace_s | string |
| ManagementGroupName | string |
| master_report_id_s | string |
| media_type_s | string |
| member_id_s | string |
| Message | string |
| method_name_s | string |
| method_s | string |
| MG | string |
| name_s | string |
| named_credential_name_s | string |
| navigation_type_s | string |
| next_hop_protocol_s | string |
| next_link_s | string |
| num_clicks_s | string |
| num_graph_depth_s | string |
| num_results_s | string |
| num_retries_s | string |
| num_rows_s | string |
| num_sessions_s | string |
| number_buckets_s | string |
| number_columns_s | string |
| number_exception_filters_s | string |
| number_failures_s | string |
| number_fields_s | string |
| number_of_errors_s | string |
| number_of_interviews_s | string |
| number_of_records_s | string |
| number_requests_s | string |
| number_soql_queries_s | string |
| offset_s | string |
| operation_s | string |
| operation_stage_s | string |
| operation_state_s | string |
| operation_status_s | string |
| operation_time_s | string |
| operation_type_s | string |
| orderby_s | string |
| organization_id_s | string |
| origin_request_id_s | string |
| origin_s | string |
| os_name_s | string |
| os_version_s | string |
| package_name_s | string |
| page_app_name_s | string |
| page_context_s | string |
| page_entity_id_s | string |
| page_entity_type_s | string |
| page_flexi_page_name_or_id_s | string |
| page_flexi_page_type_s | string |
| page_id_g | string |
| page_id_s | string |
| page_name_s | string |
| page_start_time_s | string |
| page_url_s | string |
| parent_callout_s | string |
| parent_id_s | string |
| parent_ui_element_s | string |
| pending_sandbox_org_id_s | string |
| permission_type_s | string |
| planner_id_s | string |
| platform_type_s | string |
| prefixes_searched_s | string |
| prevpage_app_name_s | string |
| prevpage_context_s | string |
| prevpage_entity_id_s | string |
| prevpage_entity_type_s | string |
| prevpage_url_s | string |
| process_type_s | string |
| prompt_template_s | string |
| provider_type_s | string |
| query_id_s | string |
| query_identifier_s | string |
| query_s | string |
| query_type_s | string |
| quiddity_s | string |
| rank_s | string |
| rate_limit_usage_percent_s | string |
| RawData | string |
| read_time_s | string |
| record_id_g | string |
| record_id_s | string |
| record_type_s | string |
| records_failed_s | string |
| records_processed_s | string |
| redirect_count_s | string |
| redirect_end_s | string |
| redirect_start_s | string |
| referrer_s | string |
| referrer_uri_s | string |
| related_entity_id_s | string |
| related_list_s | string |
| remote_address_s | string |
| render_blocking_status_s | string |
| rendering_type_s | string |
| reopen_count_s | string |
| report_description_s | string |
| report_id_derived_s | string |
| report_id_s | string |
| request_count_s | string |
| request_form_size_s | string |
| request_id_s | string |
| request_method_s | string |
| request_path_s | string |
| request_size_s | string |
| request_start_s | string |
| request_status_s | string |
| request_type_s | string |
| request_uri_s | string |
| requested_access_level_s | string |
| requests_limit_s | string |
| requests_s | string |
| resolution_type_s | string |
| resource_sample_s | string |
| response_end_s | string |
| response_size_s | string |
| response_start_s | string |
| response_status_s | string |
| result_size_mb_s | string |
| row_count_s | string |
| rows_fetched_s | string |
| rows_processed_s | string |
| rows_s | string |
| run_time_s | string |
| sample_factor_s | string |
| sandbox_id_s | string |
| saved_view_id_s | string |
| sdk_app_type_s | string |
| sdk_app_version_s | string |
| sdk_version_s | string |
| search_query_s | string |
| search_s | string |
| secure_connection_start_s | string |
| select_s | string |
| server_request_id_s | string |
| service_name_s | string |
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
| source_file_s | string |
| source_ip_s | string |
| source_s | string |
| SourceSystem | string |
| sql_id_s | string |
| stack_trace_s | string |
| start_time_s | string |
| status_code_s | string |
| status_s | string |
| success_s | string |
| tab_id_s | string |
| target_org_id_s | string |
| target_ui_element_s | string |
| TenantId | string |
| throughput_s | string |
| time_s | string |
| TimeGenerated | datetime |
| timestamp_derived_t | datetime |
| timestamp_s | string |
| tls_protocol_s | string |
| total_execution_time_s | string |
| total_ms_s | string |
| total_time_s | string |
| transaction_type_s | string |
| transfer_size_s | string |
| trigger_id_s | string |
| trigger_name_s | string |
| trigger_type_s | string |
| Type | string |
| type__s | string |
| ui_event_id_g | string |
| ui_event_id_s | string |
| ui_event_relative_timestamp_s | string |
| ui_event_sequence_num_s | string |
| ui_event_source_s | string |
| ui_event_timestamp_s | string |
| ui_event_type_s | string |
| ui_number_columns_s | string |
| ui_root_activity_id_g | string |
| ui_root_activity_id_s | string |
| ui_thread_response_delay_s | string |
| unique_id_g | string |
| unload_event_end_s | string |
| unload_event_start_s | string |
| update_type_s | string |
| uri_id_derived_s | string |
| uri_s | string |
| url_s | string |
| use_api_token_s | string |
| user_agent_s | string |
| user_email_s | string |
| user_id_derived_s | string |
| user_id_s | string |
| user_initiated_logout_s | string |
| user_name_s | string |
| user_type_s | string |
| version_id_derived_s | string |
| version_id_s | string |
| vf_controller_size_s | string |
| view_mode_s | string |
| view_state_size_s | string |
| viewing_user_id_s | string |
| wave_session_id_g | string |
| wave_session_id_s | string |
| wave_timestamp_s | string |
| webstore_id_s | string |
| webstore_type_s | string |
| worker_start_s | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Salesforce Service Cloud](../connectors/salesforceservicecloud.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Brute force attack against user credentials](../content/salesforce-service-cloud-brute-force-attack-against-user-credentials-5a6ce089-e756-40fb-b022-c8e8864a973a-39827da6.md) |  |
| [Potential Password Spray Attack](../content/salesforce-service-cloud-potential-password-spray-attack-64d16e62-1a17-4a35-9ea7-2b9fe6f07118-5b230e48.md) |  |
| [User Sign in from different countries](../content/salesforce-service-cloud-user-sign-in-from-different-countries-3094e036-e5ae-4d6e-8626-b0f86ebc71f2-a92654f0.md) |  |

### Workbooks (1)

**In solution [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SalesforceServiceCloud](../content/salesforce-service-cloud-salesforceservicecloud-a9451acb.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [SalesforceServiceCloud](../parsers/salesforceservicecloud.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

