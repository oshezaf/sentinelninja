# datawizaserveraccess_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (9 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/datawizaserveraccess_CL.json)

| Column Name | Type |
|:------------|:-----|
| event | dynamic |
| host | dynamic |
| log | dynamic |
| ls_timestamp | datetime |
| ls_version | string |
| message | string |
| received_at | datetime |
| Status_d | int |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Datawiza](../solutions/datawiza.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Datawiza DAP](../connectors/datawizadapsolution.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [Datawiza](../solutions/datawiza.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Datawiza - massive errors detected](../content/datawiza-datawiza-massive-errors-detected-ddee1398-cf0b-46af-b583-78c3c29156dc-f782246e.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

