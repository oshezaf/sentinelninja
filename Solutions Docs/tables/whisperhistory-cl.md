# WhisperHistory_CL

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

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WhisperHistory_CL.json)

| Column Name | Type |
|:------------|:-----|
| bgpOrigin | string |
| bgpPrefix | string |
| bgpVisibility | real |
| country | string |
| createDate | datetime |
| expiryDate | datetime |
| indicator | string |
| indicatorType | string |
| nameServers | string |
| registrant | string |
| registrar | string |
| snapshotDate | datetime |
| TimeGenerated | datetime |
| updateDate | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Whisper](../solutions/whisper.md)

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Whisper](../solutions/whisper.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Whisper Security - BGP Route Anomaly with Traffic Spike](../content/whisper-whisper-security-bgp-route-anomaly-with-traffic-spike-1c08a7cb-7ff4-5a37-a961-39c29f8d07bd-706ede9c.md) |  |
| [Whisper Security - Domain Registrar Change Anomaly](../content/whisper-whisper-security-domain-registrar-change-anomaly-b6e26c67-f596-5c0f-8614-c88d715508c5-1714d647.md) |  |

### Workbooks (1)

**In solution [Whisper](../solutions/whisper.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DomainRegistrationAnomaly](../content/whisper-domainregistrationanomaly-54326c3f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

