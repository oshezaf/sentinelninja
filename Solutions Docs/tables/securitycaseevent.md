# SecurityCaseEvent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SecurityCaseEvent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitycaseevent) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/securitycaseevent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| AadTenantId | string | Azure AD tenant GUID where the change occurred. |
| EntityCreatedTime | datetime | Original creation timestamp of the entity. |
| EntityId | string | Unique identifier of the changed entity. |
| EntityType | string | Type of entity changed: Case, CaseTask, Comment, Attachment, CaseRelation etc... |
| EventTime | datetime | Timestamp when the change was made in the source system. |
| IsDeleted | bool | Indicates if the entity was deleted. |
| ModifiedBy | string | User principal name (UPN) of the user who made the change. |
| NewValues | dynamic | New value(s) after the change. Null for Delete operations. Can be a simple value or JSON object. |
| OperationName | string | Type of operation: Create, Update, Delete, Link, or Unlink. |
| ParentEntityId | string | Parent entity ID. Null for Case entities, contains Case ID for child entities like CaseTask, Comment, Attachment, etc. |
| PreviousValues | dynamic | Previous value(s) before the change. Null for Create operations. Can be a simple value or JSON object. |
| PropertyNames | dynamic | Property name(s) that changed. |
| RecordId | string | Unique identifier for this audit record. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the record was ingested into Log Analytics. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

