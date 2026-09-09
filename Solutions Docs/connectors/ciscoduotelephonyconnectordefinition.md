# Cisco Duo Telephony Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoDuoTelephonyConnectorDefinition` |
| **Publisher** | Cisco Systems, Inc. |
| **Used in Solutions** | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoDuoTelephony_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoTelephony_CCF/CiscoDuoTelephony_ConnectorDefinition.json) |
| **DCR Definition Files** | [CiscoDuoTelephony_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoTelephony_CCF/CiscoDuoTelephony_DCR.json) |
| **CCF Configuration** | [CiscoDuoTelephony_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Data%20Connectors/CiscoDuoTelephony_CCF/CiscoDuoTelephony_PollingConfig.json) |
| **CCF Capabilities** | `CiscoDuo`, `Paging` |

The Cisco Duo Telephony Logs connector ingests SMS and phone-call authentication event data from the Cisco Duo Admin API into Microsoft Sentinel.



Telephony logs record every instance where Duo sends an SMS passcode or places a phone callback during an authentication, enrollment, or administrator bypass workflow. Each event includes the phone number, channel used (sms or phone), context, and number of telephony credits consumed.



Supports HMAC-based API Key authentication (Integration Key and Secret Key).



For more information, visit [Cisco Duo Admin API Docs](https://duo.com/docs/adminapi#telephony-log).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DuoTelephony_CL`](../tables/duotelephony-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Cisco Duo API Key**: A Cisco Duo Integration Key and Secret Key are required. These are obtained by creating an Admin API application in the Duo Admin Panel with 'Grant read log' permission. [See documentation](https://duo.com/docs/adminapi#telephony-log).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Cisco Duo Telephony Logs to Microsoft Sentinel**

To enable the Cisco Duo Telephony Logs connector, provide your Duo Admin API credentials below.

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

