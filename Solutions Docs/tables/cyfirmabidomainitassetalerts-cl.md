# CyfirmaBIDomainITAssetAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (38 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Data%20Connectors/CyfirmaBIAlerts_ccp/CyfirmaBIAlerts_DCR.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| alert_created_date | datetime |
| alert_object_uid | string |
| alert_uid | string |
| asset_comments | string |
| asset_type | string |
| asset_value | string |
| category | string |
| comments | string |
| created_date | datetime |
| description | string |
| domain | string |
| dr_domain | string |
| dr_sub_domain | string |
| first_seen | datetime |
| host_provider | string |
| impact | string |
| ip_address | string |
| is_third_party | boolean |
| last_seen | datetime |
| mail_server | string |
| notes | dynamic |
| recommendation | string |
| registered_date | string |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| signature | string |
| source | string |
| source_type | dynamic |
| status | string |
| sub_category | string |
| suspected_threat_actor | dynamic |
| title | string |
| uid | string |
| use_cases | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Brand Intelligence - Domain Impersonation High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-domain-impersonation-high-rule-10bdf525-5b89-4a25-933a-e63e73b915f1-4123923d.md) |  |
| [CYFIRMA - Brand Intelligence - Domain Impersonation Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-domain-impersonation-medium-rule-8f97ddbe-ab66-4f6c-b675-73b5eeb07259-57497379.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

