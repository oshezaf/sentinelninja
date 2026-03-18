# MiroContentLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (12 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro%5CData%20Connectors%5CMiroContentLogs_CCF/MiroContentLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| actionTime | datetime | Timestamp when the action was performed |
| actionType | string | Type of action performed (create, update, delete, etc.) |
| actor_email | string | Email address of the user who performed the action |
| actor_id | string | Unique identifier of the user who performed the action |
| actor_name | string | Name of the user who performed the action |
| contentId | string | Unique identifier of the content affected |
| id | string | Unique identifier of the content log event |
| itemId | string | Unique identifier of the item affected |
| itemType | string | Type of the content item |
| relationships | dynamic | Relationships of the content item in JSON format |
| state | dynamic | State information of the content item in JSON format |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time when the event was ingested |

## Solutions (1)

This table is used by the following solutions:

- [Miro](../solutions/miro.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Miro Content Logs (Enterprise Plan + Enterprise Guard)](../connectors/mirocontentlogsdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

