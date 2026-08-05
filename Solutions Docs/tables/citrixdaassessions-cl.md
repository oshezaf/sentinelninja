# CitrixDaaSSessions_CL

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

## Schema (14 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS%5CData%20Connectors%5CCitrixDaaS_CCF/CitrixDaaS_table_Sessions.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AppState | string | Application state |
| CitrixCustomerId | string | Citrix Cloud Customer ID of the connection that produced this record; enables multi-tenant differentiation. |
| ClientIpAddress | string | Client IP address |
| ClientName | string | Client device name |
| ConnectedViaIp | string | IP connected via |
| ConnectionProtocol | string | Connection protocol |
| IsAnonymousUser | bool | Whether user is anonymous |
| SessionId | string | Unique session identifier |
| SessionType | string | Type of session (Desktop, Application) |
| StartTime | datetime | Session start time |
| State | string | Session state (Active, Disconnected, etc.) |
| StateChangeTime | datetime | Last state change time |
| TimeGenerated | datetime |  |
| UserName | string | User name for the session |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Citrix DaaS](../solutions/citrix-daas.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Citrix DaaS Audit & Sessions (via Codeless Connector Framework)](../connectors/citrixdaasactionsconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

