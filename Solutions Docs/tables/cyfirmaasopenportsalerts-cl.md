# CyfirmaASOpenPortsAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (28 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Data%20Connectors/CyfirmaASAlerts_ccp/CyfirmaASAlerts_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alert_created_date | datetime |
| alert_object_uid | string |
| alert_uid | string |
| asset_comments | string |
| category | string |
| description | string |
| first_seen | datetime |
| ip | string |
| is_third_party | boolean |
| last_seen | datetime |
| notes | dynamic |
| open_ports | dynamic |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| software | string |
| status | string |
| sub_category | string |
| sub_domain | string |
| title | string |
| top_domain | string |
| uid | string |
| use_cases | string |
| web_app_firewall | string |
| web_server | string |
| web_server_version | string |

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
| [CYFIRMA - Attack Surface - Open Ports High Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-open-ports-high-rule-87e7eb3f-bb8e-46e5-8807-d3fc63d0f676-40437b75.md) |  |
| [CYFIRMA - Attack Surface - Open Ports Medium Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-open-ports-medium-rule-9e18b6c3-d172-4bc6-a7d9-cc7b0a03a69e-84f299fd.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

