# IdentityAccountInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Account information from various sources, including Microsoft Entra ID. This table also includes information and link to the identity that owns the account.

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityaccountinfo-table) |

## Schema (46 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityaccountinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccountId | string | Internal identifier for the account |
| AccountStatus | string | The status of the account; possible values: Disabled, Enabled, Deleted |
| AccountUpn | string | User principal name (UPN) of the account |
| AdditionalFields | dynamic | Additional information about the entity or event |
| Address | string | Address of the account user |
| AssignedRoles | dynamic | Role identifiers assigned to the account |
| AuthenticationMethod | string | Authentication method used to allow the account user to sign into the account; possible values: Credentials, Federated, Hybrid |
| AuthenticationSourceAcccountId | string | The identifier of the federating account, if the authentication method is Federated |
| City | string | City where the account user is located |
| Country | string | Country/Region where the account user is located |
| CreatedDateTime | datetime | Date and time when the user account was created |
| CriticalityLevel | int | The criticality score of the account |
| DefenderRiskLevel | int | The risk level of the account as calculated by Microsoft Defender |
| DefenderRiskUpdateTime | datetime | Date and time Microsoft Defender last updated the risk level of the account |
| DeletedDateTime | datetime | Date and time when the user account was deleted |
| Department | string | Name of the department that the account user belongs to |
| DisplayName | string | Name of the account user displayed in the address book. Typically a combination of a given or first name, a middle initial, and a last name or surname. |
| EligibleRoles | dynamic | Identifiers for roles the account are eligible to use (for example, Microsoft Entra Privileged Identity Management roles) |
| EmailAddress | string | SMTP address of the account |
| EmployeeId | string | Employee identifier assigned to the user by the organization |
| EnrolledMfas | dynamic | Types of multifactor authentication methods configured for the account user and their status |
| GivenName | string | Given name or first name of the account user |
| GroupMembership | dynamic | Group identifiers assigned to the account |
| IdentityId | string | Identifier for the identity that the account is linked to |
| IdentityLinkBy | string | The entity that linked the account to the identity. If the linkage type is based on strong identifiers, the value will be System |
| IdentityLinkReason | string | Reason for linking the account and identity. If the linkage type is manual, the value will be the justification comment added by the user. |
| IdentityLinkTime | datetime | Date and time the account was linked to the identity |
| IdentityLinkType | string | Type of linkage between the account and identity; possible values: Manual, Strong identifiers |
| IsPrimary | bool | Indicates if this account is considered as primary account for the linked identity |
| JobTitle | string | Job title of the account user |
| LastPasswordChangeTime | datetime | Date and time the account password was last changed |
| Manager | string | The listed manager of the account user |
| Phone | string | The listed phone number of the account user |
| ReportId | string | Unique identifier for the event |
| Sid | string | Security identifier (SID) of the account |
| SourceProvderRiskLevel | dynamic | Risk level of the account as it appears in the source provider; possible values: Low, Medium, High |
| SourceProvider | string | Source application or service of the account (for example, Microsoft Entra ID) |
| SourceProviderAccountId | string | Identifier for the account in the source provider (for example, object ID for a Microsoft Entra ID account) |
| SourceProviderInstanceDisplayName | string | The display name of the source application or service of the account |
| SourceProviderInstanceId | string | The identifier of the source application or service of the account. For example, in Microsoft Entra ID, this is the organization Globally Unique Identifier (GUID). |
| Surname | string | Surname, family name, or last name of the account user |
| Tags | dynamic | Tags assigned to the account by Defender for Identity |
| TenantId | string | Universally unique identifier (UUID) for the tenant |
| TenantMembershipType | string | User type; possible values: Guest, Member |
| Timestamp | datetime | The date and time that the line was written to the database.This is used when there are multiple lines for each identity, such as when a change is detected, or if 24 hours have passed since the last database line was added. |
| Type | string | Type of identity; possible values: User, ServiceAccount |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

