# SailPointIDN_EventsV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | SailPoint *(basis: projected)* |
| **Source Product** | IdentityNow |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (40 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow%5CData%20Connectors%5CSearchEvent_CCF/table_SailPointIDN_EventsV2.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Action | string | Action performed during the event (e.g., USER_STEP_UP_AUTH). |
| ActorName | string | Name of the actor that triggered the event. |
| AttributesAggregationId | string | Aggregation job ID. |
| AttributesCapability | string | Capability associated with the event. |
| AttributesDirectoryRolesDeltaTokenAfter | string | Directory roles delta token after aggregation. |
| AttributesDirectoryRolesDeltaTokenBefore | string | Directory roles delta token before aggregation. |
| AttributesDuration | string | Duration of the aggregation process. |
| AttributesGroupsDeltaTokenAfter | string | Groups delta token after aggregation. |
| AttributesGroupsDeltaTokenBefore | string | Groups delta token before aggregation. |
| AttributesHostName | string | Host name associated with the event. |
| AttributesIdentitiesProcessed | string | Number of identities processed during aggregation. |
| AttributesIdentitiesSelected | string | Number of identities selected during aggregation. |
| AttributesIdentitiesTotal | string | Total number of identities in the aggregation. |
| AttributesOperation | string | Operation type within the event attributes (e.g., for aggregation events). |
| AttributesProcessId | string | Process ID of the aggregation job. |
| AttributesScope | string | Scope of the event action. |
| AttributesSourceId | string | Source ID associated with the event. |
| AttributesSourceName | string | Source name associated with the event. |
| AttributesUserDeltaTokenAfter | string | User delta token after aggregation. |
| AttributesUserDeltaTokenBefore | string | User delta token before aggregation. |
| AttributesUserId | string | User ID associated with the event. |
| Created | datetime | UTC timestamp when the event was created in SailPoint. |
| Details | dynamic | Additional contextual details about the event. |
| DocType | string | SailPoint internal Elasticsearch document type (value is always 'event'). Renamed from 'SailPointDocType'; maps from API field '_type'. |
| EventType | string | High-level event type category (e.g., USER_MANAGEMENT, AUTH). Maps from API field 'type'; renamed to avoid conflict with the Azure Monitor reserved 'Type' system column. |
| Id | string | Unique identifier for the audit event. |
| Index | string | SailPoint internal Elasticsearch index identifier. Renamed from 'SailPointIndex'; maps from API field '_index'. |
| Name | string | Human-readable name of the event type. |
| Objects | dynamic | Related object names or identifiers involved in the event. |
| Operation | string | Operation performed during the event. |
| Org | string | SailPoint tenant/org identifier. |
| Pod | string | SailPoint infrastructure pod where the event originated. |
| SourceSystem | string | Hard-coded source system identifier for backwards compatibility with the Azure Function connector (SailPointIDN_Events_CL). Value is always 'RestAPI'. |
| Stack | string | Stack or service layer where the event originated. |
| Status | string | Outcome status of the event (e.g., PASSED, FAILED). |
| Synced | datetime | UTC timestamp when the event was synced to the platform. |
| TargetName | string | Name of the target object affected by the event. |
| TechnicalName | string | Technical name identifying the specific event subtype (e.g., USER_AUTHENTICATION_STEP_UP_SETUP_PASSED). |
| TimeGenerated | datetime |  |
| TrackingNumber | string | Tracking number for access request-related events. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SailPointIdentityNow](../solutions/sailpointidentitynow.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SailPoint IdentityNow (via Codeless Connector Framework)](../connectors/sailpointidentitynowconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

