# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser for Windows IIS logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionIIS` |
| **Built-in Parser** | `_Im_WebSession_IIS` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Internet Information Services (IIS) |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Apr 19, 2023 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionIIS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionIIS.yaml) |

## Description

This ASIM parser supports filtering and normalizing IIS logs produced to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [W3CIISLog](../tables/w3ciislog.md) |

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
- [IIS HTTP Status Code overview](https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/www-administration-management/http-status-code)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

