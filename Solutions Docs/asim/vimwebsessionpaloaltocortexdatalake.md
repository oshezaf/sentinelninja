# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Palo Alto Cortex Data Lake

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionPaloAltoCortexDataLake` |
| **Built-in Parser** | `_Im_WebSession_PaloAltoCortexDataLake` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Palo Alto Cortex Data Lake |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jan 22 2024 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionPaloAltoCortexDataLake.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionPaloAltoCortexDataLake.yaml) |

## Description

This ASIM parser supports normalizing Palo Alto Cortex Data Lake logs to the ASIM Web Session normalized schema. These events are captured through the Palo Alto Networks CDL data connector that ingests CDL logs into Microsoft Sentinel.

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
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `url_has_any` | dynamic | dynamic([]) |
| `httpuseragent_has_any` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Palo Alto Cortex Data Lake Documentation](https://docs.paloaltonetworks.com/cortex/cortex-data-lake/log-forwarding-schema-reference/network-logs/network-url-log)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

