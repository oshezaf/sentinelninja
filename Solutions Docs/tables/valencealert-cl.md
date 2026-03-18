# ValenceAlert_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ValenceSecurityAlerts.json)

| Column Name | Type |
|:------------|:-----|
| alertType_defaultSeverity_s | string |
| alertType_description_s | string |
| alertType_name_s | string |
| alertType_platform_s | string |
| alertType_severity_s | string |
| alertType_vuid_s | string |
| connectorUids_s | string |
| creationTimestamp_d | int |
| events_s | string |
| status_s | string |
| TimeGenerated | datetime |
| Timestamp_t | datetime |
| Type | string |
| vuid_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Valence Security](../solutions/valence-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SaaS Security](../connectors/valencesecurity.md) |  |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

