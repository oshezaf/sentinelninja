# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Vectra AI streams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionVectraAI` |
| **Built-in Parser** | `_ASim_WebSession_VectraAI` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Vectra AI Streams |
| **Parser Version** | 0.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSessionVectraAI.md)) |
| **Last Updated** | Dec 28 2022 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionVectraAI.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionVectraAI.yaml) |

## Description

This ASIM parser supports normalizing Vectra AI Streams logs produced to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | ✗ | ✓ | ✗ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AIVectraStream](../connectors/aivectrastream.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| [CustomlogsviaAMA](../connectors/customlogsviaama.md) | [CustomLogsAma](../solutions/customlogsama.md) |

**Solutions:** [CustomLogsAma](../solutions/customlogsama.md), [Vectra AI Stream](../solutions/vectra-ai-stream.md)

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Zscaler Connector](https://docs.microsoft.com/azure/sentinel/data-connectors-reference#zscaler)
- [Zscaler Sentinel deployment guide](https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

