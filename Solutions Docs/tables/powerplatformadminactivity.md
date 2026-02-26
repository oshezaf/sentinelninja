# PowerPlatformAdminActivity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PowerPlatformAdminActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/powerplatformadminactivity) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/powerplatformadminactivity)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActorName | string | The UPN (User Principal Name) of the user who performed the action (specified in the Operation property) that resulted in the record being logged; for example, my_name@my_domain_name. Note that records for activity performed by system accounts (such as SHAREPOINT\system or NT AUTHORITY\SYSTEM) are also included. In SharePoint, another value display in the UserId property is app@sharepoint. This indicates that the "user" who performed the activity was an application that has the necessary permissions in SharePoint to perform organization-wide actions (such as search a SharePoint site or OneDrive account) on behalf of a user, admin, or service. For more information, see the app@sharepoint user in audit records. |
| ActorUserId | string | An alternative ID for the user identified in the UserId property. For example, this property is populated with the passport unique ID (PUID) for events performed by users in SharePoint, OneDrive for Business, and Exchange. This property may also specify the same value as the UserID property for events occurring in other services and events performed by system accounts. |
| ActorUserType | string | The type of user that performed the operation. For example: Admin, System, Application, Service Principal, Guest or Other. |
| EnvironmentId | string | The unique identifier of the environment. |
| EventOriginalType | string | The name of the user or admin activity that performed the activity. For a description of the most common operations/activities, see "Search the audit log" in the Office 365 Protection Center. For Exchange admin activity, this property identifies the name of the cmdlet that was run. For Dlp events, this can be "DlpRuleMatch", "DlpRuleUndo" or "DlpInfo", which are described under "DLP schema" below. |
| EventOriginalUid | string | Unique identifier of an audit record. |
| EventResult | string | Indicates whether the action (specified in the Operation property) was successful or not. Possible values are Succeeded, PartiallySucceeded, or Failed. |
| OrganizationId | string | The GUID for your organization's Office 365 tenant. This value will always be the same for your organization, regardless of the Office 365 service in which it occurs. |
| Properties | dynamic | Additional information properties with KQL friendly formatting. |
| PropertyCollection | dynamic | Additional information property bag for the event. |
| RecordType | string | The type of operation indicated by the record. See the AuditLogRecordType table for details on the types of audit log records. |
| RequiresCustomerKeyEncryption | bool | Status of the Customer Key Encryption requirement for the event. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time in (UTC) when the user performed the activity. |
| Type | string | The name of the table |
| Workload | string | The Office 365 service where the activity occurred. |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)

---

## Content Items Using This Table (8)

### Analytic Rules (7)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Dataverse - Guest user exfiltration following Power Platform defense impairment](../content/microsoft-business-applications-dataverse-guest-user-exfiltration-following-power-platform-defense-impai-39efbf4b-b347-4cc7-895e-99a868bf29ea-f29caf4d.md) |  |
| [Power Apps - App activity from unauthorized geo](../content/microsoft-business-applications-power-apps-app-activity-from-unauthorized-geo-7ec1e61d-f3b7-4f40-bb1a-357a63913c23-0cf6ffb9.md) |  |
| [Power Apps - Bulk sharing of Power Apps to newly created guest users](../content/microsoft-business-applications-power-apps-bulk-sharing-of-power-apps-to-newly-created-guest-users-943acfa0-9285-4eb0-a9c0-42e36177ef19-41b30b81.md) |  |
| [Power Apps - Multiple apps deleted](../content/microsoft-business-applications-power-apps-multiple-apps-deleted-ed88638d-8627-4c20-ba08-67c13807a9b1-10499cb8.md) |  |
| [Power Apps - Multiple users access a malicious link after launching new app](../content/microsoft-business-applications-power-apps-multiple-users-access-a-malicious-link-after-launching-new-ap-4bd7e93a-0646-4e02-8dcb-aa16d16618f4-45705870.md) |  |
| [Power Platform - Connector added to a sensitive environment](../content/microsoft-business-applications-power-platform-connector-added-to-a-sensitive-environment-886a5655-3d12-42f1-8927-4095789c575e-025af1bc.md) |  |
| [Power Platform - DLP policy updated or removed](../content/microsoft-business-applications-power-platform-dlp-policy-updated-or-removed-1b2e6172-85c5-417a-90c3-7cc80cb787f5-a317faa0.md) |  |

### Hunting Queries (1)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Power Apps - Anomalous bulk sharing of Power App to newly created guest users](../content/microsoft-business-applications-power-apps-anomalous-bulk-sharing-of-power-app-to-newly-created-guest-us-169428be-5ed0-4230-9103-c83df89c789a-0624080a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

