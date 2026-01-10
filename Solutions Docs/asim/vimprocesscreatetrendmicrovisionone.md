# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create ASIM parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessCreateTrendMicroVisionOne` |
| **Built-in Parser** | `_Im_ProcessCreate_TrendMicroVisionOne` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Trend Micro Vision One |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 10, 2023 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessCreateTrendMicroVisionOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessCreateTrendMicroVisionOne.yaml) |

## Description

This ASIM parser supports normalizing Trend Micro Vision One logs to the ASIM Process Create normalized schema. Trend Micro Vision One events are captured through Trend Vision One data connector which ingests XDR logs into Microsoft Sentinel through the Trend Vision One API.

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
| `commandline_has_any` | dynamic | dynamic([]) |
| `commandline_has_all` | dynamic | dynamic([]) |
| `commandline_has_any_ip_prefix` | dynamic | dynamic([]) |
| `actingprocess_has_any` | dynamic | dynamic([]) |
| `targetprocess_has_any` | dynamic | dynamic([]) |
| `parentprocess_has_any` | dynamic | dynamic([]) |
| `targetusername_has` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `eventtype` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Trend Micro Vision One documentation](https://docs.trendmicro.com/en-us/enterprise/trend-vision-one/xdr-part/search-app/data-mapping-intro/data-mapping-detecti.aspx https://docs.trendmicro.com/en-us/enterprise/trend-vision-one/xdr-part/search-app/data-mapping-intro/data-mapping-endpoin.aspx https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques-Pipeline/paths/~1v3.0~1oat~1dataPipelines~1%7Bid%7D~1packages~1%7BpackageId%7D/get https://automation.trendmicro.com/xdr/api-v3#tag/Observed-Attack-Techniques/paths/~1v3.0~1oat~1detections/get)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

