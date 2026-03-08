# UserAccessAnalytics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for UserAccessAnalytics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/useraccessanalytics) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/useraccessanalytics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AADTenantId | string | Unique identifier of the Azure Tenant |
| AccessEndReason | string | Reason why the source entity's access to the target entity was revoked |
| AccessEndTime | datetime | Timestamp when the source entity's access to the target entity was revoked |
| AccessId | string | Unique identifier for the access between source and target entity |
| AccessLevel | string | The level of access that the source entity has to the target entity |
| AccessStartTime | datetime | Timestamp when the source entity was provided access to the target entity |
| AccessType | string | The type of access that the source entity has to the target entity |
| SourceEntityId | string | Unique identifier of entity which has access to the target entity |
| SourceEntityName | string | Display name of entity which has access to the target entity |
| SourceEntityType | string | Type of entity which has access to the target entity |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetEntityId | string | Unique identifier of the entity which the source entity can access |
| TargetEntityName | string | Display name of the entity which the source entity can access |
| TargetEntityType | string | Type of the entity which the source entity can access |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the access analytics is calculated |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

