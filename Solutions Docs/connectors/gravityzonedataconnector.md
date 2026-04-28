# ⚠️ GravityZone Data Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Bitdefender.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GravityZoneDataConnector` |
| **Publisher** | Bitdefender |
| **Used in Solutions** | [GravityZone](../solutions/gravityzone.md) |
| **Collection Method** | [Unknown (Custom Log)](../methods/unknown-custom-log.md) |
| **Connector Definition Files** | [GravityZone_API.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GravityZone/Data%20Connectors/GravityZone_API.json) |

This connector enables integration between **Bitdefender GravityZone** and **Microsoft Sentinel** through the **Event Push Service API**. Once configured, it streams all GravityZone event types directly into your Microsoft Sentinel workspace, where they are stored as logs in the `GzSecurityEvents_CL` table.



Key event categories such as **EDR, XDR, ransomware mitigation, network sandboxing, and Exchange malware events** can be automatically correlated and generate incidents through the **NRT GravityZone Incident Alerts** analytics rule.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GzSecurityEvents_CL`](../tables/gzsecurityevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Data Collection Rule** (ResourceGroup): read and write permissions to create data collection rules are required.
- **Data Collection Endpoint** (ResourceGroup): read and write permissions to create data collection endpoints are required.

**Custom Permissions:**
- **Azure App Registration**: Microsoft Entra App Registration with the following details retained Directory (Tenant) ID, Application (Client) ID, Managed Service Principal Object ID (from the Enterprise Applications entry of the app), Client Secret (generated under Certificates & secrets).
- **GravityZone Cloud Account**: A GravityZone Cloud account with a generated API key for the Event Push Service endpoint.
- **Read our guide**: Follow this step-by-step article to set up the integration. [Customers](https://www.bitdefender.com/business/support/en/77209-1455218-integrate-gravityzone-with-azure-sentinel.html) | [Partners](https://www.bitdefender.com/business/support/en/77211-1455218-integrate-gravityzone-with-azure-sentinel.html)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

1. Click the **Deploy to Azure** button below and fill in the required parameters. 

	

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-gravityzone-azuredeploy)

2. Collect the **Logs Ingestion** URL from `gz-sentinel-dce` [Data Collection Endpoint](https://portal.azure.com/#view/HubsExtension/BrowseResource.ReactView/resourceType/microsoft.insights%2Fdatacollectionendpoints)

3. Collect the **Immutable ID** from `gz-sentinel-dcr` [Data Collection Rule](https://portal.azure.com/#browse/microsoft.insights%2Fdatacollectionrules)

4. Go to your GravityZone Cloud account and navigate to **My Account**. Create an API key with **Event Push Service** permissions.

5. Configure your **Event Push Service** settings using this article. [Customers](https://www.bitdefender.com/business/support/en/77209-1455218-integrate-gravityzone-with-azure-sentinel.html#UUID-5e8bbfa1-7892[%E2%80%A6]-2427-abd6f930e8c2) | [Partners](https://www.bitdefender.com/business/support/en/77211-1455218-integrate-gravityzone-with-azure-sentinel.html#UUID-5e8bbfa1-7892[%E2%80%A6]-2427-abd6f930e8c2).

**Please note that after the successful deployment of the Data Connector & successful setup of GravityZone's Event Push Service, the system will receive Activity Log data in near-real-time. A short delay may occur between data transmission and its appearance in the Microsoft Sentinel Logs section.**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

