# CBS_BreachedCredentials_AzureV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (14 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CBS_BreachedCredentials_AzureV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| Brand | string |
| BreachSource | dynamic |
| Domain | string |
| Email | string |
| ExternalLink | string |
| FirstSeen | string |
| Id | string |
| IncidentType | string |
| LastSeen | string |
| RawPayload | dynamic |
| Remarks | string |
| Status | string |
| TimeGenerated | datetime |
| Username | string |

## Solutions (1)

This table is used by the following solutions:

- [CTM360](../solutions/ctm360.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CTM360 CyberBlindSpot (Serverless)](../connectors/ctm360cbsconnectordefinition.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CBS_BreachedCredentials](../parsers/cbs-breachedcredentials.md) | [CTM360](../solutions/ctm360.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

