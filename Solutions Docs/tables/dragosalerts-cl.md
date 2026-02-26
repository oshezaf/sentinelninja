# DragosAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DragosAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| analyticEventId | string |
| analyticEventIndex | string |
| assets | dynamic |
| collectors | dynamic |
| content | string |
| count | int |
| createdAt | datetime |
| detectionQuads | dynamic |
| detectorId | string |
| firstSeenAt | datetime |
| id | int |
| lastSeenAt | datetime |
| matchedRuleIds | dynamic |
| notificationType | string |
| occurredAt | datetime |
| retained | bool |
| reviewed | bool |
| severity | int |
| source | string |
| sourceIdField | string |
| sourceIds | dynamic |
| sourceIndex | string |
| state | string |
| summary | string |
| threatInfo | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Dragos](../solutions/dragos.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ Dragos Notifications via Cloud Sitestore](../connectors/dragossitestoreccp.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DragosPullNotificationsToSentinel](../parsers/dragospullnotificationstosentinel.md) | [Dragos](../solutions/dragos.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

