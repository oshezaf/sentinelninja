# IntegrationTable_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/IntegrationTable_CL.json)

| Column Name | Type |
|:------------|:-----|
| category | string |
| cloudOfficeTenantUuid | string |
| context | dynamic |
| detectionUuid | dynamic |
| deviceDisplayName | string |
| deviceUuid | string |
| displayName | string |
| edrRuleUuid | string |
| groupSize | int |
| networkCommunication | dynamic |
| note | string |
| objectHashSha1 | string |
| objectName | string |
| objectSizeBytes | int |
| objectTypeName | string |
| objectUrl | string |
| occurTime | string |
| processCommandline | string |
| processPath | string |
| processUuid | string |
| resolved | bool |
| responses | dynamic |
| scanUuid | string |
| severityLevel | string |
| severityScore | string |
| TimeGenerated | datetime |
| triggeringEvent | dynamic |
| typeName | string |
| userNameBase | string |

## Solutions (1)

This table is used by the following solutions:

- [ESET Protect Platform](../solutions/eset-protect-platform.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [ESET Protect Platform](../connectors/esetprotectplatform.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ESETProtectPlatform](../parsers/esetprotectplatform.md) | [ESET Protect Platform](../solutions/eset-protect-platform.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

