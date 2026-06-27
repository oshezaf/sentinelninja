# Dynamics365Activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Dynamics365Activity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dynamics365activity) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dynamics365activity)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClientIP | string | The IP address of the device that was used when the activity was logged |
| CorrelationId | string | A unique value used to associate related rows |
| CrmOrganizationUniqueName | string | Unique name of the organization |
| EntityId | string | Unique identifier of the entity |
| EntityName | string | Name of the entity in the organization |
| Fields | dynamic | JSON of Key Value pair reflecting the values that were created or updated |
| InstanceUrl | string | URL to the instance |
| ItemType | string | The type of object that was accessed or modified. See the ItemType table for details on the types of objects |
| ItemUrl | string | URL to the record emitting the log |
| Message | string | Name of the message called in the Dynamics365 SDK |
| OfficeWorkload | string | The Office 365 service where the activity occurred |
| Operation | string | The name of the operation that the user is performing |
| OrganizationId | string | The GUID for your organization's Office 365 tenant. This value will always be the same for your organization |
| OriginalObjectId | string | The ObjectId for SharePoint and OneDrive about business activity |
| Query | string | The query filter parameters used while executing the FetchXML |
| QueryResults | dynamic | One or multiple unique records returned by the Retrieve and Retrieve Multiple SDK message call |
| RecordType | string | The type of operation indicated by the record. See the AuditLogRecordType table in Office 365 management activity api schema documentation for details on the types of audit log records |
| ResultStatus | string | Indicates whether the action (specified in the Operation property) was successful or not |
| ServiceName | string | Name of the Service generating the log |
| SourceRecordId | string | Unique identifier of an audit record |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SystemUserId | string | Unique identifier of the user GUID in the organization |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time in Coordinated Universal Time (UTC) when the user performed the activity |
| Type | string | The name of the table |
| UserAgent | string | The user agent |
| UserId | string | The UPN (User Principal Name) of the user who performed the action (specified in the Operation property) that resulted in the record being logged |
| UserKey | string | An alternative ID for the user identified in the UserId property |
| UserType | string | The type of user that performed the operation. See the UserType table in Office 365 management activity api schema documentation for details on the types of users |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Dynamics365Activity Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dynamics365activity)

## Solutions (5)

This table is used by the following solutions:

- [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md)
- [Dynamics 365](../solutions/dynamics-365.md)
- [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)
- [NISTSP80053](../solutions/nistsp80053.md)
- [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynamics 365](../connectors/dynamics365.md) |  |

---

## Content Items Using This Table (6)

### Workbooks (6)

**In solution [ContinuousDiagnostics&Mitigation](../solutions/continuousdiagnostics&mitigation.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ContinuousDiagnostics&Mitigation](../content/continuousdiagnostics&mitigation-continuousdiagnostics&mitigation-d91b4b8c.md) |  |

**In solution [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MaturityModelForEventLogManagement_M2131](../content/maturitymodelforeventlogmanagementm2131-maturitymodelforeventlogmanagement-m2131-12ca6fed.md) |  |

**In solution [NISTSP80053](../solutions/nistsp80053.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NISTSP80053](../content/nistsp80053-nistsp80053-1f654213.md) |  |

**In solution [ZeroTrust(TIC3.0)](../solutions/zerotrust-tic3.0.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ZeroTrustTIC3](../content/zerotrust-tic3.0-zerotrusttic3-75b06a8b.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

