# Zoom Reports Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZoomReportsConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [ZoomReports](../solutions/zoomreports.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZoomReports/Data%20Connectors/ZoomReports_ccf/ConnectorDefinition.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZoomReports/Data%20Connectors/ZoomReports_ccf/PollingConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging` |

The [Zoom Reports](https://developers.zoom.us/docs/api/) data connector enables you to ingest Zoom Reports data into Microsoft Sentinel through the Zoom REST API v2, allowing you to monitor and audit Zoom usage across your organization. This connector uses server-to-server OAuth account credentials for authentication and supports ingestion of multiple report types including Daily Usage Reports for meeting statistics and usage metrics, User Reports for active/inactive user host information, Telephony Reports for telephony usage statistics, Cloud Recording Usage Reports for cloud storage and recording usage, Operation Logs for administrative operations and audit trail, and Activity Logs for user sign-in/sign-out activities. Each report type is collected in a separate polling configuration with automatic pagination support using NextPageToken. The data connector is built on Microsoft Sentinel Codeless Connector Platform and supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) for optimized query performance.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZoomV2_CL`](../tables/zoomv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Zoom API access**: Access to Zoom REST API v2 with account credentials

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Zoom Configuration**

Configure Server-to-Server OAuth App and gather credentials
## Step 1: Set up Zoom Server-to-Server OAuth App, follow [Create an app](https://developers.zoom.us/docs/internal-apps/create/). 
Please make sure to add Reports related scopes to your app:
- report:read:list_users:admin
- report:read:cloud_recording:admin
- report:read:daily_usage:admin
- report:read:operation_logs:admin
- report:read:telephone:admin
- report:read:user_activities:admin

For more information, see [Zoom Server-to-Server OAuth Documentation](https://developers.zoom.us/docs/internal-apps/) and [Reports APIs](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#tag/Reports).
## Step 2: Get Your App Credentials

Find your app credentials (Account ID, Client ID and Client Secret) on your `Personal app management` page on the Zoom App Marketplace

## Security Notes

- Store Account ID, Client ID and Client Secret securely
- Regularly rotate credentials for enhanced security
- **Client ID**: Zoom App Client ID
- **Client Secret**: (password field)
- **Account ID**: Your Zoom Account ID
- **Token Base URL**: https://zoom.us/oauth/token
- **API Base URL**: https://api.zoom.us/v2

**2. Connect**

Enable the Zoom Reports connector
### Activate the Connector

Review your Zoom App credentials found in Step 2, then enable the connector to begin collecting Zoom Reports data.

### Monitoring

Check data arrival using these queries:

**Check all report types:**
```kusto
ZoomV2_CL
| where TimeGenerated > ago(30m)
| summarize Records = count() by EventType
```

**Check specific report type:**
```kusto
ZoomV2_CL
| where EventType == 'dates'
| where TimeGenerated > ago(1h)
| limit 10
```

**Monitor connector health:**
```kusto
ZoomV2_CL
| where TimeGenerated > ago(24h)
| summarize LastRecord = max(TimeGenerated), RecordCount = count() by EventType
| order by LastRecord desc
```
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

