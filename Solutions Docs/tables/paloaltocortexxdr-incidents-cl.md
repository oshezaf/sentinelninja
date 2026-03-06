# PaloAltoCortexXDR_Incidents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (68 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/PaloAltoCortexXDR_Incidents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| aggregated_score_d | real |
| alert_categories_s | string |
| alert_count_d | real |
| AlertCategories | string |
| AlertCount | string |
| alerts_grouping_status_s | string |
| AlertsGroupingStatus | string |
| assigned_user_mail_s | string |
| assigned_user_pretty_name_s | string |
| Computer | string |
| creation_time_d | real |
| CreationTime | string |
| critical_severity_alert_count_d | real |
| CriticalSeverityAlertCount | string |
| Description | string |
| description_s | string |
| high_severity_alert_count_d | real |
| HighSeverityAlertCount | string |
| host_count_d | real |
| HostCount | string |
| Hosts | string |
| hosts_s | string |
| incident_id_s | string |
| incident_sources_s | string |
| IncidentId | string |
| IncidentSources | string |
| low_severity_alert_count_d | real |
| LowSeverityAlertCount | string |
| ManagementGroupName | string |
| manual_description_s | string |
| manual_severity_s | string |
| med_severity_alert_count_d | real |
| MedSeverityAlertCount | string |
| MG | string |
| mitre_tactics_ids_and_names_s | string |
| mitre_techniques_ids_and_names_s | string |
| modification_time_d | real |
| ModificationTime | string |
| notes_s | string |
| original_tags_s | string |
| OriginalTags | string |
| predicted_score_d | real |
| RawData | string |
| resolve_comment_s | string |
| ResolveComment | string |
| resolved_timestamp_d | real |
| ResolvedTimestamp | string |
| Severity | string |
| severity_s | string |
| SourceSystem | string |
| Starred | string |
| starred_b | bool |
| Status | string |
| status_s | string |
| Tags | string |
| tags_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| user_count_d | real |
| UserCount | string |
| Users | string |
| users_s | string |
| wildfire_hits_d | real |
| WildfireHits | string |
| xdr_url_s | string |
| XdrUrl | string |

## Solutions (2)

This table is used by the following solutions:

- [Cortex XDR](../solutions/cortex-xdr.md)
- [Palo Alto Cortex XDR CCP](../solutions/palo-alto-cortex-xdr-ccp.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Palo Alto Cortex XDR](../connectors/cortexxdrdataconnector.md) |  |
| [Cortex XDR - Incidents](../connectors/cortexxdrincidents.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Cortex XDR](../solutions/cortex-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cortex XDR Incident - High](../content/cortex-xdr-cortex-xdr-incident-high-f96728eb-9802-4522-b715-47fb66c2ecf5-bb6320e4.md) |  |
| [Cortex XDR Incident - Low](../content/cortex-xdr-cortex-xdr-incident-low-1426bbcf-a9ae-4aa5-9da6-abbf48f04115-5efdbb9e.md) |  |
| [Cortex XDR Incident - Medium](../content/cortex-xdr-cortex-xdr-incident-medium-2b05823b-ee15-4b92-a642-b13170e37c35-674c5fb1.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CortexXDR_Incidents_CL](../parsers/cortexxdr-incidents-cl.md) | [Cortex XDR](../solutions/cortex-xdr.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

