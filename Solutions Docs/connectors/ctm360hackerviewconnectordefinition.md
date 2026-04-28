# 🔍 CTM360 HackerView (Serverless)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CTM360HackerViewConnectorDefinition` |
| **Publisher** | CTM360 |
| **Used in Solutions** | [CTM360](../solutions/ctm360.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CTM360_HV_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Data%20Connectors/CCF/HackerView/CTM360_HV_ConnectorDefinition.json) |
| **CCF Configuration** | [CTM360_HV_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Data%20Connectors/CCF/HackerView/CTM360_HV_PollingConfig.json) |
| **CCF Capabilities** | `APIKey` |

The CTM360 HackerView connector enables you to ingest security issues and vulnerabilities from your HackerView External Attack Surface Management platform into Microsoft Sentinel. This serverless connector uses the REST API to automatically pull issue data for analysis and correlation with other security events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`HackerViewLog_AzureV2_CL`](../tables/hackerviewlog-azurev2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **HackerView API Key**: A valid HackerView API key with permissions to access issues data is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect CTM360 HackerView to Microsoft Sentinel**

This connector uses the HackerView REST API to automatically ingest security issues into Microsoft Sentinel.

ℹ️ This is a serverless connector that uses Azure's Codeless Connector Platform (CCP). No Azure Function deployment is required.

**2. Step 1: Obtain CTM360 API Keys**

To setup this integration, you will need HackerView API Key. You can get these keys using the following links:

HackerView API Key found from this link: https://platform.ctm360.com/start/integrations after logging with you account

**3. Step 2: Configure the Connector**

Enter your HackerView API key and click Connect to begin data ingestion.
- **API Key**: (password field)
- Click 'Connect' to establish connection

**4. Step 3: Verify Data Ingestion**

After connecting, data should start flowing within 5-10 minutes. Run the following query to verify:

ℹ️ HackerViewLog_AzureV2_CL
| take 10

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

