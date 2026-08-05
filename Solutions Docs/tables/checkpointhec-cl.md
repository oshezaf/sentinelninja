# CheckpointHEC_CL

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

## Schema (33 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Harmony%20Email%20and%20Collaboration/Data%20Connectors/CheckpointHEC_DCR.json)

| Column Name | Type |
|:------------|:-----|
| email_raw | dynamic |
| EmailAttachmentCount | int |
| EmailAttachmentsPayloads | dynamic |
| EmailBbc | dynamic |
| EmailBodyContentType | string |
| EmailCc | dynamic |
| EmailDirection | string |
| EmailDkimResults | string |
| EmailDmarcResults | string |
| EmailEmailId | string |
| EmailFromEmail | string |
| EmailFromName | string |
| EmailLinks | dynamic |
| EmailMessageId | string |
| EmailReplyTo | dynamic |
| EmailSaasSpamVerdict | string |
| EmailSenderClientIp | string |
| EmailSenderServerIp | string |
| EmailSpfResults | string |
| EmailSubject | string |
| EmailTo | dynamic |
| EmailType | string |
| event_raw | dynamic |
| EventAction | string |
| EventCategory | string |
| EventConfidenceIndicator | string |
| EventConfidenceLevel | int |
| EventCurrentState | string |
| EventDescription | string |
| EventEventId | string |
| EventPolicyRuleId | int |
| EventProvider | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [CheckPoint Harmony Email and Collaboration](../solutions/checkpoint-harmony-email-and-collaboration.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CheckpointHEC_CL On Demand Email Security (via Codeless Connector Platform)](../connectors/checkpointhecconnectordefinition.md) |  |

---

## Content Items Using This Table (6)

### Analytic Rules (1)

**In solution [CheckPoint Harmony Email and Collaboration](../solutions/checkpoint-harmony-email-and-collaboration.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Checkpoint - Pending Phishing emails](../content/checkpoint-harmony-email-and-collaboration-checkpoint-pending-phishing-emails-a97e2333-b7de-4c14-9700-e652a1dbef26-bbcae6ab.md) |  |

### Hunting Queries (5)

**In solution [CheckPoint Harmony Email and Collaboration](../solutions/checkpoint-harmony-email-and-collaboration.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [DLP Detections](../content/checkpoint-harmony-email-and-collaboration-dlp-detections-0794a162-8635-43fd-81ed-2cf260457541-c0ebc1a6.md) |  |
| [Event breakdown per user](../content/checkpoint-harmony-email-and-collaboration-event-breakdown-per-user-0794a162-8635-43fd-81ed-2cf260457542-e82d07e1.md) |  |
| [Event count last 24 hours](../content/checkpoint-harmony-email-and-collaboration-event-count-last-24-hours-0794a162-8635-43fd-81ed-2cf260457543-d2f16ddb.md) |  |
| [Phishing emails per internal user](../content/checkpoint-harmony-email-and-collaboration-phishing-emails-per-internal-user-0794a162-8635-43fd-81ed-2cf260457545-65d18bbf.md) |  |
| [Spam emails](../content/checkpoint-harmony-email-and-collaboration-spam-emails-0794a162-8635-43fd-81ed-2cf260457544-80b750a7.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

