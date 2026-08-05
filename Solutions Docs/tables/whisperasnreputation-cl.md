# WhisperASNReputation_CL

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

## Schema (11 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WhisperASNReputation_CL.json)

| Column Name | Type |
|:------------|:-----|
| asn | string |
| asnName | string |
| avgThreatScore | real |
| country | string |
| hasThreateningPrefixes | bool |
| maxThreatScore | real |
| peerCount | int |
| prefixCount | int |
| reputationLevel | string |
| reputationScore | real |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Whisper](../solutions/whisper.md)

---

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [Whisper](../solutions/whisper.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Whisper Security - ASN Reputation Degradation](../content/whisper-whisper-security-asn-reputation-degradation-32e7bcab-4424-516e-9c7c-dbe868144494-f029b733.md) |  |
| [Whisper Security - Newly Registered Domain on Threat ASN](../content/whisper-whisper-security-newly-registered-domain-on-threat-asn-4f80ee8e-901f-538a-8603-cc4b49e80164-36554bf5.md) |  |

### Hunting Queries (1)

**In solution [Whisper](../solutions/whisper.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Whisper - ASN Reputation Score Hunt](../content/whisper-whisper-asn-reputation-score-hunt-c63683cc-3a89-5a3f-93a2-548e3807f18f-97325d5f.md) |  |

### Workbooks (2)

**In solution [Whisper](../solutions/whisper.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [AsnReputationMonitoring](../content/whisper-asnreputationmonitoring-d9e9e316.md) |  |
| [InfrastructureThreatLandscape](../content/whisper-infrastructurethreatlandscape-2a76aaf5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

