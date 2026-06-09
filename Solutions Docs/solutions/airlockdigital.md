# Airlock Digital

*Solution: AirlockDigital*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="AirlockDigital Logo" width="75" height="75">

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
| **First Published** | 2026-05-20 |
| **Last Updated** | 2026-06-04 |
| **Solution Folder** | [AirlockDigital](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-airlockdigital) · Popularity: ⚪ Very Low (0%) |

The [Airlock Digital](https://www.airlockdigital.com/) Solution for Microsoft Sentinel enables you to ingest Airlock Digital application control and execution logs into Microsoft Sentinel using the Codeless Connector Platform (CCP). This solution provides visibility into file executions, server activities, and security event summaries from your Airlock Digital server.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform (CCP)](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) | [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |
| [`AirlockDigitalFileActivitySummary_CL`](../tables/airlockdigitalfileactivitysummary-cl.md) | [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |
| [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) | [Airlock Digital connector (via Codeless Connector Framework)](../connectors/airlockdigitalconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.1       | 02-06-2026                     | Fixed: Removed empty ApiKeyIdentifier field for Partner Center certification compliance. Fixed UX description typo. |
| 3.0.0       | 20-05-2026                     | Created a Data Connector for Airlock Digital CCF Container with Server Activities, Execution Histories, and File Activity Summary data streams. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

