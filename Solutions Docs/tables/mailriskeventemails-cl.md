# MailRiskEventEmails_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (31 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MailRisk%5CData%20Connectors%5CMailRisk_CCP/table%20-%20MailRiskEmails.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AssessedAt | datetime | The timestamp (UTC) when the email was assessed. |
| Assessments | dynamic | The assessments related to the email. |
| Attachments | dynamic | The attachments contained in the email. |
| AttachmentsCount | int | The number of attachments in the email. |
| Category | string | The risk category of the email. |
| CheckedAt | datetime | The timestamp (UTC) when the email was checked. |
| CompanyId | int | The unique identifier for the company. |
| ContentStatus | string | The content status of the email. |
| EventType | string | The type of event. |
| FeedbackProvided | bool | Indicates if feedback was provided for the email. |
| FeedbackRequested | bool | Indicates if feedback was requested for the email. |
| FromEmail | string | The email address of the sender. |
| FromName | string | The name of the sender. |
| Headers | dynamic | The headers of the email. |
| Id | int | The unique identifier for the email. |
| Links | dynamic | The links contained in the email. |
| LinksCount | int | The number of links in the email. |
| MessageId | string | The message identifier of the email. |
| OriginatingIP | string | The originating IP address of the email. |
| ReplyTo | string | The reply-to email address. |
| ReportedAt | datetime | The timestamp (UTC) when the email was reported. |
| ReportedRisk | int | The reported risk score for the email. |
| ReporterDomain | string | The domain of the reporter. |
| Risk | string | The risk level assigned to the email. |
| RiskSource | string | The source of the risk assessment. |
| SentAt | datetime | The timestamp (UTC) when the email was sent. |
| SizeBytes | int | The size of the email in bytes. |
| SpamScore | int | The spam score assigned to the email. |
| SPF | string | The SPF (Sender Policy Framework) result for the email. |
| Subject | string | The subject of the email. |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time in which the event was generated. |

## Solutions (1)

This table is used by the following solutions:

- [MailRisk](../solutions/mailrisk.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [MailRisk by Secure Practice](../connectors/securepracticemailriskconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

