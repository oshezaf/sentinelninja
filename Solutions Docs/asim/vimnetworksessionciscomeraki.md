# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Cisco Meraki

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionCiscoMeraki` |
| **Built-in Parser** | `_Im_NetworkSession_CiscoMeraki` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Meraki |
| **Parser Version** | 1.2.2 |
| **Last Updated** | Jun 26, 2025 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md), [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionCiscoMeraki.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionCiscoMeraki.yaml) |

## Description

This ASIM parser supports normalizing Cisco Meraki logs ingested in 'meraki_CL' to the ASIM Network Session normalized schema. Cisco Meraki events are generated from network activity and security events from Meraki devices such as firewalls, switches, and access points. These logs are captured through the Cisco Meraki Sentinel connector which uses a Linux agent to collect logs in Syslog format.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Update](../tables/update.md) |
| [meraki_CL](../tables/meraki-cl.md) |

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
- [ASIM](https://aka.ms/AboutASIM)
- [Cisco Meraki Documentation](https://documentation.meraki.com/General_Administration/Monitoring_and_Reporting/Syslog_Event_Types_and_Log_Samples)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

