# RedRaysSoDFindings_CL

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

## Schema (43 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Data%20Connectors/RedRaysSAPSecurityFindings_PUSH_CCP/RedRaysSAPSecurityFindings_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AbsenceReason | string |
| AccountName | string |
| AlertFingerprint | string |
| CaseId | string |
| CaseReportable | boolean |
| CaseScanId | string |
| CaseStateFresh | boolean |
| CaseSuppressionReason | string |
| ChangeType | string |
| CoverageStatus | string |
| DetectedAt | datetime |
| EventId | string |
| ExportRunId | string |
| FindingKey | string |
| Host | string |
| IdentityScope | string |
| IsActionable | boolean |
| IsAlertCandidate | boolean |
| IsBaseline | boolean |
| MitigationControl | string |
| Module | string |
| ProductInstanceId | string |
| Recommendation | string |
| RecordKind | string |
| Reportable | boolean |
| Revision | long |
| RuleCode | string |
| RuleId | string |
| RuleVersion | long |
| SapClient | string |
| ScanId | string |
| SchemaVersion | long |
| SeveritySource | string |
| SourceRecordId | string |
| SourceSeverity | string |
| SourceStatus | string |
| SourceUpdatedAt | datetime |
| SourceUrl | string |
| SuppressionReason | string |
| SystemId | string |
| TimeGenerated | datetime |
| Title | string |
| WaiverUntil | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [RedRays SAP Security Findings](../connectors/redrayssapsecurityfindings.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [RedRays - SoD](../content/redrays-sap-security-findings-redrays-sod-699d4ec8-6c5c-5440-8664-df92012636ad-1cc68306.md) |  |

### Workbooks (2)

**In solution [RedRays SAP Security Findings](../solutions/redrays-sap-security-findings.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [RedRaysSAPSecurityFindings](../content/redrays-sap-security-findings-redrayssapsecurityfindings-23093b9e.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [RedRaysSAPSecurityFindings](../content/github-only-redrayssapsecurityfindings-04753d3b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

