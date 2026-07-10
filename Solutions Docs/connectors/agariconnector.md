# Fortra Agari Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/agari_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AgariConnector` |
| **Publisher / Vendor** | Microsoft |
| **Source Product** | Fortra Agari |
| **Used in Solutions** | [Agari](../solutions/agari.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Agari_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_ConnectorDefinition.json) |
| **DCR Definition Files** | [Agari_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_DCR.json) |
| **CCF Configuration** | [Agari_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#fortra-agari-data-connector-via-codeless-connector-framework) |

The [Fortra Agari Data Connector](https://www.agari.com/) allows ingesting logs from Fortra Agari APIs into Microsoft Sentinel. This connector integrates with Agari Brand Protection (BP), Phishing Defense (APD), and Phishing Response (APR) products. It supports DCR-based ingestion time transformations for efficient query execution. Refer to [Agari API documentation](https://developers.agari.com/agari-platform/reference/overview) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AgariAPDPolicyLog_CL`](../tables/agariapdpolicylog-cl.md) | ? | ✓ | ? |
| [`AgariAPDTCLog_CL`](../tables/agariapdtclog-cl.md) | ? | ✓ | ? |
| [`AgariAPRInvestigationsLog_CL`](../tables/agariaprinvestigationslog-cl.md) | ? | ✓ | ? |
| [`AgariBPAlertsLog_CL`](../tables/agaribpalertslog-cl.md) | ✗ | ✓ | ✗ |
| [`AgariBPThreatFeedSubs_CL`](../tables/agaribpthreatfeedsubs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration steps for the Agari API**

Follow the instructions below to obtain your Agari API credentials.
#### 1. Retrieve API URL
Log in to your Agari Console and navigate to the API section. The default API URL is https://api.agari.com
#### 2. Retrieve Client Credentials
Obtain your Client ID and Client Secret from the API credentials section in your Agari account. Note that different Agari products (Brand Protection, Phishing Defense, Phishing Response) may require separate API credentials.
#### 3. Select Data Streams
Choose which Agari data streams you want to collect. You can select one or more streams based on your subscription and requirements.
- **Base API URL**: https://api.agari.com
- **Client ID**: Your Client ID
- **Client Secret**: (password field)
- **Data Streams to Collect** (multi-select)
  - Brand Protection Alerts (with nested details)
  - Phishing Defense Policy Events
  - Phishing Defense Threat Categories
  - Brand Protection Threat Feed URL Submissions (IoC)
  - Phishing Response Investigation Attachments
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

