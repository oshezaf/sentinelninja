# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dns ASIM parser for Infoblox BloxOne

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsInfobloxBloxOne` |
| **Built-in Parser** | `_ASim_Dns_InfobloxBloxOne` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox BloxOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 11, 2024 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsInfobloxBloxOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsInfobloxBloxOne.yaml) |

## Description

This ASIM parser supports normalizing Dns logs from Infoblox BloxOne to the ASIM Dns normalized schema. These events are captured through the Azure Monitor Agent (AMA) which are sent by the Data Connector Service of Infoblox BloxOne.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Dns Schema](https://aka.ms/ASimDnsDoc)
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

