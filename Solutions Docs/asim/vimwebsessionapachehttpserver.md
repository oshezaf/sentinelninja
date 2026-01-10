# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM Filtering parser for Apache HTTP Server

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionApacheHTTPServer` |
| **Built-in Parser** | `_Im_WebSession_ApacheHTTPServer` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Apache HTTP Server |
| **Parser Version** | 0.1 |
| **Last Updated** | Jun 19, 2023 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionApacheHTTPServer.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionApacheHTTPServer.yaml) |

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
- [Apache HTTP Server](https://httpd.apache.org/docs/2.4/logs.html)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

