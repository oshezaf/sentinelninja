# Akamai DDOS Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/akamai.svg" alt="Akamai DDOS Protection Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-06-24 |
| **Last Updated** | 2026-07-24 |
| **Solution Folder** | [Akamai DDOS Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20DDOS%20Protection) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-akamaiddosprotection) · Popularity: 🔵 Medium (76%) |

The [Akamai](https://www.akamai.com/) DDOS Protection Solution for Microsoft Sentinel enables you to ingest DDoS protection and web application firewall (WAF) security events from the Akamai SIEM Integration API into Microsoft Sentinel using the Codeless Connector Framework (CCF). This solution provides visibility into attack data, geographic context, and HTTP request/response metadata for security monitoring, threat detection, and investigation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

b. [Log Ingestion API](https://docs.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

c. [Data Collection Rules (DCR)](https://docs.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Akamai Security Events (via Codeless Connector Framework)](../connectors/akamaisiemconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AkamaiSIEMEvent_CL`](../tables/akamaisiemevent-cl.md) | [Akamai Security Events (via Codeless Connector Framework)](../connectors/akamaisiemconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.1 | 20-07-2026 | Promoted Akamai DDOS CCF data connector from public preview to GA  |
| 3.0.0       | 24-06-2026                     | Created a Data Connector for Akamai DDOS Protection CCF Container with the WAF security events data stream. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

