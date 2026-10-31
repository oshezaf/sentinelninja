# Netskope AI SecOps

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Netskope.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetskopeAISecOps` |
| **Publisher** | Netskope |
| **Used in Solutions** | [Netskopev2](../solutions/netskopev2.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [NetskopeAISecOps_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAISecOps_Push_CCP/NetskopeAISecOps_connectorDefinition.json) |
| **DCR Definition Files** | [NetskopeAISecOps_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAISecOps_Push_CCP/NetskopeAISecOps_DCR.json) |
| **CCF Configuration** | [NetskopeAISecOps_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAISecOps_Push_CCP/NetskopeAISecOps_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#netskope-ai-secops) |

The Netskope AI SecOps connector pushes AI SecOps case and risk-scoring events (case lifecycle, investigation enrichment, and entity risk-score changes) directly into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern and the Azure Monitor Logs Ingestion API. Events are written to the `NetskopeAISecOps_CL` table; parse the `Data` column at query time with the `NetskopeAISecOpsEvents` function.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAISecOps_CL`](../tables/netskopeaisecops-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on the data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.
- **Netskope AI SecOps admin console**: Permission to configure an outbound event destination in the Netskope tenant's AI SecOps settings.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables your Netskope tenant's AI SecOps module to push case and risk-scoring events directly to Microsoft Sentinel via the Azure Monitor Logs Ingestion API.
#### Automated configuration and secure data ingestion with Entra application
Clicking on "Deploy push connector resources" will trigger the creation of the `NetskopeAISecOps_CL` Log Analytics table and a data collection rule (DCR) and data collection endpoint (DCE). It will then create a Microsoft Entra app registration, link the DCR to it, and set the entered secret in the application. This setup enables Netskope to send AI SecOps events securely to the DCR using an Entra token.
Deploy push connector resources

**2. Configure the event destination in the Netskope AI SecOps admin console**

Copy the values below into the **Outbound webhook** for the *Microsoft Sentinel* destination in the Netskope AI SecOps admin console (Auth type: OAuth2 client credentials). The fields are listed in the same order as the webhook form. Refer to the [Netskope Community guide](https://community.netskope.com/discussions-37/sending-netskope-ai-secops-events-to-microsoft-sentinel-8909) for the console steps.

>**NOTE:** The Token URL is generated for the Microsoft Entra authority of the Azure cloud this workspace is deployed in (commercial or Government), so copy it exactly as shown.
- **Destination URL (Data Collection Endpoint)**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Token URL**: `[concat(environment().authentication.loginEndpoint, '{0}/oauth2/v2.0/token')]`
- **Client ID (Entra Application ID)**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client secret (Entra application secret value)**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Scope**: `https://monitor.azure.com/.default`
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-NetskopeAISecOps_CL`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

