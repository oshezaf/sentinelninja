# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Microsoft Defender for IoT micro agent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionMD4IoTAgent` |
| **Built-in Parser** | `_ASim_NetworkSession_MD4IoTAgent` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for IoT |
| **Parser Version** | 0.2.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionMD4IoTAgent.md)) |
| **Last Updated** | Oct 31, 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionMD4IoTAgent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionMD4IoTAgent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Defender for IoT micro agent logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | ✓ | ✗ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

