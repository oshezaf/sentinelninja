# IdentityLogonEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Authentication events on Active Directory and Microsoft online services

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identitylogonevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identitylogonevents-table) |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential Kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-12134de5-361b-427c-a1a0-d43f40a593c4-880800c1.md) |

### Hunting Queries (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):** `ActionType == "LogonSuccess"`

| Content Item |
|:-------------|
| [Detect Potential kerberoast Activities](../content/microsoft-defender-xdr-detect-potential-kerberoast-activities-35ca729c-04b4-4f6c-b383-caed1b85226e-9755135a.md) |

### Workbooks (1)

**In solution [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftDefenderForIdentity](../content/microsoft-defender-xdr-microsoftdefenderforidentity-19dcc30d.md) |  |

## Selection Criteria Summary (1 criteria, 2 total references)

References by type: 0 connectors, 2 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "LogonSuccess"` | - | 2 | - | - | **2** |
| **Total** | **0** | **2** | **0** | **0** | **2** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LogonSuccess` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

