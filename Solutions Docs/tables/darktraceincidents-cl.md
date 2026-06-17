# DarktraceIncidents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (30 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DCR.json)

| Column Name | Type |
|:------------|:-----|
| activityId | string |
| aiaScore | int |
| bestAssetName | string |
| currentGroup | string |
| customLabel | string |
| darktraceProduct | string |
| deviceHostname | string |
| deviceIdentifier | string |
| deviceIp | string |
| deviceMac | string |
| devices | dynamic |
| deviceSubnet | string |
| endTime | datetime |
| externalId | string |
| groupByActivity | boolean |
| groupCategory | string |
| groupingId | string |
| groupPreviousGroups | dynamic |
| groupScore | int |
| incidentEventTime | datetime |
| incidentEventTitle | string |
| latitude | real |
| longitude | real |
| newEvent | boolean |
| severity | int |
| startTime | datetime |
| summary | string |
| summaryFirstSentence | string |
| TimeGenerated | datetime |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [Darktrace](../solutions/darktrace.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Darktrace ActiveAI Security Platform Connector](../connectors/darktraceactiveaisecurityplatform.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Darktrace Incident Event](../content/darktrace-darktrace-incident-event-05de0eaf-01bc-4615-99fc-2ec769864b34-b25377f2.md) |  |

### Workbooks (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DarktraceActiveAISecurityPlatformWorkbook](../content/darktrace-darktraceactiveaisecurityplatformworkbook-d9b62600.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

