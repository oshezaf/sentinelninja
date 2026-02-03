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
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitydirectoryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitydirectoryevents-table) |

## Solutions (3)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [SOX IT Compliance](../solutions/sox-it-compliance.md)
- [Standalone Content](../solutions/standalone-content.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (13)

### Hunting Queries (7)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "SAM Account Name changed"`

| Content Item |
|:-------------|
| [SAM Name Change CVE-2021-42278](../content/microsoft-defender-xdr-sam-name-change-cve-2021-42278-1299962c-804e-459a-8d3d-41d68bc45ba2-fdacc34d.md) |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Active Directory Account lockout and unlocks](../content/standalone-content-active-directory-account-lockout-and-unlocks-9f384f37-ff17-446d-b49a-40c6fb98b1ba-0da18d82.md) | `ActionType == "Account Unlock changed"` |
| [Find_deleted_accounts_and_by_whom](../content/standalone-content-find-deleted-accounts-and-by-whom-e5b0ee9b-7fa4-4641-8363-bd2d72f1bf5b-af461c5b.md) | `ActionType == "Account deleted"` |
| [MDI_Group_Memebership_Changes](../content/standalone-content-mdi-group-memebership-changes-b66fb322-247a-4472-a231-2533b34ed059-9c3957c4.md) | `ActionType == "Group Membership changed"` |
| [MDI_Objects_Moving_OUs](../content/standalone-content-mdi-objects-moving-ous-4a6fc14d-5f8e-49fe-8623-c20dd0d826a8-d5857b66.md) | `ActionType == "Account Path changed"` |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Active Directory Sensitive Group Modifications](../content/github-only-active-directory-sensitive-group-modifications-20774145-ef68-42ab-9f3f-19fecbcdbac9-aff95e29.md) | `ActionType == "Group Membership changed"` |
| [SAM-Name-Changes-CVE-2021-42278](../content/github-only-sam-name-changes-cve-2021-42278-89ce68d5-dd48-4f3f-b102-336fc4ebdda9-e19aa6ce.md) | `ActionType == "SAM Account Name changed"` |

### Workbooks (6)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "LogonFailed,LogonSuccess"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"`

| Content Item |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DoDZeroTrustWorkbook](../content/github-only-dodzerotrustworkbook-844294c8.md) |  |
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [ZeroTrustStrategyWorkbook](../content/github-only-zerotruststrategyworkbook-cd80dc2b.md) |  |
| [microsoftdefenderforidentity](../content/github-only-microsoftdefenderforidentity-215ba93a.md) | `ActionType in "LogonFailed,LogonSuccess"` |

## Selection Criteria Summary (7 criteria, 9 total references)

References by type: 0 connectors, 9 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "SAM Account Name changed"` | - | 2 | - | - | **2** |
| `ActionType == "Group Membership changed"` | - | 2 | - | - | **2** |
| `ActionType == "Account deleted"` | - | 1 | - | - | **1** |
| `ActionType == "Account Path changed"` | - | 1 | - | - | **1** |
| `ActionType == "Account Unlock changed"` | - | 1 | - | - | **1** |
| `ActionType in "LogonFailed,LogonSuccess"` | - | 1 | - | - | **1** |
| `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"` | - | 1 | - | - | **1** |
| **Total** | **0** | **9** | **0** | **0** | **9** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SAM Account Name changed` | - | 2 | - | - | **2** |
| `Group Membership changed` | - | 2 | - | - | **2** |
| `Account deleted` | - | 1 | - | - | **1** |
| `Account Path changed` | - | 1 | - | - | **1** |
| `Account Unlock changed` | - | 1 | - | - | **1** |
| `LogonFailed` | - | 1 | - | - | **1** |
| `LogonSuccess` | - | 1 | - | - | **1** |
| `DirectoryRoleMembershipChanged` | - | 1 | - | - | **1** |
| `GroupMembershipChanged` | - | 1 | - | - | **1** |
| `PrivilegeEscalation` | - | 1 | - | - | **1** |
| `SensitiveAccountChanged` | - | 1 | - | - | **1** |
| `UserAccountControlChanged` | - | 1 | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

