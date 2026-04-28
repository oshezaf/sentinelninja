# MarkLogicAudit_CL

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

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/MarkLogicAudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActorUsername | string |
| ClientIdentity | string |
| Computer | string |
| Database | string |
| EventCount | string |
| EventOriginalResult | string |
| EventProduct | string |
| EventResult | string |
| EventSchemaVersion | string |
| EventSeverity | string |
| EventStartTime | datetime |
| EventSubType | string |
| EventType | string |
| EventVendor | string |
| Expr | string |
| Function | string |
| HttpReferrerOriginal | string |
| HttpRequestMethod | string |
| HttpResponseBodyBytes | string |
| HttpStatusCode | string |
| HttpUserAgentOriginal | string |
| HttpVersion | string |
| Roles | string |
| SourseSystem | string |
| SrcIpAddr | string |
| SrcUserName | string |
| TenanId | string |
| TimeGenerated | datetime |
| Type | string |
| UrlOriginal | string |

## Solutions (2)

This table is used by the following solutions:

- [CustomLogsAma](../solutions/customlogsama.md)
- [MarkLogicAudit](../solutions/marklogicaudit.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Custom logs via AMA](../connectors/customlogsviaama.md) |  |
| [[Deprecated] MarkLogic Audit](../connectors/marklogic.md) |  |

---

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [MarkLogicAudit](../parsers/marklogicaudit.md) | [MarkLogicAudit](../solutions/marklogicaudit.md) |  |
| [MarkLogicAudit](../parsers/marklogicaudit.md) | [MarkLogicAudit](../solutions/marklogicaudit.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

