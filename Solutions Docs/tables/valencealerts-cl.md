# ValenceAlerts_CL

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
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (11 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security%5CData%20Connectors%5CValenceSecurity_PUSH_CCP/ValenceSecurity_table_ValenceAlerts.json)

| Column Name | Type |
|:------------|:-----|
| alertType | string |
| connectorUids | dynamic |
| creationTimestamp | long |
| events | dynamic |
| platform | string |
| sentinelSeverity | string |
| severity | string |
| status | string |
| summaryLine | string |
| TimeGenerated | datetime |
| vuid | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Valence Security](../solutions/valence-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Valence Security](../connectors/valencesecurityccfpush.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Valence Security](../solutions/valence-security.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Valence Security Alerts](../content/valence-security-valence-security-alerts-d944d564-b6fa-470d-b5ab-a1a141878c5e-f39d1559.md) |  |

### Workbooks (1)

**In solution [Valence Security](../solutions/valence-security.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ValenceAlertsWorkbook](../content/valence-security-valencealertsworkbook-fae392cb.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

