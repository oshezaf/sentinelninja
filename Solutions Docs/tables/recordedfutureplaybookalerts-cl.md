# RecordedFuturePlaybookAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Internal Use Table:** This table is created and used internally by the [Recorded Future](../solutions/recorded-future.md) solution. It is written to by playbooks for solution-specific data storage.

| Attribute | Value |
|:----------|:------|
| **Category** | Internal |
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (9 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RecordedFuturePlaybookAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_description | string |
| Category | string |
| id_s | string |
| link_s | string |
| priority_s | string |
| rule_label_s | string |
| SourceSystem | string |
| TimeGenerated | datetime |
| title_s | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Recorded Future](../solutions/recorded-future.md)

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Recorded Future Playbook Alerts Incident Creation](../content/recorded-future-recorded-future-playbook-alerts-incident-creation-0aded97e-4e2d-4e4d-93cf-4a7e45c7bab2-33b657fc.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

