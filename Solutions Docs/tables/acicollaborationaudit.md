# ACICollaborationAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACICollaborationAudit table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acicollaborationaudit) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acicollaborationaudit)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CorrelationId | string | The ID for correlated pipeline run events. Can be used to identify audits that belong to the same pipeline run. |
| EntitlementResult | string | The result of the entitlement evaluation. Options are: Granted = access granted; Denied = access was not granted; Revoked = accessed was revoked because the pipeline could not be fully approved; Actualized = the resource was accessed by the pipeline run. |
| EntitlementSummary | string | Textual summary of the granted access. |
| GrantCorrelationId | string | The ID for the grant events. Can be used to correlate between different results of the same grant. |
| GrantSource | string | The azure resource ID of the resource the grant is based on. |
| GrantSourceType | string | The type of the the resource the grant is based on. |
| GrantType | string | The method used to grant access to the resource (Owned, Reference, Entitlement). |
| Location | string | The Location (Region) the resource was accessed in. |
| OperationName | string | The operation associated with audit record. |
| ParticipantName | string | The participant friendly name as used in the contract negotiation. |
| ParticipantTenantId | string | The participant tenant id. Enable query by the granted tenant invariant id. Example of retrieving this is for contoso:https://login.microsoftonline.com/contoso.com/.well-known/openid-configuration |
| ReferencedResourceId | string | The storage resource that the accessed CI resource points to, if applicable |
| ReferencedResourceType | string | The storage resource type that the accessed CI resource points to, if applicable. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetResourceId | string | The azure resource ID of the accessed resource. |
| TargetResourceType | string | The resource type of the accessed resource. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the audit was generated. |
| Type | string | The name of the table |
| UserName | string | Name of the user that initiated the pipeline. Available only if the audit relate to owned resource |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.datacollaboration/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

