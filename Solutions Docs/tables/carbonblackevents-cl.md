# CarbonBlackEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (115 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CarbonBlackEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| action_s | string |
| alert_id_g | string |
| backend_timestamp_s | string |
| childproc_guid_s | string |
| childproc_hash_s | string |
| childproc_name_s | string |
| childproc_pid_d | real |
| childproc_publisher_s | string |
| childproc_reputation_s | string |
| childproc_username_s | string |
| Computer | string |
| createTime_s | string |
| crossproc_action_s | string |
| crossproc_api_s | string |
| crossproc_guid_s | string |
| crossproc_hash_s | string |
| crossproc_name_s | string |
| crossproc_publisher_s | string |
| crossproc_reputation_s | string |
| crossproc_target_b | bool |
| device_external_ip_s | string |
| device_group_s | string |
| device_id_s | string |
| device_name_s | string |
| device_os_s | string |
| device_timestamp_s | string |
| deviceDetails_deviceId_s | string |
| deviceDetails_deviceIpAddress_s | string |
| deviceDetails_deviceIpV4Address_s | string |
| deviceDetails_deviceName_s | string |
| deviceDetails_deviceType_s | string |
| deviceDetails_msmGroupName_s | string |
| event_description_s | string |
| event_id_g | string |
| event_origin_s | string |
| eventId_g | string |
| eventTime_d | datetime |
| eventTime_s | string |
| eventType_s | string |
| fileless_scriptload_cmdline_length_d | real |
| fileless_scriptload_cmdline_s | string |
| fileless_scriptload_hash_s | string |
| filemod_hash_s | string |
| filemod_name_s | string |
| incidentId_g | string |
| local_ip_s | string |
| local_port_d | real |
| longDescription_s | string |
| ManagementGroupName | string |
| MG | string |
| modload_count_d | real |
| modload_effective_reputation_s | string |
| modload_hash_s | string |
| modload_md5_g | string |
| modload_md5_s | string |
| modload_name_s | string |
| modload_publisher_s | string |
| modload_sha256_s | string |
| netconn_community_id_s | string |
| netconn_domain_s | string |
| netconn_inbound_b | bool |
| netconn_protocol_s | string |
| netFlow_peerFqdn_s | string |
| netFlow_peerIpAddress_s | string |
| org_key_s | string |
| parent_cmdline_s | string |
| parent_guid_s | string |
| parent_hash_s | string |
| parent_path_s | string |
| parent_pid_d | real |
| parent_reputation_s | string |
| process_cmdline_s | string |
| process_duration_d | real |
| process_fork_pid_d | real |
| process_guid_s | string |
| process_hash_s | string |
| process_path_s | string |
| process_pid_d | real |
| process_publisher_s | string |
| process_reputation_s | string |
| process_terminated_b | bool |
| process_username_s | string |
| processDetails_commandLine_s | string |
| processDetails_fullUserName_s | string |
| processDetails_parentCommandLine_s | string |
| processDetails_parentName_s | string |
| processDetails_parentPid_d | real |
| processDetails_processId_d | real |
| processDetails_targetCommandLine_s | string |
| processDetails_targetName_s | string |
| RawData | string |
| regmod_name_s | string |
| remote_ip_s | string |
| remote_port_d | real |
| schema_d | real |
| scriptload_content_length_d | real |
| scriptload_content_s | string |
| scriptload_count_d | real |
| scriptload_effective_reputation_s | string |
| scriptload_hash_s | string |
| scriptload_name_s | string |
| scriptload_publisher_s | string |
| scriptload_reputation_s | string |
| securityEventCode_g | string |
| sensor_action_s | string |
| shortDescription_s | string |
| SourceSystem | string |
| target_cmdline_s | string |
| targetApp_effectiveReputation_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| type_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Known Malware Detected](../content/vmware-carbon-black-cloud-known-malware-detected-9f86885f-f31f-4e66-a39d-352771ee789e-b24b2c6a.md) |  |

### Workbooks (2)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

**In solution [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [VMwareCarbonBlack](../content/vmware-carbon-black-cloud-vmwarecarbonblack-d982f4a4.md) |  |

## Parsers Using This Table (3)

### ASIM Parsers (3)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimFileEventVMwareCarbonBlackCloud](../asim/asimfileeventvmwarecarbonblackcloud.md) | FileEvent | VMware Carbon Black Cloud |  |
| [ASimProcessTerminateVMwareCarbonBlackCloud](../asim/asimprocessterminatevmwarecarbonblackcloud.md) | ProcessEvent | VMware Carbon Black Cloud |  |
| [ASimRegistryEventVMwareCarbonBlackCloud](../asim/asimregistryeventvmwarecarbonblackcloud.md) | RegistryEvent | VMware Carbon Black Cloud |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

