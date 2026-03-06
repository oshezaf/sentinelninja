# CyfirmaASCloudWeaknessAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

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
| asset_category | string |
| asset_comments | string |
| asset_name | string |
| asset_type | string |
| category | string |
| created_date | datetime |
| description | string |
| first_seen | datetime |
| impact | string |
| is_third_party | boolean |
| last_seen | datetime |
| notes | dynamic |
| recommendations | string |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| source | string |
| source_type | dynamic |
| status | string |
| sub_category | string |
| title | string |
| uid | string |
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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Attack Surface - Cloud Weakness High Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-cloud-weakness-high-rule-87cd8b10-90f6-4967-a4a7-2142e848ec8f-e09f1271.md) |  |
| [CYFIRMA - Attack Surface - Cloud Weakness Medium Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-cloud-weakness-medium-rule-b8a3c5e2-04d5-4b61-9b62-b4f53a417f74-a425da1f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

