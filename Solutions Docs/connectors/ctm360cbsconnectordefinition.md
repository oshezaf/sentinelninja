# 🔍 CTM360 CyberBlindSpot (Serverless)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CTM360CBSConnectorDefinition` |
| **Publisher** | CTM360 |
| **Used in Solutions** | [CTM360](../solutions/ctm360.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CTM360_CBS_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Data%20Connectors/CCF/CBS/CTM360_CBS_ConnectorDefinition.json) |
| **CCF Configuration** | [CTM360_CBS_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Data%20Connectors/CCF/CBS/CTM360_CBS_PollingConfig.json) |
| **CCF Capabilities** | `APIKey` |

The CTM360 Cyber Blind Spot (CBS) connector provides integration with CTM360's CBS platform to ingest security data across 6 module types: incidents, malware logs, breached credentials, compromised cards, domain infringement, and subdomain infringement. This connector uses the Codeless Connector Framework (CCF) for serverless data collection.



**Data Types:**

- CBSLog_AzureV2_CL

- CBS_MalwareLogs_AzureV2_CL

- CBS_BreachedCredentials_AzureV2_CL

- CBS_CompromisedCards_AzureV2_CL

- CBS_DomainInfringement_AzureV2_CL

- CBS_SubdomainInfringement_AzureV2_CL

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CBSLog_AzureV2_CL`](../tables/cbslog-azurev2-cl.md) | ? | ✓ | ? |
| [`CBS_BreachedCredentials_AzureV2_CL`](../tables/cbs-breachedcredentials-azurev2-cl.md) | ? | ✓ | ? |
| [`CBS_CompromisedCards_AzureV2_CL`](../tables/cbs-compromisedcards-azurev2-cl.md) | ? | ✓ | ? |
| [`CBS_DomainInfringement_AzureV2_CL`](../tables/cbs-domaininfringement-azurev2-cl.md) | ? | ✓ | ? |
| [`CBS_MalwareLogs_AzureV2_CL`](../tables/cbs-malwarelogs-azurev2-cl.md) | ? | ✓ | ? |
| [`CBS_SubdomainInfringement_AzureV2_CL`](../tables/cbs-subdomaininfringement-azurev2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **CTM360 CBS API Key**: A valid CTM360 Cyber Blind Spot API key is required to connect to the CBS API endpoint.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect CTM360 Cyber Blind Spot to Microsoft Sentinel**

This connector uses the Codeless Connector Framework (CCF) to ingest data from CTM360 CBS into Microsoft Sentinel. Data is collected every 5 minutes across 6 different module types.

ℹ️ This connector creates 6 separate tables for different CBS module types: Incidents, Malware Logs, Breached Credentials, Compromised Cards, Domain Infringement, and Subdomain Infringement.

**2. Step 1: Obtain CTM360 API Keys**

To setup this integration, you will need CBS API Key. You can get these keys using the following links:

CBS API Key found from this link: https://platform.ctm360.com/start/integrations after logging with you account

**3. Step 2: Configure Connection**

Enter your CTM360 CBS API key and connect to start data ingestion.
- **CTM360 CBS API Key**: (password field)
- Click 'Connect' to establish connection

**4. Step 3: Verify Data Ingestion**

After connecting, data should start flowing within 5-10 minutes. Use the sample queries above to verify data ingestion for each module type.

ℹ️ Note: Initial data ingestion may take up to 30 minutes. The connector polls every 5 minutes with a 5-minute rolling window.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

