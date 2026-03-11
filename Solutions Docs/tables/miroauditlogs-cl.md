# MiroAuditLogs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (20 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Miro%5CData%20Connectors%5CMiroAuditLogs_CCF/MiroAuditLogs_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| category | string | Category of the audit event |
| context_ip | string | IP address from which the event originated |
| context_organization_id | string | Unique identifier of the organization |
| context_organization_name | string | Name of the organization |
| context_organization_type | string | Type of the organization |
| context_team_id | string | Unique identifier of the team context |
| context_team_name | string | Name of the team context |
| context_team_type | string | Type of the team |
| createdAt | datetime | Timestamp when the audit event was created |
| createdBy_email | string | Email address of the user who triggered the event |
| createdBy_id | string | Unique identifier of the user who triggered the event |
| createdBy_name | string | Name of the user who triggered the event |
| createdBy_type | string | Type of the actor (user, service account, etc.) |
| details | dynamic | Additional event details in JSON format |
| event | string | Name of the audit event |
| id | string | Unique identifier of the audit event |
| logType | string | Type of the log entry. Mapped from API's 'type' field to avoid reserved 'Type' column name. |
| object_id | string | Unique identifier of the object affected by the event |
| object_name | string | Name of the object affected by the event |
| TimeGenerated | datetime | The timestamp (UTC) reflecting the time when the event was ingested |

## Solutions (1)

This table is used by the following solutions:

- [Miro](../solutions/miro.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Miro Audit Logs (Enterprise Plan)](../connectors/miroauditlogsdataconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

