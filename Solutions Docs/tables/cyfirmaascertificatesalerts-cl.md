# CyfirmaASCertificatesAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (37 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Attack%20Surface/Data%20Connectors/CyfirmaASAlerts_ccp/CyfirmaASAlerts_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alert_created_date | datetime |
| alert_object_uid | string |
| alert_uid | string |
| asset_comments | string |
| attacks | dynamic |
| category | string |
| cert_data | string |
| cert_hash | string |
| cert_type | string |
| description | string |
| first_seen | datetime |
| is_third_party | boolean |
| is_vulnerable | boolean |
| issued_by | string |
| issued_to | string |
| issuer_public_hash | string |
| last_seen | datetime |
| notes | dynamic |
| protocols | dynamic |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| self_signed | boolean |
| serial | string |
| severity | string |
| source | string |
| status | string |
| sub_category | string |
| sub_domain | string |
| title | string |
| top_domain | string |
| uid | string |
| use_cases | string |
| valid_from | datetime |
| valid_to | datetime |
| version | string |

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
| [CYFIRMA - Attack Surface - Weak Certificate Exposure - High Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-weak-certificate-exposure-high-rule-3b5a1c0e-7f3a-4d47-8416-6c0b8b91e9ce-1c4f0d37.md) |  |
| [CYFIRMA - Attack Surface - Weak Certificate Exposure - Medium Rule](../content/cyfirma-attack-surface-cyfirma-attack-surface-weak-certificate-exposure-medium-rule-5a617ff2-3e3d-44e7-b761-9f0d542ae191-2acd25c4.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

