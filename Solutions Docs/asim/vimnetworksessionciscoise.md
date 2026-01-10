# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for Cisco ISE

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionCiscoISE` |
| **Built-in Parser** | `_Im_NetworkSession_CiscoISE` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco ISE |
| **Parser Version** | 1.1.0 |
| **Last Updated** | July 10, 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionCiscoISE.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionCiscoISE.yaml) |

## Description

This ASIM parser supports normalizing Cisco ISE Events produced by the Microsoft Sentinel Cisco ISE connector to the ASIM Network Session normalized schema.

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
- [Organization Application Security Events](https://www.cisco.com/c/en/us/td/docs/security/ise/3-2/admin_guide/b_ise_admin_3_2/b_ISE_admin_32_maintain_monitor.html#ID58)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

