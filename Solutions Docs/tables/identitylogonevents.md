# IdentityLogonEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Authentication events on Active Directory and Microsoft online services

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitylogonevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table) |

## Solutions (2)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)
- [Standalone Content](../solutions/standalone-content.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (10)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential Kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-12134de5-361b-427c-a1a0-d43f40a593c4-880800c1.md) |

### Hunting Queries (6)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-35ca729c-04b4-4f6c-b383-caed1b85226e-9755135a.md) |

**Standalone Content:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Kerberos AS authentications](../content/standalone-content-kerberos-as-authentications-8abe561f-eecd-45cb-a0a3-152189d2c064-15a22f7a.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Detect potential kerberoast activities](../content/github-only-detect-potential-kerberoast-activities-ed25a5c7-2051-44f4-be22-b6cd2f0ad2d0-77205ebd.md) | `ActionType == "LogonSuccess"` |
| [Detect-Not-Active-AD-User-Accounts](../content/github-only-detect-not-active-ad-user-accounts-9131b716-334f-416e-a50f-809927d63b42-c58cf5c0.md) |  |
| [Device Logons from Unknown IPs](../content/github-only-device-logons-from-unknown-ips-a6d76204-efb2-4ccd-a068-d5a9e6876236-62ddb799.md) |  |
| [logon-attempts-after-malicious-email](../content/github-only-logon-attempts-after-malicious-email-44a5c680-d2ac-4bed-8210-c3aafea47308-4a967afa.md) |  |

### Workbooks (3)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftSentinelDeploymentandMigrationTracker](../content/github-only-microsoftsentineldeploymentandmigrationtracker-1aa72202.md) |  |
| [microsoftdefenderforidentity](../content/github-only-microsoftdefenderforidentity-215ba93a.md) |  |

## Selection Criteria Summary (1 criteria, 3 total references)

References by type: 0 connectors, 3 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "LogonSuccess"` | - | 3 | - | - | **3** |
| **Total** | **0** | **3** | **0** | **0** | **3** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LogonSuccess` | - | 3 | - | - | **3** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

