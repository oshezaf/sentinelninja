# ⚠️ Citrix Analytics (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CitrixAnalyticsDefinition` |
| **Publisher** | Citrix |
| **Used in Solutions** | [Citrix Analytics CCF](../solutions/citrix-analytics-ccf.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [CitrixAnalytics_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20CCF/Data%20Connectors/CitrixAnalytics_CCF/CitrixAnalytics_Definition.json) |
| **CCF Configuration** | [CitrixAnalytics_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Analytics%20CCF/Data%20Connectors/CitrixAnalytics_CCF/CitrixAnalytics_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

Citrix Analytics integration with Microsoft Sentinel helps you to export data analyzed for the events(SPA, Security) from Citrix Analytics into Microsoft Sentinel environment. You can create custom dashboards, analyze data from other sources along with that from Citrix Analytics and create custom workflows using Logic Apps to monitor and mitigate the events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CitrixAnalytics_CVAD_Events_V1_CL`](../tables/citrixanalytics-cvad-events-v1-cl.md) | ? | ✓ | ? |
| [`CitrixAnalytics_SPA_Events_V1_CL`](../tables/citrixanalytics-spa-events-v1-cl.md) | ? | ✓ | ? |
| [`CitrixAnalytics_indicatorEventDetails_V1_CL`](../tables/citrixanalytics-indicatoreventdetails-v1-cl.md) | ? | ✓ | ? |
| [`CitrixAnalytics_indicatorSummary_V1_CL`](../tables/citrixanalytics-indicatorsummary-v1-cl.md) | ? | ✓ | ? |
| [`CitrixAnalytics_riskScoreChange_V1_CL`](../tables/citrixanalytics-riskscorechange-v1-cl.md) | ? | ✓ | ? |
| [`CitrixAnalytics_userProfile_V1_CL`](../tables/citrixanalytics-userprofile-v1-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rules. Typically requires Azure RBAC Owner or User Access Administrator role.
- **Licensing**: Entitlements to Citrix Analytics in Citrix Cloud. Please review [Citrix Tool License Agreement.](https://aka.ms/sentinel-citrixanalyticslicense-readme)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provision Required Permissions**

Click Deploy to provision the required Azure resources (Log Analytics tables, Data Collection Rule, and Entra app registration) and enable Citrix Analytics to securely push data into Microsoft Sentinel via the Azure Monitor Logs Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Citrix Analytics Connector Resources

**2. Configure your integration in the Citrix Analytics Platform**

Use the following parameters to configure your integration in the Citrix Analytics Platform.
- **Directory ID (Tenant ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID (Client ID)**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret (Credential Secret) (THIS SECRET WILL NOT BE VISIBLE AFTER LEAVING THIS PAGE)**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint (URL)**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID (Rule ID)**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

