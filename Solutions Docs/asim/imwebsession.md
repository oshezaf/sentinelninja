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
| Apache HTTP Server | [_Im_WebSession_ApacheHTTPServer](vimwebsessionapachehttpserver.md) |
| Azure Firewall | [_Im_WebSession_AzureFirewall](vimwebsessionazurefirewall.md) |
| Barracuda WAF | [_Im_WebSession_BarracudaCEF](vimwebsessionbarracudacef.md) |
| Barracuda WAF | [_Im_WebSession_BarracudaWAF](vimwebsessionbarracudawaf.md) |
| Cisco Firepower | [_Im_WebSession_CiscoFirepower](vimwebsessionciscofirepower.md) |
| Cisco Meraki | [_Im_WebSession_CiscoMeraki](vimwebsessionciscomeraki.md) |
| Citrix NetScaler | [_Im_WebSession_CitrixNetScaler](vimwebsessioncitrixnetscaler.md) |
| F5 BIG-IP Application Security Manager (ASM) | [_Im_WebSession_F5ASM](vimwebsessionf5asm.md) |
| Fortinet FortiGate | [_Im_WebSession_FortinetFortiGate](vimwebsessionfortinetfortigate.md) |
| Internet Information Services (IIS) | [_Im_WebSession_IIS](vimwebsessioniis.md) |
| Native | [_Im_WebSession_Native](vimwebsessionnative.md) |
| Palo Alto Networks | [_Im_WebSession_PaloAltoCEF](vimwebsessionpaloaltocef.md) |
| Palo Alto Cortex Data Lake | [_Im_WebSession_PaloAltoCortexDataLake](vimwebsessionpaloaltocortexdatalake.md) |
| SonicWall | [_Im_WebSession_SonicWallFirewall](vimwebsessionsonicwallfirewall.md) |
| Squid Proxy | [_Im_WebSession_SquidProxy](vimwebsessionsquidproxy.md) |
| Vectra AI Streams | [_Im_WebSession_VectraAI](vimwebsessionvectraai.md) |
| Zscaler ZIA Proxy | [_Im_WebSession_ZscalerZIA](vimwebsessionzscalerzia.md) |
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

