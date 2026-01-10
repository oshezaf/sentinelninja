# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Squid Proxy

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionSquidProxy` |
| **Built-in Parser** | `_ASim_WebSession_SquidProxy` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Squid Proxy |
| **Parser Version** | 0.4.0 |
| **Last Updated** | Jun 05, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionSquidProxy.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionSquidProxy.yaml) |

## Description

This ASIM parser supports normalizing Squid Proxy logs produced by the Microsoft Sentinel Squid Connector to the ASIM Web Session normalized schema. The parser supports squid native log format.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SquidProxy_CL](../tables/squidproxy-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Squid Proxy Connector](https://docs.microsoft.com/azure/sentinel/data-connectors-reference#squid-proxy-preview)
- [Squid native access log format](https://wiki.squid-cache.org/Features/LogFormat)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

