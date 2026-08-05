# Transmit Security Data Connector (via Codeless Connector Framework)

<img src="https://github.com/Azure/Azure-Sentinel/raw/refs/heads/master/Logos/Transmit_Security_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TransmitSecurityConnectorDefinition` |
| **Publisher** | Transmit Security |
| **Used in Solutions** | [TransmitSecurity](../solutions/transmitsecurity.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TransmitSecurityActivity_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity/Data%20Connectors/TransmitSecurityActivity_CCF/TransmitSecurityActivity_ConnectorDefinition.json) |
| **DCR Definition Files** | [TransmitSecurityActivity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity/Data%20Connectors/TransmitSecurityActivity_CCF/TransmitSecurityActivity_DCR.json) |
| **CCF Configuration** | [TransmitSecurityActivity_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TransmitSecurity/Data%20Connectors/TransmitSecurityActivity_CCF/TransmitSecurityActivity_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `POST` |

The [Transmit Security](https://transmitsecurity.com/) data connector provides the capability to ingest Transmit Security activity events into Microsoft Sentinel through the REST API. Refer to API documentation for more information. The connector provides the ability to get events from Transmit Security platform.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TransmitSecurityActivity_V2_CL`](../tables/transmitsecurityactivity-v2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Transmit Security API access**: **Transmit Security API** credentials are required: Client ID, Client Secret, Token Endpoint, and Pull Endpoint.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Transmit Security API access**

Before using the API, you need to obtain your API credentials from the Transmit Security platform.
1. Log in to your Transmit Security admin console.
2. Navigate to API credentials section.
3. Create a new API client or use existing credentials.
4. Note down the following:
   - Client ID
   - Client Secret
   - Token Endpoint URL
   - Pull Endpoint URL (events API endpoint)

These credentials will be required in the next step.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Endpoint**
- **Stream**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect to Transmit Security**

*Connect to Transmit Security API*

When you click the "Connect" button in the portal, a configuration form will open. You'll need to provide:

- **Client ID** (required): Transmit Security Client ID
- **Client Secret** (required): Transmit Security Client Secret
- **Token Endpoint** (required): Enter the OAuth2 token endpoint URL
- **Pull Endpoint** (required): Enter the events pull endpoint URL

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

