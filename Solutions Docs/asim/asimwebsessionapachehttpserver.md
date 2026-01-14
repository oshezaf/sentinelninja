# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Apache HTTP Server

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionApacheHTTPServer` |
| **Built-in Parser** | `_ASim_WebSession_ApacheHTTPServer` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Apache HTTP Server |
| **Parser Version** | 0.1 |
| **Last Updated** | Jun 19, 2023 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionApacheHTTPServer.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionApacheHTTPServer.yaml) |

## Description

This ASIM parser supports filtering and normalizing Apache HTTP Server logs produced by the Microsoft Sentinel Apache connector to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Apache HTTP Server](https://httpd.apache.org/docs/2.4/logs.html)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

