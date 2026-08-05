# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Salesforce Service Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSalesforceSC` |
| **Built-in Parser** | `_ASim_Authentication_SalesforceSC` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Salesforce Service Cloud |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationSalesforceSC.md)) |
| **Last Updated** | Jun 25, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationSalesforceSC.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationSalesforceSC.yaml) |

## Description

This ASIM parser supports normalizing Salesforce sign in logs, stored in the SalesforceServiceCloud_CL, SalesforceServiceCloudV2_CL or SalesforceServiceCloudV3_CL tables, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SalesforceServiceCloudV2_CL`](../tables/salesforceservicecloudv2-cl.md) | ? | ✓ | ? |
| [`SalesforceServiceCloudV3_CL`](../tables/salesforceservicecloudv3-cl.md) | ✗ | ✓ | ✗ |
| [`SalesforceServiceCloud_CL`](../tables/salesforceservicecloud-cl.md) 🔶 | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SalesforceServiceCloud](../connectors/salesforceservicecloud.md) | [Salesforce Service Cloud (legacy connector)](../solutions/salesforce-service-cloud.md) |
| [SalesforceServiceCloudCCPDefinition](../connectors/salesforceservicecloudccpdefinition.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |

**Solutions:** [Salesforce Service Cloud (legacy connector)](../solutions/salesforce-service-cloud.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [Salesforce Service Cloud](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_login.htm)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

