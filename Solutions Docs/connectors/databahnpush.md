# DataBahn

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/databahn.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DataBahnPush` |
| **Publisher** | DataBahn |
| **Used in Solutions** | [Databahn](../solutions/databahn.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [DataBahn_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Databahn/Data%20Connectors/DataBahn_PUSH_CCP/DataBahn_connectorDefinition.json) |
| **CCF Configuration** | [DataBahn_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Databahn/Data%20Connectors/DataBahn_PUSH_CCP/DataBahn_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [DataBahn](https://databahn.ai/) connector provides the capability to push real-time platform telemetry from your DataBahn environment directly into Microsoft Sentinel using the Codeless Connector Framework (CCF) Push pattern. This connector ingests audit logs, operational alerts, and device inventory into custom Log Analytics tables for analysis, alerting, and visualization.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`databahn_alerts_CL`](../tables/databahn-alerts-cl.md) | ? | ✓ | ? |
| [`databahn_audit_logs_CL`](../tables/databahn-audit-logs-cl.md) | ? | ✓ | ? |
| [`databahn_device_inventory_CL`](../tables/databahn-device-inventory-cl.md) | ? | ✓ | ? |

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

This connector enables your DataBahn platform to push audit logs, alerts, and device inventory directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy DataBahn connector resources

**2. Configure Your DataBahn Platform**

Use the following parameters to configure your DataBahn Highway destination to push data to the workspace.
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
- **Audit Logs Stream Name**: `Custom-databahn_audit_logs`
- **Alerts Stream Name**: `Custom-databahn_alerts`
- **Device Inventory Stream Name**: `Custom-databahn_device_inventory`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

