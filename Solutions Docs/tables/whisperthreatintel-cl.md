# WhisperThreatIntel_CL

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

## Schema (19 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WhisperThreatIntel_CL.json)

| Column Name | Type |
|:------------|:-----|
| explanation | string |
| factors | string |
| feedNames | string |
| indicator | string |
| indicatorType | string |
| isAnonymizer | bool |
| isBruteforce | bool |
| isC2 | bool |
| isMalware | bool |
| isPhishing | bool |
| isScanner | bool |
| isSpam | bool |
| isThreat | bool |
| isTor | bool |
| lastSeen | datetime |
| threatLevel | string |
| threatScore | real |
| threatSources | int |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Whisper](../solutions/whisper.md)

---

## Content Items Using This Table (9)

### Analytic Rules (3)

**In solution [Whisper](../solutions/whisper.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Whisper Security - C2 Communication Detection](../content/whisper-whisper-security-c2-communication-detection-00682c4c-b8b5-5ef7-af33-50891b271b7b-8e74b21f.md) |  |
| [Whisper Security - Co-Hosted Malware Cluster Detection](../content/whisper-whisper-security-co-hosted-malware-cluster-detection-374a77f4-23ed-55dc-8441-8e47a1e079e9-565d2e78.md) |  |
| [Whisper Security - Tor Exit Node Communication](../content/whisper-whisper-security-tor-exit-node-communication-f5567c93-91de-577a-b35e-c2807715493d-300137d9.md) |  |

### Hunting Queries (5)

**In solution [Whisper](../solutions/whisper.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Whisper - Attack Surface Discovery](../content/whisper-whisper-attack-surface-discovery-507b09cf-ef98-56d5-9d56-b23ae8e1df94-315ec386.md) |  |
| [Whisper - Domain to ASN Migration](../content/whisper-whisper-domain-to-asn-migration-ab71059a-8f31-52a9-8f78-82bc80b857cf-fd3f2cf2.md) |  |
| [Whisper - Infrastructure Pivot Analysis](../content/whisper-whisper-infrastructure-pivot-analysis-4eabcdaa-bbe2-54d8-b930-c8d7b31a015c-00431a1d.md) |  |
| [Whisper - Newly Registered Domain Hunt](../content/whisper-whisper-newly-registered-domain-hunt-0a95fa2e-e531-592d-b967-2f3ba669ce49-d647f3a1.md) |  |
| [Whisper - Shared Infrastructure Clustering](../content/whisper-whisper-shared-infrastructure-clustering-d52687ac-ac56-523b-aa88-45bd2498904b-0ca913ad.md) |  |

### Workbooks (1)

**In solution [Whisper](../solutions/whisper.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [InfrastructureThreatLandscape](../content/whisper-infrastructurethreatlandscape-2a76aaf5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

