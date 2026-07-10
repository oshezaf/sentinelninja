# Mulesoft CloudHub Alerts Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MulesoftCloudhubConnector` |
| **Publisher** | Microsoft |
| **Source Vendor** | MuleSoft *(basis: title)* |
| **Source Product** | CloudHub *(basis: title)* |
| **Event Type** | Alerts |
| **Used in Solutions** | [Mulesoft](../solutions/mulesoft.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [MuleSoftCloudHubAlerts_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftCloudHubAlerts_CCF/MuleSoftCloudHubAlerts_ConnectorDefinition.json) |
| **DCR Definition Files** | [MulesoftCloudHubAlerts_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftCloudHubAlerts_CCF/MulesoftCloudHubAlerts_DCR.json) |
| **CCF Configuration** | [MulesoftCloudHubAlerts_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Mulesoft/Data%20Connectors/MulesoftCloudHubAlerts_CCF/MulesoftCloudHubAlerts_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |

The Mulesoft CloudHub data connector enables you to ingest alerts from Mulesoft CloudHub into Microsoft Sentinel through the CloudHub REST API v2. This connector supports configurable endpoints to accommodate different Mulesoft regions and deployment environments including US Commercial Cloud, EU Cloud, Government Cloud, and on-premises deployments. It uses multi-stream support so you can connect to multiple Mulesoft environments simultaneously. Configure the connector with your Anypoint Platform credentials, environment ID, and optional application name filter to begin collecting data. Use the `MuleSoftCloudhub` parser to query ingested alerts. Refer to [Mulesoft CloudHub API documentation](https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/) for more information about the CloudHub APIs.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`MulesoftCloudhubAlerts_CL`](../tables/mulesoftcloudhubalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Mulesoft CloudHub API access**: **Mulesoft CloudHub API** access with read permissions is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Mulesoft CloudHub Connections**

Manage connections to your Mulesoft CloudHub environments
## Prerequisites

Before configuring this connector, ensure you have:

1. **Mulesoft Anypoint Platform Account** with appropriate permissions
2. **Environment Access** to the CloudHub environment you want to monitor
3. **API Access Credentials** (username and password)
4. **Environment ID** from your Mulesoft CloudHub console

### Finding Your Environment ID

1. Log in to [Anypoint Platform](https://anypoint.mulesoft.com/)
2. Navigate to **Access Management** > **Environments**
3. Select your target environment
4. Copy the Environment ID from the URL or environment details

ℹ️ This connector requires read access to the CloudHub API. Contact your Mulesoft administrator if you don't have the necessary permissions.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**
- **Stream Type**
- **Base URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Mulesoft CloudHub Connection**

*Configure a connection to a Mulesoft CloudHub environment*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Base Configuration*

### Connection Settings

- **Connection Alias** (required): e.g., US-Production
- **Mulesoft API Base URL** (required): https://anypoint.mulesoft.com
*Credentials*

### Authentication

- **Username** (required): Your Mulesoft Anypoint Platform username
- **Password** (required): Your Mulesoft Anypoint Platform password
*Environment Configuration*

### Environment Settings

- **Environment ID** (required): CloudHub Environment ID (found in Anypoint Platform)
- **Application Name Filter** (optional): Optional: Filter alerts for a specific application

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


**2. Monitor and Validate**

Monitor data ingestion and validate connectivity
### Post-Connection Steps

1. **Monitor Connection Status**: Check the connector status in the Data connectors page
2. **Validate Data Flow**: Use the sample queries provided to verify data is being collected
3. **Review Logs**: Check Azure Monitor logs for any connection or authentication issues

### Data Collection Schedule
- **Alerts**: Polled every 5 minutes from `/v2/alerts` endpoint

### Expected Timeline
- **Initial Data**: Allow 10-15 minutes for initial data to appear
- **Alerts Data**: Available in the `MuleSoftCloudhub` table

### Troubleshooting
- **Authentication errors**: Verify credentials and environment access
- **No data**: Ensure alerts exist in the specified environment
- **Partial data**: Check environment ID and application filter settings

ℹ️ **Sample Query**: `MuleSoftCloudhub | where TimeGenerated > ago(24h) | summarize count() by EventSeverity`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

