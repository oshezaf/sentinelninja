# RecordedFutureSandboxResults_V2_CL

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

## Schema (10 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RecordedFutureSandboxResults_V2_CL.json)

| Column Name | Type |
|:------------|:-----|
| EmailFrom | string |
| EmailTo | string |
| FileName | string |
| HtmlReport | string |
| SampleId | string |
| SandboxScore | string |
| SandboxVerdict | string |
| ScanTime | datetime |
| Source | string |
| TimeGenerated | datetime |

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

### Analytic Rules (2)

**In solution [Recorded Future](../solutions/recorded-future.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Recorded Future Sandbox - Malicious Email Attachment](../content/recorded-future-recorded-future-sandbox-malicious-email-attachment-a1b2c3d4-5678-90ab-cdef-222222222222-262dc20b.md) |  |
| [Recorded Future Sandbox - Malicious File in Storage Account](../content/recorded-future-recorded-future-sandbox-malicious-file-in-storage-account-a1b2c3d4-5678-90ab-cdef-333333333333-28a242ec.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

