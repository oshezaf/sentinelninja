# MiroAIInteractionLogs_CL

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

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro%5CData%20Connectors%5CMiroAIInteractionLogs_CCF/MiroAIInteractionLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| actor | dynamic | Actor that produced the AI interaction, as returned by the API, in JSON format |
| actor_email | string | Email address of the actor (actor.email) |
| actor_id | string | Unique identifier of the actor that produced the AI interaction (actor.id) |
| actor_name | string | Name of the actor (actor.name) |
| createdAt | datetime | Date and time when the AI interaction occurred |
| details | dynamic | Additional details about the AI interaction in JSON format; the structure varies by event type |
| eventType | string | Step of the interaction this entry records (input, output, model_invocation_request, model_invocation_response, tool_invocation_request, tool_invocation_response) |
| id | string | Unique identifier of the AI interaction log entry |
| model | dynamic | Model information (model invocation events only), as returned by the API, in JSON format |
| object | dynamic | Miro object involved in the AI interaction, as returned by the API, in JSON format |
| object_id | string | Unique identifier of the Miro object involved in the AI interaction (object.id) |
| session | dynamic | Session information, as returned by the API, in JSON format |
| session_id | string | Unique identifier of the session that groups the events of one conversation (session.id) |
| storedAt | datetime | Date and time when the AI interaction log was stored |
| surface | string | Where in Miro the interaction started |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time when the AI interaction occurred |
| tool | dynamic | Tool information (tool invocation events only), as returned by the API, in JSON format |
| turnId | string | Identifier that groups the events of one exchange |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Miro](../solutions/miro.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Miro AI Interaction Logs (Beta) (Enterprise Plan + Enterprise Guard)](../connectors/miroaiinteractionlogsdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

