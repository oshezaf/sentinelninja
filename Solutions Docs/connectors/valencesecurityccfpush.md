# Valence Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ValenceSecurityLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ValenceSecurityCcfPush` |
| **Publisher** | Valence Security |
| **Used in Solutions** | [Valence Security](../solutions/valence-security.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ValenceSecurity_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security/Data%20Connectors/ValenceSecurity_PUSH_CCP/ValenceSecurity_connectorDefinition.json) |
| **DCR Definition Files** | [ValenceSecurity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security/Data%20Connectors/ValenceSecurity_PUSH_CCP/ValenceSecurity_DCR.json) |
| **CCF Configuration** | [ValenceSecurity_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Valence%20Security/Data%20Connectors/ValenceSecurity_PUSH_CCP/ValenceSecurity_PollerConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Valence Security](https://valencesecurity.com/) connector enables ingestion of Valence SaaS security alerts and audit logs into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. Valence's unified SSPM platform detects SaaS misconfigurations, identity risks, and data exposure across Microsoft 365, Google Workspace, Salesforce, GitHub, Slack, and more. This connector streams `ValenceAlerts_CL` (security alerts) and `ValenceAuditLogs_CL` (platform audit trail) into Microsoft Sentinel for analysis, alerting, and visualization.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValenceAlerts_CL`](../tables/valencealerts-cl.md) | ? | ✓ | ? |
| [`ValenceAuditLogs_CL`](../tables/valenceauditlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires the Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign the Monitoring Metrics Publisher role on the data collection rule (DCR). Typically requires the Azure RBAC Owner or User Access Administrator role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

Clicking **Deploy push connector resources** will create the Data Collection Endpoint (DCE), Data Collection Rule (DCR), and the custom log tables (`ValenceAlerts_CL` and `ValenceAuditLogs_CL`). It will also create a Microsoft Entra app registration with a client secret and grant it the Monitoring Metrics Publisher role on the DCR, enabling Valence to push data securely via the Azure Monitor Logs Ingestion API.

This replaces the legacy Workspace ID and Primary Key configuration — **no shared keys are used**.
#### Automated deployment of Azure resources
Clicking **Deploy push connector resources** creates the DCE, DCR, and custom log tables. An Entra app registration with a client secret is also created and granted the Monitoring Metrics Publisher role on the DCR.
Deploy push connector resources

**2. Configure the Valence Platform**

Provide the values below to your Valence Security administrator. In the Valence Platform, navigate to **Settings → Configuration → SIEM Integration → Microsoft Sentinel** and enter these values to enable the CCF Push integration.
- **Tenant ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra Application Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI (LogIngestionURL)**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **DCR Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Alerts Stream Name**: `Custom-ValenceAlerts`
- **Audit Logs Stream Name**: `Custom-ValenceAuditLogs`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

