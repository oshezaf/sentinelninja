# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Alert Event ASIM parser for Netskope Security Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventNetskopeSecurityCloud` |
| **Built-in Parser** | `_ASim_AlertEvent_NetskopeSecurityCloud` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Netskope Security Cloud |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEventNetskopeSecurityCloud.md)) |
| **Last Updated** | Oct 5, 2026 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventNetskopeSecurityCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventNetskopeSecurityCloud.yaml) |

## Description

This ASIM parser supports normalizing the Netskope Security Cloud logs (via Codeless Connector Framework by Tim Groothuis) to the ASIM Alert normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAlerts_CL`](../tables/netskopealerts-cl.md) | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [NetskopeAlertsEvents](../connectors/netskopealertsevents.md) | [Netskopev2](../solutions/netskopev2.md) |

**Solutions:** [Netskopev2](../solutions/netskopev2.md)

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Developer](https://www.bluevoyant.com/)
- [Netskope Data Connector](https://gist.githubusercontent.com/mitchellgulledge2/1a91f1aec2fc9ff6e053fb32cb1de897/raw/bc9f580e9c5c0234e72a383efd5ff6d28f05b496/sentinel_ccp_arm.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

