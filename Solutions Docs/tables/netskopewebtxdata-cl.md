# NetskopeWebtxData_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (159 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeWebtxData_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| bytes_s | string |
| c_ip_s | string |
| Computer | string |
| cs_bytes_s | string |
| cs_content_type_s | string |
| cs_dns_s | string |
| cs_host_s | string |
| cs_method_s | string |
| cs_referer_s | string |
| cs_uri_port_s | string |
| cs_uri_query_g | string |
| cs_uri_query_s | string |
| cs_uri_s | string |
| cs_uri_scheme_s | string |
| cs_user_agent_s | string |
| cs_username_s | string |
| date_s | string |
| ManagementGroupName | string |
| MG | string |
| netskope_api_host_name_s | string |
| RawData | string |
| rs_status_s | string |
| s_ip_s | string |
| sc_bytes_s | string |
| sc_content_type_s | string |
| sc_status_s | string |
| SourceSystem | string |
| TenantId | string |
| time_s | string |
| time_taken_s | string |
| TimeGenerated | datetime |
| Type | string |
| x_c_browser_s | string |
| x_c_browser_version_s | string |
| x_c_country_s | string |
| x_c_device_s | string |
| x_c_latitude_s | string |
| x_c_local_time_s | string |
| x_c_location_s | string |
| x_c_longitude_s | string |
| x_c_os_s | string |
| x_c_region_s | string |
| x_c_zipcode_s | string |
| x_category_id_s | string |
| x_category_s | string |
| x_client_ssl_err_s | string |
| x_cs_access_method_s | string |
| x_cs_app_activity_s | string |
| x_cs_app_category_s | string |
| x_cs_app_cci_s | string |
| x_cs_app_ccl_s | string |
| x_cs_app_from_user_s | string |
| x_cs_app_instance_id_s | string |
| x_cs_app_instance_name_s | string |
| x_cs_app_instance_tag_s | string |
| x_cs_app_object_id_s | string |
| x_cs_app_object_name_s | string |
| x_cs_app_object_type_s | string |
| x_cs_app_s | string |
| x_cs_app_suite_s | string |
| x_cs_app_tags_s | string |
| x_cs_app_to_user_s | string |
| x_cs_connect_host_s | string |
| x_cs_connect_port_s | string |
| x_cs_connect_user_agent_s | string |
| x_cs_domain_fronted_sni_s | string |
| x_cs_dst_ip_s | string |
| x_cs_dst_port_s | string |
| x_cs_http_version_s | string |
| x_cs_ip_connect_xff_s | string |
| x_cs_ip_xff_s | string |
| x_cs_page_id_s | string |
| x_cs_session_id_s | string |
| x_cs_site_s | string |
| x_cs_sni_s | string |
| x_cs_src_ip_egress_s | string |
| x_cs_src_ip_s | string |
| x_cs_src_port_s | string |
| x_cs_ssl_cipher_s | string |
| x_cs_ssl_engine_action_reason_s | string |
| x_cs_ssl_engine_action_s | string |
| x_cs_ssl_fronting_error_s | string |
| x_cs_ssl_handshake_error_s | string |
| x_cs_ssl_ja3_g | string |
| x_cs_ssl_ja3_s | string |
| x_cs_ssl_version_s | string |
| x_cs_timestamp_s | string |
| x_cs_traffic_type_s | string |
| x_cs_tunnel_id_s | string |
| x_cs_uri_path_s | string |
| x_cs_url_s | string |
| x_cs_userip_s | string |
| x_error_s | string |
| x_other_category_id_s | string |
| x_other_category_s | string |
| x_policy_action_s | string |
| x_policy_dst_host_s | string |
| x_policy_dst_host_source_s | string |
| x_policy_dst_ip_s | string |
| x_policy_justification_reason_s | string |
| x_policy_justification_type_s | string |
| x_policy_name_s | string |
| x_policy_src_ip_s | string |
| x_r_cert_enddate_s | string |
| x_r_cert_expired_s | string |
| x_r_cert_incomplete_chain_s | string |
| x_r_cert_issuer_cn_s | string |
| x_r_cert_mismatch_s | string |
| x_r_cert_revocation_check_s | string |
| x_r_cert_revoked_s | string |
| x_r_cert_self_signed_s | string |
| x_r_cert_startdate_s | string |
| x_r_cert_subject_cn_s | string |
| x_r_cert_untrusted_root_s | string |
| x_r_cert_valid_s | string |
| x_request_id_s | string |
| x_rs_file_category_s | string |
| x_rs_file_language_s | string |
| x_rs_file_md5_g | string |
| x_rs_file_md5_s | string |
| x_rs_file_sha256_s | string |
| x_rs_file_size_s | string |
| x_rs_file_type_s | string |
| x_s_country_s | string |
| x_s_custom_signing_ca_error_s | string |
| x_s_dp_name_s | string |
| x_s_latitude_s | string |
| x_s_location_s | string |
| x_s_longitude_s | string |
| x_s_region_s | string |
| x_s_zipcode_s | string |
| x_sc_notification_name_s | string |
| x_server_ssl_err_s | string |
| x_sr_dst_ip_s | string |
| x_sr_dst_port_s | string |
| x_sr_headers_name_s | string |
| x_sr_headers_value_s | string |
| x_sr_src_ip_s | string |
| x_sr_src_port_s | string |
| x_sr_ssl_cipher_s | string |
| x_sr_ssl_client_certificate_error_s | string |
| x_sr_ssl_engine_action_reason_s | string |
| x_sr_ssl_engine_action_s | string |
| x_sr_ssl_handshake_error_s | string |
| x_sr_ssl_ja3s_s | string |
| x_sr_ssl_malformed_ssl_s | string |
| x_sr_ssl_version_s | string |
| x_ssl_bypass_reason_s | string |
| x_ssl_bypass_s | string |
| x_ssl_policy_action_s | string |
| x_ssl_policy_categories_s | string |
| x_ssl_policy_dst_host_s | string |
| x_ssl_policy_dst_host_source_s | string |
| x_ssl_policy_dst_ip_s | string |
| x_ssl_policy_name_s | string |
| x_ssl_policy_src_ip_s | string |
| x_transaction_id_s | string |
| x_type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Web Transactions Data Connector](../connectors/netskopewebtransactionsdataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeWebTransactions](../parsers/netskopewebtransactions.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

