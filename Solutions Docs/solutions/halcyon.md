# Halcyon for Microsoft Sentinel (Preview)

*Solution: Halcyon*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/halcyon.svg" alt="Halcyon Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Halcyon |
| **Support Tier** | Partner |
| **Support Link** | [https://www.halcyon.ai](https://www.halcyon.ai) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.2.0 |
| **Author** | Halcyon - support@halcyon.ai |
| **First Published** | 2025-12-22 |
| **Last Updated** | 2026-06-26 |
| **Solution Folder** | [Halcyon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/halcyontech1743610828684.azure-sentinel-solution-halcyon) · Popularity: 🟢 High (85%) |

The [Halcyon](https://www.halcyon.ai) solution for Microsoft Sentinel enables you to ingest Halcyon Events and Alert Updates into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following Microsoft technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional data ingestion or operational costs:

a. [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/)

b. [Azure Monitor Data Collection Rules (DCR)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

c. [Azure Monitor Data Collection Endpoints (DCE)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-endpoint-overview)

d. [Azure Log Analytics workspaces](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Halcyon Connector](../connectors/halcyonpush.md)
- [Halcyon Connector (v2)](../connectors/halcyonpushv2.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`HalcyonAlertUpdatesV2_CL`](../tables/halcyonalertupdatesv2-cl.md) | [Halcyon Connector (v2)](../connectors/halcyonpushv2.md) | - |
| [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) | [Halcyon Connector (v2)](../connectors/halcyonpushv2.md) | - |
| [`HalcyonEvents_CL`](../tables/halcyonevents-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |

## Content Items

This solution includes **8 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 8 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Halcyon_Alerts](../parsers/halcyon-alerts.md) | - | [`HalcyonAlertUpdatesV2_CL`](../tables/halcyonalertupdatesv2-cl.md) *(read)* |
| [Halcyon_OCSF_ApplicationLifecycle](../parsers/halcyon-ocsf-applicationlifecycle.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_Authentication](../parsers/halcyon-ocsf-authentication.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_DnsActivity](../parsers/halcyon-ocsf-dnsactivity.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_FileActivity](../parsers/halcyon-ocsf-fileactivity.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_KernelActivity](../parsers/halcyon-ocsf-kernelactivity.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_NetworkActivity](../parsers/halcyon-ocsf-networkactivity.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |
| [Halcyon_OCSF_ProcessActivity](../parsers/halcyon-ocsf-processactivity.md) | - | [`HalcyonEventsV2_CL`](../tables/halcyoneventsv2-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.2.0        | 10-06-2026                     | New connector, new event and alert tables with OCSF schema, and parsers | 
|3.1.0        | 24-03-2026                     | Update Connector to receive events with OCSF schemas | 
|3.0.0        | 09-12-2025                     | Initial Solution release

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

