# MenloWeb_CL

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

## Schema (88 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MenloWeb_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_mode | string |
| browser_and_version | string |
| cached | bool |
| categories | dynamic |
| client_ip | string |
| connId | string |
| content_type | string |
| domain | string |
| domain_front | string |
| dst | dynamic |
| egress_country | string |
| egress_ip | string |
| email_isolation_state | string |
| event_time | datetime |
| file_size | long |
| filename | string |
| full_session_id | string |
| fullScanResult | string |
| gpush | string |
| gpush_changes | dynamic |
| gpush_name | string |
| gpush_out_cat | string |
| gpush_rep_url | string |
| groups | dynamic |
| groupsMatched | dynamic |
| has_password | bool |
| inconsistent_domain | bool |
| is_iframe | bool |
| magicName | string |
| mimeType | string |
| numSubfiles | int |
| origin_country | string |
| origin_ip | string |
| pe_action | string |
| pe_inspection_skip_reason | string |
| pe_reason | dynamic |
| pe_rulename | dynamic |
| protocol | string |
| proxyEventDetail | dynamic |
| proxyEventType | dynamic |
| ra_action | string |
| ra_heat_evasion_techniques | string |
| ra_impersonated_brand | string |
| ra_malware_family | string |
| ra_mode | string |
| ra_navigation_id | string |
| ra_rule_id | dynamic |
| ra_threat_types | string |
| referer | string |
| region | string |
| region_name | string |
| rendering_mode | string |
| reqId | string |
| request_type | string |
| resource | dynamic |
| response_code | int |
| risk_score | string |
| risk_tally | int |
| sandboxActivity | dynamic |
| sandboxResult | string |
| session_id | string |
| sha256 | string |
| soph_dlp_ref | string |
| srcPort | int |
| surrogate_id | string |
| tab_id | string |
| threat_types | dynamic |
| threats | dynamic |
| TimeGenerated | datetime |
| top_url | string |
| ua_type | string |
| upstream_response_code | int |
| url | string |
| user_agent | string |
| userid | string |
| virusDetails | string |
| votiro_cdr | string |
| votiro_cdr_changes | dynamic |
| votiro_cdr_mode | string |
| votiro_cdr_out_cat | string |
| votiro_cdr_rep_url | string |
| watermark | bool |
| x_client_country | string |
| x_client_ip | string |
| xff_ip | string |
| xff_ip_matched | string |
| xHeaders | string |
| xHeadersMatched | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [MenloSecurity](../solutions/menlosecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Menlo Security](../connectors/menlosecurityconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

