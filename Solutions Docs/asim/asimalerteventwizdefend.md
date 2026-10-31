# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Alert Event ASIM parser for Wiz Defend (WizDetectionsV3_CL)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventWizDefend` |
| **Built-in Parser** | `_ASim_AlertEvent_WizDefend` |
| **Schema** | AlertEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Wiz Defend |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEventWizDefend.md)) |
| **Last Updated** | Sep 17, 2026 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventWizDefend.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventWizDefend.yaml) |

## Description

This ASIM parser supports normalizing Wiz Defend threat detection events, stored in the WizDetectionsV3_CL table, to the ASIM Alert Event normalized schema. Wiz Defend is Wiz's cloud threat detection and response (TDR) capability. Detections originating from WIZ and WIZ_SENSOR (third party sources like AWS GuardDuty are filtered out) sources are all normalized under this parser.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WizDetectionsV3_CL`](../tables/wizdetectionsv3-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [WizSentinel](../connectors/wizsentinel.md) | [Wiz](../solutions/wiz.md) |

**Solutions:** [Wiz](../solutions/wiz.md)

## References

- [ASIM Alert Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Wiz Docs](https://docs.wiz.io/docs/microsoft-sentinel-integration)
- [Developer](https://www.bluevoyant.com/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

