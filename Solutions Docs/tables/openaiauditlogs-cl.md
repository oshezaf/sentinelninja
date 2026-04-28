# OpenAIAuditLogs_CL

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

## Schema (10 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenAI%5CData%20Connectors%5COpenAI_CCP/OpenAIAuditLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActorApiKey | dynamic | The API Key used to perform the audit logged action |
| ActorSession | dynamic | The session in which the audit logged action was performed |
| ActorType | string | The actor who performed the audit logged action |
| ConnectorName | string | The friendly name of the connector instance that collected this log |
| EffectiveAt | datetime | The Unix timestamp (in seconds) of the event |
| EventDetails | dynamic | Details of the audit log event |
| EventType | string | The event type |
| Id | string | The ID of this log |
| Project | dynamic | The project that the action was scoped to |
| TimeGenerated | datetime |  |

## Solutions (1)

This table is used by the following solutions:

- [OpenAI](../solutions/openai.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [OpenAI (via Codeless Connector Framework)](../connectors/openaiconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

