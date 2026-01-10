# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Cisco Firepower

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionCiscoFirepower` |
| **Built-in Parser** | `_Im_NetworkSession_CiscoFirepower` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Firepower |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 30, 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionCiscoFirepower.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionCiscoFirepower.yaml) |

## Description

This ASIM parser supports normalizing commonly used Cisco Firepower messages collected using the CEF Data Connector to the ASIM Network Session normalized schema.

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
- [Cisco Firepower Documentation](https://github.com/CiscoSecurity/fp-05-firepower-cli/tree/master/estreamer https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/eStreamer/EventStreamerIntegrationGuide/IS-DCRecords.html#12231 https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/eStreamer/EventStreamerIntegrationGuide/IS-DCRecords.html#88152 https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/eStreamer/EventStreamerIntegrationGuide/RNA-Records.html#48231)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

