# PowerAutomateActivity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PowerAutomateActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/powerautomateactivity) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/powerautomateactivity)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActorName | string | The UPN (User Principal Name) of the user who performed the action (specified in the Operation property) that resulted in the record being logged; for example, my_name@my_domain_name. Note that records for activity performed by system accounts (such as SHAREPOINT\system or NT AUTHORITY\SYSTEM) are also included. In SharePoint, another value display in the UserId property is app@sharepoint. This indicates that the "user" who performed the activity was an application that has the necessary permissions in SharePoint to perform organization-wide actions (such as search a SharePoint site or OneDrive account) on behalf of a user, admin, or service. For more information, see the app@sharepoint user in audit records. |
| ActorUserId | string | An alternative ID for the user identified in the UserId property. For example, this property is populated with the passport unique ID (PUID) for events performed by users in SharePoint, OneDrive for Business, and Exchange. This property may also specify the same value as the UserID property for events occurring in other services and events performed by system accounts. |
| ActorUserType | string | The type of user that performed the operation. Possible types are: Admin, System, Application, Service Principal and Other. |
| AdditionalInfo | dynamic | More information, for example, the environment name. |
| EventOriginalType | string | The name of the user or admin activity that performed the activity. For a description of the most common operations/activities, see "Search the audit log" in the Office 365 Protection Center. For Exchange admin activity, this property identifies the name of the cmdlet that was run. For Dlp events, this can be "DlpRuleMatch", "DlpRuleUndo" or "DlpInfo", which are described under "DLP schema" below. |
| EventOriginalUid | string | Unique identifier of an audit record. |
| EventResult | string | Indicates whether the action (specified in the Operation property) was successful or not. Possible values are Succeeded, PartiallySucceeded, or Failed. |
| FlowConnectorNames | string | Connector names listed in the flow. |
| FlowDetailsUrl | string | Link to the flow's details page. |
| LicenseDisplayName | string | Display name of the license. |
| ObjectId | string | The full path name of the file or folder accessed by the user. For Exchange admin audit logging, the name of the object that was modified by the cmdlet. |
| OrganizationId | string | The GUID for your organization's Office 365 tenant. This value will always be the same for your organization, regardless of the Office 365 service in which it occurs. |
| RecipientUpn | string | If permission was updated, shows the UPN of the permission recipient. |
| RecordType | string | The type of operation indicated by the record. See the AuditLogRecordType table for details on the types of audit log records. |
| SharingPermission | string | Type of permission shared with another user (3 = Owner/ReadWrite, 2 = Run-only user/Read). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIpAddr | string | The IP address of the device that was used when the activity was logged. The IP address is displayed in either an IPv4 or IPv6 address format. For some services, the value displayed in this property might be the IP address for a trusted application (for example, Office on the web apps) calling into the service on behalf of a user and not the IP address of the device used by person who performed the activity. Also, for Azure Active Directory-related events, the IP address isn't logged and the value for the ClientIP property is null. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time in (UTC) when the user performed the activity. |
| Type | string | The name of the table |
| UserUpn | string | Unique ID of the user. Always equivalent to UserKey. |
| Workload | string | The Office 365 service where the activity occurred. |

## Additional Information

📖 **Related Documentation:** [Power Automate activity logs](https://learn.microsoft.com/azure/sentinel/business-applications/deploy-power-platform-solution#verify-log-ingestion-to-microsoft-sentinel) - Verify Power Automate log ingestion to Microsoft Sentinel

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Business Applications](../solutions/microsoft-business-applications.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Power Automate](../connectors/microsoftpowerautomate.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Microsoft Business Applications](../solutions/microsoft-business-applications.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Power Automate - Departing employee flow activity](../content/microsoft-business-applications-power-automate-departing-employee-flow-activity-b1e11b8c-545a-4dea-a912-0008e160d183-ecbb18b0.md) |  |
| [Power Automate - Unusual bulk deletion of flow resources](../content/microsoft-business-applications-power-automate-unusual-bulk-deletion-of-flow-resources-56cb646e-56a0-4f0e-8866-9bc1dd15da78-eb6e5a2f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

