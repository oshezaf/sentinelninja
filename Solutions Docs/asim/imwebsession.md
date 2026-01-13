# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imWebSession` |
| **Built-in Parser** | `_Im_WebSession` |
| **Schema** | WebSession |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.6.2 |
| **Last Updated** | May 21 2024 |
| **Source File** | [Parsers\ASimWebSession\Parsers\imWebSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/imWebSession.yaml) |

## Description

This ASIM parser supports filtering and normalizing Web Session logs from all supported sources to the ASIM Web Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_WebSession_ApacheHTTPServer](im-websession-apachehttpserver.md) |
|  | [_Im_WebSession_AzureFirewall](im-websession-azurefirewall.md) |
|  | [_Im_WebSession_BarracudaCEF](im-websession-barracudacef.md) |
|  | [_Im_WebSession_BarracudaWAF](im-websession-barracudawaf.md) |
|  | [_Im_WebSession_CiscoFirepower](im-websession-ciscofirepower.md) |
|  | [_Im_WebSession_CiscoMeraki](im-websession-ciscomeraki.md) |
|  | [_Im_WebSession_CitrixNetScaler](im-websession-citrixnetscaler.md) |
|  | [_Im_WebSession_F5ASM](im-websession-f5asm.md) |
|  | [_Im_WebSession_FortinetFortiGate](im-websession-fortinetfortigate.md) |
|  | [_Im_WebSession_IIS](im-websession-iis.md) |
|  | [_Im_WebSession_Native](im-websession-native.md) |
|  | [_Im_WebSession_PaloAltoCEF](im-websession-paloaltocef.md) |
|  | [_Im_WebSession_PaloAltoCortexDataLake](im-websession-paloaltocortexdatalake.md) |
|  | [_Im_WebSession_SonicWallFirewall](im-websession-sonicwallfirewall.md) |
|  | [_Im_WebSession_SquidProxy](im-websession-squidproxy.md) |
|  | [_Im_WebSession_VectraAI](im-websession-vectraai.md) |
|  | [_Im_WebSession_ZscalerZIA](im-websession-zscalerzia.md) |
|  | [_Im_WebSesssion_Empty](im-websesssion-empty.md) |

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
| `eventresultdetails_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM WebSession Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

