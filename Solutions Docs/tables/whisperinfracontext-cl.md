# WhisperInfraContext_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (17 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WhisperInfraContext_CL.json)

| Column Name | Type |
|:------------|:-----|
| asnNames | string |
| asns | string |
| bgpStatus | string |
| cities | string |
| cohostedCount | int |
| countries | string |
| dnssecAlgorithm | string |
| domainAge | int |
| indicator | string |
| indicatorType | string |
| ipAddresses | string |
| nameservers | string |
| prefixes | string |
| registrant | string |
| registrar | string |
| spfIncludes | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Whisper](../solutions/whisper.md)

---

## Content Items Using This Table (11)

### Analytic Rules (3)

**In solution [Whisper](../solutions/whisper.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Whisper Security - Co-Hosted Malware Cluster Detection](../content/whisper-whisper-security-co-hosted-malware-cluster-detection-374a77f4-23ed-55dc-8441-8e47a1e079e9-565d2e78.md) |  |
| [Whisper Security - Newly Registered Domain on Threat ASN](../content/whisper-whisper-security-newly-registered-domain-on-threat-asn-4f80ee8e-901f-538a-8603-cc4b49e80164-36554bf5.md) |  |
| [Whisper Security - SPF Record Unauthorized Include Detection](../content/whisper-whisper-security-spf-record-unauthorized-include-detection-9c275139-b554-58f1-b390-8520b10e54ad-e940ac27.md) |  |

### Hunting Queries (5)

**In solution [Whisper](../solutions/whisper.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Whisper - Attack Surface Discovery](../content/whisper-whisper-attack-surface-discovery-507b09cf-ef98-56d5-9d56-b23ae8e1df94-315ec386.md) |  |
| [Whisper - Domain to ASN Migration](../content/whisper-whisper-domain-to-asn-migration-ab71059a-8f31-52a9-8f78-82bc80b857cf-fd3f2cf2.md) |  |
| [Whisper - Infrastructure Pivot Analysis](../content/whisper-whisper-infrastructure-pivot-analysis-4eabcdaa-bbe2-54d8-b930-c8d7b31a015c-00431a1d.md) |  |
| [Whisper - Newly Registered Domain Hunt](../content/whisper-whisper-newly-registered-domain-hunt-0a95fa2e-e531-592d-b967-2f3ba669ce49-d647f3a1.md) |  |
| [Whisper - Shared Infrastructure Clustering](../content/whisper-whisper-shared-infrastructure-clustering-d52687ac-ac56-523b-aa88-45bd2498904b-0ca913ad.md) |  |

### Workbooks (3)

**In solution [Whisper](../solutions/whisper.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DomainRegistrationAnomaly](../content/whisper-domainregistrationanomaly-54326c3f.md) |  |
| [ExternalAttackSurfaceOverview](../content/whisper-externalattacksurfaceoverview-71a72872.md) |  |
| [InfrastructureThreatLandscape](../content/whisper-infrastructurethreatlandscape-2a76aaf5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

