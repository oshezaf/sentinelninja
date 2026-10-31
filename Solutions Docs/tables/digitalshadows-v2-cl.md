# DigitalShadows_V2_CL

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

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DigitalShadows_V2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AlertId | string |
| App | string |
| Assets | string |
| Classification | string |
| Comments | string |
| Description | string |
| GreyMatterLink | string |
| ImpactDescription | string |
| IncidentId | real |
| Mitigation | string |
| PortalId | string |
| RiskAssessmentRiskLevel | string |
| RiskFactors | string |
| RiskLevel | string |
| Status | string |
| TimeGenerated | datetime |
| TimeRaised | datetime |
| TimeUpdated | datetime |
| Title | string |
| TriageId | string |
| TriageRaisedTime | datetime |
| TriageUpdatedTime | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Digital Shadows](../solutions/digital-shadows.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Digital Shadows Searchlight](../connectors/digitalshadowssearchlightazurefunctions.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Digital Shadows](../solutions/digital-shadows.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Digital Shadows Incident Creation for exclude-app](../content/digital-shadows-digital-shadows-incident-creation-for-exclude-app-f7abe9c1-1e6c-4317-b907-25769e7764c5-54e3b41d.md) |  |
| [Digital Shadows Incident Creation for include-app](../content/digital-shadows-digital-shadows-incident-creation-for-include-app-ede3071d-9317-45f9-b36c-6a6effee5294-078d7289.md) |  |

### Workbooks (1)

**In solution [Digital Shadows](../solutions/digital-shadows.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DigitalShadows](../content/digital-shadows-digitalshadows-3362ae13.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

