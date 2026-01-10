# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSession ASIM Parser for Illumio SaaS Core

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionIllumioSaaSCore` |
| **Built-in Parser** | `_Im_NetworkSession_IllumioSaaSCore` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Illumio SaaS Core |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Aug 21, 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionIllumioSaaSCore.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionIllumioSaaSCore.yaml) |

## Description

This ASIM parser supports normalizing Illumio SaaS Core logs to the ASIM Network Session normalized schema. These events are captured through Illumio Sentinel Integration data connector.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md) |

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
- [Illumio SaaS Core Documentation](https://docs.illumio.com/core/24.1/Content/Guides/events-administration/events-described/list-of-event-types.htm)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

