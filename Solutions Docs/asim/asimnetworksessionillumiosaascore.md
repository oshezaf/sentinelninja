# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSession ASIM Parser for Illumio SaaS Core

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionIllumioSaaSCore` |
| **Built-in Parser** | `_ASim_NetworkSession_IllumioSaaSCore` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Illumio SaaS Core |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Aug 21, 2024 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionIllumioSaaSCore.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionIllumioSaaSCore.yaml) |

## Description

This ASIM parser supports normalizing Illumio SaaS Core logs to the ASIM Network Session normalized schema. These events are captured through Illumio Sentinel Integration data connector.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [IllumioSaaSDataConnector](../connectors/illumiosaasdataconnector.md) | [IllumioSaaS](../solutions/illumiosaas.md) |

**Solutions:** [IllumioSaaS](../solutions/illumiosaas.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Illumio SaaS Core Documentation](https://docs.illumio.com/core/24.1/Content/Guides/events-administration/events-described/list-of-event-types.htm)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

