# NetcraftSocialResult_CL

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

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetcraftSocialResult_CL.json)

| Column Name | Type |
|:------------|:-----|
| ChangeType | string |
| CloudEventType | string |
| DataContentType | string |
| Description | string |
| DisplayName | string |
| EventId | string |
| EventSource | string |
| FirstSeen | datetime |
| LastSeen | datetime |
| Links | dynamic |
| Platform | string |
| PlatformVariant | string |
| ProfileId | string |
| RawData | string |
| ResultUuid | string |
| Risk | dynamic |
| SearchTerms | dynamic |
| SocialType | string |
| SpecVersion | string |
| Subject | string |
| Tags | dynamic |
| TimeGenerated | datetime |
| Url | string |
| Username | string |
| Verified | bool |

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
| [Netcraft Social - High risk result](../content/netcraftintegrationgateway-netcraft-social-high-risk-result-a4b5c6d7-e8f9-4012-abcd-ef1234567e01-7dbcb893.md) |  |
| [Netcraft Social - Pending client input](../content/netcraftintegrationgateway-netcraft-social-pending-client-input-b5c6d7e8-f901-4123-bcde-f1234567e101-c025787f.md) |  |

### Hunting Queries (1)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Netcraft Social - Result inventory](../content/netcraftintegrationgateway-netcraft-social-result-inventory-b5c6d7e8-f9a0-4123-bcde-f12345678901-acda5d00.md) |  |

### Workbooks (2)

**In solution [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftSocialResultOperations](../content/netcraftintegrationgateway-netcraftsocialresultoperations-f55f478f.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetcraftSocialResultOperations](../content/github-only-netcraftsocialresultoperations-907b00ef.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetcraftSocialResult_Latest](../parsers/netcraftsocialresult-latest.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |
| [NetcraftSocialResult_Unique](../parsers/netcraftsocialresult-unique.md) | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

