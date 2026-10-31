# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> DNS ASIM parser for Gigamon V-Series Application Metadata Intelligence

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsGigamonVSeries` |
| **Built-in Parser** | `_ASim_Dns_GigamonVSeries` |
| **Schema** | Dns |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Gigamon V-Series Application Metadata Intelligence |
| **Parser Version** | 1.0.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/ASimDnsGigamonVSeries.md)) |
| **Last Updated** | Sep 02, 2026 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsGigamonVSeries.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsGigamonVSeries.yaml) |

## Description

This ASIM parser normalizes Gigamon V-Series Application Metadata Intelligence
DNS records to the ASIM Dns schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GigamonV2_CL`](../tables/gigamonv2-cl.md) | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [GigamonDefinition](../connectors/gigamondefinition.md) | [Gigamon Connector](../solutions/gigamon-connector.md) |

**Solutions:** [Gigamon Connector](../solutions/gigamon-connector.md)

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Gigamon Application Metadata Intelligence](https://docs.gigamon.com/doclib612/Content/GV-Cloud-V-Series-Applications/App_Metadata_Intelligence.html)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

