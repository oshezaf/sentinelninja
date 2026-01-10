# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Vectra AI streams

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionVectraAI` |
| **Built-in Parser** | `_ASim_WebSession_VectraAI` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Vectra AI Streams |
| **Parser Version** | 0.2 |
| **Last Updated** | Dec 28 2022 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionVectraAI.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionVectraAI.yaml) |

## Description

This ASIM parser supports normalizing Vectra AI Streams logs produced to the ASIM Web Session normalized schema.

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

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Zscaler Connector](https://docs.microsoft.com/azure/sentinel/data-connectors-reference#zscaler)
- [Zscaler Sentinel deployment guide](https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

