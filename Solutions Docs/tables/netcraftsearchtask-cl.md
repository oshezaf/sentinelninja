# NetcraftSearchTask_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (18 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftSearchTask_CL.json)

| Column Name | Type |
|:------------|:-----|
| Actions | dynamic |
| CloudEventType | string |
| CompletedAt | datetime |
| CreatedAt | datetime |
| DataContentType | string |
| DisplayName | string |
| EventId | string |
| EventSource | string |
| Product | string |
| Reason | string |
| ResultUuid | string |
| Risk | dynamic |
| RiskCategory | string |
| SpecVersion | string |
| Subject | string |
| Tags | dynamic |
| TimeGenerated | datetime |
| Url | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netcraft Integration Gateway](../connectors/netcraftintegrationgatewaydefinition.md) |  |

---

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftSearchTask_Latest](../parsers/netcraftsearchtask-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftSearchTask_Unique](../parsers/netcraftsearchtask-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

