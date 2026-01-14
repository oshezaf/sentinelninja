# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Authentication parser for CrowdStrike Falcon Endpoint Protection

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationCrowdStrikeFalconHost` |
| **Built-in Parser** | `_ASim_Authentication_CrowdStrikeFalconHost` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Endpoint Protection |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 26 2023 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationCrowdStrikeFalconHost.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationCrowdStrikeFalconHost.yaml) |

## Description

This ASIM parser supports normalizing CrowdStrike Falcon Endpoint Protection logs to the ASIM Authentication normalized schema. These events are captured through CrowdStrike Falcon Endpoint Protection data connector which allows you to easily connect your CrowdStrike Falcon Event Stream with Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [CrowdStrike Falcon Endpoint Protection Documentation](https://falcon.us-2.crowdstrike.com/documentation/page/d88d9ed6/streaming-api-event-dictionary https://falcon.us-2.crowdstrike.com/documentation/page/eb1587d1/siem-connector#mc98af8f)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

