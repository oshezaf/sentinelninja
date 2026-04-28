# Censys_Certificate_IOC_CL

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

## Schema (96 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Censys_Certificate_IOC_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| added_at_t | datetime |
| Computer | string |
| fingerprint_md5_g | string |
| fingerprint_sha1_s | string |
| fingerprint_sha256_s | string |
| ManagementGroupName | string |
| MG | string |
| modified_at_t | datetime |
| parsed_extensions_authority_info_access_issuer_urls_s | string |
| parsed_extensions_authority_info_access_ocsp_urls_s | string |
| parsed_extensions_authority_key_id_s | string |
| parsed_extensions_certificate_policies_s | string |
| parsed_extensions_crl_distribution_points_s | string |
| parsed_extensions_ct_poison_b | bool |
| parsed_extensions_extended_key_usage_client_auth_b | bool |
| parsed_extensions_extended_key_usage_server_auth_b | bool |
| parsed_extensions_key_usage_digital_signature_b | bool |
| parsed_extensions_key_usage_key_encipherment_b | bool |
| parsed_extensions_key_usage_value_d | real |
| parsed_extensions_signed_certificate_timestamps_s | string |
| parsed_extensions_subject_alt_name_dns_names_s | string |
| parsed_extensions_subject_key_id_s | string |
| parsed_issuer_common_name_s | string |
| parsed_issuer_country_s | string |
| parsed_issuer_dn_s | string |
| parsed_issuer_organization_s | string |
| parsed_ja4x_s | string |
| parsed_serial_number_hex_g | string |
| parsed_serial_number_hex_s | string |
| parsed_serial_number_s | string |
| parsed_signature_self_signed_b | bool |
| parsed_signature_signature_algorithm_name_s | string |
| parsed_signature_signature_algorithm_oid_s | string |
| parsed_signature_valid_b | bool |
| parsed_signature_value_s | string |
| parsed_subject_common_name_s | string |
| parsed_subject_dn_s | string |
| parsed_subject_key_info_ecdsa_b_s | string |
| parsed_subject_key_info_ecdsa_curve_s | string |
| parsed_subject_key_info_ecdsa_gx_s | string |
| parsed_subject_key_info_ecdsa_gy_s | string |
| parsed_subject_key_info_ecdsa_length_d | real |
| parsed_subject_key_info_ecdsa_n_s | string |
| parsed_subject_key_info_ecdsa_p_s | string |
| parsed_subject_key_info_ecdsa_pub_s | string |
| parsed_subject_key_info_ecdsa_x_s | string |
| parsed_subject_key_info_ecdsa_y_s | string |
| parsed_subject_key_info_fingerprint_sha256_s | string |
| parsed_subject_key_info_key_algorithm_name_s | string |
| parsed_subject_key_info_key_algorithm_oid_s | string |
| parsed_subject_key_info_rsa_exponent_d | real |
| parsed_subject_key_info_rsa_length_d | real |
| parsed_subject_key_info_rsa_modulus_s | string |
| parsed_validity_period_length_seconds_d | real |
| parsed_validity_period_not_after_t | datetime |
| parsed_validity_period_not_before_t | datetime |
| parsed_version_d | real |
| RawData | string |
| revocation_crl_reason_s | string |
| revocation_ocsp_reason_s | string |
| SourceSystem | string |
| tbs_fingerprint_sha256_s | string |
| tbs_no_ct_fingerprint_sha256_s | string |
| TimeGenerated | datetime |
| Type | string |
| validated_at_t | datetime |
| validation_apple_chains_s | string |
| validation_apple_ever_valid_b | bool |
| validation_apple_had_trusted_path_b | bool |
| validation_apple_has_trusted_path_b | bool |
| validation_apple_is_valid_b | bool |
| validation_apple_parents_s | string |
| validation_apple_type_s | string |
| validation_chrome_chains_s | string |
| validation_chrome_ever_valid_b | bool |
| validation_chrome_had_trusted_path_b | bool |
| validation_chrome_has_trusted_path_b | bool |
| validation_chrome_is_valid_b | bool |
| validation_chrome_parents_s | string |
| validation_chrome_type_s | string |
| validation_level_s | string |
| validation_microsoft_chains_s | string |
| validation_microsoft_ever_valid_b | bool |
| validation_microsoft_had_trusted_path_b | bool |
| validation_microsoft_has_trusted_path_b | bool |
| validation_microsoft_is_valid_b | bool |
| validation_microsoft_parents_s | string |
| validation_microsoft_type_s | string |
| validation_nss_chains_s | string |
| validation_nss_ever_valid_b | bool |
| validation_nss_had_trusted_path_b | bool |
| validation_nss_has_trusted_path_b | bool |
| validation_nss_is_valid_b | bool |
| validation_nss_parents_s | string |
| validation_nss_type_s | string |

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

