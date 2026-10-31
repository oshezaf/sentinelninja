# Gambit Security Policy Issues (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GambitSecurity.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GambitSecurityPush` |
| **Publisher** | Gambit Security |
| **Used in Solutions** | [GambitSecurity](../solutions/gambitsecurity.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [GambitSecurity_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/Data%20Connectors/GambitSecurity_ccf/GambitSecurity_ConnectorDefinition.json) |
| **DCR Definition Files** | [GambitSecurity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/Data%20Connectors/GambitSecurity_ccf/GambitSecurity_DCR.json) |
| **CCF Configuration** | [GambitSecurity_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/Data%20Connectors/GambitSecurity_ccf/GambitSecurity_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#gambit-security-policy-issues-push) |

The [Gambit Security](https://gambit.security/) connector provides the capability to push Gambit Security policy issues, enriched with resource, affected-system, and policy context, into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GambitPoliciesIssues_CL`](../tables/gambitpoliciesissues-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector provisions the Log Analytics table and Data Collection Rule (DCR) that Gambit Security pushes policy issues into via the Microsoft Sentinel Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Gambit Security connector resources

**2. Push your logs into the workspace**

Use the following parameters to configure Gambit Security to send policy issues to the workspace.
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
- **Policy Issues Stream Name**: `Custom-GambitPoliciesIssues`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

