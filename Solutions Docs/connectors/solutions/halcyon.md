# Halcyon

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Halcyon |
| **Support Tier** | Partner |
| **Support Link** | [https://www.halcyon.ai](https://www.halcyon.ai) |
| **Categories** | domains |
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
| [ASimAuthenticationHalcyon](../content/a1b2c3d4-e5f6-7890-1234-567890abcde1.md) | - | - |
| [ASimDnsHalcyon](../content/a1b2c3d4-e5f6-7890-1234-567890abcde2.md) | - | - |
| [ASimFileEventHalcyon](../content/a1b2c3d4-e5f6-7890-1234-567890abcde3.md) | - | - |
| [ASimNetworkSessionHalcyon](../content/a1b2c3d4-e5f6-7890-1234-567890abcde4.md) | - | - |
| [ASimProcessEventHalcyon](../content/a1b2c3d4-e5f6-7890-1234-567890abcde5.md) | - | - |

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
