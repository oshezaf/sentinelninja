# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSession` |
| **Built-in Parser** | `_ASim_WebSession` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.7 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.5.5 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSession.md)) |
| **Last Updated** | Mar 24, 2026 |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSession.yaml) |

## Description

This ASIM parser supports normalizing Web Session logs from all supported sources to the ASIM Web Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Apache HTTP Server | [_ASim_WebSession_ApacheHTTPServer](asimwebsessionapachehttpserver.md) | [ApacheHTTPServer (legacy connector)](../solutions/apachehttpserver.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Azure Firewall | [_ASim_WebSession_AzureFirewall](asimwebsessionazurefirewall.md) |  |
| Barracuda WAF | [_ASim_WebSession_BarracudaCEF](asimwebsessionbarracudacef.md) | [Barracuda WAF (legacy connector)](../solutions/barracuda-waf.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Barracuda WAF | [_ASim_WebSession_BarracudaWAF](asimwebsessionbarracudawaf.md) |  |
| Cisco Firepower | [_ASim_WebSession_CiscoFirepower](asimwebsessionciscofirepower.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Meraki | [_ASim_WebSession_CiscoMeraki](asimwebsessionciscomeraki.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md)<br>[Cisco UCS (legacy connector)](../solutions/cisco-ucs.md)<br>[Citrix ADC (legacy connector)](../solutions/citrix-adc.md)<br>[CustomLogsAma](../solutions/customlogsama.md)<br>[Forescout (Legacy)](../solutions/forescout-legacy.md)<br>[RSA SecurID (legacy connector)](../solutions/rsa-securid.md)<br>[Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md) |
| Cisco Umbrella | [_ASim_WebSession_CiscoUmbrella](asimwebsessionciscoumbrella.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| Citrix NetScaler | [_ASim_WebSession_CitrixNetScaler](asimwebsessioncitrixnetscaler.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| F5 BIG-IP Application Security Manager (ASM) | [_ASim_WebSession_F5ASM](asimwebsessionf5asm.md) | [Common Event Format](../solutions/common-event-format.md)<br>[F5 Networks (legacy connector)](../solutions/f5-networks.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Fortinet FortiGate | [_ASim_WebSession_FortinetFortiGate](asimwebsessionfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel (legacy connector)](../solutions/fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Internet Information Services (IIS) | [_ASim_WebSession_IIS](asimwebsessioniis.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| Native | [_ASim_WebSession_Native](asimwebsessionnative.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| Palo Alto Networks | [_ASim_WebSession_PaloAltoCEF](asimwebsessionpaloaltocef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[PaloAlto-PAN-OS (legacy connector)](../solutions/paloalto-pan-os.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto Cortex Data Lake | [_ASim_WebSession_PaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[PaloAltoCDL (legacy connector)](../solutions/paloaltocdl.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| SonicWall | [_ASim_WebSession_SonicWallFirewall](asimwebsessionsonicwallfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Squid Proxy | [_ASim_WebSession_SquidProxy](asimwebsessionsquidproxy.md) | [CustomLogsAma](../solutions/customlogsama.md) |
| Vectra AI Streams | [_ASim_WebSession_VectraAI](asimwebsessionvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| Zscaler ZIA | [_ASim_WebSession_ZscalerZIA](asimwebsessionzscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM WebSession Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

