# UCDeviceAlert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UCDeviceAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucdevicealert) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucdevicealert)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AlertClassification | string | Whether this Alert is an Error, a Warning, or Informational. |
| AlertData | string | An optional string formatted as a json payload containing metadata for the alert. |
| AlertId | string | The unique identifier of this Alert. |
| AlertRank | int | Integer ranking of Alert for prioritization during troubleshooting. |
| AlertStatus | string | Whether this Alert is Active, Resolved, or Deleted. |
| AlertSubtype | string | The Subtype of Alert. |
| AlertType | string | The type of Alert this is, ClientUpdateAlert, ServiceUpdateAlert. Indicates which fields will be present. |
| AzureADDeviceId | string | A GUID corresponding to the AAD Tenant to which the device belongs. |
| AzureADTenantId | string | A GUID corresponding to this device's AAD Device ID. |
| Description | string | A localized string translated from a combination of other Alert fields + language preference that describes the issue in detail. |
| DeviceName | string | Device's given name. |
| ErrorCode | string | The Error Code, if any, that triggered this Alert. In the case of Client-based explicit alerts, error codes can have extended error codes, which are appended to the error code with a underscore separator. |
| ErrorSymName | string | The symbolic name that maps to the Error Code, if any. Otherwise empty. |
| GlobalDeviceId | string | Microsoft internal Global Device Identifier. |
| Recommendation | string | A localized string translated from RecommendedAction, Message, and other fields (depending on source of Alert) that provides a recommended action. |
| ResolvedTime | datetime | The time this alert was resolved, else empty. |
| SCCMClientId | string | A GUID corresponding to the SCCM Client ID on the device. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| StartTime | datetime | The time this alert was activated. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time at which this event is generated and logged. |
| Type | string | The name of the table |
| URL | string | An optional URL to get more in-depth information related to this alert. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [UCDeviceAlert Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ucdevicealert)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

