# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser for GCP

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDnsGcp` |
| **Built-in Parser** | `_Im_Dns_Gcp` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | GCP Cloud DNS |
| **Parser Version** | 0.4 |
| **Last Updated** | Dec 11 2022 |
| **Unifying Parser** | [imDns](imdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\vimDnsGcp.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/vimDnsGcp.yaml) |

## Description

This ASIM parser supports filtering and normalizing Google cloud platform (GCP) DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [GCP_DNS_CL](../tables/gcp-dns-cl.md) |

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

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

