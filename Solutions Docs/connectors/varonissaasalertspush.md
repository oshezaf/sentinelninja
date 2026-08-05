# Varonis SaaS (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/VaronisLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VaronisSaaSAlertsPush` |
| **Publisher** | Varonis |
| **Used in Solutions** | [VaronisSaaS](../solutions/varonissaas.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [VaronisSaaS_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS/Data%20Connectors/VaronisSaaS_CCF/VaronisSaaS_ConnectorDefinition.json) |
| **DCR Definition Files** | [VaronisSaaS_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS/Data%20Connectors/VaronisSaaS_CCF/VaronisSaaS_DCR.json) |
| **CCF Configuration** | [VaronisSaaS_DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VaronisSaaS/Data%20Connectors/VaronisSaaS_CCF/VaronisSaaS_DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#varonis-saas) |

The [Varonis SaaS](https://www.varonis.com/) connector provides the capability to push real-time DatAlert security alerts from your Varonis application directly into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. Varonis prioritizes deep data visibility, classification capabilities, and automated remediation for data access. This connector ingests alert severity, event types, user information, and related details into a custom Log Analytics table for analysis, alerting, and visualization.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VaronisAlerts_CL`](../tables/varonisalerts-cl.md) 🔶 | ✓ | ✓ | ✓ |

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

This connector enables your Varonis SaaS application to push DatAlert security alerts directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application
Clicking on "Deploy" will trigger the creation of a Log Analytics table and a Data Collection Rule (DCR).
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Varonis SaaS Push connector resources

**2. Configure Your Varonis Application**

Use the following parameters to configure your Varonis SaaS application to push DatAlert alerts to the workspace.
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
- **Stream Name**: `Custom-VaronisSaaSAlerts`
#### Configure Varonis SaaS Application
Update your Varonis SaaS application configuration with the above credentials to enable DatAlert alert push to Microsoft Sentinel.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

