# Sonrai Security Push Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SonraiSecurity/Workbooks/Images/Logo/Sonrai.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SonraiSecurityPush` |
| **Publisher / Vendor** | Sonrai |
| **Source Product** | Security Push |
| **Used in Solutions** | [SonraiSecurity](../solutions/sonraisecurity.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [SonraiSecurity_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Data%20Connectors/SonraiSecurity_ccp/SonraiSecurity_Definition.json) |
| **DCR Definition Files** | [SonraiSecurity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Data%20Connectors/SonraiSecurity_ccp/SonraiSecurity_DCR.json) |
| **CCF Configuration** | [SonraiSecurity_poller.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonraiSecurity/Data%20Connectors/SonraiSecurity_ccp/SonraiSecurity_poller.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Sonrai Security](https://sonraisecurity.com) connector provides the capability to ingest Sonrai ticket data into Microsoft Sentinel. Use this data connector to integrate with Sonrai Security and get Sonrai tickets sent directly to Microsoft Sentinel for threat detection and investigation.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SonraiSecurityTickets_CL`](../tables/sonraisecuritytickets-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector reads data from the tables that Sonrai Security uses in a Microsoft Analytics Workspace. When [data forwarding](https://sonraisecurity.com/docs) is enabled in Sonrai Security, raw ticket data is sent to the Microsoft Sentinel Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Sonrai Security connector resources

**2. Push your logs into the workspace**

Use the following parameters to configure Sonrai Security to send the logs to the workspace.
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
- **Tickets Stream Name**: `Custom-SonraiSecurityTickets`

**3. Configure Sonrai Security**

Configure the Sonrai Security platform with the Azure connection details to enable data forwarding to Microsoft Sentinel.
#### Configure Microsoft Sentinel Integration in Sonrai Security

1. Navigate to the Sonrai Security dashboard.
2. On the bottom left panel, click on **Integrations**.
3. Select **Microsoft Sentinel** from the list of available integrations.
4. Fill in the form using the information provided in Step 2 above:
   - **Tenant ID**
   - **Application (client) ID**
   - **Client Secret Value**
   - **Data Collection Endpoint URL**
   - **DCR Immutable ID**
   - **Stream Name**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

