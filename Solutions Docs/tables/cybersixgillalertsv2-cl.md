# CyberSixgillAlertsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (41 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybersixgill-Actionable-Alerts%5CData%20Connectors%5CCybersixgillAlerts_CCF/table_CyberSixgillAlertsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActorUrlWithContext | string | Direct link to the threat actor in the Cybersixgill portal, scoped by source site. Empty string when threat_actor is unknown. Mirrors the Azure Function actor_url_with_context_s, computed from es_item.creator and es_item.site (the AzFunc populates this only when its 3rd-call branch sets threat_actor; CCF computes it whenever es_item.creator is present, which is strictly more coverage). |
| ActorUrlWithoutContext | string | Direct link to the threat actor in the Cybersixgill portal, without source-site scope. Empty string when threat_actor is unknown. Mirrors the Azure Function actor_url_without_context_s. |
| AdditionalInfo | dynamic | Nested additional_info object from the per-alert detail call. Declared so DCR transforms can extract cve_id, nvd.v3/v2.current, score.current, organization_name. |
| AlertCreationDate | datetime | Date and time when the alert record was ingested |
| AlertDate | string | Date and time when the alert was generated |
| AlertName | string | Name of the actionable alert as returned by the Cybersixgill API |
| AlertTitle | string | Title of the actionable alert |
| AlertTypeId | string | Alert type identifier |
| Assets | string | Flat list of asset values (bins + domain_names) concatenated from matched_assets, mirroring the Azure Function flattening behaviour. |
| Computer | string | Legacy HTTP Data Collector auto-field carrying the source host name. Populated with empty string to preserve byte-compatibility with the Azure Function table - ingestion is direct HTTPS from Cybersixgill so there is no source host. |
| Content | string | Content details of the actionable alert. Matches the Azure Function branching: when additional_info.cve_id is present, use additional_info.cve_description; otherwise fall back to es_item.content when the top-level content field is empty. |
| Cve | string | CVE identifier when the alert relates to a vulnerability. Empty string for non-CVE alerts. Mirrors the Azure Function cve_s field, sourced from additional_info.cve_id in the per-alert detail response. |
| CveUrl | string | Direct link to the CVE record in the Cybersixgill portal when cve_id is present. Empty string otherwise. Mirrors the Azure Function cve_url_s field. |
| CyberSixgillCvss20 | real | CVSS v2.0 score for CVE-related alerts, sourced from additional_info.nvd.v2.current. Defaults to -1 when the CVE has no v2 score (matches Azure Function); null for non-CVE alerts. |
| CyberSixgillCvss31 | real | CVSS v3.1 score for CVE-related alerts, sourced from additional_info.nvd.v3.current. Defaults to -1 when the CVE has no v3 score (matches Azure Function); null for non-CVE alerts. |
| CyberSixgillDveScore | real | Cybersixgill DVE (Dynamic Vulnerability Exploit) score for CVE-related alerts, sourced from additional_info.score.current. Null for non-CVE alerts. |
| EsId | string | Elasticsearch document identifier for the underlying intelligence item |
| EsItem | dynamic | Nested es_item object from the per-alert detail call. Declared so DCR transforms can extract creator, site, content. |
| Id | string | Unique identifier of the actionable alert |
| ManagementGroupName | string | Legacy SCOM Management Group name. Populated with empty string to preserve byte-compatibility with the Azure Function table - SCOM is not part of the CCF/DCR pipeline. |
| MatchedAssets | dynamic | Nested matched_assets object from the bulk alert response. Declared so DCR transforms can extract bins and domain_names. |
| MatchedAssetsBins | string | Matched assets bins extracted from matched_assets |
| MatchedAssetsDomainNames | string | Domain names extracted from matched_assets |
| MG | string | Legacy SCOM Management Group GUID. Populated with the empty-GUID sentinel to preserve byte-compatibility with the Azure Function table - there is no real management group in the CCF/DCR pipeline. |
| OrganizationName | string | Name of the organization the alert was raised for, sourced from additional_info.organization_name. Mirrors the Azure Function field of the same name. |
| PortalUrl | string | Direct link to this alert in the Cybersixgill portal |
| Read | bool | Indicates whether the alert has been read |
| Severity | int | Severity level of the alert as an integer score (e.g. 10) |
| Site | string | Site where the threat was observed |
| SourceSystem | string | Legacy HTTP Data Collector field. Hard-coded to 'RestAPI' to preserve byte-compatibility with the Azure Function table so production parsers behave identically across AzFunc and CCF ingestion paths. |
| Status | dynamic | Nested status object from the bulk alert response. Declared so DCR transforms can extract status.name with the 'Treatment Required' fallback. |
| StatusName | string | Machine-readable status name of the alert (e.g. treatment_required). Defaults to 'Treatment Required' when missing, matching the Azure Function fallback behaviour. |
| SubAlerts | dynamic | Raw sub_alerts array from the Cybersixgill API, preserved as a dynamic column. The CyberSixgillAlertsExpanded parser uses mv-expand on this column at query time to fan out one row per sub-alert - matching the per-sub-alert rows the legacy Azure Function emitted into CyberSixgill_Alerts_CL. |
| SubAlertsCount | real | Number of sub-alerts. Computed from array_length(sub_alerts) to match the Azure Function (which uses len(sub_alerts) regardless of the API-supplied sub_alerts_count). |
| ThreatActor | string | Threat actor (dark web username or channel name) extracted from es_item |
| ThreatLevel | string | Threat level of the alert (e.g. imminent, emerging) |
| Threats | string | Threats associated with the alert, serialized from array |
| ThreatSource | string | Dark web site or platform where the threat was observed, extracted from es_item |
| Time | string | Timestamp of the alert, mirrored from the date field |
| TimeGenerated | datetime |  |
| UserId | string | User ID associated with the alert |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cybersixgill Actionable Alerts (via Codeless Connector Framework)](../connectors/cybersixgillalertsccfconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

