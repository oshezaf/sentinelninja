# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser for VMware Carbon Black Cloud

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventVMwareCarbonBlackCloud` |
| **Built-in Parser** | `_ASim_RegistryEvent_VMwareCarbonBlackCloud` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMware Carbon Black Cloud |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/ASimRegistryEventVMwareCarbonBlackCloud.md)) |
| **Last Updated** | Oct 10, 2023 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventVMwareCarbonBlackCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventVMwareCarbonBlackCloud.yaml) |

## Description

This ASIM parser supports normalizing VMware Carbon Black Cloud logs to the ASIM Registry Event normalized schema. VMware Carbon Black Cloud events are captured through VMware Carbon Black Cloud data connector which ingests Carbon Black Audit, Notification and Event data into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | — | — |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

**Solutions:** [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [VMware Carbon Black Cloud documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/ https://developer.carbonblack.com/reference/cb-threathunter/latest/event-search-fields/)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

