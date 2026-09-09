# ⚠️ StratoSecure Security Platform

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/StratoSecure/Logos/stratosecure.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `StratoSecurePush` |
| **Publisher** | Soluciones Etech Corp |
| **Used in Solutions** | [StratoSecure](../solutions/stratosecure.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [StratoSecure_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Data%20Connectors/StratoSecure_PUSH_CCP/StratoSecure_connectorDefinition.json) |
| **DCR Definition Files** | [StratoSecure_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Data%20Connectors/StratoSecure_PUSH_CCP/StratoSecure_DCR.json) |
| **CCF Configuration** | [StratoSecure_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/StratoSecure/Data%20Connectors/StratoSecure_PUSH_CCP/StratoSecure_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The StratoSecure Security Platform connector ingests ASPM findings, API inventory, remediation, scan summary and exception data pushed from the StratoSecure platform into Microsoft Sentinel via the Logs Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StratoSecure_ApiInventory_CL`](../tables/stratosecure-apiinventory-cl.md) | ? | ✓ | ? |
| [`StratoSecure_Exception_CL`](../tables/stratosecure-exception-cl.md) | ? | ✓ | ? |
| [`StratoSecure_Findings_CL`](../tables/stratosecure-findings-cl.md) | ? | ✓ | ? |
| [`StratoSecure_Remediation_CL`](../tables/stratosecure-remediation-cl.md) | ? | ✓ | ? |
| [`StratoSecure_ScanSummary_CL`](../tables/stratosecure-scansummary-cl.md) | ? | ✓ | ? |

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

This connector enables your StratoSecure platform to push ASPM findings, API inventory, remediation, scan summary and exception data directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy StratoSecure connector resources

**2. Configure Your StratoSecure Platform**

Use the following parameters to configure your StratoSecure platform to push data to the workspace.
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
- **Findings Stream Name**: `Custom-StratoSecure_Findings_CL`
- **API Inventory Stream Name**: `Custom-StratoSecure_ApiInventory_CL`
- **Exception Stream Name**: `Custom-StratoSecure_Exception_CL`
- **Remediation Stream Name**: `Custom-StratoSecure_Remediation_CL`
- **Scan Summary Stream Name**: `Custom-StratoSecure_ScanSummary_CL`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

