# Synqly Sentinel Integration

*Solution: SynqlyIntegrationConnector*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Synqly.svg" alt="SynqlyIntegrationConnector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Synqly |
| **Support Tier** | Partner |
| **Support Link** | [https://synqly.com/support](https://synqly.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Synqly |
| **First Published** | 2026-01-30 |
| **Last Updated** | 2026-03-13 |
| **Solution Folder** | [SynqlyIntegrationConnector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/synqlyinc1759267074521.azure-sentinel-solution-synqly-integration) · Popularity: ⚪ Very Low (0%) |

The Synqly Integration Connector for Microsoft Sentinel enables push-based ingestion of security events using ASIM normalization across 10 event types.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md)

## Tables Used

This solution uses **10 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 20-02-2026                     | Initial Solution release supporting ingestion of 10 ASIM event types directly to built-in ASIM tables.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

