# APIMDevPortalAuditDiagnosticLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for APIMDevPortalAuditDiagnosticLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimdevportalauditdiagnosticlog) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimdevportalauditdiagnosticlog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | An unique identifier represented as a GUID (Globally Unique Identifier). It serves as a globally distinctive label for tracking and correlating activities or events across systems and applications. |
| ApimClient | string | The field refers to the HTTP header X-Ms-Apim-Client sent by Developer Portal. |
| Category | string | Distinct group or type of record. |
| HashedUserId | string | The field represents a hashed or encrypted form of a user identifier. |
| OperationName | string | Field denotes the specific name or identifier of the operation being performed. |
| Region | string | The field indicates the geographical location or data center region within the Azure cloud infrastructure where a specific resource or service is deployed. |
| RequestMethod | string | The field indicates the type of HTTP method used in an incoming request. |
| RequestPath | string | The field contains the path or endpoint of an incoming request. |
| ResponseCode | int | The field indicates the HTTP status code associated with the server's response to a client's request. |
| ResultType | string | This field signifies the outcome or type of result associated with this operation. It has two values: Succeeded or Failed |
| ServiceName | string | API Management service name |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Represents the date and time when the associated event or record was generated. |
| Type | string | The name of the table |
| UserAgent | string | The field refers to the HTTP header that provides information about the user's browser or client application. |
| Version | string | API Management version |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [APIMDevPortalAuditDiagnosticLog Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimdevportalauditdiagnosticlog)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.apimanagement/service`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

