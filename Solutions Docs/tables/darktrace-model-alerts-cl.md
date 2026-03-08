# darktrace_model_alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (79 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/darktrace_model_alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| actions_s | string |
| activityId_s | string |
| alert_name_s | string |
| anomaly_score_d | real |
| antigena_b | bool |
| attachment_sha1s_s | string |
| bestDeviceName_s | string |
| blocked_b | bool |
| breachTime_s | string |
| breachUrl_s | string |
| Category | string |
| child_id_d | real |
| compliance_b | bool |
| cSensor_b | bool |
| cSensorID_g | guid |
| cSensorID_s | string |
| currentGroup_s | string |
| description_s | string |
| destHost_s | string |
| destIP_s | string |
| destMac_s | string |
| destPort_s | string |
| details_s | string |
| deviceId_d | real |
| deviceIP_s | string |
| direction_s | string |
| dtProduct_s | string |
| endTime_s | string |
| externalId_g | guid |
| friendlyName_s | string |
| from_s | string |
| groupByActivity_b | bool |
| groupCategory_s | string |
| groupingId_s | string |
| groupPreviousGroups_s | string |
| groupScore_d | string |
| hostname_s | string |
| identifier_s | string |
| ip_address_s | string |
| last_updated_d | real |
| last_updated_status_d | real |
| latitude_d | real |
| link_hosts_s | string |
| longitude_d | real |
| mac_s | string |
| Message | string |
| mitreTechniques_s | string |
| modelName_s | string |
| name_s | string |
| newEvent_b | bool |
| pid_d | real |
| priority_code_d | real |
| priority_d | real |
| priority_level_s | string |
| priority_s | string |
| recipients_s | string |
| score_d | real |
| Severity | real |
| sid_d | real |
| sourceHost_s | string |
| SourceIP | string |
| sourceMac_s | string |
| sourcePort_s | string |
| startTime_s | string |
| status_s | string |
| subject_s | string |
| summary_s | string |
| summaryFirstSentence_s | string |
| tags_s | string |
| threatID_d | real |
| time_s | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| title_s | string |
| triggeredComponents_s | string |
| typeLabel_s | string |
| url_s | string |
| uuid_g | guid |
| uuid_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Darktrace](../solutions/darktrace.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Darktrace Connector for Microsoft Sentinel REST API](../connectors/darktracerestconnector.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Darktrace](../solutions/darktrace.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Darktrace AI Analyst](../content/darktrace-darktrace-ai-analyst-ffa2977f-3077-4bba-b1bf-f3417699cbb0-c8c73532.md) |  |
| [Darktrace Model Breach](../content/darktrace-darktrace-model-breach-a3c7b8ed-56a9-47b7-98e5-2555c16e17c9-0057eb81.md) |  |
| [Darktrace System Status](../content/darktrace-darktrace-system-status-2e629769-60eb-4a14-8bfc-bde9be66ebeb-cc05125a.md) |  |

### Workbooks (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DarktraceWorkbook](../content/darktrace-darktraceworkbook-b6b8de88.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

