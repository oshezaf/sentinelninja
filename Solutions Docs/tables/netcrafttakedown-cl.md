# NetcraftTakedown_CL

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

## Schema (26 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftTakedown_CL.json)

| Column Name | Type |
|:------------|:-----|
| ActionRequired | string |
| AttackType | string |
| ChangeType | string |
| CloudEventType | string |
| CustomerLabel | string |
| DataContentType | string |
| EntityType | string |
| EventId | string |
| EventSource | string |
| EventType | string |
| GroupId | long |
| IsAuthorized | bool |
| IsEscalated | bool |
| IsMaliciousDomain | bool |
| IsMaliciousHostname | bool |
| NoteBody | string |
| NoteId | long |
| RawData | string |
| SpecVersion | string |
| Status | string |
| Subject | string |
| TagUpdate | string |
| TagValue | string |
| TakedownId | long |
| Threat | string |
| TimeGenerated | datetime |

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

## Content Items Using This Table (7)

### Analytic Rules (4)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Takedown - Important note changed](../content/netcraftintegrationgateway-netcraft-takedown-important-note-changed-0a0416c5-277a-4a2b-9815-7b457fdffd81-38972724.md) |  |
| [Netcraft Takedown - New takedown](../content/netcraftintegrationgateway-netcraft-takedown-new-takedown-68ff493b-de53-472b-9a34-15b1453060a1-d1d7dc1a.md) |  |
| [Netcraft Takedown - Resolved](../content/netcraftintegrationgateway-netcraft-takedown-resolved-6de7eb0b-693c-4d4a-a263-d047f88f167f-0f536dfa.md) |  |
| [Netcraft Takedown - Waiting for customer](../content/netcraftintegrationgateway-netcraft-takedown-waiting-for-customer-f2cd0583-da5f-4edc-a4ad-1a237643c228-83999f7c.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Takedown - Latest record inventory](../content/netcraftintegrationgateway-netcraft-takedown-latest-record-inventory-d945aaaf-39a1-46b2-8046-4f982eaa9839-55b3e3d8.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftTakedownOperations](../content/netcraftintegrationgateway-netcrafttakedownoperations-0b55219f.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftTakedownOperations](../content/github-only-netcrafttakedownoperations-b679fbad.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftTakedown_Latest](../parsers/netcrafttakedown-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftTakedown_Unique](../parsers/netcrafttakedown-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

