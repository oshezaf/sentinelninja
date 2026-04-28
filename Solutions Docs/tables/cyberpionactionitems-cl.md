# CyberpionActionItems_CL

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

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberpionActionItems_CL.json)

| Column Name | Type |
|:------------|:-----|
| acknowledged_by_s | string |
| acknowledged_date_t | datetime |
| acknowledged_reason_s | string |
| Category | string |
| description_s | string |
| host_s | string |
| id_s | string |
| impact_s | string |
| is_acknowledged_b | bool |
| is_open_b | bool |
| opening_datetime_t | datetime |
| solution_s | string |
| summary_s | string |
| technical_details_s | string |
| TimeGenerated | datetime |
| title_s | string |
| urgency_d | real |

## Solutions (1)

This table is used by the following solutions:

- [IONIX](../solutions/ionix.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] IONIX Security Logs (Push)](../connectors/cyberpionsecuritylogs.md) |  |
| [IONIX Security Logs (via Codeless Connector Framework)](../connectors/ionixdefinition.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [IONIX](../solutions/ionix.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [High Urgency IONIX Action Items](../content/ionix-high-urgency-ionix-action-items-8e0403b1-07f8-4865-b2e9-74d1e83200a4-39544ba2.md) |  |

### Workbooks (2)

**In solution [IONIX](../solutions/ionix.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [IONIXOverviewWorkbook](../content/ionix-ionixoverviewworkbook-5e96257f.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CyberpionOverviewWorkbook](../content/github-only-cyberpionoverviewworkbook-1f91ecaf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

