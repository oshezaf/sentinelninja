# IdentityAccountInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Account information from various sources, including Microsoft Entra ID. This table also includes information and link to the identity that owns the account.

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityaccountinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityaccountinfo-table) |

## Schema (51 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityaccountinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountId | string | Internal identifier for the account. |
| AccountStatus | string | The status of the account. |
| AccountUpn | string | User principal name (UPN) of the account. |
| AdditionalFields | dynamic | Additional information about the entity or event. |
| Address | string | Address of the account user. |
| AssignedRoles | dynamic | Role identifiers assigned to the account. |
| AuthenticationMethod | string | Authentication method used to allow the account user to sign in. |
| AuthenticationSourceAcccountId | string | Identifier of the federating account, if authentication method is Federated. |
| City | string | City where the account user is located. |
| Country | string | Country or region where the account user is located. |
| CreatedDateTime | datetime | Date and time when the user account was created. |
| CriticalityLevel | int | The criticality score of the account. |
| DefenderRiskLevel | int | The risk level of the account as calculated by Microsoft Defender. |
| DefenderRiskUpdateTime | datetime | Date and time Microsoft Defender last updated the risk level of the account. |
| DeletedDateTime | datetime | Date and time when the user account was deleted. |
| Department | string | Name of the department that the account user belongs to. |
| DisplayName | string | Name of the account user displayed in the address book. |
| EligibleRoles | dynamic | Identifiers for roles the account is eligible to use. |
| EmailAddress | string | SMTP address of the account. |
| EmployeeId | string | Employee identifier assigned to the user by the organization. |
| EnrolledMfas | dynamic | Configured multifactor authentication methods and status. |
| GivenName | string | Given name or first name of the account user. |
| GroupMembership | dynamic | Group identifiers assigned to the account. |
| IdentityId | string | Identifier for the identity that the account is linked to. |
| IdentityLinkBy | string | The entity that linked the account to the identity. |
| IdentityLinkReason | string | Reason for linking the account and identity. |
| IdentityLinkTime | datetime | Date and time the account was linked to the identity. |
| IdentityLinkType | string | Type of linkage between the account and identity. |
| IdentityType | string | Type of identity - possible values: User, ServiceAccount |
| IsPrimary | bool | Indicates if this account is considered as primary account for the linked identity. |
| JobTitle | string | Job title of the account user. |
| LastPasswordChangeTime | datetime | Date and time the account password was last changed. |
| Manager | string | The listed manager of the account user. |
| Phone | string | The listed phone number of the account user. |
| ReportId | string | Unique identifier for the event. |
| Sid | string | Security identifier (SID) of the account. |
| SourceProvider | string | Source application or service of the account. |
| SourceProviderAccountId | string | Identifier for the account in the source provider. |
| SourceProviderInstanceDisplayName | string | Display name of the source application or service of the account. |
| SourceProviderInstanceId | string | Identifier of the source application or service of the account. |
| SourceProviderRiskLevel | dynamic | Risk level of the account as it appears in the source provider. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Surname | string | Surname, family name, or last name of the account user. |
| Tags | dynamic | Tags assigned to the account by Defender for Identity. |
| TenantId | string | The Log Analytics workspace ID |
| TenantMembershipType | string | User type. |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Timestamp | datetime | Date and time that the line was written to the database. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

