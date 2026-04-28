# CensysWebPropertyAlert_CL

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

## Schema (110 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CensysWebPropertyAlert_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| resource_cert_added_at_t | datetime |
| resource_cert_ct_entries_cloudflare_nimbus_2026_s | string |
| resource_cert_ct_entries_google_argon_2026_h1_s | string |
| resource_cert_ct_entries_google_xenon_2026_h1_s | string |
| resource_cert_ct_entries_sectigo_elephant_2026_h1_s | string |
| resource_cert_ct_entries_sectigo_tiger_2026_h1_s | string |
| resource_cert_ct_entries_trustasia_log_2026_a_s | string |
| resource_cert_ct_entries_trustasia_log_2026_b_s | string |
| resource_cert_ever_seen_in_scan_b | string |
| resource_cert_fingerprint_md5_g | string |
| resource_cert_fingerprint_sha1_s | string |
| resource_cert_fingerprint_sha256_s | string |
| resource_cert_modified_at_t | datetime |
| resource_cert_names_s | string |
| resource_cert_parent_spki_fingerprint_sha256_s | string |
| resource_cert_parent_spki_subject_fingerprint_sha256_s | string |
| resource_cert_parse_status_s | string |
| resource_cert_parsed_extensions_authority_info_access_s | string |
| resource_cert_parsed_extensions_authority_key_id_s | string |
| resource_cert_parsed_extensions_basic_constraints_s | string |
| resource_cert_parsed_extensions_certificate_policies_s | string |
| resource_cert_parsed_extensions_crl_distribution_points_s | string |
| resource_cert_parsed_extensions_extended_key_usage_s | string |
| resource_cert_parsed_extensions_key_usage_s | string |
| resource_cert_parsed_extensions_signed_certificate_timestamps_s | string |
| resource_cert_parsed_extensions_subject_alt_name_s | string |
| resource_cert_parsed_extensions_subject_key_id_s | string |
| resource_cert_parsed_issuer_common_name_s | string |
| resource_cert_parsed_issuer_country_s | string |
| resource_cert_parsed_issuer_dn_s | string |
| resource_cert_parsed_issuer_organization_s | string |
| resource_cert_parsed_ja4x_s | string |
| resource_cert_parsed_serial_number_hex_s | string |
| resource_cert_parsed_serial_number_s | string |
| resource_cert_parsed_signature_signature_algorithm_s | string |
| resource_cert_parsed_signature_valid_b | string |
| resource_cert_parsed_signature_value_s | string |
| resource_cert_parsed_subject_common_name_s | string |
| resource_cert_parsed_subject_dn_s | string |
| resource_cert_parsed_subject_key_info_ecdsa_s | string |
| resource_cert_parsed_subject_key_info_fingerprint_sha256_s | string |
| resource_cert_parsed_subject_key_info_key_algorithm_s | string |
| resource_cert_parsed_subject_key_info_rsa_s | string |
| resource_cert_parsed_validity_period_length_seconds_d | real |
| resource_cert_parsed_validity_period_not_after_t | datetime |
| resource_cert_parsed_validity_period_not_before_t | datetime |
| resource_cert_parsed_version_d | real |
| resource_cert_revocation_crl_reason_s | string |
| resource_cert_spki_fingerprint_sha256_s | string |
| resource_cert_spki_subject_fingerprint_sha256_s | string |
| resource_cert_tbs_fingerprint_sha256_s | string |
| resource_cert_tbs_no_ct_fingerprint_sha256_s | string |
| resource_cert_validated_at_t | datetime |
| resource_cert_validation_apple_chains_s | string |
| resource_cert_validation_apple_ever_valid_b | string |
| resource_cert_validation_apple_had_trusted_path_b | string |
| resource_cert_validation_apple_has_trusted_path_b | string |
| resource_cert_validation_apple_is_valid_b | string |
| resource_cert_validation_apple_parents_s | string |
| resource_cert_validation_apple_type_s | string |
| resource_cert_validation_chrome_chains_s | string |
| resource_cert_validation_chrome_ever_valid_b | string |
| resource_cert_validation_chrome_had_trusted_path_b | string |
| resource_cert_validation_chrome_has_trusted_path_b | string |
| resource_cert_validation_chrome_is_valid_b | string |
| resource_cert_validation_chrome_parents_s | string |
| resource_cert_validation_chrome_type_s | string |
| resource_cert_validation_level_s | string |
| resource_cert_validation_microsoft_chains_s | string |
| resource_cert_validation_microsoft_ever_valid_b | string |
| resource_cert_validation_microsoft_had_trusted_path_b | string |
| resource_cert_validation_microsoft_has_trusted_path_b | string |
| resource_cert_validation_microsoft_is_valid_b | string |
| resource_cert_validation_microsoft_parents_s | string |
| resource_cert_validation_microsoft_type_s | string |
| resource_cert_validation_nss_chains_s | string |
| resource_cert_validation_nss_ever_valid_b | string |
| resource_cert_validation_nss_had_trusted_path_b | string |
| resource_cert_validation_nss_has_trusted_path_b | string |
| resource_cert_validation_nss_is_valid_b | string |
| resource_cert_validation_nss_parents_s | string |
| resource_cert_validation_nss_type_s | string |
| resource_cert_zlint_errors_present_b | string |
| resource_cert_zlint_failed_lints_s | string |
| resource_cert_zlint_notices_present_b | string |
| resource_cert_zlint_timestamp_t | datetime |
| resource_cert_zlint_version_d | real |
| resource_endpoints_s | string |
| resource_hostname_s | string |
| resource_labels_s | string |
| resource_port_d | real |
| resource_scan_time_t | datetime |
| resource_software_s | string |
| resource_threats_s | string |
| resource_tls_cipher_selected_s | string |
| resource_tls_fingerprint_sha256_s | string |
| resource_tls_ja3s_g | string |
| resource_tls_ja4s_s | string |
| resource_tls_presented_chain_s | string |
| resource_tls_version_selected_s | string |
| resource_tls_versions_s | string |
| resource_vulns_s | string |
| SourceSystem | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Censys](../solutions/censys.md)

---

## Content Items Using This Table (1)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

