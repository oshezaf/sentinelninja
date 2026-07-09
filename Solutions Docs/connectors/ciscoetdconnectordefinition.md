# Cisco Email Threat Defense (ETD)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoETDConnectorDefinition` |
| **Publisher** | Cisco |
| **Source Vendor** | Cisco *(basis: publisher)* |
| **Used in Solutions** | [Cisco ETD](../solutions/cisco-etd.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoETD_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ETD/Data%20Connectors/CiscoETD_ccp/CiscoETD_connectorDefinition.json) |
| **DCR Definition Files** | [CiscoETD_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ETD/Data%20Connectors/CiscoETD_ccp/CiscoETD_DCR.json) |
| **CCF Configuration** | [CiscoETD_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ETD/Data%20Connectors/CiscoETD_ccp/CiscoETD_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `POST`, `MvExpand`, `Nested` |

The [Cisco Email Threat Defense (ETD)](https://docs.cmd.cisco.com/en/Content/secure-email-threat-defense-user-guide/homeUG.htm) data connector provides the capability to ingest [message events](https://docs.cmd.cisco.com/en/Content/secure-email-threat-defense-user-guide/Messages/messages.htm) from Cisco ETD into Microsoft Sentinel using the [Log Export API](https://developer.cisco.com/docs/message-search-api/log-export-api/).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoETDv2_CL`](../tables/ciscoetdv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Cisco ETD API Credentials**: Cisco ETD API credentials are required. Refer to the [Cisco ETD API Authentication documentation](https://developer.cisco.com/docs/message-search-api/authentication/) for more information.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Cisco ETD API**

Provide your Cisco ETD API endpoint, Client ID, Client Secret, and API Key. These credentials can be obtained from your Cisco ETD administrator or through the Cisco ETD management console.
- **Base Endpoint URL**: https://api.us.etd.cisco.com
- **Client ID**: Enter OAuth2 Client ID
- **Client Secret**: (password field)
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

