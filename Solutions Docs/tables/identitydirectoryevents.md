# IdentityDirectoryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Events involving an on-premises domain controller running Active Directory (AD). This table covers a range of identity-related events and system events on the domain controller.

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitydirectoryevents) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitydirectoryevents-table) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitydirectoryevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountDisplayName | string | Name of the account user displayed in the address book |
| AccountDomain | string | Domain of the account |
| AccountName | string | User name of the account |
| AccountObjectId | string | Unique identifier for the account in Azure AD |
| AccountSid | string | Security Identifier (SID) of the account |
| AccountUpn | string | User principal name (UPN) of the account |
| ActionType | string | Type of activity that triggered the event |
| AdditionalFields | dynamic | Additional information about the entity or event |
| Application | string | Application that performed the recorded action |
| DestinationDeviceName | string | Name of the device running the server application that processed the recorded action |
| DestinationIPAddress | string | IP address of the device running the server application that processed the recorded action |
| DestinationPort | string | Destination port of related network communications |
| DeviceName | string | Fully qualified domain name (FQDN) of the device |
| IPAddress | string | IP address assigned to the endpoint and used during related network communications |
| ISP | string | Internet service provider (ISP) associated with the endpoint IP address |
| Location | string | City, country, or other geographic location associated with the event |
| Port | string | TCP port used during communication |
| Protocol | string | Protocol used during the communication |
| ReportId | string | Unique identifier for the event |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetAccountDisplayName | string | Display name of the account that the recorded action was applied to |
| TargetAccountUpn | string | User principal name (UPN) of the account that the recorded action was applied to |
| TargetDeviceName | string | Fully qualified domain name (FQDN) of the device that the recorded action was applied to |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time (UTC) when the record was generated |
| Type | string | The name of the table |

## Solutions (2)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (3)

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "SAM Account Name changed"`

| Content Item |
|:-------------|
| [SAM Name Change CVE-2021-42278](../content/microsoft-defender-xdr-sam-name-change-cve-2021-42278-1299962c-804e-459a-8d3d-41d68bc45ba2-fdacc34d.md) |

### Workbooks (2)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |  |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"`

| Content Item |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

## Selection Criteria Summary (2 criteria, 2 total references)

References by type: 0 connectors, 2 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "SAM Account Name changed"` | - | 1 | - | - | **1** |
| `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"` | - | 1 | - | - | **1** |
| **Total** | **0** | **2** | **0** | **0** | **2** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SAM Account Name changed` | - | 1 | - | - | **1** |
| `DirectoryRoleMembershipChanged` | - | 1 | - | - | **1** |
| `GroupMembershipChanged` | - | 1 | - | - | **1** |
| `PrivilegeEscalation` | - | 1 | - | - | **1** |
| `SensitiveAccountChanged` | - | 1 | - | - | **1** |
| `UserAccountControlChanged` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

