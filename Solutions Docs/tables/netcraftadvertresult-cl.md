# NetcraftAdvertResult_CL

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

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftAdvertResult_CL.json)

| Column Name | Type |
|:------------|:-----|
| AdLibraryId | string |
| AdvertiserId | string |
| AdvertiserName | string |
| AdvertTitle | string |
| ChangeType | string |
| CloudEventType | string |
| CountryCodes | dynamic |
| DataContentType | string |
| Description | string |
| DestinationUrls | dynamic |
| DisplayUrl | string |
| EventId | string |
| EventSource | string |
| FirstSeen | datetime |
| LastSeen | datetime |
| Platform | string |
| RawData | string |
| ReferralUrl | string |
| ResultUuid | string |
| Risk | dynamic |
| SearchTerms | dynamic |
| SpecVersion | string |
| Subject | string |
| Tags | dynamic |
| TimeGenerated | datetime |
| Variants | dynamic |

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

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Advert - High risk result](../content/netcraftintegrationgateway-netcraft-advert-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e03-23301556.md) |  |
| [Netcraft Advert - Pending client input](../content/netcraftintegrationgateway-netcraft-advert-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e103-c5137515.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Advert - Result inventory](../content/netcraftintegrationgateway-netcraft-advert-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678903-3bbd8876.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftAdvertResultOperations](../content/netcraftintegrationgateway-netcraftadvertresultoperations-3d43ca25.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftAdvertResultOperations](../content/github-only-netcraftadvertresultoperations-d1fe923c.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftAdvertResult_Latest](../parsers/netcraftadvertresult-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftAdvertResult_Unique](../parsers/netcraftadvertresult-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

