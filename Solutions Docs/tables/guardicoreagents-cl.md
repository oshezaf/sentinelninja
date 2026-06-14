# GuardicoreAgents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

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

## Schema (32 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GuardicoreAgents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| agent_id | string |
| asset_id | string |
| component_id | string |
| Computer | string |
| configuration | dynamic |
| display_name | string |
| first_seen | long |
| health | dynamic |
| hostname | string |
| id | string |
| installed_modules | dynamic |
| ip_addresses | dynamic |
| is_agent_enforcing | bool |
| is_agent_missing | bool |
| is_missing | bool |
| last_seen | long |
| ManagementGroupName | string |
| MG | string |
| not_monitored | bool |
| os | string |
| policy_revision | long |
| RawData | string |
| sampling_timestamp | int |
| SourceSystem | string |
| status | string |
| status_flags | dynamic |
| supported_features | dynamic |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| version | string |

## Solutions (1)

This table is used by the following solutions:

- [Akamai Guardicore](../solutions/akamai-guardicore.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Akamai Guardicore](../connectors/akamaiguardicore.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Akamai Guardicore](../solutions/akamai-guardicore.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GuardicoreInfo](../content/akamai-guardicore-guardicoreinfo-922f455f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

