# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Corelight Zeek

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionCorelightZeek` |
| **Built-in Parser** | `_ASim_NetworkSession_CorelightZeek` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Corelight Zeek |
| **Parser Version** | 0.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionCorelightZeek.md)) |
| **Last Updated** | Dec 11 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionCorelightZeek.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionCorelightZeek.yaml) |

## Description

This ASIM parser supports normalizing Corelight Zeek Connection logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Corelight_CL`](../tables/corelight-cl.md) | — | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CorelightConnectorExporter](../connectors/corelightconnectorexporter.md) | [Corelight](../solutions/corelight.md) |

**Solutions:** [Corelight](../solutions/corelight.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

