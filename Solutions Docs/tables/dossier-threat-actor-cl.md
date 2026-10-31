# dossier_threat_actor_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_threat_actor_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| data | dynamic |
| data_actor_description | string |
| data_actor_id | string |
| data_actor_name | string |
| data_customer_first_dns_query | datetime |
| data_customer_last_dns_query | datetime |
| data_display_name | string |
| data_external_references | dynamic |
| data_ikb_first_classified_malicious | datetime |
| data_ikb_submitted | datetime |
| data_purpose | dynamic |
| data_related_count | real |
| data_reports | dynamic |
| data_ttp | dynamic |
| params | dynamic |
| params_source | string |
| params_target | string |
| params_type | string |
| RowData | dynamic |
| status | string |
| status_message_for_dossier | string |
| task_id | string |
| TenantId | string |
| time_value | real |
| TimeGenerated | datetime |
| Type | string |
| v_value | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

