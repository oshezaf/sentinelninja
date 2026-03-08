# Halcyon

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/halcyon.svg" alt="Halcyon Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Halcyon |
| **Support Tier** | Partner |
| **Support Link** | [https://www.halcyon.ai](https://www.halcyon.ai) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Halcyon |
| **First Published** | 2025-12-22 |
| **Last Updated** | 2025-12-22 |
| **Solution Folder** | [Halcyon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon) |

The [Halcyon](https://www.halcyon.ai) solution for Microsoft Sentinel enables you to ingest Halcyon Events and Alerts into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Halcyon Connector](../connectors/halcyonpush.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`HalcyonAuthenticationEvents_CL`](../tables/halcyonauthenticationevents-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |
| [`HalcyonDnsActivity_CL`](../tables/halcyondnsactivity-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |
| [`HalcyonFileActivity_CL`](../tables/halcyonfileactivity-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |
| [`HalcyonNetworkSession_CL`](../tables/halcyonnetworksession-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |
| [`HalcyonProcessEvent_CL`](../tables/halcyonprocessevent-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 5 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ASimAuthenticationHalcyon](../parsers/asimauthenticationhalcyon.md) | - | [`HalcyonAuthenticationEvents_CL`](../tables/halcyonauthenticationevents-cl.md) *(read)* |
| [ASimDnsHalcyon](../parsers/asimdnshalcyon.md) | - | [`HalcyonDnsActivity_CL`](../tables/halcyondnsactivity-cl.md) *(read)* |
| [ASimFileEventHalcyon](../parsers/asimfileeventhalcyon.md) | - | [`HalcyonFileActivity_CL`](../tables/halcyonfileactivity-cl.md) *(read)* |
| [ASimNetworkSessionHalcyon](../parsers/asimnetworksessionhalcyon.md) | - | [`HalcyonNetworkSession_CL`](../tables/halcyonnetworksession-cl.md) *(read)* |
| [ASimProcessEventHalcyon](../parsers/asimprocesseventhalcyon.md) | - | [`HalcyonProcessEvent_CL`](../tables/halcyonprocessevent-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.0.0        | 12-09-2025                     | Initial Solution release

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

