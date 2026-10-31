# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Alert Event ASIM parser for SentinelOne Singularity Alerts via CCF

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventSentinelOneSingularityAlerts` |
| **Built-in Parser** | `_ASim_AlertEvent_SentinelOneSingularityAlerts` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEventSentinelOneSingularityAlerts.md)) |
| **Last Updated** | Oct 5, 2026 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventSentinelOneSingularityAlerts.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventSentinelOneSingularityAlerts.yaml) |

## Description

This ASIM parser supports normalizing the SentinelOne Singularity Alerts ingested in SentinelOneAlerts_CL table (via Codeless Connector Framework) to the ASIM Alert normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SentinelOne](../connectors/sentinelone.md) | [SentinelOne (legacy connector)](../solutions/sentinelone.md) |

**Solutions:** [SentinelOne (legacy connector)](../solutions/sentinelone.md)

## References

- [ASIM Alert Event Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

