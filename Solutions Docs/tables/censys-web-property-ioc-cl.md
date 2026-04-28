# Censys_Web_Property_IOC_CL

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

## Schema (128 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Censys_Web_Property_IOC_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
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
| cert_parsed_issuer_organization_s | string |
| cert_parsed_ja4x_s | string |
| cert_parsed_serial_number_hex_s | string |
| cert_parsed_serial_number_s | string |
| cert_parsed_signature_signature_algorithm_name_s | string |
| cert_parsed_signature_signature_algorithm_oid_s | string |
| cert_parsed_signature_valid_b | string |
| cert_parsed_signature_value_s | string |
| cert_parsed_subject_common_name_s | string |
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
| Computer | string |
| endpoints_s | string |
| hostname_s | string |
| labels_s | string |
| ManagementGroupName | string |
| MG | string |
| port_d | real |
| RawData | string |
| scan_time_t | datetime |
| software_s | string |
| SourceSystem | string |
| threats_s | string |
| TimeGenerated | datetime |
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

