# Anvilogic_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (289 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Anvilogic/Data%20Connectors/AnviLogic_CCF/Anvilogic_DCR.json)

| Column Name | Type |
|:------------|:-----|
| access_key | dynamic |
| account | dynamic |
| action | dynamic |
| additional_answer_count | dynamic |
| answer | dynamic |
| answer_count | dynamic |
| app | dynamic |
| authority_answer_count | dynamic |
| avl_builder_version | string |
| avl_custom_labels | dynamic |
| avl_data_category | dynamic |
| avl_definition | string |
| avl_duplicate_hash | string |
| avl_event_id | string |
| avl_event_time | datetime |
| avl_exploits | dynamic |
| avl_kill_chain_phase | dynamic |
| avl_last_deployed_hash | string |
| avl_mitre_ext_ids | dynamic |
| avl_mitre_tactic | dynamic |
| avl_mitre_technique | dynamic |
| avl_org_id | int |
| avl_process_base64 | dynamic |
| avl_rest_id | string |
| avl_rest_name | string |
| avl_rule_domain | string |
| avl_rule_id | string |
| avl_rule_link | string |
| avl_rule_mode | string |
| avl_rule_name | string |
| avl_rule_risk_score | dynamic |
| avl_rule_risk_score_sum | dynamic |
| avl_rule_severity | string |
| avl_rule_sub_domain | string |
| avl_scenario_duration | dynamic |
| avl_security_controls | dynamic |
| avl_source | string |
| avl_sourcetype | string |
| avl_stage_duration | dynamic |
| avl_stages | dynamic |
| avl_suppressed | boolean |
| avl_suppression_key | string |
| avl_techniques_fqn | dynamic |
| avl_threat_groups | dynamic |
| avl_time | datetime |
| avl_use_case_category | dynamic |
| avl_use_case_id | string |
| avl_use_case_name | string |
| avl_use_case_sub_category | string |
| avl_use_case_sub_type | string |
| avl_use_case_title | string |
| avl_use_case_type | string |
| avl_vendor_product | string |
| avl_vendor_risk_score | dynamic |
| avl_vendor_severity | string |
| avl_victim_platform | dynamic |
| avl_victim_product | dynamic |
| avl_vulnerabilities | dynamic |
| bucket_name | dynamic |
| BYTES | dynamic |
| bytes_in | dynamic |
| bytes_out | dynamic |
| category | dynamic |
| cert | dynamic |
| channel | dynamic |
| cloud_service | dynamic |
| cluster_name | dynamic |
| coi_account | dynamic |
| coi_app | dynamic |
| coi_domain | dynamic |
| coi_host | string |
| coi_ip | dynamic |
| coi_resource | dynamic |
| coi_user | string |
| commits | dynamic |
| count | dynamic |
| cve | dynamic |
| cve_created_time | dynamic |
| cve_modified_time | dynamic |
| cve_product_feature_name | dynamic |
| cve_product_feature_uid | dynamic |
| cve_product_feature_version | dynamic |
| cve_product_lang | dynamic |
| cve_product_name | dynamic |
| cve_product_path | dynamic |
| cve_product_uid | dynamic |
| cve_product_vendor_name | dynamic |
| cve_product_version | dynamic |
| cve_type | dynamic |
| cve_uid | dynamic |
| cvss | dynamic |
| cvss_base_score | dynamic |
| cvss_depth | dynamic |
| cvss_metrics | dynamic |
| cvss_overall_score | dynamic |
| cvss_severity | dynamic |
| cvss_vector_string | dynamic |
| cvss_version | dynamic |
| cwe_uid | dynamic |
| cwe_url | dynamic |
| delay | dynamic |
| deployment_container_name | dynamic |
| deployment_id | dynamic |
| deployment_ip | dynamic |
| deployment_main_container | dynamic |
| deployment_name | dynamic |
| deployment_namespace | dynamic |
| deployment_role | dynamic |
| deployment_tenant_id | dynamic |
| description | dynamic |
| dest_asn | dynamic |
| dest_asn_cidr | dynamic |
| dest_asn_org | dynamic |
| dest_host | dynamic |
| dest_identity | dynamic |
| dest_ip | dynamic |
| dest_mac | dynamic |
| dest_nt_domain | dynamic |
| dest_port | dynamic |
| dest_role | dynamic |
| dest_translated_ip | dynamic |
| dest_translated_port | dynamic |
| dest_user | dynamic |
| dest_zone | dynamic |
| direction | dynamic |
| domain | dynamic |
| duration | dynamic |
| dvc | dynamic |
| dvc_ip | dynamic |
| dvc_mac | dynamic |
| dvc_zone | dynamic |
| event_category | dynamic |
| event_id | dynamic |
| event_name | dynamic |
| file_hash | dynamic |
| file_name | dynamic |
| file_path | dynamic |
| file_size | dynamic |
| filter_action | dynamic |
| filter_score | dynamic |
| flow_id | dynamic |
| grand_parent_file_name | dynamic |
| grand_parent_process_path | dynamic |
| host | string |
| http_content_type | dynamic |
| http_method | dynamic |
| http_referrer | dynamic |
| http_user_agent | dynamic |
| icmp_code | dynamic |
| icmp_type | dynamic |
| id | dynamic |
| IDENTITY | dynamic |
| identity_type | dynamic |
| ids_type | dynamic |
| image_full_name | dynamic |
| image_id | dynamic |
| image_name | dynamic |
| indexes_hit | dynamic |
| instance_id | dynamic |
| instance_name | dynamic |
| instance_type | dynamic |
| internal_message_id | dynamic |
| kb_articles | dynamic |
| machine | dynamic |
| message_id | dynamic |
| message_info | dynamic |
| message_type | dynamic |
| mfa_enabled | dynamic |
| msft | dynamic |
| mskb | dynamic |
| name | dynamic |
| note | string |
| object | dynamic |
| object_id | dynamic |
| orig_avl_event_id | dynamic |
| orig_dest | dynamic |
| orig_index | string |
| orig_recipient | dynamic |
| orig_source | dynamic |
| orig_sourcetype | dynamic |
| orig_src | dynamic |
| os_type | dynamic |
| package_architecture | dynamic |
| package_name | dynamic |
| package_version | dynamic |
| packets | dynamic |
| packets_in | dynamic |
| packets_out | dynamic |
| parent_process | string |
| parent_process_exec | dynamic |
| parent_process_id | dynamic |
| parent_process_name | string |
| parent_process_path | dynamic |
| permissions | dynamic |
| process | string |
| process_current_directory | dynamic |
| process_exec | dynamic |
| process_hash | dynamic |
| process_id | dynamic |
| process_name | string |
| process_path | string |
| product_version | dynamic |
| protocol | dynamic |
| query | dynamic |
| query_count | dynamic |
| query_id | dynamic |
| query_plan_hit | dynamic |
| query_time | dynamic |
| query_type | dynamic |
| raw | dynamic |
| recipient | dynamic |
| recipient_count | dynamic |
| recipient_status | dynamic |
| record_type | dynamic |
| records_affected | dynamic |
| references | dynamic |
| region | dynamic |
| registry_hive | dynamic |
| registry_key_name | dynamic |
| registry_path | dynamic |
| registry_value_data | dynamic |
| registry_value_name | dynamic |
| registry_value_type | dynamic |
| related_vulnerabilities | dynamic |
| reply_code | dynamic |
| request_parameters | dynamic |
| requester_account | dynamic |
| resource_id | dynamic |
| response | dynamic |
| response_time | dynamic |
| retries | dynamic |
| return_addr | dynamic |
| role | dynamic |
| rule | dynamic |
| service | dynamic |
| service_hash | dynamic |
| service_id | dynamic |
| service_name | dynamic |
| service_path | dynamic |
| session_id | dynamic |
| severity | dynamic |
| severity_id | dynamic |
| signature | dynamic |
| signature_category | dynamic |
| signature_extra | dynamic |
| signature_id | dynamic |
| signature_version | dynamic |
| signatures_vendor_product | dynamic |
| site | dynamic |
| size | dynamic |
| src_asn | dynamic |
| src_asn_cidr | dynamic |
| src_asn_org | dynamic |
| src_host | dynamic |
| src_interface | dynamic |
| src_ip | dynamic |
| src_mac | dynamic |
| src_nt_domain | dynamic |
| src_port | dynamic |
| src_translated_ip | dynamic |
| src_translated_port | dynamic |
| src_user | dynamic |
| src_zone | dynamic |
| ssid | dynamic |
| ssl_hash | dynamic |
| status | dynamic |
| status_code | dynamic |
| subject | dynamic |
| tables_hit | dynamic |
| tablespace_name | dynamic |
| tag | dynamic |
| tcp_flag | dynamic |
| TimeGenerated | datetime |
| TITLE | dynamic |
| transaction_id | dynamic |
| transport | dynamic |
| ttl | dynamic |
| uri_path | dynamic |
| uri_query | dynamic |
| url | dynamic |
| user | dynamic |
| user_id | dynamic |
| vendor | dynamic |
| vendor_name | dynamic |
| vendor_product | dynamic |
| vlan | dynamic |
| wifi | dynamic |
| xdelay | dynamic |
| xref | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Anvilogic](../solutions/anvilogic.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Anvilogic](../connectors/anvilogicccfdefinition.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Anvilogic](../solutions/anvilogic.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Anvilogic Alert](../content/anvilogic-anvilogic-alert-6ccc187a-42ee-4635-8bcc-3b299f8570df-47d0e3ed.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

