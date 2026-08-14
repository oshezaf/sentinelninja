# Auth0Logs_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (23 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0%5CData%20Connectors%5CAuth0_CCP/table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ActorUserId | string | Identifier of the user involved in the event. |
| ActorUsername | string | Name of the user involved in the event. |
| Audience | string | API audience the event applies to. |
| Auth0Domain | string | Auth0 host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| ClientId | string | Identifier of the application (client) that triggered the event. |
| ClientName | string | Name of the application (client) that triggered the event. |
| Connection | string | Name of the connection the event relates to. |
| ConnectionId | string | Identifier of the connection the event relates to. |
| Description | string | Description of this event. |
| Details | dynamic | Additional useful details related to the event, in JSON format. |
| event_date | datetime | Date and time when the event occurred (event-occurrence time). |
| EventType | string | Type of event. |
| HttpUserAgent | string | User agent that triggered the event. |
| IsMobile | bool | Indicates whether the event originated from a mobile device. |
| LocationInfo | dynamic | Geographical location information of the event source. |
| LogId | string | Unique identifier of the log event. |
| Scope | string | Scopes the event applies to. |
| SrcHostname | string | Hostname the event applies to. |
| SrcIpAddr | string | IP address of the log event source. |
| Strategy | string | Name of the strategy involved in the event. |
| StrategyType | string | Type of strategy involved in the event. |
| TenantName | string | Name of the Auth0 tenant that produced the event. |
| TimeGenerated | datetime | The time when the log entry was generated. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Auth0](../solutions/auth0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Auth0 Logs (via Codeless Connector Framework)](../connectors/auth0connectorccpdefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Auth0Workbook](../content/github-only-auth0workbook-07316f43.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Auth0AM](../parsers/auth0am.md) | [Auth0](../solutions/auth0.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

