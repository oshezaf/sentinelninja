# TransmitSecurityActivity_V2_CL

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

## Schema (21 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity%5CData%20Connectors%5CTransmitSecurityActivity_CCF/TransmitSecurityActivity_Table.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Activity | string | Activity name |
| ActorId | string | Actor identifier (e.g. admin user for admin activities) |
| ActorType | string | Actor type |
| AdditionalParams | dynamic | Additional parameters as free-form JSON |
| AppId | string | Application identifier |
| ClientId | string | Client identifier |
| CorrelationId | string | Correlation identifier for tracking related events |
| DeviceId | string | Device identifier |
| FlowId | string | Flow identifier |
| InvocationId | string | Unique invocation identifier |
| Ip | string | IP address from which the event originated |
| OriginalActorId | string | Hashed actor ID before enrichment |
| OriginalAppId | string | Hashed app ID before enrichment |
| OriginalUserId | string | Hashed user ID before enrichment |
| SourceTenantId | string | Tenant identifier |
| TargetResourceId | string | Target resource identifier |
| TargetResourceType | string | Target resource type |
| TimeGenerated | datetime | The time when the log entry was generated |
| Timestamp | datetime | When the event occurred |
| UserAgent | string | User agent string from the client |
| UserId | string | User identifier |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [TransmitSecurity](../solutions/transmitsecurity.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Transmit Security Data Connector (via Codeless Connector Framework)](../connectors/transmitsecurityconnectordefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

