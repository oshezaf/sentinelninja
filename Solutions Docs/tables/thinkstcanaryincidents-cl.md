# ThinkstCanaryIncidents_CL

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

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ThinkstCanaryIncidents_CL.json)

| Column Name | Type |
|:------------|:-----|
| Acknowledged | string |
| Created | real |
| CreatedPrintable | string |
| Description | string |
| DestinationIP | string |
| DestinationPort | string |
| Events | dynamic |
| EventsCount | string |
| FlockId | string |
| FlockName | string |
| HashId | string |
| Host | dynamic |
| IncidentId | string |
| IncidentUpdated | datetime |
| IpAddress | string |
| LocalTime | string |
| LogType | string |
| Memo | string |
| NodeId | string |
| Notified | string |
| PreviouslySeenCount | real |
| RawEvent | dynamic |
| Sensor | string |
| SourceIP | string |
| SourcePort | string |
| SrcHostReverse | string |
| TimeGenerated | datetime |
| UpdatedId | real |
| UpdatedTimePrintable | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [ThinkstCanary](../solutions/thinkstcanary.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Thinkst Canary](../connectors/thinkstcanary.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [ThinkstCanary](../solutions/thinkstcanary.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Canary alerts to incidents](../content/thinkstcanary-canary-alerts-to-incidents-06360572-94a7-42a4-add7-58fb933b2353-988d1059.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

