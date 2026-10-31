# SAPBTPAVL_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SAPBTPAVL_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActiveCves | dynamic |
| AppId | string |
| AppName | string |
| AssetContext | string |
| AssetLink | string |
| CfOrganizationId | string |
| CfOrganizationName | string |
| CvssVector | string |
| Description | string |
| FindingId | string |
| FirstFound | datetime |
| GlobalAccountId | string |
| GlobalAccountName | string |
| Id | string |
| Landscape | string |
| LastFound | datetime |
| MaxCvss | real |
| PackageNames | dynamic |
| Recommendation | string |
| Severity | string |
| SourceId | string |
| SourceVulnerabilityId | string |
| SpaceId | string |
| SpaceName | string |
| SubaccountId | string |
| SubaccountName | string |
| TimeGenerated | datetime |
| VulnerabilityUrl | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [SAP BTP](../solutions/sap-btp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Application Vulnerability Report for SAP BTP](../connectors/sapbtpavl.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [SAP BTP](../solutions/sap-btp.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [SAP BTP - Use of custom app with high or critical vulnerability](../content/sap-btp-sap-btp-use-of-custom-app-with-high-or-critical-vulnerability-8a4c9e2f-6b1d-4e7a-9c3f-2d5b8f1a6e4c-1f4a73ac.md) |  |

### Workbooks (1)

**In solution [SAP BTP](../solutions/sap-btp.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [SAPBTPActivity](../content/sap-btp-sapbtpactivity-8f5b3a2b.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

