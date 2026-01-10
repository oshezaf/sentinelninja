# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser for Trend Micro Vision One

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimRegistryEventTrendMicroVisionOne` |
| **Built-in Parser** | `_Im_RegistryEvent_TrendMicroVisionOne` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Trend Micro Vision One |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 12, 2023 |
| **Unifying Parser** | [imRegistry](imregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\vimRegistryEventTrendMicroVisionOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/vimRegistryEventTrendMicroVisionOne.yaml) |

## Description

This ASIM parser supports normalizing Trend Micro Vision One logs to the ASIM Registry Event normalized schema. Trend Micro Vision One events are captured through Trend Vision One data connector which ingests XDR logs into Microsoft Sentinel through the Trend Vision One API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `registrykey_has_any` | dynamic | dynamic([]) |
| `registryvalue_has_any` | dynamic | dynamic([]) |
| `registryvaluedata_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Trend Micro Vision One documentation](https://docs.trendmicro.com/en-us/enterprise/trend-vision-one/xdr-part/search-app/data-mapping-intro/data-mapping-detecti.aspx https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques-Pipeline/paths/~1v3.0~1oat~1dataPipelines~1%7Bid%7D~1packages~1%7BpackageId%7D/get https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques/paths/~1v3.0~1oat~1detections/get)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

