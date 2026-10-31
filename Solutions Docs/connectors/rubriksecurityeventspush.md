# Rubrik Security Cloud Security Events (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/rubrikLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `RubrikSecurityEventsPush` |
| **Publisher** | Rubrik |
| **Used in Solutions** | [RubrikSecurityCloud](../solutions/rubriksecuritycloud.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [RubrikSecurityCloud_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Data%20Connectors/RubrikCCFConnector/RubrikSecurityCloud_ConnectorDefinition.json) |
| **DCR Definition Files** | [RubrikSecurityCloud_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Data%20Connectors/RubrikCCFConnector/RubrikSecurityCloud_DCR.json) |
| **CCF Configuration** | [RubrikSecurityCloud_DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RubrikSecurityCloud/Data%20Connectors/RubrikCCFConnector/RubrikSecurityCloud_DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#rubrik-security-cloud-security-events-push) |

The Rubrik Security Cloud Security Events (Push) connector ingests security events from Rubrik Security Cloud into Microsoft Sentinel in real time using the Codeless Connector Framework (CCF) Push pattern. Rubrik Security Cloud webhooks authenticate with OAuth 2.0 and post events directly to the Azure Monitor Logs Ingestion API, with no intermediate compute to deploy or operate. Events are routed to per-category tables for anomalies, ransomware analysis, threat hunts, and all other events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Rubrik_Anomaly_Data_CL`](../tables/rubrik-anomaly-data-cl.md) 🔶 | ? | ✓ | ? |
| [`Rubrik_Events_Data_CL`](../tables/rubrik-events-data-cl.md) 🔶 | ? | ✓ | ? |
| [`Rubrik_Ransomware_Data_CL`](../tables/rubrik-ransomware-data-cl.md) 🔶 | ? | ✓ | ? |
| [`Rubrik_ThreatHunt_Data_CL`](../tables/rubrik-threathunt-data-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.
- **Rubrik Security Cloud**: An account with permission to create and manage webhooks in Rubrik Security Cloud.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy the ingestion resources**

This connector lets Rubrik Security Cloud push security events directly to Microsoft Sentinel through the Azure Monitor Logs Ingestion API.
#### Automated configuration
Selecting **Deploy** creates the Log Analytics tables and a Data Collection Rule (DCR), registers a Microsoft Entra application, links the DCR to that application, and assigns the required role. Rubrik Security Cloud then uses the resulting credentials to send events securely to the DCR.
Deploy Rubrik Security Cloud push connector resources

**2. Collect the connection details**

After deployment completes, copy these values. You will enter them when creating the webhooks in Rubrik Security Cloud.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint Uri**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**3. Create the webhooks in Rubrik Security Cloud**

Create one webhook per event category. Each webhook posts to the same Data Collection Endpoint but targets a different stream, which determines the destination table.
#### Webhook authentication
In Rubrik Security Cloud, create each webhook with the **Microsoft Sentinel** provider and set the authentication type to **OAuth 2.0** using these values:

| Setting | Value |
| --- | --- |
| Grant type | `client_credentials` |
| Token URL | `<Microsoft Entra ID Token Endpoint>/<Tenant ID>/oauth2/v2.0/token` |
| Client ID | `<Application ID>` |
| Client secret | `<Application Secret>` |
| Scope | `https://monitor.azure.com//.default` |

Replace `<Microsoft Entra ID Token Endpoint>` with the Microsoft Entra ID authentication endpoint for your Azure cloud, and `<Tenant ID>`, `<Application ID>` and `<Application Secret>` with the values for the app registration created above.

#### Webhook URLs
Use the following URL for each webhook, replacing `<Data Collection Endpoint Uri>` and `<Data Collection Rule Immutable ID>` with the values copied above, and `<Stream Name>` with the stream for that event category:

`<Data Collection Endpoint Uri>/dataCollectionRules/<Data Collection Rule Immutable ID>/streams/<Stream Name>?api-version=2023-01-01`

| Event category | Stream name | Destination table |
| --- | --- | --- |
| Anomaly | `Custom-Rubrik_Anomaly_Data` | `Rubrik_Anomaly_Data_CL` |
| Ransomware analysis | `Custom-Rubrik_Ransomware_Data` | `Rubrik_Ransomware_Data_CL` |
| Threat hunt | `Custom-Rubrik_ThreatHunt_Data` | `Rubrik_ThreatHunt_Data_CL` |
| All other events | `Custom-Rubrik_Events_Data` | `Rubrik_Events_Data_CL` |

Scope each webhook's event-type and severity filters to the matching category so that events are routed to the correct table.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

