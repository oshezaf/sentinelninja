# Trellix Endpoint Security (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TrellixConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Trellix](../solutions/trellix.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Trellix_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trellix/Data%20Connectors/Trellix_CCF/Trellix_DataConnectorDefinition.json) |
| **CCF Configuration** | [Trellix_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trellix/Data%20Connectors/Trellix_CCF/Trellix_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |

The [Trellix Endpoint Security](https://www.trellix.com/) data connector enables you to ingest security events from Trellix ePO (ePolicy Orchestrator) into Microsoft Sentinel. This connector uses OAuth2 client credentials authentication and automatically handles pagination to collect comprehensive endpoint security data including threat detections, analyzer information, source and target system details, and threat response actions.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TrellixEvents_CL`](../tables/trellixevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. API Configuration**

Configure your Trellix ePO API connection.
- **API Base URL**: https://api.manage.trellix.com
## Authentication

Provide your API key for authentication. This will be sent in the x-api-key header.
- **API Key**: (password field)

ℹ️ The API key will be securely stored and used for authentication with the Trellix ePO API.

**2. Authentication Configuration**

Configure OAuth2 authentication credentials.
- **Token endpoint**: https://iam.cloud.trellix.com/iam/v1.0/token
### OAuth2 Configuration
Configure OAuth2 client credentials for API access. Read about the Trellix API authorization model at https://developer.manage.trellix.com/public/mvision/docs/umam
- **Client ID**: Your client ID
- **Client Secret**: (password field)

ℹ️ OAuth2 authentication provides secure access to your API endpoints.

**3. Enable Connector**

Activate the Trellix Endpoint Security connector
### Connector Activation

Review your configuration and enable the connector to start collecting security events.
- Click 'Connect Trellix Endpoint Security' to establish connection
### Post-Connection

After connecting, monitor the connector status in the **Data connectors** page. Data should begin appearing within 5-10 minutes.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

