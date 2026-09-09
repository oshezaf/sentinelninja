# SalesforceMarketingCloudSecurityEvents_CL

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

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud%5CData%20Connectors%5CSalesforceMarketingCloudConnector_CCF/table_SalesforceMarketingCloudSecurityEvents.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| ConnectorName | string | Connector Friendly Name assigned during connector setup |
| CreatedDate | datetime | The date and time when the event was created |
| EmployeeName | string | The employee name |
| EnterpriseId | int | The enterprise ID |
| EventId | int | Unique identifier for the security event |
| EventSourceId | int | The event source ID |
| EventSourceName | string | The event source name (e.g., Fuel API, Web UI) |
| EventTypeId | int | The event type ID |
| EventTypeName | string | The event type name (e.g., Login Attempted) |
| IpAddress | string | The IP address from which the login was attempted |
| LoginStatusId | int | The login status ID |
| LoginStatusName | string | The login status name (e.g., Successful, Failed) |
| LogType | string | The log type selected during connector setup |
| MemberId | int | The member ID (MID) of the Marketing Cloud account |
| RestApiBaseUrl | string | The REST API base URL configured during connector setup |
| TimeGenerated | datetime |  |
| UserName | string | The user name |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Salesforce Marketing Cloud (via Codeless Connector Framework)](../connectors/salesforcemktcloudconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

