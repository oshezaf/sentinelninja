# Censys_Host_Services_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (260 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Censys_Host_Services_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| amqp_protocol_id_name_s | string |
| amqp_version_minor_d | real |
| amqp_version_revision_d | real |
| banner_hash_sha256_s | string |
| banner_hex_s | string |
| banner_s | string |
| cert_added_at_t | datetime |
| cert_ct_entries_cloudflare_nimbus_2026_added_to_ct_at_t | datetime |
| cert_ct_entries_cloudflare_nimbus_2026_ct_to_censys_at_t | datetime |
| cert_ct_entries_cloudflare_nimbus_2026_index_d | real |
| cert_ct_entries_google_argon_2026_h1_added_to_ct_at_t | datetime |
| cert_ct_entries_google_argon_2026_h1_ct_to_censys_at_t | datetime |
| cert_ct_entries_google_argon_2026_h1_index_d | real |
| cert_ct_entries_google_xenon_2026_h1_added_to_ct_at_t | datetime |
| cert_ct_entries_google_xenon_2026_h1_ct_to_censys_at_t | datetime |
| cert_ct_entries_google_xenon_2026_h1_index_d | real |
| cert_ct_entries_sectigo_elephant_2026_h1_added_to_ct_at_t | datetime |
| cert_ct_entries_sectigo_elephant_2026_h1_ct_to_censys_at_t | datetime |
| cert_ct_entries_sectigo_elephant_2026_h1_index_d | real |
| cert_ct_entries_sectigo_tiger_2026_h1_added_to_ct_at_t | datetime |
| cert_ct_entries_sectigo_tiger_2026_h1_ct_to_censys_at_t | datetime |
| cert_ct_entries_sectigo_tiger_2026_h1_index_d | real |
| cert_ct_entries_trustasia_log_2026_a_added_to_ct_at_t | datetime |
| cert_ct_entries_trustasia_log_2026_a_ct_to_censys_at_t | datetime |
| cert_ct_entries_trustasia_log_2026_a_index_d | real |
| cert_ct_entries_trustasia_log_2026_b_added_to_ct_at_t | datetime |
| cert_ct_entries_trustasia_log_2026_b_ct_to_censys_at_t | datetime |
| cert_ct_entries_trustasia_log_2026_b_index_d | real |
| cert_ever_seen_in_scan_b | string |
| cert_fingerprint_md5_g | string |
| cert_fingerprint_sha1_s | string |
| cert_fingerprint_sha256_s | string |
| cert_modified_at_t | datetime |
| cert_names_s | string |
| cert_parent_spki_fingerprint_sha256_s | string |
| cert_parent_spki_subject_fingerprint_sha256_s | string |
| cert_parse_status_s | string |
| cert_parsed_extensions_authority_info_access_issuer_urls_s | string |
| cert_parsed_extensions_authority_key_id_s | string |
| cert_parsed_extensions_certificate_policies_s | string |
| cert_parsed_extensions_crl_distribution_points_s | string |
| cert_parsed_extensions_extended_key_usage_client_auth_b | string |
| cert_parsed_extensions_extended_key_usage_server_auth_b | string |
| cert_parsed_extensions_key_usage_digital_signature_b | string |
| cert_parsed_extensions_key_usage_value_d | real |
| cert_parsed_extensions_signed_certificate_timestamps_s | string |
| cert_parsed_extensions_subject_alt_name_dns_names_s | string |
| cert_parsed_extensions_subject_key_id_s | string |
| cert_parsed_issuer_common_name_s | string |
| cert_parsed_issuer_country_s | string |
| cert_parsed_issuer_dn_s | string |
| cert_parsed_issuer_locality_s | string |
| cert_parsed_issuer_organization_s | string |
| cert_parsed_issuer_organizational_unit_s | string |
| cert_parsed_issuer_province_s | string |
| cert_parsed_ja4x_s | string |
| cert_parsed_serial_number_hex_s | string |
| cert_parsed_serial_number_s | string |
| cert_parsed_signature_self_signed_b | string |
| cert_parsed_signature_signature_algorithm_name_s | string |
| cert_parsed_signature_signature_algorithm_oid_s | string |
| cert_parsed_signature_valid_b | string |
| cert_parsed_signature_value_s | string |
| cert_parsed_subject_common_name_s | string |
| cert_parsed_subject_country_s | string |
| cert_parsed_subject_dn_s | string |
| cert_parsed_subject_key_info_ecdsa_b_s | string |
| cert_parsed_subject_key_info_ecdsa_curve_s | string |
| cert_parsed_subject_key_info_ecdsa_gx_s | string |
| cert_parsed_subject_key_info_ecdsa_gy_s | string |
| cert_parsed_subject_key_info_ecdsa_length_d | real |
| cert_parsed_subject_key_info_ecdsa_n_s | string |
| cert_parsed_subject_key_info_ecdsa_p_s | string |
| cert_parsed_subject_key_info_ecdsa_pub_s | string |
| cert_parsed_subject_key_info_ecdsa_x_s | string |
| cert_parsed_subject_key_info_ecdsa_y_s | string |
| cert_parsed_subject_key_info_fingerprint_sha256_s | string |
| cert_parsed_subject_key_info_key_algorithm_name_s | string |
| cert_parsed_subject_key_info_key_algorithm_oid_s | string |
| cert_parsed_subject_key_info_rsa_exponent_d | real |
| cert_parsed_subject_key_info_rsa_length_d | real |
| cert_parsed_subject_key_info_rsa_modulus_s | string |
| cert_parsed_subject_locality_s | string |
| cert_parsed_subject_organization_s | string |
| cert_parsed_subject_organizational_unit_s | string |
| cert_parsed_subject_province_s | string |
| cert_parsed_validity_period_length_seconds_d | real |
| cert_parsed_validity_period_not_after_t | datetime |
| cert_parsed_validity_period_not_before_t | datetime |
| cert_parsed_version_d | real |
| cert_revocation_crl_reason_s | string |
| cert_spki_fingerprint_sha256_s | string |
| cert_spki_subject_fingerprint_sha256_s | string |
| cert_tbs_fingerprint_sha256_s | string |
| cert_tbs_no_ct_fingerprint_sha256_s | string |
| cert_validated_at_t | datetime |
| cert_validation_apple_chains_s | string |
| cert_validation_apple_ever_valid_b | string |
| cert_validation_apple_had_trusted_path_b | string |
| cert_validation_apple_has_trusted_path_b | string |
| cert_validation_apple_is_valid_b | string |
| cert_validation_apple_parents_s | string |
| cert_validation_apple_type_s | string |
| cert_validation_chrome_chains_s | string |
| cert_validation_chrome_ever_valid_b | string |
| cert_validation_chrome_had_trusted_path_b | string |
| cert_validation_chrome_has_trusted_path_b | string |
| cert_validation_chrome_is_valid_b | string |
| cert_validation_chrome_parents_s | string |
| cert_validation_chrome_type_s | string |
| cert_validation_level_s | string |
| cert_validation_microsoft_chains_s | string |
| cert_validation_microsoft_ever_valid_b | string |
| cert_validation_microsoft_had_trusted_path_b | string |
| cert_validation_microsoft_has_trusted_path_b | string |
| cert_validation_microsoft_is_valid_b | string |
| cert_validation_microsoft_parents_s | string |
| cert_validation_microsoft_type_s | string |
| cert_validation_nss_chains_s | string |
| cert_validation_nss_ever_valid_b | string |
| cert_validation_nss_had_trusted_path_b | string |
| cert_validation_nss_has_trusted_path_b | string |
| cert_validation_nss_is_valid_b | string |
| cert_validation_nss_parents_s | string |
| cert_validation_nss_type_s | string |
| cert_zlint_errors_present_b | string |
| cert_zlint_failed_lints_s | string |
| cert_zlint_notices_present_b | string |
| cert_zlint_timestamp_t | datetime |
| cert_zlint_version_d | real |
| cert_zlint_warnings_present_b | string |
| Computer | string |
| endpoints_s | string |
| epmd_names_s | string |
| ftp_auth_ssl_response_s | string |
| ftp_auth_tls_response_s | string |
| ftp_status_code_d | real |
| ftp_status_meaning_s | string |
| ip_s | string |
| ja4tscan_fingerprint_s | string |
| ja4tscan_scan_time_t | datetime |
| jarm_cipher_and_version_fingerprint_s | string |
| jarm_fingerprint_s | string |
| jarm_ip_s | string |
| jarm_is_success_b | string |
| jarm_port_d | real |
| jarm_scan_time_t | datetime |
| jarm_tls_extensions_sha256_g | string |
| jarm_transport_protocol_s | string |
| labels_s | string |
| ManagementGroupName | string |
| MG | string |
| mongodb_is_master_is_master_b | string |
| mongodb_is_master_logical_session_timeout_minutes_d | real |
| mongodb_is_master_max_bson_object_size_d | real |
| mongodb_is_master_max_message_size_bytes_d | real |
| mongodb_is_master_max_wire_version_d | real |
| mongodb_is_master_max_write_batch_size_d | real |
| mysql_auth_plugin_data_s | string |
| mysql_auth_plugin_name_s | string |
| mysql_capability_flags_CLIENT_CAN_HANDLE_EXPIRED_PASSWORDS_b | string |
| mysql_capability_flags_CLIENT_COMPRESS_b | string |
| mysql_capability_flags_CLIENT_CONNECT_ATTRS_b | string |
| mysql_capability_flags_CLIENT_CONNECT_WITH_DB_b | string |
| mysql_capability_flags_CLIENT_DEPRECATED_EOF_b | string |
| mysql_capability_flags_CLIENT_FOUND_ROWS_b | string |
| mysql_capability_flags_CLIENT_IGNORE_SIGPIPE_b | string |
| mysql_capability_flags_CLIENT_IGNORE_SPACE_b | string |
| mysql_capability_flags_CLIENT_INTERACTIVE_b | string |
| mysql_capability_flags_CLIENT_LOCAL_FILES_b | string |
| mysql_capability_flags_CLIENT_LONG_FLAG_b | string |
| mysql_capability_flags_CLIENT_LONG_PASSWORD_b | string |
| mysql_capability_flags_CLIENT_MULTI_RESULTS_b | string |
| mysql_capability_flags_CLIENT_MULTI_STATEMENTS_b | string |
| mysql_capability_flags_CLIENT_NO_SCHEMA_b | string |
| mysql_capability_flags_CLIENT_ODBC_b | string |
| mysql_capability_flags_CLIENT_PLUGIN_AUTH_b | string |
| mysql_capability_flags_CLIENT_PLUGIN_AUTH_LEN_ENC_CLIENT_DATA_b | string |
| mysql_capability_flags_CLIENT_PROTOCOL_41_b | string |
| mysql_capability_flags_CLIENT_PS_MULTI_RESULTS_b | string |
| mysql_capability_flags_CLIENT_RESERVED_b | string |
| mysql_capability_flags_CLIENT_SECURE_CONNECTION_b | string |
| mysql_capability_flags_CLIENT_SESSION_TRACK_b | string |
| mysql_capability_flags_CLIENT_SSL_b | string |
| mysql_capability_flags_CLIENT_TRANSACTIONS_b | string |
| mysql_character_set_d | real |
| mysql_connection_id_d | real |
| mysql_error_code_d | real |
| mysql_error_id_s | string |
| mysql_error_message_s | string |
| mysql_protocol_version_d | real |
| mysql_server_version_s | string |
| mysql_status_flags_SERVER_STATUS_AUTOCOMMIT_b | string |
| operating_systems_s | string |
| port_d | real |
| postgres_protocol_error_code_s | string |
| postgres_protocol_error_file_s | string |
| postgres_protocol_error_line_s | string |
| postgres_protocol_error_message_s | string |
| postgres_protocol_error_routine_s | string |
| postgres_protocol_error_severity_s | string |
| postgres_protocol_error_severity_v_s | string |
| postgres_startup_error_code_s | string |
| postgres_startup_error_file_s | string |
| postgres_startup_error_line_s | string |
| postgres_startup_error_message_s | string |
| postgres_startup_error_routine_s | string |
| postgres_startup_error_severity_s | string |
| postgres_startup_error_severity_v_s | string |
| postgres_supported_versions_s | string |
| protocol_s | string |
| RawData | string |
| scan_time_t | datetime |
| screenshots_s | string |
| software_s | string |
| SourceSystem | string |
| ssh_algorithm_selection_client_to_server_alg_group_cipher_s | string |
| ssh_algorithm_selection_client_to_server_alg_group_compression_s | string |
| ssh_algorithm_selection_client_to_server_alg_group_mac_s | string |
| ssh_algorithm_selection_host_key_algorithm_s | string |
| ssh_algorithm_selection_kex_algorithm_s | string |
| ssh_algorithm_selection_server_to_client_alg_group_cipher_s | string |
| ssh_algorithm_selection_server_to_client_alg_group_compression_s | string |
| ssh_algorithm_selection_server_to_client_alg_group_mac_s | string |
| ssh_endpoint_id_comment_s | string |
| ssh_endpoint_id_protocol_version_s | string |
| ssh_endpoint_id_raw_s | string |
| ssh_endpoint_id_software_version_s | string |
| ssh_hassh_fingerprint_g | string |
| ssh_kex_init_message_client_to_server_ciphers_s | string |
| ssh_kex_init_message_client_to_server_compression_s | string |
| ssh_kex_init_message_client_to_server_macs_s | string |
| ssh_kex_init_message_host_key_algorithms_s | string |
| ssh_kex_init_message_kex_algorithms_s | string |
| ssh_kex_init_message_server_to_client_ciphers_s | string |
| ssh_kex_init_message_server_to_client_compression_s | string |
| ssh_kex_init_message_server_to_client_macs_s | string |
| ssh_server_host_key_ecdsa_public_key_b_s | string |
| ssh_server_host_key_ecdsa_public_key_curve_s | string |
| ssh_server_host_key_ecdsa_public_key_gx_s | string |
| ssh_server_host_key_ecdsa_public_key_gy_s | string |
| ssh_server_host_key_ecdsa_public_key_length_d | real |
| ssh_server_host_key_ecdsa_public_key_n_s | string |
| ssh_server_host_key_ecdsa_public_key_p_s | string |
| ssh_server_host_key_ecdsa_public_key_x_s | string |
| ssh_server_host_key_ecdsa_public_key_y_s | string |
| ssh_server_host_key_fingerprint_sha256_s | string |
| threats_s | string |
| TimeGenerated | datetime |
| tls_cipher_selected_s | string |
| tls_fingerprint_sha256_s | string |
| tls_ja3s_g | string |
| tls_ja4s_s | string |
| tls_presented_chain_s | string |
| tls_version_selected_s | string |
| tls_versions_s | string |
| transport_protocol_s | string |
| Type | string |
| vulns_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Censys](../solutions/censys.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Censys](../solutions/censys.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Censys](../content/censys-censys-21c23ffd.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

