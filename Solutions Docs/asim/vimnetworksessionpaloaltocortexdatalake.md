# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Palo Alto Cortex Data Lake

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionPaloAltoCortexDataLake` |
| **Built-in Parser** | `_Im_NetworkSession_PaloAltoCortexDataLake` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Palo Alto Cortex Data Lake |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Mar 07 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionPaloAltoCortexDataLake.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionPaloAltoCortexDataLake.yaml) |

## Description

This ASIM parser supports normalizing NetworkSession logs from Palo Alto Cortex Data Lake to the ASIM NetworkSession normalized schema. These events are captured through the Palo Alto Networks CDL data connector that ingests CDL logs into Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstportnumber` | int | int(null) |
| `dvcaction` | dynamic | dynamic([]) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- https://docs.paloaltonetworks.com/cortex/cortex-data-lake/log-forwarding-schema-reference/network-logs/network-traffic-log

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

