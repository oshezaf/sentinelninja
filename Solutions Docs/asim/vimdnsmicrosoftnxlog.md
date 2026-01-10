# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser for Microsoft DNS logs collected using NXlog

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDnsMicrosoftNXlog` |
| **Built-in Parser** | `_Im_Dns_MicrosoftNXlog` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | MS DNS Events |
| **Parser Version** | 0.5.0 |
| **Last Updated** | Sep 06 2023 |
| **Unifying Parser** | [imDns](imdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\vimDnsMicrosoftNXlog.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/vimDnsMicrosoftNXlog.yaml) |

## Description

This ASIM parser supports filtering and normalizing Microsoft DNS logs, collected using NXlog, to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr` | string | * |
| `domain_has_any` | dynamic | dynamic([]) |
| `responsecodename` | string | * |
| `response_has_ipv4` | string | * |
| `response_has_any_prefix` | dynamic | dynamic([]) |
| `eventtype` | string | Query |
| `disabled` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Resource Record (RR) TYPEs](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

