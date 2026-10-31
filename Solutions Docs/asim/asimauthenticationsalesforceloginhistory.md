# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Salesforce Login History

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSalesforceLoginHistory` |
| **Built-in Parser** | `_ASim_Authentication_SalesforceLoginHistory` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Salesforce Login History |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationSalesforceLoginHistory.md)) |
| **Last Updated** | Oct 14, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationSalesforceLoginHistory.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationSalesforceLoginHistory.yaml) |

## Description

This ASIM parser normalizes Salesforce login history events stored in the SalesforceLoginHistory table to the ASIM Authentication schema.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SalesforceLoginHistory`](../tables/salesforceloginhistory.md) | ✓ | ✗ | ✓ |
| [`SalesforceLoginHistoryV2_CL`](../tables/salesforceloginhistoryv2-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SalesforceAuditLogsConnector](../connectors/salesforceauditlogsconnector.md) | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |

**Solutions:** [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [SalesforceLoginHistory table documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/salesforceloginhistory)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

