# GuardicoreApplications_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Akamai *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GuardicoreApplications_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| allow_only_rules | bool |
| api_version | string |
| assigned_variables | dynamic |
| author_id | string |
| comments | string |
| Computer | string |
| creation_time | long |
| id | string |
| is_custom | bool |
| last_update_time | long |
| ManagementGroupName | string |
| MG | string |
| project_name | string |
| project_template_id | string |
| project_version | string |
| RawData | string |
| rulesets | dynamic |
| sampling_timestamp | int |
| some_rules_failed_validation | bool |
| SourceSystem | string |
| state | string |
| targets | dynamic |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| user_request | dynamic |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

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

