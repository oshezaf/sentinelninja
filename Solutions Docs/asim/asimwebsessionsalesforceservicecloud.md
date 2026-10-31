# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Web Session ASIM parser for Salesforce Service Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionSalesforceServiceCloud` |
| **Built-in Parser** | `_ASim_WebSession_SalesforceServiceCloud` |
| **Schema** | WebSession |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Salesforce Service Cloud |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSessionSalesforceServiceCloud.md)) |
| **Last Updated** | Sep 14, 2026 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionSalesforceServiceCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionSalesforceServiceCloud.yaml) |

## Description

This ASIM parser supports normalizing Salesforce Service Cloud web session and API request logs from the SalesforceServiceCloudV2_CL and SalesforceServiceCloudV3_CL table to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md) |  | ? | ✓ | ? |
| [`SalesforceServiceCloudV3_CL`](../tables/salesforceservicecloudv3-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SalesforceEventLogConnector](../connectors/salesforceeventlogconnector.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| [SalesforceServiceCloud](../connectors/salesforceservicecloud.md) | [Salesforce Service Cloud (legacy connector)](../solutions/salesforce-service-cloud.md) |

**Solutions:** [Salesforce Service Cloud (legacy connector)](../solutions/salesforce-service-cloud.md)

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Salesforce Service Cloud REST API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

