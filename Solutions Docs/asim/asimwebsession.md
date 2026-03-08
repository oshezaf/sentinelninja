# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSession` |
| **Built-in Parser** | `_ASim_WebSession` |
| **Schema** | WebSession |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.5.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSession.md)) |
| **Last Updated** | May 21, 2024 |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSession.yaml) |

## Description

This ASIM parser supports normalizing Web Session logs from all supported sources to the ASIM Web Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Apache HTTP Server | [_ASim_WebSession_ApacheHTTPServer](asimwebsessionapachehttpserver.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Azure Firewall | [_ASim_WebSession_AzureFirewall](asimwebsessionazurefirewall.md) |  |
| Barracuda WAF | [_ASim_WebSession_BarracudaCEF](asimwebsessionbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Barracuda WAF | [_ASim_WebSession_BarracudaWAF](asimwebsessionbarracudawaf.md) |  |
| Cisco Firepower | [_ASim_WebSession_CiscoFirepower](asimwebsessionciscofirepower.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Meraki | [_ASim_WebSession_CiscoMeraki](asimwebsessionciscomeraki.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md)<br>[CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md)<br>[Forescout (Legacy)](../solutions/forescout-legacy.md) |
| Citrix NetScaler | [_ASim_WebSession_CitrixNetScaler](asimwebsessioncitrixnetscaler.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| F5 BIG-IP Application Security Manager (ASM) | [_ASim_WebSession_F5ASM](asimwebsessionf5asm.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Fortinet FortiGate | [_ASim_WebSession_FortinetFortiGate](asimwebsessionfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Internet Information Services (IIS) | [_ASim_WebSession_IIS](asimwebsessioniis.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| Native | [_ASim_WebSession_Native](asimwebsessionnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) |
| Palo Alto Networks | [_ASim_WebSession_PaloAltoCEF](asimwebsessionpaloaltocef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto Cortex Data Lake | [_ASim_WebSession_PaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| SonicWall | [_ASim_WebSession_SonicWallFirewall](asimwebsessionsonicwallfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Squid Proxy | [_ASim_WebSession_SquidProxy](asimwebsessionsquidproxy.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Vectra AI Streams | [_ASim_WebSession_VectraAI](asimwebsessionvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| Zscaler ZIA | [_ASim_WebSession_ZscalerZIA](asimwebsessionzscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimWebSessionApacheHTTPServer`](../asim/asimwebsessionapachehttpserver.md) | ? | ? | ? |
| [`ASimWebSessionAzureFirewall`](../asim/asimwebsessionazurefirewall.md) | ? | ? | ? |
| [`ASimWebSessionBarracudaCEF`](../asim/asimwebsessionbarracudacef.md) | ? | ? | ? |
| [`ASimWebSessionBarracudaWAF`](../asim/asimwebsessionbarracudawaf.md) | ? | ? | ? |
| [`ASimWebSessionCiscoFirepower`](../asim/asimwebsessionciscofirepower.md) | ? | ? | ? |
| [`ASimWebSessionCiscoMeraki`](../asim/asimwebsessionciscomeraki.md) | ? | ? | ? |
| [`ASimWebSessionCitrixNetScaler`](../asim/asimwebsessioncitrixnetscaler.md) | ? | ? | ? |
| [`ASimWebSessionF5ASM`](../asim/asimwebsessionf5asm.md) | ? | ? | ? |
| [`ASimWebSessionFortinetFortiGate`](../asim/asimwebsessionfortinetfortigate.md) | ? | ? | ? |
| [`ASimWebSessionIIS`](../asim/asimwebsessioniis.md) | ? | ? | ? |
| [`ASimWebSessionNative`](../asim/asimwebsessionnative.md) | ? | ? | ? |
| [`ASimWebSessionPaloAltoCEF`](../asim/asimwebsessionpaloaltocef.md) | ? | ? | ? |
| [`ASimWebSessionPaloAltoCortexDataLake`](../asim/asimwebsessionpaloaltocortexdatalake.md) | ? | ? | ? |
| [`ASimWebSessionSonicWallFirewall`](../asim/asimwebsessionsonicwallfirewall.md) | ? | ? | ? |
| [`ASimWebSessionSquidProxy`](../asim/asimwebsessionsquidproxy.md) | ? | ? | ? |
| [`ASimWebSessionVectraAI`](../asim/asimwebsessionvectraai.md) | ? | ? | ? |
| [`ASimWebSessionZscalerZIA`](../asim/asimwebsessionzscalerzia.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM WebSession Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

