# CensysCertificateAlert_CL

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

## Schema (65 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CensysCertificateAlert_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| ManagementGroupName | string |
| MG | string |
| RawData | string |
| resource_added_at_t | datetime |
| resource_ever_seen_in_scan_b | string |
| resource_fingerprint_md5_g | string |
| resource_fingerprint_sha1_s | string |
| resource_fingerprint_sha256_s | string |
| resource_modified_at_t | datetime |
| resource_names_s | string |
| resource_parse_status_s | string |
| resource_parsed_extensions_key_usage_digital_signature_b | string |
| resource_parsed_extensions_key_usage_key_encipherment_b | string |
| resource_parsed_extensions_key_usage_value_d | real |
| resource_parsed_extensions_subject_alt_name_ip_addresses_s | string |
| resource_parsed_extensions_subject_key_id_s | string |
| resource_parsed_issuer_common_name_s | string |
| resource_parsed_issuer_country_s | string |
| resource_parsed_issuer_dn_s | string |
| resource_parsed_issuer_email_address_s | string |
| resource_parsed_issuer_locality_s | string |
| resource_parsed_issuer_organization_s | string |
| resource_parsed_issuer_organizational_unit_s | string |
| resource_parsed_issuer_province_s | string |
| resource_parsed_ja4x_s | string |
| resource_parsed_serial_number_hex_s | string |
| resource_parsed_serial_number_s | string |
| resource_parsed_signature_signature_algorithm_name_s | string |
| resource_parsed_signature_signature_algorithm_oid_s | string |
| resource_parsed_signature_value_s | string |
| resource_parsed_subject_common_name_s | string |
| resource_parsed_subject_dn_s | string |
| resource_parsed_subject_key_info_ecdsa_b_s | string |
| resource_parsed_subject_key_info_ecdsa_curve_s | string |
| resource_parsed_subject_key_info_ecdsa_gx_s | string |
| resource_parsed_subject_key_info_ecdsa_gy_s | string |
| resource_parsed_subject_key_info_ecdsa_length_d | real |
| resource_parsed_subject_key_info_ecdsa_n_s | string |
| resource_parsed_subject_key_info_ecdsa_p_s | string |
| resource_parsed_subject_key_info_ecdsa_pub_s | string |
| resource_parsed_subject_key_info_ecdsa_x_s | string |
| resource_parsed_subject_key_info_ecdsa_y_s | string |
| resource_parsed_subject_key_info_fingerprint_sha256_s | string |
| resource_parsed_subject_key_info_key_algorithm_name_s | string |
| resource_parsed_subject_key_info_key_algorithm_oid_s | string |
| resource_parsed_unknown_extensions_s | string |
| resource_parsed_validity_period_length_seconds_d | real |
| resource_parsed_validity_period_not_after_t | datetime |
| resource_parsed_validity_period_not_before_t | datetime |
| resource_parsed_version_d | real |
| resource_spki_subject_fingerprint_sha256_s | string |
| resource_tbs_fingerprint_sha256_s | string |
| resource_tbs_no_ct_fingerprint_sha256_s | string |
| resource_validated_at_t | datetime |
| resource_zlint_errors_present_b | string |
| resource_zlint_failed_lints_s | string |
| resource_zlint_notices_present_b | string |
| resource_zlint_timestamp_t | datetime |
| resource_zlint_version_d | real |
| resource_zlint_warnings_present_b | string |
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

