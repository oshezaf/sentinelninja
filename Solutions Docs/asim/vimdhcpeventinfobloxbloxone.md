# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DhcpEvent ASIM parser for Infoblox BloxOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDhcpEventInfobloxBloxOne` |
| **Built-in Parser** | `_Im_DhcpEvent_InfobloxBloxOne` |
| **Schema** | DhcpEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox BloxOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 11, 2024 |
| **Unifying Parser** | [imDhcpEvent](imdhcpevent.md) |
| **Source File** | [Parsers\ASimDhcpEvent\Parsers\vimDhcpEventInfobloxBloxOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDhcpEvent/Parsers/vimDhcpEventInfobloxBloxOne.yaml) |

## Description

This ASIM parser supports normalizing DhcpEvent logs from Infoblox BloxOne to the ASIM DhcpEvent normalized schema. These events are captured through the Azure Monitor Agent (AMA) which are sent by the Data Connector Service of Infoblox BloxOne.

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
| `srchostname_has_any` | dynamic | dynamic([]) |
| `srcusername_has_any` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM DhcpEvent Schema](https://aka.ms/ASimDhcpEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Infoblox BloxOne Documentation](https://docs.infoblox.com/space/BloxOneThreatDefense)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

