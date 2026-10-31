# Synqly Sentinel Integration

*Solution: SynqlyIntegrationConnector*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Synqly.svg" alt="SynqlyIntegrationConnector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Synqly |
| **Support Tier** | Partner |
| **Support Link** | [https://synqly.com/support](https://synqly.com/support) |
| **Categories** | Security - Network,Security - Threat Protection,Security - Cloud Security |
| **Version** | 3.0.1 |
| **Author** | Synqly |
| **First Published** | 2026-01-30 |
| **Last Updated** | 2026-08-31 |
| **Solution Folder** | [SynqlyIntegrationConnector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/synqlyinc1759267074521.azure-sentinel-solution-synqly-integration) · Popularity: 🔵 Medium (56%) |

The Synqly Integration Connector for Microsoft Sentinel enables push-based ingestion of security events and asset entities using ASIM normalization across 13 supported schema types.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md)

## Tables Used

This solution uses **13 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAgentEventLogs`](../tables/asimagenteventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
| [`ASimAlertEventLogs`](../tables/asimalerteventlogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | Analytics |
| [`ASimAssetEntityLogs`](../tables/asimassetentitylogs.md) | [Synqly Integration Connector](../connectors/synqlyintegrationconnector.md) | - |
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

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Synqly Alert Event](../content/synqlyintegrationconnector-synqly-alert-event-3192085a-e97e-440f-acb7-9227622949a4-4f23c61f.md) | Medium | - | [`ASimAlertEventLogs`](../tables/asimalerteventlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.1       | 26-08-2026                     | Added support for AgentEvent, AlertEvent, and Asset schemas, expanding the connector to 13 ASIM schema types, and added an optional Synqly Alert Event analytics rule template. |
| 3.0.0       | 20-02-2026                     | Initial Solution release supporting ingestion of 10 ASIM event types directly to built-in ASIM tables. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

