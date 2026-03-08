# MorphisecAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (41 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Morphisec/Data%20Connectors/Morphisec_CCF/Morphisec_DCR.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| application | string |
| applicationPath | string |
| attackModule | string |
| attackSeverity | string |
| classification | string |
| defenderDescription | dynamic |
| defenderId | string |
| description | string |
| detectionDescription | string |
| detectionEngineVersion | dynamic |
| detectionName | string |
| detectionPath | dynamic |
| engine | string |
| filePath | string |
| hostname | string |
| id | string |
| kernel | string |
| metadataProtectorVersion | string |
| mitreClassification | dynamic |
| name | string |
| numberOfAttacks | dynamic |
| operatingSystem | string |
| parentProcessCommandLine | string |
| parentProcessSignature | string |
| path | dynamic |
| processCommandLine | string |
| processCommandLineArgs | dynamic |
| processSignature | string |
| protectorId | string |
| reviewStatus | string |
| signature | string |
| subClassification | string |
| threatMessageArrivalTime | datetime |
| threatModule | string |
| threatSubType | string |
| threatTime | datetime |
| threatType | string |
| TimeGenerated | datetime |
| url | dynamic |
| user | string |

## Solutions (1)

This table is used by the following solutions:

- [Morphisec](../solutions/morphisec.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Morphisec API Data Connector (via Codeless Connector Framework)](../connectors/morphisecccf.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (3)

**In solution [Morphisec](../solutions/morphisec.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Critical Severity Incident](../content/morphisec-critical-severity-incident-4f1c9e6e-8b6b-4d2a-9f3e-123456789abc-ecbf5667.md) |  |
| [Device Alert Surge](../content/morphisec-device-alert-surge-5c8e1f2e-9d6b-4f4a-8f3e-123456789abc-7d970dee.md) |  |
| [Process-Level Anomaly](../content/morphisec-process-level-anomaly-3fa85f64-5717-4562-b3fc-2c963f66afa6-0c57c06c.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Morphisec](../parsers/morphisec.md) | [Morphisec](../solutions/morphisec.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

