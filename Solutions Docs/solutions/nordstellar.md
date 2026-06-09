# NordStellar for Microsoft Sentinel

*Solution: NordStellar*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NordStellar.svg" alt="NordStellar Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NordStellar |
| **Support Tier** | Partner |
| **Support Link** | [https://nordstellar.com](https://nordstellar.com) |
| **Categories** | Security - Threat Intelligence,Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Nord Security Inc. - support@nordstellar.com |
| **First Published** | 2026-05-27 |
| **Last Updated** | 2026-06-05 |
| **Solution Folder** | [NordStellar](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordStellar) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/nordsecurityinc.azure-sentinel-solution-nordstellar) · Popularity: 🔵 Medium (56%) |

The [NordStellar](https://nordstellar.com) solution for Microsoft Sentinel pushes real-time threat intelligence and exposure events from NordStellar's Leaked Data, Dark Web Monitoring, Domain Squatting, and Attack Surface modules into a unified `NordStellar_CL` table using the Codeless Connector Framework (CCF) Push pattern.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or result in additional ingestion or operational costs:

a. [Azure Monitor Logs Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

b. [Data Collection Rules](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

c. [Microsoft Entra application registrations](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app)

## Data Connectors

This solution provides **1 data connector(s)**:

- [NordStellar (Push)](../connectors/nordstellarpush.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`NordStellar_CL`](../tables/nordstellar-cl.md) | [NordStellar (Push)](../connectors/nordstellarpush.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                                                                                                                                                                                                       |
|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3.0.0       | 27-05-2026                     | Initial release of the NordStellar (Push) connector built on the Codeless Connector Framework. Adds a unified `NordStellar_CL` table, a Data Collection Rule with KQL transform, OAuth 2.0 client-credentials authentication, and support for all NordStellar event types across the Leaked Data, Dark Web Monitoring, Domain Squatting, and Attack Surface modules. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

