# Audits_Data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (37 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Audits_Data_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| api_client_id | string |
| api_client_id_g | string |
| Computer | string |
| entity_type | string |
| event_action | string |
| event_action_s | string |
| event_data | dynamic |
| event_data_s | string |
| event_object | string |
| event_object_s | string |
| event_timestamp | datetime |
| event_timestamp_t | datetime |
| id | real |
| id_d | real |
| ManagementGroupName | string |
| message | string |
| MG | string |
| RawData | string |
| result_status | string |
| result_status_s | string |
| source_ip | string |
| source_ip_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| user_id | real |
| user_id_d | real |
| user_role | string |
| user_role_s | string |
| user_type | string |
| user_type_s | string |
| username | string |
| username_s | string |
| version | string |
| version_s | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Vectra XDR](../solutions/vectra-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Vectra XDR](../connectors/vectraxdr.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Vectra XDR](../solutions/vectra-xdr.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VectraXDR](../content/vectra-xdr-vectraxdr-67eeec96.md) |  |

## Parsers Using This Table (3)

### ASIM Parsers (2)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAuditEventVectraXDRAudit](../asim/asimauditeventvectraxdraudit.md) | AuditEvent | Vectra |  |
| [ASimAuthenticationVectraXDRAudit](../asim/asimauthenticationvectraxdraudit.md) | Authentication | Vectra |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraAudits](../parsers/vectraaudits.md) | [Vectra XDR](../solutions/vectra-xdr.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

