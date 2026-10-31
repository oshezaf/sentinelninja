# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Network Session ASIM parser for Zscaler Private Access (ZPA_CL)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionZscalerZPA` |
| **Built-in Parser** | `_ASim_NetworkSession_ZscalerZPA` |
| **Schema** | NetworkSession |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Zscaler Private Access (ZPA) |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionZscalerZPA.md)) |
| **Last Updated** | Sep 21, 2026 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionZscalerZPA.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionZscalerZPA.yaml) |

## Description

This ASIM parser supports normalizing Zscaler Private Access (ZPA) logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZPA_CL`](../tables/zpa-cl.md) | ✓ | ✓ | ✓ |

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

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Zscaler and Microsoft Sentinel Deployment Guide](https://help.zscaler.com/zscaler-technology-partners/zscaler-and-microsoft-sentinel-deployment-guide)
- [Developer](https://www.bluevoyant.com)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

