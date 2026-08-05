# CheckPointEmailSecuritySpamExceptions_CL

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

## Schema (25 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security%5CData%20Connectors%5CCheckPointEmailSecurity_CCF/table_CheckPointEmailSecuritySpamExceptions.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActionNeeded | string | Action required for the exception. |
| AddedBy | string | User ID who added the exception. |
| AttachmentMd5 | string | MD5 hash of the attachment. |
| Comment | string | Comment associated with the exception. |
| EditedBy | string | User ID who last edited the exception. |
| EntityId | string | Unique identifier for the spam exception. |
| IgnoringSpfCheck | bool | Indicates if SPF check is ignored. |
| LinkDomainMatching | string | Link domain matching criteria. |
| LinkDomains | string | Domains contained in email links. |
| MatchOnlyFuture | string | Indicates if the exception applies only to future emails. |
| QuarantineAll | string | Indicates if all matching emails should be quarantined. |
| Recipient | string | Recipient email address. |
| RecipientMatching | string | Recipient matching criteria. |
| SenderClientIp | string | Client IP address of the sender. |
| SenderDomain | string | Domain of the sender. |
| SenderDomainMatching | string | Sender domain matching criteria. |
| SenderEmail | string | Email address of the sender. |
| SenderEmailMatching | string | Sender email matching criteria. |
| SenderIp | string | IP address of the sender. |
| SenderName | string | Name of the sender. |
| SenderNameMatching | string | Sender name matching criteria. |
| Subject | string | Email subject line. |
| SubjectMatching | string | Subject matching criteria (e.g., contains, equals). |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |
| UpdateTime | datetime | Timestamp when the exception was last updated. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Checkpoint Email Security](../solutions/checkpoint-email-security.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Check Point Email Security (via Codeless Connector Framework)](../connectors/checkpointemailsecconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

