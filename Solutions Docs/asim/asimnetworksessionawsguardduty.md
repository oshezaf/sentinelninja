# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Network Session ASIM parser for AWS GuardDuty findings

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionAWSGuardDuty` |
| **Built-in Parser** | `_ASim_NetworkSession_AWSGuardDuty` |
| **Schema** | NetworkSession |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | AWS GuardDuty |
| **Parser Version** | 0.1.5 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionAWSGuardDuty.md)) |
| **Last Updated** | Sep 15, 2026 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionAWSGuardDuty.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionAWSGuardDuty.yaml) |

## Description

This ASIM parser supports normalizing AWS GuardDuty findings that carry network context (service.action.networkConnectionAction or service.action.awsApiCallAction) to the ASIM Network Session normalized schema. Findings are ingested through the Microsoft Sentinel AWS S3 connector into the AWSGuardDuty table; findings without network context (for example, pure S3 policy or EKS control-plane findings) are filtered out by this parser and are better served by AssumedRole/S3/EKS-specific content.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AWSGuardDuty`](../tables/awsguardduty.md) |  | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Amazon GuardDuty finding types](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html)
- [Amazon GuardDuty finding format](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-format.html)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

