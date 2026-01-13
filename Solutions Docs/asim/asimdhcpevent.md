# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dhcp event ASIM parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDhcpEvent` |
| **Built-in Parser** | `_ASim_DhcpEvent` |
| **Schema** | DhcpEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Mar 11, 2024 |
| **Source File** | [Parsers\ASimDhcpEvent\Parsers\ASimDhcpEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDhcpEvent/Parsers/ASimDhcpEvent.yaml) |

## Description

This ASIM parser supports normalizing Dhcp event logs from all supported sources to the ASIM Dhcp Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Infoblox BloxOne | [_ASim_DhcpEvent_InfobloxBloxOne](asimdhcpeventinfobloxbloxone.md) |
| Native | [_ASim_DhcpEvent_Native](asimdhcpeventnative.md) |
|  | [_Im_DhcpEvent_Empty](im-dhcpevent-empty.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Dhcp Event Schema](https://aka.ms/ASimDhcpEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

