# ESIExchangeOnlineConfig_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ESIExchangeOnlineConfig_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| EntryDate_s | string |
| ESIEnvironment_s | string |
| ExecutionResult_s | string |
| GenerationInstanceID_g | string |
| Identity_s | string |
| IdentityString_s | string |
| ManagementGroupName | string |
| MG | string |
| Name_s | string |
| PSCmdL_s | string |
| RawData | string |
| rawData_s | string |
| Section_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| WhenChanged_s | string |
| WhenChanged_t | datetime |
| WhenCreated_s | string |
| WhenCreated_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Exchange Security Insights Online Collector](../connectors/esi-exchangeonlinecollector.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Microsoft Exchange Least Privilege with RBAC - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-least-privilege-with-rbac-online-e1522c02.md) |  |
| [Microsoft Exchange Security Review - Online](../content/microsoft-exchange-security-exchange-online-microsoft-exchange-security-review-online-bf15f919.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MESCompareDataMRA](../parsers/mescomparedatamra.md) | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

