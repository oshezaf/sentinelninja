# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Alert Event ASIM parser for Wiz Cloud (WizIssuesV3_CL)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventWizCloud` |
| **Built-in Parser** | `_ASim_AlertEvent_WizCloud` |
| **Schema** | AlertEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Wiz Cloud |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEventWizCloud.md)) |
| **Last Updated** | Sep 17, 2026 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventWizCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventWizCloud.yaml) |

## Description

This ASIM parser supports normalizing Wiz Cloud issues, stored in the WizIssuesV3_CL table, to the ASIM Alert Event normalized schema. WizIssuesV3_CL represents Wiz's unified Issues engine, covering cloud configuration findings, control failures, toxic combinations of risk factors, and correlated threat detections. EventSubType is derived per-row: THREAT_DETECTION issues, and TOXIC_COMBINATION issues whose rule name matches a confirmed-exploit keyword list, are normalized as "Threat". All other issues (cloud configuration/posture findings, control failures, and predictive/reachability-only toxic combinations) are normalized as "Compliance Violation".

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WizIssuesV3_CL`](../tables/wizissuesv3-cl.md) | ? | ✓ | ? |

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

