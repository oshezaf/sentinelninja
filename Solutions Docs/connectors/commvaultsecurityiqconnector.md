# Commvault Security IQ (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Commvault-Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CommvaultSecurityIQConnector` |
| **Publisher** | Commvault |
| **Used in Solutions** | [Commvault Security IQ](../solutions/commvault-security-iq.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CommvaultSecurityIQ_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/Data%20Connectors/CommvaultSecurityIQ_CCF/CommvaultSecurityIQ_ConnectorDefinition.json) |
| **DCR Definition Files** | [CommvaultSecurityIQ_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/Data%20Connectors/CommvaultSecurityIQ_CCF/CommvaultSecurityIQ_DCR.json) |
| **CCF Configuration** | [CommvaultSecurityIQ_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Commvault%20Security%20IQ/Data%20Connectors/CommvaultSecurityIQ_CCF/CommvaultSecurityIQ_PollerConfig.json) |
| **CCF Capabilities** | `APIKey` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |

The Commvault Security IQ data connector ingests anomaly detection events from Commvault environments into Microsoft Sentinel, enabling detection and response for threats targeting backup infrastructure such as ransomware and suspicious file operations. Events are stored in the `CommvaultAlertsCCF_CL` table.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommvaultAlertsCCF_CL`](../tables/commvaultalertsccf-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read, write, and delete permissions are required.

**Custom Permissions:**
- **Commvault API Credentials**: A Commvault environment Base URL and a valid API token are required to authorize API requests.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connector Management**

Manage your Commvault Security IQ connector instances. Each instance connects to one Commvault environment.
## Commvault Security IQ Connector Instances

This connector polls Commvault every 30 minutes and ingests threat anomaly events into the `CommvaultAlertsCCF_CL` table.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Environment Endpoint**
- **Status**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Commvault Security IQ Connector**

*Connect to a Commvault environment*

When you click the "Add Connector" button in the portal, a configuration form will open. You'll need to provide:

## API Configuration

Provide your Commvault environment endpoint URL and API token.

- **Commvault Environment Endpoint URL** (required): https://your-environment.metallic.io/commandcenter/api
- **API token** (required): Enter your Commvault API token

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

