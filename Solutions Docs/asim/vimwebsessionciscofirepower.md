# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser for Cisco Firepower

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionCiscoFirepower` |
| **Built-in Parser** | `_Im_WebSession_CiscoFirepower` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Firepower |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 30 2023 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionCiscoFirepower.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionCiscoFirepower.yaml) |

## Description

This ASIM parser supports normalizing commonly used Cisco Firepower messages collected using the CEF Data Connector to the ASIM WebSession normalized schema.

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
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `url_has_any` | dynamic | dynamic([]) |
| `httpuseragent_has_any` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Cisco Firepower Documentation](https://github.com/CiscoSecurity/fp-05-firepower-cli/tree/master/estreamer https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/eStreamer/EventStreamerIntegrationGuide/IS-DCRecords.html#88027 https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/eStreamer/EventStreamerIntegrationGuide/IS-DCRecords.html#84248)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

