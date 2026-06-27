# GraphNotificationsActivityLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GraphNotificationsActivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Network, Security |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/graphnotificationsactivitylogs) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/graphnotificationsactivitylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AccountType | string | The account type |
| ApplicationId | string | The application id |
| ContextId | string | The identifier for the message. |
| CorrelationId | string | The identifier representing the request. |
| DurationMs | int | The duration of the request in milliseconds. |
| Location | string | The name of the region that served the request. |
| LoggingLevel | string | The logging level for the request. |
| Message | string | The details of the notification |
| PublicationIds | string | The publication ids of the messages |
| ResourceIdentity | string | The identifier for the message. |
| ResultDescription | string | The HTTP response for the event. |
| ResultStatusCode | int | The HTTP method of the event. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SubscriptionIdentity | string | The subscription id for which notification is delivered |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time the notification was published. |
| Type | string | The name of the table |
| WebHeaders | string | The webheaders for the request |
| WorkloadNamespace | string | The workload for which notification gets delivered |
| WorkloadResource | string | The details related to the resource |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [GraphNotificationsActivityLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/graphnotificationsactivitylogs)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

