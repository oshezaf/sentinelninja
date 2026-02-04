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

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType in "LogonFailed,LogonSuccess"`

| Content Item |
|:-------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |

**In solution [SOX IT Compliance](../solutions/sox-it-compliance.md):** `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"`

| Content Item |
|:-------------|
| [SOXITCompliance](../content/sox-it-compliance-soxitcompliance-6426e0a3.md) |

## Selection Criteria Summary (3 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "SAM Account Name changed"` | - | 1 | - | - | **1** |
| `ActionType in "LogonFailed,LogonSuccess"` | - | 1 | - | - | **1** |
| `ActionType in "DirectoryRoleMembershipChanged,GroupMembershipChanged,PrivilegeEscalation,SensitiveAccountChanged,UserAccountControlChanged"` | - | 1 | - | - | **1** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `SAM Account Name changed` | - | 1 | - | - | **1** |
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

