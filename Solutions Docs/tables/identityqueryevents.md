# IdentityQueryEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Queries for Active Directory objects, such as users, groups, devices, and domains

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/identityqueryevents) |
| **Defender XDR Docs** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-identityqueryevents-table) |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) |  |

---

## Content Items Using This Table (13)

### Hunting Queries (10)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DNSPattern [Nobelium]](../content/github-only-dnspattern-[nobelium]-6c87bdb8-a44e-452a-b782-542640d985e3-79e5127f.md) | `ActionType in "DNS query,DnsQueryResponse"` |
| [EncodedDomainURL [Nobelium]](../content/github-only-encodeddomainurl-[nobelium]-c561bf69-6a6c-4d0a-960a-b69e0e7c8f51-72f5ce64.md) | `ActionType in "DNS query,DnsQueryResponse"` |
| [MultipleLdaps](../content/github-only-multipleldaps-13476066-24d0-4b19-8fd5-28fe42ab35f6-3119160b.md) | `ActionType == "LDAP query"` |
| [MultipleSensitiveLdaps](../content/github-only-multiplesensitiveldaps-36582cd7-ddd2-43bc-be79-293a61c42cbe-4ebd792d.md) | `ActionType == "LDAP query"` |
| [PasswordSearch](../content/github-only-passwordsearch-ba3da496-7559-4288-834e-8de26a90eb6e-d2a90c36.md) | `ActionType == "LDAP query"` |
| [Roasting](../content/github-only-roasting-17a34f6c-b3ba-42a0-810a-1746281e672d-a36a08fa.md) | `ActionType == "LDAP query"` |
| [SensitiveLdaps](../content/github-only-sensitiveldaps-86d343dd-1b7c-496f-adba-be52469574d6-2e1f5877.md) | `ActionType == "LDAP query"` |
| [VulnComputers](../content/github-only-vulncomputers-ab8b5893-0c82-4a8c-ae19-43669b3d1eba-ede06b6b.md) | `ActionType == "LDAP query"` |
| [c2-lookup-from-nonbrowser[Nobelium] (1)](../content/github-only-c2-lookup-from-nonbrowser[nobelium]-1-58899f81-6ad4-4f42-9003-5e315c43585e-46ad1ee8.md) | `ActionType == "DNS query"` |
| [c2-lookup-response[Nobelium] (1)](../content/github-only-c2-lookup-response[nobelium]-1-10a55c6e-8cce-4c6a-891c-99ead1771446-c97085fc.md) | `ActionType == "DNS query"` |

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

## Selection Criteria Summary (3 criteria, 10 total references)

References by type: 0 connectors, 10 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ActionType == "LDAP query"` | - | 6 | - | - | **6** |
| `ActionType == "DNS query"` | - | 2 | - | - | **2** |
| `ActionType in "DNS query,DnsQueryResponse"` | - | 2 | - | - | **2** |
| **Total** | **0** | **10** | **0** | **0** | **10** |

### ActionType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LDAP query` | - | 6 | - | - | **6** |
| `DNS query` | - | 4 | - | - | **4** |
| `DnsQueryResponse` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

