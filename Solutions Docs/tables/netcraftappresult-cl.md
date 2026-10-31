# NetcraftAppResult_CL

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

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftAppResult_CL.json)

| Column Name | Type |
|:------------|:-----|
| AppId | string |
| ChangeType | string |
| CloudEventType | string |
| CountryCodes | dynamic |
| DataContentType | string |
| Description | string |
| Developer | string |
| EventId | string |
| EventSource | string |
| FirstSeen | datetime |
| LastSeen | datetime |
| Name | string |
| Platform | string |
| RawData | string |
| ResultUuid | string |
| Risk | dynamic |
| SearchTerms | dynamic |
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

## Content Items Using This Table (5)

### Analytic Rules (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft App - High risk result](../content/netcraftintegrationgateway-netcraft-app-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e02-87c4a1a4.md) |  |
| [Netcraft App - Pending client input](../content/netcraftintegrationgateway-netcraft-app-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e102-d0a0a39a.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft App - Result inventory](../content/netcraftintegrationgateway-netcraft-app-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678902-c6454b9f.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftAppResultOperations](../content/netcraftintegrationgateway-netcraftappresultoperations-9d14d9c5.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftAppResultOperations](../content/github-only-netcraftappresultoperations-324d195c.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftAppResult_Latest](../parsers/netcraftappresult-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftAppResult_Unique](../parsers/netcraftappresult-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

