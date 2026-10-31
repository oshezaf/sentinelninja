# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Alibaba Cloud ActionTrail

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationAlibabaCloudActionTrail` |
| **Built-in Parser** | `_ASim_Authentication_AlibabaCloudActionTrail` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Alibaba Cloud ActionTrail |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationAlibabaCloudActionTrail.md)) |
| **Last Updated** | Sep 14, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAlibabaCloudActionTrail.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAlibabaCloudActionTrail.yaml) |

## Description

This ASIM parser supports normalizing Alibaba Cloud ActionTrail interactive sign-in activity (ConsoleSignin for RAM/root account console logon, and Login for CloudSSO directory authentication) to the ASIM Authentication normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AliCloudActionTrailLogs_CL`](../tables/alicloudactiontraillogs-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AliCloudActionTrailCCPDefinition](../connectors/alicloudactiontrailccpdefinition.md) | [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md) |

**Solutions:** [Alibaba Cloud ActionTrail](../solutions/alibaba-cloud-actiontrail.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Alibaba Cloud ActionTrail Documentation](https://www.alibabacloud.com/help/en/actiontrail)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

