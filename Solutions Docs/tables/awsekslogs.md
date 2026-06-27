# AWSEKSLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSEKSLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsekslogs) |

## Schema (18 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsekslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AuthDecision | string | The authorization decision made by the Kubernetes RBAC system (e.g., allow, forbid). |
| AwsAccountId | string | The AWS account ID where the EKS cluster is located. |
| ClusterName | string | The name of the EKS cluster that generated the audit event. |
| ObjectRef | string | Reference to the Kubernetes object that was accessed (namespace/resource/name). |
| RawEvent | dynamic | The complete raw EKS audit event data containing additional context and metadata. |
| Region | string | The AWS region where the EKS cluster is located. |
| ResponseCode | int | The HTTP response status code of the API request. |
| SourceIPs | dynamic | Array of source IP addresses from where the request originated. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| Stage | string | The stage of request processing when the audit event was generated (e.g., RequestReceived, ResponseComplete). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the EKS audit event was generated. |
| Type | string | The name of the table |
| User | string | The user or service account that performed the action. |
| UserAgent | string | The user agent string of the client that made the request. |
| Verb | string | The Kubernetes API verb (action) performed (e.g., get, create, update, delete). |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AWSEKSLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsekslogs)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

