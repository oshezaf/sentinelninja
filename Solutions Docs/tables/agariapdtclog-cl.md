# AgariAPDTCLog_CL

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

## Schema (19 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/table_AgariAPDTCLog.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AttachmentExtensions | dynamic | Array of file extensions of message attachments |
| AttachmentFilenames | dynamic | Array of filenames of message attachments |
| AttachmentSha256 | dynamic | Array of SHA-256 hashes of message attachments |
| AttackTypes | dynamic | Array of detected attack types (e.g. phishing, credential_theft) |
| DomainReputation | int | Reputation score of the sending domain |
| DomainTags | dynamic | Array of tags applied to the sending domain |
| From | string | Sender email address |
| FromDomain | string | Domain of the sender email address |
| HasAttachment | bool | Whether the message has attachments |
| Id | string | Unique identifier for the message (UUID) |
| Ip | string | IP address of the sending mail server |
| MessageDate | datetime | Date and time the message was received |
| MessageDetailsLink | string | URL to view the message details in the Agari console |
| PolicyIds | dynamic | Array of policy IDs that matched this message |
| Sbrs | string | SenderBase Reputation Score of the sending IP |
| Subject | string | Email subject line |
| TimeGenerated | datetime |  |
| TimestampMs | long | Timestamp in milliseconds when the message was processed |
| To | string | Recipient email address |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Agari](../solutions/agari.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Fortra Agari Data Connector (via Codeless Connector Framework)](../connectors/agariconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

