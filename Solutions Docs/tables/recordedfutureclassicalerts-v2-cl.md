# RecordedFutureClassicAlerts_V2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RecordedFutureClassicAlerts_V2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AISummary | string |
| AlertID | string |
| AlertName | string |
| Document_url | string |
| Documents | dynamic |
| Entity | dynamic |
| Fragment | string |
| RuleId | string |
| RuleName | string |
| TimeGenerated | datetime |
| Triggered | datetime |
| URL | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Recorded Future](../solutions/recorded-future.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Recorded Future - Log Ingestion](../connectors/recordedfuture.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Recorded Future Alerts Incident Creation](../content/recorded-future-recorded-future-alerts-incident-creation-0aded97e-4e2d-4e4d-93cf-4a7e45c7bab3-75450771.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

