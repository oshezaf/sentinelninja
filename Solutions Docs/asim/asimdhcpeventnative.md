# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dhcp Event ASIM parser for Microsoft Sentinel native Dhcp Event table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDhcpEventNative` |
| **Built-in Parser** | `_ASim_DhcpEvent_Native` |
| **Schema** | DhcpEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Mar 12 2024 |
| **Unifying Parser** | [ASimDhcpEvent](asimdhcpevent.md) |
| **Source File** | [Parsers\ASimDhcpEvent\Parsers\ASimDhcpEventNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDhcpEvent/Parsers/ASimDhcpEventNative.yaml) |

## Description

This ASIM parser supports normalizing the native Dhcp Event table (ASimDhcpEventLogs) to the ASIM Dhcp Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Dhcp Event Schema](https://aka.ms/ASimDhcpEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

