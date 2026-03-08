# Entities_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Entities_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| account_type | dynamic |
| assignment | dynamic |
| assignment_assigned_by | dynamic |
| assignment_assigned_by_id | real |
| assignment_assigned_by_username | string |
| assignment_assigned_to | dynamic |
| assignment_assigned_to_id | real |
| assignment_assigned_to_username | string |
| assignment_date_assigned | datetime |
| assignment_id | real |
| attack_profile | string |
| attack_rating | real |
| breadth_contrib | real |
| detection_set | dynamic |
| entity_type | string |
| host_type | dynamic |
| id | real |
| importance | real |
| ip | string |
| is_prioritized | bool |
| last_detection_timestamp | datetime |
| last_modified_timestamp | datetime |
| name | string |
| notes | dynamic |
| privilege_category | string |
| privilege_level | real |
| sensors | dynamic |
| severity | string |
| state | string |
| tags | dynamic |
| TimeGenerated | datetime |
| Type | string |
| urgency_score | real |
| url | string |
| velocity_contrib | real |

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra XDR](../connectors/vectraxdr.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (4)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Vectra Create Incident Based on Priority for Accounts](../content/vectra-xdr-vectra-create-incident-based-on-priority-for-accounts-af6f2812-0187-4cc9-822a-952f8b5b6b7e-99cb4b20.md) |  |
| [Vectra Create Incident Based on Priority for Hosts](../content/vectra-xdr-vectra-create-incident-based-on-priority-for-hosts-9b51b0fb-0419-4450-9ea0-0a48751c4902-9d612107.md) |  |
| [Vectra Create Incident Based on Tag for Accounts](../content/vectra-xdr-vectra-create-incident-based-on-tag-for-accounts-87325835-dd8c-41e7-b686-fd5adbbd0aee-e6d22677.md) |  |
| [Vectra Create Incident Based on Tag for Hosts](../content/vectra-xdr-vectra-create-incident-based-on-tag-for-hosts-8b7a1a64-8ef2-4000-b8c9-9bca3b93aace-08413d75.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

