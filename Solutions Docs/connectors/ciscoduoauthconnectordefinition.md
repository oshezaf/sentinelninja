# Cisco Duo Authentication

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoDuoAuthConnectorDefinition` |
| **Publisher** | Cisco Systems, Inc. |
| **Used in Solutions** | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoDuoAuth_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoAuth_CCF/CiscoDuoAuth_ConnectorDefinition.json) |
| **DCR Definition Files** | [CiscoDuoAuth_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoAuth_CCF/CiscoDuoAuth_DCR.json) |
| **CCF Configuration** | [CiscoDuoAuth_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoAuth_CCF/CiscoDuoAuth_PollingConfig.json) |
| **CCF Capabilities** | `CiscoDuo`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cisco-duo-authentication) |

The Cisco Duo connector ingests authentication log data from the Cisco Duo Admin API into Microsoft Sentinel.



Supports HMAC-based API Key authentication (Integration Key and Secret Key).



For more information, visit [Cisco Duo Admin API Docs](https://duo.com/docs/adminapi#overview).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DuoAuthentication_CL`](../tables/duoauthentication-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Cisco Duo API Key**: A Cisco Duo Integration Key and Secret Key are required. These are obtained by creating an Admin API application in the Duo Admin Panel. [See documentation](https://duo.com/docs/adminapi#overview).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1 - Obtain Cisco Duo Admin API credentials**

1. Log in to the [Cisco Duo Admin Panel](https://admin.duosecurity.com).
2. Navigate to **Applications** and click **Protect an Application**.
3. Search for **Admin API** and click **Protect**.
4. Copy the **API Hostname**, **Integration Key**, and **Secret Key**.
5. Ensure the application has **Grant read log** permission enabled.

**2. Step 2 - Connect Cisco Duo to Microsoft Sentinel**

Enter your Cisco Duo Admin API credentials below to begin ingesting authentication logs.
- **API Base URL**: https://api-XXXXXXXX.duosecurity.com
- **Integration Key (Username)**: Enter your Duo Integration Key
- **Secret Key (Password)**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

