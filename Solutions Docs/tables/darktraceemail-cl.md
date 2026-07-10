# DarktraceEMAIL_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Darktrace *(basis: projected)* |
| **Source Product** | ActiveAI Security Platform *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (20 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DCR.json)

| Column Name | Type |
|:------------|:-----|
| actions | dynamic |
| alertTime | datetime |
| anomalyScore | int |
| attachmentNames | dynamic |
| attachmentSha1s | dynamic |
| attachmentSha256s | dynamic |
| customLabel | string |
| darktraceProduct | string |
| direction | string |
| from | string |
| linkHosts | dynamic |
| messageId | string |
| recipientActions | dynamic |
| recipients | dynamic |
| subject | string |
| tags | dynamic |
| TimeGenerated | datetime |
| timestamp | datetime |
| url | string |
| uuid | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Darktrace](../solutions/darktrace.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DarktraceActiveAISecurityPlatformWorkbook](../content/darktrace-darktraceactiveaisecurityplatformworkbook-d9b62600.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

