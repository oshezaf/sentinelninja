# CarbonBlackNotifications_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (170 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CarbonBlackNotifications_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| alert_notes_present_b | bool |
| alert_url_s | string |
| attack_tactic_s | string |
| attack_technique_s | string |
| backend_timestamp_t | datetime |
| backend_update_timestamp_t | datetime |
| blocked_effective_reputation_s | string |
| blocked_name_s | string |
| blocked_sha256_s | string |
| childproc_cmdline_s | string |
| childproc_effective_reputation_s | string |
| childproc_guid_s | string |
| childproc_name_s | string |
| childproc_sha256_s | string |
| childproc_username_s | string |
| Computer | string |
| detection_timestamp_t | datetime |
| determination_change_timestamp_t | datetime |
| determination_value_s | string |
| device_external_ip_s | string |
| device_id_d | real |
| device_internal_ip_s | string |
| device_location_s | string |
| device_name_s | string |
| device_os_s | string |
| device_os_version_s | string |
| device_policy_id_d | real |
| device_policy_s | string |
| device_target_value_s | string |
| device_username_s | string |
| deviceInfo_deviceId_d | real |
| deviceInfo_deviceName_s | string |
| deviceInfo_deviceType_s | string |
| deviceInfo_deviceVersion_s | string |
| deviceInfo_email_s | string |
| deviceInfo_externalIpAddress_s | string |
| deviceInfo_groupName_s | string |
| deviceInfo_internalIpAddress_s | string |
| deviceInfo_targetPriorityCode_d | real |
| deviceInfo_targetPriorityType_s | string |
| deviceInfo_uemId_g | string |
| deviceInfo_uemId_s | string |
| eventDescription_s | string |
| eventTime_d | real |
| first_event_timestamp_t | datetime |
| id_g | string |
| ioc_hit_s | string |
| ioc_id_g | string |
| ioc_id_s | string |
| is_updated_b | bool |
| last_event_timestamp_t | datetime |
| ManagementGroupName | string |
| mdr_alert_b | bool |
| mdr_alert_notes_present_b | bool |
| MG | string |
| ml_classification_final_verdict_s | string |
| ml_classification_global_prevalence_s | string |
| ml_classification_org_prevalence_s | string |
| org_key_s | string |
| parent_cmdline_s | string |
| parent_effective_reputation_s | string |
| parent_guid_s | string |
| parent_md5_g | string |
| parent_name_s | string |
| parent_pid_d | real |
| parent_reputation_s | string |
| parent_sha256_s | string |
| parent_username_s | string |
| policy_applied_s | string |
| primary_event_id_g | string |
| primary_event_id_s | string |
| process_cmdline_s | string |
| process_effective_reputation_s | string |
| process_guid_s | string |
| process_issuer_s | string |
| process_md5_g | string |
| process_name_s | string |
| process_pid_d | real |
| process_publisher_s | string |
| process_reputation_s | string |
| process_sha256_s | string |
| process_username_s | string |
| RawData | string |
| reason_code_s | string |
| reason_s | string |
| report_description_s | string |
| report_id_s | string |
| report_link_s | string |
| report_name_s | string |
| report_tags_s | string |
| rule_category_id_g | string |
| rule_id_g | string |
| ruleName_s | string |
| run_state_s | string |
| sensor_action_s | string |
| Severity | int |
| SourceSystem | string |
| TenantId | string |
| threat_id_g | string |
| threat_id_s | string |
| threatHunterInfo_count_d | real |
| threatHunterInfo_dismissed_b | bool |
| threatHunterInfo_documentGuid_s | string |
| threatHunterInfo_firstActivityTime_d | real |
| threatHunterInfo_incidentId_g | string |
| threatHunterInfo_indicators_s | string |
| threatHunterInfo_iocId_g | string |
| threatHunterInfo_iocId_s | string |
| threatHunterInfo_lastUpdatedTime_d | real |
| threatHunterInfo_md5_g | string |
| threatHunterInfo_md5_s | string |
| threatHunterInfo_orgId_d | real |
| threatHunterInfo_policyId_d | real |
| threatHunterInfo_policyId_s | string |
| threatHunterInfo_processGuid_s | string |
| threatHunterInfo_processPath_d | real |
| threatHunterInfo_processPath_s | string |
| threatHunterInfo_reportId_s | string |
| threatHunterInfo_reportName_s | string |
| threatHunterInfo_reputation_s | string |
| threatHunterInfo_responseAlarmId_g | string |
| threatHunterInfo_responseSeverity_d | real |
| threatHunterInfo_runState_s | string |
| threatHunterInfo_score_d | real |
| threatHunterInfo_sha256_s | string |
| threatHunterInfo_summary_s | string |
| threatHunterInfo_targetPriority_s | string |
| threatHunterInfo_threatCause_actor_s | string |
| threatHunterInfo_threatCause_actorName_s | string |
| threatHunterInfo_threatCause_actorProcessPPid_s | string |
| threatHunterInfo_threatCause_causeEventId_s | string |
| threatHunterInfo_threatCause_originSourceType_s | string |
| threatHunterInfo_threatCause_parentGuid_s | string |
| threatHunterInfo_threatCause_processGuid_s | string |
| threatHunterInfo_threatCause_reason_s | string |
| threatHunterInfo_threatCause_reputation_s | string |
| threatHunterInfo_threatCause_threatCategory_s | string |
| threatHunterInfo_threatId_g | string |
| threatHunterInfo_threatId_s | string |
| threatHunterInfo_time_d | real |
| threatHunterInfo_watchLists_s | string |
| threatInfo_incidentId_g | string |
| threatInfo_indicators_s | string |
| threatInfo_score_d | real |
| threatInfo_summary_s | string |
| threatInfo_threatCause_actor_s | string |
| threatInfo_threatCause_actorName_s | string |
| threatInfo_threatCause_actorProcessPPid_s | string |
| threatInfo_threatCause_causeEventId_g | string |
| threatInfo_threatCause_originSourceType_s | string |
| threatInfo_threatCause_parentGuid_s | string |
| threatInfo_threatCause_processGuid_s | string |
| threatInfo_threatCause_reason_s | string |
| threatInfo_threatCause_reputation_s | string |
| threatInfo_threatCause_threatCategory_s | string |
| threatInfo_time_d | real |
| TimeGenerated | datetime |
| ttps_s | string |
| Type | string |
| type_s | string |
| url_s | string |
| version_s | string |
| watchlists_s | string |
| workflow_change_timestamp_t | datetime |
| workflow_changed_by_s | string |
| workflow_changed_by_type_s | string |
| workflow_closure_reason_s | string |
| workflow_status_s | string |

## Solutions (1)

This table is used by the following solutions:

- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Critical Threat Detected](../content/vmware-carbon-black-cloud-critical-threat-detected-2ca4e7fc-c61a-49e5-9736-5da8035c47e0-a9660dac.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

