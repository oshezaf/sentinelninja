# QualysHostDetection_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (4 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/QualysHostDetection_CL.json)

| Column Name | Type |
|:------------|:-----|
| Detections_s | dynamic |
| IPAddress | string |
| NetBios_s | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [QualysVM](../solutions/qualysvm.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[DEPRECATED] Qualys Vulnerability Management](../connectors/qualysvulnerabilitymanagement.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [QualysVM](../solutions/qualysvm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [High Number of Urgent Vulnerabilities Detected](../content/qualysvm-high-number-of-urgent-vulnerabilities-detected-3edb7215-250b-40c0-8b46-79093949242d-7adbb1bc.md) |  |
| [New High Severity Vulnerability Detected Across Multiple Hosts](../content/qualysvm-new-high-severity-vulnerability-detected-across-multiple-hosts-6116dc19-475a-4148-84b2-efe89c073e27-fbfde951.md) |  |

### Workbooks (1)

**In solution [QualysVM](../solutions/qualysvm.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [QualysVMv2](../content/qualysvm-qualysvmv2-0981091b.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [QualysHostDetection](../parsers/qualyshostdetection.md) | [QualysVM](../solutions/qualysvm.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

