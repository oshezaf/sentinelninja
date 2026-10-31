# NetcraftDdwIntelligence_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftDdwIntelligence_CL.json)

| Column Name | Type |
|:------------|:-----|
| Acknowledged | bool |
| CloudEventType | string |
| DataContentType | string |
| DdwUrl | string |
| DisplayValue | string |
| Entities | dynamic |
| EventId | string |
| EventSource | string |
| GroupUuid | string |
| IntelligenceType | string |
| MatchCreated | datetime |
| MatchSource | string |
| MatchUuid | string |
| Priority | string |
| RawData | string |
| Rule | string |
| Snippet | string |
| SpecVersion | string |
| Subject | string |
| TakedownEligible | bool |
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

## Content Items Using This Table (6)

### Analytic Rules (3)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft DDW Intelligence - High priority match](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-high-priority-match-114e0c34-5e32-42a8-a0fc-3e3c8291bee9-20946a0b.md) |  |
| [Netcraft DDW Intelligence - Takedown eligible match](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-takedown-eligible-match-8da040d4-bd02-47ae-86b5-db527a8b4f18-b38d7cec.md) |  |
| [Netcraft DDW Intelligence - Unacknowledged high priority](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-unacknowledged-high-priority-f788b740-86af-46b2-b986-c059c5e5b908-1f3b7b73.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft DDW Intelligence - Match inventory](../content/netcraftintegrationgateway-netcraft-ddw-intelligence-match-inventory-51b52e04-30b4-4ff1-b5ea-e875a5c5808b-6fd7b5ee.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftDdwIntelligenceOperations](../content/netcraftintegrationgateway-netcraftddwintelligenceoperations-a47033fe.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftDdwIntelligenceOperations](../content/github-only-netcraftddwintelligenceoperations-eb4b6dcb.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftDdwIntelligence_Latest](../parsers/netcraftddwintelligence-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftDdwIntelligence_Unique](../parsers/netcraftddwintelligence-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

