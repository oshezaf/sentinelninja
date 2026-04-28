# ⚠️ OpenAI

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OpenAI.svg" alt="OpenAI Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-03-20 |
| **Solution Folder** | [OpenAI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenAI) |

The [OpenAI](https://www.openai.com/) solution for Microsoft Sentinel enables you to ingest OpenAI events into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Data Connectors

This solution provides **1 data connector(s)**:

- [OpenAI (via Codeless Connector Framework)](../connectors/openaiconnector.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OpenAIAuditLogs_CL`](../tables/openaiauditlogs-cl.md) | [OpenAI (via Codeless Connector Framework)](../connectors/openaiconnector.md) | - |
| [`OpenAIChatCompletions_CL`](../tables/openaichatcompletions-cl.md) | [OpenAI (via Codeless Connector Framework)](../connectors/openaiconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 		                						|
|-------------|--------------------------------|----------------------------------------------------------------------------------------------------| 
| 3.0.0       | 13-03-2026                     | Added OpenAI CCF connector to support ingesting audit log and chat completions                     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

