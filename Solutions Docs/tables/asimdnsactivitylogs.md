# ASimDnsActivityLogs

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimDnsActivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Docs** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimdnsactivitylogs) |

## Additional Information

📖 **Related Documentation:** [ASIM normalized DNS schema](https://learn.microsoft.com/azure/sentinel/dns-ama-fields#asim-normalized-dns-schema) - describes the mapping of Windows DNS server fields into the normalized field names as they appear in the [DNS normalization schema](https://learn.microsoft.com/azure/sentinel/normalization-schema-dns#schema-details)

## Solutions (4)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)
- [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Windows Server DNS](../solutions/windows-server-dns.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) | `EventProduct == "DNS Server"`<br>`EventType == "Query"`<br>`EventVendor == "Microsoft"` |
| [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-defender-threat-feed-lumen-threat-feed-overview-139c887c.md) |  |

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimDnsNative](../asim/asimdnsnative.md) | Dns | Native |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrikeReplicatorV2](../parsers/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/dnsnormalized`

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 1 connectors, 0 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventProduct == "DNS Server"`<br>`EventType == "Query"`<br>`EventVendor == "Microsoft"` | 1 | - | - | - | **1** |
| **Total** | **1** | **0** | **0** | **0** | **1** |

### EventProduct / EventVendor

| EventProduct | EventVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `DNS Server` | `Microsoft` | 1 | - | - | - | **1** |

### EventType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Query` | 1 | - | - | - | **1** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

