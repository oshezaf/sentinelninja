# CatoNetworksEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (399 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CatoNetworks%5CData%20Connectors%5CCatoNetworks_PUSH_CCP/CatoNetworks_table.json)

| Column Name | Type |
|:------------|:-----|
| access_method | string |
| access_point_id | string |
| access_point_name | string |
| account_id | long |
| account_name | string |
| action | string |
| actions_taken | dynamic |
| active_auth_browser | string |
| activity_resource_id | dynamic |
| activity_title | string |
| actor_type | string |
| ad_name | string |
| ai_app_risk_level | string |
| ai_proxy_rule_name | string |
| ai_reason | string |
| alert_id | string |
| alert_name | string |
| alerts | string |
| always_on_configuration | string |
| analyst_verdict | string |
| anti_tamper_bypass_duration_sec | long |
| anti_tamper_bypass_method | string |
| anti_tamper_bypass_result | string |
| api_name | string |
| api_type | string |
| app_activity | string |
| app_activity_category | string |
| app_activity_type | string |
| app_stack | dynamic |
| application_id | string |
| application_name | string |
| application_risk | int |
| application_type | string |
| atp_feed_reasons | dynamic |
| audit_id | string |
| auth_browser_fallback_reason | string |
| auth_method | string |
| authentication_type | string |
| baseline_average | real |
| baseline_std | real |
| bgp_cato_asn | long |
| bgp_cato_ip | string |
| bgp_error_code | string |
| bgp_peer_asn | long |
| bgp_peer_ip | string |
| bgp_peer_name | string |
| bgp_route_cidr | string |
| bgp_suberror_code | string |
| browser_type | string |
| browser_version | string |
| bypass_duration_sec | long |
| bypass_method | string |
| bypass_reason | string |
| categories | dynamic |
| cato_app | string |
| changes | string |
| classification | string |
| client_cert_expires | long |
| client_cert_name | string |
| client_class | string |
| client_connection_mode | string |
| client_ip | string |
| client_key_exchange_algorithm | string |
| client_version | string |
| client_vlan | long |
| collaborator_name | dynamic |
| collaborator_origin | dynamic |
| collaborator_tenant | string |
| collaborators | dynamic |
| confidence_level | string |
| configured_auth_browser | string |
| configured_host_name | string |
| congestion_algorithm | string |
| connect_on_boot | string |
| connection_origin | string |
| connector_id | string |
| connector_name | string |
| connector_status | string |
| connector_type | string |
| container_name | dynamic |
| correlation_id | string |
| cpu_core_id | int |
| created_at | long |
| criticality | long |
| custom_category_id | dynamic |
| custom_category_name | dynamic |
| data_categories | dynamic |
| data_classifiers | dynamic |
| department | string |
| dest_country | string |
| dest_country_code | string |
| dest_domain | string |
| dest_endpoint_type | string |
| dest_group_id | dynamic |
| dest_group_name | dynamic |
| dest_ip | string |
| dest_is_site_or_vpn | string |
| dest_pid | long |
| dest_port | long |
| dest_process_cmdline | string |
| dest_process_parent_path | string |
| dest_process_parent_pid | long |
| dest_process_path | string |
| dest_site_id | long |
| dest_site_name | string |
| detection_name | string |
| detection_stage | string |
| detectors | dynamic |
| device_categories | dynamic |
| device_certificate | string |
| device_compliance_state | string |
| device_crowdstrike_risk_score | int |
| device_id | string |
| device_manufacturer | string |
| device_model | string |
| device_name | string |
| device_os_type | string |
| device_posture_profile | dynamic |
| device_type | string |
| directory_host_name | string |
| directory_ip | string |
| directory_sync_result | string |
| directory_sync_type | string |
| disinfect_result | string |
| display_name | string |
| dlp_fail_mode | string |
| dlp_profiles | dynamic |
| dlp_scan_types | dynamic |
| dns_answer | dynamic |
| dns_protection_category | string |
| dns_query | string |
| dns_record_type | string |
| dns_reply_code | string |
| domain_name | string |
| duration_ms | long |
| dynamic_control_ids | dynamic |
| dynamic_control_names | dynamic |
| dynamic_control_scope | string |
| dynamic_control_threat_categories | dynamic |
| egress_pop_name | string |
| egress_site_name | string |
| email_subject | dynamic |
| endpoint_id | string |
| engagement_outcome_action | string |
| engine_type | string |
| epp_engine_type | string |
| epp_profile | string |
| event_count | long |
| event_id | string |
| event_message | string |
| event_sub_type | string |
| event_type | string |
| failure_reason | string |
| file_hash | string |
| file_name | string |
| file_operation | string |
| file_path | string |
| file_size | long |
| file_topic | dynamic |
| file_topic_category | string |
| file_type | dynamic |
| final_object_status | string |
| flow_id | long |
| flows | string |
| flows_cardinality | long |
| full_path_url | string |
| guard_id | string |
| guard_name | string |
| guard_type | string |
| guest_user | string |
| host_ip | string |
| host_mac | string |
| http_request_method | string |
| http_response_code | long |
| incident_aggregation | long |
| incident_id | string |
| indication | string |
| indicator | string |
| initial_object_status | string |
| inspection_mode | string |
| interaction_id | string |
| interaction_intent | string |
| interaction_sub_topic | string |
| interaction_topic | string |
| internal_id | string |
| internalId | string |
| investigation_time_window | string |
| invocation_id | string |
| ip_protocol | string |
| is_acknowledged | bool |
| is_admin | bool |
| is_admin_activity | bool |
| is_cloud_app | bool |
| is_compliant | bool |
| is_encrypted | bool |
| is_managed | bool |
| is_muted | bool |
| is_public | bool |
| is_sanctioned_app | bool |
| is_sinkhole | bool |
| ISP_name | string |
| job_title | string |
| key_name | string |
| labels | dynamic |
| last_modified_at | long |
| last_seen_at | long |
| last_turn_role | string |
| link_health_is_congested | bool |
| link_health_jitter | real |
| link_health_latency | real |
| link_health_pkt_loss | real |
| link_type | string |
| logged_in_user | dynamic |
| login_type | string |
| matched_count | int |
| matched_counts | dynamic |
| matched_data_types | dynamic |
| md5 | string |
| message_id | string |
| metric | string |
| metric_units | string |
| metric_value | real |
| mitre_attack_subtechniques | dynamic |
| mitre_attack_tactics | dynamic |
| mitre_attack_techniques | dynamic |
| nat_error | string |
| network_access | string |
| network_rule | string |
| notification_api_error | string |
| notification_description | string |
| object_id | string |
| object_module | string |
| object_name | string |
| object_type | string |
| office_mode | string |
| os_type | string |
| os_version | string |
| out_of_band_access | bool |
| outpost_environment_name | string |
| owner | string |
| pac_file | string |
| parent_connector_name | string |
| pop_name | string |
| precedence | string |
| processes_count | long |
| producer | string |
| projects | dynamic |
| prompt_action | string |
| provider_name | string |
| public_ip | string |
| qos_priority | int |
| qos_reported_time | long |
| quarantine_folder_path | string |
| quarantine_uuid | string |
| raw_data | dynamic |
| rbi_profile | string |
| recommended_actions | dynamic |
| reference_url | string |
| referer_url | string |
| region_name | string |
| registration_code | string |
| request_size | long |
| resource_id | string |
| resource_name | dynamic |
| resource_type | dynamic |
| response_size | long |
| retention_label | string |
| risk_level | string |
| role | string |
| rule_expiration_time | long |
| rule_id | string |
| rule_name | string |
| secondary_socket_serial | string |
| sensitivity_display_name | string |
| server_ip | string |
| server_key_exchange_algorithm | string |
| server_vlan | long |
| service_name | string |
| session_id | string |
| severity | string |
| sharing_scope | dynamic |
| sign_in_event_types | dynamic |
| signal_source | string |
| signature_id | string |
| site_web_proxy_id | string |
| site_web_proxy_name | string |
| site_web_proxy_rule_action | string |
| site_web_proxy_rule_id | string |
| site_web_proxy_rule_name | string |
| socket_description | string |
| socket_interface | string |
| socket_interface_id | string |
| socket_mac_address | string |
| socket_new_version | string |
| socket_old_version | string |
| socket_reset | string |
| socket_role | string |
| socket_serial | string |
| socket_version | string |
| split_tunnel_configuration | string |
| src_city | string |
| src_country | string |
| src_country_code | string |
| src_endpoint_type | string |
| src_ip | string |
| src_is_site_or_vpn | string |
| src_isp_ip | string |
| src_pid | long |
| src_port | long |
| src_process_cmdline | string |
| src_process_parent_path | string |
| src_process_parent_pid | long |
| src_process_path | string |
| src_site_connection_type | string |
| src_site_id | long |
| src_site_name | string |
| static_host | bool |
| status | string |
| story_id | string |
| subnet_name | string |
| subscription_name | string |
| targets_cardinality | long |
| tcp_acceleration | bool |
| tenant_id | string |
| tenant_name | string |
| tenant_restriction_rule_name | string |
| threat_confidence | string |
| threat_name | string |
| threat_reference | string |
| threat_score | long |
| threat_type | string |
| threat_verdict | string |
| throttled_event_aggregation_start_time | long |
| throttled_event_sub_type | string |
| ticket | string |
| time_str | string |
| TimeGenerated | datetime |
| tls_certificate_error | string |
| tls_error_description | string |
| tls_error_type | string |
| tls_inspection | bool |
| tls_rule_name | string |
| tls_version | string |
| total_tokens | int |
| traffic_direction | string |
| transaction_size | long |
| translated_client_ip | string |
| translated_server_ip | string |
| trigger | string |
| trust_type | string |
| trusted_networks | string |
| tunnel_ip_protocol | string |
| tunnel_protocol | string |
| upgrade_end_time | long |
| upgrade_initiated_by | string |
| upgrade_start_time | long |
| url | string |
| user_agent | string |
| user_awareness_method | string |
| user_id | long |
| user_justification | string |
| user_name | string |
| user_origin | string |
| user_reference_id | string |
| user_risk_level | string |
| vendor | string |
| vendor_collaborator_id | dynamic |
| vendor_device_id | string |
| vendor_device_name | string |
| vendor_event_id | string |
| vendor_location | string |
| vendor_org_id | string |
| vendor_policy_description | dynamic |
| vendor_policy_id | dynamic |
| vendor_policy_name | dynamic |
| vendor_site_id | string |
| vendor_start_time | long |
| vendor_user_id | string |
| vendor_version | string |
| verdict_elaboration | string |
| visible_device_id | string |
| vpn_lan_access | string |
| vpn_user_email | string |
| wifi_authentication_type | string |
| wifi_bssid | string |
| wifi_channel | int |
| wifi_description | string |
| wifi_event_reason_code | int |
| wifi_event_type | string |
| wifi_event_type_code | int |
| wifi_event_vendor_name | string |
| wifi_protocol | string |
| wifi_radio_band | string |
| wifi_security | string |
| wifi_signal_strength | int |
| wifi_ssid | string |
| wifi_time_since_assoc_ms | long |
| windows_domain_name | string |
| xff | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CatoNetworks](../solutions/catonetworks.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cato Networks Events (Push)](../connectors/catonetworkseventspush.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

