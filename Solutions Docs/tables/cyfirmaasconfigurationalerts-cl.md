# CyfirmaASConfigurationAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (44 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaASConfigurationAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comment | string |
| category | string |
| click_jacking_defence | bool |
| content_security_policy | bool |
| cookie_xss_protection | bool |
| data_injection_defence | bool |
| description | string |
| dmarc | string |
| dns_sec | string |
| domain_expiry | dynamic |
| domain_status | string |
| first_seen | datetime |
| ip | string |
| is_third_party | bool |
| last_seen | datetime |
| missing_epp_codes | dynamic |
| notes | dynamic |
| open_relay | string |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| secure_cookie | bool |
| server | string |
| server_version | string |
| set_cookie_https_only | bool |
| severity | string |
| software | string |
| spf | string |
| status | string |
| strict_transport_Security | bool |
| sub_category | string |
| sub_domain | string |
| TimeGenerated | datetime |
| top_domain | string |
| uid | string |
| use_cases | string |
| web_app_firewall | string |
| x_frame_options | bool |
| x_xss_protection | bool |
| zone_transfer | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Attack Surface](../connectors/cyfirmaattacksurfacealertsconnector.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Cyfirma Attack Surface](../solutions/cyfirma-attack-surface.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Attack Surface - Configuration High Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-configuration-high-rule-30206b45-75d2-4c6a-87c5-f0861c1f2870-d9b14ee5.md) |  |
| [CYFIRMA - Attack Surface - Configuration Medium Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-configuration-medium-rule-e1f88d08-5c32-4d35-a8ce-2f21cdb4b6de-b19cac46.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

