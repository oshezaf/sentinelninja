# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM filtering parser for Fortinet FortiGate

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimWebSessionFortinetFortiGate` |
| **Built-in Parser** | `_Im_WebSession_FortinetFortiGate` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Fortinet FortiGate |
| **Parser Version** | 0.3.0 |
| **Last Updated** | Sep 12, 2025 |
| **Unifying Parser** | [imWebSession](imwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\vimWebSessionFortinetFortiGate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/vimWebSessionFortinetFortiGate.yaml) |

## Description

This ASIM parser supports filtering and normalizing Fortinet FortiGate logs produced by the Microsoft Sentinel Fortinet connector to the ASIM Web Session normalized schema.

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
- [ASIM](https://aka.ms/AboutASIM)
- [web log fields](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/400992)
- [Fortinet FortiGate CEF setup](https://community.fortinet.com/t5/FortiGate/Technical-Tip-Integrate-FortiGate-with-Microsoft-Sentinel/ta-p/199709)
- [Fortinet FortiGate syslogd documentation](https://docs.fortinet.com/document/fortigate/7.2.0/cli-reference/450620/config-log-syslogd-setting)
- [Fortinet FortiGate extended logging for user agent, http method and x-forwarded-for](https://docs.fortinet.com/document/fortigate/7.4.0/fortios-log-message-reference/496081/enabling-extended-logging)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

