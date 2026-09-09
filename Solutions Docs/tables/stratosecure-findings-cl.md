# StratoSecure_Findings_CL

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
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (20 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Data%20Connectors/StratoSecure_PUSH_CCP/StratoSecure_DCR.json)

| Column Name | Type |
|:------------|:-----|
| ApplicationId | string |
| AppSecScore | real |
| CweId | string |
| ExceptionId | string |
| FilePath | string |
| FindingFingerprint | string |
| FindingId | string |
| FixStatus | string |
| LineNumber | int |
| OwaspCategory | string |
| Repository | string |
| RuleId | string |
| ScanId | string |
| Severity | string |
| SeverityInt | int |
| SlaBreached | boolean |
| SlaDeadline | datetime |
| StraTenantId | string |
| TimeGenerated | datetime |
| Title | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [StratoSecure](../solutions/stratosecure.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [StratoSecure Security Platform](../connectors/stratosecurepush.md) |  |

---

## Content Items Using This Table (5)

### Analytic Rules (3)

**In solution [StratoSecure](../solutions/stratosecure.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [BOLA Finding with API Traffic Anomaly](../content/stratosecure-bola-finding-with-api-traffic-anomaly-3c5be96e-2eeb-439a-9856-1c23aa72cfdd-0c6799d9.md) |  |
| [SAST Auth Finding Correlated with Brute Force](../content/stratosecure-sast-auth-finding-correlated-with-brute-force-4ae9f294-410d-4c11-9072-0d8fcf5162d8-94b377e7.md) |  |
| [Secret Exposure with Anomalous SPN Sign-In](../content/stratosecure-secret-exposure-with-anomalous-spn-sign-in-a91e677a-46b5-428e-8a7d-29a2bb33bb6f-212cab8f.md) |  |

### Workbooks (2)

**In solution [StratoSecure](../solutions/stratosecure.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [StratoSecure_Executive](../content/stratosecure-stratosecure-executive-6e0b8ef2.md) |  |
| [StratoSecure_SOC](../content/stratosecure-stratosecure-soc-464ce49d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

