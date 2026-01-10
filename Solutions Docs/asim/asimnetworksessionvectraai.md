# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Vectra AI Streams

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionVectraAI` |
| **Built-in Parser** | `_ASim_NetworkSession_VectraAI` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Vectra AI Streams |
| **Parser Version** | 0.2 |
| **Last Updated** | Dec 28 2021 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionVectraAI.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionVectraAI.yaml) |

## Description

This ASIM parser supports normalizing Vectra AI Streams logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [VectraStream_CL](../tables/vectrastream-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

