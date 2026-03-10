# CortexXDR_Incidents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (43 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CortexXDR_Incidents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| aggregated_score_d | real |
| alert_categories_s | string |
| alert_count_d | real |
| alerts_grouping_status_s | string |
| assigned_user_mail_s | string |
| assigned_user_pretty_name_s | string |
| Computer | string |
| creation_time_d | real |
| critical_severity_alert_count_d | real |
| description_s | string |
| high_severity_alert_count_d | real |
| host_count_d | real |
| hosts_s | string |
| incident_id_s | string |
| incident_sources_s | string |
| low_severity_alert_count_d | real |
| ManagementGroupName | string |
| manual_description_s | string |
| manual_severity_s | string |
| med_severity_alert_count_d | real |
| MG | string |
| mitre_tactics_ids_and_names_s | string |
| mitre_techniques_ids_and_names_s | string |
| modification_time_d | real |
| notes_s | string |
| original_tags_s | string |
| predicted_score_d | real |
| RawData | string |
| resolve_comment_s | string |
| resolved_timestamp_d | real |
| severity_s | string |
| SourceSystem | string |
| starred_b | bool |
| status_s | string |
| tags_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| user_count_d | real |
| users_s | string |
| wildfire_hits_d | real |
| xdr_url_s | string |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CortexXDR_Incidents_CL](../parsers/cortexxdr-incidents-cl.md) | [Cortex XDR](../solutions/cortex-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

