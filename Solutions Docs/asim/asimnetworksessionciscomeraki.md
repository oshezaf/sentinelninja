# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Cisco Meraki

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionCiscoMeraki` |
| **Built-in Parser** | `_ASim_NetworkSession_CiscoMeraki` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Meraki |
| **Parser Version** | 1.2.2 |
| **Last Updated** | Jun 26, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md), [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionCiscoMeraki.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionCiscoMeraki.yaml) |

## Description

This ASIM parser supports normalizing Cisco Meraki logs ingested in 'meraki_CL' table to the ASIM Network Session normalized schema. Cisco Meraki events are generated from network activity and security events from Meraki devices such as firewalls, switches, and access points. These logs are captured through the Cisco Meraki Sentinel connector which uses a Linux agent to collect logs in Syslog format.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Update](../tables/update.md) |
| [meraki_CL](../tables/meraki-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Cisco Meraki Documentation](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/Syslog_Event_Types_and_Log_Samples)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

