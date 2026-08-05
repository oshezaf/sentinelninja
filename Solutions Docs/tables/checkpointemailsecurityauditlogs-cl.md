# CheckPointEmailSecurityAuditLogs_CL

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

## Schema (9 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security%5CData%20Connectors%5CCheckPointEmailSecurity_CCF/table_CheckPointEmailSecurityAuditLogs.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AuditId | string | Unique identifier for the audit log entry. |
| Category | string | Category of the audit event (e.g., Authentication, Configuration). |
| CreatedAt | datetime | Timestamp when the audit log was created. |
| CreatedBy | string | User email who performed the action. |
| Event | string | Event type (e.g., Login, Logout, ConfigChange). |
| EventData | string | Additional event data and details. |
| Module | string | Module or service that generated the log (e.g., CLOUDINFRA). |
| Severity | string | Severity level of the audit event (e.g., Notice, Warning). |
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

