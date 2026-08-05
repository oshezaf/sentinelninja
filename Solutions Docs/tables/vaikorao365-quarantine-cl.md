# VaikoraO365_Quarantine_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VaikoraO365_Quarantine_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActionId_d | real |
| ActionName_s | string |
| Confidence_d | real |
| EmailId_s | string |
| ModelVersion_s | string |
| Reasoning_s | string |
| RecipientAddress_s | string |
| RiskScore_d | real |
| SenderAddress_s | string |
| SenderDomain_s | string |
| SourceMailbox_s | string |
| SubCategory_s | string |
| Subject_s | string |
| TenantId_s | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Vaikora-O365](../solutions/vaikora-o365.md)

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [Vaikora-O365](../solutions/vaikora-o365.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Vaikora - Engine offline](../content/vaikora-o365-vaikora-engine-offline-968b70c1-b468-418a-ac02-1eb74783a52a-92ff8909.md) |  |
| [Vaikora - High score quarantine](../content/vaikora-o365-vaikora-high-score-quarantine-017031f6-be1d-4c68-b4d3-182fa84378cc-0e337c3a.md) |  |
| [Vaikora - Quarantine rate spike](../content/vaikora-o365-vaikora-quarantine-rate-spike-3b3eb1cd-578d-4198-9b7a-bd7253b0dc9f-a2e9d10e.md) |  |

### Workbooks (1)

**In solution [Vaikora-O365](../solutions/vaikora-o365.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [VaikoraO365QuarantineDashboard](../content/vaikora-o365-vaikorao365quarantinedashboard-f059fd4f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

