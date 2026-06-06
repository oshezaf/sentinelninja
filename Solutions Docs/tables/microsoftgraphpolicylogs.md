# MicrosoftGraphPolicyLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MicrosoftGraphPolicyLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftgraphpolicylogs) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftgraphpolicylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AadTenantId | string | The Microsoft Entra tenant ID of the organization owning the resource. |
| ApiVersion | string | The Microsoft Graph API version used for the request: v1.0 or beta. |
| AppId | string | The application (client) ID of the Microsoft Entra app registration making the request. |
| ApplicablePoliciesCount | int | Number of policy assignments that were applicable to this specific request. Compare with PolicyDetailsCount (total matching assignments) to understand policy coverage. |
| AuditPoliciesCount | int | Number of applicable policy assignments that triggered an audit effect. |
| ClientRequestId | string | The optional client-provided correlation ID from the client-request-id header. |
| DenyPoliciesCount | int | Number of applicable policy assignments that triggered a deny effect. |
| ErrorPoliciesCount | int | Number of policy assignments that encountered an error during evaluation, applicability check, or policy loading. |
| Location | string | The Azure data center region that served the request (e.g., westus2, eastus2, northeurope). |
| OperationId | string | Correlation ID for the parent operation. For non-batch requests, equals RequestId. For $batch children, all share the parent request ID. Aligns with ActivityEvent OperationId. |
| PolicyDecision | string | High-level outcome of policy evaluation: deny (blocked), audit (non-compliant but allowed - what-if/dry-run), or compliant (no violations or no applicable policies). |
| PolicyDetails | dynamic | Full array of individual policy evaluation results, sorted by effect priority (deny first, then audit, then compliant). Each entry includes assignmentUniqueName, assignedPolicyDisplayName, appliedPolicyEffects, evaluationError, policyVersion, isCompliant, and isApplicable. May be truncated if the serialized array exceeds 16 KB. |
| PolicyDetailsCount | int | Total number of policy assignments evaluated. This reflects the original count before any truncation of PolicyDetails. |
| RequestId | string | Unique identifier for this request. For $batch child requests, each child gets a unique ID. Aligns with ActivityEvent RequestId. |
| RequestMethod | string | The HTTP method of the request: GET, POST, PATCH, or DELETE. |
| RequestUri | string | The full Microsoft Graph request URI including path and query parameters. |
| ServicePrincipalId | string | The object ID of the service principal for app-only calls. Empty for delegated calls. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetResourceId | string | The identifier of the target resource extracted from the request URI key segment. A single value for primary keys (e.g., a GUID), or comma-separated key=value pairs for alternate or compound keys. |
| TargetResourceName | string | Resource type short name for CRUD (e.g., user, application); bound action as bindingType/action (e.g., application/addKey). Presence of '/' distinguishes actions from resources. |
| TenantId | string | The Log Analytics workspace ID |
| TenantRegionScope | string | The region scope of the tenant (e.g., NA, EU, AS, AF, OC). |
| TimeGenerated | datetime | The date and time (UTC) when the policy evaluation occurred. |
| TotalPolicyEvaluationDurationMs | real | Total time in milliseconds spent evaluating all applicable policies for this request, including applicability checks and effect evaluations. |
| Type | string | The name of the table |
| UserId | string | The object ID of the user for delegated (user + app) calls. Empty for app-only calls. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

