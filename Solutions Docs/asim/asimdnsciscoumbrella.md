# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Cisco Umbrella

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsCiscoUmbrella` |
| **Built-in Parser** | `_ASim_Dns_CiscoUmbrella` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Umbrella |
| **Parser Version** | 0.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/ASimDnsCiscoUmbrella.md)) |
| **Last Updated** | Jan 17 2022 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsCiscoUmbrella.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsCiscoUmbrella.yaml) |

## Description

This ASIM parser supports normalizing Cisco Umbrella DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) � | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| [CiscoUmbrellaDataConnectorelasticpremium](../connectors/ciscoumbrelladataconnectorelasticpremium.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |

**Solutions:** [CiscoUmbrella](../solutions/ciscoumbrella.md)

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

