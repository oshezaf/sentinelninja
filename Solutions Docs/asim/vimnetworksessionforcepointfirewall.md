# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Force Point Firewall

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionForcePointFirewall` |
| **Built-in Parser** | `_Im_NetworkSession_ForcePointFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | ForcePointFirewall |
| **Parser Version** | 0.1 |
| **Last Updated** | March 28, 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionForcePointFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionForcePointFirewall.yaml) |

## Description

This ASIM parser supports normalizing Force Point Firewall logs coming from CEF Data Connector to the ASIM Network Session normalized schema.ParserName: vimNetworkSessionForcePointFirewall

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
| `hostname_has_any` | dynamic | dynamic([]) |
| `dvcaction` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Field Description in Force Point Logs](https://help.stonesoft.com/onlinehelp/StoneGate/SMC/6.8.0/GUID-DA3B3807-18E1-482B-A5E8-A8BD468E5BB0.html)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

