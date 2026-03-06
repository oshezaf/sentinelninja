# atlassian_beacon_alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/atlassian_beacon_alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| activity_action_s | string |
| activity_subject_ari_s | string |
| activity_subject_ati_s | string |
| activity_subject_containerAri_s | string |
| activity_time_end_t | datetime |
| activity_time_start_t | datetime |
| actor_accountId_s | string |
| actor_name_s | string |
| actor_sessions_s | dynamic |
| actor_url_s | string |
| alert_created_t | datetime |
| alert_id_s | string |
| alert_product_s | string |
| alert_site_s | string |
| alert_title_s | string |
| alert_url_s | string |
| alertDetailURL_s | string |
| alertId_s | string |
| alertTitle_s | string |
| atlassianAlertType_s | string |
| atlassianWorkspace_cloudId_g | string |
| atlassianWorkspace_id_g | string |
| atlassianWorkspace_orgId_s | string |
| detectiontime_d | datetime |
| id_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | string |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Atlassian Beacon Alerts](../connectors/atlassianbeaconalerts.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Integration for Atlassian Beacon](../solutions/integration-for-atlassian-beacon.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Atlassian Beacon Alert](../content/integration-for-atlassian-beacon-atlassian-beacon-alert-83fbf6a2-f227-48f4-8e7b-0b0ecac2381b-93237405.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

