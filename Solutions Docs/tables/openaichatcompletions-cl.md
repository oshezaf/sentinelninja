# OpenAIChatCompletions_CL

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

## Schema (21 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenAI%5CData%20Connectors%5COpenAI_CCP/OpenAIChatCompletions_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Choices | dynamic | The list of chat completion choices |
| ConnectorName | string | The friendly name of the connector instance that collected this log |
| CreatedAt | datetime | The Unix timestamp (in seconds) of when the chat completion was created |
| FrequencyPenalty | real | Frequency penalty parameter |
| Id | string | The unique identifier for the chat completion |
| InputUser | string | User identifier for the request |
| Metadata | dynamic | Set of key-value pairs attached to the object |
| Model | string | The model used for the chat completion |
| ObjectType | string | The object type |
| PresencePenalty | real | Presence penalty parameter |
| RequestId | string | The unique request identifier |
| ResponseFormat | dynamic | The format specification for the response |
| Seed | long | The seed used for deterministic sampling |
| ServiceTier | string | The processing type used for serving the request |
| SystemFingerprint | string | Backend configuration fingerprint |
| Temperature | real | The sampling temperature used |
| TimeGenerated | datetime |  |
| ToolChoice | string | Which tool (if any) was called by the model |
| Tools | dynamic | List of tools the model may call |
| TopProbability | real | The nucleus sampling parameter |
| Usage | dynamic | Usage statistics for the completion request |

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

