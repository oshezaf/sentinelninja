# CyfirmaASDomainIPReputationAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (31 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaASDomainIPReputationAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comments | string |
| categories | dynamic |
| category | string |
| country | string |
| country_code | string |
| first_seen | datetime |
| ip | string |
| ip_version | int |
| is_third_party | bool |
| isp | string |
| last_seen | datetime |
| last_users_reported | datetime |
| notes | dynamic |
| reports | dynamic |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| status | string |
| sub_category | string |
| sub_domain | string |
| threat_actors | dynamic |
| TimeGenerated | datetime |
| top_domain | string |
| uid | string |
| usage_type | string |
| use_cases | string |

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

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Attack Surface - Malicious Domain/IP Reputation High Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-malicious-domain-ip-reputation-high-rule-7ff6f6d7-9672-4567-99fc-cb8a58c3bce7-a9312300.md) |  |
| [CYFIRMA - Attack Surface - Malicious Domain/IP Reputation Medium Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-malicious-domain-ip-reputation-medium-rule-70f137e4-e4ef-4635-92de-10c4f5b0fcd0-b9bb747e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

