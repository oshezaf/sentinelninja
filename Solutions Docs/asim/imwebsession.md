# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imWebSession` |
| **Built-in Parser** | `_Im_WebSession` |
| **Schema** | WebSession |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.6.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/imWebSession.md)) |
| **Last Updated** | May 21 2024 |
| **Source File** | [Parsers\ASimWebSession\Parsers\imWebSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/imWebSession.yaml) |

## Description

This ASIM parser supports filtering and normalizing Web Session logs from all supported sources to the ASIM Web Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Apache HTTP Server | [_Im_WebSession_ApacheHTTPServer](asimwebsessionapachehttpserver.md) |
| Azure Firewall | [_Im_WebSession_AzureFirewall](asimwebsessionazurefirewall.md) |
| Barracuda WAF | [_Im_WebSession_BarracudaCEF](asimwebsessionbarracudacef.md) |
| Barracuda WAF | [_Im_WebSession_BarracudaWAF](asimwebsessionbarracudawaf.md) |
| Cisco Firepower | [_Im_WebSession_CiscoFirepower](asimwebsessionciscofirepower.md) |
| Cisco Meraki | [_Im_WebSession_CiscoMeraki](asimwebsessionciscomeraki.md) |
| Citrix NetScaler | [_Im_WebSession_CitrixNetScaler](asimwebsessioncitrixnetscaler.md) |
| F5 BIG-IP Application Security Manager (ASM) | [_Im_WebSession_F5ASM](asimwebsessionf5asm.md) |
| Fortinet FortiGate | [_Im_WebSession_FortinetFortiGate](asimwebsessionfortinetfortigate.md) |
| Internet Information Services (IIS) | [_Im_WebSession_IIS](asimwebsessioniis.md) |
| Native | [_Im_WebSession_Native](asimwebsessionnative.md) |
| Palo Alto Networks | [_Im_WebSession_PaloAltoCEF](asimwebsessionpaloaltocef.md) |
| Palo Alto Cortex Data Lake | [_Im_WebSession_PaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) |
| SonicWall | [_Im_WebSession_SonicWallFirewall](asimwebsessionsonicwallfirewall.md) |
| Squid Proxy | [_Im_WebSession_SquidProxy](asimwebsessionsquidproxy.md) |
| Vectra AI Streams | [_Im_WebSession_VectraAI](asimwebsessionvectraai.md) |
| Zscaler ZIA | [_Im_WebSession_ZscalerZIA](asimwebsessionzscalerzia.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

