# DatadogAuditLogs_CL

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

## Schema (27 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog%5CData%20Connectors%5CDatadogConnector/table_DatadogAuditLogs.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Action performed in the audit event |
| ActorType | string | Type of actor that performed the action |
| Attributes | dynamic | Full attributes object of the Datadog audit event |
| AuditDetails | dynamic | Detailed audit event payload |
| AuthenticationMethod | string | Authentication method used by the actor |
| ClientGeo | dynamic | Geolocation details associated with the client IP address |
| ClientIp | string | Client IP address associated with the audit event |
| EmittedSource | string | Datadog component that emitted the audit event |
| EventId | string | Unique identifier of the Datadog audit event |
| EventName | string | Name of the audited event |
| EventService | string | Datadog service that emitted the audit event |
| EventTimestamp | string | Timestamp reported by Datadog for the audit event |
| EventType | string | Resource type of the event (always 'audit') |
| HttpMethod | string | HTTP method associated with the audit event |
| HttpStatusCode | long | HTTP response status code |
| HttpUrlHost | string | Host of the requested URL |
| HttpUrlPath | string | Path of the requested URL |
| HttpUserAgent | string | User agent associated with the request |
| Message | string | Human-readable audit event message |
| OrganizationId | string | Datadog organization identifier |
| RoutePath | string | Datadog route associated with the request |
| Status | string | Status or severity of the audit event |
| Tags | dynamic | Tags associated with the audit event |
| TimeGenerated | datetime |  |
| UserEmail | string | Email address of the user that performed the action |
| UserId | string | Identifier of the user that performed the action |
| UserUuid | string | Datadog UUID of the user that performed the action |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Datadog](../solutions/datadog.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Datadog Logs (via Codeless Connector Framework)](../connectors/datadogconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

