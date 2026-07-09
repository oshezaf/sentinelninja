# AliCloud_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Source Vendor** | AliCloud *(basis: projected)* |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (28 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/AliCloud_CL.json)

| Column Name | Type |
|:------------|:-----|
| AcsRegion | string |
| AdditionalEventData | string |
| apiVersion | datetime |
| ContentTopic | string |
| CreatedAt | datetime |
| EventCount | string |
| EventEndTime | datetime |
| EventOriginalType | string |
| EventOriginalUid | string |
| EventProduct | string |
| EventResult | string |
| EventRW | string |
| EventSource | string |
| EventSubType | string |
| EventVendor | string |
| EventVersion | string |
| RequestId | string |
| RequestParameterJson | string |
| RequestParameters | string |
| ServiceName | string |
| SourceName | string |
| SourseSystem | string |
| SrcIpAddr | string |
| TenanId | string |
| TimeGenerated | datetime |
| Type | string |
| UserAgent | string |
| UserIdentity | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Alibaba Cloud](../solutions/alibaba-cloud.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [AliCloud](../connectors/alicloud.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AliCloud](../parsers/alicloud.md) | [Alibaba Cloud](../solutions/alibaba-cloud.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

