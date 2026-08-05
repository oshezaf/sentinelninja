# CheckPointEmailSecurityEvents_CL

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

## Schema (17 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security%5CData%20Connectors%5CCheckPointEmailSecurity_CCF/table_CheckPointEmailSecurityEvents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Actions | dynamic | Actions taken on or available for the event. |
| AdditionalData | string | Additional parameters and links related to the event. |
| AvailableEventActions | dynamic | List of available actions that can be performed on the event. |
| ConfidenceIndicator | string | Confidence level of the threat detection (e.g., malicious, suspicious). |
| CustomerId | string | Customer identifier in the Check Point platform. |
| Data | string | Additional event data. |
| Description | string | Detailed description of the security event. |
| EntityId | string | Entity identifier associated with the event. |
| EntityLink | string | Deep link to the entity in the Check Point portal. |
| EventCreated | datetime | Timestamp when the event was created. |
| EventId | string | Unique identifier for the security event. |
| EventType | string | Type of security event (e.g., dlp, phishing, malware). |
| Saas | string | SaaS platform source (e.g., office365_emails, gmail). |
| SenderAddress | string | Email address of the sender associated with the event. |
| Severity | string | Severity level of the event (Low, Medium, High, Highest). |
| State | string | Current state of the event (e.g., dismissed, active). |
| TimeGenerated | datetime | The timestamp (in UTC) when the log entry was generated. |

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

