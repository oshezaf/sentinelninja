# OrcaAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (82 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/OrcaAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _ResourceId_s | string |
| alert_id_s | string |
| alert_labels_s | string |
| alert_type_s | string |
| asset_name_g | string |
| asset_name_s | string |
| asset_state_s | string |
| asset_type_s | string |
| asset_unique_id_s | string |
| cloud_provider_id_d | real |
| cluster_name_s | string |
| cluster_type_s | string |
| Computer | string |
| description_s | string |
| details_s | string |
| findings_s_account_iam_policy_arn_s | string |
| findings_s_account_iam_policy_cis_aws_control_s | string |
| findings_s_account_iam_policy_cis_aws_version_s | string |
| findings_s_account_iam_policy_cloudtrail_event_id_g | string |
| findings_s_account_iam_policy_cloudtrail_event_source_s | string |
| findings_s_account_iam_policy_cloudtrail_event_time_t | datetime |
| findings_s_account_iam_policy_cloudtrail_source_ip_s | string |
| findings_s_account_iam_policy_cloudtrail_user_agent_s | string |
| findings_s_account_iam_policy_cloudtrail_user_type_s | string |
| findings_s_account_iam_policy_mfa_active_b | bool |
| findings_s_account_iam_policy_password_last_used_t | datetime |
| findings_s_account_iam_policy_type_s | string |
| findings_s_account_iam_policy_user_creation_time_t | datetime |
| findings_s_account_iam_policy_user_s | string |
| findings_s_acl_description_s | string |
| findings_s_acl_details_s | string |
| findings_s_acl_public_acl_s | string |
| findings_s_acl_type_s | string |
| findings_s_cve_affected_packages_s | string |
| findings_s_cve_cve_id_s | string |
| findings_s_cve_cvss3_score_d | real |
| findings_s_cve_cvss3_vector_s | string |
| findings_s_cve_labels_s | string |
| findings_s_cve_published_t | datetime |
| findings_s_cve_score_d | real |
| findings_s_cve_source_link_s | string |
| findings_s_cve_summary_s | string |
| findings_s_cve_type_s | string |
| findings_s_malware_file_s | string |
| findings_s_malware_has_macro_b | bool |
| findings_s_malware_labels_s | string |
| findings_s_malware_md5_g | string |
| findings_s_malware_modification_time_t | datetime |
| findings_s_malware_sha1_s | string |
| findings_s_malware_sha256_s | string |
| findings_s_malware_type_s | string |
| findings_s_malware_virus_names_s | string |
| findings_s_non_corporate_auth_key_description_s | string |
| findings_s_non_corporate_auth_key_file_s | string |
| findings_s_non_corporate_auth_key_keys_s | string |
| findings_s_non_corporate_auth_key_type_s | string |
| findings_s_os_end_of_support_distro_nice_s | string |
| findings_s_os_end_of_support_distro_s | string |
| findings_s_os_end_of_support_end_support_s | string |
| findings_s_os_end_of_support_release_nice_s | string |
| findings_s_os_end_of_support_release_s | string |
| findings_s_os_end_of_support_type_s | string |
| findings_s_weak_password_os_labels_s | string |
| findings_s_weak_password_os_password_s | string |
| findings_s_weak_password_os_type_s | string |
| findings_s_weak_password_os_username_s | string |
| ManagementGroupName | string |
| MG | string |
| MG_s | string |
| RawData | string |
| recommendation_s | string |
| score_d | real |
| source_s | string |
| SourceSystem | string |
| TenantId | string |
| time_t | datetime |
| TimeGenerated | datetime |
| Type | string |
| Type_s | string |
| vm_id_g | string |
| vm_id_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Orca Security Alerts](../solutions/orca-security-alerts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Orca Security Alerts](../connectors/orcasecurityalerts.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Orca Security Alerts](../solutions/orca-security-alerts.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [OrcaAlerts](../content/orca-security-alerts-orcaalerts-8a812d22.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

