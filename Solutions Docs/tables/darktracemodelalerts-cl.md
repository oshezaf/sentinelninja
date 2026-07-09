# DarktraceModelAlerts_CL

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

## Schema (39 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alertTime | datetime |
| alertUrl | string |
| antigena | boolean |
| category | string |
| compliance | boolean |
| cSensor | boolean |
| cSensorId | string |
| customLabel | string |
| darktraceProduct | string |
| description | string |
| destHost | string |
| destIp | string |
| destMac | string |
| destPort | string |
| details | string |
| deviceCredentials | dynamic |
| deviceHostname | string |
| deviceId | int |
| deviceLabel | string |
| deviceSubnet | string |
| deviceType | string |
| latitude | real |
| longitude | real |
| message | string |
| mitreTechniques | dynamic |
| modelName | string |
| modelTags | dynamic |
| pid | int |
| score | int |
| sid | int |
| sourceHost | string |
| sourceIp | string |
| sourceMac | string |
| sourcePort | string |
| threatId | int |
| TimeGenerated | datetime |
| triggeredComponents | string |
| typeLabel | string |
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

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Darktrace Model Alert](../content/darktrace-darktrace-model-alert-9392a06f-63a4-4a5d-8ca3-647064b13c28-1430c4d3.md) |  |

### Workbooks (1)

**In solution [Darktrace](../solutions/darktrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DarktraceActiveAISecurityPlatformWorkbook](../content/darktrace-darktraceactiveaisecurityplatformworkbook-d9b62600.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

