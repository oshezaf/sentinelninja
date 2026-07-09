# DarktraceResponseActions_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | Darktrace *(basis: projected)* |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (26 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DCR.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| alertTime | datetime |
| changedBy | string |
| codeId | int |
| customLabel | string |
| darktraceProduct | string |
| deviceFirstSeen | string |
| deviceHostname | string |
| deviceIp | string |
| deviceLabel | string |
| deviceLastSeen | string |
| deviceMac | string |
| deviceName | string |
| deviceType | string |
| endTime | datetime |
| inhibitor | string |
| model | string |
| reason | string |
| score | int |
| startTime | datetime |
| state | string |
| subnetId | int |
| subnetLabel | string |
| subnetNetwork | string |
| TimeGenerated | datetime |
| url | string |

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

