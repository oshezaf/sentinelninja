# VeeamSessionsV2_CL

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

## Schema (22 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam%5CData%20Connectors%5CVeeam_CCF/table_VeeamSessionsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| CreationTime | datetime | Timestamp when session was created |
| EndTime | datetime | Timestamp when session completed |
| Id | string | Unique session identifier |
| IsCanceled | bool | Whether session was canceled |
| JobId | string | Associated job identifier |
| Message | string | Session result message |
| Name | string | Display name of the session |
| ParentSessionId | string | Parent session identifier if applicable |
| PlatformId | string | Platform identifier associated with the session |
| PlatformName | string | Platform name associated with the session |
| ProgressPercent | int | Session completion percentage |
| ResourceReference | string | Reference to associated resource |
| Result | string | Session result status |
| ResultIsCanceled | bool | Whether session was canceled |
| ResultMessage | string | Session result message |
| ResultStatus | string | Session result status |
| SessionType | string | Type of Veeam session operation |
| State | string | Current state of the session |
| TimeGenerated | datetime |  |
| Usn | long | Update sequence number |
| VbrHostName | string | Veeam Backup & Replication server hostname |
| VeeamResourceId | string | Veeam resource identifier |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Veeam](../solutions/veeam.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Veeam Data Connector (via Codeless Connector Framework)](../connectors/veeamconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

