# Rapid7 Insight Platform Vulnerability Management Reports (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Rapid7InsightVMConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Rapid7InsightVM](../solutions/rapid7insightvm.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Rapid7InsightVM_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM/Data%20Connectors/Rapid7InsightVM_CCP/Rapid7InsightVM_ConnectorDefinition.json) |
| **CCF Configuration** | [Rapid7InsightVM_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Rapid7InsightVM/Data%20Connectors/Rapid7InsightVM_CCP/Rapid7InsightVM_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST`, `Nested` |

The [Rapid7 Insight VM](https://www.rapid7.com/products/insightvm/) Report data connector provides the capability to ingest Scan reports and vulnerability data into Microsoft Sentinel through the REST API from the Rapid7 Insight platform (Managed in the cloud). Refer to [API documentation](https://docs.rapid7.com/insight/api-overview/) for more information. The connector provides ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Rapid7InsightVMCloudAssets`](../tables/rapid7insightvmcloudassets.md) | ✓ | ✓ | ? |
| [`Rapid7InsightVMCloudVulnerabilities`](../tables/rapid7insightvmcloudvulnerabilities.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **REST API Credentials**: **InsightVMAPIKey** is required for REST API. [See the documentation to learn more about API](https://docs.rapid7.com/insight/api-overview/). Check all [requirements and follow the instructions](https://docs.rapid7.com/insight/managing-platform-api-keys/) for obtaining credentials

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Follow the instructions to configure the Rapid7 InsightVM connector.

ℹ️ **Note:** This data connector depends on a parsers based on a Kusto Function to work as expected **[InsightVMAssets](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Rapid7InsightVM/Parsers/InsightVMAssets.yaml)** and **[InsightVMVulnerabilities](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Rapid7InsightVM/Parsers/InsightVMVulnerabilities.yaml)** which is deployed with the Microsoft Sentinel Solution.

**1. Configuration steps for Rapid7 Insight VM cloud**
[Follow the instructions](https://docs.rapid7.com/insight/managing-platform-api-keys/) to obtain the credentials. 
 1. In Rapid7 InsightVM, generate an **API Key**. 
 2. Note your **Region** and **API Key**.
- **Region**: us, eu, etc.
- **API Key**: (password field)

**2. Connect**

Enable the Rapid7 Insight VM connector.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

