# RedRaysScanRuns_CL

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

## Schema (36 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RedRays%20SAP%20Security%20Findings/Data%20Connectors/RedRaysSAPSecurityFindings_PUSH_CCP/RedRaysSAPSecurityFindings_DCR.json)

| Column Name | Type |
|:------------|:-----|
| AlertFingerprint | string |
| ChangeType | string |
| CloudKind | string |
| CoverageStatus | string |
| DetectedAt | datetime |
| ErrorCount | long |
| EventId | string |
| ExportRunId | string |
| FindingCount | long |
| FindingKey | string |
| FinishedAt | datetime |
| Host | string |
| IdentityScope | string |
| IsActionable | boolean |
| IsAlertCandidate | boolean |
| IsBaseline | boolean |
| Module | string |
| ObjectId | string |
| ObjectName | string |
| ProductInstanceId | string |
| Recommendation | string |
| RecordKind | string |
| Revision | long |
| SapClient | string |
| ScanId | string |
| SchemaVersion | long |
| SeveritySource | string |
| SourceRecordId | string |
| SourceSeverity | string |
| SourceStatus | string |
| SourceUpdatedAt | datetime |
| SourceUrl | string |
| StartedAt | datetime |
| SystemId | string |
| TimeGenerated | datetime |
| Title | string |

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

## Content Items Using This Table (2)

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

