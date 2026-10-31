# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Alert Event ASIM parser for AWS GuardDuty

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAlertEventAWSGuardDuty` |
| **Built-in Parser** | `_ASim_AlertEvent_AWSGuardDuty` |
| **Schema** | AlertEvent |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | AWS GuardDuty |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAlertEvent/CHANGELOG/ASimAlertEventAWSGuardDuty.md)) |
| **Last Updated** | Sep 09, 2026 |
| **Unifying Parser** | [ASimAlertEvent](asimalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\ASimAlertEventAWSGuardDuty.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/ASimAlertEventAWSGuardDuty.yaml) |

## Description

This ASIM parser supports normalizing findings from the AWSGuardDuty table to the ASIM AlertEvent schema. It maps finding identity, severity, lifecycle, affected resource, user, action, and threat context while preserving the source details in optional packed fields.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AWSGuardDuty`](../tables/awsguardduty.md) | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM Alert Event Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [AWS GuardDuty finding format](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

