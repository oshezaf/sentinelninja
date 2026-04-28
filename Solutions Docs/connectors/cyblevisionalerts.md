# Cyble Vision Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CybleLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CybleVisionAlerts` |
| **Publisher** | Cyble |
| **Used in Solutions** | [Cyble Vision](../solutions/cyble-vision.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CybleVisionAlerts_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Data%20Connectors/CybleVisionAlerts_CCF/CybleVisionAlerts_DataConnectorDefinition.json) |
| **CCF Configuration** | [CybleVision_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyble%20Vision/Data%20Connectors/CybleVisionAlerts_CCF/CybleVision_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |

The **Cyble Vision Alerts** CCF Data Connector enables Ingestion of Threat Alerts from Cyble Vision into Microsoft Sentinel using the Codeless Connector Framework Connector. It collects alert data via API, normalizes it, and stores it in a custom table for advanced detection, correlation, and response.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CybleVisionAlerts_CL`](../tables/cyblevisionalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Cyble Vision API token**: An API Token from Cyble Vision Platform is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Generating API Token from Cyble Platform**

Navigate to [Cyble Platform](https://cyble.ai/utilities/access-apis) and log in using your Cyble Vision credentials.

Once logged in, go to the left-hand panel and scroll down to **Utilities**. Click on **Access APIs**. On the top-right corner of the page, click the **+ (Add)** icon to generate a new API key. Provide an alias (a friendly name for your key) and click **Generate**. Copy the generated API token and store it securely.

**2. STEP 2 - Configure the Data Connector**

Return to Microsoft Sentinel and open the **Cyble Vision Alerts** data connector configuration page. Paste your Cyble API Token into the **API Token** field under 'API Details'.
- **API Token**: (password field)
- **Query Interval (in minutes)**: Enter Time in Minutes (e.g., 10)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

