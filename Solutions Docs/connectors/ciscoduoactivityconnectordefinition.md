# Cisco Duo Activity Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoDuoActivityConnectorDefinition` |
| **Publisher** | Cisco Systems, Inc. |
| **Used in Solutions** | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoDuoActivity_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoActivity_CCF/CiscoDuoActivity_ConnectorDefinition.json) |
| **DCR Definition Files** | [CiscoDuoActivity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoActivity_CCF/CiscoDuoActivity_DCR.json) |
| **CCF Configuration** | [CiscoDuoActivity_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoActivity_CCF/CiscoDuoActivity_PollingConfig.json) |
| **CCF Capabilities** | `CiscoDuo`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cisco-duo-activity-logs) |

The Cisco Duo Activity Logs connector ingests admin and user activity log data from the Cisco Duo Admin API into Microsoft Sentinel.



Activity logs capture admin panel actions such as user creation, modification, deletion, admin logins, and configuration changes.



Supports HMAC-based API Key authentication (Integration Key and Secret Key).



For more information, visit [Cisco Duo Admin API Docs](https://duo.com/docs/adminapi#activity-logs).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DuoActivity_CL`](../tables/duoactivity-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Cisco Duo API Key**: A Cisco Duo Integration Key and Secret Key are required. These are obtained by creating an Admin API application in the Duo Admin Panel with 'Grant read log' permission. [See documentation](https://duo.com/docs/adminapi#activity-logs).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Cisco Duo Activity Logs to Microsoft Sentinel**

To enable the Cisco Duo Activity Logs connector, provide your Duo Admin API credentials below.

1. Log in to the [Duo Admin Panel](https://admin.duosecurity.com).
2. Navigate to **Applications > Protect an Application**.
3. Find **Admin API** and click **Protect**.
4. Ensure the application has **Grant read log** permission enabled.
5. Copy the **Integration Key**, **Secret Key**, and **API Hostname** and enter them below.
- **Integration Key (ikey)**: DIXXXXXXXXXXXXXXXXXX
- **Secret Key (skey)**: (password field)
- **API Base URL**: https://api-XXXXXXXX.duosecurity.com
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

