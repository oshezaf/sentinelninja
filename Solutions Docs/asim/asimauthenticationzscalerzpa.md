# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for Zscaler Private Access

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationZscalerZPA` |
| **Built-in Parser** | `_ASim_Authentication_ZscalerZPA` |
| **Schema** | Authentication |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Zscaler Private Access |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationZscalerZPA.md)) |
| **Last Updated** | Oct 01, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationZscalerZPA.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationZscalerZPA.yaml) |

## Description

This ASIM parser normalizes Zscaler Private Access (ZPA) User Activity logs, ingested into the ZPA_CL custom table, to the ASIM Authentication schema.
The parser handles ZPN_STATUS_AUTHENTICATED, ZPN_STATUS_AUTH_FAILED and ZPN_STATUS_DISCONNECTED sessions.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZPA_CL`](../tables/zpa-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CustomlogsviaAMA](../connectors/customlogsviaama.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| [ZscalerPrivateAccess](../connectors/zscalerprivateaccess.md) | [Zscaler Private Access (ZPA) (legacy connector)](../solutions/zscaler-private-access-zpa.md) |

**Solutions:** [CustomLogsAma](../solutions/customlogsama.md), [Zscaler Private Access (ZPA) (legacy connector)](../solutions/zscaler-private-access-zpa.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Zscaler Private Access User Activity log fields](https://help.zscaler.com/zpa/about-user-activity-log-fields)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

