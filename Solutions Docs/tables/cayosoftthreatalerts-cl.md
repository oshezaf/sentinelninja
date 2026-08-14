# CayosoftThreatAlerts_CL

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

## Schema (12 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CayosoftThreatAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| Categories | dynamic |
| CreatedDateTime | datetime |
| Evidence | dynamic |
| RemediationComplexity | string |
| Severity | string |
| Subject | string |
| TargetLocation | string |
| TargetObjectId | string |
| TargetObjectName | string |
| TargetObjectType | string |
| ThreatId | string |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Cayosoft Guardian](../solutions/cayosoft-guardian.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cayosoft Guardian Threat Alerts](../connectors/cayosoftguardianconnector.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Cayosoft Guardian](../solutions/cayosoft-guardian.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Cayosoft Guardian - Cloud Application Security Threats](../content/cayosoft-guardian-cayosoft-guardian-cloud-application-security-threats-e6f6c71c-f1fd-473b-9129-249db5d7462c-429092f9.md) |  |
| [Cayosoft Guardian - Core Identity and Infrastructure Threats](../content/cayosoft-guardian-cayosoft-guardian-core-identity-and-infrastructure-threats-4720d7a5-6845-4ce4-aa45-79334e1a1176-0f15a2e7.md) |  |

### Workbooks (1)

**In solution [Cayosoft Guardian](../solutions/cayosoft-guardian.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [WorkbookContent](../content/cayosoft-guardian-workbookcontent-32aebefa.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

