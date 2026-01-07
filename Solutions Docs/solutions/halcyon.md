# Halcyon

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/halcyon.svg" alt="Halcyon Logo" width="75" height="75">

The [Halcyon](https://www.halcyon.ai) solution for Microsoft Sentinel enables you to ingest Halcyon Events and Alerts into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

## Solution Information

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Halcyon Connector](../connectors/halcyonpush.md)

## Tables Reference

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
| [ASimAuthenticationHalcyon](../content/halcyon-asimauthenticationhalcyon-a1b2c3d4-e5f6-7890-1234-567890abcde1-12c13dee.md) | - | - |
| [ASimDnsHalcyon](../content/halcyon-asimdnshalcyon-a1b2c3d4-e5f6-7890-1234-567890abcde2-5abc0b5e.md) | - | - |
| [ASimFileEventHalcyon](../content/halcyon-asimfileeventhalcyon-a1b2c3d4-e5f6-7890-1234-567890abcde3-432f7dbb.md) | - | - |
| [ASimNetworkSessionHalcyon](../content/halcyon-asimnetworksessionhalcyon-a1b2c3d4-e5f6-7890-1234-567890abcde4-20ce998d.md) | - | - |
| [ASimProcessEventHalcyon](../content/halcyon-asimprocesseventhalcyon-a1b2c3d4-e5f6-7890-1234-567890abcde5-a5e3e8be.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.0.0        | 12-09-2025                     | Initial Solution release

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
