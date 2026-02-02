# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser for Trend Micro Vision One

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventTrendMicroVisionOne` |
| **Built-in Parser** | `_ASim_RegistryEvent_TrendMicroVisionOne` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Trend Micro Vision One |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/ASimRegistryEventTrendMicroVisionOne.md)) |
| **Last Updated** | Oct 12, 2023 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventTrendMicroVisionOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventTrendMicroVisionOne.yaml) |

## Description

This ASIM parser supports normalizing Trend Micro Vision One logs to the ASIM Registry Event normalized schema. Trend Micro Vision One events are captured through Trend Vision One data connector which ingests XDR logs into Microsoft Sentinel through the Trend Vision One API.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [TrendMicroXDR](../connectors/trendmicroxdr.md) | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) |

**Solutions:** [Trend Micro Vision One](../solutions/trend-micro-vision-one.md)

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Trend Micro Vision One documentation](https://docs.trendmicro.com/en-us/enterprise/trend-vision-one/xdr-part/search-app/data-mapping-intro/data-mapping-detecti.aspx https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques-Pipeline/paths/~1v3.0~1oat~1dataPipelines~1%7Bid%7D~1packages~1%7BpackageId%7D/get https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques/paths/~1v3.0~1oat~1detections/get)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

